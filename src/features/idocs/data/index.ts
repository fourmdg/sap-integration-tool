/**
 * AGREGADOR CENTRALIZADO DE DADOS SAP
 *
 * Fonte ÚNICA de verdade para todos os dados de IDocs do sistema.
 * Qualquer componente que precise de dados de IDoc DEVE importar daqui.
 */
import type { IdocData, IdocField, IdocSegment } from '@core/types';
import { flattenTree } from '../utils/tree';

// Importar dados de todos os IDocs (gerados automaticamente de /IDOC/*.html)
import { ADRMAS_DATA } from './ADRMAS03';
import { ARTMAS_DATA } from './ARTMAS09';
import { BUSINESS_PARTNER_DATA } from './BUPARTNER';
import { CLFMAS_DATA } from './CLFMAS02';
import { CREMAS_DATA } from './CREMAS06';
import { DEBMAS_DATA } from './DEBMAS07';
import { MATMAS_DATA } from './MATMAS05';
import { MATQM_DATA } from './MATQM01';

// ========================================
// TIPOS EXPORTADOS
// ========================================

/** Campo SAP unificado para uso em comboboxes e validadores */
export interface SapField {
  name: string;
  description: string;
  type: string;
  len: number;
  segment: string;
  idoc: string;
}

/** Metadados completos de um IDOC */
export interface IdocInfo {
  /** Código técnico do IDoc (ex: MATMAS, DEBMAS) */
  code: string;
  /** Slug para URL (ex: materials, customers) */
  slug: string;
  /** Título para exibição */
  title: string;
  /** Descrição curta */
  description: string;
  /** Ícone emoji */
  icon: string;
  /** Dados completos do IDoc */
  data: IdocData;
}

/** Item de busca para índice */
export interface SearchItem {
  type: 'tool' | 'idoc' | 'doc' | 'field' | 'segment';
  title: string;
  description: string;
  url: string;
  icon: string;
  segment?: string;
}

// ========================================
// REGISTRO CENTRAL DE IDOCS
// ========================================

export const ALL_IDOCS: IdocInfo[] = [
  {
    code: 'MATMAS05',
    slug: 'MATMAS05',
    title: 'Materiais',
    description: 'Dados mestres de materiais SAP',
    icon: '📦',
    data: MATMAS_DATA,
  },
  {
    code: 'ARTMAS09',
    slug: 'ARTMAS09',
    title: 'Materiais - Varejo',
    description: 'Dados mestres de materiais de varejo',
    icon: '🛒',
    data: ARTMAS_DATA,
  },
  {
    code: 'BUPARTNER',
    slug: 'BUPARTNER',
    title: 'Parceiros de Negócio',
    description: 'Parceiros de negócio',
    icon: '🤝',
    data: BUSINESS_PARTNER_DATA,
  },
  {
    code: 'DEBMAS07',
    slug: 'DEBMAS07',
    title: 'Clientes',
    description: 'Dados mestres de clientes',
    icon: '👤',
    data: DEBMAS_DATA,
  },
  {
    code: 'CREMAS06',
    slug: 'CREMAS06',
    title: 'Fornecedores',
    description: 'Dados mestres de fornecedores',
    icon: '🏭',
    data: CREMAS_DATA,
  },
  {
    code: 'ADRMAS03',
    slug: 'ADRMAS03',
    title: 'Endereços',
    description: 'Dados de endereços',
    icon: '📍',
    data: ADRMAS_DATA,
  },
  {
    code: 'CLFMAS02',
    slug: 'CLFMAS02',
    title: 'Materiais - Classificação',
    description: 'Características de classificação de materiais',
    icon: '🏷️',
    data: CLFMAS_DATA,
  },
  {
    code: 'MATQM01',
    slug: 'MATQM01',
    title: 'Materiais - Qualidade',
    description: 'Gestão de qualidade de materiais',
    icon: '✅',
    data: MATQM_DATA,
  },
];

// ========================================
// MAPAS DE ACESSO RÁPIDO
// ========================================

/** Mapa de código → IdocInfo */
export const IDOC_BY_CODE = new Map<string, IdocInfo>(ALL_IDOCS.map((idoc) => [idoc.code, idoc]));

