const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const htmlPath = path.resolve(__dirname, 'gerador_queries.html');
const html = fs.readFileSync(htmlPath, 'utf8');

const dom = new JSDOM(html, { runScripts: 'dangerously', resources: 'usable', url: 'file://' + htmlPath });
const { window } = dom;
const doc = window.document;

// Mocks
window.alert = (msg) => { console.log('ALERT:', msg); };
window.navigator.clipboard = { writeText: async () => {} };
window.localStorage = { getItem: () => '[]', setItem: () => {}, removeItem: () => {}, clear: () => {} };

function wait(ms) { return new Promise(res => setTimeout(res, ms)); }

(async () => {
  await wait(200);

  try {
    if (!window.generateQuery) throw new Error('generateQuery não encontrado');

    // Set global context
    doc.getElementById('globalStep').value = '01';
    doc.getElementById('globalGuid').value = 'GUID1';

    // ---------- SUBSTRING ----------
    doc.getElementById('subStartInput').value = '2';
    doc.getElementById('subEndInput').value = '5';
    window.generateQuery('substring');
    await wait(20);
    const subOut = doc.getElementById('subResultQuery').value;
    console.log('\n[SUBSTRING] ' + subOut);
    if (!subOut.includes("substring(ans01.data->'values'->>'GUID1', 2, 5)")) throw new Error('SUBSTRING inválido');

    // ---------- TRANSLATE ----------
    doc.getElementById('translateFromInput').value = '.';
    doc.getElementById('translateToInput').value = ',';
    window.generateQuery('translate');
    await wait(20);
    const trOut = doc.getElementById('translateResultQuery').value;
    console.log('\n[TRANSLATE] ' + trOut);
    if (!trOut.includes("translate(ans01.data->'values'->>'GUID1', '.', ',')") && !trOut.includes("translate(ans01.data->'values'->>'GUID1', '.', ',')")) throw new Error('TRANSLATE inválido');

    // ---------- CONCAT ----------
    const concatContainer = doc.getElementById('concatItemsContainer');
    concatContainer.innerHTML = '';
    // 1) fixed text
    window.addConcatItem();
    await wait(10);
    let item1 = concatContainer.querySelector('.concat-item .cw-col');
    item1.querySelector('.concat-input').value = 'HELLO';

    // 2) single space
    window.addConcatItem();
    await wait(10);
    let item2 = concatContainer.querySelectorAll('.concat-item .cw-col')[1];
    item2.querySelector('.concat-input').value = ' ';

    // 3) GLOBAL token
    window.addConcatItem();
    await wait(10);
    let item3 = concatContainer.querySelectorAll('.concat-item .cw-col')[2];
    item3.querySelector('.concat-input').value = 'GLOBAL';

    // 4) field
    window.addConcatItem();
    await wait(10);
    let item4 = concatContainer.querySelectorAll('.concat-item .cw-col')[3];
    item4.dataset.type = 'field';
    item4.querySelector('.concat-step').value = '02';
    item4.querySelector('.concat-guid').value = 'GUID2';

    window.generateQuery('concat');
    await wait(20);
    const concatOut = doc.getElementById('concatResultQuery').value;
    console.log('\n[CONCAT] ' + concatOut);
    if (!concatOut.includes("'HELLO'") || !concatOut.includes("' '") || !concatOut.includes("ans01.data->'values'->>'GUID1'") || !concatOut.includes("ans02.data->'values'->>'GUID2'")) {
      throw new Error('CONCAT inválido');
    }

    // ---------- LPAD ----------
    doc.getElementById('lpadLengthInput').value = '10';
    window.generateQuery('lpad');
    await wait(20);
    const lpadOut = doc.getElementById('lpadResultQuery').value;
    console.log('\n[LPAD] ' + lpadOut);
    if (!lpadOut.includes("lpad(")) throw new Error('LPAD inválido');

    // ---------- DATE FORMAT ----------
    doc.getElementById('dateFormatInputMask').value = 'YYYY-MM-DD';
    doc.getElementById('dateFormatOutputMask').value = 'DD/MM/YYYY';
    window.generateQuery('dateFormat');
    await wait(20);
    const dateOut = doc.getElementById('dateFormatResultQuery').value;
    console.log('\n[DATE FORMAT] ' + dateOut);
    if (!dateOut.includes('to_char') || !dateOut.includes('YYYY-MM-DD') || !dateOut.includes('DD/MM/YYYY')) throw new Error('DATE FORMAT inválido');

    // ---------- JOIN EXPANSION ----------
    doc.getElementById('joinTenantInput').value = 'tenant1';
    doc.getElementById('joinAliasInput').value = 'a1';
    doc.getElementById('joinGuidInput').value = 'GJ1';
    window.generateQuery('joinExpansion');
    await wait(20);
    const joinOut = doc.getElementById('joinResultQuery').value;
    console.log('\n[JOIN] ' + joinOut);
    if (!joinOut.includes('JOIN tenant1.answers a1')) throw new Error('JOIN inválido');

    // ---------- CASE WHEN ----------
    // reuse existing test logic: ensure at least one when clause
    const whenContainer = doc.getElementById('whenClausesContainer');
    whenContainer.innerHTML = '';
    window.addWhenClause();
    await wait(10);
    const r = whenContainer.querySelector('.cw-row');
    r.querySelector('.when-input').value = 'A';
    r.querySelector('.then-input').value = 'B';
    window.generateQuery('caseWhen');
    await wait(20);
    const caseOut = doc.getElementById('caseResultQuery').value;
    console.log('\n[CASE WHEN] ' + caseOut);
    if (!caseOut.includes('CASE') || !caseOut.includes("WHEN ans01.data->'values'->>'GUID1' = 'A'")) throw new Error('CASE WHEN inválido');

    console.log('\n[JSON VALIDATOR] Iniciando testes do validador de campos (Recursive)...');

    // ---------- JSON FIELD VALIDATOR ----------
    const validatorHtml = fs.readFileSync(path.resolve(__dirname, 'json_field_validator.html'), 'utf8');
    const vdom = new JSDOM(validatorHtml, { runScripts: 'dangerously', resources: 'usable', url: 'file://' + path.resolve(__dirname, 'json_field_validator.html') });
    const vwin = vdom.window;
    
    // Polyfills
    vwin.alert = (m) => { console.log('[Validator Alert]', m); };
    vwin.navigator = { clipboard: { writeText: async () => {} } };
    
    // Load scripts
    const dados = fs.readFileSync(path.resolve(__dirname, 'dados_campos.js'), 'utf8');
    vwin.eval(dados);
    try {
      const dlabels = fs.readFileSync(path.resolve(__dirname, 'scripts', 'doc_labels.js'), 'utf8');
      vwin.eval(dlabels);
    } catch(e) {}

    // Init
    await wait(100);
    try { if (typeof vwin.populateDocSelect === 'function') vwin.populateDocSelect(); } catch(e){}

    const vdoc = vwin.document;
    const nestedJson = {
        "CREMAS06": {
            "E1LFA1M": {
                "STRAS": "PC PRESIDENTE VARGAS",
                "NAME1": "CARLA TEIXEIRA COUTO",
                "E1LFB1M": [
                    { "ZTERM": "C030", "BUKRS": "1000" }
                ]
            }
        }
    };

    vdoc.getElementById('jsonInput').value = JSON.stringify(nestedJson, null, 2);
    
    // Run validation
    if (typeof vwin.runValidation !== 'function') {
      const match = /<script>([\s\S]*?)<\/script>/i.exec(validatorHtml); // Naive extraction if script tags not run
      // Actually JSDOM runScripts: 'dangerously' should handle inline scripts if structure is correct.
      // But sometimes timing matters.
      if (match && match[1]) vwin.eval(match[1]);
    }
    
    // Ensure scripts loaded
    await wait(100);
    vwin.runValidation();
    await wait(50);

    const resultsEl = vdoc.getElementById('results');
    const logs = Array.from(resultsEl.querySelectorAll('.log-item'));
    const logTexts = logs.map(l => l.textContent.replace(/\s+/g, ' ').trim());

    console.log(`\n[JSON VALIDATOR] Encontrados ${logs.length} itens de log.`);
    
    // Check specific nested fields
    const hasStras = logTexts.some(t => t.includes('STRAS') && (t.includes('OK') || t.includes('✓')));
    const hasBukrs = logTexts.some(t => t.includes('BUKRS') && (t.includes('OK') || t.includes('✓')));
    const hasUnknown = logTexts.some(t => t.includes('CREMAS06') || t.includes('Campo desconhecido'));

    if (!hasStras) {
        console.log('Logs:', logTexts);
        throw new Error('JSON Validator: Falha ao validar STRAS (aninhado)');
    }
    if (!hasBukrs) {
        console.log('Logs:', logTexts);
        throw new Error('JSON Validator: Falha ao validar BUKRS (array aninhado)');
    }
    
    console.log('[JSON VALIDATOR] Sucesso: Campos aninhados validados corretamente.');

    console.log('\nTodos os testes passaram.');
    process.exit(0);

  } catch (e) {
    console.error('Falha nos testes:', e);
    process.exit(2);
  }
})();
