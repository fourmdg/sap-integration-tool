# 4MDG Hub 🔗

Portal de documentação e ferramentas para integração SAP — IDoc, Master Data, mapeamento e validação.

![GitHub Pages](https://img.shields.io/badge/deploy-GitHub%20Pages-blue)
![Astro](https://img.shields.io/badge/Astro-5.x-purple)
![Bun](https://img.shields.io/badge/Bun-1.x-orange)
![Biome](https://img.shields.io/badge/Biome-1.x-green)
![License](https://img.shields.io/badge/license-ISC-green)

## 📋 Visão Geral

Este projeto é um portal estático construído com **Astro** + **Bun** para:

- 📚 **Documentar estruturas IDoc** (DEBMAS, CREMAS, MATMAS, ARTMAS, etc.)
- 🛠️ **Ferramentas de produtividade** (Validador, Mapper, SQL Builder, JSON Formatter)
- 🎓 **Base de conhecimento** (Glossário, Boas Práticas, Troubleshooting)
- 🌙 **Tema Dark/Light** com toggle e persistência

---

## 🚀 Quick Start

```bash
# Instalar dependências
bun install

# Desenvolvimento (porta 4321)
bun run dev

# Build para produção
bun run build

# Preview do build
bun run preview

# Lint + Format (Biome)
bun run lint
bun run lint:fix
bun run format
```

---

## 📁 Estrutura do Projeto

```
4mdg-hub/
├── src/
│   ├── core/                    # Componentes e layouts base
│   │   ├── components/          # Header, Search, ThemeToggle
│   │   ├── layouts/             # BaseLayout.astro
│   │   ├── styles/              # CSS global
│   │   └── types/               # TypeScript interfaces
│   │
│   ├── features/                # Features por domínio
│   │   ├── idocs/               # Páginas de IDoc
│   │   │   ├── components/      # IdocSidebar, SegmentCard, etc.
│   │   │   ├── data/            # Dados dos IDocs (TS)
│   │   │   └── layouts/         # IdocLayout.astro
│   │   │
│   │   └── docs/                # Documentação
│   │       └── layouts/         # DocsLayout.astro
│   │
│   └── pages/                   # Rotas Astro
│       ├── index.astro          # Home
│       ├── docs/                # /docs/*
│       └── idocs/               # /idocs/*
│
├── public/                      # Assets estáticos
│   ├── tools/                   # Ferramentas (HTML legado)
│   ├── shared/                  # JS compartilhado
│   └── assets/                  # CSS para tools
│
└── dist/                        # Build output (gitignored)
```

---

## 🎨 Features

### IDocs Documentados

- **MATMAS** - Materiais
- **ARTMAS** - Varejo
- **DEBMAS** - Clientes
- **CREMAS** - Fornecedores
- **SRVMAS** - Serviços
- **BPMAS** - Business Partners
- **ADRMAS** - Endereços
- **CLFMAS** - Características
- **MATQM** - Quality Management

### Ferramentas

- SQL Builder
- JSON Validator
- JSON Formatter
- JSON Diff
- Data Mapper
- Field Validator
- Search

### Docs

- Arquitetura SAP
- Boas Práticas
- Guia de Integração
- Glossário SAP
- Troubleshooting

---

## 🌙 Tema Dark/Light

O projeto suporta tema claro e escuro com toggle no header.
As preferências são salvas no `localStorage`.

---

## 🚢 Deploy

O projeto usa GitHub Actions para deploy automático no GitHub Pages.
Cada push na branch `master` ou `main` dispara o workflow.

**Configuração necessária:**

1. Settings → Pages → Source: GitHub Actions
2. O workflow `.github/workflows/deploy.yml` faz build e deploy automático

---

## 📄 Licença

ISC © Equipe de Integração

---

> **Nota:** Este portal foi criado para auxiliar equipes de integração SAP. Para mais informações sobre MDM e governança de dados, visite [4MDG](https://4mdg.com.br/).
