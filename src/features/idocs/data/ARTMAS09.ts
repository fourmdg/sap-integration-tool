/**
 * Dados do IDoc ARTMAS09 - Mestre de Materiais (Retail)
 * 89 segmentos, 1834 campos
 * Gerado automaticamente a partir do HTML original
 */
import type { IdocData } from '../types';

export const ARTMAS_DATA: IdocData = {
  title: 'ARTMAS09 - Mestre de Materiais (Retail)',
  description: 'IDoc para distribuição de dados mestres',
  tree: [
    {
      segment: 'E1BPE1MATHEAD',
      description:
        'Transf.dados varejo - segmento cabeçalho com info\n                                controle',
      max: 1,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'MATL_TYPE',
          description: 'Tipo de material',
          type: 'CHAR(4)',
        },
        {
          name: 'MATL_GROUP',
          description: 'Grupo de mercadorias',
          type: 'CHAR(9)',
        },
        {
          name: 'MATL_CAT',
          description: 'Ctg.material',
          type: 'CHAR(2)',
        },
        {
          name: 'CHAR_PROF',
          description: 'Perfil da característica',
          type: 'CHAR(18)',
        },
        {
          name: 'REF_MATL',
          description: 'Material-modelo',
          type: 'CHAR(18)',
        },
        {
          name: 'BASIC_VIEW',
          description: 'Código: considerar visão "dados básicos"',
          type: 'CHAR(1)',
        },
        {
          name: 'LIST_VIEW',
          description: 'Código: considerar visão "catalogação"',
          type: 'CHAR(1)',
        },
        {
          name: 'SALES_VIEW',
          description: 'Código: considerar visão "vendas"',
          type: 'CHAR(1)',
        },
        {
          name: 'LOGDC_VIEW',
          description: 'Código: considerar visão "logística centro de distribuição"',
          type: 'CHAR(1)',
        },
        {
          name: 'LOGST_VIEW',
          description: 'Código: considerar visão "logística filial"',
          type: 'CHAR(1)',
        },
        {
          name: 'POS_VIEW',
          description: 'Código: considerar visão "POS"',
          type: 'CHAR(1)',
        },
        {
          name: 'CK_NO_RNGE',
          description: 'Código: verificar nº ext.material em relação a interv.numer.',
          type: 'CHAR(1)',
        },
        {
          name: 'ALL_FIELDS',
          description: 'Código: todos os campos de dados úteis relevantes p/modif.',
          type: 'CHAR(1)',
        },
        {
          name: 'NO_APPL_LOG',
          description: 'Não escrever log de aplicação',
          type: 'CHAR(1)',
        },
        {
          name: 'NO_CHANGE_DOC',
          description: 'Não gravar documentos de modificação',
          type: 'CHAR(1)',
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
          name: 'REF_MATL_EXTERNAL',
          description: 'Nº de material longo para o campo REF_MATL',
          type: 'CHAR(40)',
        },
        {
          name: 'REF_MATL_GUID',
          description: 'ID único externo para o campo REF_MATL',
          type: 'CHAR(32)',
        },
        {
          name: 'REF_MATL_VERSION',
          description: 'Nº da versão para o campo REF_MATL',
          type: 'CHAR(10)',
        },
      ],
      children: [],
    },
    {
      segment: 'E1BPE1VARKEY',
      description:
        'Transf.dados varejo - lista das variantes para\n                                mat.genérico',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'VARIANT',
          description: 'Nº de variante',
          type: 'CHAR(18)',
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
          name: 'VARIANT_EXTERNAL',
          description: 'Nº de material longo para o campo VARIANT',
          type: 'CHAR(40)',
        },
        {
          name: 'VARIANT_GUID',
          description: 'ID único externo para o campo VARIANT',
          type: 'CHAR(32)',
        },
        {
          name: 'VARIANT_VERSION',
          description: 'Nº da versão para o campo VARIANT',
          type: 'CHAR(10)',
        },
        {
          name: 'MATERIAL_LONG',
          description: 'Nº material (40 caracteres, necessário por razões técnicas)',
          type: 'CHAR(40)',
        },
        {
          name: 'VARIANT_LONG',
          description: 'Nº de variante',
          type: 'CHAR(40)',
        },
      ],
      children: [],
    },
    {
      segment: 'E1BPE1AUSPRT',
      description:
        'Transferência de dados Retail - avaliação de\n                                características',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº material (18 caracteres, modo de compatibilidade)',
          type: 'CHAR(18)',
        },
        {
          name: 'CHAR_NAME',
          description: 'Nome da característica',
          type: 'CHAR(30)',
        },
        {
          name: 'CHAR_VALUE',
          description: 'Valor da característica',
          type: 'CHAR(30)',
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
          name: 'MATERIAL_LONG',
          description: 'Nº material (40 caracteres, necessário por razões técnicas)',
          type: 'CHAR(40)',
        },
        {
          name: 'CHAR_VALUE_LONG',
          description: 'Valor da característica',
          type: 'CHAR(70)',
        },
      ],
      children: [],
    },
    {
      segment: 'E1BPE1AUSPRTX',
      description:
        'Transf.dados varejo - barra de seleção para\n                                BAPIE1AUSPRT',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº material (18 caracteres, modo de compatibilidade)',
          type: 'CHAR(18)',
        },
        {
          name: 'CHAR_NAME',
          description: 'Nome da característica',
          type: 'CHAR(30)',
        },
        {
          name: 'CHAR_VALUE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
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
          name: 'MATERIAL_LONG',
          description: 'Nº material (40 caracteres, necessário por razões técnicas)',
          type: 'CHAR(40)',
        },
        {
          name: 'CHAR_VALUE_LONG',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
      ],
      children: [],
    },
    {
      segment: 'E1BPE1MARART',
      description:
        'Transf.dados varejo - dados de material a nível de\n                                mandante',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'CREATED_ON',
          description: 'Data de criação',
          type: 'DATS(8)',
        },
        {
          name: 'CREATED_BY',
          description: 'Nome do responsável que adicionou o objeto',
          type: 'CHAR(12)',
        },
        {
          name: 'LAST_CHNGE',
          description: 'Data da última modificação',
          type: 'DATS(8)',
        },
        {
          name: 'CHANGED_BY',
          description: 'Nome do responsável pela modificação do objeto',
          type: 'CHAR(12)',
        },
        {
          name: 'DEL_FLAG',
          description: 'Marcar mat.para eliminação a nível de mandante',
          type: 'CHAR(1)',
        },
        {
          name: 'OLD_MAT_NO',
          description: 'Nº material antigo',
          type: 'CHAR(18)',
        },
        {
          name: 'BASE_UOM',
          description: 'Unidade de medida básica',
          type: 'UNIT(3)',
        },
        {
          name: 'BASE_UOM_ISO',
          description: 'Unidade de medida básica no código ISO',
          type: 'CHAR(3)',
        },
        {
          name: 'PO_UNIT',
          description: 'Unidade de medida do pedido',
          type: 'UNIT(3)',
        },
        {
          name: 'PO_UNIT_ISO',
          description: 'Unidade de medida de pedido em code ISO',
          type: 'CHAR(3)',
        },
        {
          name: 'DOCUMENT',
          description: 'Nº documento (sem sistema de administração de documentos)',
          type: 'CHAR(22)',
        },
        {
          name: 'DOC_TYPE',
          description: 'Tipo de documento (s/sistema administração documentos)',
          type: 'CHAR(3)',
        },
        {
          name: 'DOC_VERS',
          description: 'Versão do documento (sem sistema administração documentos)',
          type: 'CHAR(2)',
        },
        {
          name: 'DOC_FORMAT',
          description: 'Formato DIN do documento (s/sistema administração documents)',
          type: 'CHAR(4)',
        },
        {
          name: 'DOC_CHG_NO',
          description: 'Nº modificação do documento (sem sistema de admin.docs.)',
          type: 'CHAR(6)',
        },
        {
          name: 'PAGE_NO',
          description: 'Nº folha do documento (sem sistema de admin. de documentos)',
          type: 'CHAR(3)',
        },
        {
          name: 'NO_SHEETS',
          description: 'Nº de folhas (sem sistema de admin. de documentos)',
          type: 'NUMC(3)',
        },
        {
          name: 'PROD_MEMO',
          description: 'Instrução de produção/de controle de qualidade',
          type: 'CHAR(18)',
        },
        {
          name: 'PAGEFORMAT',
          description: 'Formato DIN da instrução de produção',
          type: 'CHAR(4)',
        },
        {
          name: 'SIZE_DIM',
          description: 'Tamanho/dimensão',
          type: 'CHAR(32)',
        },
        {
          name: 'BASIC_MATL',
          description: 'Matéria-base (componente de um material) - obsoleto',
          type: 'CHAR(14)',
        },
        {
          name: 'STD_DESCR',
          description: 'Denominação da norma (p.ex. DIN)',
          type: 'CHAR(18)',
        },
        {
          name: 'LAB_DESIGN',
          description: 'Laboratório/escritório de engenharia',
          type: 'CHAR(3)',
        },
        {
          name: 'PUR_VALKEY',
          description: 'Chave de valores de Compras',
          type: 'CHAR(4)',
        },
        {
          name: 'NET_WEIGHT',
          description: 'Peso líquido',
          type: 'QUAN(15)',
        },
        {
          name: 'CONTAINER',
          description: 'Instrução de recipiente',
          type: 'CHAR(2)',
        },
        {
          name: 'STOR_CONDS',
          description: 'Condições de estocagem',
          type: 'CHAR(2)',
        },
        {
          name: 'TEMP_CONDS',
          description: 'Código para a condição de temperatura',
          type: 'CHAR(2)',
        },
        {
          name: 'TRANS_GRP',
          description: 'Grupo de transporte',
          type: 'CHAR(4)',
        },
        {
          name: 'HAZ_MAT_NO',
          description: 'Nº substância perigosa',
          type: 'CHAR(18)',
        },
        {
          name: 'DIVISION',
          description: 'Setor de atividade',
          type: 'CHAR(2)',
        },
        {
          name: 'COMPETITOR',
          description: 'Concorrente',
          type: 'CHAR(10)',
        },
        {
          name: 'QTY_GR_GI',
          description: 'Qtd.: determinação do número notas acompanhamento a imprimir',
          type: 'QUAN(15)',
        },
        {
          name: 'PROC_RULE',
          description: 'Norma de suprimento',
          type: 'CHAR(1)',
        },
        {
          name: 'SUP_SOURCE',
          description: 'Fonte de suprimento',
          type: 'CHAR(1)',
        },
        {
          name: 'SEASON',
          description: 'Ctg.sazonal',
          type: 'CHAR(4)',
        },
        {
          name: 'LABEL_TYPE',
          description: 'Tipo de etiquetagem',
          type: 'CHAR(2)',
        },
        {
          name: 'LABEL_FORM',
          description: 'Forma da etiqueta',
          type: 'CHAR(2)',
        },
        {
          name: 'PROD_HIER',
          description: 'Hierarquia de produtos',
          type: 'CHAR(18)',
        },
        {
          name: 'CAD_ID',
          description: 'Código CAD',
          type: 'CHAR(1)',
        },
        {
          name: 'ALLOWED_WT',
          description: 'Peso admissível da embalagem',
          type: 'QUAN(15)',
        },
        {
          name: 'PACK_WT_UN',
          description: 'Unidade de peso (peso admissível de embalagem)',
          type: 'UNIT(3)',
        },
        {
          name: 'PACK_WT_UN_ISO',
          description: 'Unidade de peso (peso admissível de embalagem) em code ISO',
          type: 'CHAR(3)',
        },
        {
          name: 'ALLWD_VOL',
          description: 'Volume de embalagem admissível',
          type: 'QUAN(15)',
        },
        {
          name: 'PACK_VO_UN',
          description: 'Unidade de volume (volume admissível de embalagem)',
          type: 'UNIT(3)',
        },
        {
          name: 'PACK_VO_UN_ISO',
          description: 'Unidade de volume (volume admissível) em code ISO',
          type: 'CHAR(3)',
        },
        {
          name: 'WT_TOL_LT',
          description: 'Tolerância excesso de peso da unidade comercial',
          type: 'DEC(5)',
        },
        {
          name: 'VOL_TOL_LT',
          description: 'Tolerância excesso de volume da unidade comercial',
          type: 'DEC(5)',
        },
        {
          name: 'VAR_ORD_UN',
          description: 'UM pedido variável ativa',
          type: 'CHAR(1)',
        },
        {
          name: 'BATCH_MGMT',
          description: 'Código para administração em lote obrigatória',
          type: 'CHAR(1)',
        },
        {
          name: 'SH_MAT_TYP',
          description: 'Tipo de material de embalagem',
          type: 'CHAR(4)',
        },
        {
          name: 'FILL_LEVEL',
          description: 'Nível de preenchimento (por volume)',
          type: 'DEC(4)',
        },
        {
          name: 'STACK_FACT',
          description: 'Fator de empilhamento',
          type: 'INT2(6)',
        },
        {
          name: 'MAT_GRP_SM',
          description: 'Grupo de materiais material de embalagem',
          type: 'CHAR(4)',
        },
        {
          name: 'AUTH_GROUP',
          description: 'Grupo de autorizações',
          type: 'CHAR(4)',
        },
        {
          name: 'QM_PROCMNT',
          description: 'QM no suprimento está ativo',
          type: 'CHAR(1)',
        },
        {
          name: 'CATPROFILE',
          description: 'Perfil do catálogo',
          type: 'CHAR(9)',
        },
        {
          name: 'MINREMLIFE',
          description: 'Tempo de validade restante',
          type: 'DEC(6)',
        },
        {
          name: 'SHELF_LIFE',
          description: 'Prazo de validade',
          type: 'DEC(6)',
        },
        {
          name: 'STOR_PCT',
          description: 'Percentagem para armazenagem',
          type: 'DEC(4)',
        },
        {
          name: 'VALID_FROM',
          description: 'Data de início da validade',
          type: 'DATS(8)',
        },
        {
          name: 'DELN_DATE',
          description: 'Data da liquidação',
          type: 'DATS(8)',
        },
        {
          name: 'SAESON_YR',
          description: 'Exercício sazonal',
          type: 'CHAR(4)',
        },
        {
          name: 'PRICE_BAND',
          description: 'Tipo de faixa de preço',
          type: 'CHAR(2)',
        },
        {
          name: 'EMPTIESBOM',
          description: 'Código: lista técnica de vasilhames',
          type: 'CHAR(1)',
        },
        {
          name: 'EXTMATLGRP',
          description: 'Grupo de mercadorias externo',
          type: 'CHAR(18)',
        },
        {
          name: 'CONF_MATL',
          description: 'Material configurável geral',
          type: 'CHAR(18)',
        },
        {
          name: 'PR_REF_MAT',
          description: 'Mat.ref.p/prç.',
          type: 'CHAR(18)',
        },
        {
          name: 'PUR_STATUS',
          description: 'Status material p/todos os centros',
          type: 'CHAR(2)',
        },
        {
          name: 'SAL_STATUS',
          description: 'Status de material para todos os canais de vendas',
          type: 'CHAR(2)',
        },
        {
          name: 'PVALIDFROM',
          description: 'Data a partir da qual stat.mat.p/todos os centros é válido',
          type: 'DATS(8)',
        },
        {
          name: 'SVALIDFROM',
          description: 'Data a partir da qual o status mat.p/todos can.dist.é válido',
          type: 'DATS(8)',
        },
        {
          name: 'TAX_CLASS',
          description: 'Classificação fiscal do material',
          type: 'CHAR(1)',
        },
        {
          name: 'CONT_UNIT',
          description: 'Unidade de medida conteúdo',
          type: 'UNIT(3)',
        },
        {
          name: 'CONT_UNIT_ISO',
          description: 'Unidade de medida de conteúdo em code ISO',
          type: 'CHAR(3)',
        },
        {
          name: 'NET_CONT',
          description: 'Conteúdo líquido',
          type: 'QUAN(15)',
        },
        {
          name: 'COMPPRUNIT',
          description: 'Preço de comparação',
          type: 'DEC(6)',
        },
        {
          name: 'GROSS_CONT',
          description: 'Conteúdo bruto',
          type: 'QUAN(15)',
        },
        {
          name: 'PRPROFVAR',
          description: 'Perfil de cálculo para variantes',
          type: 'CHAR(1)',
        },
        {
          name: 'QUAL_DIK',
          description: 'Material com direito a bonificação em espécie',
          type: 'CHAR(1)',
        },
        {
          name: 'ENVT_RLVT',
          description: 'Código: relevância para o meio ambiente',
          type: 'CHAR(1)',
        },
        {
          name: 'PROD_ALLOC',
          description: 'Alocação de produtos: esquema de alocação de produtos',
          type: 'CHAR(18)',
        },
        {
          name: 'SEASMATCAT',
          description: 'Coleção em uma época',
          type: 'CHAR(2)',
        },
        {
          name: 'HAZMATPROF',
          description: 'Perfil para código de mercadoria perigosa',
          type: 'CHAR(3)',
        },
        {
          name: 'HIGH_VISC',
          description: 'Código: de alta viscosidade',
          type: 'CHAR(1)',
        },
        {
          name: 'LOOSEORLIQ',
          description: 'Código: a granel / líquido',
          type: 'CHAR(1)',
        },
        {
          name: 'CLOSED_BOX',
          description: 'O material de embalagem é uma embalagem fechada',
          type: 'CHAR(1)',
        },
        {
          name: 'APPD_B_REC',
          description: 'Código: é necessário protocolo de lotes autorizado',
          type: 'CHAR(1)',
        },
        {
          name: 'PERIOD_IND_EXPIRATION_DATE',
          description: 'Código de período para DV',
          type: 'CHAR(1)',
        },
        {
          name: 'ITEM_CAT',
          description: 'Grupo de categorias de item geral',
          type: 'CHAR(4)',
        },
        {
          name: 'BASIC_MATL_NEW',
          description: 'Material básico',
          type: 'CHAR(48)',
        },
        {
          name: 'CONF_MATL_EXTERNAL',
          description: 'Nº material longo para o campo CONF_MATL',
          type: 'CHAR(40)',
        },
        {
          name: 'CONF_MATL_GUID',
          description: 'GUID externo para campo CONF_MATL',
          type: 'CHAR(32)',
        },
        {
          name: 'CONF_MATL_VERSION',
          description: 'Nº de versão para campo CONF_MATL',
          type: 'CHAR(10)',
        },
        {
          name: 'HAZ_MAT_NO_EXTERNAL',
          description: 'Nº de material longo para o campo HAZ_MAT_NO',
          type: 'CHAR(40)',
        },
        {
          name: 'HAZ_MAT_NO_GUID',
          description: 'GUID externo para campo HAZ_MAT_NO',
          type: 'CHAR(32)',
        },
        {
          name: 'HAZ_MAT_NO_VERSION',
          description: 'Nº de versão para campo HAZ_MAT_NO',
          type: 'CHAR(10)',
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
          name: 'PR_REF_MAT_EXTERNAL',
          description: 'Nº de material longo para o campo PR_REF_MAT',
          type: 'CHAR(40)',
        },
        {
          name: 'PR_REF_MAT_GUID',
          description: 'ID único externo para o campo PR_REF_MAT',
          type: 'CHAR(32)',
        },
        {
          name: 'PR_REF_MAT_VERSION',
          description: 'Nº da versão para o campo PR_REF_MAT',
          type: 'CHAR(10)',
        },
        {
          name: 'PREPACK_GENERIC_MATL',
          description: 'Nº do material genérico em materiais pré-embalados',
          type: 'CHAR(18)',
        },
      ],
      children: [
        {
          segment: 'E1BPE1MARART1',
          description:
            'Transf.dados varejo - dados de material a nível de\n                                mandante',
          max: 1,
          fields: [
            {
              name: 'CREATION_STATUS',
              description: 'Status de criação suprimento por época',
              type: 'CHAR(2)',
            },
            {
              name: 'FREE_CHAR_VALUE',
              description: 'Valor da característica para fins de análise',
              type: 'CHAR(18)',
            },
            {
              name: 'CARE_CODE',
              description: 'Instruções cuidado (p.ex.,instr.lavag.,instr.pass.ferro,...)',
              type: 'CHAR(16)',
            },
            {
              name: 'BRAND_ID',
              description: 'Marca',
              type: 'CHAR(4)',
            },
            {
              name: 'FIBER_CODE_1',
              description: 'Código de fibras para tecidos (componente 1)',
              type: 'CHAR(3)',
            },
            {
              name: 'FIBER_PART_1',
              description: 'Porcentagem de fibra (componente 1)',
              type: 'NUMC(3)',
            },
            {
              name: 'FIBER_CODE_2',
              description: 'Código de fibras para têxteis (componente 2)',
              type: 'CHAR(3)',
            },
            {
              name: 'FIBER_PART_2',
              description: 'Porcentagem de fibra (componente 2)',
              type: 'NUMC(3)',
            },
            {
              name: 'FIBER_CODE_3',
              description: 'Código de fibras para têxteis (componente 3)',
              type: 'CHAR(3)',
            },
            {
              name: 'FIBER_PART_3',
              description: 'Porcentagem de fibra (componente 3)',
              type: 'NUMC(3)',
            },
            {
              name: 'FIBER_CODE_4',
              description: 'Código de fibras para têxteis (componente 4)',
              type: 'CHAR(3)',
            },
            {
              name: 'FIBER_PART_4',
              description: 'Porcentagem de fibra (componente 4)',
              type: 'NUMC(3)',
            },
            {
              name: 'FIBER_CODE_5',
              description: 'Código de fibras para têxteis (componente 5)',
              type: 'CHAR(3)',
            },
            {
              name: 'FIBER_PART_5',
              description: 'Porcentagem de fibra (componente 5)',
              type: 'NUMC(3)',
            },
            {
              name: 'FASHION_GRADE',
              description: 'Ciclo de vida do produto da moda',
              type: 'CHAR(4)',
            },
            {
              name: 'PACKING_REF_MATL',
              description: 'Material ref.p/materiais a serem embalados da mesma maneira',
              type: 'CHAR(18)',
            },
            {
              name: 'PREPACK_GENERIC_MATL_GUID',
              description: 'GUID externo (desenvolvimento futuro) p/campo PREPACK_GENER',
              type: 'CHAR(32)',
            },
            {
              name: 'PACKING_REF_MATL_EXTERNAL',
              description: 'Nº extenso material (futuro desenvolvimento) p/campo PACKI',
              type: 'CHAR(40)',
            },
            {
              name: 'PACKING_REF_MATL_GUID',
              description: 'GUID externo (futuro desenvolvimento) p/campo PACKING_REF_M',
              type: 'CHAR(32)',
            },
            {
              name: 'PACKING_REF_MATL_VERSION',
              description: 'Nº da versão (futuro desenvolvimento) para campo PACKING_REF',
              type: 'CHAR(10)',
            },
            {
              name: 'STD_HU_TYPE',
              description: 'Tipo de unidade comercial standard',
              type: 'CHAR(4)',
            },
            {
              name: 'PILFERABLE',
              description: 'Com risco de roubo',
              type: 'CHAR(1)',
            },
            {
              name: 'WHSE_STORAGE_CONDITION',
              description: 'Condição de armazenamento',
              type: 'CHAR(2)',
            },
            {
              name: 'WHSE_MATERIAL_GROUP',
              description: 'Grupo de materiais estocáveis',
              type: 'CHAR(4)',
            },
            {
              name: 'HANDLING_INDICATOR',
              description: 'Código de manuseio',
              type: 'CHAR(4)',
            },
            {
              name: 'HAZ_MAT_RELEVANT',
              description: 'Relevante para substância perigosa',
              type: 'CHAR(1)',
            },
            {
              name: 'HU_TYPE',
              description: 'Tipo de unidade comercial',
              type: 'CHAR(4)',
            },
            {
              name: 'VARIABLE_TARE_WEIGHT',
              description: 'Massa líquida variável',
              type: 'CHAR(1)',
            },
            {
              name: 'MAX_ALLOWED_CAPACITY',
              description: 'Capacidade máxima permitida do material de embalagem',
              type: 'DEC(17)',
            },
            {
              name: 'OVERCAPACITY_TOLERANCE',
              description: 'Tolerância de capacidade máxima da unidade comercial',
              type: 'DEC(5)',
            },
            {
              name: 'MAX_ALLOWED_LENGTH',
              description: 'Comprimento máximo da embalagem de um material da embalagem',
              type: 'QUAN(17)',
            },
            {
              name: 'MAX_ALLOWED_WIDTH',
              description: 'Largura máxima da embalagem de um material de embalagem',
              type: 'QUAN(17)',
            },
            {
              name: 'MAX_ALLOWED_HEIGTH',
              description: 'Altura máx.da embalagem de um material de embalagem',
              type: 'QUAN(17)',
            },
            {
              name: 'MAX_DIMENSION_UN',
              description: 'Unid.medida p/altura/largura/comprimento máx.da embalagem',
              type: 'UNIT(3)',
            },
            {
              name: 'MAX_DIMENSION_UN_ISO',
              description: 'Unid.medida p/altura/larg./compr.máx.da embalagem em cód.ISO',
              type: 'CHAR(3)',
            },
            {
              name: 'COUNTRYORI',
              description: 'País de origem do material (origem CCI)',
              type: 'CHAR(3)',
            },
            {
              name: 'COUNTRYORI_ISO',
              description: 'País de origem do material em code ISO',
              type: 'CHAR(2)',
            },
            {
              name: 'MATFRGTGRP',
              description: 'Grupo de frete de material',
              type: 'CHAR(8)',
            },
            {
              name: 'QUARANTINE_PERIOD',
              description: 'Quarentena',
              type: 'QUAN(4)',
            },
            {
              name: 'QUARANTINE_PERIOD_UN',
              description: 'Unidade de tempo para quarentena',
              type: 'UNIT(3)',
            },
            {
              name: 'QUARANTINE_PERIOD_UN_ISO',
              description: 'Unidade de tempo de período de quarentena em código ISO',
              type: 'CHAR(3)',
            },
            {
              name: 'QUALITY_INSP_GRP',
              description: 'Grupo de controle de qualidade',
              type: 'CHAR(4)',
            },
            {
              name: 'SERIAL_NUMBER_PROFILE',
              description: 'Perfil nºs de série',
              type: 'CHAR(4)',
            },
            {
              name: 'EWM_CW_TOLERANCE_GROUP',
              description: 'EWM-CW: grupo de tolerância Catch Weight p/EWM',
              type: 'CHAR(9)',
            },
            {
              name: 'EWM_CW_INPUT_CONTROL',
              description: 'EWM-CW: perfil Catch Weight p/entrada da quantidade CW',
              type: 'CHAR(2)',
            },
            {
              name: 'PCKGING_SMARTFORM',
              description: 'Nome do formulário',
              type: 'CHAR(30)',
            },
            {
              name: 'ADJUST_PROFILE',
              description: 'Perfil de ajuste',
              type: 'CHAR(3)',
            },
            {
              name: 'ALLOW_PMAT_IGNO',
              description: 'Preço de variantes permitido (referente ao mestre artigos)',
              type: 'CHAR(1)',
            },
            {
              name: 'ANIMAL_ORIGIN_FLAG',
              description: 'Código: contém partes não têxteis de origem animal',
              type: 'CHAR(1)',
            },
            {
              name: 'SEGMENTATION_STRUCTURE',
              description: 'Estrutura de segmentação',
              type: 'CHAR(4)',
            },
            {
              name: 'SEGMENTATION_STRATEGY',
              description: 'Estratégia de segmentação',
              type: 'CHAR(8)',
            },
            {
              name: 'SEGMENTATION_STATUS',
              description: 'Status de segmentação mestre de materiais',
              type: 'CHAR(1)',
            },
            {
              name: 'FASHION_ATTRIBUTE_1',
              description: 'Campo de informação Fashion: 1',
              type: 'CHAR(10)',
            },
            {
              name: 'FASHION_ATTRIBUTE_2',
              description: 'Campo de informação Fashion: 2',
              type: 'CHAR(10)',
            },
            {
              name: 'FASHION_ATTRIBUTE_3',
              description: 'Campo de informação Fashion: 3',
              type: 'CHAR(6)',
            },
            {
              name: 'SEASON_LEVEL',
              description: 'Código: utilização de época',
              type: 'CHAR(1)',
            },
            {
              name: 'SEASON_FLAG',
              description: 'Código: época ativa na aministração estoques',
              type: 'CHAR(1)',
            },
            {
              name: 'SEGMENTATION_SCOPE',
              description: 'Escopo da estratégia de segmentação',
              type: 'CHAR(1)',
            },
            {
              name: 'SEGMENTATION_RELEVANCE',
              description: 'Relev.p/segmentação',
              type: 'CHAR(1)',
            },
            {
              name: 'MATERIAL_CONV_ID',
              description: 'ID de conversão de material p/conversão valor característica',
              type: 'CHAR(2)',
            },
            {
              name: 'MATERIAL_LONG',
              description: 'Nº material (40 caracteres, necessário por razões técnicas)',
              type: 'CHAR(40)',
            },
            {
              name: 'OLD_MAT_NO_LONG',
              description: 'Nº material antigo (40 caracteres, tecnicamente necessário)',
              type: 'CHAR(40)',
            },
            {
              name: 'HAZ_MAT_NO_LONG',
              description: 'Nº substância perigosa (40 caracteres, tecnicam.necessário)',
              type: 'CHAR(40)',
            },
            {
              name: 'CONF_MATL_LONG',
              description: 'Mat.configurável válido p/vários cens.(necessários 40 cars.)',
              type: 'CHAR(40)',
            },
            {
              name: 'PR_REF_MAT_LONG',
              description: 'Material de referência para o preço',
              type: 'CHAR(40)',
            },
            {
              name: 'PREPACK_GENERIC_MATL_LONG',
              description: 'Nº material do material genérico em materiais pré-embalados',
              type: 'CHAR(40)',
            },
            {
              name: 'PACKING_REF_MATL_LONG',
              description: 'Material ref.p/materiais a serem embalados da mesma maneira',
              type: 'CHAR(40)',
            },
          ],
          children: [],
        },
      ],
    },
    {
      segment: 'E1BPE1MARARTX',
      description:
        'Transf.dados varejo - barra de seleção para\n                                BAPIE1MARART',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº material (18 caracteres, modo de compatibilidade)',
          type: 'CHAR(18)',
        },
        {
          name: 'CREATED_ON',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'CREATED_BY',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'LAST_CHNGE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'CHANGED_BY',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'DEL_FLAG',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'OLD_MAT_NO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'BASE_UOM',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'BASE_UOM_ISO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PO_UNIT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PO_UNIT_ISO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'DOCUMENT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'DOC_TYPE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'DOC_VERS',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'DOC_FORMAT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'DOC_CHG_NO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PAGE_NO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'NO_SHEETS',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PROD_MEMO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PAGEFORMAT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SIZE_DIM',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'BASIC_MATL',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'STD_DESCR',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'LAB_DESIGN',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PUR_VALKEY',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'NET_WEIGHT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'CONTAINER',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'STOR_CONDS',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'TEMP_CONDS',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'TRANS_GRP',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'HAZ_MAT_NO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'DIVISION',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'COMPETITOR',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'QTY_GR_GI',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PROC_RULE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SUP_SOURCE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SEASON',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'LABEL_TYPE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'LABEL_FORM',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PROD_HIER',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'CAD_ID',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'ALLOWED_WT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PACK_WT_UN',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PACK_WT_UN_ISO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'ALLWD_VOL',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PACK_VO_UN',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PACK_VO_UN_ISO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'WT_TOL_LT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'VOL_TOL_LT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'VAR_ORD_UN',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'BATCH_MGMT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SH_MAT_TYP',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'FILL_LEVEL',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'STACK_FACT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MAT_GRP_SM',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'AUTH_GROUP',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'QM_PROCMNT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'CATPROFILE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MINREMLIFE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SHELF_LIFE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'STOR_PCT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'VALID_FROM',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'DELN_DATE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SAESON_YR',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PRICE_BAND',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'EMPTIESBOM',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'EXTMATLGRP',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'CONF_MATL',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PR_REF_MAT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PUR_STATUS',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SAL_STATUS',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PVALIDFROM',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SVALIDFROM',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'TAX_CLASS',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'CONT_UNIT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'CONT_UNIT_ISO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'NET_CONT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'COMPPRUNIT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'GROSS_CONT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PRPROFVAR',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'QUAL_DIK',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'ENVT_RLVT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PROD_ALLOC',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SEASMATCAT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'HAZMATPROF',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'HIGH_VISC',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'LOOSEORLIQ',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'CLOSED_BOX',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'APPD_B_REC',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PERIOD_IND_EXPIRATION_DATE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'ITEM_CAT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'BASIC_MATL_NEW',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
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
          name: 'CONF_MATL_EXTERNAL',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'CONF_MATL_GUID',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'CONF_MATL_VERSION',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'HAZ_MAT_NO_EXTERNAL',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'HAZ_MAT_NO_GUID',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'HAZ_MAT_NO_VERSION',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PR_REF_MAT_EXTERNAL',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PR_REF_MAT_GUID',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PR_REF_MAT_VERSION',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PREPACK_GENERIC_MATL',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'CREATION_STATUS',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'FREE_CHAR_VALUE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'CARE_CODE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'BRAND_ID',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'FIBER_CODE_1',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'FIBER_PART_1',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'FIBER_CODE_2',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'FIBER_PART_2',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'FIBER_CODE_3',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'FIBER_PART_3',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'FIBER_CODE_4',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'FIBER_PART_4',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'FIBER_CODE_5',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'FIBER_PART_5',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'FASHION_GRADE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PACKING_REF_MATL',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PREPACK_GENERIC_MATL_GUID',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PACKING_REF_MATL_EXTERNAL',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PACKING_REF_MATL_GUID',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PACKING_REF_MATL_VERSION',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'STD_HU_TYPE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PILFERABLE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'WHSE_STORAGE_CONDITION',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'WHSE_MATERIAL_GROUP',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'HANDLING_INDICATOR',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'HAZ_MAT_RELEVANT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'HU_TYPE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'VARIABLE_TARE_WEIGHT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MAX_ALLOWED_CAPACITY',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'OVERCAPACITY_TOLERANCE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MAX_ALLOWED_LENGTH',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MAX_ALLOWED_WIDTH',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MAX_ALLOWED_HEIGTH',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MAX_DIMENSION_UN',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MAX_DIMENSION_UN_ISO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'COUNTRYORI',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'COUNTRYORI_ISO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MATFRGTGRP',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'QUARANTINE_PERIOD',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'QUARANTINE_PERIOD_UN',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'QUARANTINE_PERIOD_UN_ISO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'QUALITY_INSP_GRP',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SERIAL_NUMBER_PROFILE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'EWM_CW_TOLERANCE_GROUP',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'EWM_CW_INPUT_CONTROL',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PCKGING_SMARTFORM',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'ADJUST_PROFILE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'ALLOW_PMAT_IGNO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'ANIMAL_ORIGIN_FLAG',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SEGMENTATION_STRUCTURE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SEGMENTATION_STRATEGY',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SEGMENTATION_STATUS',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'FASHION_ATTRIBUTE_1',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'FASHION_ATTRIBUTE_2',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'FASHION_ATTRIBUTE_3',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SEASON_LEVEL',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SEASON_FLAG',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SEGMENTATION_SCOPE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SEGMENTATION_RELEVANCE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MATERIAL_CONV_ID',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MATERIAL_LONG',
          description: 'Nº material (40 caracteres, necessário por razões técnicas)',
          type: 'CHAR(40)',
        },
        {
          name: 'OLD_MAT_NO_LONG',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'HAZ_MAT_NO_LONG',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'CONF_MATL_LONG',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PR_REF_MAT_LONG',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PREPACK_GENERIC_MATL_LONG',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PACKING_REF_MATL_LONG',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
      ],
      children: [],
    },
    {
      segment: 'E1BPE1MARAEXTRT',
      description:
        'Transf.dados Retail - dados do cliente a nível de\n                                mandante',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'FIELD1',
          description: 'Container para dados caractere do comprimento 229',
          type: 'CHAR(229)',
        },
        {
          name: 'FIELD2',
          description: 'Container para dados caractere do comprimento 250',
          type: 'CHAR(250)',
        },
        {
          name: 'FIELD3',
          description: 'Container para dados caractere do comprimento 250',
          type: 'CHAR(250)',
        },
        {
          name: 'FIELD4',
          description: 'Container para dados caractere do comprimento 250',
          type: 'CHAR(250)',
        },
      ],
      children: [
        {
          segment: 'E1BPE1MARAEXTRT1',
          description:
            'Transf.dados Retail - dados do cliente a nível de\n                                mandante',
          max: 1,
          fields: [
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
          ],
          children: [],
        },
      ],
    },
    {
      segment: 'E1BPE1MARAEXTRTX',
      description:
        'Transf.dados Retail - barra de seleção para\n                                BAPIE1MARAEXTRT',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'FIELD1',
          description: 'Container para dados caractere do comprimento 229',
          type: 'CHAR(229)',
        },
        {
          name: 'FIELD2',
          description: 'Container para dados caractere do comprimento 250',
          type: 'CHAR(250)',
        },
        {
          name: 'FIELD3',
          description: 'Container para dados caractere do comprimento 250',
          type: 'CHAR(250)',
        },
        {
          name: 'FIELD4',
          description: 'Container para dados caractere do comprimento 250',
          type: 'CHAR(250)',
        },
      ],
      children: [
        {
          segment: 'E1BPE1MARAEXTRTX1',
          description:
            'Transf.dados Retail - barra de seleção para\n                                BAPIE1MARAEXTRT',
          max: 1,
          fields: [
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
          ],
          children: [],
        },
      ],
    },
    {
      segment: 'E1BPE1MAW1RT',
      description: 'Transf.dados varejo - ampliação dos dados básicos',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'REPL_LIST',
          description: 'Tipo de lista de sortimento',
          type: 'CHAR(1)',
        },
        {
          name: 'SERV_AGRT',
          description: 'Estipulação de serviço para um material do comércio',
          type: 'CHAR(2)',
        },
        {
          name: 'ABC_ID',
          description: 'Código ABC',
          type: 'CHAR(1)',
        },
        {
          name: 'PUR_GROUP',
          description: 'Grupo de compradores',
          type: 'CHAR(3)',
        },
        {
          name: 'SALES_UNIT',
          description: 'Unidade de venda',
          type: 'UNIT(3)',
        },
        {
          name: 'SALES_UNIT_ISO',
          description: 'Unidade de venda em code ISO',
          type: 'CHAR(3)',
        },
        {
          name: 'ISSUE_UNIT',
          description: 'Unidade de medida de saída',
          type: 'UNIT(3)',
        },
        {
          name: 'ISSUE_UNIT_ISO',
          description: 'Unidade de medida de saída em code ISO',
          type: 'CHAR(3)',
        },
        {
          name: 'COUNTRYORI',
          description: 'País de origem do material (origem CCI)',
          type: 'CHAR(3)',
        },
        {
          name: 'COUNTRYORI_ISO',
          description: 'País de origem do material em code ISO',
          type: 'CHAR(2)',
        },
        {
          name: 'REGIONORIG',
          description: 'Região de origem do material (origem Câm.Ind.e Comércio)',
          type: 'CHAR(3)',
        },
        {
          name: 'LOADINGGRP',
          description: 'Grupo de carregamento',
          type: 'CHAR(4)',
        },
        {
          name: 'ASSORT_LEV',
          description: 'Nível de sortimento',
          type: 'CHAR(2)',
        },
        {
          name: 'ASSORTPRIO',
          description: 'Prioridade de sortimento ext.',
          type: 'CHAR(1)',
        },
        {
          name: 'LI_PROC_ST',
          description: 'Método de listagem para a filial ou outros tipos sortimento',
          type: 'CHAR(2)',
        },
        {
          name: 'LI_PROC_DC',
          description: 'Método catalogação p/tps.sortimento do centro distribuição',
          type: 'CHAR(2)',
        },
        {
          name: 'LIST_ST_FR',
          description: 'Data a partir da qual se efetua a catalogação na filial',
          type: 'DATS(8)',
        },
        {
          name: 'LIST_ST_TO',
          description: 'Data até à qual é efetuada a catalogação na filial',
          type: 'DATS(8)',
        },
        {
          name: 'LIST_DC_FR',
          description: 'Data a partir da qual é efetuada a catalogação no CD',
          type: 'DATS(8)',
        },
        {
          name: 'LIST_DC_TO',
          description: 'Data até à qual será catalogado no dep.centr./cent.distr.',
          type: 'DATS(8)',
        },
        {
          name: 'SELL_ST_FR',
          description: 'Data a partir da qual se vende na filial',
          type: 'DATS(8)',
        },
        {
          name: 'SELL_ST_TO',
          description: 'Data até à qual se vende na filial',
          type: 'DATS(8)',
        },
        {
          name: 'SELL_DC_FR',
          description: 'Data a partir da qual se vende no centro de distribuição',
          type: 'DATS(8)',
        },
        {
          name: 'SELL_DC_TO',
          description: 'Dta.até a qual se vende no depart.central/centro distrib.',
          type: 'DATS(8)',
        },
        {
          name: 'VAL_CLASS',
          description: 'Classe de avaliação',
          type: 'CHAR(4)',
        },
        {
          name: 'COMM_CODE',
          description: 'Código das mercadorias / nº code import.p/comércio exterior',
          type: 'CHAR(17)',
        },
        {
          name: 'VAL_MARGIN',
          description: 'Margem de avaliação',
          type: 'DEC(9)',
        },
        {
          name: 'COUPON_PROFILE',
          description: 'Perfil p/a distribuição descontos por cupons na entrada POS',
          type: 'CHAR(4)',
        },
        {
          name: 'ASSORTLIST',
          description: 'Catalogação de sortimento ativada',
          type: 'CHAR(1)',
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
      ],
      children: [],
    },
    {
      segment: 'E1BPE1MAW1RTX',
      description:
        'Transf.dados varejo - barra de seleção para\n                                BAPIE1MAW1RT',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'REPL_LIST',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SERV_AGRT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'ABC_ID',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PUR_GROUP',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SALES_UNIT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SALES_UNIT_ISO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'ISSUE_UNIT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'ISSUE_UNIT_ISO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'COUNTRYORI',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'COUNTRYORI_ISO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'REGIONORIG',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'LOADINGGRP',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'ASSORT_LEV',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'ASSORTPRIO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'LI_PROC_ST',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'LI_PROC_DC',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'LIST_ST_FR',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'LIST_ST_TO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'LIST_DC_FR',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'LIST_DC_TO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SELL_ST_FR',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SELL_ST_TO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SELL_DC_FR',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SELL_DC_TO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'VAL_CLASS',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'COMM_CODE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'VAL_MARGIN',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'COUPON_PROFILE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'ASSORTLIST',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
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
      ],
      children: [],
    },
    {
      segment: 'E1BPE1MAKTRT',
      description: 'Transf.dados varejo - textos breves de material',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'LANGU',
          description: 'Código de idioma',
          type: 'LANG(1)',
        },
        {
          name: 'LANGU_ISO',
          description: 'Código de idiomas SAP de 2 dígitos',
          type: 'CHAR(2)',
        },
        {
          name: 'MATL_DESC',
          description: 'Texto breve de material',
          type: 'CHAR(40)',
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
      ],
      children: [],
    },
    {
      segment: 'E1BPE1MARCRT',
      description:
        'Transf.dados varejo - dados de material a nível de\n                                centro',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'PLANT',
          description: 'Centro',
          type: 'CHAR(4)',
        },
        {
          name: 'DEL_FLAG',
          description: 'Marcar mat.para eliminação a nível de centro',
          type: 'CHAR(1)',
        },
        {
          name: 'ABC_ID',
          description: 'Código ABC',
          type: 'CHAR(1)',
        },
        {
          name: 'CRIT_PART',
          description: 'Código: peça crítica',
          type: 'CHAR(1)',
        },
        {
          name: 'PUR_GROUP',
          description: 'Grupo de compradores',
          type: 'CHAR(3)',
        },
        {
          name: 'ISSUE_UNIT',
          description: 'Unidade de medida de saída',
          type: 'UNIT(3)',
        },
        {
          name: 'ISSUE_UNIT_ISO',
          description: 'Unidade de medida de saída em code ISO',
          type: 'CHAR(3)',
        },
        {
          name: 'MRPPROFILE',
          description: 'Material: perfil de planejamento de necessidades (MRP)',
          type: 'CHAR(4)',
        },
        {
          name: 'MRP_TYPE',
          description: 'Tipo de MRP',
          type: 'CHAR(2)',
        },
        {
          name: 'MRP_CTRLER',
          description: 'Planejador MRP',
          type: 'CHAR(3)',
        },
        {
          name: 'PLND_DELRY',
          description: 'Prazo de entrega previsto em dias',
          type: 'DEC(4)',
        },
        {
          name: 'GR_PR_TIME',
          description: 'Tempo de processamento (em dias) da entrada de mercadorias',
          type: 'DEC(4)',
        },
        {
          name: 'PERIOD_IND',
          description: 'Código de período',
          type: 'CHAR(1)',
        },
        {
          name: 'ASSY_SCRAP',
          description: 'Refugo do conjunto em %',
          type: 'DEC(7)',
        },
        {
          name: 'LOTSIZEKEY',
          description: 'Chave de cálculo do tamanho do lote no MRP',
          type: 'CHAR(2)',
        },
        {
          name: 'PROC_TYPE',
          description: 'Tipo de suprimento',
          type: 'CHAR(1)',
        },
        {
          name: 'SPPROCTYPE',
          description: 'Tipo de suprimento especial',
          type: 'CHAR(2)',
        },
        {
          name: 'REORDER_PT',
          description: 'Ponto de reabastecimento',
          type: 'QUAN(15)',
        },
        {
          name: 'SAFETY_STK',
          description: 'Estoque de segurança',
          type: 'QUAN(15)',
        },
        {
          name: 'MINLOTSIZE',
          description: 'Tamanho mínimo do lote',
          type: 'QUAN(15)',
        },
        {
          name: 'MAXLOTSIZE',
          description: 'Tamanho máximo do lote',
          type: 'QUAN(15)',
        },
        {
          name: 'FIXED_LOT',
          description: 'Tamanho fixo do lote',
          type: 'QUAN(15)',
        },
        {
          name: 'ROUND_VAL',
          description: 'Valor de arredondamento da quantidade pedida',
          type: 'QUAN(15)',
        },
        {
          name: 'MAX_STOCK',
          description: 'Estoque máximo',
          type: 'QUAN(15)',
        },
        {
          name: 'ORD_COSTS',
          description: 'Custos fixos por pedido (interfaces BAPI)',
          type: 'DEC(25)',
        },
        {
          name: 'DEP_REQ_ID',
          description: 'Código de necs.deps.para necessidade indiv.e coletiva',
          type: 'CHAR(1)',
        },
        {
          name: 'STOR_COSTS',
          description: 'Código de custos de armazenagem',
          type: 'CHAR(1)',
        },
        {
          name: 'ALT_BOM_ID',
          description: 'Código para a seleção de listas técnicas alternativas',
          type: 'CHAR(1)',
        },
        {
          name: 'DISCONTINU',
          description: 'Código de obsolescência',
          type: 'CHAR(1)',
        },
        {
          name: 'EFF_O_DAY',
          description: 'Data de expiração',
          type: 'DATS(8)',
        },
        {
          name: 'FOLLOW_UP',
          description: 'Material subsequente',
          type: 'CHAR(18)',
        },
        {
          name: 'GRP_REQMTS',
          description: 'Código para agrupamento de necessidades',
          type: 'CHAR(1)',
        },
        {
          name: 'MIXED_MRP',
          description: 'Código de planejamento de necessidades (MRP) misto',
          type: 'CHAR(1)',
        },
        {
          name: 'SM_KEY',
          description: 'Chave de prazos para tempos buffer',
          type: 'CHAR(3)',
        },
        {
          name: 'BACKFLUSH',
          description: 'Código: baixa por explosão',
          type: 'CHAR(1)',
        },
        {
          name: 'INHSEPRODT',
          description: 'Tempo de produção interna',
          type: 'DEC(4)',
        },
        {
          name: 'STGEPERIOD',
          description: 'Período máximo de armazenamento',
          type: 'DEC(6)',
        },
        {
          name: 'STGE_PD_UN',
          description: 'Unidade para o período máximo de armazenamento',
          type: 'UNIT(3)',
        },
        {
          name: 'STGE_PD_UN_ISO',
          description: 'Unidade para o período máximo de armazenamento no código ISO',
          type: 'CHAR(3)',
        },
        {
          name: 'REPLENTIME',
          description: 'Tempo total de reposição (dias de trabalho)',
          type: 'DEC(4)',
        },
        {
          name: 'REPLACE_PT',
          description: 'Peça de reposição',
          type: 'CHAR(1)',
        },
        {
          name: 'QUAL_INSP',
          description: 'Registro em estoque em controle de qualidade',
          type: 'CHAR(1)',
        },
        {
          name: 'CTRL_KEY',
          description: 'Chave de controle p/administração qualidade no suprimento',
          type: 'CHAR(8)',
        },
        {
          name: 'DOC_REQD',
          description: 'Código para documentação obrigatória',
          type: 'CHAR(1)',
        },
        {
          name: 'LOADINGGRP',
          description: 'Grupo de carregamento',
          type: 'CHAR(4)',
        },
        {
          name: 'BATCH_MGMT',
          description: 'Código para administração em lote obrigatória',
          type: 'CHAR(1)',
        },
        {
          name: 'QUOTAUSAGE',
          description: 'Utilização da quotização',
          type: 'CHAR(1)',
        },
        {
          name: 'SERV_LEVEL',
          description: 'Grau de atendimento',
          type: 'DEC(5)',
        },
        {
          name: 'SPLIT_IND',
          description: 'Código de divisão',
          type: 'CHAR(1)',
        },
        {
          name: 'AVAILCHECK',
          description: 'Grupo de verificação para verificação de disponibilidade',
          type: 'CHAR(2)',
        },
        {
          name: 'FY_VARIANT',
          description: 'Variante de exercício',
          type: 'CHAR(2)',
        },
        {
          name: 'CORR_FACT',
          description: 'Código: considerar os fatores de correção',
          type: 'CHAR(1)',
        },
        {
          name: 'SETUP_TIME',
          description: 'Tempo de preparação da expedição',
          type: 'DEC(7)',
        },
        {
          name: 'BASE_QTY',
          description: 'Quantidade básica p/planejamento de capacidades na expedição',
          type: 'QUAN(15)',
        },
        {
          name: 'PROC_TIME',
          description: 'Tempo de processamento na expedição',
          type: 'DEC(7)',
        },
        {
          name: 'SUP_SOURCE',
          description: 'Fonte de suprimento',
          type: 'CHAR(1)',
        },
        {
          name: 'AUTO_P_ORD',
          description: 'Código: "pedido automático permitido"',
          type: 'CHAR(1)',
        },
        {
          name: 'SOURCELIST',
          description: 'Código de livro de fornecedores obrigatório',
          type: 'CHAR(1)',
        },
        {
          name: 'COMM_CODE',
          description: 'Código das mercadorias / nº code import.p/comércio exterior',
          type: 'CHAR(17)',
        },
        {
          name: 'COUNTRYORI',
          description: 'País de origem do material (origem CCI)',
          type: 'CHAR(3)',
        },
        {
          name: 'COUNTRYORI_ISO',
          description: 'País de origem do material em code ISO',
          type: 'CHAR(2)',
        },
        {
          name: 'REGIONORIG',
          description: 'Região de origem do material (origem Câm.Ind.e Comércio)',
          type: 'CHAR(3)',
        },
        {
          name: 'EXPIMPGRP',
          description: 'Grupo de materiais exportação para comércio exterior',
          type: 'CHAR(4)',
        },
        {
          name: 'PROFIT_CTR',
          description: 'Centro de lucro',
          type: 'CHAR(10)',
        },
        {
          name: 'PPC_PL_CAL',
          description: 'Calendário de planejamento PCP',
          type: 'CHAR(3)',
        },
        {
          name: 'REP_MANUF',
          description: 'Código: produção repetitiva permitida',
          type: 'CHAR(1)',
        },
        {
          name: 'PL_TI_FNCE',
          description: 'Horizonte de planejamento fixo',
          type: 'NUMC(3)',
        },
        {
          name: 'CONSUMMODE',
          description: 'Modo de compensação',
          type: 'CHAR(1)',
        },
        {
          name: 'BWD_CONS',
          description: 'Intervalo de compensação - regressivo -',
          type: 'NUMC(3)',
        },
        {
          name: 'FWD_CONS',
          description: 'Intervalo de compensação - progressivo -',
          type: 'NUMC(3)',
        },
        {
          name: 'ISS_ST_LOC',
          description: 'Depósito de produção',
          type: 'CHAR(4)',
        },
        {
          name: 'MRP_GROUP',
          description: 'Grupo MRP',
          type: 'CHAR(4)',
        },
        {
          name: 'COMP_SCRAP',
          description: 'Refugo de componentes em %',
          type: 'DEC(7)',
        },
        {
          name: 'CERT_TYPE',
          description: 'Categoria de certificado',
          type: 'CHAR(4)',
        },
        {
          name: 'CYCLE_TIME',
          description: 'Tempo do ciclo de trabalho',
          type: 'DEC(4)',
        },
        {
          name: 'COVPROFILE',
          description: 'Perfil de cobertura',
          type: 'CHAR(3)',
        },
        {
          name: 'CO_PA_FLD',
          description: 'Nome local do campo para ligação CO/PA com SOP',
          type: 'CHAR(10)',
        },
        {
          name: 'CC_PH_INV',
          description: 'Código de inventário para inventário rotativo',
          type: 'CHAR(1)',
        },
        {
          name: 'SERNO_PROF',
          description: 'Perfil de nºs série',
          type: 'CHAR(4)',
        },
        {
          name: 'REPMANPROF',
          description: 'Perfil produção repetitiva',
          type: 'CHAR(4)',
        },
        {
          name: 'NEG_STOCKS',
          description: 'Estoques negativos admitidos no centro',
          type: 'CHAR(1)',
        },
        {
          name: 'QM_RGMTS',
          description: 'Sistema QM exigido do fornecedor',
          type: 'CHAR(4)',
        },
        {
          name: 'PLNG_CYCLE',
          description: 'Ciclo MRP',
          type: 'CHAR(3)',
        },
        {
          name: 'ROUND_PROF',
          description: 'Perfil de arredondamento',
          type: 'CHAR(4)',
        },
        {
          name: 'REFMATCONS',
          description: 'Material de referência para consumo',
          type: 'CHAR(18)',
        },
        {
          name: 'REFPLTCONS',
          description: 'Centro referência - consumo',
          type: 'CHAR(4)',
        },
        {
          name: 'D_TO_REF_M',
          description: 'Data-até para material referência - consumo',
          type: 'DATS(8)',
        },
        {
          name: 'MULT_REF_M',
          description: 'Multiplicador para material referência para consumo',
          type: 'DEC(7)',
        },
        {
          name: 'AUTO_RESET',
          description: 'Reinicializar modelo de previsão automaticamente',
          type: 'CHAR(1)',
        },
        {
          name: 'EX_CERT_ID',
          description: 'Confirmação de isenção de licença: código p/controle legal',
          type: 'CHAR(1)',
        },
        {
          name: 'EX_CERT_NO',
          description: 'Nº confirmação de isenção licença em exportação/importação',
          type: 'NUMC(8)',
        },
        {
          name: 'EX_CERT_DT',
          description: 'Confirm.isenção licença: data de emissão da conf.isen.licen.',
          type: 'DATS(8)',
        },
        {
          name: 'MILIT_ID',
          description: 'Código: mercadoria militar',
          type: 'CHAR(1)',
        },
        {
          name: 'INSP_INT',
          description: 'Intervalo até ao próximo controle periódico',
          type: 'DEC(6)',
        },
        {
          name: 'CO_PRODUCT',
          description: 'Código: o material pode ser um co-produto',
          type: 'CHAR(1)',
        },
        {
          name: 'PLAN_STRGP',
          description: 'Grupo de estratégia de planejamento',
          type: 'CHAR(2)',
        },
        {
          name: 'SLOC_EXPRC',
          description: 'Depósito proposto para suprimento externo',
          type: 'CHAR(4)',
        },
        {
          name: 'BULK_MAT',
          description: 'Código: material a granel',
          type: 'CHAR(1)',
        },
        {
          name: 'CC_FIXED',
          description: 'Código CC fixo',
          type: 'CHAR(1)',
        },
        {
          name: 'DETERM_GRP',
          description: 'Grupo de determinação de estoque',
          type: 'CHAR(4)',
        },
        {
          name: 'QM_AUTHGRP',
          description: 'Grupo de autorização de material para atividades no QM',
          type: 'CHAR(6)',
        },
        {
          name: 'PUR_STATUS',
          description: 'Status do material específico do centro',
          type: 'CHAR(2)',
        },
        {
          name: 'SAFTY_T_ID',
          description: 'Código de margem de segurança (com/sem margem de segurança)',
          type: 'CHAR(1)',
        },
        {
          name: 'SAFETYTIME',
          description: 'Período de segurança (em dias de trabalho)',
          type: 'NUMC(2)',
        },
        {
          name: 'PLORD_CTRL',
          description: 'Controle de ações processamento de ordens planejadas',
          type: 'CHAR(2)',
        },
        {
          name: 'BATCHENTRY',
          description: 'Controle da entrada de lotes na ordem de produção/processo',
          type: 'CHAR(1)',
        },
        {
          name: 'PROMSMOOTH',
          description: 'Código: nivelar consumo de ação de promoção',
          type: 'CHAR(1)',
        },
        {
          name: 'UNIT_GROUP',
          description: 'Grupo unidade medida',
          type: 'CHAR(4)',
        },
        {
          name: 'PVALIDFROM',
          description: 'Data, a partir da qual status mat.espec.centro é válido',
          type: 'DATS(8)',
        },
        {
          name: 'SERV_LEV_R',
          description: 'Grau de atendimento SAM',
          type: 'CHAR(1)',
        },
        {
          name: 'MATFRGTGRP',
          description: 'Grupo de frete de material',
          type: 'CHAR(8)',
        },
        {
          name: 'HANDLG_GRP',
          description: 'Grupo de cargas para logística para cálculo carga trabalho',
          type: 'CHAR(4)',
        },
        {
          name: 'CFOP_CAT',
          description: 'Material: categoria CFOP',
          type: 'CHAR(2)',
        },
        {
          name: 'EU_LIST_NO',
          description: 'Regul.mercado: nº lista de produtos no regulam.mercado (CAP)',
          type: 'CHAR(12)',
        },
        {
          name: 'EU_MAT_GRP',
          description: 'Regulam.mercado: grp.prod.no regulam.mercado p/com.exterior',
          type: 'CHAR(6)',
        },
        {
          name: 'CAS_NO',
          description: 'Nº CAS para produtos farmacêuticos no comércio exterior',
          type: 'CHAR(15)',
        },
        {
          name: 'CTRL_CODE',
          description: 'Código de controle p/imposto seletivo em comércio exterior',
          type: 'CHAR(16)',
        },
        {
          name: 'JIT_RELVT',
          description: 'Código item relevante para solicitação remessa just in time',
          type: 'CHAR(1)',
        },
        {
          name: 'DISTR_PROF',
          description: 'Pefil de distribuição do material no centro',
          type: 'CHAR(3)',
        },
        {
          name: 'PERIOD_PROFILE_SAFETY_TIME',
          description: 'Perfil períod.para períod.segurança',
          type: 'CHAR(3)',
        },
        {
          name: 'EX_CERT_NO_NEW',
          description: 'Conf.isenção licença: nº conf.isenção licença p/cntrl.legal',
          type: 'CHAR(8)',
        },
        {
          name: 'PRODUCTION_SCHEDULER',
          description: 'Responsável pelo controle de produção',
          type: 'CHAR(3)',
        },
        {
          name: 'PROD_PROF',
          description: 'Perfil de controle de produção',
          type: 'CHAR(6)',
        },
        {
          name: 'MAT_GRP_TRANS',
          description: 'Grupo de materiais para a matriz de transição',
          type: 'CHAR(20)',
        },
        {
          name: 'OVERALL_PROF',
          description: 'Perfil geral para controle de modificações de ordens',
          type: 'CHAR(6)',
        },
        {
          name: 'UNDER_TOL',
          description: 'Limite de tolerância para fornecimento incompleto',
          type: 'DEC(5)',
        },
        {
          name: 'OVER_TOL',
          description: 'Limite de tolerância para fornecimento excessivo',
          type: 'DEC(5)',
        },
        {
          name: 'UNLIMITED',
          description: 'Código: fornecimento excessivo permitido sem limites',
          type: 'CHAR(1)',
        },
        {
          name: 'SETUP_TIME_PROC',
          description: 'Tempos de preparação',
          type: 'DEC(7)',
        },
        {
          name: 'PROCESSING_TIME',
          description: 'Tempo de processamento',
          type: 'DEC(7)',
        },
        {
          name: 'BASE_QTY_PROC',
          description: 'Quantidade básica',
          type: 'QUAN(15)',
        },
        {
          name: 'INTEROP_TIME',
          description: 'Tempo de transição',
          type: 'DEC(7)',
        },
        {
          name: 'PROD_UNIT',
          description: 'Unidade de medida de produção',
          type: 'UNIT(3)',
        },
        {
          name: 'PROD_UNIT_ISO',
          description: 'Unidade de medida de produção no código ISO',
          type: 'CHAR(3)',
        },
        {
          name: 'VARIANCE_KEY',
          description: 'Chave de desvio',
          type: 'CHAR(6)',
        },
        {
          name: 'ALTERNATIVE_BOM',
          description: 'Lista técnica alternativa',
          type: 'CHAR(2)',
        },
        {
          name: 'BOM_USAGE',
          description: 'Utilização lista técnica',
          type: 'CHAR(1)',
        },
        {
          name: 'TASK_LIST_GRP_NO',
          description: 'Chave do grupo de listas de tarefas',
          type: 'CHAR(8)',
        },
        {
          name: 'GROUP_COUNTER',
          description: 'Numerador de grupos',
          type: 'CHAR(2)',
        },
        {
          name: 'TASK_LIST_TYPE',
          description: 'Tipo de roteiro',
          type: 'CHAR(1)',
        },
        {
          name: 'SPEC_PROC_TYPE',
          description: 'Aprovisionamento especial para cálculo de custos',
          type: 'CHAR(2)',
        },
        {
          name: 'LOT_SIZE',
          description: 'Tamanho de lote do cálculo de custos do produto',
          type: 'QUAN(15)',
        },
        {
          name: 'MIN_SAFETY_STK',
          description: 'Estoque de segurança mínimo',
          type: 'QUAN(15)',
        },
        {
          name: 'NO_COSTING',
          description: 'Não calcular custos',
          type: 'CHAR(1)',
        },
        {
          name: 'FOLLOW_UP_EXTERNAL',
          description: 'Nº de material longo para o campo FOLLOW_UP',
          type: 'CHAR(40)',
        },
        {
          name: 'FOLLOW_UP_GUID',
          description: 'GUID externo para campo FOLLOW_UP',
          type: 'CHAR(32)',
        },
        {
          name: 'FOLLOW_UP_VERSION',
          description: 'Nº de versão para campo FOLLOW_UP',
          type: 'CHAR(10)',
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
          name: 'REFMATCONS_EXTERNAL',
          description: 'Nº de material longo para o campo REFMATCONS',
          type: 'CHAR(40)',
        },
        {
          name: 'REFMATCONS_GUID',
          description: 'ID único externo para o campo REFMATCONS',
          type: 'CHAR(32)',
        },
        {
          name: 'REFMATCONS_VERSION',
          description: 'Nº da versão para o campo REFMATCONS',
          type: 'CHAR(10)',
        },
      ],
      children: [
        {
          segment: 'E1BPE1MARCRT1',
          description:
            'Transf.dados varejo - dados de material a nível de\n                                centro',
          max: 1,
          fields: [
            {
              name: 'PROPSUPPLYAREA',
              description: 'SupM proposto no mestre de material',
              type: 'CHAR(10)',
            },
            {
              name: 'CONSIGNMENT_CONTROL',
              description: 'Controle do estoque em consignação',
              type: 'CHAR(1)',
            },
            {
              name: 'GI_PR_TIME',
              description: 'Tempo de processamento da saída de mercadorias em dias',
              type: 'DEC(4)',
            },
            {
              name: 'PURCH_ACROSS_PUR_GROUP',
              description: 'Suprimento possível para vários grupos de compradores',
              type: 'CHAR(1)',
            },
            {
              name: 'REF_DETERM_SCHEMA',
              description: 'Esquema de determinação de referência',
              type: 'CHAR(2)',
            },
            {
              name: 'MIN_TROC',
              description: 'Cobertura mínima planejada',
              type: 'NUMC(3)',
            },
            {
              name: 'MAX_TROC',
              description: 'Cobertura máxima planejada',
              type: 'NUMC(3)',
            },
            {
              name: 'TARGET_STOCK',
              description: 'Estoque teórico',
              type: 'QUAN(15)',
            },
            {
              name: 'SEGMENTATION_STRATEGY',
              description: 'Estratégia de segmentação',
              type: 'CHAR(8)',
            },
            {
              name: 'SEGMENTATION_STATUS',
              description: 'Status de segmentação',
              type: 'CHAR(1)',
            },
            {
              name: 'SEGMENTATION_SCOPE',
              description: 'Escopo da estratégia de segmentação',
              type: 'CHAR(1)',
            },
            {
              name: 'CHECK_METHOD',
              description: 'Ordenar estoque com base no segmento',
              type: 'CHAR(1)',
            },
            {
              name: 'CONSUMPTION_PRIORITY',
              description: 'Prioridade de compensação',
              type: 'CHAR(1)',
            },
            {
              name: 'DISCRETE_BATCH_FLAG',
              description: 'Número de lote discreto',
              type: 'CHAR(1)',
            },
            {
              name: 'ORDER_ALLOCATION_REQ',
              description: 'Execução de alocação de ordem',
              type: 'CHAR(1)',
            },
            {
              name: 'STOCK_PROTECTION_IND',
              description: 'Código de proteção de estoque',
              type: 'CHAR(1)',
            },
            {
              name: 'SEASON_FLAG',
              description: 'Código: época ativa na aministração estoques',
              type: 'CHAR(1)',
            },
            {
              name: 'DEFAULT_STOCK_SEGMENT',
              description: 'Valor de segmento de estoque padrão',
              type: 'CHAR(16)',
            },
            {
              name: 'SORT_STOCK_BASED_ON_SEGMENT',
              description: 'Ordenar estoque com base no segmento',
              type: 'CHAR(1)',
            },
            {
              name: 'VARIANT_GROUP',
              description: 'Grupo de variantes',
              type: 'CHAR(2)',
            },
            {
              name: 'BATCH_ASSIGNMENT',
              description: 'Código: atribuição de lote durante conversão OT em OT',
              type: 'CHAR(1)',
            },
            {
              name: 'ATP_MRP_STATUS',
              description: 'Status ATP/MRP para material e segmento',
              type: 'CHAR(2)',
            },
            {
              name: 'SEGMENTATION_VALIDFROM',
              description: 'Data a partir da qual status material espec.centro é válida',
              type: 'DATS(8)',
            },
            {
              name: 'MATERIAL_LONG',
              description: 'Nº material (40 caracteres, necessário por razões técnicas)',
              type: 'CHAR(40)',
            },
            {
              name: 'FOLLOW_UP_LONG',
              description: 'Material subsequente',
              type: 'CHAR(40)',
            },
            {
              name: 'REFMATCONS_LONG',
              description: 'Material de referência de consumo',
              type: 'CHAR(40)',
            },
          ],
          children: [],
        },
      ],
    },
    {
      segment: 'E1BPE1MARCRTX',
      description:
        'Transf.dados varejo - barra de seleção para\n                                BAPIE1MARCRT',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'PLANT',
          description: 'Centro',
          type: 'CHAR(4)',
        },
        {
          name: 'DEL_FLAG',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'ABC_ID',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'CRIT_PART',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PUR_GROUP',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'ISSUE_UNIT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'ISSUE_UNIT_ISO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MRPPROFILE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MRP_TYPE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MRP_CTRLER',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PLND_DELRY',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'GR_PR_TIME',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PERIOD_IND',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'ASSY_SCRAP',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'LOTSIZEKEY',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PROC_TYPE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SPPROCTYPE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'REORDER_PT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SAFETY_STK',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MINLOTSIZE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MAXLOTSIZE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'FIXED_LOT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'ROUND_VAL',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MAX_STOCK',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'ORD_COSTS',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'DEP_REQ_ID',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'STOR_COSTS',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'ALT_BOM_ID',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'DISCONTINU',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'EFF_O_DAY',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'FOLLOW_UP',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'GRP_REQMTS',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MIXED_MRP',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SM_KEY',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'BACKFLUSH',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'INHSEPRODT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'STGEPERIOD',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'STGE_PD_UN',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'STGE_PD_UN_ISO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'REPLENTIME',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'REPLACE_PT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'QUAL_INSP',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'CTRL_KEY',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'DOC_REQD',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'LOADINGGRP',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'BATCH_MGMT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'QUOTAUSAGE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SERV_LEVEL',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SPLIT_IND',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'AVAILCHECK',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'FY_VARIANT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'CORR_FACT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SETUP_TIME',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'BASE_QTY',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PROC_TIME',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SUP_SOURCE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'AUTO_P_ORD',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SOURCELIST',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'COMM_CODE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'COUNTRYORI',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'COUNTRYORI_ISO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'REGIONORIG',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'EXPIMPGRP',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PROFIT_CTR',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PPC_PL_CAL',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'REP_MANUF',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PL_TI_FNCE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'CONSUMMODE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'BWD_CONS',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'FWD_CONS',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'ISS_ST_LOC',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MRP_GROUP',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'COMP_SCRAP',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'CERT_TYPE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'CYCLE_TIME',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'COVPROFILE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'CO_PA_FLD',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'CC_PH_INV',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SERNO_PROF',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'REPMANPROF',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'NEG_STOCKS',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'QM_RGMTS',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PLNG_CYCLE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'ROUND_PROF',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'REFMATCONS',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'REFPLTCONS',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'D_TO_REF_M',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MULT_REF_M',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'AUTO_RESET',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'EX_CERT_ID',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'EX_CERT_NO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'EX_CERT_DT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MILIT_ID',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'INSP_INT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'CO_PRODUCT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PLAN_STRGP',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SLOC_EXPRC',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'BULK_MAT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'CC_FIXED',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'DETERM_GRP',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'QM_AUTHGRP',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PUR_STATUS',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SAFTY_T_ID',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SAFETYTIME',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PLORD_CTRL',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'BATCHENTRY',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PROMSMOOTH',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'UNIT_GROUP',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PVALIDFROM',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SERV_LEV_R',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MATFRGTGRP',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'HANDLG_GRP',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'CFOP_CAT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'EU_LIST_NO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'EU_MAT_GRP',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'CAS_NO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'CTRL_CODE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'JIT_RELVT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'DISTR_PROF',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PERIOD_PROFILE_SAFETY_TIME',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'EX_CERT_NO_NEW',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PRODUCTION_SCHEDULER',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PROD_PROF',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MAT_GRP_TRANS',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'OVERALL_PROF',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'UNDER_TOL',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'OVER_TOL',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'UNLIMITED',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SETUP_TIME_PROC',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PROCESSING_TIME',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'BASE_QTY_PROC',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'INTEROP_TIME',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PROD_UNIT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PROD_UNIT_ISO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'VARIANCE_KEY',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'ALTERNATIVE_BOM',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'BOM_USAGE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'TASK_LIST_GRP_NO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'GROUP_COUNTER',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'TASK_LIST_TYPE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SPEC_PROC_TYPE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'LOT_SIZE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MIN_SAFETY_STK',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'NO_COSTING',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
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
          name: 'FOLLOW_UP_EXTERNAL',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'FOLLOW_UP_GUID',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'FOLLOW_UP_VERSION',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'REFMATCONS_EXTERNAL',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'REFMATCONS_GUID',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'REFMATCONS_VERSION',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PROPSUPPLYAREA',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'CONSIGNMENT_CONTROL',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'GI_PR_TIME',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PURCH_ACROSS_PUR_GROUP',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'REF_DETERM_SCHEMA',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MIN_TROC',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MAX_TROC',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'TARGET_STOCK',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SEGMENTATION_STRATEGY',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SEGMENTATION_STATUS',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SEGMENTATION_SCOPE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'CHECK_METHOD',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'CONSUMPTION_PRIORITY',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'DISCRETE_BATCH_FLAG',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'ORDER_ALLOCATION_REQ',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'STOCK_PROTECTION_IND',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SEASON_FLAG',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'DEFAULT_STOCK_SEGMENT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SORT_STOCK_BASED_ON_SEGMENT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'VARIANT_GROUP',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'BATCH_ASSIGNMENT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'ATP_MRP_STATUS',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SEGMENTATION_VALIDFROM',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MATERIAL_LONG',
          description: 'Nº material (40 caracteres, necessário por razões técnicas)',
          type: 'CHAR(40)',
        },
        {
          name: 'FOLLOW_UP_LONG',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'REFMATCONS_LONG',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
      ],
      children: [],
    },
    {
      segment: 'E1BPE1MARCEXTRT',
      description:
        'Transf.dados Retail - dados do cliente a nível de\n                                centro',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'PLANT',
          description: 'Centro',
          type: 'CHAR(4)',
        },
        {
          name: 'FIELD1',
          description: 'Container para dados caractere do comprimento 225',
          type: 'CHAR(225)',
        },
        {
          name: 'FIELD2',
          description: 'Container para dados caractere do comprimento 250',
          type: 'CHAR(250)',
        },
        {
          name: 'FIELD3',
          description: 'Container para dados caractere do comprimento 250',
          type: 'CHAR(250)',
        },
        {
          name: 'FIELD4',
          description: 'Container para dados caractere do comprimento 250',
          type: 'CHAR(250)',
        },
      ],
      children: [
        {
          segment: 'E1BPE1MARCEXTRT1',
          description:
            'Transf.dados Retail - dados do cliente a nível de\n                                centro',
          max: 1,
          fields: [
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
              name: 'MATERIAL_LONG',
              description: 'Nº material (40 caracteres, necessário por razões técnicas)',
              type: 'CHAR(40)',
            },
          ],
          children: [],
        },
      ],
    },
    {
      segment: 'E1BPE1MARCEXTRTX',
      description:
        'Transf.dados Retail - barra de seleção para\n                                BAPIE1MARCEXTRT',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'PLANT',
          description: 'Centro',
          type: 'CHAR(4)',
        },
        {
          name: 'FIELD1',
          description: 'Container para dados caractere do comprimento 225',
          type: 'CHAR(225)',
        },
        {
          name: 'FIELD2',
          description: 'Container para dados caractere do comprimento 250',
          type: 'CHAR(250)',
        },
        {
          name: 'FIELD3',
          description: 'Container para dados caractere do comprimento 250',
          type: 'CHAR(250)',
        },
        {
          name: 'FIELD4',
          description: 'Container para dados caractere do comprimento 250',
          type: 'CHAR(250)',
        },
      ],
      children: [
        {
          segment: 'E1BPE1MARCEXTRTX1',
          description:
            'Transf.dados Retail - barra de seleção para\n                                BAPIE1MARCEXTRT',
          max: 1,
          fields: [
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
              name: 'MATERIAL_LONG',
              description: 'Nº material (40 caracteres, necessário por razões técnicas)',
              type: 'CHAR(40)',
            },
          ],
          children: [],
        },
      ],
    },
    {
      segment: 'E1BPE1MPOPRT',
      description: 'Transf.dados varejo - parâmetros de previsão',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'PLANT',
          description: 'Centro',
          type: 'CHAR(4)',
        },
        {
          name: 'FORE_PROF',
          description: 'Perfil de previsão',
          type: 'CHAR(4)',
        },
        {
          name: 'MODEL_SI',
          description: 'Código de seleção de modelo',
          type: 'CHAR(1)',
        },
        {
          name: 'MODEL_SP',
          description: 'Processo de seleção de modelo',
          type: 'CHAR(1)',
        },
        {
          name: 'PARAM_OPT',
          description: 'Código para otimização de parâmetros',
          type: 'CHAR(1)',
        },
        {
          name: 'OPTIM_LEV',
          description: 'Nível de otimização',
          type: 'CHAR(1)',
        },
        {
          name: 'INITIALIZE',
          description: 'Código de inicialização',
          type: 'CHAR(1)',
        },
        {
          name: 'FORE_MODEL',
          description: 'Modelo de previsão',
          type: 'CHAR(1)',
        },
        {
          name: 'ALPHA_FACT',
          description: 'Fator alfa (alisamento do valor básico)',
          type: 'DEC(5)',
        },
        {
          name: 'BETA_FACT',
          description: 'Fator beta (amortecimento do valor de tendência)',
          type: 'DEC(5)',
        },
        {
          name: 'GAMMA_FACT',
          description: 'Fator gama (amortecimento de índice sazonal)',
          type: 'DEC(5)',
        },
        {
          name: 'DELTA_FACT',
          description: 'Fator delta (amortecimento desvio médio absoluto)',
          type: 'DEC(5)',
        },
        {
          name: 'TRACKLIMIT',
          description: 'Limiar de aviso',
          type: 'DEC(7)',
        },
        {
          name: 'FORE_DATE',
          description: 'Data da última previsão',
          type: 'DATS(8)',
        },
        {
          name: 'HIST_VALS',
          description: 'Núm.dos períodos históricos',
          type: 'DEC(4)',
        },
        {
          name: 'INIT_PDS',
          description: 'Nº de períodos para inicialização',
          type: 'DEC(4)',
        },
        {
          name: 'SEASON_PDS',
          description: 'Nº de períodos por ciclo sazonal',
          type: 'DEC(4)',
        },
        {
          name: 'EXPOST_PDS',
          description: 'Nº períodos para previsão ex-post',
          type: 'DEC(4)',
        },
        {
          name: 'FORE_PDS',
          description: 'Nº de períodos de previsão',
          type: 'DEC(4)',
        },
        {
          name: 'FIXED_PDS',
          description: 'Períodos fixos',
          type: 'DEC(4)',
        },
        {
          name: 'WTG_GROUP',
          description: 'Grupo de ponderação',
          type: 'CHAR(2)',
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
      ],
      children: [],
    },
    {
      segment: 'E1BPE1MPOPRTX',
      description: 'Transf.dados varejo - parâmetros de previsão',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'PLANT',
          description: 'Centro',
          type: 'CHAR(4)',
        },
        {
          name: 'FORE_PROF',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MODEL_SI',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MODEL_SP',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PARAM_OPT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'OPTIM_LEV',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'INITIALIZE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'FORE_MODEL',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'ALPHA_FACT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'BETA_FACT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'GAMMA_FACT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'DELTA_FACT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'TRACKLIMIT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'FORE_DATE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'HIST_VALS',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'INIT_PDS',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SEASON_PDS',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'EXPOST_PDS',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'FORE_PDS',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'FIXED_PDS',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'WTG_GROUP',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
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
      ],
      children: [],
    },
    {
      segment: 'E1BPE1MPRWRT',
      description: 'Transf.dados varejo - valores de previsão',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'PLANT',
          description: 'Centro',
          type: 'CHAR(4)',
        },
        {
          name: 'FIRST_DAY',
          description: 'Primeiro dia do período ao qual se referem os valores',
          type: 'DATS(8)',
        },
        {
          name: 'FORE_VALUE',
          description: 'Valor de previsão',
          type: 'QUAN(15)',
        },
        {
          name: 'CORR_VALUE',
          description: 'Valor corrigido p/valor de previsão',
          type: 'QUAN(15)',
        },
        {
          name: 'SEAS_INDEX',
          description: 'Índice sazonal',
          type: 'DEC(7)',
        },
        {
          name: 'CVALUE_FXD',
          description: 'Código: valor de previsão fixado',
          type: 'CHAR(1)',
        },
        {
          name: 'EXPOST_VAL',
          description: "Valor de previsão 'ex post'",
          type: 'QUAN(15)',
        },
        {
          name: 'VAL_RATIO',
          description: 'Relação valor original : valor corrigido',
          type: 'DEC(7)',
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
      ],
      children: [],
    },
    {
      segment: 'E1BPE1MVEGRT',
      description: 'Transf.dados varejo - consumos totais',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'PLANT',
          description: 'Centro',
          type: 'CHAR(4)',
        },
        {
          name: 'FIRST_DAY',
          description: 'Primeiro dia do período ao qual se referem os valores',
          type: 'DATS(8)',
        },
        {
          name: 'CONS_VALUE',
          description: 'Valor de consumo',
          type: 'QUAN(15)',
        },
        {
          name: 'CORR_VALUE',
          description: 'Valor de consumo corrigido',
          type: 'QUAN(15)',
        },
        {
          name: 'VAL_RATIO',
          description: 'Relação valor original : valor corrigido',
          type: 'DEC(7)',
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
      ],
      children: [],
    },
    {
      segment: 'E1BPE1MVEURT',
      description: 'Transf.dados varejo - consumos não planejados',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'PLANT',
          description: 'Centro',
          type: 'CHAR(4)',
        },
        {
          name: 'FIRST_DAY',
          description: 'Primeiro dia do período ao qual se referem os valores',
          type: 'DATS(8)',
        },
        {
          name: 'CONS_VALUE',
          description: 'Valor de consumo',
          type: 'QUAN(15)',
        },
        {
          name: 'CORR_VALUE',
          description: 'Valor de consumo corrigido',
          type: 'QUAN(15)',
        },
        {
          name: 'VAL_RATIO',
          description: 'Relação valor original : valor corrigido',
          type: 'DEC(7)',
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
      ],
      children: [],
    },
    {
      segment: 'E1BPE1MPGDRT',
      description:
        'Transf.dados varejo - dados de planejamento\n                                preliminar',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'PLANT',
          description: 'Centro',
          type: 'CHAR(4)',
        },
        {
          name: 'PLNG_MATL',
          description: 'Material planejado',
          type: 'CHAR(18)',
        },
        {
          name: 'PLNG_PLANT',
          description: 'Centro de planejamento',
          type: 'CHAR(4)',
        },
        {
          name: 'CONVFACTOR',
          description: 'Fator conversão p/UM base de material planejamento prelim.',
          type: 'CHAR(10)',
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
          name: 'PLNG_MATL_EXTERNAL',
          description: 'Nº de material longo para o campo PLNG_MATL',
          type: 'CHAR(40)',
        },
        {
          name: 'PLNG_MATL_GUID',
          description: 'GUID externo para campo PLNG_MATL',
          type: 'CHAR(32)',
        },
        {
          name: 'PLNG_MATL_VERSION',
          description: 'Nº de versão para campo PLNG_MATL',
          type: 'CHAR(10)',
        },
      ],
      children: [],
    },
    {
      segment: 'E1BPE1MPGDRTX',
      description:
        'Transf.dados varejo - barra de seleção para\n                                BAPIE1MPGDRT',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'PLANT',
          description: 'Centro',
          type: 'CHAR(4)',
        },
        {
          name: 'PLNG_MATL',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PLNG_PLANT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'CONVFACTOR',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
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
          name: 'PLNG_MATL_EXTERNAL',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PLNG_MATL_GUID',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PLNG_MATL_VERSION',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
      ],
      children: [],
    },
    {
      segment: 'E1BPE1MARDRT',
      description:
        'Transf.dados varejo - dados de material a nível de\n                                depósito',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'PLANT',
          description: 'Centro',
          type: 'CHAR(4)',
        },
        {
          name: 'STGE_LOC',
          description: 'Depósito',
          type: 'CHAR(4)',
        },
        {
          name: 'DEL_FLAG',
          description: 'Marcar mat.para eliminação a nível de depósito',
          type: 'CHAR(1)',
        },
        {
          name: 'MRP_IND',
          description: 'Código MRP depósito',
          type: 'CHAR(1)',
        },
        {
          name: 'SPEC_PROC',
          description: 'Tipo de suprimento especial: depósito',
          type: 'CHAR(2)',
        },
        {
          name: 'REORDER_PT',
          description: 'Ponto de reabastecimento para planejamento de depósito',
          type: 'QUAN(15)',
        },
        {
          name: 'REPL_QTY',
          description: 'Quantidade de reposição para MRP depósito',
          type: 'QUAN(15)',
        },
        {
          name: 'STGE_BIN',
          description: 'Posição no depósito',
          type: 'CHAR(10)',
        },
        {
          name: 'PICKG_AREA',
          description: 'Área de picking para lean WM',
          type: 'CHAR(3)',
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
      ],
      children: [],
    },
    {
      segment: 'E1BPE1MARDRTX',
      description:
        'Transf.dados varejo - barra de seleção para\n                                BAPIE1MARDRT',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'PLANT',
          description: 'Centro',
          type: 'CHAR(4)',
        },
        {
          name: 'STGE_LOC',
          description: 'Depósito',
          type: 'CHAR(4)',
        },
        {
          name: 'DEL_FLAG',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MRP_IND',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SPEC_PROC',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'REORDER_PT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'REPL_QTY',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'STGE_BIN',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PICKG_AREA',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
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
      ],
      children: [],
    },
    {
      segment: 'E1BPE1MARDEXTRT',
      description:
        'Transf.dados Retail - dados do cliente a nível de\n                                depósito',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'PLANT',
          description: 'Centro',
          type: 'CHAR(4)',
        },
        {
          name: 'STGE_LOC',
          description: 'Depósito',
          type: 'CHAR(4)',
        },
        {
          name: 'FIELD1',
          description: 'Container para dados caractere do comprimento 221',
          type: 'CHAR(221)',
        },
        {
          name: 'FIELD2',
          description: 'Container para dados caractere do comprimento 250',
          type: 'CHAR(250)',
        },
        {
          name: 'FIELD3',
          description: 'Container para dados caractere do comprimento 250',
          type: 'CHAR(250)',
        },
        {
          name: 'FIELD4',
          description: 'Container para dados caractere do comprimento 250',
          type: 'CHAR(250)',
        },
      ],
      children: [
        {
          segment: 'E1BPE1MARDEXTRT1',
          description:
            'Transf.dados Retail - dados do cliente a nível de\n                                depósito',
          max: 1,
          fields: [
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
          ],
          children: [],
        },
      ],
    },
    {
      segment: 'E1BPE1MARDEXTRTX',
      description:
        'Transf.dados Retail - barra de seleção para\n                                BAPIE1MARDEXTRT',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'PLANT',
          description: 'Centro',
          type: 'CHAR(4)',
        },
        {
          name: 'STGE_LOC',
          description: 'Depósito',
          type: 'CHAR(4)',
        },
        {
          name: 'FIELD1',
          description: 'Container para dados caractere do comprimento 221',
          type: 'CHAR(221)',
        },
        {
          name: 'FIELD2',
          description: 'Container para dados caractere do comprimento 250',
          type: 'CHAR(250)',
        },
        {
          name: 'FIELD3',
          description: 'Container para dados caractere do comprimento 250',
          type: 'CHAR(250)',
        },
        {
          name: 'FIELD4',
          description: 'Container para dados caractere do comprimento 250',
          type: 'CHAR(250)',
        },
      ],
      children: [
        {
          segment: 'E1BPE1MARDEXTRTX1',
          description:
            'Transf.dados Retail - barra de seleção para\n                                BAPIE1MARDEXTRT',
          max: 1,
          fields: [
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
          ],
          children: [],
        },
      ],
    },
    {
      segment: 'E1BPE1MARMRT',
      description: 'Transf.dados varejo - unidades de medida',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'ALT_UNIT',
          description: 'Unidade medida alternativa p/unid.gestão estoque',
          type: 'UNIT(3)',
        },
        {
          name: 'ALT_UNIT_ISO',
          description: 'UM alternativa para a unidade gestão de estoque em code ISO',
          type: 'CHAR(3)',
        },
        {
          name: 'NUMERATOR',
          description: 'Contador para a conversão em UMs básicas',
          type: 'DEC(6)',
        },
        {
          name: 'DENOMINATR',
          description: 'Denominador para a conversão em unidades de medida básicas',
          type: 'DEC(6)',
        },
        {
          name: 'EAN_UPC',
          description: 'Nº europeu do artigo (EAN)',
          type: 'CHAR(18)',
        },
        {
          name: 'EAN_CAT',
          description: 'Ctg.de número do nº europeu do artigo',
          type: 'CHAR(2)',
        },
        {
          name: 'LENGTH',
          description: 'Comprimento',
          type: 'QUAN(15)',
        },
        {
          name: 'WIDTH',
          description: 'Largura',
          type: 'QUAN(15)',
        },
        {
          name: 'HEIGHT',
          description: 'Altura',
          type: 'QUAN(15)',
        },
        {
          name: 'UNIT_DIM',
          description: 'Unidade para comprimento/largura/altura',
          type: 'UNIT(3)',
        },
        {
          name: 'UNIT_DIM_ISO',
          description: 'Inidade para comprimento/largura/altura no code ISO',
          type: 'CHAR(3)',
        },
        {
          name: 'VOLUME',
          description: 'Volume',
          type: 'QUAN(15)',
        },
        {
          name: 'VOLUMEUNIT',
          description: 'Unidade de volume',
          type: 'UNIT(3)',
        },
        {
          name: 'VOLUMEUNIT_ISO',
          description: 'Unidade de volume no code ISO',
          type: 'CHAR(3)',
        },
        {
          name: 'GROSS_WT',
          description: 'Peso bruto',
          type: 'QUAN(15)',
        },
        {
          name: 'UNIT_OF_WT',
          description: 'Unidade de peso',
          type: 'UNIT(3)',
        },
        {
          name: 'UNIT_OF_WT_ISO',
          description: 'Unidade de peso no código ISO',
          type: 'CHAR(3)',
        },
        {
          name: 'UNIT',
          description: 'Unidade de medida para a exibição',
          type: 'UNIT(3)',
        },
        {
          name: 'UNIT_ISO',
          description: 'Unidade de medida para a exibição',
          type: 'CHAR(3)',
        },
        {
          name: 'SUB_UOM',
          description: 'Unidade de medida inferior em uma hierarquia de embalagem',
          type: 'UNIT(3)',
        },
        {
          name: 'SUB_UOM_ISO',
          description: 'Unidade de medida inferior em código ISO',
          type: 'CHAR(3)',
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
          name: 'NESTING_FACTOR',
          description: 'Volume restante após aninhamento (em %)',
          type: 'DEC(4)',
        },
        {
          name: 'MAXIMUM_STACKING',
          description: 'Fator de empilhamento máximo',
          type: 'INT1(3)',
        },
        {
          name: 'CAPACITY_USAGE',
          description: 'Consumo da capacidade',
          type: 'DEC(17)',
        },
        {
          name: 'EWM_CW_UOM_TYPE',
          description: 'EWM-CW: categoria da unidade de medida',
          type: 'CHAR(1)',
        },
      ],
      children: [],
    },
    {
      segment: 'E1BPE1MARMRTX',
      description:
        'Transf.dados varejo - barra de seleção para\n                                BAPIE1MARMRT',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'ALT_UNIT',
          description: 'Unidade medida alternativa p/unid.gestão estoque',
          type: 'UNIT(3)',
        },
        {
          name: 'ALT_UNIT_ISO',
          description: 'UM alternativa para a unidade gestão de estoque em code ISO',
          type: 'CHAR(3)',
        },
        {
          name: 'NUMERATOR',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'DENOMINATR',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'EAN_UPC',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'EAN_CAT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'LENGTH',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'WIDTH',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'HEIGHT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'UNIT_DIM',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'UNIT_DIM_ISO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'VOLUME',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'VOLUMEUNIT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'VOLUMEUNIT_ISO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'GROSS_WT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'UNIT_OF_WT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'UNIT_OF_WT_ISO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SUB_UOM',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SUB_UOM_ISO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
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
          name: 'NESTING_FACTOR',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MAXIMUM_STACKING',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'CAPACITY_USAGE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'EWM_CW_UOM_TYPE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
      ],
      children: [],
    },
    {
      segment: 'E1BPE1MAMTRT',
      description:
        'Transf.dados varejo - textos de material dependentes da\n                                UM',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'LANGU',
          description: 'Código de idioma',
          type: 'LANG(1)',
        },
        {
          name: 'LANGU_ISO',
          description: 'Código de idiomas SAP de 2 dígitos',
          type: 'CHAR(2)',
        },
        {
          name: 'ALT_UNIT',
          description: 'Unidade medida alternativa p/unid.gestão estoque',
          type: 'UNIT(3)',
        },
        {
          name: 'ALT_UNIT_ISO',
          description: 'UM alternativa para a unidade gestão de estoque em code ISO',
          type: 'CHAR(3)',
        },
        {
          name: 'TEXT_ID',
          description: 'Mestre material: ID texto breve por unidade de medida',
          type: 'CHAR(2)',
        },
        {
          name: 'CONSEC_NO',
          description: 'Nº sequencial para MAMT (2 caracteres)',
          type: 'NUMC(2)',
        },
        {
          name: 'MATL_DESCR',
          description: 'Texto breve material para unidade de medida',
          type: 'CHAR(40)',
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
      ],
      children: [],
    },
    {
      segment: 'E1BPE1MEANRT',
      description: 'Transf.dados varejo - nº europeu do artigo (EAN)',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'UNIT',
          description: 'Unidade de medida para a exibição',
          type: 'UNIT(3)',
        },
        {
          name: 'UNIT_ISO',
          description: 'Unidade de medida para a exibição',
          type: 'CHAR(3)',
        },
        {
          name: 'EAN_UPC',
          description: 'Nº europeu do artigo (EAN)',
          type: 'CHAR(18)',
        },
        {
          name: 'EAN_CAT',
          description: 'Ctg.de número do nº europeu do artigo',
          type: 'CHAR(2)',
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
          name: 'SEGMENT',
          description: 'Valor de segmentação',
          type: 'CHAR(16)',
        },
      ],
      children: [],
    },
    {
      segment: 'E1BPE1MLEART',
      description: 'Transf.dados varejo - EANs específicos do fornecedor',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'UNIT',
          description: 'Unidade de medida para a exibição',
          type: 'UNIT(3)',
        },
        {
          name: 'UNIT_ISO',
          description: 'Unidade de medida para a exibição',
          type: 'CHAR(3)',
        },
        {
          name: 'VENDOR_NO',
          description: 'Nº conta do fornecedor',
          type: 'CHAR(10)',
        },
        {
          name: 'EAN_UPC',
          description: 'Nº europeu do artigo (EAN)',
          type: 'CHAR(18)',
        },
        {
          name: 'MAIN_EAN',
          description: 'Código: EAN principal do fornecedor',
          type: 'CHAR(1)',
        },
        {
          name: 'VEND_MAT',
          description: 'Nº material atribuído pelo fornecedor',
          type: 'CHAR(35)',
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
      ],
      children: [],
    },
    {
      segment: 'E1BPE1MALGRT',
      description: 'Transf.dados varejo - módulos de layout',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'UNIT',
          description: 'Unidade de medida para a exibição',
          type: 'UNIT(3)',
        },
        {
          name: 'UNIT_ISO',
          description: 'Unidade de medida para a exibição',
          type: 'CHAR(3)',
        },
        {
          name: 'LAYOUT_MOD',
          description: 'Módulo layout',
          type: 'CHAR(10)',
        },
        {
          name: 'SORT_SEQ',
          description: 'Nº sequência de ordenação em módulo de layout 1',
          type: 'NUMC(10)',
        },
        {
          name: 'MAIN_LMOD',
          description: 'Código: módulo de layout principal',
          type: 'CHAR(1)',
        },
        {
          name: 'FACING',
          description: 'Nº de materiais colocados um ao lado do outro',
          type: 'QUAN(15)',
        },
        {
          name: 'SHELF_BOARD_NUMBER',
          description: 'Seção da prateleira',
          type: 'NUMC(10)',
        },
        {
          name: 'FRONT',
          description: 'Núm.materiais posicionados um acima do outro',
          type: 'QUAN(15)',
        },
        {
          name: 'SHELF_QUANTITY_MAX',
          description: 'Qtd.máxima de prateleira',
          type: 'QUAN(15)',
        },
        {
          name: 'SHELF_QUANTITY_OPT',
          description: 'Quantidade de prateleira ótima',
          type: 'QUAN(15)',
        },
        {
          name: 'PRES_QNT',
          description: 'Qtd.apresentação',
          type: 'QUAN(15)',
        },
        {
          name: 'LAYMOD_VER',
          description: 'Versão de um módulo layout',
          type: 'NUMC(4)',
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
          name: 'LAYMOD_VAR',
          description: 'Variante para a versão do módulo layout',
          type: 'CHAR(4)',
        },
        {
          name: 'EXCLUSION',
          description: 'Flag de exclusão',
          type: 'CHAR(1)',
        },
      ],
      children: [],
    },
    {
      segment: 'E1BPE1MALGRTX',
      description:
        'Transf.dados varejo - barra de seleção para\n                                BAPIE1MALGRT',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'UNIT',
          description: 'Unidade de medida para a exibição',
          type: 'UNIT(3)',
        },
        {
          name: 'UNIT_ISO',
          description: 'Unidade de medida para a exibição',
          type: 'CHAR(3)',
        },
        {
          name: 'LAYOUT_MOD',
          description: 'Módulo layout',
          type: 'CHAR(10)',
        },
        {
          name: 'SORT_SEQ',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MAIN_LMOD',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'FACING',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SHELF_BOARD_NUMBER',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'FRONT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SHELF_QUANTITY_MAX',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SHELF_QUANTITY_OPT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PRES_QNT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'LAYMOD_VER',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
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
          name: 'LAYMOD_VAR',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'EXCLUSION',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
      ],
      children: [],
    },
    {
      segment: 'E1BPE1MLANRT',
      description: 'Transf.dados varejo - dados de controle',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'DEPCOUNTRY',
          description: 'País fornecedor (país onde a mercadoria é expedida)',
          type: 'CHAR(3)',
        },
        {
          name: 'DEPCOUNTRY_ISO',
          description: 'País fornecedor em code ISO',
          type: 'CHAR(2)',
        },
        {
          name: 'TAX_TYPE_1',
          description: 'Ctg.imposto (sales tax, federal sales tax,...)',
          type: 'CHAR(4)',
        },
        {
          name: 'TAXCLASS_1',
          description: 'Classificação fiscal do material',
          type: 'CHAR(1)',
        },
        {
          name: 'TAX_TYPE_2',
          description: 'Ctg.imposto (sales tax, federal sales tax,...)',
          type: 'CHAR(4)',
        },
        {
          name: 'TAXCLASS_2',
          description: 'Classificação fiscal do material',
          type: 'CHAR(1)',
        },
        {
          name: 'TAX_TYPE_3',
          description: 'Ctg.imposto (sales tax, federal sales tax,...)',
          type: 'CHAR(4)',
        },
        {
          name: 'TAXCLASS_3',
          description: 'Classificação fiscal do material',
          type: 'CHAR(1)',
        },
        {
          name: 'TAX_TYPE_4',
          description: 'Ctg.imposto (sales tax, federal sales tax,...)',
          type: 'CHAR(4)',
        },
        {
          name: 'TAXCLASS_4',
          description: 'Classificação fiscal do material',
          type: 'CHAR(1)',
        },
        {
          name: 'TAX_TYPE_5',
          description: 'Ctg.imposto (sales tax, federal sales tax,...)',
          type: 'CHAR(4)',
        },
        {
          name: 'TAXCLASS_5',
          description: 'Classificação fiscal do material',
          type: 'CHAR(1)',
        },
        {
          name: 'TAX_TYPE_6',
          description: 'Ctg.imposto (sales tax, federal sales tax,...)',
          type: 'CHAR(4)',
        },
        {
          name: 'TAXCLASS_6',
          description: 'Classificação fiscal do material',
          type: 'CHAR(1)',
        },
        {
          name: 'TAX_TYPE_7',
          description: 'Ctg.imposto (sales tax, federal sales tax,...)',
          type: 'CHAR(4)',
        },
        {
          name: 'TAXCLASS_7',
          description: 'Classificação fiscal do material',
          type: 'CHAR(1)',
        },
        {
          name: 'TAX_TYPE_8',
          description: 'Ctg.imposto (sales tax, federal sales tax,...)',
          type: 'CHAR(4)',
        },
        {
          name: 'TAXCLASS_8',
          description: 'Classificação fiscal do material',
          type: 'CHAR(1)',
        },
        {
          name: 'TAX_TYPE_9',
          description: 'Ctg.imposto (sales tax, federal sales tax,...)',
          type: 'CHAR(4)',
        },
        {
          name: 'TAXCLASS_9',
          description: 'Classificação fiscal do material',
          type: 'CHAR(1)',
        },
        {
          name: 'TAX_IND',
          description: 'Indicador de imposto material (compras)',
          type: 'CHAR(1)',
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
          name: 'MATERIAL_LONG',
          description: 'Nº material (40 caracteres, necessário por razões técnicas)',
          type: 'CHAR(40)',
        },
      ],
      children: [],
    },
    {
      segment: 'E1BPE1MBEWRT',
      description: 'Transf.dados varejo - dados de avaliação',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'VAL_AREA',
          description: 'Área de avaliação',
          type: 'CHAR(4)',
        },
        {
          name: 'VAL_TYPE',
          description: 'Tipo de avaliação',
          type: 'CHAR(10)',
        },
        {
          name: 'DEL_FLAG',
          description: 'Marcação p/eliminar todos os dads.mat.de um tipo avaliação',
          type: 'CHAR(1)',
        },
        {
          name: 'PRICE_CTRL',
          description: 'Código de controle de preço',
          type: 'CHAR(1)',
        },
        {
          name: 'MOVING_PR',
          description: 'Preço médio móvel/preço interno periódico',
          type: 'DEC(25)',
        },
        {
          name: 'STD_PRICE',
          description: 'Prç.standard',
          type: 'DEC(25)',
        },
        {
          name: 'PRICE_UNIT',
          description: 'Unidade preço',
          type: 'DEC(6)',
        },
        {
          name: 'VAL_CLASS',
          description: 'Classe de avaliação',
          type: 'CHAR(4)',
        },
        {
          name: 'PR_CTRL_PP',
          description: 'Código de controle do preço do período precedente',
          type: 'CHAR(1)',
        },
        {
          name: 'MOV_PR_PP',
          description: 'Preço médio móvel/preço interno periódico período precedente',
          type: 'DEC(25)',
        },
        {
          name: 'STD_PR_PP',
          description: 'Preço standard do período anterior',
          type: 'DEC(25)',
        },
        {
          name: 'PR_UNIT_PP',
          description: 'Unidade de preço do período precedente',
          type: 'DEC(6)',
        },
        {
          name: 'VCLASS_PP',
          description: 'Classe de avaliação do período precedente',
          type: 'CHAR(4)',
        },
        {
          name: 'PR_CTRL_PY',
          description: 'Código de controle de preço do ano precedente',
          type: 'CHAR(1)',
        },
        {
          name: 'MOV_PR_PY',
          description: 'Preço médio móvel/preço interno periódico do ano precedente',
          type: 'DEC(25)',
        },
        {
          name: 'STD_PR_PY',
          description: 'Preço standard do ano precedente',
          type: 'DEC(25)',
        },
        {
          name: 'PR_UNIT_PY',
          description: 'Unidade de preço do ano precedente',
          type: 'DEC(6)',
        },
        {
          name: 'VCLASS_PY',
          description: 'Classe de avaliação do ano precedente',
          type: 'CHAR(4)',
        },
        {
          name: 'VAL_CAT',
          description: 'Categoria de avaliação',
          type: 'CHAR(1)',
        },
        {
          name: 'FUTURE_PR',
          description: 'Preço futuro',
          type: 'DEC(25)',
        },
        {
          name: 'VALID_FROM',
          description: 'Início da validade do preço',
          type: 'DATS(8)',
        },
        {
          name: 'TAXPRICE_1',
          description: 'Preço que exprime o valor fiscal - nível 1',
          type: 'DEC(25)',
        },
        {
          name: 'COMMPRICE1',
          description: 'Preço que exprime valor comercial - nível 1',
          type: 'DEC(25)',
        },
        {
          name: 'TAXPRICE_3',
          description: 'Preço que exprime o valor tributário - nível 3',
          type: 'DEC(25)',
        },
        {
          name: 'COMMPRICE3',
          description: 'Preço que exprime valor comercial - nível 3',
          type: 'DEC(25)',
        },
        {
          name: 'LIFO_FIFO',
          description: 'Relevante para LIFO/FIFO',
          type: 'CHAR(1)',
        },
        {
          name: 'POOLNUMBER',
          description: 'Nº pool para avaliação LIFO',
          type: 'CHAR(4)',
        },
        {
          name: 'TAXPRICE_2',
          description: 'Preço que exprime o valor fiscal - nível 2',
          type: 'DEC(25)',
        },
        {
          name: 'COMMPRICE2',
          description: 'Preço que exprime valor comercial - nível 2',
          type: 'DEC(25)',
        },
        {
          name: 'DEVAL_IND',
          description: 'Valor mais baixo: indicador de desvalorização',
          type: 'NUMC(2)',
        },
        {
          name: 'ML_ACTIVE',
          description: 'Ledger de material ativado a nível de material',
          type: 'CHAR(1)',
        },
        {
          name: 'ML_SETTLE',
          description: 'Apropriação custos do ledger de materiais: controle',
          type: 'CHAR(1)',
        },
        {
          name: 'VAL_MARGIN',
          description: 'Margem de avaliação',
          type: 'DEC(9)',
        },
        {
          name: 'VM_SO_STK',
          description: 'Classe de avaliação para estoque ordem de cliente',
          type: 'CHAR(4)',
        },
        {
          name: 'VM_P_STOCK',
          description: 'Classe de avaliação para estoque para projeto',
          type: 'CHAR(4)',
        },
        {
          name: 'MATL_USAGE',
          description: 'Utilização de material',
          type: 'CHAR(1)',
        },
        {
          name: 'MAT_ORIGIN',
          description: 'Origem de material',
          type: 'CHAR(1)',
        },
        {
          name: 'IN_HOUSE',
          description: 'Produção interna',
          type: 'CHAR(1)',
        },
        {
          name: 'TAX_CML_UN',
          description: 'Unidade dos preços que exprimem val.comercial/tributário',
          type: 'DEC(6)',
        },
        {
          name: 'ORIG_GROUP',
          description: 'Grupo de origem como subdivisão da classe de custo',
          type: 'CHAR(4)',
        },
        {
          name: 'ORIG_MAT',
          description: 'Origem referida a material',
          type: 'CHAR(1)',
        },
        {
          name: 'OVERHEAD_GRP',
          description: 'Grupo de custos indiretos do cálculo de custos',
          type: 'CHAR(10)',
        },
        {
          name: 'WITH_QTY_STRUCT',
          description: 'O material será cálculado com estrutura quantitativa',
          type: 'CHAR(1)',
        },
        {
          name: 'PLND_PRICE',
          description: 'Preço planejado futuro',
          type: 'DEC(25)',
        },
        {
          name: 'PLNDPRICE1',
          description: 'Preço planejado futuro 1',
          type: 'DEC(25)',
        },
        {
          name: 'PLNDPRICE2',
          description: 'Preço planejado futuro 2',
          type: 'DEC(25)',
        },
        {
          name: 'PLNDPRICE3',
          description: 'Preço planejado futuro 3',
          type: 'DEC(25)',
        },
        {
          name: 'PLNDPRDATE1',
          description: 'Data a partir da qual será válido o preço previsto 1',
          type: 'DATS(8)',
        },
        {
          name: 'PLNDPRDATE2',
          description: 'Data a partir da qual será válido o preço previsto 2',
          type: 'DATS(8)',
        },
        {
          name: 'PLNDPRDATE3',
          description: 'Data a partir da qual será válido o preço previsto 3',
          type: 'DATS(8)',
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
      ],
      children: [],
    },
    {
      segment: 'E1BPE1MBEWRTX',
      description:
        'Transf.dados Retail - barra de seleção para\n                                BAPIE1MBEWERT',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'VAL_AREA',
          description: 'Área de avaliação',
          type: 'CHAR(4)',
        },
        {
          name: 'VAL_TYPE',
          description: 'Tipo de avaliação',
          type: 'CHAR(10)',
        },
        {
          name: 'DEL_FLAG',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PRICE_CTRL',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MOVING_PR',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'STD_PRICE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PRICE_UNIT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'VAL_CLASS',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PR_CTRL_PP',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MOV_PR_PP',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'STD_PR_PP',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PR_UNIT_PP',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'VCLASS_PP',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PR_CTRL_PY',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MOV_PR_PY',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'STD_PR_PY',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PR_UNIT_PY',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'VCLASS_PY',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'VAL_CAT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'FUTURE_PR',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'VALID_FROM',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'TAXPRICE_1',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'COMMPRICE1',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'TAXPRICE_3',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'COMMPRICE3',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'LIFO_FIFO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'POOLNUMBER',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'TAXPRICE_2',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'COMMPRICE2',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'DEVAL_IND',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'ML_ACTIVE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'ML_SETTLE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'VAL_MARGIN',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'VM_SO_STK',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'VM_P_STOCK',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MATL_USAGE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MAT_ORIGIN',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'IN_HOUSE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'TAX_CML_UN',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'ORIG_GROUP',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'ORIG_MAT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'OVERHEAD_GRP',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'WITH_QTY_STRUCT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PLND_PRICE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PLNDPRICE1',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PLNDPRICE2',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PLNDPRICE3',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PLNDPRDATE1',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PLNDPRDATE2',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PLNDPRDATE3',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
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
      ],
      children: [],
    },
    {
      segment: 'E1BPE1MBEWEXTRT',
      description:
        'Transf.dados Retail - dados de avaliação do\n                                cliente',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'VAL_AREA',
          description: 'Área de avaliação',
          type: 'CHAR(4)',
        },
        {
          name: 'VAL_TYPE',
          description: 'Tipo de avaliação',
          type: 'CHAR(10)',
        },
        {
          name: 'FIELD1',
          description: 'Container para dados caractere do comprimento 215',
          type: 'CHAR(215)',
        },
        {
          name: 'FIELD2',
          description: 'Container para dados caractere do comprimento 250',
          type: 'CHAR(250)',
        },
        {
          name: 'FIELD3',
          description: 'Container para dados caractere do comprimento 250',
          type: 'CHAR(250)',
        },
        {
          name: 'FIELD4',
          description: 'Container para dados caractere do comprimento 250',
          type: 'CHAR(250)',
        },
      ],
      children: [
        {
          segment: 'E1BPE1MBEWEXTRT1',
          description:
            'Transf.dados Retail - dados de avaliação do\n                                cliente',
          max: 1,
          fields: [
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
          ],
          children: [],
        },
      ],
    },
    {
      segment: 'E1BPE1MBEWEXTRTX',
      description:
        'Transf.dados Retail - barra de seleção para\n                                BAPIE1MBEWEXTRT',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'VAL_AREA',
          description: 'Área de avaliação',
          type: 'CHAR(4)',
        },
        {
          name: 'VAL_TYPE',
          description: 'Tipo de avaliação',
          type: 'CHAR(10)',
        },
        {
          name: 'FIELD1',
          description: 'Container para dados caractere do comprimento 215',
          type: 'CHAR(215)',
        },
        {
          name: 'FIELD2',
          description: 'Container para dados caractere do comprimento 250',
          type: 'CHAR(250)',
        },
        {
          name: 'FIELD3',
          description: 'Container para dados caractere do comprimento 250',
          type: 'CHAR(250)',
        },
        {
          name: 'FIELD4',
          description: 'Container para dados caractere do comprimento 250',
          type: 'CHAR(250)',
        },
      ],
      children: [
        {
          segment: 'E1BPE1MBEWEXTRTX1',
          description:
            'Transf.dados Retail - barra de seleção para\n                                BAPIE1MBEWEXTRT',
          max: 1,
          fields: [
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
          ],
          children: [],
        },
      ],
    },
    {
      segment: 'E1BPE1MLGNRT',
      description: 'Transf.dados varejo - dados de sistema de depósito',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'WHSE_NO',
          description: 'Nºdepósito/complexo de depósito',
          type: 'CHAR(3)',
        },
        {
          name: 'DEL_FLAG',
          description: 'Marcação p/eliminar todos os dados mat.de um número depósito',
          type: 'CHAR(1)',
        },
        {
          name: 'STGESECTOR',
          description: 'Código da área de armazenamento',
          type: 'CHAR(3)',
        },
        {
          name: 'PLACEMENT',
          description: 'Código da categoria de depósito para entrada em depósito',
          type: 'CHAR(3)',
        },
        {
          name: 'WITHDRAWAL',
          description: 'Código de ctg.de depósito para saída de depósito',
          type: 'CHAR(3)',
        },
        {
          name: 'L_EQUIP_1',
          description: '1ª qtd.meios auxiliares para carregamento',
          type: 'QUAN(15)',
        },
        {
          name: 'L_EQUIP_2',
          description: '2ª qtd.meios aux.para carregamento',
          type: 'QUAN(15)',
        },
        {
          name: 'L_EQUIP_3',
          description: '3ª qtd.meios aux.para carregamento',
          type: 'QUAN(15)',
        },
        {
          name: 'LEQ_UNIT_1',
          description: 'Unidade de medida para a 1ª qtd.meios aux.carregamento',
          type: 'UNIT(3)',
        },
        {
          name: 'LEQ_UNIT_1_ISO',
          description: 'Unidade de medida para a 1ª qtd.meios aux.carreg.em code ISO',
          type: 'CHAR(3)',
        },
        {
          name: 'LEQ_UNIT_2',
          description: 'Unidade de medida para a 2ª qtd.meios aux.carregamento',
          type: 'UNIT(3)',
        },
        {
          name: 'LEQ_UNIT_2_ISO',
          description: 'Unidade de medida p/2ª qtd.meios aux.carregam.em code ISO',
          type: 'CHAR(3)',
        },
        {
          name: 'LEQ_UNIT_3',
          description: 'Unidade de medida para a 3ª qtd.meios aux.carregamento',
          type: 'UNIT(3)',
        },
        {
          name: 'LEQ_UNIT_3_ISO',
          description: 'Unidade de medida para a 3ª qtd.meios aux.carreg.em code ISO',
          type: 'CHAR(3)',
        },
        {
          name: 'UNITTYPE_1',
          description: '1. tipo de unidade de depósito',
          type: 'CHAR(3)',
        },
        {
          name: 'UNITTYPE_2',
          description: '2. tipo de unidade de depósito',
          type: 'CHAR(3)',
        },
        {
          name: 'UNITTYPE_3',
          description: '3. tipo de unidade de depósito',
          type: 'CHAR(3)',
        },
        {
          name: 'WM_UNIT',
          description: 'Unidade de medida WM',
          type: 'UNIT(3)',
        },
        {
          name: 'WM_UNIT_ISO',
          description: 'Unidade de medida WM em code ISO',
          type: 'CHAR(3)',
        },
        {
          name: 'ADD_TO_STK',
          description: 'Código: armazenamento adicional permitido',
          type: 'CHAR(1)',
        },
        {
          name: 'BLOCK_STGE',
          description: 'Código depósito em bloco',
          type: 'CHAR(2)',
        },
        {
          name: 'MSG_TO_IM',
          description: 'Código: mensagem para a administração de estoques',
          type: 'CHAR(1)',
        },
        {
          name: 'SPEC_MVMT',
          description: 'Código especial para movimento na administração de depósitos',
          type: 'CHAR(1)',
        },
        {
          name: 'CAPY_USAGE',
          description: 'Consumo de capacidade',
          type: 'DEC(13)',
        },
        {
          name: 'PROCURE_UN',
          description: 'Unidade de medida de referência para consumo capacidade',
          type: 'UNIT(3)',
        },
        {
          name: 'PROCURE_UN_ISO',
          description: 'UM de referência para consumo de capacidade em code ISO',
          type: 'CHAR(3)',
        },
        {
          name: 'STGE_TYPE',
          description: 'Tipo de depósito picking para planejamento global/detalhado',
          type: 'CHAR(3)',
        },
        {
          name: 'REF_UNIT',
          description: 'Proposta para unidade de medida do mestre de material',
          type: 'CHAR(1)',
        },
        {
          name: '2STEP_PICK',
          description: 'Relevância do material para picking em 2 etapas',
          type: 'CHAR(1)',
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
      ],
      children: [],
    },
    {
      segment: 'E1BPE1MLGNRTX',
      description:
        'Transf.dados varejo - barra de seleção para\n                                BAPIE1MLGNRT',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'WHSE_NO',
          description: 'Nºdepósito/complexo de depósito',
          type: 'CHAR(3)',
        },
        {
          name: 'DEL_FLAG',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'STGESECTOR',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PLACEMENT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'WITHDRAWAL',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'L_EQUIP_1',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'L_EQUIP_2',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'L_EQUIP_3',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'LEQ_UNIT_1',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'LEQ_UNIT_1_ISO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'LEQ_UNIT_2',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'LEQ_UNIT_2_ISO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'LEQ_UNIT_3',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'LEQ_UNIT_3_ISO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'UNITTYPE_1',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'UNITTYPE_2',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'UNITTYPE_3',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'WM_UNIT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'WM_UNIT_ISO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'ADD_TO_STK',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'BLOCK_STGE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MSG_TO_IM',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SPEC_MVMT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'CAPY_USAGE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PROCURE_UN',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PROCURE_UN_ISO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'STGE_TYPE',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'REF_UNIT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: '2STEP_PICK',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
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
      ],
      children: [],
    },
    {
      segment: 'E1BPE1MLGNEXTRT',
      description:
        'Transf.dados Retail - dados sistema depósito do\n                                cliente',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'WHSE_NO',
          description: 'Nºdepósito/complexo de depósito',
          type: 'CHAR(3)',
        },
        {
          name: 'FIELD1',
          description: 'Container para dados caractere do comprimento 226',
          type: 'CHAR(226)',
        },
        {
          name: 'FIELD2',
          description: 'Container para dados caractere do comprimento 250',
          type: 'CHAR(250)',
        },
        {
          name: 'FIELD3',
          description: 'Container para dados caractere do comprimento 250',
          type: 'CHAR(250)',
        },
        {
          name: 'FIELD4',
          description: 'Container para dados caractere do comprimento 250',
          type: 'CHAR(250)',
        },
      ],
      children: [
        {
          segment: 'E1BPE1MLGNEXTRT1',
          description:
            'Transf.dados Retail - dados sistema depósito do\n                                cliente',
          max: 1,
          fields: [
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
          ],
          children: [],
        },
      ],
    },
    {
      segment: 'E1BPE1MLGNEXTRTX',
      description:
        'Transf.dados Retail - barra de seleção para\n                                BAPIE1MLGNEXTRT',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'WHSE_NO',
          description: 'Nºdepósito/complexo de depósito',
          type: 'CHAR(3)',
        },
        {
          name: 'FIELD1',
          description: 'Container para dados caractere do comprimento 226',
          type: 'CHAR(226)',
        },
        {
          name: 'FIELD2',
          description: 'Container para dados caractere do comprimento 250',
          type: 'CHAR(250)',
        },
        {
          name: 'FIELD3',
          description: 'Container para dados caractere do comprimento 250',
          type: 'CHAR(250)',
        },
        {
          name: 'FIELD4',
          description: 'Container para dados caractere do comprimento 250',
          type: 'CHAR(250)',
        },
      ],
      children: [
        {
          segment: 'E1BPE1MLGNEXTRTX1',
          description:
            'Transf.dados Retail - barra de seleção para\n                                BAPIE1MLGNEXTRT',
          max: 1,
          fields: [
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
          ],
          children: [],
        },
      ],
    },
    {
      segment: 'E1BPE1MLGTRT',
      description: 'Transf.dados varejo - dados de tipo de depósito',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'WHSE_NO',
          description: 'Nºdepósito/complexo de depósito',
          type: 'CHAR(3)',
        },
        {
          name: 'STGE_TYPE',
          description: 'Tipo de depósito',
          type: 'CHAR(3)',
        },
        {
          name: 'DEL_FLAG',
          description: 'Marcação p/eliminar todos os dados mat.de um tipo depósito',
          type: 'CHAR(1)',
        },
        {
          name: 'STGE_BIN',
          description: 'Posição no depósito',
          type: 'CHAR(10)',
        },
        {
          name: 'MAX_SB_QTY',
          description: 'Qtd.máxima posiç.no dep.',
          type: 'QUAN(15)',
        },
        {
          name: 'MIN_SB_QTY',
          description: 'Qtd.mínima posiç.no dep.',
          type: 'QUAN(15)',
        },
        {
          name: 'CTRL_QTY',
          description: 'Quantidade de manejo',
          type: 'QUAN(15)',
        },
        {
          name: 'REPLEN_QTY',
          description: 'Quantidade de reabastecimento',
          type: 'QUAN(15)',
        },
        {
          name: 'PICK_AREA',
          description: 'Área de picking',
          type: 'CHAR(3)',
        },
        {
          name: 'ROUND_UNIT',
          description: 'Qtd.arredond.',
          type: 'QUAN(15)',
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
      ],
      children: [],
    },
    {
      segment: 'E1BPE1MLGTRTX',
      description:
        'Transf.dados varejo - barra de seleção para\n                                BAPIE1MLGTRT',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'WHSE_NO',
          description: 'Nºdepósito/complexo de depósito',
          type: 'CHAR(3)',
        },
        {
          name: 'STGE_TYPE',
          description: 'Tipo de depósito',
          type: 'CHAR(3)',
        },
        {
          name: 'DEL_FLAG',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'STGE_BIN',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MAX_SB_QTY',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MIN_SB_QTY',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'CTRL_QTY',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'REPLEN_QTY',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PICK_AREA',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'ROUND_UNIT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
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
      ],
      children: [],
    },
    {
      segment: 'E1BPE1MLGTEXTRT',
      description:
        'Transf.dados Retail - dados tipo de depósito do\n                                cliente',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'WHSE_NO',
          description: 'Nºdepósito/complexo de depósito',
          type: 'CHAR(3)',
        },
        {
          name: 'STGE_TYPE',
          description: 'Tipo de depósito',
          type: 'CHAR(3)',
        },
        {
          name: 'FIELD1',
          description: 'Container para dados caractere do comprimento 223',
          type: 'CHAR(223)',
        },
        {
          name: 'FIELD2',
          description: 'Container para dados caractere do comprimento 250',
          type: 'CHAR(250)',
        },
        {
          name: 'FIELD3',
          description: 'Container para dados caractere do comprimento 250',
          type: 'CHAR(250)',
        },
        {
          name: 'FIELD4',
          description: 'Container para dados caractere do comprimento 250',
          type: 'CHAR(250)',
        },
      ],
      children: [
        {
          segment: 'E1BPE1MLGTEXTRT1',
          description:
            'Transf.dados Retail - dados tipo de depósito do\n                                cliente',
          max: 1,
          fields: [
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
          ],
          children: [],
        },
      ],
    },
    {
      segment: 'E1BPE1MLGTEXTRTX',
      description:
        'Transf.dados Retail - barra de seleção para\n                                BAPIE1MLGTEXTRT',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'WHSE_NO',
          description: 'Nºdepósito/complexo de depósito',
          type: 'CHAR(3)',
        },
        {
          name: 'STGE_TYPE',
          description: 'Tipo de depósito',
          type: 'CHAR(3)',
        },
        {
          name: 'FIELD1',
          description: 'Container para dados caractere do comprimento 223',
          type: 'CHAR(223)',
        },
        {
          name: 'FIELD2',
          description: 'Container para dados caractere do comprimento 250',
          type: 'CHAR(250)',
        },
        {
          name: 'FIELD3',
          description: 'Container para dados caractere do comprimento 250',
          type: 'CHAR(250)',
        },
        {
          name: 'FIELD4',
          description: 'Container para dados caractere do comprimento 250',
          type: 'CHAR(250)',
        },
      ],
      children: [
        {
          segment: 'E1BPE1MLGTEXTRTX1',
          description:
            'Transf.dados Retail - barra de seleção para\n                                BAPIE1MLGTEXTRT',
          max: 1,
          fields: [
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
          ],
          children: [],
        },
      ],
    },
    {
      segment: 'E1BPE1MVKERT',
      description: 'Transf.dados varejo - dados de vendas',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'SALES_ORG',
          description: 'Organização de vendas',
          type: 'CHAR(4)',
        },
        {
          name: 'DISTR_CHAN',
          description: 'Canal de distribuição',
          type: 'CHAR(2)',
        },
        {
          name: 'DEL_FLAG',
          description: 'Código: marcar mat.para eliminação a nível canal de vendas',
          type: 'CHAR(1)',
        },
        {
          name: 'MATL_STATS',
          description: 'Grupo estatístico material',
          type: 'CHAR(1)',
        },
        {
          name: 'REBATE_GRP',
          description: 'Grupo de bônus',
          type: 'CHAR(2)',
        },
        {
          name: 'COMM_GROUP',
          description: 'Grupo de comissões',
          type: 'CHAR(2)',
        },
        {
          name: 'CASH_DISC',
          description: 'Código: com direito a desconto',
          type: 'CHAR(1)',
        },
        {
          name: 'SAL_STATUS',
          description: 'Status do material específica da linha de vendas',
          type: 'CHAR(2)',
        },
        {
          name: 'VALID_FROM',
          description: 'Data a partir da qual vale status mat.específ.linha vendas',
          type: 'DATS(8)',
        },
        {
          name: 'MIN_ORDER',
          description: 'Quantidade mínima da ordem em UM base',
          type: 'QUAN(15)',
        },
        {
          name: 'MIN_DELY',
          description: 'Qtd.mín.fornecimento no processamento da nota de remessa',
          type: 'QUAN(15)',
        },
        {
          name: 'MIN_MTO',
          description: 'Quantidade mínima de produção individual',
          type: 'QUAN(15)',
        },
        {
          name: 'DELY_UNIT',
          description: 'Unidade de medida da remessa',
          type: 'QUAN(15)',
        },
        {
          name: 'DELY_UOM',
          description: 'Unidade de medida da unidade de remessa',
          type: 'UNIT(3)',
        },
        {
          name: 'DELY_UOM_ISO',
          description: 'Unidade de medida da UM de remessa em code ISO',
          type: 'CHAR(3)',
        },
        {
          name: 'SALES_UNIT',
          description: 'Unidade de venda',
          type: 'UNIT(3)',
        },
        {
          name: 'SALES_UNIT_ISO',
          description: 'Unidade de venda em code ISO',
          type: 'CHAR(3)',
        },
        {
          name: 'ITEM_CAT',
          description: 'Grupo de ctgs.item do mestre de material',
          type: 'CHAR(4)',
        },
        {
          name: 'DELYG_PLNT',
          description: 'Centro fornecedor',
          type: 'CHAR(4)',
        },
        {
          name: 'PROD_HIER',
          description: 'Hierarquia de produtos',
          type: 'CHAR(18)',
        },
        {
          name: 'PR_REF_MAT',
          description: 'Mat.ref.p/prç.',
          type: 'CHAR(18)',
        },
        {
          name: 'MAT_PR_GRP',
          description: 'Grupo de materiais',
          type: 'CHAR(2)',
        },
        {
          name: 'ACCT_ASSGT',
          description: 'Grupo de classificação contábil - material',
          type: 'CHAR(2)',
        },
        {
          name: 'MATL_GRP_1',
          description: 'Grupo de material 1',
          type: 'CHAR(3)',
        },
        {
          name: 'MATL_GRP_2',
          description: 'Grupo de material 2',
          type: 'CHAR(3)',
        },
        {
          name: 'MATL_GRP_3',
          description: 'Grupo de materiais 3',
          type: 'CHAR(3)',
        },
        {
          name: 'MATL_GRP_4',
          description: 'Grupo de material 4',
          type: 'CHAR(3)',
        },
        {
          name: 'MATL_GRP_5',
          description: 'Grupo de material 5',
          type: 'CHAR(3)',
        },
        {
          name: 'ASSORT_LEV',
          description: 'Nível de sortimento',
          type: 'CHAR(2)',
        },
        {
          name: 'ASSORTPRIO',
          description: 'Prioridade de sortimento ext.',
          type: 'CHAR(1)',
        },
        {
          name: 'LI_PROC_ST',
          description: 'Método de listagem para a filial ou outros tipos sortimento',
          type: 'CHAR(2)',
        },
        {
          name: 'LI_PROC_DC',
          description: 'Método catalogação p/tps.sortimento do centro distribuição',
          type: 'CHAR(2)',
        },
        {
          name: 'ASSORTLIST',
          description: 'Catalogação de sortimento ativada',
          type: 'CHAR(1)',
        },
        {
          name: 'PROD_ATT_1',
          description: 'Código atributo de produto 1',
          type: 'CHAR(1)',
        },
        {
          name: 'PROD_ATT_2',
          description: 'Código atributo de produto 2',
          type: 'CHAR(1)',
        },
        {
          name: 'PROD_ATT_3',
          description: 'Código atributo de produto 3',
          type: 'CHAR(1)',
        },
        {
          name: 'PROD_ATT_4',
          description: 'Código atributo de produto 4',
          type: 'CHAR(1)',
        },
        {
          name: 'PROD_ATT_5',
          description: 'Código atributo de produto 5',
          type: 'CHAR(1)',
        },
        {
          name: 'PROD_ATT_6',
          description: 'Código atributo de produto 6',
          type: 'CHAR(1)',
        },
        {
          name: 'PROD_ATT_7',
          description: 'Código atributo de produto 7',
          type: 'CHAR(1)',
        },
        {
          name: 'PROD_ATT_8',
          description: 'Código atributo de produto 8',
          type: 'CHAR(1)',
        },
        {
          name: 'PROD_ATT_9',
          description: 'Código atributo de produto 9',
          type: 'CHAR(1)',
        },
        {
          name: 'PROD_ATT10',
          description: 'Código atributo de produto 10',
          type: 'CHAR(1)',
        },
        {
          name: 'LIST_ST_FR',
          description: 'Data a partir da qual se efetua a catalogação na filial',
          type: 'DATS(8)',
        },
        {
          name: 'LIST_ST_TO',
          description: 'Data até à qual é efetuada a catalogação na filial',
          type: 'DATS(8)',
        },
        {
          name: 'LIST_DC_FR',
          description: 'Data a partir da qual é efetuada a catalogação no CD',
          type: 'DATS(8)',
        },
        {
          name: 'LIST_DC_TO',
          description: 'Data até à qual será catalogado no dep.centr./cent.distr.',
          type: 'DATS(8)',
        },
        {
          name: 'SELL_ST_FR',
          description: 'Data a partir da qual se vende na filial',
          type: 'DATS(8)',
        },
        {
          name: 'SELL_ST_TO',
          description: 'Data até à qual se vende na filial',
          type: 'DATS(8)',
        },
        {
          name: 'SELL_DC_FR',
          description: 'Data a partir da qual se vende no centro de distribuição',
          type: 'DATS(8)',
        },
        {
          name: 'SELL_DC_TO',
          description: 'Dta.até a qual se vende no depart.central/centro distrib.',
          type: 'DATS(8)',
        },
        {
          name: 'MAX_DELY',
          description: 'Qtd.máxima.fornec.no processamento ordem de filial',
          type: 'QUAN(15)',
        },
        {
          name: 'UNIT_GROUP',
          description: 'Grupo unidade medida',
          type: 'CHAR(4)',
        },
        {
          name: 'ROUND_PROF',
          description: 'Perfil de arredondamento',
          type: 'CHAR(4)',
        },
        {
          name: 'PRICE_FIXING',
          description: 'Código para preço tabelado',
          type: 'CHAR(1)',
        },
        {
          name: 'VAR_SALES_UN',
          description: 'Unidade de venda variável não permitida',
          type: 'CHAR(1)',
        },
        {
          name: 'COMPETITION_CHAR',
          description: 'Caracterização da concorrência do material',
          type: 'CHAR(1)',
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
          name: 'PR_REF_MAT_EXTERNAL',
          description: 'Nº de material longo para o campo PR_REF_MAT',
          type: 'CHAR(40)',
        },
        {
          name: 'PR_REF_MAT_GUID',
          description: 'ID único externo para o campo PR_REF_MAT',
          type: 'CHAR(32)',
        },
        {
          name: 'PR_REF_MAT_VERSION',
          description: 'Nº da versão para o campo PR_REF_MAT',
          type: 'CHAR(10)',
        },
        {
          name: 'PRICE_BAND',
          description: 'Tipo de faixa de preço',
          type: 'CHAR(2)',
        },
      ],
      children: [],
    },
    {
      segment: 'E1BPE1MVKERTX',
      description:
        'Transf.dados varejo - barra de seleção para\n                                BAPIE1MVKERT',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'SALES_ORG',
          description: 'Organização de vendas',
          type: 'CHAR(4)',
        },
        {
          name: 'DISTR_CHAN',
          description: 'Canal de distribuição',
          type: 'CHAR(2)',
        },
        {
          name: 'DEL_FLAG',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MATL_STATS',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'REBATE_GRP',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'COMM_GROUP',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'CASH_DISC',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SAL_STATUS',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'VALID_FROM',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MIN_ORDER',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MIN_DELY',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MIN_MTO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'DELY_UNIT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'DELY_UOM',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'DELY_UOM_ISO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SALES_UNIT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SALES_UNIT_ISO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'ITEM_CAT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'DELYG_PLNT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PROD_HIER',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PR_REF_MAT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MAT_PR_GRP',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'ACCT_ASSGT',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MATL_GRP_1',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MATL_GRP_2',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MATL_GRP_3',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MATL_GRP_4',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MATL_GRP_5',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'ASSORT_LEV',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'ASSORTPRIO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'LI_PROC_ST',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'LI_PROC_DC',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'ASSORTLIST',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PROD_ATT_1',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PROD_ATT_2',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PROD_ATT_3',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PROD_ATT_4',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PROD_ATT_5',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PROD_ATT_6',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PROD_ATT_7',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PROD_ATT_8',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PROD_ATT_9',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PROD_ATT10',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'LIST_ST_FR',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'LIST_ST_TO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'LIST_DC_FR',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'LIST_DC_TO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SELL_ST_FR',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SELL_ST_TO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SELL_DC_FR',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SELL_DC_TO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'MAX_DELY',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'UNIT_GROUP',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'ROUND_PROF',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PRICE_FIXING',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'VAR_SALES_UN',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'COMPETITION_CHAR',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
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
          name: 'PR_REF_MAT_EXTERNAL',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PR_REF_MAT_GUID',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PR_REF_MAT_VERSION',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PRICE_BAND',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
      ],
      children: [],
    },
    {
      segment: 'E1BPE1MVKEEXTRT',
      description: 'Transf.dados Retail - dados de venda do cliente',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'SALES_ORG',
          description: 'Organização de vendas',
          type: 'CHAR(4)',
        },
        {
          name: 'DISTR_CHAN',
          description: 'Canal de distribuição',
          type: 'CHAR(2)',
        },
        {
          name: 'FIELD1',
          description: 'Container para dados caractere do comprimento 223',
          type: 'CHAR(223)',
        },
        {
          name: 'FIELD2',
          description: 'Container para dados caractere do comprimento 250',
          type: 'CHAR(250)',
        },
        {
          name: 'FIELD3',
          description: 'Container para dados caractere do comprimento 250',
          type: 'CHAR(250)',
        },
        {
          name: 'FIELD4',
          description: 'Container para dados caractere do comprimento 250',
          type: 'CHAR(250)',
        },
      ],
      children: [
        {
          segment: 'E1BPE1MVKEEXTRT1',
          description: 'Transf.dados Retail - dados de venda do cliente',
          max: 1,
          fields: [
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
          ],
          children: [],
        },
      ],
    },
    {
      segment: 'E1BPE1MVKEEXTRTX',
      description:
        'Transf.dados Retail - barra de seleção para\n                                BAPIE1MVKEEXTRT',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'SALES_ORG',
          description: 'Organização de vendas',
          type: 'CHAR(4)',
        },
        {
          name: 'DISTR_CHAN',
          description: 'Canal de distribuição',
          type: 'CHAR(2)',
        },
        {
          name: 'FIELD1',
          description: 'Container para dados caractere do comprimento 223',
          type: 'CHAR(223)',
        },
        {
          name: 'FIELD2',
          description: 'Container para dados caractere do comprimento 250',
          type: 'CHAR(250)',
        },
        {
          name: 'FIELD3',
          description: 'Container para dados caractere do comprimento 250',
          type: 'CHAR(250)',
        },
        {
          name: 'FIELD4',
          description: 'Container para dados caractere do comprimento 250',
          type: 'CHAR(250)',
        },
      ],
      children: [
        {
          segment: 'E1BPE1MVKEEXTRTX1',
          description:
            'Transf.dados Retail - barra de seleção para\n                                BAPIE1MVKEEXTRT',
          max: 1,
          fields: [
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
          ],
          children: [],
        },
      ],
    },
    {
      segment: 'E1BPE1WLK2RT',
      description: 'Transf.dados varejo - dados POS',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'SALES_ORG',
          description: 'Org.vendas em canal de vendas Retail',
          type: 'CHAR(4)',
        },
        {
          name: 'DISTR_CHAN',
          description: 'Canal de distribuição em canal de vendas Retail',
          type: 'CHAR(2)',
        },
        {
          name: 'PLANT',
          description: 'Centro de comercialização',
          type: 'CHAR(4)',
        },
        {
          name: 'NO_REP_KEY',
          description: 'Sem tecla de repetição',
          type: 'CHAR(1)',
        },
        {
          name: 'PRICE_REQD',
          description: 'Preço necessário',
          type: 'CHAR(1)',
        },
        {
          name: 'SELL_ST_FR',
          description: 'Data a partir da qual se vende na filial',
          type: 'DATS(8)',
        },
        {
          name: 'SELL_ST_TO',
          description: 'Data até à qual se vende na filial',
          type: 'DATS(8)',
        },
        {
          name: 'SAL_STATUS',
          description: 'Status do material específica da linha de vendas',
          type: 'CHAR(2)',
        },
        {
          name: 'VALID_FROM',
          description: 'Data a partir da qual vale status mat.específ.linha vendas',
          type: 'DATS(8)',
        },
        {
          name: 'DISC_ALLWD',
          description: 'Descontos admitidos',
          type: 'CHAR(1)',
        },
        {
          name: 'SCALES_GRP',
          description: 'Grupo de balanças',
          type: 'CHAR(4)',
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
      ],
      children: [],
    },
    {
      segment: 'E1BPE1WLK2RTX',
      description:
        'Transf.dados varejo - barra de seleção para\n                                BAPIE1WLK2RT',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'SALES_ORG',
          description: 'Org.vendas em canal de vendas Retail',
          type: 'CHAR(4)',
        },
        {
          name: 'DISTR_CHAN',
          description: 'Canal de distribuição em canal de vendas Retail',
          type: 'CHAR(2)',
        },
        {
          name: 'PLANT',
          description: 'Centro de comercialização',
          type: 'CHAR(4)',
        },
        {
          name: 'NO_REP_KEY',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'PRICE_REQD',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SELL_ST_FR',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SELL_ST_TO',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SAL_STATUS',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'VALID_FROM',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'DISC_ALLWD',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SCALES_GRP',
          description: 'Info modificação p/respectivo campo dados utilização',
          type: 'CHAR(1)',
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
      ],
      children: [],
    },
    {
      segment: 'E1BPE1WLK2EXTRT',
      description: 'Transf.dados Retail - dados POS do cliente',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'SALES_ORG',
          description: 'Org.vendas em canal de vendas Retail',
          type: 'CHAR(4)',
        },
        {
          name: 'DISTR_CHAN',
          description: 'Canal de distribuição em canal de vendas Retail',
          type: 'CHAR(2)',
        },
        {
          name: 'PLANT',
          description: 'Centro de comercialização',
          type: 'CHAR(4)',
        },
        {
          name: 'FIELD1',
          description: 'Container para dados caractere do comprimento 219',
          type: 'CHAR(219)',
        },
        {
          name: 'FIELD2',
          description: 'Container para dados caractere do comprimento 250',
          type: 'CHAR(250)',
        },
        {
          name: 'FIELD3',
          description: 'Container para dados caractere do comprimento 250',
          type: 'CHAR(250)',
        },
        {
          name: 'FIELD4',
          description: 'Container para dados caractere do comprimento 250',
          type: 'CHAR(250)',
        },
      ],
      children: [
        {
          segment: 'E1BPE1WLK2EXTRT1',
          description: 'Transf.dados Retail - dados POS do cliente',
          max: 1,
          fields: [
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
          ],
          children: [],
        },
      ],
    },
    {
      segment: 'E1BPE1WLK2EXTRTX',
      description:
        'Transf.dados Retail - barra de seleção para\n                                BAPIE1WLK2EXTRT',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'SALES_ORG',
          description: 'Org.vendas em canal de vendas Retail',
          type: 'CHAR(4)',
        },
        {
          name: 'DISTR_CHAN',
          description: 'Canal de distribuição em canal de vendas Retail',
          type: 'CHAR(2)',
        },
        {
          name: 'PLANT',
          description: 'Centro de comercialização',
          type: 'CHAR(4)',
        },
        {
          name: 'FIELD1',
          description: 'Container para dados caractere do comprimento 219',
          type: 'CHAR(219)',
        },
        {
          name: 'FIELD2',
          description: 'Container para dados caractere do comprimento 250',
          type: 'CHAR(250)',
        },
        {
          name: 'FIELD3',
          description: 'Container para dados caractere do comprimento 250',
          type: 'CHAR(250)',
        },
        {
          name: 'FIELD4',
          description: 'Container para dados caractere do comprimento 250',
          type: 'CHAR(250)',
        },
      ],
      children: [
        {
          segment: 'E1BPE1WLK2EXTRTX1',
          description:
            'Transf.dados Retail - barra de seleção para\n                                BAPIE1WLK2EXTRT',
          max: 1,
          fields: [
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
          ],
          children: [],
        },
      ],
    },
    {
      segment: 'E1BPE1MLTXRT',
      description: 'Transf.dados varejo - textos descritivos',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'APPLOBJECT',
          description: 'Textos: objeto de aplicação',
          type: 'CHAR(10)',
        },
        {
          name: 'TEXT_NAME',
          description: 'Nome',
          type: 'CHAR(70)',
        },
        {
          name: 'TEXT_ID',
          description: 'ID de texto',
          type: 'CHAR(4)',
        },
        {
          name: 'LANGU',
          description: 'Código de idioma',
          type: 'LANG(1)',
        },
        {
          name: 'LANGU_ISO',
          description: 'Código de idiomas SAP de 2 dígitos',
          type: 'CHAR(2)',
        },
        {
          name: 'FORMAT_COL',
          description: 'Coluna de formato',
          type: 'CHAR(2)',
        },
        {
          name: 'TEXT_LINE',
          description: 'Linha de texto',
          type: 'CHAR(132)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
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
      ],
      children: [],
    },
    {
      segment: 'E1BPE1WRKKEY',
      description:
        'Transf.dados varejo - lista dos centros\n                                ident.atualizados',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'PLANT',
          description: 'Centro',
          type: 'CHAR(4)',
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
      ],
      children: [],
    },
    {
      segment: 'E1BPE1LGOKEY',
      description:
        'Transf.dados varejo - lista dos depósitos\n                                ident.atualizados',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'PLANT',
          description: 'Centro',
          type: 'CHAR(4)',
        },
        {
          name: 'STGE_LOC',
          description: 'Depósito',
          type: 'CHAR(4)',
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
      ],
      children: [],
    },
    {
      segment: 'E1BPE1VTLKEY',
      description:
        'Transf.dados varejo - lista canais de vendas\n                                ident.atualiz.',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'SALES_ORG',
          description: 'Organização de vendas',
          type: 'CHAR(4)',
        },
        {
          name: 'DISTR_CHAN',
          description: 'Canal de distribuição',
          type: 'CHAR(2)',
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
      ],
      children: [],
    },
    {
      segment: 'E1BPE1LGNKEY',
      description:
        'Transf.dados varejo - lista dos sistemas\n                                dep.ident.atualiz.',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'WHSE_NO',
          description: 'Nºdepósito/complexo de depósito',
          type: 'CHAR(3)',
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
      ],
      children: [],
    },
    {
      segment: 'E1BPE1LGTKEY',
      description:
        'Transf.dados varejo - lista dos tipos depósito\n                                ident.atual.',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'WHSE_NO',
          description: 'Nºdepósito/complexo de depósito',
          type: 'CHAR(3)',
        },
        {
          name: 'STGE_TYPE',
          description: 'Tipo de depósito',
          type: 'CHAR(3)',
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
      ],
      children: [],
    },
    {
      segment: 'E1BPE1BWAKEY',
      description:
        'Transf.dados varejo - lista tipos de avaliação\n                                ident.atual.',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'VAL_AREA',
          description: 'Área de avaliação',
          type: 'CHAR(4)',
        },
        {
          name: 'VAL_TYPE',
          description: 'Tipo de avaliação',
          type: 'CHAR(10)',
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
      ],
      children: [],
    },
    {
      segment: 'E1BPTEXTLCOMP',
      description: '',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'TEXTILE_COMPONENT_POSITION',
          description: 'Posição da fibra de têxtil',
          type: 'NUMC(2)',
        },
        {
          name: 'TEXTILE_COMPONENT_CODE',
          description: 'Código de componente têxtil',
          type: 'CHAR(5)',
        },
        {
          name: 'ANIMAL_ORIGIN_FLAG',
          description: 'Código: contém partes não têxteis de origem animal',
          type: 'CHAR(1)',
        },
      ],
      children: [],
    },
    {
      segment: 'E1BPTEXTLFIBR',
      description: '',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'TEXTILE_COMPONENT_POSITION',
          description: 'Posição da fibra de têxtil',
          type: 'NUMC(2)',
        },
        {
          name: 'TEXTILE_FIBER_POSITION',
          description: 'Posição da fibra de têxtil',
          type: 'NUMC(2)',
        },
        {
          name: 'FIBER_CODE',
          description: 'Código fibras para tecidos ( por exemplo, algodão, seda,...)',
          type: 'CHAR(3)',
        },
        {
          name: 'FIBER_CODE_ISO',
          description: 'Código ISO para denominação de fibra de têxteis',
          type: 'CHAR(8)',
        },
        {
          name: 'FIBER_PART',
          description: 'Quota de fibras em porcentagem',
          type: 'NUMC(3)',
        },
        {
          name: 'SCIENTIFIC_NAME_CODE',
          description: 'Código para nome científico',
          type: 'CHAR(3)',
        },
        {
          name: 'PRINT_FLAG',
          description: 'Imprimir',
          type: 'CHAR(1)',
        },
        {
          name: 'PSM_CODE',
          description: 'Código para administração de espécies protegidas',
          type: 'CHAR(2)',
        },
        {
          name: 'DOKNR',
          description: 'Nº documento',
          type: 'CHAR(25)',
        },
        {
          name: 'DOKAR',
          description: 'Tipo de documento',
          type: 'CHAR(3)',
        },
        {
          name: 'DOKTL',
          description: 'Documento parcial',
          type: 'CHAR(3)',
        },
        {
          name: 'DOKVR',
          description: 'Versão do documento',
          type: 'CHAR(2)',
        },
        {
          name: 'COUNTRY',
          description: 'Chave do país',
          type: 'CHAR(3)',
        },
        {
          name: 'COUNTRY_ISO',
          description: 'Código do país em código ISO',
          type: 'CHAR(2)',
        },
      ],
      children: [],
    },
    {
      segment: 'E1BPSGTMVKE',
      description: '',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'SALESORG',
          description: 'Organização de vendas',
          type: 'CHAR(4)',
        },
        {
          name: 'DISTR_CHAN',
          description: 'Canal de distribuição',
          type: 'CHAR(2)',
        },
        {
          name: 'REQ_SEGMENT',
          description: 'Segmento de necessidade',
          type: 'CHAR(16)',
        },
        {
          name: 'SAL_STATUS',
          description: 'Status do material específica da linha de vendas',
          type: 'CHAR(2)',
        },
        {
          name: 'VALID_FROM',
          description: 'Data a partir da qual vale status mat.específ.linha vendas',
          type: 'DATS(8)',
        },
        {
          name: 'CONF_MATL',
          description: 'Material configurável geral',
          type: 'CHAR(18)',
        },
      ],
      children: [],
    },
    {
      segment: 'E1BPSGTMARM',
      description: '',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'ALT_UNIT',
          description: 'Unidade medida alternativa p/unid.gestão estoque',
          type: 'UNIT(3)',
        },
        {
          name: 'ALT_UNIT_ISO',
          description: 'UM alternativa para a unidade gestão de estoque em code ISO',
          type: 'CHAR(3)',
        },
        {
          name: 'STOCK_SEGMENT',
          description: 'Segmento de estoque',
          type: 'CHAR(16)',
        },
        {
          name: 'CONF_MATL',
          description: 'Material configurável geral',
          type: 'CHAR(18)',
        },
        {
          name: 'VOLUME',
          description: 'Volume',
          type: 'QUAN(15)',
        },
        {
          name: 'GROSS_WT',
          description: 'Peso bruto',
          type: 'QUAN(15)',
        },
        {
          name: 'NET_WEIGHT',
          description: 'Peso líquido',
          type: 'QUAN(15)',
        },
      ],
      children: [],
    },
    {
      segment: 'E1BPSGTMADKA',
      description: '',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'PLANT',
          description: 'Centro',
          type: 'CHAR(4)',
        },
        {
          name: 'STOCK_SEGMENT',
          description: 'Segmento de estoque',
          type: 'CHAR(16)',
        },
        {
          name: 'PREFERENCE_SEG_VALUE',
          description: 'Valor de segmento de preferência',
          type: 'CHAR(1)',
        },
        {
          name: 'VALUATION_TYPE',
          description: 'Tipo de avaliação',
          type: 'CHAR(10)',
        },
      ],
      children: [],
    },
    {
      segment: 'E1BPFSHSEASONS',
      description: '',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'REQ_SEGMENT',
          description: 'Segmento de necessidade',
          type: 'CHAR(16)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'SEASON_YR',
          description: 'Ano de época',
          type: 'CHAR(4)',
        },
        {
          name: 'SEASON',
          description: 'Época',
          type: 'CHAR(4)',
        },
        {
          name: 'COLLECTION',
          description: 'Coleção de moda',
          type: 'CHAR(2)',
        },
        {
          name: 'THEME',
          description: 'Tema de moda',
          type: 'CHAR(4)',
        },
        {
          name: 'SEASON1',
          description: 'Tipo de época 1',
          type: 'CHAR(1)',
        },
        {
          name: 'SEASON2',
          description: 'Tipo de época 2',
          type: 'CHAR(1)',
        },
        {
          name: 'SEASON3',
          description: 'Tipo de época 3',
          type: 'CHAR(1)',
        },
        {
          name: 'ARTICLE_SEASON_DESC',
          description: 'Descrição da época do artigo',
          type: 'CHAR(80)',
        },
        {
          name: 'SEASON_INDICATOR',
          description: 'Código de época',
          type: 'CHAR(1)',
        },
        {
          name: 'CONF_MATL',
          description: 'Material configurável geral',
          type: 'CHAR(18)',
        },
      ],
      children: [],
    },
    {
      segment: 'E1BPSGTMLGN',
      description: '',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'WHSENUMBER',
          description: 'Nºdepósito/complexo de depósito',
          type: 'CHAR(3)',
        },
        {
          name: 'STOCK_SEGMENT',
          description: 'Segmento de estoque',
          type: 'CHAR(16)',
        },
        {
          name: 'STGESECTOR',
          description: 'Código da área de armazenamento',
          type: 'CHAR(3)',
        },
        {
          name: 'PLACEMENT',
          description: 'Código da categoria de depósito para entrada em depósito',
          type: 'CHAR(3)',
        },
        {
          name: 'WITHDRAWAL',
          description: 'Código de ctg.de depósito para saída de depósito',
          type: 'CHAR(3)',
        },
        {
          name: 'ADD_TO_STK',
          description: 'Código: armazenamento adicional permitido',
          type: 'CHAR(1)',
        },
        {
          name: 'BLOCK_STGE',
          description: 'Código depósito em bloco',
          type: 'CHAR(2)',
        },
        {
          name: 'MSG_TO_IM',
          description: 'Código: mensagem para a administração de estoques',
          type: 'CHAR(1)',
        },
        {
          name: 'SPEC_MVMT',
          description: 'Código especial para movimento na administração de depósitos',
          type: 'CHAR(1)',
        },
        {
          name: 'CAPY_USAGE',
          description: 'Consumo de capacidade',
          type: 'DEC(13)',
        },
        {
          name: 'PROCURE_UN',
          description: 'Unidade de medida de referência para consumo capacidade',
          type: 'UNIT(3)',
        },
        {
          name: 'PROCURE_UN_ISO',
          description: 'UM de referência para consumo de capacidade em code ISO',
          type: 'CHAR(3)',
        },
        {
          name: '2STEP_PICK',
          description: 'Relevância do material para picking em 2 etapas',
          type: 'CHAR(1)',
        },
      ],
      children: [],
    },
    {
      segment: 'E1BPSGTMLGT',
      description: '',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'WHSENUMBER',
          description: 'Nºdepósito/complexo de depósito',
          type: 'CHAR(3)',
        },
        {
          name: 'STGE_TYPE',
          description: 'Tipo de depósito',
          type: 'CHAR(3)',
        },
        {
          name: 'STOCK_SEGMENT',
          description: 'Segmento de estoque',
          type: 'CHAR(16)',
        },
        {
          name: 'STGE_BIN',
          description: 'Posição no depósito',
          type: 'CHAR(10)',
        },
        {
          name: 'MAX_SB_QTY',
          description: 'Qtd.máxima posiç.no dep.',
          type: 'QUAN(15)',
        },
        {
          name: 'MIN_SB_QTY',
          description: 'Qtd.mínima posiç.no dep.',
          type: 'QUAN(15)',
        },
        {
          name: 'CTRL_QTY',
          description: 'Quantidade de manejo',
          type: 'QUAN(15)',
        },
        {
          name: 'REPLEN_QTY',
          description: 'Quantidade de reabastecimento',
          type: 'QUAN(15)',
        },
        {
          name: 'PICK_AREA',
          description: 'Área de picking',
          type: 'CHAR(3)',
        },
        {
          name: 'ROUND_UNIT',
          description: 'Qtd.arredond.',
          type: 'QUAN(15)',
        },
      ],
      children: [],
    },
    {
      segment: 'E1BPSGTMRPGN',
      description: '',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'PLANT',
          description: 'Centro',
          type: 'CHAR(4)',
        },
        {
          name: 'STOCK_SEGMENT',
          description: 'Segmento de estoque',
          type: 'CHAR(16)',
        },
        {
          name: 'INHSEPRODT',
          description: 'Tempo de produção interna',
          type: 'DEC(4)',
        },
        {
          name: 'PUR_GROUP',
          description: 'Grupo de compradores',
          type: 'CHAR(3)',
        },
        {
          name: 'PLND_DELRY',
          description: 'Prazo de entrega previsto em dias',
          type: 'DEC(4)',
        },
        {
          name: 'SAFTY_T_ID',
          description: 'Código de margem de segurança (com/sem margem de segurança)',
          type: 'CHAR(1)',
        },
        {
          name: 'SAFETYTIME',
          description: 'Período de segurança (em dias de trabalho)',
          type: 'NUMC(2)',
        },
        {
          name: 'REPLENTIME',
          description: 'Tempo total de reposição (dias de trabalho)',
          type: 'DEC(4)',
        },
        {
          name: 'ATP_MRP_STATUS',
          description: 'Status ATP/MRP para material e segmento',
          type: 'CHAR(2)',
        },
        {
          name: 'CONF_MATL',
          description: 'Material configurável geral',
          type: 'CHAR(18)',
        },
        {
          name: 'SEGMENTATION_VALIDFROM',
          description: 'Data a partir da qual status material espec.centro é válida',
          type: 'DATS(8)',
        },
        {
          name: 'MATERIAL_LONG',
          description: 'Nº material (40 caracteres, necessário por razões técnicas)',
          type: 'CHAR(40)',
        },
        {
          name: 'CONF_MATL_LONG',
          description: 'Mat.configurável válido p/vários cens.(necessários 40 cars.)',
          type: 'CHAR(40)',
        },
      ],
      children: [],
    },
    {
      segment: 'E1BPSGTMRP',
      description: '',
      max: 999999999,
      fields: [
        {
          name: 'FUNCTION',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATERIAL',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'PLANT',
          description: 'Centro',
          type: 'CHAR(4)',
        },
        {
          name: 'STOCK_SEGMENT',
          description: 'Segmento de estoque',
          type: 'CHAR(16)',
        },
        {
          name: 'SAFETY_STK',
          description: 'Estoque de segurança',
          type: 'QUAN(15)',
        },
        {
          name: 'MINLOTSIZE',
          description: 'Tamanho mínimo do lote',
          type: 'QUAN(15)',
        },
        {
          name: 'ROUND_VAL',
          description: 'Valor de arredondamento da quantidade pedida',
          type: 'QUAN(15)',
        },
        {
          name: 'CONF_MATL',
          description: 'Material configurável geral',
          type: 'CHAR(18)',
        },
        {
          name: 'MATERIAL_LONG',
          description: 'Nº material (40 caracteres, necessário por razões técnicas)',
          type: 'CHAR(40)',
        },
        {
          name: 'CONF_MATL_LONG',
          description: 'Mat.configurável válido p/vários cens.(necessários 40 cars.)',
          type: 'CHAR(40)',
        },
      ],
      children: [],
    },
  ],
};
