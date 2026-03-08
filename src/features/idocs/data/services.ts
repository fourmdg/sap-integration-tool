/**
 * Dados do IDoc SRVMAS - Mestre de Serviços
 * Gerado automaticamente de idocs/services.html
 */
import type { IdocData, IdocTreeNode, SegmentDefinition } from '@core/types';

export const IDOC_TREE: IdocTreeNode[] = [
  {
    segment: 'E1ASMDM',
    max: 1,
    children: [
      {
        segment: 'E1ASMDT',
        max: 99,
        children: [
          {
            segment: 'E1SMLTH',
            max: 9,
            children: [
              {
                segment: 'E1SMLTL',
                max: 9999,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
];

export const SEGMENT_DEFINITIONS: Record<string, SegmentDefinition> = {
  E1ASMDM: {
    description: 'Mestre serviços prestados dados básicos',
    fields: [
      {
        name: 'MSGFN',
        description: 'Função (Create/Update/Delete)',
        type: 'CHAR(3)',
      },
      {
        name: 'ASNUM',
        description: 'Nº de serviço',
        type: 'CHAR(18)',
      },
      {
        name: 'LVORM',
        description: 'Marcação para eliminação',
        type: 'CHAR(1)',
      },
      {
        name: 'MATKL',
        description: 'Grupo de mercadorias',
        type: 'CHAR(9)',
      },
      {
        name: 'MEINS',
        description: 'Unidade de medida básica',
        type: 'UNIT(3)',
      },
      {
        name: 'ASTYP',
        description: 'Categoria de serviços',
        type: 'CHAR(4)',
      },
      {
        name: 'EAN11',
        description: 'Nº europeu do artigo (EAN)',
        type: 'CHAR(18)',
      },
      {
        name: 'NUMTP',
        description: 'Ctg.de número do EAN',
        type: 'CHAR(2)',
      },
      {
        name: 'SPART',
        description: 'Setor de atividade',
        type: 'CHAR(2)',
      },
      {
        name: 'BEGRU',
        description: 'Grupo de autorizações',
        type: 'CHAR(4)',
      },
      {
        name: 'MSTAE',
        description: 'Status material p/todos os centros',
        type: 'CHAR(2)',
      },
      {
        name: 'MSTDE',
        description: 'Data validade status material',
        type: 'DATS(8)',
      },
      {
        name: 'BKLAS',
        description: 'Classe de avaliação',
        type: 'CHAR(4)',
      },
      {
        name: 'LSTHI',
        description: 'Nº de serviço de hierarquia',
        type: 'CHAR(18)',
      },
      {
        name: 'MLANG',
        description: 'Idioma principal textos',
        type: 'LANG(1)',
      },
      {
        name: 'LGART',
        description: 'Rubrica salarial',
        type: 'CHAR(4)',
      },
      {
        name: 'LBNUM',
        description: 'Denominação do tipo de serviço',
        type: 'CHAR(3)',
      },
      {
        name: 'AUSGB',
        description: 'Saída do tipo de serviço',
        type: 'NUMC(4)',
      },
      {
        name: 'STLVPOS',
        description: 'Item de relação de serviços standard',
        type: 'CHAR(18)',
      },
      {
        name: 'TAXIM',
        description: 'Indicador de imposto (compras)',
        type: 'CHAR(1)',
      },
      {
        name: 'IWUMZ',
        description: 'Campo char (6)',
        type: 'CHAR(6)',
      },
      {
        name: 'IWUMN',
        description: 'Campo char (6)',
        type: 'CHAR(6)',
      },
      {
        name: 'IWEIN',
        description: 'Unidade de medida',
        type: 'CHAR(3)',
      },
      {
        name: 'FORMELNR',
        description: 'Nº fórmula',
        type: 'CHAR(10)',
      },
      {
        name: 'CHGTEXT',
        description: 'Mod.texto breve permit.',
        type: 'CHAR(1)',
      },
    ],
  },
  E1ASMDT: {
    description: 'Mestre de serviços prestados textos breves',
    fields: [
      {
        name: 'MSGFN',
        description: 'Função',
        type: 'CHAR(3)',
      },
      {
        name: 'SPRAS',
        description: 'Código de idioma',
        type: 'LANG(1)',
      },
      {
        name: 'ASKTX',
        description: 'Texto breve serviço',
        type: 'CHAR(40)',
      },
      {
        name: 'SPRAS_ISO',
        description: 'Código idioma ISO',
        type: 'CHAR(2)',
      },
    ],
  },
  E1SMLTH: {
    description: 'Mestre de serviços texto descritivo ID (Header)',
    fields: [
      {
        name: 'MSGFN',
        description: 'Função',
        type: 'CHAR(3)',
      },
      {
        name: 'TDOBJECT',
        description: 'Textos: objeto de aplicação',
        type: 'CHAR(10)',
      },
      {
        name: 'TDNAME',
        description: 'TDIC nome do texto',
        type: 'CHAR(16)',
      },
      {
        name: 'TDID',
        description: 'ID de texto',
        type: 'CHAR(4)',
      },
      {
        name: 'TDSPRAS',
        description: 'Código de idioma',
        type: 'LANG(1)',
      },
      {
        name: 'TDTEXTTYPE',
        description: 'SAPscript: formato de um texto',
        type: 'CHAR(6)',
      },
      {
        name: 'TDSPRAS_ISO',
        description: 'Código idioma ISO',
        type: 'CHAR(2)',
      },
    ],
  },
  E1SMLTL: {
    description: 'Mestre serviços texto descritivo linha de texto',
    fields: [
      {
        name: 'TDFORMAT',
        description: 'Coluna de formato',
        type: 'CHAR(2)',
      },
      {
        name: 'TDLINE',
        description: 'Linha de texto',
        type: 'CHAR(132)',
      },
    ],
  },
};

export const SERVICES_DATA: IdocData = {
  title: 'SRVMAS - Mestre de Serviços',
  description: 'IDoc SRVMAS para distribuição de dados mestres',
  tree: IDOC_TREE,
  segments: SEGMENT_DEFINITIONS,
};

export default SERVICES_DATA;
