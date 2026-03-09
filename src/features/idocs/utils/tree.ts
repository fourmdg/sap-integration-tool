/**
 * Utilitários para manipulação de árvores IDoc
 */

import type { IdocSegment } from '@core/types';

/** Achata a árvore em lista de IdocSegment */
export function flattenTree(nodes: IdocSegment[]): IdocSegment[] {
  const result: IdocSegment[] = [];

  function traverse(node: IdocSegment) {
    result.push(node);
    node.children.forEach(traverse);
  }

  nodes.forEach(traverse);
  return result;
}

/** Conta total de segmentos na árvore */
export function countSegments(nodes: IdocSegment[]): number {
  return flattenTree(nodes).length;
}

/** Conta total de campos em todos os segmentos */
export function countFields(nodes: IdocSegment[]): number {
  return flattenTree(nodes).reduce((sum, seg) => sum + seg.fields.length, 0);
}
