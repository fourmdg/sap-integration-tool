// =====================================================
// TIPOS GLOBAIS DO PROJETO
// =====================================================

/** Campo de um segmento IDoc */
export interface IdocField {
  name: string;
  description: string;
  type: string;
}

/** Nó da árvore IDoc com campos embutidos */
export interface IdocSegment {
  segment: string;
  description: string;
  max: number;
  fields: IdocField[];
  children: IdocSegment[];
}

/** Estrutura completa de um IDoc */
export interface IdocData {
  title: string;
  description: string;
  tree: IdocSegment[];
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
