/**
 * AGREGADOR UNIFICADO DE CAMPOS SAP
 *
 * Fonte única de verdade para todos os campos SAP do sistema.
 * Agrega campos de todos os IDocs existentes e exporta em formato padronizado.
 */
import type { IdocData } from '@core/types';

import { ADDRESSES_DATA } from './addresses';
import { BUSINESS_PARTNER_DATA } from './business_partner';
import { CUSTOMERS_DATA } from './customers';
import { MATERIAL_CHARACTERISTICS_DATA } from './material_characteristics';
import { MATERIAL_QM_DATA } from './material_qm';
import { MATERIALS_RETAIL_DATA } from './materials_retail';
// Importar todos os IDocs
import { MATMAS_DATA } from './matmas';
import { SERVICES_DATA } from './services';
import { VENDORS_DATA } from './vendors';

// ========================================
// TIPOS
// ========================================

/** Campo SAP unificado para uso em comboboxes e validadores */
export interface SapField {
  /** Nome do campo (ex: MATNR, KUNNR) */
  name: string;
  /** Descrição do campo */
  description: string;
  /** Tipo de dado (CHAR, NUMC, DATS, etc.) */
  type: string;
  /** Tamanho/length do campo */
  len: number;
  /** Segmento de origem (ex: E1MARAM, E1KNA1M) */
  segment: string;
  /** IDOC de origem (ex: MATMAS, DEBMAS) */
  idoc: string;
}

/** Metadados de um IDOC para exibição */
export interface IdocInfo {
  code: string;
  title: string;
  description: string;
  icon: string;
  data: IdocData;
}

// ========================================
// LISTA DE TODOS OS IDOCS
// ========================================

export const ALL_IDOCS: IdocInfo[] = [
  {
    code: 'MATMAS',
    title: 'Materials',
    description: 'Mestre de Materiais',
    icon: '📦',
    data: MATMAS_DATA,
  },
  {
    code: 'BPMAS',
    title: 'Business Partner',
    description: 'Parceiro de Negócios',
    icon: '🤝',
    data: BUSINESS_PARTNER_DATA,
  },
  {
    code: 'DEBMAS',
    title: 'Customers',
    description: 'Mestre de Clientes',
    icon: '👤',
    data: CUSTOMERS_DATA,
  },
  {
    code: 'CREMAS',
    title: 'Vendors',
    description: 'Mestre de Fornecedores',
    icon: '🏭',
    data: VENDORS_DATA,
  },
  {
    code: 'ADRMAS',
    title: 'Addresses',
    description: 'Endereços',
    icon: '📍',
    data: ADDRESSES_DATA,
  },
  {
    code: 'CHRMAS',
    title: 'Material Characteristics',
    description: 'Características de Material',
    icon: '🏷️',
    data: MATERIAL_CHARACTERISTICS_DATA,
  },
  {
    code: 'QMMAS',
    title: 'Material QM',
    description: 'Gestão de Qualidade de Material',
    icon: '✅',
    data: MATERIAL_QM_DATA,
  },
  {
    code: 'MATMAS_RETAIL',
    title: 'Materials Retail',
    description: 'Mestre de Materiais (Retail)',
    icon: '🛒',
    data: MATERIALS_RETAIL_DATA,
  },
  {
    code: 'SRVMAS',
    title: 'Services',
    description: 'Serviços',
    icon: '🔧',
    data: SERVICES_DATA,
  },
];

// ========================================
// CORES POR TIPO DE DADO
// ========================================

export const TYPE_COLORS: Record<string, string> = {
  CHAR: '#3b82f6', // Azul
  NUMC: '#8b5cf6', // Roxo
  DATS: '#f59e0b', // Amarelo
  QUAN: '#10b981', // Verde
  DEC: '#ec4899', // Rosa
  UNIT: '#6366f1', // Índigo
  LANG: '#06b6d4', // Ciano
  INT: '#8b5cf6', // Roxo
  CUKY: '#14b8a6', // Teal
  CURR: '#22c55e', // Verde
  TIMS: '#f97316', // Laranja
  CLNT: '#a855f7', // Roxo claro
  RAW: '#64748b', // Cinza
  STRG: '#3b82f6', // Azul
};

// ========================================
// FUNÇÕES DE PARSING
// ========================================

