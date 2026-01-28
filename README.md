# IDOC - Portal de Documentação e Ferramentas

Resumo rápido
- Projeto: site estático com documentação e ferramentas para integração SAP (IDoc, master data, mapeamento, validação).
- Stack: HTML, CSS e JavaScript (sem build). Arquivos principais na raiz, incluindo `index.html`, `gerador_queries.html`, `dados_campos.js` e `estilos.css`.
- Observação: `dados_campos.js` é um dicionário grande de campos usado pelas ferramentas (pode ser carregado sob demanda para melhoria de performance).

Arquivos relevantes
- `index.html` — painel principal / navegação.
- `gerador_queries.html` — ferramenta SQL Builder (SUBSTRING, TRANSLATE, CONCAT, CASE WHEN, LPAD, etc.).
- `dados_campos.js` — dicionário global `GLOBAL_FIELDS` (muitos campos).
- `estilos.css` — estilos globais.
- `test_gerador_all.js`, `package.json` — harness de teste headless com `jsdom` que valida todas as ferramentas do `gerador_queries.html`.

Como testar localmente
1) Servir site estático (opção simples com Python):

```bash
# Python 3
python -m http.server 8000
# então abra http://localhost:8000/gerador_queries.html no navegador
```

ou usar qualquer servidor estático (VSCode Live Server, http-server, etc.).

2) Testes headless (`jsdom`)

```bash
npm install
npm test
```

O script `test_gerador_all.js` executa uma suíte completa cobrindo: `substring`, `translate`, `concat`, `lpad`, `dateFormat`, `joinExpansion` e `caseWhen`. Ele depende apenas de `jsdom` e do próprio `gerador_queries.html` presente na pasta.

Notas de desenvolvimento
- Já foram aplicadas correções em `gerador_queries.html` para:
  - permitir valores fixos (inclusive espaços) no `CONCAT`;
  - melhorar alternância entre input de texto e campos (Step/GUID) no `CONCAT` e no `CASE WHEN`;
  - restringir iteração de linhas do `CASE WHEN` apenas ao container correto (`#whenClausesContainer`).
- Em headless tests foi necessário ajustar como o toggle é simulado; em runtime normal no navegador o toggle funciona via clique.

Próximos passos recomendados
- Modularizar `dados_campos.js` e implementar lazy-loading para melhorar performance.
- Adicionar testes para `CONCAT` e outras ferramentas.
- Validar a UI no navegador (mobile e desktop) e revisar acessibilidade básica.

Se quiser, eu posso:
- transformar os testes em um pacote de testes mais completo (ex: jest + jsdom),
- abrir `gerador_queries.html` no navegador e fazer testes interativos,
- ou começar a modularizar `dados_campos.js` para lazy-load.

---
Gerado automaticamente — instruções e alterações recentes estão no histórico de commits locais.
