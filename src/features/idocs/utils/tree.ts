/**
 * Utilitários para manipulação de árvores IDoc
 */

import type { IdocTreeNode, SegmentDefinition } from '@core/types';

/** Achata a árvore em lista de {segment, max} */
export function flattenTree(nodes: IdocTreeNode[]): Array<{ segment: string; max: number }> {
  const result: Array<{ segment: string; max: number }> = [];

  function traverse(node: IdocTreeNode) {
    result.push({ segment: node.segment, max: node.max });
    node.children.forEach(traverse);
  }

  nodes.forEach(traverse);
  return result;
}

/** Conta total de segmentos na árvore */
export function countSegments(nodes: IdocTreeNode[]): number {
  return flattenTree(nodes).length;
}

/** Gera JSON de payload de exemplo */
export function buildExamplePayload(
  nodes: IdocTreeNode[],
  segments: Record<string, SegmentDefinition>
): Record<string, unknown> {
  function buildNode(node: IdocTreeNode): Record<string, unknown> {
    const seg = segments[node.segment];
    if (!seg) return {};

    const fields: Record<string, string> = {};
    seg.fields.forEach((f: { name: string }) => {
      fields[f.name] = '';
    });

    const children: Record<string, unknown>[] = [];
    node.children.forEach((child: IdocTreeNode) => {
      children.push(buildNode(child));
    });

    return {
      [node.segment]: {
        ...fields,
        ...(children.length > 0 ? { _children: children } : {}),
      },
    };
  }

  const result: Record<string, unknown> = {};
  for (const node of nodes) {
    Object.assign(result, buildNode(node));
  }
  return result;
}

/** Converte JSON para XML */
export function jsonToXml(obj: Record<string, unknown>, indent = 0): string {
  const pad = '  '.repeat(indent);
  let xml = '';

  for (const [key, value] of Object.entries(obj)) {
    if (key === '_children') continue;

    if (typeof value === 'object' && value !== null) {
      xml += `${pad}<${key}>\n`;
      xml += jsonToXml(value as Record<string, unknown>, indent + 1);
      xml += `${pad}</${key}>\n`;
    } else {
      xml += `${pad}<${key}>${value}</${key}>\n`;
    }
  }

  return xml;
}
