/**
 * Diff Engine - Motor de comparação profunda de JSONs
 * Suporta detecção de: adicionados, removidos, tipo alterado, valor alterado
 */

/** Tipo que representa qualquer valor JSON válido */
export type JsonValue = string | number | boolean | null | undefined | JsonValue[] | JsonObject;

/** Tipo que representa um objeto JSON */
export type JsonObject = { [key: string]: JsonValue };

export type DiffType = 'added' | 'removed' | 'type-changed' | 'value-changed' | 'unchanged';

export interface DiffItem {
  path: string;
  type: DiffType;
  leftValue?: JsonValue;
  rightValue?: JsonValue;
  leftType?: string;
  rightType?: string;
}

export interface DiffOptions {
  /** Ignorar ordem de chaves em objetos (sempre true para objetos JS) */
  ignoreKeyOrder: boolean;
  /** Ignorar ordem de elementos em arrays */
  ignoreArrayOrder: boolean;
  /** Detectar mudança de tipo (ex: "1" vs 1) */
  detectTypeChanges: boolean;
  /** Mostrar campos iguais no resultado */
  showUnchanged: boolean;
}

export const DEFAULT_OPTIONS: DiffOptions = {
  ignoreKeyOrder: true,
  ignoreArrayOrder: false,
  detectTypeChanges: true,
  showUnchanged: false,
};

export interface DiffResult {
  items: DiffItem[];
  stats: {
    added: number;
    removed: number;
    typeChanged: number;
    valueChanged: number;
    unchanged: number;
    total: number;
  };
}

/**
 * Obtém o tipo JavaScript de um valor de forma detalhada
 */
function getType(value: JsonValue): string {
  if (value === null) return 'null';
  if (value === undefined) return 'undefined';
  if (Array.isArray(value)) return 'array';
  return typeof value;
}

/**
 * Compara dois valores primitivos
 */
function comparePrimitives(left: JsonValue, right: JsonValue, options: DiffOptions): DiffType {
  const leftType = getType(left);
  const rightType = getType(right);

  if (options.detectTypeChanges && leftType !== rightType) {
    return 'type-changed';
  }

  if (left === right) {
    return 'unchanged';
  }

  // Se tipos diferentes e não detectando mudança de tipo, considera como valor alterado
  if (leftType !== rightType) {
    return 'value-changed';
  }

  return 'value-changed';
}

/**
 * Normaliza array para comparação (se ignoreArrayOrder)
 */
function normalizeArray(arr: JsonValue[], options: DiffOptions): JsonValue[] {
  if (!options.ignoreArrayOrder) return arr;

  // Tenta ordenar por JSON stringified para comparação
  try {
    return [...arr].sort((a, b) => {
      const strA = JSON.stringify(a);
      const strB = JSON.stringify(b);
      return strA.localeCompare(strB);
    });
  } catch {
    return arr;
  }
}

/**
 * Motor principal de diff recursivo
 */
function diffRecursive(
  left: JsonValue,
  right: JsonValue,
  path: string,
  options: DiffOptions,
  items: DiffItem[]
): void {
  const leftType = getType(left);
  const rightType = getType(right);

  // Ambos undefined ou null iguais
  if (left === right) {
    if (options.showUnchanged) {
      items.push({ path, type: 'unchanged', leftValue: left, rightValue: right });
    }
    return;
  }

  // Tipos diferentes
  if (leftType !== rightType) {
    if (options.detectTypeChanges) {
      items.push({
        path,
        type: 'type-changed',
        leftValue: left,
        rightValue: right,
        leftType,
        rightType,
      });
    } else {
      items.push({
        path,
        type: 'value-changed',
        leftValue: left,
        rightValue: right,
      });
    }
    return;
  }

  // Arrays
  if (leftType === 'array') {
    const leftArr = normalizeArray(left as JsonValue[], options);
    const rightArr = normalizeArray(right as JsonValue[], options);

    const maxLen = Math.max(leftArr.length, rightArr.length);

    for (let i = 0; i < maxLen; i++) {
      const itemPath = `${path}[${i}]`;

      if (i >= leftArr.length) {
        // Item adicionado
        items.push({
          path: itemPath,
          type: 'added',
          rightValue: rightArr[i],
        });
      } else if (i >= rightArr.length) {
        // Item removido
        items.push({
          path: itemPath,
          type: 'removed',
          leftValue: leftArr[i],
        });
      } else {
        // Comparar recursivamente
        diffRecursive(leftArr[i], rightArr[i], itemPath, options, items);
      }
    }
    return;
  }

  // Objetos
  if (leftType === 'object') {
    const leftObj = (left || {}) as JsonObject;
    const rightObj = (right || {}) as JsonObject;
    const leftKeys = new Set(Object.keys(leftObj));
    const rightKeys = new Set(Object.keys(rightObj));
    const allKeys = new Set([...leftKeys, ...rightKeys]);

    for (const key of allKeys) {
      const keyPath = path ? `${path}.${key}` : key;

      if (!leftKeys.has(key)) {
        // Chave adicionada
        items.push({
          path: keyPath,
          type: 'added',
          rightValue: rightObj[key],
        });
      } else if (!rightKeys.has(key)) {
        // Chave removida
        items.push({
          path: keyPath,
          type: 'removed',
          leftValue: leftObj[key],
        });
      } else {
        // Comparar recursivamente
        diffRecursive(leftObj[key], rightObj[key], keyPath, options, items);
      }
    }
    return;
  }

  // Primitivos (string, number, boolean)
  const diffType = comparePrimitives(left, right, options);
  if (diffType === 'unchanged') {
    if (options.showUnchanged) {
      items.push({ path, type: 'unchanged', leftValue: left, rightValue: right });
    }
  } else {
    items.push({
      path,
      type: diffType,
      leftValue: left,
      rightValue: right,
    });
  }
}

