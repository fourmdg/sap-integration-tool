// =====================================================
// TIPOS GLOBAIS DO PROJETO
// =====================================================

/** Campo de um segmento IDoc */
export interface IdocField {
  name: string;
  description: string;
  type: string;
  len?: string;
}

/** Definição de um segmento */
export interface SegmentDefinition {
  description: string;
  fields: IdocField[];
  max?: number;
}

/** Nó da árvore IDoc */
export interface IdocTreeNode {
  segment: string;
  max: number;
  children: IdocTreeNode[];
}

/** Estrutura completa de um IDoc */
export interface IdocData {
  /** Slug/identificador (ex: "materials", "customers") */
  slug?: string;
  /** Título para exibição */
  title: string;
  /** Descrição curta */
  description: string;
  /** Ícone emoji */
  icon?: string;
  /** Árvore hierárquica de segmentos */
  tree: IdocTreeNode[];
  /** Definições detalhadas de cada segmento */
  segments: Record<string, SegmentDefinition>;
}

/** Item de navegação */
export interface NavItem {
  label: string;
  url: string;
  icon?: string;
}

/** Grupo de navegação (dropdown) */
export interface NavGroup {
  label: string;
  icon: string;
  items: NavItem[];
}

/** Tema da aplicação */
export type Theme = 'light' | 'dark';

/** Resultado de busca */
export interface SearchResult {
  title: string;
  url: string;
  type: 'idoc' | 'doc' | 'tool' | 'segment';
  description?: string;
  segment?: string;
}
