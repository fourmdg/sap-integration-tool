/**
 * Dados do IDoc CHRMAS - Características de Material
 * 5 segmentos, 39 campos
 * Gerado automaticamente a partir do HTML original
 */
import type { IdocData } from '../types';

export const MATERIAL_CHARACTERISTICS_DATA: IdocData = {
  title: 'CHRMAS - Características de Material',
  description: 'IDoc para distribuição de características de materiais',
  tree: [
    {
      segment: 'E1OCLFM',
      description: 'Mestre classificação objetos',
      max: 1,
      fields: [
        { name: 'MSGFN', description: 'Função', type: 'CHAR(3)' },
        {
          name: 'OBTAB',
          description: 'Nome da tabela de banco de dados do objeto',
          type: 'CHAR(10)',
        },
        { name: 'OBJEK', description: 'Chave do objeto a ser classificado', type: 'CHAR(50)' },
        { name: 'KLART', description: 'Tipo de classe', type: 'CHAR(3)' },
        { name: 'MAFID', description: 'Código objeto/classe', type: 'CHAR(1)' },
        {
          name: 'OBJECT_TABLE',
          description: 'Nome da tabela de banco de dados do objeto',
          type: 'CHAR(30)',
        },
      ],
      children: [
        {
          segment: 'E1KSSKM',
          description: 'Classificação distribuição: atribuição à classe de objeto',
          max: 9999,
          fields: [
            { name: 'MSGFN', description: 'Função', type: 'CHAR(3)' },
            { name: 'CLASS', description: 'Nº classe', type: 'CHAR(18)' },
            { name: 'AENNR', description: 'Nº modificação', type: 'CHAR(12)' },
            { name: 'DATUV', description: 'Data início validade', type: 'DATS(8)' },
            { name: 'STATU', description: 'Status da classificação', type: 'CHAR(1)' },
            { name: 'STDCL', description: 'Código: classe standard', type: 'CHAR(1)' },
          ],
          children: [],
        },
        {
          segment: 'E1AUSPM',
          description:
            'Distribuição classificação: avaliação características\n                                objeto',
          max: 9999,
          fields: [
            { name: 'MSGFN', description: 'Função', type: 'CHAR(3)' },
            { name: 'ATNAM', description: 'Nome da característica', type: 'CHAR(30)' },
            { name: 'AENNR', description: 'Nº modificação', type: 'CHAR(12)' },
            { name: 'DATUV', description: 'Data início validade', type: 'DATS(8)' },
            { name: 'ATWRT', description: 'Valor da característica', type: 'CHAR(30)' },
            {
              name: 'ATFLV',
              description: 'Valor interno vírgula flutuante desde',
              type: 'CHAR(22)',
            },
            { name: 'ATAWE', description: 'Unidade medida', type: 'UNIT(3)' },
            { name: 'ATFLB', description: 'Valor interno vírgula flutuante até', type: 'CHAR(22)' },
            { name: 'ATAW1', description: 'Unidade medida', type: 'UNIT(3)' },
            { name: 'ATCOD', description: 'Code para dependência de valores', type: 'CHAR(1)' },
            { name: 'ATTLV', description: 'Tolerância de', type: 'CHAR(22)' },
            { name: 'ATTLB', description: 'Tolerância até', type: 'CHAR(22)' },
            {
              name: 'ATPRZ',
              description: 'Código de indicações de tolerâncias em %',
              type: 'CHAR(1)',
            },
            { name: 'ATINC', description: 'Incremento dentro de um intervalo', type: 'CHAR(22)' },
            { name: 'ATAUT', description: 'Classificação: autor', type: 'CHAR(1)' },
            {
              name: 'ATIMB',
              description: 'Nº característica da ctg.dados definida pelo usuário',
              type: 'NUMC(10)',
            },
            { name: 'ATZIS', description: 'Contador de instâncias', type: 'NUMC(3)' },
            { name: 'UDEF_CHAR', description: 'Nome da característica', type: 'CHAR(30)' },
          ],
          children: [],
        },
        {
          segment: 'E1DATEM',
          description: 'Data-chave mestra e nº de modificação',
          max: 1,
          fields: [
            { name: 'MSGFN', description: 'Função', type: 'CHAR(3)' },
            { name: 'KEY_DATE', description: 'Data do sistema', type: 'DATS(8)' },
            { name: 'AENNR', description: 'Nº modificação', type: 'CHAR(12)' },
            {
              name: 'EFFECTIVITY',
              description: 'Avaliar parâmetros de validade / substituir nºs modificação',
              type: 'CHAR(1)',
            },
          ],
          children: [],
        },
      ],
    },
    {
      segment: 'E1UPSLINK',
      description: 'Referência de objeto a UPS superior',
      max: 1,
      fields: [
        { name: 'UPSNAM', description: 'Pacote de distribuição ALE: nome', type: 'CHAR(20)' },
        {
          name: 'ORGNAM',
          description: 'Pacote de distribuição ALE: pacote original (nome)',
          type: 'CHAR(20)',
        },
        { name: 'MESTYP', description: 'Tipo de mensagem', type: 'CHAR(30)' },
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
      children: [],
    },
  ],
};