/**
 * Extrai tipo e tamanho de uma string de tipo (ex: "CHAR(18)" → { type: "CHAR", len: 18 })
 */
function parseFieldType(typeStr: string): { type: string; len: number } {
  const match = typeStr.match(/^(\w+)\((\d+)\)$/);
  if (match) {
    return { type: match[1], len: Number.parseInt(match[2], 10) };
  }
  // Fallback para tipos sem parênteses
  return { type: typeStr, len: 0 };
}

/**
 * Agrega todos os campos de um IDOC
 */
function extractFieldsFromIdoc(idoc: IdocInfo): SapField[] {
  const fields: SapField[] = [];

  for (const [segName, segDef] of Object.entries(idoc.data.segments)) {
    for (const field of segDef.fields) {
      const parsed = parseFieldType(field.type);
      fields.push({
        name: field.name,
        description: field.description,
        type: parsed.type,
        len: parsed.len,
        segment: segName,
        idoc: idoc.code,
      });
    }
  }

  return fields;
}

// ========================================
// CAMPOS SAP UNIFICADOS
// ========================================

/**
 * Lista completa de todos os campos SAP de todos os IDocs
 * Mantém duplicatas (mesmo campo pode existir em múltiplos segmentos/IDocs)
 */
export const ALL_SAP_FIELDS: SapField[] = ALL_IDOCS.flatMap(extractFieldsFromIdoc);

/**
 * Lista de campos únicos por nome (remove duplicatas, mantém primeira ocorrência)
 * Útil para validação onde só precisamos do tipo/tamanho do campo
 */
export const UNIQUE_SAP_FIELDS: Map<string, SapField> = new Map(
  ALL_SAP_FIELDS.map((f) => [f.name, f])
);

/**
 * Objeto de campos indexado por nome (compatibilidade com formato antigo)
 * { MATNR: { type: "CHAR", len: 18, desc: "..." }, ... }
 */
export const SAP_FIELDS: Record<string, { type: string; len: number; desc: string }> =
  Object.fromEntries(
    [...UNIQUE_SAP_FIELDS.entries()].map(([name, field]) => [
      name,
      { type: field.type, len: field.len, desc: field.description },
    ])
  );

/**
 * Total de campos únicos disponíveis
 */
export const TOTAL_FIELDS = UNIQUE_SAP_FIELDS.size;

/**
 * Total de campos (incluindo duplicatas em diferentes segmentos)
 */
export const TOTAL_ALL_FIELDS = ALL_SAP_FIELDS.length;

// ========================================
// FUNÇÕES DE BUSCA
// ========================================

/**
 * Busca campos por nome ou descrição
 */
export function searchFields(query: string): SapField[] {
  const q = query.toLowerCase();
  return ALL_SAP_FIELDS.filter(
    (f) => f.name.toLowerCase().includes(q) || f.description.toLowerCase().includes(q)
  );
}

/**
 * Filtra campos por IDOC
 */
export function getFieldsByIdoc(idocCode: string): SapField[] {
  return ALL_SAP_FIELDS.filter((f) => f.idoc === idocCode);
}

/**
 * Filtra campos por segmento
 */
export function getFieldsBySegment(segment: string): SapField[] {
  return ALL_SAP_FIELDS.filter((f) => f.segment === segment);
}

/**
 * Lista de segmentos disponíveis (únicos)
 */
export function getAllSegments(): string[] {
  return [...new Set(ALL_SAP_FIELDS.map((f) => f.segment))].sort();
}

/**
 * Lista de IDOCs disponíveis
 */
export function getAllIdocCodes(): string[] {
  return ALL_IDOCS.map((i) => i.code);
}

// ========================================
// RE-EXPORTAR IDOCS INDIVIDUAIS
// ========================================

export { MATMAS_DATA } from './matmas';
export { BUSINESS_PARTNER_DATA } from './business_partner';
export { CUSTOMERS_DATA } from './customers';
export { VENDORS_DATA } from './vendors';
export { ADDRESSES_DATA } from './addresses';
export { MATERIAL_CHARACTERISTICS_DATA } from './material_characteristics';
export { MATERIAL_QM_DATA } from './material_qm';
export { MATERIALS_RETAIL_DATA } from './materials_retail';
export { SERVICES_DATA } from './services';
