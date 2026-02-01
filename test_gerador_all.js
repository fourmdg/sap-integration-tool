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

    console.log('\n[JSON VALIDATOR] Iniciando testes do validador de campos...');

    // ---------- JSON FIELD VALIDATOR ----------
    const validatorHtml = fs.readFileSync(path.resolve(__dirname, 'json_field_validator.html'), 'utf8');
    const vdom = new JSDOM(validatorHtml, { runScripts: 'dangerously', resources: 'usable', url: 'file://' + path.resolve(__dirname, 'json_field_validator.html') });
    const vwin = vdom.window;
    vwin.alert = (m)=>{};
    vwin.navigator = vwin.navigator || {}; vwin.navigator.clipboard = { writeText: async ()=>{} };
    // expose GLOBAL_FIELDS by loading dados_campos.js contents into the vdom
    const dados = fs.readFileSync(path.resolve(__dirname, 'dados_campos.js'), 'utf8');
    vwin.eval(dados);
    // also load doc_labels mapping into the vdom so selector labels are available
    try{
      const dlabels = fs.readFileSync(path.resolve(__dirname, 'scripts', 'doc_labels.js'), 'utf8');
      vwin.eval(dlabels);
    }catch(e){}
    // attempt to populate selector now that GLOBAL_FIELDS exists
    try{ if (typeof vwin.populateDocSelect === 'function') vwin.populateDocSelect(); }catch(e){}
    // esperar carregamento dos scripts inline
    await wait(200);

    const vdoc = vwin.document;
    vdoc.getElementById('jsonInput').value = JSON.stringify({ BBBNR: '1234567', ANTLF: '1.5', BBBNR_bad: '12A' });
    // selecionar documento de referência conhecido para estes campos
    const sel = vdoc.getElementById('docSelect');
    if (sel) {
      // escolha um arquivo presente em dados_campos.js
      sel.value = 'DOCUMENTACAO_IDOC_CLIENTES.html';
    }
    // run validation (verifica função disponível)
    if (typeof vwin.runValidation !== 'function') {
      // tentar avaliar o script inline extraindo do HTML caso não tenha sido executado
      const match = /<script>([\s\S]*?)<\/script>/i.exec(validatorHtml);
      if (match && match[1]) vwin.eval(match[1]);
      await wait(50);
    }
    vwin.runValidation();
    await wait(20);
    const resultsEl = vdoc.getElementById('results');
    const items = Array.from(resultsEl.children).map(c => ({text: c.textContent.trim(), html: c.outerHTML}));
    console.log('\n[JSON VALIDATOR] items:', items.map(i=>i.text));
    console.log('\n[JSON VALIDATOR] outerHTMLs:', items.map(i=>i.html).join('\n---\n'));
    const vout = items.map(i=>i.text).join(' | ');
    if (!vout.includes('BBBNR: OK')) throw new Error('JSON Validator: BBBNR deveria ser OK');
    if (!vout.includes("ANTLF: OK")) throw new Error('JSON Validator: ANTLF (DEC) deveria ser OK');

    console.log('\nTodos os testes passaram.');
    process.exit(0);

  } catch (e) {
    console.error('Falha nos testes:', e);
    process.exit(2);
  }
})();
