/**
 * Dados do IDoc MATMAS - Mestre de Materiais
 * 27 segmentos, 868 campos
 * Gerado automaticamente a partir do HTML original
 */
import type { IdocData } from '../types';

export const MATMAS_DATA: IdocData = {
  title: 'MATMAS - Mestre de Materiais',
  description: 'IDoc para distribuição de dados mestres',
  tree: [
    {
      segment: 'E1MARAM',
      description: 'Master material dados gerais (MARA)',
      max: 9999,
      fields: [
        {
          name: 'MSGFN',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'MATNR',
          description: 'Nº do material',
          type: 'CHAR(18)',
        },
        {
          name: 'ERSDA',
          description: 'Data de criação',
          type: 'DATS(8)',
        },
        {
          name: 'ERNAM',
          description: 'Nome do responsável que adicionou o objeto',
          type: 'CHAR(12)',
        },
        {
          name: 'LAEDA',
          description: 'Data da última modificação',
          type: 'DATS(8)',
        },
        {
          name: 'AENAM',
          description: 'Nome do responsável pela modificação do objeto',
          type: 'CHAR(12)',
        },
        {
          name: 'PSTAT',
          description: 'Status de atualização',
          type: 'CHAR(15)',
        },
        {
          name: 'LVORM',
          description: 'Marcar mat.para eliminação a nível de mandante',
          type: 'CHAR(1)',
        },
        {
          name: 'MTART',
          description: 'Tipo de material',
          type: 'CHAR(4)',
        },
        {
          name: 'MBRSH',
          description: 'Setor industrial',
          type: 'CHAR(1)',
        },
        {
          name: 'MATKL',
          description: 'Grupo de mercadorias',
          type: 'CHAR(9)',
        },
        {
          name: 'BISMT',
          description: 'Nº material antigo',
          type: 'CHAR(18)',
        },
        {
          name: 'MEINS',
          description: 'Unidade de medida básica',
          type: 'UNIT(3)',
        },
        {
          name: 'BSTME',
          description: 'Unidade de medida do pedido',
          type: 'UNIT(3)',
        },
        {
          name: 'ZEINR',
          description: 'Nº documento (sem sistema de administração de documentos)',
          type: 'CHAR(22)',
        },
        {
          name: 'ZEIAR',
          description: 'Tipo de documento (s/sistema administração documentos)',
          type: 'CHAR(3)',
        },
        {
          name: 'ZEIVR',
          description: 'Versão do documento (sem sistema administração documentos)',
          type: 'CHAR(2)',
        },
        {
          name: 'ZEIFO',
          description: 'Formato DIN do documento (s/sistema administração documents)',
          type: 'CHAR(4)',
        },
        {
          name: 'AESZN',
          description: 'Nº modificação do documento (sem sistema de admin.docs.)',
          type: 'CHAR(6)',
        },
        {
          name: 'BLATT',
          description: 'Nº folha do documento (sem sistema de admin. de documentos)',
          type: 'CHAR(3)',
        },
        {
          name: 'BLANZ',
          description: 'Nº de folhas (sem sistema de admin. de documentos)',
          type: 'NUMC(3)',
        },
        {
          name: 'FERTH',
          description: 'Instrução de produção/de controle de qualidade',
          type: 'CHAR(18)',
        },
        {
          name: 'FORMT',
          description: 'Formato DIN da instrução de produção',
          type: 'CHAR(4)',
        },
        {
          name: 'GROES',
          description: 'Tamanho/dimensão',
          type: 'CHAR(32)',
        },
        {
          name: 'WRKST',
          description: 'Matéria-base (componente de um material) - obsoleto',
          type: 'CHAR(14)',
        },
        {
          name: 'NORMT',
          description: 'Denominação da norma (p.ex. DIN)',
          type: 'CHAR(18)',
        },
        {
          name: 'LABOR',
          description: 'Laboratório/escritório de engenharia',
          type: 'CHAR(3)',
        },
        {
          name: 'EKWSL',
          description: 'Chave de valores de Compras',
          type: 'CHAR(4)',
        },
        {
          name: 'BRGEW',
          description: 'Peso bruto',
          type: 'QUAN(13)',
        },
        {
          name: 'NTGEW',
          description: 'Peso líquido',
          type: 'QUAN(13)',
        },
        {
          name: 'GEWEI',
          description: 'Unidade de peso',
          type: 'UNIT(3)',
        },
        {
          name: 'VOLUM',
          description: 'Volume',
          type: 'QUAN(13)',
        },
        {
          name: 'VOLEH',
          description: 'Unidade de volume',
          type: 'UNIT(3)',
        },
        {
          name: 'BEHVO',
          description: 'Instrução de recipiente',
          type: 'CHAR(2)',
        },
        {
          name: 'RAUBE',
          description: 'Condições de estocagem',
          type: 'CHAR(2)',
        },
        {
          name: 'TEMPB',
          description: 'Código para a condição de temperatura',
          type: 'CHAR(2)',
        },
        {
          name: 'TRAGR',
          description: 'Grupo de transporte',
          type: 'CHAR(4)',
        },
        {
          name: 'STOFF',
          description: 'Nº substância perigosa',
          type: 'CHAR(18)',
        },
        {
          name: 'SPART',
          description: 'Setor de atividade',
          type: 'CHAR(2)',
        },
        {
          name: 'KUNNR',
          description: 'Concorrente',
          type: 'CHAR(10)',
        },
        {
          name: 'WESCH',
          description: 'Qtd.: determinação do número notas acompanhamento a imprimir',
          type: 'QUAN(13)',
        },
        {
          name: 'BWVOR',
          description: 'Norma de suprimento',
          type: 'CHAR(1)',
        },
        {
          name: 'BWSCL',
          description: 'Fonte de suprimento',
          type: 'CHAR(1)',
        },
        {
          name: 'SAISO',
          description: 'Ctg.sazonal',
          type: 'CHAR(4)',
        },
        {
          name: 'ETIAR',
          description: 'Tipo de etiquetagem',
          type: 'CHAR(2)',
        },
        {
          name: 'ETIFO',
          description: 'Forma da etiqueta',
          type: 'CHAR(2)',
        },
        {
          name: 'EAN11',
          description: 'Nº europeu do artigo (EAN)',
          type: 'CHAR(18)',
        },
        {
          name: 'NUMTP',
          description: 'Ctg.de número do nº europeu do artigo',
          type: 'CHAR(2)',
        },
        {
          name: 'LAENG',
          description: 'Comprimento',
          type: 'QUAN(13)',
        },
        {
          name: 'BREIT',
          description: 'Largura',
          type: 'QUAN(13)',
        },
        {
          name: 'HOEHE',
          description: 'Altura',
          type: 'QUAN(13)',
        },
        {
          name: 'MEABM',
          description: 'Unidade para comprimento/largura/altura',
          type: 'UNIT(3)',
        },
        {
          name: 'PRDHA',
          description: 'Hierarquia de produtos',
          type: 'CHAR(18)',
        },
        {
          name: 'CADKZ',
          description: 'Código CAD',
          type: 'CHAR(1)',
        },
        {
          name: 'ERGEW',
          description: 'Peso admissível da embalagem',
          type: 'QUAN(13)',
        },
        {
          name: 'ERGEI',
          description: 'Unidade de peso',
          type: 'UNIT(3)',
        },
        {
          name: 'ERVOL',
          description: 'Volume de embalagem admissível',
          type: 'QUAN(13)',
        },
        {
          name: 'ERVOE',
          description: 'Unidade de volume',
          type: 'UNIT(3)',
        },
        {
          name: 'GEWTO',
          description: 'Tolerância excesso de peso da unidade comercial',
          type: 'DEC(3)',
        },
        {
          name: 'VOLTO',
          description: 'Tolerância excesso de volume da unidade comercial',
          type: 'DEC(3)',
        },
        {
          name: 'VABME',
          description: 'UM pedido variável ativa',
          type: 'CHAR(1)',
        },
        {
          name: 'KZKFG',
          description: 'Material configurável',
          type: 'CHAR(1)',
        },
        {
          name: 'XCHPF',
          description: 'Código para administração em lote obrigatória',
          type: 'CHAR(1)',
        },
        {
          name: 'VHART',
          description: 'Tipo de material de embalagem',
          type: 'CHAR(4)',
        },
        {
          name: 'FUELG',
          description: 'Nível de preenchimento (por volume)',
          type: 'DEC(3)',
        },
        {
          name: 'STFAK',
          description: 'Fator de empilhamento',
          type: 'INT2(5)',
        },
        {
          name: 'MAGRV',
          description: 'Grupo de materiais material de embalagem',
          type: 'CHAR(4)',
        },
        {
          name: 'BEGRU',
          description: 'Grupo de autorizações',
          type: 'CHAR(4)',
        },
        {
          name: 'QMPUR',
          description: 'QM no suprimento está ativo',
          type: 'CHAR(1)',
        },
        {
          name: 'RBNRM',
          description: 'Perfil do catálogo',
          type: 'CHAR(9)',
        },
        {
          name: 'MHDRZ',
          description: 'Tempo de validade restante',
          type: 'DEC(4)',
        },
        {
          name: 'MHDHB',
          description: 'Prazo de validade',
          type: 'DEC(4)',
        },
        {
          name: 'MHDLP',
          description: 'Percentagem para armazenagem',
          type: 'DEC(3)',
        },
        {
          name: 'VPSTA',
          description: 'Status de atualização do material completo',
          type: 'CHAR(15)',
        },
        {
          name: 'EXTWG',
          description: 'Grupo de mercadorias externo',
          type: 'CHAR(18)',
        },
        {
          name: 'MSTAE',
          description: 'Status material p/todos os centros',
          type: 'CHAR(2)',
        },
        {
          name: 'MSTAV',
          description: 'Status de material para todos os canais de vendas',
          type: 'CHAR(2)',
        },
        {
          name: 'MSTDE',
          description: 'Data a partir da qual stat.mat.p/todos os centros é válido',
          type: 'DATS(8)',
        },
        {
          name: 'MSTDV',
          description: 'Data a partir da qual o status mat.p/todos can.dist.é válido',
          type: 'DATS(8)',
        },
        {
          name: 'KZUMW',
          description: 'Código: relevância para o meio ambiente',
          type: 'CHAR(1)',
        },
        {
          name: 'KOSCH',
          description: 'Alocação de produtos: esquema de alocação de produtos',
          type: 'CHAR(18)',
        },
        {
          name: 'NRFHG',
          description: 'Material com direito a bonificação em espécie',
          type: 'CHAR(1)',
        },
        {
          name: 'MFRPN',
          description: 'Nº peça de fabricante',
          type: 'CHAR(40)',
        },
        {
          name: 'MFRNR',
          description: 'Nº de um fabricante',
          type: 'CHAR(10)',
        },
        {
          name: 'BMATN',
          description: 'Até nº material',
          type: 'CHAR(18)',
        },
        {
          name: 'MPROF',
          description: 'Perfil de peças de fabricante',
          type: 'CHAR(4)',
        },
        {
          name: 'PROFL',
          description: 'Perfil para código de mercadoria perigosa',
          type: 'CHAR(3)',
        },
        {
          name: 'IHIVI',
          description: 'Código: de alta viscosidade',
          type: 'CHAR(1)',
        },
        {
          name: 'ILOOS',
          description: 'Código: a granel / líquido',
          type: 'CHAR(1)',
        },
        {
          name: 'KZGVH',
          description: 'O material de embalagem é uma embalagem fechada',
          type: 'CHAR(1)',
        },
        {
          name: 'XGCHP',
          description: 'Código: é necessário protocolo de lotes autorizado',
          type: 'CHAR(1)',
        },
        {
          name: 'COMPL',
          description: 'Nível de conclusão de material',
          type: 'NUMC(2)',
        },
        {
          name: 'KZEFF',
          description: 'Avaliar parâmetros de validade / substituir nºs modificação',
          type: 'CHAR(1)',
        },
        {
          name: 'RDMHD',
          description: 'Regra de arredondamento para cálculo DV',
          type: 'CHAR(1)',
        },
        {
          name: 'IPRKZ',
          description: 'Código de período para DV',
          type: 'CHAR(1)',
        },
        {
          name: 'PRZUS',
          description: 'Código: composição do produto impressa na embalagem',
          type: 'CHAR(1)',
        },
        {
          name: 'MTPOS_MARA',
          description: 'Grupo de categorias de item geral',
          type: 'CHAR(4)',
        },
        {
          name: 'GEWTO_NEW',
          description: 'Tolerância excesso de peso da unidade comercial',
          type: 'DEC(3)',
        },
        {
          name: 'VOLTO_NEW',
          description: 'Tolerância excesso de volume da unidade comercial',
          type: 'DEC(3)',
        },
        {
          name: 'WRKST_NEW',
          description: 'Material básico',
          type: 'CHAR(48)',
        },
        {
          name: 'AENNR',
          description: 'Nº modificação',
          type: 'CHAR(12)',
        },
        {
          name: 'MATFI',
          description: 'Material foi fixado',
          type: 'CHAR(1)',
        },
        {
          name: 'CMREL',
          description: 'Relevante para administração de configuração',
          type: 'CHAR(1)',
        },
        {
          name: 'SATNR',
          description: 'Material configurável geral',
          type: 'CHAR(18)',
        },
        {
          name: 'SLED_BBD',
          description: 'Data de vencimento / data de expiração',
          type: 'CHAR(1)',
        },
        {
          name: 'GTIN_VARIANT',
          description: 'Variante para Global Trade Item Number',
          type: 'CHAR(2)',
        },
        {
          name: 'GENNR',
          description: 'Nº do material genérico em materiais pré-embalados',
          type: 'CHAR(18)',
        },
        {
          name: 'SERLV',
          description: 'Nível de univocidade para nº série',
          type: 'CHAR(1)',
        },
        {
          name: 'RMATP',
          description: 'Material ref.p/materiais a serem embalados da mesma maneira',
          type: 'CHAR(18)',
        },
        {
          name: 'GDS_RELEVANT',
          description: 'Código: relavante p/sincronização de dados globais',
          type: 'CHAR(1)',
        },
        {
          name: 'MCOND',
          description: 'Administração de status do material',
          type: 'CHAR(1)',
        },
        {
          name: 'RETDELC',
          description: 'Código de reembolso',
          type: 'CHAR(1)',
        },
        {
          name: 'LOGLEV_RETO',
          description: 'Reembolso até nível logístico',
          type: 'CHAR(1)',
        },
        {
          name: 'NSNID',
          description: 'Nº identificação NATO',
          type: 'CHAR(9)',
        },
        {
          name: 'WEORA',
          description: 'Retirada junto ao fornecedor',
          type: 'CHAR(1)',
        },
        {
          name: '/CWM/TOLGR',
          description: 'Grupo de tolerância para Catch Weight Management',
          type: 'CHAR(9)',
        },
        {
          name: '/CWM/TARA',
          description: 'Campo de seleção',
          type: 'CHAR(1)',
        },
        {
          name: '/CWM/TARUM',
          description: 'Unidade de medida básica',
          type: 'UNIT(3)',
        },
        {
          name: 'PACKCODE',
          description: 'Código de embalagem',
          type: 'CHAR(10)',
        },
        {
          name: 'DG_PACK_STATUS',
          description: 'Status da embalagem de produtos perigosos',
          type: 'CHAR(10)',
        },
        {
          name: 'ANP',
          description: 'Código ANP',
          type: 'NUMC(9)',
        },
        {
          name: 'MATNR_LONG',
          description: 'Nº material (40 caracteres, necessário por razões técnicas)',
          type: 'CHAR(40)',
        },
        {
          name: 'BISMT_LONG',
          description: 'Nº material antigo (40 caracteres, tecnicamente necessário)',
          type: 'CHAR(40)',
        },
      ],
      children: [
        {
          segment: 'E1MARA1',
          description: 'Outros campos para E1MARAM',
          max: 1,
          fields: [
            {
              name: 'MATNR_EXTERNAL',
              description: 'Nº do material',
              type: 'CHAR(40)',
            },
            {
              name: 'MATNR_VERSION',
              description: 'Nº de versão para campo MATNR',
              type: 'CHAR(10)',
            },
            {
              name: 'MATNR_GUID',
              description: 'GUID externo para campo MATNR',
              type: 'CHAR(32)',
            },
            {
              name: 'BMATN_EXTERNAL',
              description: 'Nº de material longo para o campo BMATN',
              type: 'CHAR(40)',
            },
            {
              name: 'BMATN_VERSION',
              description: 'Nº de versão para campo BMATN',
              type: 'CHAR(10)',
            },
            {
              name: 'BMATN_GUID',
              description: 'GUID externo para campo BMATN',
              type: 'CHAR(32)',
            },
            {
              name: 'STOFF_EXTERNAL',
              description: 'Nº de material longo para o campo STOFF',
              type: 'CHAR(40)',
            },
            {
              name: 'STOFF_VERSION',
              description: 'Nº da versão para o campo STOFF',
              type: 'CHAR(10)',
            },
            {
              name: 'STOFF_GUID',
              description: 'ID único externo para o campo STOFF',
              type: 'CHAR(32)',
            },
            {
              name: 'HUTYP_DFLT',
              description: 'Tipo de unidade comercial standard',
              type: 'CHAR(4)',
            },
            {
              name: 'PILFERABLE',
              description: 'Com risco de roubo',
              type: 'CHAR(1)',
            },
            {
              name: 'WHSTC',
              description: 'Condição de armazenamento',
              type: 'CHAR(2)',
            },
            {
              name: 'WHMATGR',
              description: 'Grupo de materiais estocáveis',
              type: 'CHAR(4)',
            },
            {
              name: 'HNDLCODE',
              description: 'Código de manuseio',
              type: 'CHAR(4)',
            },
            {
              name: 'HAZMAT',
              description: 'Relevante para substância perigosa',
              type: 'CHAR(1)',
            },
            {
              name: 'HUTYP',
              description: 'Tipo de unidade comercial',
              type: 'CHAR(4)',
            },
            {
              name: 'TARE_VAR',
              description: 'Massa líquida variável',
              type: 'CHAR(1)',
            },
            {
              name: 'MAXC',
              description: 'Capacidade máxima permitida do material de embalagem',
              type: 'DEC(15)',
            },
            {
              name: 'MAXC_TOL',
              description: 'Tolerância de capacidade máxima da unidade comercial',
              type: 'DEC(3)',
            },
            {
              name: 'MAXL',
              description: 'Comprimento máximo da embalagem de um material da embalagem',
              type: 'QUAN(15)',
            },
            {
              name: 'MAXB',
              description: 'Largura máxima da embalagem de um material de embalagem',
              type: 'QUAN(15)',
            },
            {
              name: 'MAXH',
              description: 'Altura máx.da embalagem de um material de embalagem',
              type: 'QUAN(15)',
            },
            {
              name: 'MAXDIM_UOM',
              description: 'Unid.medida p/altura/largura/comprimento máx.da embalagem',
              type: 'UNIT(3)',
            },
            {
              name: 'HERKL',
              description: 'País de origem do material (origem CCI)',
              type: 'CHAR(3)',
            },
            {
              name: 'MFRGR',
              description: 'Grupo de frete de material',
              type: 'CHAR(8)',
            },
            {
              name: 'QQTIME',
              description: 'Quarentena',
              type: 'QUAN(3)',
            },
            {
              name: 'QQTIMEUOM',
              description: 'Unidade de tempo para quarentena',
              type: 'UNIT(3)',
            },
            {
              name: 'QGRP',
              description: 'Grupo de controle de qualidade',
              type: 'CHAR(4)',
            },
            {
              name: 'SERIAL',
              description: 'Perfil nºs de série',
              type: 'CHAR(4)',
            },
            {
              name: 'PS_SMARTFORM',
              description: 'Nome do formulário',
              type: 'CHAR(30)',
            },
            {
              name: 'CWQPROC',
              description: 'EWM-CW: perfil Catch Weight p/entrada da quantidade CW',
              type: 'CHAR(2)',
            },
            {
              name: 'CWQTOLGR',
              description: 'EWM-CW: grupo de tolerância Catch Weight p/EWM',
              type: 'CHAR(9)',
            },
            {
              name: 'ADPROF',
              description: 'Perfil de ajuste',
              type: 'CHAR(3)',
            },
            {
              name: 'IPMIPPRODUCT',
              description: 'ID de uma propriedade intelectual (produto CRM)',
              type: 'CHAR(40)',
            },
            {
              name: 'MEDIUM',
              description: 'Meio',
              type: 'CHAR(6)',
            },
            {
              name: 'COMMODITY',
              description: 'Commodity física',
              type: 'CHAR(18)',
            },
            {
              name: 'SGT_CSGR',
              description: 'Estrutura de segmentação',
              type: 'CHAR(4)',
            },
            {
              name: 'SGT_COVSA',
              description: 'Estratégia de segmentação',
              type: 'CHAR(8)',
            },
            {
              name: 'SGT_REL',
              description: 'Relev.p/segmentação',
              type: 'CHAR(1)',
            },
            {
              name: 'STOFF_LONG',
              description: 'Nº substância perigosa (40 caracteres, tecnicam.necessário)',
              type: 'CHAR(40)',
            },
            {
              name: 'BMATN_LONG',
              description: 'Até nº material',
              type: 'CHAR(40)',
            },
            {
              name: 'SATNR_LONG',
              description: 'Mat.configurável válido p/vários cens.(necessários 40 cars.)',
              type: 'CHAR(40)',
            },
            {
              name: 'GENNR_LONG',
              description: 'Nº material do material genérico em materiais pré-embalados',
              type: 'CHAR(40)',
            },
            {
              name: 'RMATP_LONG',
              description: 'Material ref.p/materiais a serem embalados da mesma maneira',
              type: 'CHAR(40)',
            },
          ],
          children: [],
        },
        {
          segment: 'E1MAKTM',
          description: 'Master material texto breve (MAKT)',
          max: 99,
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
              name: 'MAKTX',
              description: 'Texto breve de material',
              type: 'CHAR(40)',
            },
            {
              name: 'SPRAS_ISO',
              description: 'Código de idiomas SAP de 2 dígitos',
              type: 'CHAR(2)',
            },
          ],
          children: [],
        },
        {
          segment: 'E1MARCM',
          description: 'Master material segmento C (MARC)',
          max: 9999,
          fields: [
            {
              name: 'MSGFN',
              description: 'Função',
              type: 'CHAR(3)',
            },
            {
              name: 'WERKS',
              description: 'Centro',
              type: 'CHAR(4)',
            },
            {
              name: 'PSTAT',
              description: 'Status de atualização',
              type: 'CHAR(15)',
            },
            {
              name: 'LVORM',
              description: 'Marcação para eliminação',
              type: 'CHAR(1)',
            },
            {
              name: 'BWTTY',
              description: 'Categoria de avaliação',
              type: 'CHAR(1)',
            },
            {
              name: 'MAABC',
              description: 'Código ABC',
              type: 'CHAR(1)',
            },
            {
              name: 'KZKRI',
              description: 'Código: peça crítica',
              type: 'CHAR(1)',
            },
            {
              name: 'EKGRP',
              description: 'Grupo de compradores',
              type: 'CHAR(3)',
            },
            {
              name: 'AUSME',
              description: 'Unidade de medida de saída',
              type: 'UNIT(3)',
            },
            {
              name: 'DISPR',
              description: 'Material: perfil de planejamento de necessidades (MRP)',
              type: 'CHAR(4)',
            },
            {
              name: 'DISMM',
              description: 'Tipo de MRP',
              type: 'CHAR(2)',
            },
            {
              name: 'DISPO',
              description: 'Planejador MRP',
              type: 'CHAR(3)',
            },
            {
              name: 'PLIFZ',
              description: 'Prazo de entrega previsto em dias',
              type: 'DEC(3)',
            },
            {
              name: 'WEBAZ',
              description: 'Tempo de processamento (em dias) da entrada de mercadorias',
              type: 'DEC(3)',
            },
            {
              name: 'PERKZ',
              description: 'Código de período',
              type: 'CHAR(1)',
            },
            {
              name: 'AUSSS',
              description: 'Refugo do conjunto em %',
              type: 'DEC(5)',
            },
            {
              name: 'DISLS',
              description: 'Chave de cálculo do tamanho do lote no MRP',
              type: 'CHAR(2)',
            },
            {
              name: 'BESKZ',
              description: 'Tipo de suprimento',
              type: 'CHAR(1)',
            },
            {
              name: 'SOBSL',
              description: 'Tipo de suprimento especial',
              type: 'CHAR(2)',
            },
            {
              name: 'MINBE',
              description: 'Ponto de reabastecimento',
              type: 'QUAN(13)',
            },
            {
              name: 'EISBE',
              description: 'Estoque de segurança',
              type: 'QUAN(13)',
            },
            {
              name: 'BSTMI',
              description: 'Tamanho mínimo do lote',
              type: 'QUAN(13)',
            },
            {
              name: 'BSTMA',
              description: 'Tamanho máximo do lote',
              type: 'QUAN(13)',
            },
            {
              name: 'BSTFE',
              description: 'Tamanho fixo do lote',
              type: 'QUAN(13)',
            },
            {
              name: 'BSTRF',
              description: 'Valor de arredondamento da quantidade pedida',
              type: 'QUAN(13)',
            },
            {
              name: 'MABST',
              description: 'Estoque máximo',
              type: 'QUAN(13)',
            },
            {
              name: 'LOSFX',
              description: 'Custos fixos independentes do tamanho do lote',
              type: 'CURR(11)',
            },
            {
              name: 'SBDKZ',
              description: 'Código de necs.deps.para necessidade indiv.e coletiva',
              type: 'CHAR(1)',
            },
            {
              name: 'LAGPR',
              description: 'Código de custos de armazenagem',
              type: 'CHAR(1)',
            },
            {
              name: 'ALTSL',
              description: 'Código para a seleção de listas técnicas alternativas',
              type: 'CHAR(1)',
            },
            {
              name: 'KZAUS',
              description: 'Código de obsolescência',
              type: 'CHAR(1)',
            },
            {
              name: 'AUSDT',
              description: 'Data de expiração',
              type: 'DATS(8)',
            },
            {
              name: 'NFMAT',
              description: 'Material subsequente',
              type: 'CHAR(18)',
            },
            {
              name: 'KZBED',
              description: 'Código para agrupamento de necessidades',
              type: 'CHAR(1)',
            },
            {
              name: 'MISKZ',
              description: 'Código de planejamento de necessidades (MRP) misto',
              type: 'CHAR(1)',
            },
            {
              name: 'FHORI',
              description: 'Chave de prazos para tempos buffer',
              type: 'CHAR(3)',
            },
            {
              name: 'PFREI',
              description: 'Código para fixação automática das ordens planejadas',
              type: 'CHAR(1)',
            },
            {
              name: 'FFREI',
              description: 'Código de liberação para ordens de produção',
              type: 'CHAR(1)',
            },
            {
              name: 'RGEKZ',
              description: 'Código: baixa por explosão',
              type: 'CHAR(1)',
            },
            {
              name: 'FEVOR',
              description: 'Responsável pelo controle de produção',
              type: 'CHAR(3)',
            },
            {
              name: 'BEARZ',
              description: 'Tempo de processamento',
              type: 'DEC(5)',
            },
            {
              name: 'RUEZT',
              description: 'Tempos de preparação',
              type: 'DEC(5)',
            },
            {
              name: 'TRANZ',
              description: 'Tempo de transição',
              type: 'DEC(5)',
            },
            {
              name: 'BASMG',
              description: 'Quantidade básica',
              type: 'QUAN(13)',
            },
            {
              name: 'DZEIT',
              description: 'Tempo de produção interna',
              type: 'DEC(3)',
            },
            {
              name: 'MAXLZ',
              description: 'Período máximo de armazenamento',
              type: 'DEC(5)',
            },
            {
              name: 'LZEIH',
              description: 'Unidade para o período máximo de armazenamento',
              type: 'UNIT(3)',
            },
            {
              name: 'KZPRO',
              description: 'Código: retirada do depósito de produção',
              type: 'CHAR(1)',
            },
            {
              name: 'GPMKZ',
              description: 'Código: material participa do planejamento global',
              type: 'CHAR(1)',
            },
            {
              name: 'UEETO',
              description: 'Limite de tolerância para fornecimento excessivo',
              type: 'DEC(3)',
            },
            {
              name: 'UEETK',
              description: 'Código: fornecimento excessivo permitido sem limites',
              type: 'CHAR(1)',
            },
            {
              name: 'UNETO',
              description: 'Limite de tolerância para fornecimento incompleto',
              type: 'DEC(3)',
            },
            {
              name: 'WZEIT',
              description: 'Tempo total de reposição (dias de trabalho)',
              type: 'DEC(3)',
            },
            {
              name: 'ATPKZ',
              description: 'Peça de reposição',
              type: 'CHAR(1)',
            },
            {
              name: 'VZUSL',
              description: 'Fator de custo suplemantar para o valor interno, em %',
              type: 'DEC(5)',
            },
            {
              name: 'HERBL',
              description: 'Estado produtor',
              type: 'CHAR(2)',
            },
            {
              name: 'INSMK',
              description: 'Registro em estoque em controle de qualidade',
              type: 'CHAR(1)',
            },
            {
              name: 'SSQSS',
              description: 'Chave de controle para Sistema de Asseguramento de Qualidade',
              type: 'CHAR(8)',
            },
            {
              name: 'KZDKZ',
              description: 'Código para documentação obrigatória',
              type: 'CHAR(1)',
            },
            {
              name: 'UMLMC',
              description: 'Estoque em transferência (centro a centro)',
              type: 'QUAN(13)',
            },
            {
              name: 'LADGR',
              description: 'Grupo de carregamento',
              type: 'CHAR(4)',
            },
            {
              name: 'XCHPF',
              description: 'Código para administração em lote obrigatória',
              type: 'CHAR(1)',
            },
            {
              name: 'USEQU',
              description: 'Utilização da quotização',
              type: 'CHAR(1)',
            },
            {
              name: 'LGRAD',
              description: 'Grau de atendimento',
              type: 'DEC(3)',
            },
            {
              name: 'AUFTL',
              description: 'Código de divisão',
              type: 'CHAR(1)',
            },
            {
              name: 'PLVAR',
              description: 'Variante de planejamento',
              type: 'CHAR(2)',
            },
            {
              name: 'OTYPE',
              description: 'Tipo de objeto',
              type: 'CHAR(2)',
            },
            {
              name: 'OBJID',
              description: 'ID objeto',
              type: 'NUMC(8)',
            },
            {
              name: 'MTVFP',
              description: 'Grupo de verificação para verificação de disponibilidade',
              type: 'CHAR(2)',
            },
            {
              name: 'PERIV',
              description: 'Variante de exercício',
              type: 'CHAR(2)',
            },
            {
              name: 'KZKFK',
              description: 'Código: considerar os fatores de correção',
              type: 'CHAR(1)',
            },
            {
              name: 'VRVEZ',
              description: 'Tempo de preparação da expedição',
              type: 'DEC(5)',
            },
            {
              name: 'VBAMG',
              description: 'Quantidade básica p/planejamento de capacidades na expedição',
              type: 'QUAN(13)',
            },
            {
              name: 'VBEAZ',
              description: 'Tempo de processamento na expedição',
              type: 'DEC(5)',
            },
            {
              name: 'LIZYK',
              description: 'Ciclo de fornecimento',
              type: 'CHAR(4)',
            },
            {
              name: 'BWSCL',
              description: 'Fonte de suprimento',
              type: 'CHAR(1)',
            },
            {
              name: 'KAUTB',
              description: 'Código: "pedido automático permitido"',
              type: 'CHAR(1)',
            },
            {
              name: 'KORDB',
              description: 'Código de livro de fornecedores obrigatório',
              type: 'CHAR(1)',
            },
            {
              name: 'STAWN',
              description: 'Código das mercadorias / nº code import.p/comércio exterior',
              type: 'CHAR(17)',
            },
            {
              name: 'HERKL',
              description: 'País de origem do material (origem CCI)',
              type: 'CHAR(3)',
            },
            {
              name: 'HERKR',
              description: 'Região de origem do material (origem Câm.Ind.e Comércio)',
              type: 'CHAR(3)',
            },
            {
              name: 'EXPME',
              description: 'Unidade de medida para código mercadorias (comércio ext.)',
              type: 'UNIT(3)',
            },
            {
              name: 'MTVER',
              description: 'Grupo de materiais exportação para comércio exterior',
              type: 'CHAR(4)',
            },
            {
              name: 'PRCTR',
              description: 'Centro de lucro',
              type: 'CHAR(10)',
            },
            {
              name: 'TRAME',
              description: 'Estoque em trânsito',
              type: 'QUAN(13)',
            },
            {
              name: 'MRPPP',
              description: 'Calendário de planejamento PCP',
              type: 'CHAR(3)',
            },
            {
              name: 'SAUFT',
              description: 'Código: produção repetitiva permitida',
              type: 'CHAR(1)',
            },
            {
              name: 'FXHOR',
              description: 'Horizonte de planejamento fixo',
              type: 'NUMC(3)',
            },
            {
              name: 'VRMOD',
              description: 'Modo de compensação',
              type: 'CHAR(1)',
            },
            {
              name: 'VINT1',
              description: 'Intervalo de compensação - regressivo -',
              type: 'NUMC(3)',
            },
            {
              name: 'VINT2',
              description: 'Intervalo de compensação - progressivo -',
              type: 'NUMC(3)',
            },
            {
              name: 'STLAL',
              description: 'Lista técnica alternativa',
              type: 'CHAR(2)',
            },
            {
              name: 'STLAN',
              description: 'Utilização lista técnica',
              type: 'CHAR(1)',
            },
            {
              name: 'PLNNR',
              description: 'Chave do grupo de listas de tarefas',
              type: 'CHAR(8)',
            },
            {
              name: 'APLAL',
              description: 'Numerador de grupos',
              type: 'CHAR(2)',
            },
            {
              name: 'LOSGR',
              description: 'Tamanho de lote do cálculo de custos do produto',
              type: 'QUAN(13)',
            },
            {
              name: 'SOBSK',
              description: 'Aprovisionamento especial para cálculo de custos',
              type: 'CHAR(2)',
            },
            {
              name: 'FRTME',
              description: 'Unidade de medida de produção',
              type: 'UNIT(3)',
            },
            {
              name: 'LGPRO',
              description: 'Depósito de produção',
              type: 'CHAR(4)',
            },
            {
              name: 'DISGR',
              description: 'Grupo MRP',
              type: 'CHAR(4)',
            },
            {
              name: 'KAUSF',
              description: 'Refugo de componentes em %',
              type: 'DEC(5)',
            },
            {
              name: 'QZGTP',
              description: 'Categoria de certificado',
              type: 'CHAR(4)',
            },
            {
              name: 'TAKZT',
              description: 'Tempo do ciclo de trabalho',
              type: 'DEC(3)',
            },
            {
              name: 'RWPRO',
              description: 'Perfil de cobertura',
              type: 'CHAR(3)',
            },
            {
              name: 'COPAM',
              description: 'Nome local do campo para ligação CO/PA com SOP',
              type: 'CHAR(10)',
            },
            {
              name: 'ABCIN',
              description: 'Código de inventário para inventário rotativo',
              type: 'CHAR(1)',
            },
            {
              name: 'AWSLS',
              description: 'Chave de desvio',
              type: 'CHAR(6)',
            },
            {
              name: 'SERNP',
              description: 'Perfil de nºs série',
              type: 'CHAR(4)',
            },
            {
              name: 'STDPD',
              description: 'Material configurável',
              type: 'CHAR(18)',
            },
            {
              name: 'SFEPR',
              description: 'Perfil produção repetitiva',
              type: 'CHAR(4)',
            },
            {
              name: 'XMCNG',
              description: 'Estoques negativos admitidos no centro',
              type: 'CHAR(1)',
            },
            {
              name: 'QSSYS',
              description: 'Sistema QM exigido do fornecedor',
              type: 'CHAR(4)',
            },
            {
              name: 'LFRHY',
              description: 'Ciclo MRP',
              type: 'CHAR(3)',
            },
            {
              name: 'RDPRF',
              description: 'Perfil de arredondamento',
              type: 'CHAR(4)',
            },
            {
              name: 'VRBMT',
              description: 'Material de referência para consumo',
              type: 'CHAR(18)',
            },
            {
              name: 'VRBWK',
              description: 'Centro referência - consumo',
              type: 'CHAR(4)',
            },
            {
              name: 'VRBDT',
              description: 'Data-até para material referência - consumo',
              type: 'DATS(8)',
            },
            {
              name: 'VRBFK',
              description: 'Multiplicador para material referência para consumo',
              type: 'DEC(4)',
            },
            {
              name: 'AUTRU',
              description: 'Reinicializar modelo de previsão automaticamente',
              type: 'CHAR(1)',
            },
            {
              name: 'PREFE',
              description: 'Indicador de preferência na exportação/importação',
              type: 'CHAR(1)',
            },
            {
              name: 'PRENC',
              description: 'Confirmação de isenção de licença: código p/controle legal',
              type: 'CHAR(1)',
            },
            {
              name: 'PRENO',
              description: 'Conf.isenção licença: nº conf.isenção licença p/cntrl.legal',
              type: 'CHAR(8)',
            },
            {
              name: 'PREND',
              description: 'Confirm.isenção licença: data de emissão da conf.isen.licen.',
              type: 'DATS(8)',
            },
            {
              name: 'PRENE',
              description: 'Código: declaração do fornecedor existe',
              type: 'CHAR(1)',
            },
            {
              name: 'PRENG',
              description: 'Data de validade da declaração do fornecedor',
              type: 'DATS(8)',
            },
            {
              name: 'ITARK',
              description: 'Código: mercadoria militar',
              type: 'CHAR(1)',
            },
            {
              name: 'PRFRQ',
              description: 'Campo de texto com comprimento 7',
              type: 'CHAR(7)',
            },
            {
              name: 'KZKUP',
              description: 'Código: o material pode ser um co-produto',
              type: 'CHAR(1)',
            },
            {
              name: 'STRGR',
              description: 'Grupo de estratégia de planejamento',
              type: 'CHAR(2)',
            },
            {
              name: 'LGFSB',
              description: 'Depósito proposto para suprimento externo',
              type: 'CHAR(4)',
            },
            {
              name: 'SCHGT',
              description: 'Código: material a granel',
              type: 'CHAR(1)',
            },
            {
              name: 'CCFIX',
              description: 'Código CC fixo',
              type: 'CHAR(1)',
            },
            {
              name: 'EPRIO',
              description: 'Grupo sequência de retirada dos estoques',
              type: 'CHAR(4)',
            },
            {
              name: 'QMATA',
              description: 'Grupo de autorização de material para atividades no QM',
              type: 'CHAR(6)',
            },
            {
              name: 'PLNTY',
              description: 'Tipo de roteiro',
              type: 'CHAR(1)',
            },
            {
              name: 'MMSTA',
              description: 'Status do material específico do centro',
              type: 'CHAR(2)',
            },
            {
              name: 'SFCPF',
              description: 'Perfil de controle de produção',
              type: 'CHAR(6)',
            },
            {
              name: 'SHFLG',
              description: 'Código de margem de segurança (com/sem margem de segurança)',
              type: 'CHAR(1)',
            },
            {
              name: 'SHZET',
              description: 'Período de segurança (em dias de trabalho)',
              type: 'NUMC(2)',
            },
            {
              name: 'MDACH',
              description: 'Controle de ações processamento de ordens planejadas',
              type: 'CHAR(2)',
            },
            {
              name: 'KZECH',
              description: 'Controle da entrada de lotes na ordem de produção/processo',
              type: 'CHAR(1)',
            },
            {
              name: 'MMSTD',
              description: 'Data, a partir da qual status mat.espec.centro é válido',
              type: 'DATS(8)',
            },
            {
              name: 'MFRGR',
              description: 'Grupo de frete de material',
              type: 'CHAR(8)',
            },
            {
              name: 'FVIDK',
              description: 'Versão de produção a ser calculada',
              type: 'CHAR(4)',
            },
            {
              name: 'INDUS',
              description: 'Material: categoria CFOP',
              type: 'CHAR(2)',
            },
            {
              name: 'MOWNR',
              description: 'Regul.mercado: nº lista de produtos no regulam.mercado (CAP)',
              type: 'CHAR(12)',
            },
            {
              name: 'MOGRU',
              description: 'Regulam.mercado: grp.prod.no regulam.mercado p/com.exterior',
              type: 'CHAR(6)',
            },
            {
              name: 'CASNR',
              description: 'Nº CAS para produtos farmacêuticos no comércio exterior',
              type: 'CHAR(15)',
            },
            {
              name: 'GPNUM',
              description: 'Estat.produção: nº declaração PRODCOM para comércio exterior',
              type: 'CHAR(9)',
            },
            {
              name: 'STEUC',
              description: 'Código de controle p/imposto seletivo em comércio exterior',
              type: 'CHAR(16)',
            },
            {
              name: 'FABKZ',
              description: 'Código item relevante para solicitação remessa just in time',
              type: 'CHAR(1)',
            },
            {
              name: 'MATGR',
              description: 'Grupo de materiais para a matriz de transição',
              type: 'CHAR(20)',
            },
            {
              name: 'LOGGR',
              description: 'Grupo de cargas para logística para cálculo carga trabalho',
              type: 'CHAR(4)',
            },
            {
              name: 'VSPVB',
              description: 'SupM proposto no mestre de material',
              type: 'CHAR(10)',
            },
            {
              name: 'DPLFS',
              description: 'Regra fair share',
              type: 'CHAR(2)',
            },
            {
              name: 'DPLPU',
              description: 'Código distribuição push',
              type: 'CHAR(1)',
            },
            {
              name: 'DPLHO',
              description: 'Horizonte de capacidade útil em dias',
              type: 'DEC(3)',
            },
            {
              name: 'MINLS',
              description: 'Tamanho mínimo de lote para comparação de entradas/necessid.',
              type: 'QUAN(13)',
            },
            {
              name: 'MAXLS',
              description: 'Tamanho máximo de lote para comparação entradas / necessids.',
              type: 'QUAN(13)',
            },
            {
              name: 'FIXLS',
              description: 'Tamanho fixo lote para comparação entrada (cap.útil)/necess.',
              type: 'QUAN(13)',
            },
            {
              name: 'LTINC',
              description: 'Intervalo tamanho do lote para comparação entradas/necess.',
              type: 'QUAN(13)',
            },
            {
              name: 'COMPL',
              description: 'Nível de conclusão de material',
              type: 'NUMC(2)',
            },
            {
              name: 'CONVT',
              description: 'Tipos de conversão para nºs de produção',
              type: 'CHAR(2)',
            },
            {
              name: 'FPRFM',
              description: 'Pefil de distribuição do material no centro',
              type: 'CHAR(3)',
            },
            {
              name: 'SHPRO',
              description: 'Perfil períod.para períod.segurança',
              type: 'CHAR(3)',
            },
            {
              name: 'FXPRU',
              description: 'Co-produto preço fixo',
              type: 'CHAR(1)',
            },
            {
              name: 'KZPSP',
              description: 'Código para o material válido para todos os projetos',
              type: 'CHAR(1)',
            },
            {
              name: 'OCMPF',
              description: 'Perfil para controle de modificações PP / PS',
              type: 'CHAR(6)',
            },
            {
              name: 'APOKZ',
              description: 'Código: material relevante para APO?',
              type: 'CHAR(1)',
            },
            {
              name: 'AHDIS',
              description: 'Relevância MRP para necessidades dependentes',
              type: 'CHAR(1)',
            },
            {
              name: 'EISLO',
              description: 'Estoque de segurança mínimo',
              type: 'QUAN(13)',
            },
            {
              name: 'NCOST',
              description: 'Não calcular custos',
              type: 'CHAR(1)',
            },
            {
              name: 'MEGRU',
              description: 'Grupo unidade medida',
              type: 'CHAR(4)',
            },
            {
              name: 'ROTATION_DATE',
              description: 'Estratégia entrada e saída do material no depósito',
              type: 'CHAR(1)',
            },
            {
              name: 'UCHKZ',
              description: 'Código para administração de lotes originais',
              type: 'CHAR(1)',
            },
            {
              name: 'UCMAT',
              description: 'Material de referência para lotes originais',
              type: 'CHAR(18)',
            },
            {
              name: 'IUID_RELEVANT',
              description: 'Relevante IUID',
              type: 'CHAR(1)',
            },
            {
              name: 'IUID_TYPE',
              description: 'Tipo de estrutura do UII',
              type: 'CHAR(10)',
            },
            {
              name: 'UID_IEA',
              description: 'Atribuição externa do UII',
              type: 'CHAR(1)',
            },
            {
              name: 'SGT_COVS',
              description: 'Estratégia de segmentação',
              type: 'CHAR(8)',
            },
            {
              name: 'SGT_STATC',
              description: 'Status de segmentação',
              type: 'CHAR(1)',
            },
            {
              name: 'SGT_PRCM',
              description: 'Prioridade de compensação',
              type: 'CHAR(1)',
            },
            {
              name: 'SGT_CHINT',
              description: 'Número de lote discreto',
              type: 'CHAR(1)',
            },
            {
              name: 'SGT_STK_PRT',
              description: 'Código de proteção de estoque',
              type: 'CHAR(1)',
            },
            {
              name: 'SGT_DEFSC',
              description: 'Valor de segmento de estoque padrão',
              type: 'CHAR(16)',
            },
            {
              name: 'PPSKZ',
              description: 'Planejamento ampliado',
              type: 'CHAR(1)',
            },
            {
              name: 'PPS_PLANNING_TYPE',
              description: 'Método de planejamento',
              type: 'CHAR(1)',
            },
            {
              name: 'PPS_HEUR_ID',
              description: 'ID da heurística do produto',
              type: 'CHAR(12)',
            },
            {
              name: 'PPS_FIXPEG',
              description: 'Pegging fixo',
              type: 'CHAR(1)',
            },
            {
              name: 'PPS_PEG_STRATEGY',
              description: 'Estratégia de pegging',
              type: 'NUMC(2)',
            },
            {
              name: 'PPS_GIPRT',
              description: 'Tempo de processamento da saída de mercadorias',
              type: 'DEC(11)',
            },
            {
              name: 'PPS_CONHAP',
              description: 'Unidade de medida consumo da capacidade de manuseio (EM)',
              type: 'QUAN(13)',
            },
            {
              name: 'PPS_HUNIT',
              description: 'Unid.medida: capacidade de manuseio na entrada mercadorias',
              type: 'UNIT(3)',
            },
            {
              name: 'PPS_CONHAP_OUT',
              description: 'Unidade de medida consumo da capacidade de manuseio (SM)',
              type: 'QUAN(13)',
            },
            {
              name: 'PPS_HUNIT_OUT',
              description: 'Unidade de medida: capacidade manuseio na saída mercadorias',
              type: 'UNIT(3)',
            },
            {
              name: 'PPS_ATPCHECK',
              description: 'Planejamento ampliado - verificação ATP',
              type: 'CHAR(1)',
            },
            {
              name: 'PPS_STRATEGY',
              description: 'PP/DS - estratégia proposta',
              type: 'CHAR(2)',
            },
          ],
          children: [
            {
              segment: 'E1MARC1',
              description: 'Outros campos para E1MARCM',
              max: 1,
              fields: [
                {
                  name: 'NFMAT_EXTERNAL',
                  description: 'Nº de material longo para o campo NFMAT',
                  type: 'CHAR(40)',
                },
                {
                  name: 'NFMAT_VERSION',
                  description: 'Nº de versão para campo NFMAT',
                  type: 'CHAR(10)',
                },
                {
                  name: 'NFMAT_GUID',
                  description: 'GUID externo para campo NFMAT',
                  type: 'CHAR(32)',
                },
                {
                  name: 'STDPD_EXTERNAL',
                  description: 'Nº de material longo para o campo STDPD',
                  type: 'CHAR(40)',
                },
                {
                  name: 'STDPD_VERSION',
                  description: 'Nº da versão para o campo STDPD',
                  type: 'CHAR(10)',
                },
                {
                  name: 'STDPD_GUID',
                  description: 'ID único externo para o campo STDPD',
                  type: 'CHAR(32)',
                },
                {
                  name: 'VRBMT_EXTERNAL',
                  description: 'Nº de material longo para o campo VRBMT',
                  type: 'CHAR(40)',
                },
                {
                  name: 'VRBMT_VERSION',
                  description: 'Nº de versão para campo VRBMT',
                  type: 'CHAR(10)',
                },
                {
                  name: 'VRBMT_GUID',
                  description: 'GUID externo para campo VRBMT',
                  type: 'CHAR(32)',
                },
                {
                  name: 'NFMAT_LONG',
                  description: 'Material subsequente',
                  type: 'CHAR(40)',
                },
                {
                  name: 'STDPD_LONG',
                  description: 'Material configurável',
                  type: 'CHAR(40)',
                },
                {
                  name: 'VRBMT_LONG',
                  description: 'Material de referência de consumo',
                  type: 'CHAR(40)',
                },
                {
                  name: 'UCMAT_LONG',
                  description: 'Material de referência para lotes originais',
                  type: 'CHAR(40)',
                },
              ],
              children: [],
            },
            {
              segment: 'E1MARDM',
              description: 'master material segmento depósito/lote (MARD)',
              max: 9999,
              fields: [
                {
                  name: 'MSGFN',
                  description: 'Função',
                  type: 'CHAR(3)',
                },
                {
                  name: 'LGORT',
                  description: 'Depósito',
                  type: 'CHAR(4)',
                },
                {
                  name: 'PSTAT',
                  description: 'Status de atualização',
                  type: 'CHAR(15)',
                },
                {
                  name: 'LVORM',
                  description: 'Marcar mat.para eliminação a nível de depósito',
                  type: 'CHAR(1)',
                },
                {
                  name: 'DISKZ',
                  description: 'Código MRP depósito',
                  type: 'CHAR(1)',
                },
                {
                  name: 'LSOBS',
                  description: 'Tipo de suprimento especial',
                  type: 'CHAR(2)',
                },
                {
                  name: 'LMINB',
                  description: 'Ponto de reabastecimento para planejamento de depósito',
                  type: 'QUAN(13)',
                },
                {
                  name: 'LBSTF',
                  description: 'Quantidade de reposição para MRP depósito',
                  type: 'QUAN(13)',
                },
                {
                  name: 'HERKL',
                  description: 'País de origem do material (origem CCI)',
                  type: 'CHAR(3)',
                },
                {
                  name: 'EXPPG',
                  description: 'Código de preferência (desativado)',
                  type: 'CHAR(1)',
                },
                {
                  name: 'EXVER',
                  description: 'Código de exportação (desativado)',
                  type: 'CHAR(2)',
                },
                {
                  name: 'LGPBE',
                  description: 'Posição no depósito',
                  type: 'CHAR(10)',
                },
                {
                  name: 'PRCTL',
                  description: 'Centro de lucro',
                  type: 'CHAR(10)',
                },
                {
                  name: 'LWMKB',
                  description: 'Área de picking para lean WM',
                  type: 'CHAR(3)',
                },
                {
                  name: 'BSKRF',
                  description: 'Fator de correção do estoque',
                  type: 'FLTP(16)',
                },
              ],
              children: [],
            },
            {
              segment: 'E1MFHMM',
              description: 'Master material meios aux.produção (MFHM)',
              max: 1,
              fields: [
                {
                  name: 'MSGFN',
                  description: 'Função',
                  type: 'CHAR(3)',
                },
                {
                  name: 'OBJTY',
                  description: 'Categoria de objeto para recurso CIM',
                  type: 'CHAR(2)',
                },
                {
                  name: 'OBJID',
                  description: 'Identificação de objeto para recurso',
                  type: 'NUMC(8)',
                },
                {
                  name: 'ZAEHL',
                  description: 'Numerador interno',
                  type: 'NUMC(8)',
                },
                {
                  name: 'OBJTY_V',
                  description: 'Categoria de objeto para recurso CIM',
                  type: 'CHAR(2)',
                },
                {
                  name: 'OBJID_V',
                  description: 'Identificação de objeto para recurso',
                  type: 'NUMC(8)',
                },
                {
                  name: 'KZKBL',
                  description: 'Código: criar registros de necessidades para o MAP',
                  type: 'CHAR(1)',
                },
                {
                  name: 'STEUF',
                  description: 'Chave de controle p/administração de meios auxiliares prod.',
                  type: 'CHAR(4)',
                },
                {
                  name: 'STEUF_REF',
                  description: 'Código de controle não pode ser modificado',
                  type: 'CHAR(1)',
                },
                {
                  name: 'FGRU1',
                  description: 'Chave de agrupamento 1 do MAP',
                  type: 'CHAR(4)',
                },
                {
                  name: 'FGRU2',
                  description: 'Chave de agrupamento 2 do meio auxiliar de produção',
                  type: 'CHAR(4)',
                },
                {
                  name: 'PLANV',
                  description: 'Utilização da lista tarefas de MAP',
                  type: 'CHAR(3)',
                },
                {
                  name: 'KTSCH',
                  description: 'Chave do modelo de texto para o meio auxiliar de produção',
                  type: 'CHAR(7)',
                },
                {
                  name: 'KTSCH_REF',
                  description: 'Chave de modelo não pode ser modificada',
                  type: 'CHAR(1)',
                },
                {
                  name: 'BZOFFB',
                  description: 'Data de referência p/início do emprego do MAP',
                  type: 'CHAR(2)',
                },
                {
                  name: 'BZOFFB_REF',
                  description: 'Intervalo de tempo início não pode ser modificado',
                  type: 'CHAR(1)',
                },
                {
                  name: 'OFFSTB',
                  description: 'Intervalo relativo à data ref.para início do emprego do MAP',
                  type: 'QUAN(5)',
                },
                {
                  name: 'EHOFFB',
                  description: 'Unidade intervalo de tempo início do emprego do MAP',
                  type: 'UNIT(3)',
                },
                {
                  name: 'OFFSTB_REF',
                  description: 'Intervalo de tempo início não pode ser modificado',
                  type: 'CHAR(1)',
                },
                {
                  name: 'BZOFFE',
                  description: 'Data de referência p/fim do emprego do MAP',
                  type: 'CHAR(2)',
                },
                {
                  name: 'BZOFFE_REF',
                  description: 'Data de referência para o fim não pode ser modificada',
                  type: 'CHAR(1)',
                },
                {
                  name: 'OFFSTE',
                  description: 'Intervalo de tempo entre a data referência e o fim de MAP',
                  type: 'QUAN(5)',
                },
                {
                  name: 'EHOFFE',
                  description: 'Unidade intervalo de tempo fim do emprego do MAP',
                  type: 'UNIT(3)',
                },
                {
                  name: 'OFFSTE_REF',
                  description: 'Intervalo de tempo fim não pode ser modificado',
                  type: 'CHAR(1)',
                },
                {
                  name: 'MGFORM',
                  description: 'Formula para calcular a quantidade total do MAP',
                  type: 'CHAR(6)',
                },
                {
                  name: 'MGFORM_REF',
                  description: 'Fórmula para calcular a quantidade total não pode ser modif.',
                  type: 'CHAR(1)',
                },
                {
                  name: 'EWFORM',
                  description: 'Fórmula p/calcular valor total de emprego do MAP',
                  type: 'CHAR(6)',
                },
                {
                  name: 'EWFORM_REF',
                  description: 'Fórmula para calcular val.total emprego não pode ser modif.',
                  type: 'CHAR(1)',
                },
                {
                  name: 'PAR01',
                  description: '1º parâmetro (para fórmulas)',
                  type: 'CHAR(6)',
                },
                {
                  name: 'PAR02',
                  description: '2º parâmetro (para fórmulas)',
                  type: 'CHAR(6)',
                },
                {
                  name: 'PAR03',
                  description: '3º parâmetro 3 (para fórmulas)',
                  type: 'CHAR(6)',
                },
                {
                  name: 'PAR04',
                  description: '4º parâmetro (para fórmulas)',
                  type: 'CHAR(6)',
                },
                {
                  name: 'PAR05',
                  description: '5º parâmetro (para fórmulas)',
                  type: 'CHAR(6)',
                },
                {
                  name: 'PAR06',
                  description: '6º parâmetro (para fórmulas)',
                  type: 'CHAR(6)',
                },
                {
                  name: 'PARU1',
                  description: 'Unidade do valor do parâmetro',
                  type: 'UNIT(3)',
                },
                {
                  name: 'PARU2',
                  description: 'Unidade do valor do parâmetro',
                  type: 'UNIT(3)',
                },
                {
                  name: 'PARU3',
                  description: 'Unidade do valor do parâmetro',
                  type: 'UNIT(3)',
                },
                {
                  name: 'PARU4',
                  description: 'Unidade do valor do parâmetro',
                  type: 'UNIT(3)',
                },
                {
                  name: 'PARU5',
                  description: 'Unidade do valor do parâmetro',
                  type: 'UNIT(3)',
                },
                {
                  name: 'PARU6',
                  description: 'Unidade do valor do parâmetro',
                  type: 'UNIT(3)',
                },
                {
                  name: 'PARV1',
                  description: 'Valor de parâmetro',
                  type: 'QUAN(9)',
                },
                {
                  name: 'PARV2',
                  description: 'Valor de parâmetro',
                  type: 'QUAN(9)',
                },
                {
                  name: 'PARV3',
                  description: 'Valor de parâmetro',
                  type: 'QUAN(9)',
                },
                {
                  name: 'PARV4',
                  description: 'Valor de parâmetro',
                  type: 'QUAN(9)',
                },
                {
                  name: 'PARV5',
                  description: 'Valor de parâmetro',
                  type: 'QUAN(9)',
                },
                {
                  name: 'PARV6',
                  description: 'Valor de parâmetro',
                  type: 'QUAN(9)',
                },
              ],
              children: [],
            },
            {
              segment: 'E1MPGDM',
              description: 'Master material grupo de produtos',
              max: 1,
              fields: [
                {
                  name: 'MSGFN',
                  description: 'Função',
                  type: 'CHAR(3)',
                },
                {
                  name: 'PRGRP',
                  description: 'Material planejado',
                  type: 'CHAR(18)',
                },
                {
                  name: 'PRWRK',
                  description: 'Centro de planejamento',
                  type: 'CHAR(4)',
                },
                {
                  name: 'UMREF',
                  description: 'Fator conversão p/UM base de material planejamento prelim.',
                  type: 'CHAR(10)',
                },
                {
                  name: 'PRGRP_EXTERNAL',
                  description: 'Nº do grupo de produtos',
                  type: 'CHAR(40)',
                },
                {
                  name: 'PRGRP_VERSION',
                  description: 'Nº de versão para campo PRGRP',
                  type: 'CHAR(10)',
                },
                {
                  name: 'PRGRP_GUID',
                  description: 'GUID externo para campo PRGRP',
                  type: 'CHAR(32)',
                },
                {
                  name: 'PRGRP_LONG',
                  description: 'Material planejado',
                  type: 'CHAR(40)',
                },
              ],
              children: [],
            },
            {
              segment: 'E1MPOPM',
              description: 'Master material parâmetros de previsão',
              max: 1,
              fields: [
                {
                  name: 'MSGFN',
                  description: 'Função',
                  type: 'CHAR(3)',
                },
                {
                  name: 'VERSP',
                  description: 'Nº versão dos parâmetros de previsão',
                  type: 'CHAR(2)',
                },
                {
                  name: 'PROPR',
                  description: 'Perfil de previsão',
                  type: 'CHAR(4)',
                },
                {
                  name: 'MODAW',
                  description: 'Código de seleção de modelo',
                  type: 'CHAR(1)',
                },
                {
                  name: 'MODAV',
                  description: 'Processo de seleção de modelo',
                  type: 'CHAR(1)',
                },
                {
                  name: 'KZPAR',
                  description: 'Código para otimização de parâmetros',
                  type: 'CHAR(1)',
                },
                {
                  name: 'OPGRA',
                  description: 'Nível de otimização',
                  type: 'CHAR(1)',
                },
                {
                  name: 'KZINI',
                  description: 'Código de inicialização',
                  type: 'CHAR(1)',
                },
                {
                  name: 'PRMOD',
                  description: 'Modelo de previsão',
                  type: 'CHAR(1)',
                },
                {
                  name: 'ALPHA',
                  description: 'Fator alfa (alisamento do valor básico)',
                  type: 'DEC(3)',
                },
                {
                  name: 'BETA1',
                  description: 'Fator beta (amortecimento do valor de tendência)',
                  type: 'DEC(3)',
                },
                {
                  name: 'GAMMA',
                  description: 'Fator gama (amortecimento de índice sazonal)',
                  type: 'DEC(3)',
                },
                {
                  name: 'DELTA',
                  description: 'Fator delta (amortecimento desvio médio absoluto)',
                  type: 'DEC(3)',
                },
                {
                  name: 'EPSIL',
                  description: 'Fator epsílon',
                  type: 'DEC(3)',
                },
                {
                  name: 'SIGGR',
                  description: 'Limiar de aviso',
                  type: 'DEC(5)',
                },
                {
                  name: 'PERKZ',
                  description: 'Código de período',
                  type: 'CHAR(1)',
                },
                {
                  name: 'PRDAT',
                  description: 'Data da última previsão',
                  type: 'DATS(8)',
                },
                {
                  name: 'PERAN',
                  description: 'Núm.dos períodos históricos',
                  type: 'DEC(3)',
                },
                {
                  name: 'PERIN',
                  description: 'Nº de períodos para inicialização',
                  type: 'DEC(3)',
                },
                {
                  name: 'PERIO',
                  description: 'Nº de períodos por ciclo sazonal',
                  type: 'DEC(3)',
                },
                {
                  name: 'PEREX',
                  description: 'Nº períodos para previsão ex-post',
                  type: 'DEC(3)',
                },
                {
                  name: 'ANZPR',
                  description: 'Nº de períodos de previsão',
                  type: 'DEC(3)',
                },
                {
                  name: 'FIMON',
                  description: 'Períodos fixos',
                  type: 'DEC(3)',
                },
                {
                  name: 'GWERT',
                  description: 'Valor básico',
                  type: 'QUAN(13)',
                },
                {
                  name: 'GWER1',
                  description: 'Valor básico de 2ª ordem',
                  type: 'QUAN(13)',
                },
                {
                  name: 'GWER2',
                  description: 'Valor básico de 2ª ordem',
                  type: 'QUAN(13)',
                },
                {
                  name: 'VMGWE',
                  description: 'Valor básico do período anterior',
                  type: 'QUAN(13)',
                },
                {
                  name: 'VMGW1',
                  description: 'Valor básico de 2ª ordem do período anterior',
                  type: 'QUAN(13)',
                },
                {
                  name: 'VMGW2',
                  description: 'Valor básico de 2ª ordem do período anterior',
                  type: 'QUAN(13)',
                },
                {
                  name: 'TWERT',
                  description: 'Valor de tendência',
                  type: 'QUAN(13)',
                },
                {
                  name: 'VMTWE',
                  description: 'Valor de tendência do período precedente',
                  type: 'QUAN(13)',
                },
                {
                  name: 'PRMAD',
                  description: 'Desvio médio absoluto (DMA)',
                  type: 'QUAN(13)',
                },
                {
                  name: 'VMMAD',
                  description: 'Desvio médio absoluto do período precedente',
                  type: 'QUAN(13)',
                },
                {
                  name: 'FSUMM',
                  description: 'Total de erros',
                  type: 'QUAN(13)',
                },
                {
                  name: 'VMFSU',
                  description: 'Total de erros do período anterior',
                  type: 'QUAN(13)',
                },
                {
                  name: 'GEWGR',
                  description: 'Grupo de ponderação',
                  type: 'CHAR(2)',
                },
                {
                  name: 'THKOF',
                  description: 'Coeficiente de Theil',
                  type: 'DEC(5)',
                },
                {
                  name: 'AUSNA',
                  description: 'Barra das mensagens de exceção',
                  type: 'CHAR(30)',
                },
                {
                  name: 'PROAB',
                  description: 'Controle do processo de previsão',
                  type: 'CHAR(10)',
                },
              ],
              children: [],
            },
            {
              segment: 'E1MPRWM',
              description: 'Master material valores previstos',
              max: 9999999999,
              fields: [
                {
                  name: 'MSGFN',
                  description: 'Função',
                  type: 'CHAR(3)',
                },
                {
                  name: 'ERTAG',
                  description: 'Primeiro dia do período ao qual se referem os valores',
                  type: 'DATS(8)',
                },
                {
                  name: 'PRWRT',
                  description: 'Valor de previsão',
                  type: 'QUAN(13)',
                },
                {
                  name: 'KOPRW',
                  description: 'Valor corrigido p/valor de previsão',
                  type: 'QUAN(13)',
                },
                {
                  name: 'SAIIN',
                  description: 'Índice sazonal',
                  type: 'DEC(6)',
                },
                {
                  name: 'FIXKZ',
                  description: 'Código: valor de previsão fixado',
                  type: 'CHAR(1)',
                },
                {
                  name: 'EXPRW',
                  description: "Valor de previsão 'ex post'",
                  type: 'QUAN(13)',
                },
                {
                  name: 'ANTEI',
                  description: 'Relação valor original : valor corrigido',
                  type: 'DEC(4)',
                },
              ],
              children: [],
            },
            {
              segment: 'E1MVEGM',
              description: 'Master material consumos totais',
              max: 9999999999,
              fields: [
                {
                  name: 'MSGFN',
                  description: 'Função',
                  type: 'CHAR(3)',
                },
                {
                  name: 'ERTAG',
                  description: 'Primeiro dia do período ao qual se referem os valores',
                  type: 'DATS(8)',
                },
                {
                  name: 'VBWRT',
                  description: 'Valor de consumo',
                  type: 'QUAN(13)',
                },
                {
                  name: 'KOVBW',
                  description: 'Valor de consumo corrigido',
                  type: 'QUAN(13)',
                },
                {
                  name: 'KZEXI',
                  description: 'Campo de seleção',
                  type: 'CHAR(1)',
                },
                {
                  name: 'ANTEI',
                  description: 'Relação valor original : valor corrigido',
                  type: 'DEC(4)',
                },
              ],
              children: [],
            },
            {
              segment: 'E1MVEUM',
              description: 'Master material consumos não planejados',
              max: 9999999999,
              fields: [
                {
                  name: 'MSGFN',
                  description: 'Função',
                  type: 'CHAR(3)',
                },
                {
                  name: 'ERTAG',
                  description: 'Primeiro dia do período ao qual se referem os valores',
                  type: 'DATS(8)',
                },
                {
                  name: 'VBWRT',
                  description: 'Valor de consumo',
                  type: 'QUAN(13)',
                },
                {
                  name: 'KOVBW',
                  description: 'Valor de consumo corrigido',
                  type: 'QUAN(13)',
                },
                {
                  name: 'KZEXI',
                  description: 'Campo de seleção',
                  type: 'CHAR(1)',
                },
                {
                  name: 'ANTEI',
                  description: 'Relação valor original : valor corrigido',
                  type: 'DEC(4)',
                },
              ],
              children: [],
            },
            {
              segment: 'E1MKALM',
              description: 'Master material versão de produção',
              max: 9999999999,
              fields: [
                {
                  name: 'MSGFN',
                  description: 'Função',
                  type: 'CHAR(3)',
                },
                {
                  name: 'VERID',
                  description: 'Versão de produção',
                  type: 'CHAR(4)',
                },
                {
                  name: 'BDATU',
                  description: 'Fim da validade da versão de produção',
                  type: 'DATS(8)',
                },
                {
                  name: 'ADATU',
                  description: 'Início da validade da versão de produção',
                  type: 'DATS(8)',
                },
                {
                  name: 'STLAL',
                  description: 'Lista técnica alternativa',
                  type: 'CHAR(2)',
                },
                {
                  name: 'STLAN',
                  description: 'Utilização lista técnica',
                  type: 'CHAR(1)',
                },
                {
                  name: 'PLNTY',
                  description: 'Tipo de roteiro',
                  type: 'CHAR(1)',
                },
                {
                  name: 'PLNNR',
                  description: 'Chave do grupo de listas de tarefas',
                  type: 'CHAR(8)',
                },
                {
                  name: 'ALNAL',
                  description: 'Numerador de grupos',
                  type: 'CHAR(2)',
                },
                {
                  name: 'BESKZ',
                  description: 'Tipo de suprimento',
                  type: 'CHAR(1)',
                },
                {
                  name: 'SOBSL',
                  description: 'Tipo de suprimento especial',
                  type: 'CHAR(2)',
                },
                {
                  name: 'LOSGR',
                  description: 'Tamanho de lote do cálculo de custos do produto',
                  type: 'QUAN(13)',
                },
                {
                  name: 'MDV01',
                  description: 'Campo de agregação para versões de produção',
                  type: 'CHAR(8)',
                },
                {
                  name: 'MDV02',
                  description: 'Campo de agregação para versões de produção',
                  type: 'CHAR(8)',
                },
                {
                  name: 'TEXT1',
                  description: 'Texto breve para a versão de produção',
                  type: 'CHAR(40)',
                },
                {
                  name: 'EWAHR',
                  description: 'Probabilidade de emprego no controle de versões',
                  type: 'DEC(3)',
                },
                {
                  name: 'VERTO',
                  description: 'Chave distribuição p/produção',
                  type: 'CHAR(4)',
                },
                {
                  name: 'SERKZ',
                  description: 'Código: ordem de produção repetitiva permitida para versão',
                  type: 'CHAR(1)',
                },
                {
                  name: 'BSTMI',
                  description: 'Valor mínimo do intervalo de tamanho do lote',
                  type: 'QUAN(13)',
                },
                {
                  name: 'BSTMA',
                  description: 'Valor máximo do intervalo de tamanho do lote',
                  type: 'QUAN(13)',
                },
                {
                  name: 'RGEKZ',
                  description: 'Código: retirada retrógrada p/ordem',
                  type: 'CHAR(1)',
                },
                {
                  name: 'ALORT',
                  description: 'Depósito de recebimento para a produção repetitiva',
                  type: 'CHAR(4)',
                },
                {
                  name: 'PLTYG',
                  description: 'Tipo de roteiro',
                  type: 'CHAR(1)',
                },
                {
                  name: 'PLNNG',
                  description: 'Chave do grupo de listas de tarefas',
                  type: 'CHAR(8)',
                },
                {
                  name: 'ALNAG',
                  description: 'Numerador de grupos',
                  type: 'CHAR(2)',
                },
                {
                  name: 'PLTYM',
                  description: 'Tipo de roteiro',
                  type: 'CHAR(1)',
                },
                {
                  name: 'PLNNM',
                  description: 'Chave do grupo de listas de tarefas',
                  type: 'CHAR(8)',
                },
                {
                  name: 'ALNAM',
                  description: 'Numerador de grupos',
                  type: 'CHAR(2)',
                },
                {
                  name: 'CSPLT',
                  description: 'Esquema de repartição',
                  type: 'CHAR(4)',
                },
                {
                  name: 'MATKO',
                  description: 'Outro material p/qual LisTéc.e lis.tarefas estão atualizadas',
                  type: 'CHAR(18)',
                },
                {
                  name: 'ELPRO',
                  description: 'Depósito proposto de retirada para componentes',
                  type: 'CHAR(4)',
                },
                {
                  name: 'PRVBE',
                  description: 'Supermercado proposto para componentes',
                  type: 'CHAR(10)',
                },
                {
                  name: 'MATKO_EXTERNAL',
                  description: 'Nº de material longo para o campo MATKO',
                  type: 'CHAR(40)',
                },
                {
                  name: 'MATKO_VERSION',
                  description: 'Nº de versão para campo MATKO',
                  type: 'CHAR(10)',
                },
                {
                  name: 'MATKO_GUID',
                  description: 'GUID externo para campo MATKO',
                  type: 'CHAR(32)',
                },
                {
                  name: 'MATKO_LONG',
                  description: 'Outro material p/qual LisTéc.e lis.tarefas estão atualizadas',
                  type: 'CHAR(40)',
                },
              ],
              children: [],
            },
          ],
        },
        {
          segment: 'E1MARMM',
          description: 'Master material unidade de medida (MARM)',
          max: 999,
          fields: [
            {
              name: 'MSGFN',
              description: 'Função',
              type: 'CHAR(3)',
            },
            {
              name: 'MEINH',
              description: 'Unidade medida alternativa p/unid.gestão estoque',
              type: 'UNIT(3)',
            },
            {
              name: 'UMREZ',
              description: 'Contador para a conversão em UMs básicas',
              type: 'DEC(5)',
            },
            {
              name: 'UMREN',
              description: 'Denominador para a conversão em unidades de medida básicas',
              type: 'DEC(5)',
            },
            {
              name: 'EAN11',
              description: 'Nº europeu do artigo (EAN)',
              type: 'CHAR(18)',
            },
            {
              name: 'NUMTP',
              description: 'Ctg.de número do nº europeu do artigo',
              type: 'CHAR(2)',
            },
            {
              name: 'LAENG',
              description: 'Comprimento',
              type: 'QUAN(13)',
            },
            {
              name: 'BREIT',
              description: 'Largura',
              type: 'QUAN(13)',
            },
            {
              name: 'HOEHE',
              description: 'Altura',
              type: 'QUAN(13)',
            },
            {
              name: 'MEABM',
              description: 'Unidade para comprimento/largura/altura',
              type: 'UNIT(3)',
            },
            {
              name: 'VOLUM',
              description: 'Volume',
              type: 'QUAN(13)',
            },
            {
              name: 'VOLEH',
              description: 'Unidade de volume',
              type: 'UNIT(3)',
            },
            {
              name: 'BRGEW',
              description: 'Peso bruto',
              type: 'QUAN(13)',
            },
            {
              name: 'GEWEI',
              description: 'Unidade de peso',
              type: 'UNIT(3)',
            },
            {
              name: 'MESUB',
              description: 'Unidade de medida inferior em uma hierarquia de embalagem',
              type: 'UNIT(3)',
            },
            {
              name: 'GTIN_VARIANT',
              description: 'Variante para Global Trade Item Number',
              type: 'CHAR(2)',
            },
            {
              name: '/CWM/TY2TQ',
              description: 'Tipo da unidade da unidade paralela',
              type: 'CHAR(1)',
            },
            {
              name: 'NEST_FTR',
              description: 'Volume restante após aninhamento (em %)',
              type: 'DEC(3)',
            },
            {
              name: 'MAX_STACK',
              description: 'Fator de empilhamento máximo',
              type: 'INT1(3)',
            },
            {
              name: 'CAPAUSE',
              description: 'Consumo da capacidade',
              type: 'DEC(15)',
            },
          ],
          children: [
            {
              segment: 'E1MEANM',
              description: 'Master material número europeu do artigo (MEAN)',
              max: 9999,
              fields: [
                {
                  name: 'MSGFN',
                  description: 'Função',
                  type: 'CHAR(3)',
                },
                {
                  name: 'MEINH',
                  description: 'Unidade de medida para a exibição',
                  type: 'UNIT(3)',
                },
                {
                  name: 'LFNUM',
                  description: 'Nº sequencial',
                  type: 'CHAR(5)',
                },
                {
                  name: 'EAN11',
                  description: 'Nº europeu do artigo (EAN)',
                  type: 'CHAR(18)',
                },
                {
                  name: 'EANTP',
                  description: 'Ctg.de número do nº europeu do artigo',
                  type: 'CHAR(2)',
                },
                {
                  name: 'HPEAN',
                  description: 'Código EAN principal',
                  type: 'CHAR(1)',
                },
              ],
              children: [],
            },
          ],
        },
        {
          segment: 'E1MBEWM',
          description: 'Master material avaliação de material (MBEW)',
          max: 9999,
          fields: [
            {
              name: 'MSGFN',
              description: 'Função',
              type: 'CHAR(3)',
            },
            {
              name: 'BWKEY',
              description: 'Área de avaliação',
              type: 'CHAR(4)',
            },
            {
              name: 'BWTAR',
              description: 'Tipo de avaliação',
              type: 'CHAR(10)',
            },
            {
              name: 'LVORM',
              description: 'Marcação para eliminação',
              type: 'CHAR(1)',
            },
            {
              name: 'VPRSV',
              description: 'Código de controle de preço',
              type: 'CHAR(1)',
            },
            {
              name: 'VERPR',
              description: 'Preço médio móvel/preço interno periódico',
              type: 'CURR(11)',
            },
            {
              name: 'STPRS',
              description: 'Prç.standard',
              type: 'CURR(11)',
            },
            {
              name: 'PEINH',
              description: 'Unidade preço',
              type: 'DEC(5)',
            },
            {
              name: 'BKLAS',
              description: 'Classe de avaliação',
              type: 'CHAR(4)',
            },
            {
              name: 'VMVPR',
              description: 'Código de controle do preço do período precedente',
              type: 'CHAR(1)',
            },
            {
              name: 'VMVER',
              description: 'Preço médio móvel/preço interno periód.do período precedente',
              type: 'CURR(11)',
            },
            {
              name: 'VMSTP',
              description: 'Preço standard do período anterior',
              type: 'CURR(11)',
            },
            {
              name: 'VMPEI',
              description: 'Unidade de preço do período precedente',
              type: 'DEC(5)',
            },
            {
              name: 'VMBKL',
              description: 'Classe de avaliação do período precedente',
              type: 'CHAR(4)',
            },
            {
              name: 'VJVPR',
              description: 'Código de controle de preço do ano precedente',
              type: 'CHAR(1)',
            },
            {
              name: 'VJVER',
              description: 'Preço médio móvel/preço interno periódico do ano precedente',
              type: 'CURR(11)',
            },
            {
              name: 'VJSTP',
              description: 'Preço standard do ano precedente',
              type: 'CURR(11)',
            },
            {
              name: 'LFGJA',
              description: 'Exercício do período atual',
              type: 'NUMC(4)',
            },
            {
              name: 'LFMON',
              description: 'Período corrente (período contábil)',
              type: 'NUMC(2)',
            },
            {
              name: 'BWTTY',
              description: 'Categoria de avaliação',
              type: 'CHAR(1)',
            },
            {
              name: 'ZKPRS',
              description: 'Preço futuro',
              type: 'CURR(11)',
            },
            {
              name: 'ZKDAT',
              description: 'Início da validade do preço',
              type: 'DATS(8)',
            },
            {
              name: 'BWPRS',
              description: 'Preço que exprime o valor fiscal - nível 1',
              type: 'CURR(11)',
            },
            {
              name: 'BWPRH',
              description: 'Preço que exprime valor comercial - nível 1',
              type: 'CURR(11)',
            },
            {
              name: 'VJBWS',
              description: 'Preço que exprime o valor tributário - nível 3',
              type: 'CURR(11)',
            },
            {
              name: 'VJBWH',
              description: 'Preço que exprime valor comercial - nível 3',
              type: 'CURR(11)',
            },
            {
              name: 'VVJLB',
              description: 'Estoque total avaliado do',
              type: 'QUAN(13)',
            },
            {
              name: 'VVMLB',
              description: 'Estoque total avaliado do',
              type: 'QUAN(13)',
            },
            {
              name: 'VVSAL',
              description: 'Valor do estoque total avaliado no',
              type: 'CURR(13)',
            },
            {
              name: 'ZPLPR',
              description: 'Preço planejado futuro',
              type: 'CURR(11)',
            },
            {
              name: 'ZPLP1',
              description: 'Preço planejado futuro 1',
              type: 'CURR(11)',
            },
            {
              name: 'ZPLP2',
              description: 'Preço planejado futuro 2',
              type: 'CURR(11)',
            },
            {
              name: 'ZPLP3',
              description: 'Preço planejado futuro 3',
              type: 'CURR(11)',
            },
            {
              name: 'ZPLD1',
              description: 'Data a partir da qual será válido o preço previsto 1',
              type: 'DATS(8)',
            },
            {
              name: 'ZPLD2',
              description: 'Data a partir da qual será válido o preço previsto 2',
              type: 'DATS(8)',
            },
            {
              name: 'ZPLD3',
              description: 'Data a partir da qual será válido o preço previsto 3',
              type: 'DATS(8)',
            },
            {
              name: 'KALKZ',
              description: 'Código: custeio padrão para o respectivo período',
              type: 'CHAR(1)',
            },
            {
              name: 'KALKL',
              description: 'Código: custeio padrão para o período corrente',
              type: 'CHAR(1)',
            },
            {
              name: 'XLIFO',
              description: 'Relevante para LIFO/FIFO',
              type: 'CHAR(1)',
            },
            {
              name: 'MYPOL',
              description: 'Nº pool para avaliação LIFO',
              type: 'CHAR(4)',
            },
            {
              name: 'BWPH1',
              description: 'Preço que exprime valor comercial - nível 2',
              type: 'CURR(11)',
            },
            {
              name: 'BWPS1',
              description: 'Preço que exprime o valor fiscal - nível 2',
              type: 'CURR(11)',
            },
            {
              name: 'ABWKZ',
              description: 'Valor mais baixo: indicador de desvalorização',
              type: 'NUMC(2)',
            },
            {
              name: 'PSTAT',
              description: 'Status de atualização',
              type: 'CHAR(15)',
            },
            {
              name: 'KALN1',
              description: 'Nº cálculo de custos - cálc.custos do produto',
              type: 'NUMC(12)',
            },
            {
              name: 'KALNR',
              description: 'Nº cálculo de custos p/cálc.custos sem estrut.quantitativa',
              type: 'NUMC(12)',
            },
            {
              name: 'BWVA1',
              description: 'Variante d/avaliação para o custeio padrão futuro',
              type: 'CHAR(3)',
            },
            {
              name: 'BWVA2',
              description: 'Variante d/avaliação para custeio padrão atual',
              type: 'CHAR(3)',
            },
            {
              name: 'BWVA3',
              description: 'Variante d/avaliação para custeio padrão passada',
              type: 'CHAR(3)',
            },
            {
              name: 'VERS1',
              description: 'Versão do cálculo de custos do custeio padrão futuro',
              type: 'NUMC(2)',
            },
            {
              name: 'VERS2',
              description: 'Versão de cálculo de custos do custeio padrão em curso',
              type: 'NUMC(2)',
            },
            {
              name: 'VERS3',
              description: 'Versão de cálculo de custos do custeio padrão anterior',
              type: 'NUMC(2)',
            },
            {
              name: 'HRKFT',
              description: 'Grupo de origem como subdivisão da classe de custo',
              type: 'CHAR(4)',
            },
            {
              name: 'KOSGR',
              description: 'Grupo de custos indiretos do cálculo de custos',
              type: 'CHAR(10)',
            },
            {
              name: 'PPRDZ',
              description: 'Período do cálculo de custos futuro',
              type: 'NUMC(3)',
            },
            {
              name: 'PPRDL',
              description: 'Período do cálculo de custos em curso',
              type: 'NUMC(3)',
            },
            {
              name: 'PPRDV',
              description: 'Período do cálculo de custos passado',
              type: 'NUMC(3)',
            },
            {
              name: 'PDATZ',
              description: 'Exercício do cálculo de custos futuro',
              type: 'NUMC(4)',
            },
            {
              name: 'PDATL',
              description: 'Exercício do cálculo de custos em curso',
              type: 'NUMC(4)',
            },
            {
              name: 'PDATV',
              description: 'Exercício do cálculo de custos anterior',
              type: 'NUMC(4)',
            },
            {
              name: 'EKALR',
              description: 'O material será cálculado com estrutura quantitativa',
              type: 'CHAR(1)',
            },
            {
              name: 'VPLPR',
              description: 'Preço planejado anterior',
              type: 'CURR(11)',
            },
            {
              name: 'MLMAA',
              description: 'Ledger de material ativado a nível de material',
              type: 'CHAR(1)',
            },
            {
              name: 'MLAST',
              description: 'Apropriação custos do ledger de materiais: controle',
              type: 'CHAR(1)',
            },
            {
              name: 'VJBKL',
              description: 'Classe de avaliação do ano precedente',
              type: 'CHAR(4)',
            },
            {
              name: 'VJPEI',
              description: 'Unidade de preço do ano precedente',
              type: 'DEC(5)',
            },
            {
              name: 'HKMAT',
              description: 'Origem referida a material',
              type: 'CHAR(1)',
            },
            {
              name: 'EKLAS',
              description: 'Classe de avaliação para estoque ordem de cliente',
              type: 'CHAR(4)',
            },
            {
              name: 'QKLAS',
              description: 'Classe de avaliação para estoque para projeto',
              type: 'CHAR(4)',
            },
            {
              name: 'MTUSE',
              description: 'Utilização de material',
              type: 'CHAR(1)',
            },
            {
              name: 'MTORG',
              description: 'Origem de material',
              type: 'CHAR(1)',
            },
            {
              name: 'OWNPR',
              description: 'Produção interna',
              type: 'CHAR(1)',
            },
            {
              name: 'BWPEI',
              description: 'Unidade dos preços que exprimem val.comercial/tributário',
              type: 'DEC(5)',
            },
            {
              name: 'CON_FIN_VALLEVEL',
              description: 'Nível de avaliação',
              type: 'CHAR(3)',
            },
            {
              name: 'CON_FIN_VALPROC',
              description: 'Processo de avaliação',
              type: 'CHAR(3)',
            },
          ],
          children: [],
        },
        {
          segment: 'E1MLGNM',
          description:
            'Master material dados do material por nº de depósito\n                                (MLGN)',
          max: 9999,
          fields: [
            {
              name: 'MSGFN',
              description: 'Função',
              type: 'CHAR(3)',
            },
            {
              name: 'LGNUM',
              description: 'Nºdepósito/complexo de depósito',
              type: 'CHAR(3)',
            },
            {
              name: 'LVORM',
              description: 'Marcação p/eliminar todos os dados mat.de um número depósito',
              type: 'CHAR(1)',
            },
            {
              name: 'LGBKZ',
              description: 'Código da área de armazenamento',
              type: 'CHAR(3)',
            },
            {
              name: 'LTKZE',
              description: 'Código da categoria de depósito para entrada em depósito',
              type: 'CHAR(3)',
            },
            {
              name: 'LTKZA',
              description: 'Código de ctg.de depósito para saída de depósito',
              type: 'CHAR(3)',
            },
            {
              name: 'LHMG1',
              description: 'Quantidade meio auxiliar para carregar',
              type: 'QUAN(13)',
            },
            {
              name: 'LHMG2',
              description: 'Quantidade meio auxiliar para carregar',
              type: 'QUAN(13)',
            },
            {
              name: 'LHMG3',
              description: 'Quantidade meio auxiliar para carregar',
              type: 'QUAN(13)',
            },
            {
              name: 'LHME1',
              description: 'UM para a quantidade meio auxiliar para carregar',
              type: 'UNIT(3)',
            },
            {
              name: 'LHME2',
              description: 'UM para a quantidade meio auxiliar para carregar',
              type: 'UNIT(3)',
            },
            {
              name: 'LHME3',
              description: 'UM para a quantidade meio auxiliar para carregar',
              type: 'UNIT(3)',
            },
            {
              name: 'LETY1',
              description: 'Tipo de unidade de depósito',
              type: 'CHAR(3)',
            },
            {
              name: 'LETY2',
              description: 'Tipo de unidade de depósito',
              type: 'CHAR(3)',
            },
            {
              name: 'LETY3',
              description: 'Tipo de unidade de depósito',
              type: 'CHAR(3)',
            },
            {
              name: 'LVSME',
              description: 'Unidade de medida WM',
              type: 'UNIT(3)',
            },
            {
              name: 'KZZUL',
              description: 'Código: armazenamento adicional permitido',
              type: 'CHAR(1)',
            },
            {
              name: 'BLOCK',
              description: 'Código depósito em bloco',
              type: 'CHAR(2)',
            },
            {
              name: 'KZMBF',
              description: 'Código: mensagem para a administração de estoques',
              type: 'CHAR(1)',
            },
            {
              name: 'BSSKZ',
              description: 'Código especial para movimento na administração de depósitos',
              type: 'CHAR(1)',
            },
            {
              name: 'MKAPV',
              description: 'Consumo de capacidade',
              type: 'DEC(11)',
            },
            {
              name: 'BEZME',
              description: 'Unidade de medida de referência para consumo capacidade',
              type: 'UNIT(3)',
            },
            {
              name: 'PLKPT',
              description: 'Tipo de depósito picking para planejamento global/detalhado',
              type: 'CHAR(3)',
            },
            {
              name: 'VOMEM',
              description: 'Proposta para unidade de medida do mestre de material',
              type: 'CHAR(1)',
            },
            {
              name: 'L2SKR',
              description: 'Relevância do material para picking em 2 etapas',
              type: 'CHAR(1)',
            },
          ],
          children: [
            {
              segment: 'E1MLGTM',
              description:
                'Mestre de material dados de material por tipo\n                                depósito(MLGT)',
              max: 9999,
              fields: [
                {
                  name: 'MSGFN',
                  description: 'Função',
                  type: 'CHAR(3)',
                },
                {
                  name: 'LGTYP',
                  description: 'Tipo de depósito',
                  type: 'CHAR(3)',
                },
                {
                  name: 'LVORM',
                  description: 'Marcação p/eliminar todos os dados mat.de um tipo depósito',
                  type: 'CHAR(1)',
                },
                {
                  name: 'LGPLA',
                  description: 'Posição no depósito',
                  type: 'CHAR(10)',
                },
                {
                  name: 'LPMAX',
                  description: 'Qtd.máxima posiç.no dep.',
                  type: 'QUAN(13)',
                },
                {
                  name: 'LPMIN',
                  description: 'Qtd.mínima posiç.no dep.',
                  type: 'QUAN(13)',
                },
                {
                  name: 'MAMNG',
                  description: 'Quantidade de manejo',
                  type: 'QUAN(13)',
                },
                {
                  name: 'NSMNG',
                  description: 'Quantidade de reabastecimento',
                  type: 'QUAN(13)',
                },
                {
                  name: 'KOBER',
                  description: 'Área de picking',
                  type: 'CHAR(3)',
                },
                {
                  name: 'RDMNG',
                  description: 'Qtd.arredond.',
                  type: 'QUAN(13)',
                },
              ],
              children: [],
            },
          ],
        },
        {
          segment: 'E1MVKEM',
          description: 'Master material dados de venda (MVKE)',
          max: 9999,
          fields: [
            {
              name: 'MSGFN',
              description: 'Função',
              type: 'CHAR(3)',
            },
            {
              name: 'VKORG',
              description: 'Organização de vendas',
              type: 'CHAR(4)',
            },
            {
              name: 'VTWEG',
              description: 'Canal de distribuição',
              type: 'CHAR(2)',
            },
            {
              name: 'LVORM',
              description: 'Código: marcar mat.para eliminação a nível canal de vendas',
              type: 'CHAR(1)',
            },
            {
              name: 'VERSG',
              description: 'Grupo estatístico material',
              type: 'CHAR(1)',
            },
            {
              name: 'BONUS',
              description: 'Grupo de bônus',
              type: 'CHAR(2)',
            },
            {
              name: 'PROVG',
              description: 'Grupo de comissões',
              type: 'CHAR(2)',
            },
            {
              name: 'SKTOF',
              description: 'Código: com direito a desconto',
              type: 'CHAR(1)',
            },
            {
              name: 'VMSTA',
              description: 'Status do material específica da linha de vendas',
              type: 'CHAR(2)',
            },
            {
              name: 'VMSTD',
              description: 'Data a partir da qual vale status mat.específ.linha vendas',
              type: 'DATS(8)',
            },
            {
              name: 'AUMNG',
              description: 'Quantidade mínima da ordem em UM base',
              type: 'QUAN(13)',
            },
            {
              name: 'LFMNG',
              description: 'Qtd.mín.fornecimento no processamento da nota de remessa',
              type: 'QUAN(13)',
            },
            {
              name: 'EFMNG',
              description: 'Quantidade mínima de produção individual',
              type: 'QUAN(13)',
            },
            {
              name: 'SCMNG',
              description: 'Unidade de medida da remessa',
              type: 'QUAN(13)',
            },
            {
              name: 'SCHME',
              description: 'Unidade de medida da unidade de remessa',
              type: 'UNIT(3)',
            },
            {
              name: 'VRKME',
              description: 'Unidade de venda',
              type: 'UNIT(3)',
            },
            {
              name: 'MTPOS',
              description: 'Grupo de ctgs.item do mestre de material',
              type: 'CHAR(4)',
            },
            {
              name: 'DWERK',
              description: 'Centro fornecedor',
              type: 'CHAR(4)',
            },
            {
              name: 'PRODH',
              description: 'Hierarquia de produtos',
              type: 'CHAR(18)',
            },
            {
              name: 'PMATN',
              description: 'Mat.ref.p/prç.',
              type: 'CHAR(18)',
            },
            {
              name: 'KONDM',
              description: 'Grupo de materiais',
              type: 'CHAR(2)',
            },
            {
              name: 'KTGRM',
              description: 'Grupo de classificação contábil - material',
              type: 'CHAR(2)',
            },
            {
              name: 'MVGR1',
              description: 'Grupo de material 1',
              type: 'CHAR(3)',
            },
            {
              name: 'MVGR2',
              description: 'Grupo de material 2',
              type: 'CHAR(3)',
            },
            {
              name: 'MVGR3',
              description: 'Grupo de materiais 3',
              type: 'CHAR(3)',
            },
            {
              name: 'MVGR4',
              description: 'Grupo de material 4',
              type: 'CHAR(3)',
            },
            {
              name: 'MVGR5',
              description: 'Grupo de material 5',
              type: 'CHAR(3)',
            },
            {
              name: 'SSTUF',
              description: 'Nível de sortimento',
              type: 'CHAR(2)',
            },
            {
              name: 'PFLKS',
              description: 'Prioridade de sortimento ext.',
              type: 'CHAR(1)',
            },
            {
              name: 'LSTFL',
              description: 'Método de listagem para a filial ou outros tipos sortimento',
              type: 'CHAR(2)',
            },
            {
              name: 'LSTVZ',
              description: 'Método catalogação p/tps.sortimento do centro distribuição',
              type: 'CHAR(2)',
            },
            {
              name: 'LSTAK',
              description: 'Catalogação de sortimento ativada',
              type: 'CHAR(1)',
            },
            {
              name: 'PRAT1',
              description: 'Código atributo de produto 1',
              type: 'CHAR(1)',
            },
            {
              name: 'PRAT2',
              description: 'Código atributo de produto 2',
              type: 'CHAR(1)',
            },
            {
              name: 'PRAT3',
              description: 'Código atributo de produto 3',
              type: 'CHAR(1)',
            },
            {
              name: 'PRAT4',
              description: 'Código atributo de produto 4',
              type: 'CHAR(1)',
            },
            {
              name: 'PRAT5',
              description: 'Código atributo de produto 5',
              type: 'CHAR(1)',
            },
            {
              name: 'PRAT6',
              description: 'Código atributo de produto 6',
              type: 'CHAR(1)',
            },
            {
              name: 'PRAT7',
              description: 'Código atributo de produto 7',
              type: 'CHAR(1)',
            },
            {
              name: 'PRAT8',
              description: 'Código atributo de produto 8',
              type: 'CHAR(1)',
            },
            {
              name: 'PRAT9',
              description: 'Código atributo de produto 9',
              type: 'CHAR(1)',
            },
            {
              name: 'PRATA',
              description: 'Código atributo de produto 10',
              type: 'CHAR(1)',
            },
            {
              name: 'VAVME',
              description: 'Unidade de venda variável não permitida',
              type: 'CHAR(1)',
            },
            {
              name: 'RDPRF',
              description: 'Perfil de arredondamento',
              type: 'CHAR(4)',
            },
            {
              name: 'MEGRU',
              description: 'Grupo unidade medida',
              type: 'CHAR(4)',
            },
            {
              name: 'PMATN_EXTERNAL',
              description: 'Nº de material longo para o campo PMATN',
              type: 'CHAR(40)',
            },
            {
              name: 'PMATN_VERSION',
              description: 'Nº de versão para campo PMATN',
              type: 'CHAR(10)',
            },
            {
              name: 'PMATN_GUID',
              description: 'GUID externo para campo PMATN',
              type: 'CHAR(32)',
            },
            {
              name: 'PMATN_LONG',
              description: 'Material de referência para o preço',
              type: 'CHAR(40)',
            },
          ],
          children: [],
        },
        {
          segment: 'E1MLANM',
          description: 'Master material classificação de impostos (MLAN)',
          max: 9999,
          fields: [
            {
              name: 'MSGFN',
              description: 'Função',
              type: 'CHAR(3)',
            },
            {
              name: 'ALAND',
              description: 'País fornecedor (país onde a mercadoria é expedida)',
              type: 'CHAR(3)',
            },
            {
              name: 'TATY1',
              description: 'Ctg.imposto (sales tax, federal sales tax,...)',
              type: 'CHAR(4)',
            },
            {
              name: 'TAXM1',
              description: 'Classificação fiscal do material',
              type: 'CHAR(1)',
            },
            {
              name: 'TATY2',
              description: 'Ctg.imposto (sales tax, federal sales tax,...)',
              type: 'CHAR(4)',
            },
            {
              name: 'TAXM2',
              description: 'Classificação fiscal do material',
              type: 'CHAR(1)',
            },
            {
              name: 'TATY3',
              description: 'Ctg.imposto (sales tax, federal sales tax,...)',
              type: 'CHAR(4)',
            },
            {
              name: 'TAXM3',
              description: 'Classificação fiscal do material',
              type: 'CHAR(1)',
            },
            {
              name: 'TATY4',
              description: 'Ctg.imposto (sales tax, federal sales tax,...)',
              type: 'CHAR(4)',
            },
            {
              name: 'TAXM4',
              description: 'Classificação fiscal do material',
              type: 'CHAR(1)',
            },
            {
              name: 'TATY5',
              description: 'Ctg.imposto (sales tax, federal sales tax,...)',
              type: 'CHAR(4)',
            },
            {
              name: 'TAXM5',
              description: 'Classificação fiscal do material',
              type: 'CHAR(1)',
            },
            {
              name: 'TATY6',
              description: 'Ctg.imposto (sales tax, federal sales tax,...)',
              type: 'CHAR(4)',
            },
            {
              name: 'TAXM6',
              description: 'Classificação fiscal do material',
              type: 'CHAR(1)',
            },
            {
              name: 'TATY7',
              description: 'Ctg.imposto (sales tax, federal sales tax,...)',
              type: 'CHAR(4)',
            },
            {
              name: 'TAXM7',
              description: 'Classificação fiscal do material',
              type: 'CHAR(1)',
            },
            {
              name: 'TATY8',
              description: 'Ctg.imposto (sales tax, federal sales tax,...)',
              type: 'CHAR(4)',
            },
            {
              name: 'TAXM8',
              description: 'Classificação fiscal do material',
              type: 'CHAR(1)',
            },
            {
              name: 'TATY9',
              description: 'Ctg.imposto (sales tax, federal sales tax,...)',
              type: 'CHAR(4)',
            },
            {
              name: 'TAXM9',
              description: 'Classificação fiscal do material',
              type: 'CHAR(1)',
            },
            {
              name: 'TAXIM',
              description: 'Indicador de imposto material (compras)',
              type: 'CHAR(1)',
            },
          ],
          children: [],
        },
        {
          segment: 'E1MTXHM',
          description: 'Master material texto descritivo cabeçalho',
          max: 9999,
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
              description: 'Nome',
              type: 'CHAR(70)',
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
              name: 'SPRAS_ISO',
              description: 'Código de idiomas SAP de 2 dígitos',
              type: 'CHAR(2)',
            },
            {
              name: 'TDNAME_S4',
              description: 'Nome',
              type: 'CHAR(70)',
            },
          ],
          children: [
            {
              segment: 'E1MTXLM',
              description: 'Master material texto descritivo linha',
              max: 9999,
              fields: [
                {
                  name: 'MSGFN',
                  description: 'Função',
                  type: 'CHAR(3)',
                },
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
              children: [],
            },
          ],
        },
        {
          segment: 'E1CUCFG',
          description: 'CU: dados de configuração',
          max: 10000,
          fields: [
            {
              name: 'POSEX',
              description: 'Campo de caracteres de comprimento 6',
              type: 'CHAR(6)',
            },
            {
              name: 'CONFIG_ID',
              description: 'Campo de caracteres de comprimento 6',
              type: 'CHAR(6)',
            },
            {
              name: 'ROOT_ID',
              description: 'Campo de caracteres do comprimento 8',
              type: 'CHAR(8)',
            },
            {
              name: 'SCE',
              description: 'CU: apenas informação da configuração transferida pelo SCE',
              type: 'CHAR(1)',
            },
            {
              name: 'KBNAME',
              description: 'Objeto da base de conhecimentos',
              type: 'CHAR(30)',
            },
            {
              name: 'KBVERSION',
              description: 'Versão de tempo de execução de uma base de conhecimentos SCE',
              type: 'CHAR(30)',
            },
            {
              name: 'COMPLETE',
              description: 'Código geral',
              type: 'CHAR(1)',
            },
            {
              name: 'CONSISTENT',
              description: 'Código geral',
              type: 'CHAR(1)',
            },
            {
              name: 'CFGINFO',
              description: 'CU: BLOB de uma configuração (SCE)',
              type: 'CHAR(250)',
            },
            {
              name: 'KBPROFILE',
              description: 'Perfil de base de conhecimentos',
              type: 'CHAR(30)',
            },
            {
              name: 'KBLANGUAGE',
              description: 'Idioma de uma configuração',
              type: 'LANG(1)',
            },
            {
              name: 'CBASE_ID',
              description: 'Nº instância (persistente)',
              type: 'CHAR(32)',
            },
            {
              name: 'CBASE_ID_TYPE',
              description: 'Tipo de nº de instância (persistente)',
              type: 'CHAR(1)',
            },
          ],
          children: [
            {
              segment: 'E1CUINS',
              description: 'CU: dados de instância',
              max: 1000,
              fields: [
                {
                  name: 'INST_ID',
                  description: 'Campo de caracteres do comprimento 8',
                  type: 'CHAR(8)',
                },
                {
                  name: 'OBJ_TYPE',
                  description: 'Campo de caracteres do comprimento 10',
                  type: 'CHAR(10)',
                },
                {
                  name: 'CLASS_TYPE',
                  description: 'Campo de 3 bytes de comprimento',
                  type: 'CHAR(3)',
                },
                {
                  name: 'OBJ_KEY',
                  description: 'Comentário',
                  type: 'CHAR(50)',
                },
                {
                  name: 'OBJ_TXT',
                  description: 'Campo de caracteres de comprimento 70',
                  type: 'CHAR(70)',
                },
                {
                  name: 'QUANTITY',
                  description: 'Caractere 15',
                  type: 'CHAR(15)',
                },
                {
                  name: 'AUTHOR',
                  description: 'Declaração foi derivada',
                  type: 'CHAR(1)',
                },
                {
                  name: 'QUANTITY_UNIT',
                  description: 'Unidade de medida',
                  type: 'UNIT(3)',
                },
                {
                  name: 'COMPLETE',
                  description: 'Código geral',
                  type: 'CHAR(1)',
                },
                {
                  name: 'CONSISTENT',
                  description: 'Código geral',
                  type: 'CHAR(1)',
                },
                {
                  name: 'OBJECT_GUID',
                  description: 'GUID para afirmação TYPE_OF da instância',
                  type: 'CHAR(32)',
                },
                {
                  name: 'PERSIST_ID',
                  description: 'Nº instância (persistente)',
                  type: 'CHAR(32)',
                },
                {
                  name: 'PERSIST_ID_TYPE',
                  description: 'Tipo de nº de instância (persistente)',
                  type: 'CHAR(1)',
                },
              ],
              children: [],
            },
            {
              segment: 'E1CUVAL',
              description: 'CU: avaliação de características',
              max: 100000,
              fields: [
                {
                  name: 'INST_ID',
                  description: 'Campo de caracteres do comprimento 8',
                  type: 'CHAR(8)',
                },
                {
                  name: 'CHARC',
                  description: '',
                  type: 'CHAR(40)',
                },
                {
                  name: 'CHARC_TXT',
                  description: 'Campo de caracteres de comprimento 70',
                  type: 'CHAR(70)',
                },
                {
                  name: 'VALUE',
                  description: '',
                  type: 'CHAR(40)',
                },
                {
                  name: 'VALUE_TXT',
                  description: 'Campo de caracteres de comprimento 70',
                  type: 'CHAR(70)',
                },
                {
                  name: 'AUTHOR',
                  description: 'Declaração foi derivada',
                  type: 'CHAR(1)',
                },
                {
                  name: 'VALUE_TO',
                  description: 'Valor de uma característica',
                  type: 'CHAR(40)',
                },
                {
                  name: 'VALCODE',
                  description: 'Categoria de valor: limites de intervalo - valor individual',
                  type: 'CHAR(1)',
                },
              ],
              children: [],
            },
            {
              segment: 'E1CUCOM',
              description: 'Mestre perfil de configuração parâmetros de configuaração',
              max: 1000,
              fields: [
                {
                  name: 'MSGFN',
                  description: 'Função',
                  type: 'CHAR(3)',
                },
                {
                  name: 'C_PROFILE',
                  description: 'Nome perfil de configuração',
                  type: 'CHAR(30)',
                },
                {
                  name: 'CLASSTYPE',
                  description: 'Tipo de classe',
                  type: 'CHAR(3)',
                },
                {
                  name: 'ORGAREAS',
                  description: 'Visão da aplicação',
                  type: 'CHAR(10)',
                },
                {
                  name: 'STATUS',
                  description: 'Status perfil de configuração',
                  type: 'CHAR(1)',
                },
                {
                  name: 'BOMAPPL',
                  description: 'Aplicação',
                  type: 'CHAR(4)',
                },
                {
                  name: 'FLAVAILCH',
                  description: 'Verificação de disponibilidade',
                  type: 'CHAR(1)',
                },
                {
                  name: 'BOMEXPL',
                  description: 'Resultado da explosão da lista técnica',
                  type: 'CHAR(1)',
                },
                {
                  name: 'TASKLEXPL',
                  description: 'Resultado explosão de lista de tarefas',
                  type: 'CHAR(1)',
                },
                {
                  name: 'INITSCREEN',
                  description: '1ª tela da configuração',
                  type: 'CHAR(1)',
                },
                {
                  name: 'FLASSEMBLY',
                  description: 'Síntese de conjunto da lista técnica',
                  type: 'CHAR(1)',
                },
                {
                  name: 'FLRESULT',
                  description: 'Resultado da lista técnica configurada',
                  type: 'CHAR(1)',
                },
                {
                  name: 'FLMDATA',
                  description: 'Exibição dos dados mestre da lista técnica',
                  type: 'CHAR(1)',
                },
                {
                  name: 'FLCASONLY',
                  description: 'só conjuntos configuráveis',
                  type: 'CHAR(1)',
                },
                {
                  name: 'FLMANCHANG',
                  description: 'Permitido modificação manual de componentes',
                  type: 'CHAR(1)',
                },
                {
                  name: 'FLHOLDBOM',
                  description: 'Fixar automaticamente',
                  type: 'CHAR(1)',
                },
                {
                  name: 'FLDELETE',
                  description: 'Código de eliminação',
                  type: 'CHAR(1)',
                },
                {
                  name: 'DESIGN',
                  description: 'Nome design',
                  type: 'CHAR(18)',
                },
                {
                  name: 'NEUTR',
                  description: 'Processamento independente de idioma',
                  type: 'CHAR(1)',
                },
                {
                  name: 'CHAR_VALU',
                  description: 'Definição de idioma para características e valores',
                  type: 'CHAR(1)',
                },
                {
                  name: 'A_LAISO',
                  description: 'Código de idiomas SAP de 2 dígitos',
                  type: 'CHAR(2)',
                },
                {
                  name: 'SCOPE_CHAR',
                  description: 'Restrição de características requeridas e opcionais',
                  type: 'CHAR(1)',
                },
                {
                  name: 'SCOPE_VALU',
                  description: 'Restrição de características com ou sem valores atribuídos',
                  type: 'CHAR(1)',
                },
                {
                  name: 'FL_EXCLUDE',
                  description: 'Exibir características e valores excluídos do processamento',
                  type: 'CHAR(1)',
                },
                {
                  name: 'DISPLAY',
                  description: 'Representação especificações / valores / edição de páginas',
                  type: 'CHAR(1)',
                },
                {
                  name: 'PRICING',
                  description: 'Determinação de preço por solicitação/permanente',
                  type: 'CHAR(1)',
                },
                {
                  name: 'CONFIGUR',
                  description: 'Configurador ativo permanentem./quando solicitado/em Enter',
                  type: 'CHAR(1)',
                },
                {
                  name: 'DEFVALU_DE',
                  description: 'Valores propostos retirados / entrados',
                  type: 'CHAR(1)',
                },
                {
                  name: 'FL_MARK',
                  description: 'Só entradas marcadas',
                  type: 'CHAR(1)',
                },
                {
                  name: 'DEFVALU_CC',
                  description: 'Transferir valores propostos / são confirmados',
                  type: 'CHAR(1)',
                },
                {
                  name: 'TYPM_SEL',
                  description: 'Determinação de tipos de seleção em solicitação / permanente',
                  type: 'CHAR(1)',
                },
                {
                  name: 'TYPM_STRA',
                  description: 'Determinação tipos estratégia configuração parcial/completa',
                  type: 'CHAR(1)',
                },
                {
                  name: 'FL_SC_CHAR',
                  description: 'Características',
                  type: 'CHAR(1)',
                },
                {
                  name: 'FL_SC_DEP',
                  description: 'Exibição com dependência de objetos',
                  type: 'CHAR(1)',
                },
                {
                  name: 'FL_SC_KN',
                  description: 'Representação de nó',
                  type: 'CHAR(1)',
                },
                {
                  name: 'FL_SC_CMPF',
                  description: 'Exibição de todos os componentes',
                  type: 'CHAR(1)',
                },
                {
                  name: 'MULTIL_STRU',
                  description: 'Hierarquia de decomposição explosão multinível/estrutura',
                  type: 'CHAR(1)',
                },
                {
                  name: 'FL_DPSEU',
                  description: 'Considerar chave suprimento especial',
                  type: 'CHAR(1)',
                },
                {
                  name: 'OB_FIX',
                  description: 'Fixação entrada / TopDown / BottomUp',
                  type: 'CHAR(1)',
                },
                {
                  name: 'OB_INST',
                  description: 'Instanciação entrada / TopDown / BottomUp',
                  type: 'CHAR(1)',
                },
                {
                  name: 'FL_EOASL',
                  description: 'Arquivo orientado por resultados',
                  type: 'CHAR(1)',
                },
                {
                  name: 'FL_SAASL',
                  description: 'Atualiz.permitida na ordem',
                  type: 'CHAR(1)',
                },
                {
                  name: 'FL_OBJ_MAT',
                  description: "Ctg.objeto 'material'",
                  type: 'CHAR(1)',
                },
                {
                  name: 'FL_OBJ_DOC',
                  description: "Ctg.objeto 'documento'",
                  type: 'CHAR(1)',
                },
                {
                  name: 'FL_OBJ_CLS',
                  description: "Ctg.objeto 'classe'",
                  type: 'CHAR(1)',
                },
                {
                  name: 'FL_OBJ_TXT',
                  description: "Ctg.objeto 'texto'",
                  type: 'CHAR(1)',
                },
                {
                  name: 'FL_SDREL',
                  description: 'Relevante para SD',
                  type: 'CHAR(1)',
                },
                {
                  name: 'FL_KOREL',
                  description: 'Relevante p/construção',
                  type: 'CHAR(1)',
                },
                {
                  name: 'FL_FEREL',
                  description: 'Relev.p/produção',
                  type: 'CHAR(1)',
                },
                {
                  name: 'FL_INREL',
                  description: 'Relev.p/manutenção',
                  type: 'CHAR(1)',
                },
                {
                  name: 'FL_KAREL',
                  description: 'Relev.p/cálc.preço',
                  type: 'CHAR(1)',
                },
                {
                  name: 'POSTYPEN',
                  description: 'Ctgs.item (lista técnica)',
                  type: 'CHAR(20)',
                },
                {
                  name: 'SORTF1',
                  description: 'Critério de ordenação',
                  type: 'CHAR(10)',
                },
                {
                  name: 'SORTF2',
                  description: 'Critério de ordenação',
                  type: 'CHAR(10)',
                },
                {
                  name: 'SORTF3',
                  description: 'Critério de ordenação',
                  type: 'CHAR(10)',
                },
                {
                  name: 'SORTF4',
                  description: 'Critério de ordenação',
                  type: 'CHAR(10)',
                },
                {
                  name: 'SORTF5',
                  description: 'Critério de ordenação',
                  type: 'CHAR(10)',
                },
                {
                  name: 'CLASSF1',
                  description: 'Filtro de classes',
                  type: 'CHAR(3)',
                },
                {
                  name: 'CLASSF2',
                  description: 'Filtro de classes',
                  type: 'CHAR(3)',
                },
                {
                  name: 'CLASSF3',
                  description: 'Filtro de classes',
                  type: 'CHAR(3)',
                },
                {
                  name: 'CLASSF4',
                  description: 'Filtro de classes',
                  type: 'CHAR(3)',
                },
                {
                  name: 'CLASSF5',
                  description: 'Filtro de classes',
                  type: 'CHAR(3)',
                },
                {
                  name: 'PRIO',
                  description: 'Prioridade perfil de configuração',
                  type: 'NUMC(2)',
                },
                {
                  name: 'PRSTL',
                  description: 'Lista técnica de projetos',
                  type: 'CHAR(1)',
                },
                {
                  name: 'UMBEW',
                  description: 'Características não avaliadas',
                  type: 'CHAR(1)',
                },
                {
                  name: 'FLBROWSER',
                  description: 'Browser de configuração',
                  type: 'CHAR(1)',
                },
                {
                  name: 'FL_PROF_OBOM',
                  description: 'Perfil da lista técnica de ordem de cliente',
                  type: 'CHAR(1)',
                },
              ],
              children: [],
            },
          ],
        },
      ],
    },
    {
      segment: 'E1UPSLINK',
      description: 'Referência de objeto a UPS superior',
      max: 1,
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
      children: [],
    },
  ],
};
