/**
 * Dados do IDoc QMMAS - Qualidade de Material
 * 1 segmentos, 36 campos
 * Gerado automaticamente a partir do HTML original
 */
import type { IdocData } from '../types';

export const MATERIAL_QM_DATA: IdocData = {
  title: 'QMMAS - Qualidade de Material',
  description: 'IDoc para distribuição de dados de qualidade de materiais',
  tree: [
    {
      segment: 'E1BP1001004_QMAT',
      description:
        'Dds.controle QM material (QMAT) ALE distribuição com\n                                BAPI',
      max: 999999999,
      fields: [
        { name: 'FUNCTION', description: 'Função', type: 'CHAR(3)' },
        { name: 'INSPTYPE', description: 'Tipo de controle', type: 'CHAR(8)' },
        { name: 'MATERIAL', description: 'Nº do material', type: 'CHAR(18)' },
        { name: 'PLANT', description: 'Centro', type: 'CHAR(4)' },
        {
          name: 'IND_INSP_WITH_TSK_LIST',
          description: 'Controle com lista de tarefas',
          type: 'CHAR(1)',
        },
        {
          name: 'IND_SPEC_MATSPEC',
          description: 'Controle com especificação de material',
          type: 'CHAR(1)',
        },
        {
          name: 'IND_SPEC_CONFIG',
          description: 'Especificações de controle da configuração',
          type: 'CHAR(1)',
        },
        {
          name: 'IND_SPEC_BATCH',
          description: 'Especificações de controle da determinação de lotes',
          type: 'CHAR(1)',
        },
        {
          name: 'IND_AUTO_ASSIGN',
          description: 'Atribuição automática de especificações',
          type: 'CHAR(1)',
        },
        {
          name: 'IND_INSP_BY_CHARAC',
          description: 'Efetuar controle por características',
          type: 'CHAR(1)',
        },
        {
          name: 'IND_POST_TO_INSP_STOCK',
          description: 'Registro em estoque em controle de qualidade',
          type: 'CHAR(1)',
        },
        {
          name: 'IND_AUTOMATIC_UD',
          description: 'Decisão de utilização automática prevista',
          type: 'CHAR(1)',
        },
        { name: 'SAMPLING_PROCEDURE', description: 'Processo de amostra', type: 'CHAR(8)' },
        { name: 'DYN_MODIF_RULE', description: 'Regra de controle dinâmico', type: 'CHAR(3)' },
        { name: 'INSP_PERCENTAGE', description: 'Porcentagem de controle', type: 'DEC(3)' },
        { name: 'IND_100_PERCENT_INSPECTION', description: 'Controle a 100%', type: 'CHAR(1)' },
        { name: 'IND_SKIPS_ALLOWED', description: 'Skips permitidos', type: 'CHAR(1)' },
        { name: 'IND_MANUAL_SAMPLE', description: 'Indicar amostra manualmente', type: 'CHAR(1)' },
        {
          name: 'IND_MANUAL_SAMPLE_CALC',
          description: 'Acionar cálculo de amostra manualmente',
          type: 'CHAR(1)',
        },
        {
          name: 'IND_SINGLE_UNITS_POSSIBLE',
          description: 'Administração de nºs de série',
          type: 'CHAR(1)',
        },
        { name: 'AVE_INSP_DURATION', description: 'Duração média do controle', type: 'DEC(3)' },
        {
          name: 'CONTR_INSP_LOT_CREATE',
          description: 'Controle da criação de lote de controle (agrupamento lotes)',
          type: 'CHAR(1)',
        },
        {
          name: 'QUAL_SCORE_PROCEDURE',
          description: 'Processo para cálculo do índice de qualidade',
          type: 'CHAR(2)',
        },
        {
          name: 'ALLOWED_SCRAP_SHARE',
          description: 'Quota de refugo permitida (em %) no lote de controle',
          type: 'DEC(6)',
        },
        {
          name: 'IND_SPECIAL_QM_ORDER',
          description: 'Entrar custos de controle na ordem QM individual',
          type: 'CHAR(1)',
        },
        {
          name: 'QM_ORDERID',
          description: 'Nº ordem para a entrada de custos de controle',
          type: 'CHAR(12)',
        },
        {
          name: 'IND_INSPTYPE_MAT_ACTIVE',
          description: 'Combinação tipo de controle - material está ativa',
          type: 'CHAR(1)',
        },
        { name: 'PREFERRED_INSPTYPE', description: 'Tipo de controle preferido', type: 'CHAR(1)' },
        {
          name: 'INSPTYPE_DELETE',
          description: 'Tps.contr.a serem eliminados (distr.ALE QM)',
          type: 'CHAR(8)',
        },
        {
          name: 'CREATION_TIME',
          description: 'Momento de geração de um indicador de modificação',
          type: 'CHAR(14)',
        },
        {
          name: 'MATERIAL_EXTERNAL',
          description: 'Nº de material longo para o campo MATERIAL',
          type: 'CHAR(40)',
        },
        {
          name: 'MATERIAL_GUID',
          description: 'GUID externo para campo MATERIAL',
          type: 'CHAR(32)',
        },
        {
          name: 'MATERIAL_VERSION',
          description: 'Nº de versão para campo MATERIAL',
          type: 'CHAR(10)',
        },
        {
          name: 'IND_HU_INSPECTION',
          description: 'Controle da unidade comercial',
          type: 'CHAR(1)',
        },
        { name: 'MS_FLAG', description: 'Código: especificações múltiplas', type: 'CHAR(1)' },
        {
          name: 'MATERIAL_LONG',
          description: 'Nº material (40 caracteres, necessário por razões técnicas)',
          type: 'CHAR(40)',
        },
      ],
      children: [],
    },
  ],
};
