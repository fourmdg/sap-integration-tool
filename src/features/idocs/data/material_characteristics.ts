/**
 * Dados do IDoc CLFMAS - Características
 * Gerado automaticamente de idocs/material-characteristics.html
 */
import type { IdocData, IdocTreeNode, SegmentDefinition } from '@core/types';

export const IDOC_TREE: IdocTreeNode[] = [
  {
    segment: 'E1OCLFM',
    max: 1,
    children: [
      {
        segment: 'E1KSSKM',
        max: 9999,
        children: [],
      },
      {
        segment: 'E1AUSPM',
        max: 9999,
        children: [],
      },
      {
        segment: 'E1DATEM',
        max: 1,
        children: [],
      },
    ],
  },
  {
    segment: 'E1UPSLINK',
    max: 1,
    children: [],
  },
];

export const SEGMENT_DEFINITIONS: Record<string, SegmentDefinition> = {
  E1OCLFM: {
    description: 'Mestre classificação objetos',
    fields: [
      {
        name: 'MSGFN',
        description: 'Função',
        type: 'CHAR(3)',
      },
      {
        name: 'OBTAB',
        description: 'Nome da tabela de banco de dados do objeto',
        type: 'CHAR(10)',
      },
      {
        name: 'OBJEK',
        description: 'Chave do objeto a ser classificado',
        type: 'CHAR(50)',
      },
      {
        name: 'KLART',
        description: 'Tipo de classe',
        type: 'CHAR(3)',
      },
      {
        name: 'MAFID',
        description: 'Código objeto/classe',
        type: 'CHAR(1)',
      },
      {
        name: 'OBJECT_TABLE',
        description: 'Nome da tabela de banco de dados do objeto',
        type: 'CHAR(30)',
      },
    ],
  },
  E1KSSKM: {
    description: 'Classificação distribuição: atribuição à classe de objeto',
    fields: [
      {
        name: 'MSGFN',
        description: 'Função',
        type: 'CHAR(3)',
      },
      {
        name: 'CLASS',
        description: 'Nº classe',
        type: 'CHAR(18)',
      },
      {
        name: 'AENNR',
        description: 'Nº modificação',
        type: 'CHAR(12)',
      },
      {
        name: 'DATUV',
        description: 'Data início validade',
        type: 'DATS(8)',
      },
      {
        name: 'STATU',
        description: 'Status da classificação',
        type: 'CHAR(1)',
      },
      {
        name: 'STDCL',
        description: 'Código: classe standard',
        type: 'CHAR(1)',
      },
    ],
  },
  E1AUSPM: {
    description: 'Distribuição classificação: avaliação características objeto',
    fields: [
      {
        name: 'MSGFN',
        description: 'Função',
        type: 'CHAR(3)',
      },
      {
        name: 'ATNAM',
        description: 'Nome da característica',
        type: 'CHAR(30)',
      },
      {
        name: 'AENNR',
        description: 'Nº modificação',
        type: 'CHAR(12)',
      },
      {
        name: 'DATUV',
        description: 'Data início validade',
        type: 'DATS(8)',
      },
      {
        name: 'ATWRT',
        description: 'Valor da característica',
        type: 'CHAR(30)',
      },
      {
        name: 'ATFLV',
        description: 'Valor interno vírgula flutuante desde',
        type: 'CHAR(22)',
      },
      {
        name: 'ATAWE',
        description: 'Unidade medida',
        type: 'UNIT(3)',
      },
      {
        name: 'ATFLB',
        description: 'Valor interno vírgula flutuante até',
        type: 'CHAR(22)',
      },
      {
        name: 'ATAW1',
        description: 'Unidade medida',
        type: 'UNIT(3)',
      },
      {
        name: 'ATCOD',
        description: 'Code para dependência de valores',
        type: 'CHAR(1)',
      },
      {
        name: 'ATTLV',
        description: 'Tolerância de',
        type: 'CHAR(22)',
      },
      {
        name: 'ATTLB',
        description: 'Tolerância até',
        type: 'CHAR(22)',
      },
      {
        name: 'ATPRZ',
        description: 'Código de indicações de tolerâncias em %',
        type: 'CHAR(1)',
      },
      {
        name: 'ATINC',
        description: 'Incremento dentro de um intervalo',
        type: 'CHAR(22)',
      },
      {
        name: 'ATAUT',
        description: 'Classificação: autor',
        type: 'CHAR(1)',
      },
      {
        name: 'ATIMB',
        description: 'Nº característica da ctg.dados definida pelo usuário',
        type: 'NUMC(10)',
      },
      {
        name: 'ATZIS',
        description: 'Contador de instâncias',
        type: 'NUMC(3)',
      },
      {
        name: 'UDEF_CHAR',
        description: 'Nome da característica',
        type: 'CHAR(30)',
      },
    ],
  },
  E1DATEM: {
    description: 'Data-chave mestra e nº de modificação',
    fields: [
      {
        name: 'MSGFN',
        description: 'Função',
        type: 'CHAR(3)',
      },
      {
        name: 'KEY_DATE',
        description: 'Data do sistema',
        type: 'DATS(8)',
      },
      {
        name: 'AENNR',
        description: 'Nº modificação',
        type: 'CHAR(12)',
      },
      {
        name: 'EFFECTIVITY',
        description: 'Avaliar parâmetros de validade / substituir nºs modificação',
        type: 'CHAR(1)',
      },
    ],
  },
  E1UPSLINK: {
    description: 'Referência de objeto a UPS superior',
    fields: [
      {
        name: 'UPSNAM',
        description: 'Pacote de distribuição ALE: nome',
        type: 'CHAR(20)',
      },
      {
        name: 'ORGNAM',
        description: 'Pacote de distribuição ALE: pacote original (nome)',
        type: 'CHAR(20)',
      },
      {
        name: 'MESTYP',
        description: 'Tipo de mensagem',
        type: 'CHAR(30)',
      },
      {
        name: 'OBJID',
        description: 'Pacote de distribuição ALE: chave de objeto',
        type: 'CHAR(120)',
      },
      {
        name: 'OBJVAL',
        description: 'Pacote de distribuição ALE: validade do objeto',
        type: 'CHAR(20)',
      },
    ],
  },
};

export const MATERIAL_CHARACTERISTICS_DATA: IdocData = {
  title: 'CLFMAS - Características',
  description: 'IDoc CLFMAS para distribuição de dados mestres',
  tree: IDOC_TREE,
  segments: SEGMENT_DEFINITIONS,
};

export default MATERIAL_CHARACTERISTICS_DATA;