/**
 * Função principal de comparação de JSONs
 */
export function deepDiff(
  left: JsonValue,
  right: JsonValue,
  options: Partial<DiffOptions> = {}
): DiffResult {
  const opts = { ...DEFAULT_OPTIONS, ...options };
  const items: DiffItem[] = [];

  // Se são o mesmo valor (referência ou primitivo igual)
  if (left === right) {
    return {
      items: opts.showUnchanged
        ? [{ path: '$', type: 'unchanged', leftValue: left, rightValue: right }]
        : [],
      stats: { added: 0, removed: 0, typeChanged: 0, valueChanged: 0, unchanged: 1, total: 1 },
    };
  }

  // Comparação recursiva
  diffRecursive(left, right, '$', opts, items);

  // Calcular estatísticas
  const stats = {
    added: items.filter((i) => i.type === 'added').length,
    removed: items.filter((i) => i.type === 'removed').length,
    typeChanged: items.filter((i) => i.type === 'type-changed').length,
    valueChanged: items.filter((i) => i.type === 'value-changed').length,
    unchanged: items.filter((i) => i.type === 'unchanged').length,
    total: items.length,
  };

  return { items, stats };
}

/**
 * Formata um valor para exibição
 */
export function formatValue(value: JsonValue, maxLen = 50): string {
  if (value === undefined) return 'undefined';
  if (value === null) return 'null';

  const str = JSON.stringify(value);
  if (str.length > maxLen) {
    return `${str.substring(0, maxLen - 3)}...`;
  }
  return str;
}

/**
 * Obtém a cor CSS para um tipo de diff
 */
export function getDiffColor(type: DiffType): string {
  switch (type) {
    case 'added':
      return 'var(--jd-added)';
    case 'removed':
      return 'var(--jd-removed)';
    case 'type-changed':
      return 'var(--jd-type-changed)';
    case 'value-changed':
      return 'var(--jd-value-changed)';
    case 'unchanged':
      return 'var(--jd-unchanged)';
  }
}

/**
 * Obtém o ícone para um tipo de diff
 */
export function getDiffIcon(type: DiffType): string {
  switch (type) {
    case 'added':
      return '+';
    case 'removed':
      return '-';
    case 'type-changed':
      return '⚡';
    case 'value-changed':
      return '~';
    case 'unchanged':
      return ' ';
  }
}

/**
 * Obtém label legível para tipo de diff
 */
export function getDiffLabel(type: DiffType): string {
  switch (type) {
    case 'added':
      return 'Adicionado';
    case 'removed':
      return 'Removido';
    case 'type-changed':
      return 'Tipo alterado';
    case 'value-changed':
      return 'Valor alterado';
    case 'unchanged':
      return 'Sem alteração';
  }
}

/**
 * Cria um mapa de paths para tipos de diff (para highlighting)
 */
export function createDiffMap(items: DiffItem[]): Map<string, DiffType> {
  const map = new Map<string, DiffType>();
  for (const item of items) {
    map.set(item.path, item.type);
  }
  return map;
}

/**
 * Converte resultado de diff para Markdown
 */
export function diffToMarkdown(result: DiffResult): string {
  const lines: string[] = [];

  lines.push('# JSON Diff Report\n');
  lines.push('## Resumo');
  lines.push(`- ✅ Adicionados: ${result.stats.added}`);
  lines.push(`- ❌ Removidos: ${result.stats.removed}`);
  lines.push(`- ⚡ Tipo alterado: ${result.stats.typeChanged}`);
  lines.push(`- 📝 Valor alterado: ${result.stats.valueChanged}`);
  lines.push('');

  const grouped = {
    added: result.items.filter((i) => i.type === 'added'),
    removed: result.items.filter((i) => i.type === 'removed'),
    typeChanged: result.items.filter((i) => i.type === 'type-changed'),
    valueChanged: result.items.filter((i) => i.type === 'value-changed'),
  };

  if (grouped.added.length) {
    lines.push(`## ✅ Adicionados (${grouped.added.length})`);
    for (const item of grouped.added) {
      lines.push(`- \`${item.path}\`: ${formatValue(item.rightValue)}`);
    }
    lines.push('');
  }

  if (grouped.removed.length) {
    lines.push(`## ❌ Removidos (${grouped.removed.length})`);
    for (const item of grouped.removed) {
      lines.push(`- \`${item.path}\`: ${formatValue(item.leftValue)}`);
    }
    lines.push('');
  }

  if (grouped.typeChanged.length) {
    lines.push(`## ⚡ Tipo Alterado (${grouped.typeChanged.length})`);
    for (const item of grouped.typeChanged) {
      lines.push(`- \`${item.path}\`: ${item.leftType} → ${item.rightType}`);
      lines.push(`  - Antes: ${formatValue(item.leftValue)}`);
      lines.push(`  - Depois: ${formatValue(item.rightValue)}`);
    }
    lines.push('');
  }

  if (grouped.valueChanged.length) {
    lines.push(`## 📝 Valor Alterado (${grouped.valueChanged.length})`);
    for (const item of grouped.valueChanged) {
      lines.push(`- \`${item.path}\``);
      lines.push(`  - Antes: ${formatValue(item.leftValue)}`);
      lines.push(`  - Depois: ${formatValue(item.rightValue)}`);
    }
    lines.push('');
  }

  return lines.join('\n');
}