/** Mapa de slug → IdocInfo */
export const IDOC_BY_SLUG = new Map<string, IdocInfo>(ALL_IDOCS.map((idoc) => [idoc.slug, idoc]));

// ========================================
// HELPERS DE ACESSO
// ========================================

/** Obtém um IDoc por código */
export function getIdocByCode(code: string): IdocInfo | undefined {
  return IDOC_BY_CODE.get(code);
}

/** Obtém um IDoc por slug */
export function getIdocBySlug(slug: string): IdocInfo | undefined {
  return IDOC_BY_SLUG.get(slug);
}

/** Obtém todos os segmentos flat de um IDoc */
export function getIdocSegments(idoc: IdocInfo): IdocSegment[] {
  return flattenTree(idoc.data.tree);
}

/** Cria mapa de segmentos para client-side (validador) */
export function createSegmentMap(
  idoc: IdocInfo
): Record<string, { description: string; fields: IdocField[] }> {
  const map: Record<string, { description: string; fields: IdocField[] }> = {};
  for (const seg of getIdocSegments(idoc)) {
    map[seg.segment] = { description: seg.description, fields: seg.fields };
  }
  return map;
}

// ========================================
// CORES POR TIPO DE DADO
// ========================================

export const TYPE_COLORS: Record<string, string> = {
  CHAR: '#3b82f6',
  NUMC: '#8b5cf6',
  DATS: '#f59e0b',
  QUAN: '#10b981',
  DEC: '#ec4899',
  UNIT: '#6366f1',
  LANG: '#06b6d4',
  INT: '#8b5cf6',
  CUKY: '#14b8a6',
  CURR: '#22c55e',
  TIMS: '#f97316',
  CLNT: '#a855f7',
  RAW: '#64748b',
  STRG: '#3b82f6',
};

// ========================================
// FUNÇÕES DE PARSING
// ========================================

function parseFieldType(typeStr: string): { type: string; len: number } {
  const match = typeStr.match(/^(\w+)\((\d+)\)$/);
  if (match) {
    return { type: match[1], len: Number.parseInt(match[2], 10) };
  }
  return { type: typeStr, len: 0 };
}

function extractFieldsFromIdoc(idoc: IdocInfo): SapField[] {
  const fields: SapField[] = [];
  const segments = getIdocSegments(idoc);

  for (const seg of segments) {
    for (const field of seg.fields) {
      const parsed = parseFieldType(field.type);
      fields.push({
        name: field.name,
        description: field.description,
        type: parsed.type,
        len: parsed.len,
        segment: seg.segment,
        idoc: idoc.code,
      });
    }
  }

  return fields;
}

// ========================================
// CAMPOS SAP UNIFICADOS
// ========================================

export const ALL_SAP_FIELDS: SapField[] = ALL_IDOCS.flatMap(extractFieldsFromIdoc);

export const UNIQUE_SAP_FIELDS: Map<string, SapField> = new Map(
  ALL_SAP_FIELDS.map((f) => [f.name, f])
);

export const SAP_FIELDS: Record<string, { type: string; len: number; desc: string }> =
  Object.fromEntries(
    [...UNIQUE_SAP_FIELDS.entries()].map(([name, field]) => [
      name,
      { type: field.type, len: field.len, desc: field.description },
    ])
  );

export const TOTAL_FIELDS = UNIQUE_SAP_FIELDS.size;
export const TOTAL_ALL_FIELDS = ALL_SAP_FIELDS.length;

// ========================================
// FUNÇÕES DE BUSCA
// ========================================

export function searchFields(query: string): SapField[] {
  const q = query.toLowerCase();
  return ALL_SAP_FIELDS.filter(
    (f) => f.name.toLowerCase().includes(q) || f.description.toLowerCase().includes(q)
  );
}

export function getFieldsByIdoc(idocCode: string): SapField[] {
  return ALL_SAP_FIELDS.filter((f) => f.idoc === idocCode);
}

export function getFieldsBySegment(segment: string): SapField[] {
  return ALL_SAP_FIELDS.filter((f) => f.segment === segment);
}

