/**
 * Dados do IDoc MATMAS - Mestre de Materiais
 * Extraído de idocs/materials.html
 */
import type { IdocData, IdocTreeNode, SegmentDefinition } from '../types';

export const IDOC_TREE: IdocTreeNode[] = [
  {
    segment: 'E1MARAM',
    max: 9999,
    children: [
      { segment: 'E1MARA1', max: 1, children: [] },
      { segment: 'E1MAKTM', max: 99, children: [] },
      {
        segment: 'E1MARCM',
        max: 9999,
        children: [
          { segment: 'E1MARC1', max: 1, children: [] },
          { segment: 'E1MARDM', max: 9999, children: [] },
          { segment: 'E1MFHMM', max: 1, children: [] },
          { segment: 'E1MPGDM', max: 1, children: [] },
          { segment: 'E1MPOPM', max: 1, children: [] },
          { segment: 'E1MPRWM', max: 9999999999, children: [] },
          { segment: 'E1MVEGM', max: 9999999999, children: [] },
          { segment: 'E1MVEUM', max: 9999999999, children: [] },
          { segment: 'E1MKALM', max: 9999999999, children: [] },
        ],
      },
      {
        segment: 'E1MARMM',
        max: 999,
        children: [{ segment: 'E1MEANM', max: 9999, children: [] }],
      },
      { segment: 'E1MBEWM', max: 9999, children: [] },
      {
        segment: 'E1MLGNM',
        max: 9999,
        children: [{ segment: 'E1MLGTM', max: 9999, children: [] }],
      },
      { segment: 'E1MVKEM', max: 9999, children: [] },
      { segment: 'E1MLANM', max: 9999, children: [] },
      {
        segment: 'E1MTXHM',
        max: 9999,
        children: [{ segment: 'E1MTXLM', max: 9999, children: [] }],
      },
      {
        segment: 'E1CUCFG',
        max: 10000,
        children: [
          { segment: 'E1CUINS', max: 1000, children: [] },
          { segment: 'E1CUVAL', max: 100000, children: [] },
          { segment: 'E1CUCOM', max: 1000, children: [] },
        ],
      },
    ],
  },
  { segment: 'E1UPSLINK', max: 1, children: [] },
];

export const SEGMENT_DEFINITIONS: Record<string, SegmentDefinition> = {
  E1MARAM: {
    description: 'Master material dados gerais (MARA)',
    fields: [
      { name: 'MSGFN', description: 'Função', type: 'CHAR(3)' },
      { name: 'MATNR', description: 'Nº do material', type: 'CHAR(18)' },
      { name: 'ERSDA', description: 'Data de criação', type: 'DATS(8)' },
      {
        name: 'ERNAM',
        description: 'Nome do responsável que adicionou o objeto',
        type: 'CHAR(12)',
      },
      { name: 'LAEDA', description: 'Data da última modificação', type: 'DATS(8)' },
      {
        name: 'AENAM',
        description: 'Nome do responsável pela modificação do objeto',
        type: 'CHAR(12)',
      },
      { name: 'PSTAT', description: 'Status de atualização', type: 'CHAR(15)' },
      {
        name: 'LVORM',
        description: 'Marcar mat.para eliminação a nível de mandante',
        type: 'CHAR(1)',
      },
      { name: 'MTART', description: 'Tipo de material', type: 'CHAR(4)' },
      { name: 'MBRSH', description: 'Setor industrial', type: 'CHAR(1)' },
      { name: 'MATKL', description: 'Grupo de mercadorias', type: 'CHAR(9)' },
      { name: 'BISMT', description: 'Nº material antigo', type: 'CHAR(18)' },
      { name: 'MEINS', description: 'Unidade de medida básica', type: 'UNIT(3)' },
      { name: 'BSTME', description: 'Unidade de medida do pedido', type: 'UNIT(3)' },
      // Campos simplificados - dados completos seriam extraídos do HTML original
    ],
  },
  E1MARA1: {
    description: 'Outros campos para E1MARAM',
    fields: [
      { name: 'MATNR_EXTERNAL', description: 'Nº do material', type: 'CHAR(40)' },
      { name: 'MATNR_VERSION', description: 'Nº de versão para campo MATNR', type: 'CHAR(10)' },
      { name: 'MATNR_GUID', description: 'GUID externo para campo MATNR', type: 'CHAR(32)' },
    ],
  },
  E1MAKTM: {
    description: 'Master material texto breve (MAKT)',
    fields: [
      { name: 'MSGFN', description: 'Função', type: 'CHAR(3)' },
      { name: 'SPRAS', description: 'Código de idioma', type: 'LANG(1)' },
      { name: 'MAKTX', description: 'Texto breve de material', type: 'CHAR(40)' },
      { name: 'SPRAS_ISO', description: 'Código de idiomas SAP de 2 dígitos', type: 'CHAR(2)' },
    ],
  },
  E1MARCM: {
    description: 'Master material segmento C (MARC)',
    fields: [
      { name: 'MSGFN', description: 'Função', type: 'CHAR(3)' },
      { name: 'WERKS', description: 'Centro', type: 'CHAR(4)' },
      { name: 'PSTAT', description: 'Status de atualização', type: 'CHAR(15)' },
      { name: 'LVORM', description: 'Marcação para eliminação', type: 'CHAR(1)' },
    ],
  },
  // Outros segmentos seriam adicionados aqui...
};

export const MATMAS_DATA: IdocData = {
  title: 'MATMAS - Mestre de Materiais',
  description: 'IDoc para distribuição de dados mestres de materiais',
  tree: IDOC_TREE,
  segments: SEGMENT_DEFINITIONS,
};

export default MATMAS_DATA;
