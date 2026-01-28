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

    console.log('\nTodos os testes passaram.');
    process.exit(0);

  } catch (e) {
    console.error('Falha nos testes:', e);
    process.exit(2);
  }
})();