export function getAllSegments(): string[] {
  return [...new Set(ALL_SAP_FIELDS.map((f) => f.segment))].sort();
}

export function getAllIdocCodes(): string[] {
  return ALL_IDOCS.map((i) => i.code);
}

// ========================================
// GERAÇÃO DE ÍNDICE DE BUSCA
// ========================================

/** Gera índice de busca para todos os IDocs */
export function generateSearchIndex(): SearchItem[] {
  const index: SearchItem[] = [];

  for (const idoc of ALL_IDOCS) {
    // Página do IDoc
    index.push({
      type: 'idoc',
      title: `${idoc.data.title} (${idoc.code})`,
      description: idoc.description,
      url: `/idocs/${idoc.slug}`,
      icon: idoc.icon,
    });

    // Segmentos e campos
    const segments = getIdocSegments(idoc);
    for (const seg of segments) {
      index.push({
        type: 'segment',
        title: `${seg.segment} [${idoc.code}]`,
        description: seg.description,
        url: `/idocs/${idoc.slug}#${seg.segment}`,
        icon: '📋',
      });

      for (const field of seg.fields) {
        index.push({
          type: 'field',
          title: `${field.name} [${idoc.code}]`,
          description: `${field.description} - ${field.type}`,
          url: `/idocs/${idoc.slug}#${seg.segment}`,
          icon: '🔤',
          segment: seg.segment,
        });
      }
    }
  }

  return index;
}

// ========================================
// ÍNDICE DE BUSCA ESTÁTICO
// ========================================

/** Itens estáticos de busca (ferramentas e documentação) */
export const STATIC_SEARCH_ITEMS: SearchItem[] = [
  // Ferramentas
  {
    type: 'tool',
    title: 'Testador de Campo IDOC',
    description: 'Teste e valide campos SAP',
    url: '/tools/idoc-field-tester',
    icon: '🧪',
  },
  {
    type: 'tool',
    title: 'SQL Builder',
    description: 'Construa queries SQL',
    url: '/tools/sql-builder',
    icon: '⚡',
  },
  {
    type: 'tool',
    title: 'JSON Studio',
    description: 'Visualize e explore JSON',
    url: '/tools/json-studio',
    icon: '🎨',
  },
  {
    type: 'tool',
    title: 'JSON Diff',
    description: 'Compare dois JSONs',
    url: '/tools/json-diff',
    icon: '⚖️',
  },
  {
    type: 'tool',
    title: 'Visual Mapper',
    description: 'Mapeamento visual',
    url: '/tools/mapper',
    icon: '🔗',
  },
  {
    type: 'tool',
    title: 'Validador de Payload IDOC',
    description: 'Valide payloads contra IDocs',
    url: '/tools/idoc-payload-validator',
    icon: '📋',
  },
  // Documentação
  {
    type: 'doc',
    title: 'Como Funciona',
    description: 'Guia inicial do portal',
    url: '/docs/getting-started',
    icon: '🗺️',
  },
  {
    type: 'doc',
    title: 'Boas Práticas',
    description: 'Padrões recomendados',
    url: '/docs/best-practices',
    icon: '⭐',
  },
  {
    type: 'doc',
    title: 'Arquitetura',
    description: 'Visão técnica do sistema',
    url: '/docs/architecture',
    icon: '📐',
  },
  {
    type: 'doc',
    title: 'Troubleshooting',
    description: 'Resolução de problemas',
    url: '/docs/troubleshooting',
    icon: '🚦',
  },
  {
    type: 'doc',
    title: 'Glossário SAP',
    description: 'Termos técnicos',
    url: '/docs/glossary',
    icon: '📖',
  },
  // Templates
  {
    type: 'idoc',
    title: 'Templates',
    description: 'Payloads JSON prontos',
    url: '/idocs/templates',
    icon: '📋',
  },
];

/** Índice completo de busca (estáticos + dinâmicos) */
export const FULL_SEARCH_INDEX: SearchItem[] = [...STATIC_SEARCH_ITEMS, ...generateSearchIndex()];
