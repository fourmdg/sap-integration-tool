/**
 * Dados do IDoc DEBMAS - Mestre de Clientes
 * Gerado automaticamente de idocs/customers.html
 */
import type { IdocData, IdocTreeNode, SegmentDefinition } from '@core/types';

export const IDOC_TREE: IdocTreeNode[] = [
  {
    segment: 'E1KNA1M',
    max: 1,
    children: [
      {
        segment: 'E1KNA11',
        max: 1,
        children: [],
      },
      {
        segment: 'E1KNA1H',
        max: 9999999999,
        children: [
          {
            segment: 'E1KNA1L',
            max: 9999999999,
            children: [],
          },
        ],
      },
      {
        segment: 'E1KNVVM',
        max: 9999,
        children: [
          {
            segment: 'E1KNVPM',
            max: 9999,
            children: [],
          },
          {
            segment: 'E1KNVDM',
            max: 9999,
            children: [],
          },
          {
            segment: 'E1KNVIM',
            max: 9999,
            children: [],
          },
          {
            segment: 'E1KNVLM',
            max: 9999,
            children: [],
          },
          {
            segment: 'E1KNVVH',
            max: 9999999999,
            children: [
              {
                segment: 'E1KNVVL',
                max: 9999999999,
                children: [],
              },
            ],
          },
        ],
      },
      {
        segment: 'E1KNB1M',
        max: 9999,
        children: [
          {
            segment: 'E1KNBWM',
            max: 9999,
            children: [],
          },
          {
            segment: 'E1KNB5M',
            max: 9999,
            children: [],
          },
          {
            segment: 'E1KNB1H',
            max: 9999999999,
            children: [
              {
                segment: 'E1KNB1L',
                max: 9999999999,
                children: [],
              },
            ],
          },
        ],
      },
      {
        segment: 'E1KNBKM',
        max: 9999,
        children: [],
      },
      {
        segment: 'E1KNVAM',
        max: 9999,
        children: [],
      },
      {
        segment: 'E1WRF12',
        max: 9999,
        children: [],
      },
      {
        segment: 'E1WRF4M',
        max: 9999,
        children: [],
      },
      {
        segment: 'E1KNVKM',
        max: 9999,
        children: [
          {
            segment: 'E1KNVKH',
            max: 9999999999,
            children: [
              {
                segment: 'E1KNVKL',
                max: 9999999999,
                children: [],
              },
            ],
          },
        ],
      },
      {
        segment: 'E1KNEXM',
        max: 9999999999,
        children: [],
      },
      {
        segment: 'E1KNASM',
        max: 9999999999,
        children: [],
      },
      {
        segment: 'E1KNKAM',
        max: 1,
        children: [],
      },
      {
        segment: 'E1KNATM',
        max: 9999,
        children: [],
      },
      {
        segment: 'E1KNKKM',
        max: 9999,
        children: [
          {
            segment: 'E1KNKKH',
            max: 9999999999,
            children: [
              {
                segment: 'E1KNKKL',
                max: 9999999999,
                children: [],
              },
            ],
          },
        ],
      },
      {
        segment: 'E1VCKUN',
        max: 9999999999,
        children: [],
      },
      {
        segment: 'E1WRF1M',
        max: 9999,
        children: [],
      },
      {
        segment: 'E1WRF3M',
        max: 9999,
        children: [],
      },
      {
        segment: 'E1WRF5M',
        max: 9999,
        children: [],
      },
      {
        segment: 'E1WRF6M',
        max: 9999,
        children: [],
      },
      {
        segment: 'E1T023W',
        max: 9999,
        children: [],
      },
      {
        segment: 'E1T023X',
        max: 9999,
        children: [],
      },
    ],
  },
];

export const SEGMENT_DEFINITIONS: Record<string, SegmentDefinition> = {
  E1KNA1M: {
    description: 'IDoc mestre de clientes dados básicos (KNA1)',
    fields: [
      {
        name: 'MSGFN',
        description: 'Função',
        type: 'CHAR(3)',
      },
      {
        name: 'KUNNR',
        description: 'Nº cliente',
        type: 'CHAR(10)',
      },
      {
        name: 'ANRED',
        description: 'Forma de tratamento',
        type: 'CHAR(15)',
      },
      {
        name: 'AUFSD',
        description: 'Bloqueio de ordem centralizado para cliente',
        type: 'CHAR(2)',
      },
      {
        name: 'BAHNE',
        description: 'Estação ferroviária para expedição por expresso',
        type: 'CHAR(25)',
      },
      {
        name: 'BAHNS',
        description: 'Estação ferroviária',
        type: 'CHAR(25)',
      },
      {
        name: 'BBBNR',
        description: 'Nº global de localização (parte 1)',
        type: 'NUMC(7)',
      },
      {
        name: 'BBSNR',
        description: 'Número global de localização (parte 2)',
        type: 'NUMC(5)',
      },
      {
        name: 'BEGRU',
        description: 'Grupo autorizações',
        type: 'CHAR(4)',
      },
      {
        name: 'BRSCH',
        description: 'Chave do setor industrial',
        type: 'CHAR(4)',
      },
      {
        name: 'BUBKZ',
        description: 'Dígito de controle da matrícula internacional da empresa',
        type: 'NUMC(1)',
      },
      {
        name: 'DATLT',
        description: 'Nº linha de transmissão de dados',
        type: 'CHAR(14)',
      },
      {
        name: 'FAKSD',
        description: 'Bloqueio centralizado de faturamento para cliente',
        type: 'CHAR(2)',
      },
      {
        name: 'FISKN',
        description: 'Nº conta do registro mestre com o endereço fiscal',
        type: 'CHAR(10)',
      },
      {
        name: 'KNRZA',
        description: 'Nº conta de um pagador divergente',
        type: 'CHAR(10)',
      },
      {
        name: 'KONZS',
        description: 'Chave do grupo de empresas',
        type: 'CHAR(10)',
      },
      {
        name: 'KTOKD',
        description: 'Grupo de contas do cliente',
        type: 'CHAR(4)',
      },
      {
        name: 'KUKLA',
        description: 'Classificação de clientes',
        type: 'CHAR(2)',
      },
      {
        name: 'LAND1',
        description: 'Chave do país',
        type: 'CHAR(3)',
      },
      {
        name: 'LIFNR',
        description: 'Nº conta do fornecedor',
        type: 'CHAR(10)',
      },
      {
        name: 'LIFSD',
        description: 'Bloqueio de remessa centralizado para cliente',
        type: 'CHAR(2)',
      },
      {
        name: 'LOCCO',
        description: 'Coordenadas do local',
        type: 'CHAR(10)',
      },
      {
        name: 'LOEVM',
        description: 'Marcação central para eliminação do registro mestre',
        type: 'CHAR(1)',
      },
      {
        name: 'NAME1',
        description: 'Nome 1',
        type: 'CHAR(35)',
      },
      {
        name: 'NAME2',
        description: 'Nome 2',
        type: 'CHAR(35)',
      },
      {
        name: 'NAME3',
        description: 'Nome 3',
        type: 'CHAR(35)',
      },
      {
        name: 'NAME4',
        description: 'Nome 4',
        type: 'CHAR(35)',
      },
      {
        name: 'NIELS',
        description: 'Zona Nielsen',
        type: 'CHAR(2)',
      },
      {
        name: 'ORT01',
        description: 'Local',
        type: 'CHAR(35)',
      },
      {
        name: 'ORT02',
        description: 'Bairro',
        type: 'CHAR(35)',
      },
      {
        name: 'PFACH',
        description: 'CxPostal',
        type: 'CHAR(10)',
      },
      {
        name: 'PSTL2',
        description: 'Código postal da cx.postal',
        type: 'CHAR(10)',
      },
      {
        name: 'PSTLZ',
        description: 'Código postal',
        type: 'CHAR(10)',
      },
      {
        name: 'REGIO',
        description: 'Região (estado federal, estado federado, província, condado)',
        type: 'CHAR(3)',
      },
      {
        name: 'COUNC',
        description: 'Código de distrito',
        type: 'CHAR(3)',
      },
      {
        name: 'CITYC',
        description: 'Código da cidade',
        type: 'CHAR(4)',
      },
      {
        name: 'RPMKR',
        description: 'Mercado regional',
        type: 'CHAR(5)',
      },
      {
        name: 'SORTL',
        description: 'Campo de seleção',
        type: 'CHAR(10)',
      },
      {
        name: 'SPERR',
        description: 'Bloqueio central contabilização',
        type: 'CHAR(1)',
      },
      {
        name: 'SPRAS',
        description: 'Código de idioma',
        type: 'LANG(1)',
      },
      {
        name: 'STCD1',
        description: 'CNPJ',
        type: 'CHAR(16)',
      },
      {
        name: 'STCD2',
        description: 'CPF',
        type: 'CHAR(11)',
      },
      {
        name: 'STKZA',
        description: 'Código:parceiro de negócios sujeito à taxa compensatória?',
        type: 'CHAR(1)',
      },
      {
        name: 'STKZU',
        description: 'Sujeito a IVA',
        type: 'CHAR(1)',
      },
      {
        name: 'STRAS',
        description: 'Rua e nº',
        type: 'CHAR(35)',
      },
      {
        name: 'TELBX',
        description: 'Nº telebox',
        type: 'CHAR(15)',
      },
      {
        name: 'TELF1',
        description: '1º Nº telefone',
        type: 'CHAR(16)',
      },
      {
        name: 'TELF2',
        description: '2º Nº telefone',
        type: 'CHAR(16)',
      },
      {
        name: 'TELFX',
        description: 'Nº telefax',
        type: 'CHAR(31)',
      },
      {
        name: 'TELTX',
        description: 'Nº teletex',
        type: 'CHAR(30)',
      },
      {
        name: 'TELX1',
        description: 'Nº telex',
        type: 'CHAR(30)',
      },
      {
        name: 'LZONE',
        description: 'Zona de transporte para a qual ou da qual é fornecido',
        type: 'CHAR(10)',
      },
      {
        name: 'XZEMP',
        description: 'Código: permitido recebedor de pagamento divergente no doc.?',
        type: 'CHAR(1)',
      },
      {
        name: 'VBUND',
        description: 'Nº sociedade parceira',
        type: 'CHAR(6)',
      },
      {
        name: 'STCEG',
        description: 'Nº de identificação fiscal de IVA',
        type: 'CHAR(20)',
      },
      {
        name: 'GFORM',
        description: 'Tipo de sociedade',
        type: 'CHAR(2)',
      },
      {
        name: 'BRAN1',
        description: 'Code setor industrial 1',
        type: 'CHAR(10)',
      },
      {
        name: 'BRAN2',
        description: 'Code setor industrial 2',
        type: 'CHAR(10)',
      },
      {
        name: 'BRAN3',
        description: 'Code setor industrial 3',
        type: 'CHAR(10)',
      },
      {
        name: 'BRAN4',
        description: 'Code setor industrial 4',
        type: 'CHAR(10)',
      },
      {
        name: 'BRAN5',
        description: 'Code setor industrial 5',
        type: 'CHAR(10)',
      },
      {
        name: 'UMJAH',
        description: 'Ano para o qual é indicado o volume de vendas',
        type: 'NUMC(4)',
      },
      {
        name: 'UWAER',
        description: 'Moeda do faturamento',
        type: 'CUKY(5)',
      },
      {
        name: 'JMZAH',
        description: 'Número de empregados no ano',
        type: 'NUMC(6)',
      },
      {
        name: 'JMJAH',
        description: 'Ano para o qual é indicado o número de funcionários',
        type: 'NUMC(4)',
      },
      {
        name: 'KATR1',
        description: 'Atributo 1',
        type: 'CHAR(2)',
      },
      {
        name: 'KATR2',
        description: 'Atributo 2',
        type: 'CHAR(2)',
      },
      {
        name: 'KATR3',
        description: 'Atributo 3',
        type: 'CHAR(2)',
      },
      {
        name: 'KATR4',
        description: 'Atributo 4',
        type: 'CHAR(2)',
      },
      {
        name: 'KATR5',
        description: 'Atributo 5',
        type: 'CHAR(2)',
      },
      {
        name: 'KATR6',
        description: 'Atributo 6',
        type: 'CHAR(3)',
      },
      {
        name: 'KATR7',
        description: 'Atributo 7',
        type: 'CHAR(3)',
      },
      {
        name: 'KATR8',
        description: 'Atributo 8',
        type: 'CHAR(3)',
      },
      {
        name: 'KATR9',
        description: 'Atributo 9',
        type: 'CHAR(3)',
      },
      {
        name: 'KATR10',
        description: 'Atributo 10',
        type: 'CHAR(3)',
      },
      {
        name: 'STKZN',
        description: 'Pessoa física',
        type: 'CHAR(1)',
      },
      {
        name: 'UMSA1',
        description: 'Campo de comprimento 16',
        type: 'CHAR(16)',
      },
      {
        name: 'TXJCD',
        description: 'Domicílio fiscal',
        type: 'CHAR(15)',
      },
      {
        name: 'PERIV',
        description: 'Variante de exercício',
        type: 'CHAR(2)',
      },
      {
        name: 'KTOCD',
        description: 'Grupo de contas de referência p/conta CD (clientes)',
        type: 'CHAR(4)',
      },
      {
        name: 'PFORT',
        description: 'Localidade da caixa postal',
        type: 'CHAR(35)',
      },
      {
        name: 'DTAMS',
        description: 'Chave de notificação para intercâmbio de suporte de dados',
        type: 'CHAR(1)',
      },
      {
        name: 'DTAWS',
        description: 'Chave de instruções para intercâmbio de suporte de dados',
        type: 'CHAR(2)',
      },
      {
        name: 'HZUOR',
        description: 'Atribuição hierarquia (batch input)',
        type: 'CHAR(2)',
      },
      {
        name: 'CIVVE',
        description: 'Código: sobretudo utilização civil',
        type: 'CHAR(1)',
      },
      {
        name: 'MILVE',
        description: 'Código: sobretudo utilização militar',
        type: 'CHAR(1)',
      },
      {
        name: 'SPRAS_ISO',
        description: 'Código de idiomas SAP de 2 dígitos',
        type: 'CHAR(2)',
      },
      {
        name: 'FITYP',
        description: 'Tipo de imposto',
        type: 'CHAR(2)',
      },
      {
        name: 'STCDT',
        description: 'Tipo nº fiscal',
        type: 'CHAR(2)',
      },
      {
        name: 'STCD3',
        description: 'INSCR. ESTADUAL',
        type: 'CHAR(18)',
      },
      {
        name: 'STCD4',
        description: 'Nº identificação fiscal 4',
        type: 'CHAR(18)',
      },
      {
        name: 'XICMS',
        description: 'Código: cliente está isento de ICMS',
        type: 'CHAR(1)',
      },
      {
        name: 'XXIPI',
        description: 'Código: cliente está isento de IPI',
        type: 'CHAR(1)',
      },
      {
        name: 'XSUBT',
        description: 'Grupo clientes p/cálc.da Substituição Tributária - antigo!!!',
        type: 'CHAR(1)',
      },
      {
        name: 'CFOPC',
        description: 'Categoria CFOP do cliente',
        type: 'CHAR(2)',
      },
      {
        name: 'TXLW1',
        description: 'Direito fiscal: ICMS',
        type: 'CHAR(3)',
      },
      {
        name: 'TXLW2',
        description: 'Direito fiscal: IPI',
        type: 'CHAR(3)',
      },
      {
        name: 'CCC01',
        description: 'Código: guerra com as químicas/biológicas p/controle legal',
        type: 'CHAR(1)',
      },
      {
        name: 'CCC02',
        description: 'Código: não proliferação de tecnologia nuclear p/cntrl.legal',
        type: 'CHAR(1)',
      },
      {
        name: 'CCC03',
        description: 'Código: seguranção nacional para controle legal',
        type: 'CHAR(1)',
      },
      {
        name: 'CCC04',
        description: 'Código: tecnologia de mísseis para controle legal',
        type: 'CHAR(1)',
      },
      {
        name: 'CASSD',
        description: 'Bloqueio de contatos central para cliente',
        type: 'CHAR(2)',
      },
      {
        name: 'KDKG1',
        description: 'Clientes grupo de condições 1',
        type: 'CHAR(2)',
      },
      {
        name: 'KDKG2',
        description: 'Clientes grupo de condições 2',
        type: 'CHAR(2)',
      },
      {
        name: 'KDKG3',
        description: 'Clientes grupo de condições 3',
        type: 'CHAR(2)',
      },
      {
        name: 'KDKG4',
        description: 'Clientes grupo de condições 4',
        type: 'CHAR(2)',
      },
      {
        name: 'KDKG5',
        description: 'Clientes grupo de condições 5',
        type: 'CHAR(2)',
      },
      {
        name: 'NODEL',
        description: 'Bloqueio central de eliminação para registro mestre',
        type: 'CHAR(1)',
      },
      {
        name: 'XSUB2',
        description: 'Grupo cliente de cálculo de substituição fiscal',
        type: 'CHAR(3)',
      },
      {
        name: 'WERKS',
        description: 'Centro',
        type: 'CHAR(4)',
      },
    ],
  },
  E1KNA11: {
    description: 'Mestre de clientes: campos gerais adicionais (KNA1)',
    fields: [
      {
        name: 'KNURL',
        description: 'Uniform resource locator',
        type: 'CHAR(132)',
      },
      {
        name: 'J_1KFREPRE',
        description: 'Nome do representante',
        type: 'CHAR(10)',
      },
      {
        name: 'J_1KFTBUS',
        description: 'Ctg.transação',
        type: 'CHAR(30)',
      },
      {
        name: 'J_1KFTIND',
        description: 'Tipo de indústria',
        type: 'CHAR(30)',
      },
      {
        name: 'PSOIS',
        description: 'Procedimento preliminar conta de terceiros',
        type: 'CHAR(20)',
      },
      {
        name: 'PSON1',
        description: 'Nome 1',
        type: 'CHAR(35)',
      },
      {
        name: 'PSON2',
        description: 'Nome 1',
        type: 'CHAR(35)',
      },
      {
        name: 'PSON3',
        description: 'Nome 1',
        type: 'CHAR(35)',
      },
      {
        name: 'PSOVN',
        description: '1º nome',
        type: 'CHAR(35)',
      },
      {
        name: 'PSOTL',
        description: 'Título',
        type: 'CHAR(20)',
      },
      {
        name: 'PSOO1',
        description: 'Descrição',
        type: 'CHAR(50)',
      },
      {
        name: 'PSOO2',
        description: 'Descrição',
        type: 'CHAR(50)',
      },
      {
        name: 'PSOO3',
        description: 'Descrição',
        type: 'CHAR(50)',
      },
      {
        name: 'PSOO4',
        description: 'Descrição',
        type: 'CHAR(50)',
      },
      {
        name: 'PSOO5',
        description: 'Descrição',
        type: 'CHAR(50)',
      },
      {
        name: 'STCD5',
        description: 'Número identificação fiscal 5',
        type: 'CHAR(60)',
      },
      {
        name: 'SUFRAMA',
        description: 'Código Suframa',
        type: 'CHAR(9)',
      },
      {
        name: 'RG',
        description: 'Número RL',
        type: 'CHAR(11)',
      },
      {
        name: 'EXP',
        description: 'Emitido por',
        type: 'CHAR(3)',
      },
      {
        name: 'UF',
        description: 'Estado',
        type: 'CHAR(2)',
      },
      {
        name: 'RGDATE',
        description: 'Data de emissão RN',
        type: 'DATS(8)',
      },
      {
        name: 'RIC',
        description: 'N° CAN',
        type: 'NUMC(11)',
      },
      {
        name: 'RNE',
        description: 'Registro nacional para estrangeiros',
        type: 'CHAR(10)',
      },
      {
        name: 'RNEDATE',
        description: 'Data de emissão do registro nacional para estrangeiros',
        type: 'DATS(8)',
      },
      {
        name: 'CNAE',
        description: 'CNAE fiscal',
        type: 'CHAR(7)',
      },
      {
        name: 'LEGALNAT',
        description: 'Característica legal',
        type: 'NUMC(4)',
      },
      {
        name: 'CRTN',
        description: 'Código de Regime Tributário - número',
        type: 'CHAR(1)',
      },
      {
        name: 'ICMSTAXPAY',
        description: 'Contribuinte ICMS',
        type: 'CHAR(2)',
      },
      {
        name: 'INDTYP',
        description: 'Tipo principal de setor industrial',
        type: 'CHAR(2)',
      },
      {
        name: 'TDT',
        description: 'Tipo de declaração de imposto',
        type: 'CHAR(2)',
      },
      {
        name: 'COMSIZE',
        description: 'Tamanho da empresa',
        type: 'CHAR(2)',
      },
      {
        name: 'DECREGPC',
        description: 'Regime de declaração para PIS/COFINS',
        type: 'CHAR(2)',
      },
      {
        name: 'CVP_XBLCK',
        description: 'Código para motivo de transação cumprido',
        type: 'CHAR(1)',
      },
    ],
  },
  E1KNA1H: {
    description: 'IDoc mestre de clientes dados básicos: textos, cabeçalho',
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
        name: 'TDSPRASISO',
        description: 'Código de idiomas SAP de 2 dígitos',
        type: 'CHAR(2)',
      },
    ],
  },
  E1KNA1L: {
    description: 'IDoc mestre de clientes dados básicos: linha de texto',
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
  },
  E1KNVVM: {
    description: 'IDoc mestre de clientes dados comerciais (KNVV)',
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
        name: 'LOEVM',
        description: 'Marcação p/eliminar - cliente (nível Vendas e Distribuição)',
        type: 'CHAR(1)',
      },
      {
        name: 'VERSG',
        description: 'Grupo estatístico cliente',
        type: 'CHAR(1)',
      },
      {
        name: 'AUFSD',
        description: 'Bloqueio de ordem para cliente (área de vendas)',
        type: 'CHAR(2)',
      },
      {
        name: 'KALKS',
        description: 'Esquema cliente (p/determinação do esquema de cálculo)',
        type: 'CHAR(1)',
      },
      {
        name: 'KDGRP',
        description: 'Grupo de clientes',
        type: 'CHAR(2)',
      },
      {
        name: 'BZIRK',
        description: 'Região de vendas',
        type: 'CHAR(6)',
      },
      {
        name: 'KONDA',
        description: 'Grupo de preço cliente',
        type: 'CHAR(2)',
      },
      {
        name: 'PLTYP',
        description: 'Categoria de lista de preços',
        type: 'CHAR(2)',
      },
      {
        name: 'AWAHR',
        description: 'Item: probabilidade de se transformar em ordem',
        type: 'NUMC(3)',
      },
      {
        name: 'INCO1',
        description: 'Incoterms parte 1',
        type: 'CHAR(3)',
      },
      {
        name: 'INCO2',
        description: 'Incoterms parte 2',
        type: 'CHAR(28)',
      },
      {
        name: 'LIFSD',
        description: 'Bloqueio de remessa p/cliente (Vendas e Distribuição)',
        type: 'CHAR(2)',
      },
      {
        name: 'AUTLF',
        description: 'Fornecimento completo por ordem: obrigatório ?',
        type: 'CHAR(1)',
      },
      {
        name: 'ANTLF',
        description: 'Número máximo de fornecimentos parciais permitidos por item',
        type: 'DEC(1)',
      },
      {
        name: 'KZTLF',
        description: 'Remessa parcial a nível de item',
        type: 'CHAR(1)',
      },
      {
        name: 'KZAZU',
        description: 'Código de agrupamento de ordens',
        type: 'CHAR(1)',
      },
      {
        name: 'CHSPL',
        description: 'Partição do lote de produção permitida',
        type: 'CHAR(1)',
      },
      {
        name: 'LPRIO',
        description: 'Prioridade de remessa',
        type: 'NUMC(2)',
      },
      {
        name: 'EIKTO',
        description: 'Nosso nº conta no cliente/fornecedore',
        type: 'CHAR(12)',
      },
      {
        name: 'VSBED',
        description: 'Condição de expedição',
        type: 'CHAR(2)',
      },
      {
        name: 'FAKSD',
        description: 'Bloqueio de faturamento para cliente (nível VD)',
        type: 'CHAR(2)',
      },
      {
        name: 'MRNKZ',
        description: 'Processamento manual posterior - fatura',
        type: 'CHAR(1)',
      },
      {
        name: 'PERFK',
        description: 'Datas do faturamento (identificação de calendário)',
        type: 'CHAR(2)',
      },
      {
        name: 'PERRL',
        description: 'Datas para listas de faturas (identificação de calendário)',
        type: 'CHAR(2)',
      },
      {
        name: 'WAERS',
        description: 'Moeda',
        type: 'CUKY(5)',
      },
      {
        name: 'KTGRD',
        description: 'Grupo de classificação contábil do cliente',
        type: 'CHAR(2)',
      },
      {
        name: 'ZTERM',
        description: 'Chave de condições de pagamento',
        type: 'CHAR(4)',
      },
      {
        name: 'VWERK',
        description: 'Centro fornecedor',
        type: 'CHAR(4)',
      },
      {
        name: 'VKGRP',
        description: 'Equipe de vendas',
        type: 'CHAR(3)',
      },
      {
        name: 'VKBUR',
        description: 'Escritório de vendas',
        type: 'CHAR(4)',
      },
      {
        name: 'VSORT',
        description: 'Proposta de itens',
        type: 'CHAR(10)',
      },
      {
        name: 'KVGR1',
        description: 'Grupo de clientes 1',
        type: 'CHAR(3)',
      },
      {
        name: 'KVGR2',
        description: 'Grupo de clientes 2',
        type: 'CHAR(3)',
      },
      {
        name: 'KVGR3',
        description: 'Grupo de clientes 3',
        type: 'CHAR(3)',
      },
      {
        name: 'KVGR4',
        description: 'Grupo de clientes 4',
        type: 'CHAR(3)',
      },
      {
        name: 'KVGR5',
        description: 'Grupo de clientes 5',
        type: 'CHAR(3)',
      },
      {
        name: 'BOKRE',
        description: 'Código: cliente pode receber bônus',
        type: 'CHAR(1)',
      },
      {
        name: 'KURST',
        description: 'Categoria da taxa de câmbio',
        type: 'CHAR(4)',
      },
      {
        name: 'PRFRE',
        description: "Código: 'relevante para determinação de preço'",
        type: 'CHAR(1)',
      },
      {
        name: 'KLABC',
        description: 'Classificação de clientes (análise ABC)',
        type: 'CHAR(2)',
      },
      {
        name: 'KABSS',
        description: 'Esquema de garantia cliente',
        type: 'CHAR(4)',
      },
      {
        name: 'KKBER',
        description: 'Área de controle de créditos',
        type: 'CHAR(4)',
      },
      {
        name: 'CASSD',
        description: 'Bloqueio de contatos para cliente(área de vendas e distrib.)',
        type: 'CHAR(2)',
      },
      {
        name: 'RDOFF',
        description: 'Desativar o arredondamento?',
        type: 'CHAR(1)',
      },
      {
        name: 'AGREL',
        description: 'Código: relevante para agenciamento',
        type: 'CHAR(1)',
      },
      {
        name: 'MEGRU',
        description: 'Grupo unidade medida',
        type: 'CHAR(4)',
      },
      {
        name: 'UEBTO',
        description: 'Limite de tolerância para fornecimento excessivo BTCI',
        type: 'CHAR(4)',
      },
      {
        name: 'UNTTO',
        description: 'Limite de tolerância p/fornecimento incompleto BTCI',
        type: 'CHAR(4)',
      },
      {
        name: 'UEBTK',
        description: 'Remessa excedentária permitida sem limites',
        type: 'CHAR(1)',
      },
      {
        name: 'PVKSM',
        description: 'Esquema cliente proposta prod.',
        type: 'CHAR(2)',
      },
      {
        name: 'PODKZ',
        description: 'Relevante p/processamto.CRR',
        type: 'CHAR(1)',
      },
      {
        name: 'PODTG',
        description: 'Intervalo p/confirmação do recebimento (BI)',
        type: 'CHAR(11)',
      },
      {
        name: 'BLIND',
        description: 'Código: estrutura do índice docs.ativa para pedidos',
        type: 'CHAR(1)',
      },
      {
        name: 'CARRIER_NOTIF',
        description: 'Mensagem para transportadora',
        type: 'CHAR(1)',
      },
      {
        name: 'CVP_XBLCK_V',
        description: 'Código para motivo de transação cumprido',
        type: 'CHAR(1)',
      },
      {
        name: 'INCOV',
        description: 'Versão incoterm',
        type: 'CHAR(4)',
      },
      {
        name: 'INCO2_L',
        description: 'Local incoterm 1',
        type: 'CHAR(70)',
      },
      {
        name: 'INCO3_L',
        description: 'Local incoterm 2',
        type: 'CHAR(70)',
      },
    ],
  },
  E1KNVPM: {
    description: 'IDoc mestre de clientes funções do parceiro (KNVP)',
    fields: [
      {
        name: 'MSGFN',
        description: 'Função',
        type: 'CHAR(3)',
      },
      {
        name: 'PARVW',
        description: 'Função do parceiro',
        type: 'CHAR(2)',
      },
      {
        name: 'KUNN2',
        description: 'Nº cliente do parceiro de negócios',
        type: 'CHAR(10)',
      },
      {
        name: 'DEFPA',
        description: 'Parceiro default',
        type: 'CHAR(1)',
      },
      {
        name: 'KNREF',
        description: 'Denom.parceiro negócios específica do cliente (cent., dpst.)',
        type: 'CHAR(30)',
      },
      {
        name: 'PARZA',
        description: 'Numerador de parceiros',
        type: 'NUMC(3)',
      },
    ],
  },
  E1KNVDM: {
    description: 'IDoc mestre de clientes solicitação de documentos (KNVD)',
    fields: [
      {
        name: 'MSGFN',
        description: 'Função',
        type: 'CHAR(3)',
      },
      {
        name: 'DOCTP',
        description: 'Tipo de mensagem',
        type: 'CHAR(4)',
      },
      {
        name: 'SPRAS',
        description: 'Idioma da mensagem',
        type: 'LANG(1)',
      },
      {
        name: 'DOANZ',
        description: 'Campo de 3 bytes de comprimento',
        type: 'CHAR(3)',
      },
      {
        name: 'DOVER',
        description: 'Momento do envio',
        type: 'CHAR(1)',
      },
      {
        name: 'NACHA',
        description: 'Meio de transmissão de uma mensagem',
        type: 'CHAR(1)',
      },
      {
        name: 'SPRAS_ISO',
        description: 'Código de idiomas SAP de 2 dígitos',
        type: 'CHAR(2)',
      },
    ],
  },
  E1KNVIM: {
    description: 'IDoc mestre de clientes indicadores de imposto (KNVI)',
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
        name: 'TATYP',
        description: 'Ctg.imposto (sales tax, federal sales tax,...)',
        type: 'CHAR(4)',
      },
      {
        name: 'TAXKD',
        description: 'Classificação fiscal do cliente',
        type: 'CHAR(1)',
      },
    ],
  },
  E1KNVLM: {
    description: 'IDoc mestre de clientes licenças (KNVL)',
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
        name: 'TATYP',
        description: 'Ctg.imposto (sales tax, federal sales tax,...)',
        type: 'CHAR(4)',
      },
      {
        name: 'LICNR',
        description: 'Nº licença (isenção de impostos)',
        type: 'CHAR(15)',
      },
      {
        name: 'DATAB',
        description: 'Data de início da validade',
        type: 'DATS(8)',
      },
      {
        name: 'DATBI',
        description: 'Data de validade final',
        type: 'DATS(8)',
      },
      {
        name: 'BELIC',
        description: 'Confirmação para licenças',
        type: 'CHAR(1)',
      },
    ],
  },
  E1KNVVH: {
    description: 'IDoc mestre de clientes dados comerciais: textos, cabeçalho',
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
        name: 'TDSPRASISO',
        description: 'Código de idiomas SAP de 2 dígitos',
        type: 'CHAR(2)',
      },
    ],
  },
  E1KNVVL: {
    description: 'IDoc mestre de clientes dados comerciais: linha de texto',
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
  },
  E1KNB1M: {
    description: 'Master mestre de clientes empresa (KNB1)',
    fields: [
      {
        name: 'MSGFN',
        description: 'Função',
        type: 'CHAR(3)',
      },
      {
        name: 'BUKRS',
        description: 'Empresa',
        type: 'CHAR(4)',
      },
      {
        name: 'SPERR',
        description: 'Bloqueio de contabilização p/empresa',
        type: 'CHAR(1)',
      },
      {
        name: 'LOEVM',
        description: 'Marcação p/eliminação do registro mestre (nível de empresa)',
        type: 'CHAR(1)',
      },
      {
        name: 'ZUAWA',
        description: 'Chave para a ordenação por nºs atribuição',
        type: 'CHAR(3)',
      },
      {
        name: 'BUSAB',
        description: 'Responsável da contabilidade',
        type: 'CHAR(2)',
      },
      {
        name: 'AKONT',
        description: 'Cta.de reconciliação na contabilidade geral',
        type: 'CHAR(10)',
      },
      {
        name: 'BEGRU',
        description: 'Grupo autorizações',
        type: 'CHAR(4)',
      },
      {
        name: 'KNRZE',
        description: 'Nº conta da sede (para contas de filiais)',
        type: 'CHAR(10)',
      },
      {
        name: 'KNRZB',
        description: 'Nº conta de um pagador divergente',
        type: 'CHAR(10)',
      },
      {
        name: 'ZAMIM',
        description: 'Código: Aviso de pagamento ao cliente (c/IC)?',
        type: 'CHAR(1)',
      },
      {
        name: 'ZAMIV',
        description: 'Código: Aviso de pagamento à Distribuição',
        type: 'CHAR(1)',
      },
      {
        name: 'ZAMIR',
        description: 'Código: Aviso de pagamento ao departamento jurídico',
        type: 'CHAR(1)',
      },
      {
        name: 'ZAMIB',
        description: 'Código: Aviso de pagamento à contabilidade ?',
        type: 'CHAR(1)',
      },
      {
        name: 'ZAMIO',
        description: 'Código: Aviso de pagamento ao cliente (s/IC)?',
        type: 'CHAR(1)',
      },
      {
        name: 'ZWELS',
        description: 'Lista de formas de pagamentos a considerar',
        type: 'CHAR(10)',
      },
      {
        name: 'XVERR',
        description: 'Código: compensação entre cliente e fornecedor?',
        type: 'CHAR(1)',
      },
      {
        name: 'ZAHLS',
        description: 'Chave de bloqueio para pagamento',
        type: 'CHAR(1)',
      },
      {
        name: 'ZTERM',
        description: 'Chave de condições de pagamento',
        type: 'CHAR(4)',
      },
      {
        name: 'WAKON',
        description: 'Chave de condições de pagamento das despesas da L/C',
        type: 'CHAR(4)',
      },
      {
        name: 'VZSKZ',
        description: 'Código de cálculo de juros',
        type: 'CHAR(2)',
      },
      {
        name: 'ZINDT',
        description: 'Data fixada do último cálculo de juros',
        type: 'DATS(8)',
      },
      {
        name: 'ZINRT',
        description: 'Periodicidade dos juros em meses',
        type: 'NUMC(2)',
      },
      {
        name: 'EIKTO',
        description: 'Nosso nº conta no cliente',
        type: 'CHAR(12)',
      },
      {
        name: 'ZSABE',
        description: 'Encarregado no cliente',
        type: 'CHAR(15)',
      },
      {
        name: 'KVERM',
        description: 'Observação',
        type: 'CHAR(30)',
      },
      {
        name: 'FDGRV',
        description: 'Grupo de administração de tesouraria',
        type: 'CHAR(10)',
      },
      {
        name: 'VRBKZ',
        description: 'Nº da asseguradora do seguro de crédito à exportação',
        type: 'CHAR(2)',
      },
      {
        name: 'VLIBB',
        description: 'Montante segurado',
        type: 'CURR(13)',
      },
      {
        name: 'VRSZL',
        description: 'Prazo de validade do seguro em meses para partidas em aberto',
        type: 'DEC(3)',
      },
      {
        name: 'VRSPR',
        description: 'Porcentagem da franquia',
        type: 'DEC(3)',
      },
      {
        name: 'VRSNR',
        description: 'Nº da apólice de seguro',
        type: 'CHAR(10)',
      },
      {
        name: 'VERDT',
        description: 'Data de validade do seguro',
        type: 'DATS(8)',
      },
      {
        name: 'PERKZ',
        description: 'Variante de fatura coletiva',
        type: 'CHAR(1)',
      },
      {
        name: 'XDEZV',
        description: 'Código: processamento descentralizado?',
        type: 'CHAR(1)',
      },
      {
        name: 'XAUSZ',
        description: 'Código: extratos de conta periódicos',
        type: 'CHAR(1)',
      },
      {
        name: 'WEBTR',
        description: 'Limite do montante da letra de câmbio (em moeda interna)',
        type: 'CURR(13)',
      },
      {
        name: 'REMIT',
        description: 'Recebedor de pagamento mais próximo',
        type: 'CHAR(10)',
      },
      {
        name: 'DATLZ',
        description: 'Data CPU da última execução do programa de cálculo de juros',
        type: 'DATS(8)',
      },
      {
        name: 'XZVER',
        description: 'Código: registrar histórico de pagamentos ?',
        type: 'CHAR(1)',
      },
      {
        name: 'TOGRU',
        description: 'Grupo de tolerância para o parceiro de negócios/cta.Razão',
        type: 'CHAR(4)',
      },
      {
        name: 'KULTG',
        description: 'Tempo previsto até pagamento do cheque',
        type: 'DEC(3)',
      },
      {
        name: 'HBKID',
        description: 'Chave breve de um banco da empresa',
        type: 'CHAR(5)',
      },
      {
        name: 'XPORE',
        description: 'Código: pagamento individual das partidas ?',
        type: 'CHAR(1)',
      },
      {
        name: 'BLNKZ',
        description: '(obsoleto) Cód.preferencial p/determinação da taxa redução',
        type: 'CHAR(2)',
      },
      {
        name: 'ALTKN',
        description: 'Nº antigo de registro mestre',
        type: 'CHAR(10)',
      },
      {
        name: 'ZGRUP',
        description: 'Chave para agrupamento de pagamentos',
        type: 'CHAR(2)',
      },
      {
        name: 'URLID',
        description: 'Chave breve para convenção de férias',
        type: 'CHAR(4)',
      },
      {
        name: 'MGRUP',
        description: 'Chave para agrupamento de reclamações',
        type: 'CHAR(2)',
      },
      {
        name: 'LOCKB',
        description: 'Código lockbox ao qual o cliente deve efetuar o pagamento',
        type: 'CHAR(7)',
      },
      {
        name: 'UZAWE',
        description: 'Suplemento à forma de pagamento',
        type: 'CHAR(2)',
      },
      {
        name: 'EKVBD',
        description: 'Nº conta da associação de compras',
        type: 'CHAR(10)',
      },
      {
        name: 'SREGL',
        description: 'Regra de seleção para avisos de pagamento',
        type: 'CHAR(3)',
      },
      {
        name: 'XEDIP',
        description: 'Código: enviar aviso de pagamento via EDI',
        type: 'CHAR(1)',
      },
      {
        name: 'FRGRP',
        description: 'Grupo de liberação',
        type: 'CHAR(4)',
      },
      {
        name: 'VRSDG',
        description: 'Versão da conversão de motivo de diferença',
        type: 'CHAR(3)',
      },
      {
        name: 'TLFXS',
        description: 'Nº telefax do responsável do parceiro de negócios',
        type: 'CHAR(31)',
      },
      {
        name: 'PERNR',
        description: 'Nº pessoal',
        type: 'NUMC(8)',
      },
      {
        name: 'INTAD',
        description: 'Endereço internet do responsável no parceiro',
        type: 'CHAR(130)',
      },
      {
        name: 'GUZTE',
        description: 'Chave de condições de pagamento p/créditos',
        type: 'CHAR(4)',
      },
      {
        name: 'GRICD',
        description: 'Código de atividade p/imposto sobre o rendimento bruto',
        type: 'CHAR(2)',
      },
      {
        name: 'GRIDT',
        description: 'Tipo de distribuição para imposto salarial',
        type: 'CHAR(2)',
      },
      {
        name: 'WBRSL',
        description: 'Chave de ajuste do valor',
        type: 'CHAR(2)',
      },
      {
        name: 'NODEL',
        description: 'Bloqueio de eliminação p/registro mestre (nível de empresa)',
        type: 'CHAR(1)',
      },
      {
        name: 'TLFNS',
        description: 'Nº telefone do responsável do parceiro de negócios',
        type: 'CHAR(30)',
      },
      {
        name: 'CESSION_KZ',
        description: 'Código de cessão',
        type: 'CHAR(2)',
      },
      {
        name: 'GMVKZD',
        description: 'Cliente em execução',
        type: 'CHAR(1)',
      },
      {
        name: 'AVSND',
        description: 'Código: enviar aviso de pagamento por XML',
        type: 'CHAR(1)',
      },
      {
        name: 'SMTP_ADDR',
        description: 'Endereço de e-mail',
        type: 'CHAR(241)',
      },
      {
        name: 'CVP_XBLCK_B',
        description: 'Código para motivo de transação cumprido',
        type: 'CHAR(1)',
      },
    ],
  },
  E1KNBWM: {
    description: 'Segmento p/ctg.imposto retido na fonte no mestre clientes',
    fields: [
      {
        name: 'MSGFN',
        description: 'Função',
        type: 'CHAR(3)',
      },
      {
        name: 'WITHT',
        description: 'Código para categoria de imposto retido na fonte',
        type: 'CHAR(2)',
      },
      {
        name: 'WT_WITHCD',
        description: 'Código de imposto retido na fonte',
        type: 'CHAR(2)',
      },
      {
        name: 'WT_AGENT',
        description: 'Código: autorizado para retenção de IRF?',
        type: 'CHAR(1)',
      },
      {
        name: 'WT_AGTDF',
        description: 'Data (Batch-Input)',
        type: 'CHAR(8)',
      },
      {
        name: 'WT_AGTDT',
        description: 'Data (Batch-Input)',
        type: 'CHAR(8)',
      },
      {
        name: 'WT_WTSTCD',
        description: 'Nº identificação fiscal IRF',
        type: 'CHAR(16)',
      },
      {
        name: 'WT_EXNR',
        description: 'Nº certificado de isenção',
        type: 'CHAR(25)',
      },
      {
        name: 'WT_EXRT',
        description: 'Taxa de isenção (imposto retido na fonte ampliado) para ALE',
        type: 'CHAR(6)',
      },
      {
        name: 'WT_EXDF',
        description: 'Data (Batch-Input)',
        type: 'CHAR(8)',
      },
      {
        name: 'WT_EXDT',
        description: 'Data (Batch-Input)',
        type: 'CHAR(8)',
      },
      {
        name: 'WT_WTEXRS',
        description: 'Motivo de isenção',
        type: 'CHAR(2)',
      },
    ],
  },
  E1KNB5M: {
    description: 'IDoc mestre de clientes dados de aviso (KNB5)',
    fields: [
      {
        name: 'MSGFN',
        description: 'Função',
        type: 'CHAR(3)',
      },
      {
        name: 'MABER',
        description: 'Área de advertência',
        type: 'CHAR(2)',
      },
      {
        name: 'MAHNA',
        description: 'Procedimento de advertência',
        type: 'CHAR(4)',
      },
      {
        name: 'MANSP',
        description: 'Bloqueio de advertências',
        type: 'CHAR(1)',
      },
      {
        name: 'MADAT',
        description: 'Data da última advertência',
        type: 'DATS(8)',
      },
      {
        name: 'MAHNS',
        description: 'Nível de advertência',
        type: 'NUMC(1)',
      },
      {
        name: 'KNRMA',
        description: 'Nº conta do destinatário da advertência',
        type: 'CHAR(10)',
      },
      {
        name: 'GMVDT',
        description: 'Data do processo judicial de cobrança',
        type: 'DATS(8)',
      },
      {
        name: 'BUSAB',
        description: 'Responsável advertências',
        type: 'CHAR(2)',
      },
    ],
  },
  E1KNB1H: {
    description: 'IDoc mestre de clientes empresa: textos, cabeçalho',
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
        name: 'TDSPRASISO',
        description: 'Código de idiomas SAP de 2 dígitos',
        type: 'CHAR(2)',
      },
    ],
  },
  E1KNB1L: {
    description: 'IDoc mestre de clientes empresa: linha de texto',
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
  },
  E1KNBKM: {
    description: 'Master mestre clientes coordenadas bancárias e mestre bancos',
    fields: [
      {
        name: 'MSGFN',
        description: 'Função',
        type: 'CHAR(3)',
      },
      {
        name: 'BANKS',
        description: 'Código do país do banco',
        type: 'CHAR(3)',
      },
      {
        name: 'BANKL',
        description: 'Nº da agência bancária',
        type: 'CHAR(15)',
      },
      {
        name: 'BANKN',
        description: 'Nº conta bancária',
        type: 'CHAR(18)',
      },
      {
        name: 'BKONT',
        description: 'Chave de controle de bancos',
        type: 'CHAR(2)',
      },
      {
        name: 'BVTYP',
        description: 'Tipo de banco do parceiro',
        type: 'CHAR(4)',
      },
      {
        name: 'XEZER',
        description: 'Código: existe ordem de autorização de débito direto?',
        type: 'CHAR(1)',
      },
      {
        name: 'BKREF',
        description: 'Indicação de referência para os dados bancários',
        type: 'CHAR(20)',
      },
      {
        name: 'BANKA',
        description: 'Nome da instituição financeira',
        type: 'CHAR(60)',
      },
      {
        name: 'STRAS',
        description: 'Rua e nº',
        type: 'CHAR(35)',
      },
      {
        name: 'ORT01',
        description: 'Local',
        type: 'CHAR(35)',
      },
      {
        name: 'SWIFT',
        description: 'SWIFT/BIC para pagamentos internacionais',
        type: 'CHAR(11)',
      },
      {
        name: 'BGRUP',
        description: 'Grupo de bancos (rede de bancos)',
        type: 'CHAR(2)',
      },
      {
        name: 'XPGRO',
        description: 'Conta corrente postal',
        type: 'CHAR(1)',
      },
      {
        name: 'BNKLZ',
        description: 'Nº da agência bancária',
        type: 'CHAR(15)',
      },
      {
        name: 'PSKTO',
        description: 'Nº conta corrente postal',
        type: 'CHAR(16)',
      },
      {
        name: 'BRNCH',
        description: 'Agência do banco',
        type: 'CHAR(40)',
      },
      {
        name: 'PROVZ',
        description: 'Região (estado federal, estado federado, província, condado)',
        type: 'CHAR(3)',
      },
      {
        name: 'KOINH',
        description: 'Nome do titular da conta',
        type: 'CHAR(60)',
      },
      {
        name: 'KOINH_N',
        description: 'Nome do titular da conta',
        type: 'CHAR(60)',
      },
      {
        name: 'KOVON',
        description: 'Data (Batch-Input)',
        type: 'CHAR(8)',
      },
      {
        name: 'KOBIS',
        description: 'Data (Batch-Input)',
        type: 'CHAR(8)',
      },
      {
        name: 'IBAN_BANKS',
        description: 'Código do país do banco',
        type: 'CHAR(3)',
      },
      {
        name: 'IBAN_BANKL',
        description: 'Chave do banco',
        type: 'CHAR(15)',
      },
      {
        name: 'IBAN_BIC',
        description: 'SWIFT/BIC para pagamentos internacionais',
        type: 'CHAR(11)',
      },
      {
        name: 'IBAN',
        description: 'IBAN (International Bank Account Number)',
        type: 'CHAR(34)',
      },
    ],
  },
  E1KNVAM: {
    description: 'IDoc mestre de clientes pontos de descarga (KNVA)',
    fields: [
      {
        name: 'MSGFN',
        description: 'Função',
        type: 'CHAR(3)',
      },
      {
        name: 'ABLAD',
        description: 'Ponto de descarga',
        type: 'CHAR(25)',
      },
      {
        name: 'KNFAK',
        description: 'Calendário de fábrica do cliente',
        type: 'CHAR(2)',
      },
      {
        name: 'WANID',
        description: 'ID do horário entrada mercadorias (nº proposto)',
        type: 'CHAR(3)',
      },
      {
        name: 'MOAB1',
        description: 'Horários de receb. mercad.: 2ª feira de manhã a partir das',
        type: 'TIMS(6)',
      },
      {
        name: 'MOBI1',
        description: 'Horário entrada mercadorias: segunda de manhã até...',
        type: 'TIMS(6)',
      },
      {
        name: 'MOAB2',
        description: 'Horário entrada mercadorias: segunda à tarde a partir das...',
        type: 'TIMS(6)',
      },
      {
        name: 'MOBI2',
        description: 'Horário entrada mercadorias: segunda à tarde até...',
        type: 'TIMS(6)',
      },
      {
        name: 'DIAB1',
        description: 'Horários recebim.-mercadoria: terças de manhã a partir das..',
        type: 'TIMS(6)',
      },
      {
        name: 'DIBI1',
        description: 'Horários recebim.-mercadoria: terças de manhã até ...',
        type: 'TIMS(6)',
      },
      {
        name: 'DIAB2',
        description: 'Horários recebim.-mercadoria: terças de tarde a partir das..',
        type: 'TIMS(6)',
      },
      {
        name: 'DIBI2',
        description: 'Horários recebim.-mercadoria: terças de tarde até ...',
        type: 'TIMS(6)',
      },
      {
        name: 'MIAB1',
        description: 'Horário entrada mercadorias: quarta de manhã a partir das...',
        type: 'TIMS(6)',
      },
      {
        name: 'MIBI1',
        description: 'Horário entrada mercadorias: quarta de manhã até...',
        type: 'TIMS(6)',
      },
      {
        name: 'MIAB2',
        description: 'Horário entrada mercadorias: quarta à tarde a partir das...',
        type: 'TIMS(6)',
      },
      {
        name: 'MIBI2',
        description: 'Horário entrada mercadorias: quarta à tarde até ...',
        type: 'TIMS(6)',
      },
      {
        name: 'DOAB1',
        description: 'Horários recebim.-mercadoria: quintas de manhã a partir d/..',
        type: 'TIMS(6)',
      },
      {
        name: 'DOBI1',
        description: 'Horários recebim.-mercadoria: quintas de manhã até ...',
        type: 'TIMS(6)',
      },
      {
        name: 'DOAB2',
        description: 'Horários recebim.-mercadoria: quintas de tarde a partir d/..',
        type: 'TIMS(6)',
      },
      {
        name: 'DOBI2',
        description: 'Horários recebim.-mercadoria: quintas de tarde até ...',
        type: 'TIMS(6)',
      },
      {
        name: 'FRAB1',
        description: 'Horário entrada mercadorias: sexta de manhã a partir das...',
        type: 'TIMS(6)',
      },
      {
        name: 'FRBI1',
        description: 'Horário entrada mercadorias: sexta de manhã até...',
        type: 'TIMS(6)',
      },
      {
        name: 'FRAB2',
        description: 'Horário entrada mercadorias: sexta à tarde a partir das...',
        type: 'TIMS(6)',
      },
      {
        name: 'FRBI2',
        description: 'Horário entrada mercadorias: sexta à tarde até...',
        type: 'TIMS(6)',
      },
      {
        name: 'SAAB1',
        description: 'Horários recebim.-mercadoria: sábados de manhã a partir das',
        type: 'TIMS(6)',
      },
      {
        name: 'SABI1',
        description: 'Horários recebim.-mercadoria: sábados de manhã até ...',
        type: 'TIMS(6)',
      },
      {
        name: 'SAAB2',
        description: 'Horários recebim.-mercadoria: sábados de tarde a partir das.',
        type: 'TIMS(6)',
      },
      {
        name: 'SABI2',
        description: 'Horários recebim.-mercadoria: sábados de tarde até ...',
        type: 'TIMS(6)',
      },
      {
        name: 'SOAB1',
        description: 'Horários recebim.-mercadoria: domingos de manhã a partir d..',
        type: 'TIMS(6)',
      },
      {
        name: 'SOBI1',
        description: 'Horários recebim.-mercadoria: domingos de manhã até ...',
        type: 'TIMS(6)',
      },
      {
        name: 'SOAB2',
        description: 'Horários recebim.-mercadoria: domingos de tarde a partir d..',
        type: 'TIMS(6)',
      },
      {
        name: 'SOBI2',
        description: 'Horários recebim.-mercadoria: domingos de tarde até ...',
        type: 'TIMS(6)',
      },
      {
        name: 'DEFAB',
        description: 'Ponto de descarga default',
        type: 'CHAR(1)',
      },
    ],
  },
  E1WRF12: {
    description: 'Segmento para centro/pontos de recebimento',
    fields: [
      {
        name: 'MSGFN',
        description: 'Função',
        type: 'CHAR(3)',
      },
      {
        name: 'LOCNR',
        description: 'Nº cliente relativo ao centro',
        type: 'CHAR(10)',
      },
      {
        name: 'EMPST',
        description: 'Ponto de recebimento',
        type: 'CHAR(25)',
      },
      {
        name: 'KUNN2',
        description: 'Nº cliente do parceiro de negócios',
        type: 'CHAR(10)',
      },
      {
        name: 'ABLAD',
        description: 'Ponto de descarga',
        type: 'CHAR(25)',
      },
    ],
  },
  E1WRF4M: {
    description: 'Segmento para centro/departamentos',
    fields: [
      {
        name: 'MSGFN',
        description: 'Função',
        type: 'CHAR(3)',
      },
      {
        name: 'LOCNR',
        description: 'Nº cliente relativo ao centro',
        type: 'CHAR(10)',
      },
      {
        name: 'ABTNR',
        description: 'Nº departamento',
        type: 'CHAR(4)',
      },
      {
        name: 'EMPST',
        description: 'Ponto de recebimento',
        type: 'CHAR(25)',
      },
      {
        name: 'VERFL',
        description: 'Área de vendas',
        type: 'QUAN(6)',
      },
      {
        name: 'VERFE',
        description: 'Unidade da área de vendas (espaço físico)',
        type: 'UNIT(3)',
      },
      {
        name: 'LAYVR',
        description: 'Layout',
        type: 'CHAR(10)',
      },
      {
        name: 'FLVAR',
        description: 'Esquema de áreas',
        type: 'CHAR(4)',
      },
    ],
  },
  E1KNVKM: {
    description: 'IDoc mestre de clientes pessoa de contato (KNVK)',
    fields: [
      {
        name: 'MSGFN',
        description: 'Função',
        type: 'CHAR(3)',
      },
      {
        name: 'PARNR',
        description: 'Nº pessoa de contato',
        type: 'NUMC(10)',
      },
      {
        name: 'NAMEV',
        description: '1º nome',
        type: 'CHAR(35)',
      },
      {
        name: 'NAME1',
        description: 'Nome 1',
        type: 'CHAR(35)',
      },
      {
        name: 'ABTPA',
        description: 'Departamento da pessoa de contato no cliente',
        type: 'CHAR(12)',
      },
      {
        name: 'ABTNR',
        description: 'Departamento da pessoa de contato',
        type: 'CHAR(4)',
      },
      {
        name: 'UEPAR',
        description: 'Parceiro superior',
        type: 'NUMC(10)',
      },
      {
        name: 'TELF1',
        description: '1º Nº telefone',
        type: 'CHAR(16)',
      },
      {
        name: 'ANRED',
        description: 'Forma de tratamento da pessoa de contato',
        type: 'CHAR(30)',
      },
      {
        name: 'PAFKT',
        description: 'Função da pessoa de contato',
        type: 'CHAR(2)',
      },
      {
        name: 'PARVO',
        description: 'Procuração do parceiro',
        type: 'CHAR(1)',
      },
      {
        name: 'PAVIP',
        description: 'Parceiro VIP',
        type: 'CHAR(1)',
      },
      {
        name: 'PARGE',
        description: 'Sexo do parceiro',
        type: 'CHAR(1)',
      },
      {
        name: 'PARLA',
        description: 'Idioma do parceiro',
        type: 'LANG(1)',
      },
      {
        name: 'GBDAT',
        description: 'Data de nascimento',
        type: 'DATS(8)',
      },
      {
        name: 'VRTNR',
        description: 'Nº representante',
        type: 'NUMC(10)',
      },
      {
        name: 'BRYTH',
        description: 'Frequência das visitas',
        type: 'CHAR(4)',
      },
      {
        name: 'AKVER',
        description: 'Comportamento de compra',
        type: 'CHAR(2)',
      },
      {
        name: 'NMAIL',
        description: 'Código: material publicitário',
        type: 'CHAR(1)',
      },
      {
        name: 'PARAU',
        description: 'Observações sobre a pessoa de contato',
        type: 'CHAR(40)',
      },
      {
        name: 'PARH1',
        description: 'Pessoa de contato: atributo 1',
        type: 'CHAR(2)',
      },
      {
        name: 'PARH2',
        description: 'Pessoa de contato: atributo 2',
        type: 'CHAR(2)',
      },
      {
        name: 'PARH3',
        description: 'Pessoa de contato: atributo 3',
        type: 'CHAR(2)',
      },
      {
        name: 'PARH4',
        description: 'Pessoa de contato: atributo 4',
        type: 'CHAR(2)',
      },
      {
        name: 'PARH5',
        description: 'Pessoa de contato: atributo 5',
        type: 'CHAR(2)',
      },
      {
        name: 'MOAB1',
        description: 'Horário visita pess.cont.: 2ª-feira de manhã a partir das...',
        type: 'TIMS(6)',
      },
      {
        name: 'MOBI1',
        description: 'Horário visita pessoa contato: 2ª-feira de manhã até ...',
        type: 'TIMS(6)',
      },
      {
        name: 'MOAB2',
        description: 'Horário visita pess.cont.: 2ª-feira à tarde a partir das ...',
        type: 'TIMS(6)',
      },
      {
        name: 'MOBI2',
        description: 'Horário visita pessoa contato: segunda-feira à tarde até ...',
        type: 'TIMS(6)',
      },
      {
        name: 'DIAB1',
        description: 'Horário visita pessoa cont.:3ªfeira de manhã a partir das...',
        type: 'TIMS(6)',
      },
      {
        name: 'DIBI1',
        description: 'Horário visita pessoa contato: terça-feira de manhã até ...',
        type: 'TIMS(6)',
      },
      {
        name: 'DIAB2',
        description: 'Horário visita pessoa cont.: 3ªfeira à tarde a partir das...',
        type: 'TIMS(6)',
      },
      {
        name: 'DIBI2',
        description: 'Horário de visita pessoa cont.: terça-feira à tarde até ...',
        type: 'TIMS(6)',
      },
      {
        name: 'MIAB1',
        description: 'Horário visita pessoa cont.:4ªfeira de manhã a partir das...',
        type: 'TIMS(6)',
      },
      {
        name: 'MIBI1',
        description: 'Horário visita pessoa de contato: 4ª-feira de manhã até ...',
        type: 'TIMS(6)',
      },
      {
        name: 'MIAB2',
        description: 'Horário visita pessoa cont.: 4ªfeira à tarde a partir das...',
        type: 'TIMS(6)',
      },
      {
        name: 'MIBI2',
        description: 'Horário visita pessoa contato: quarta-feira à tarde até ...',
        type: 'TIMS(6)',
      },
      {
        name: 'DOAB1',
        description: 'Horário visita pessoa cont.:5ªfeira de manhã a partir das...',
        type: 'TIMS(6)',
      },
      {
        name: 'DOBI1',
        description: 'Horário visita pessoa contato: quinta-feira de manhã até ...',
        type: 'TIMS(6)',
      },
      {
        name: 'DOAB2',
        description: 'Horário visita pessoa cont.: 5ªfeira à tarde a partir das...',
        type: 'TIMS(6)',
      },
      {
        name: 'DOBI2',
        description: 'Horário de visita pessoa cont.: quinta-feira à tarde até ...',
        type: 'TIMS(6)',
      },
      {
        name: 'FRAB1',
        description: 'Horário visita pess.cont.: 6ªfeira de manhã a partir das ...',
        type: 'TIMS(6)',
      },
      {
        name: 'FRBI1',
        description: 'Horário visita pessoa contato: sexta-feira de manhã até ...',
        type: 'TIMS(6)',
      },
      {
        name: 'FRAB2',
        description: 'Horário visita pessoa cont.:6ªfeira à tarde a partir das ...',
        type: 'TIMS(6)',
      },
      {
        name: 'FRBI2',
        description: 'Horário visita pessoa contato: sexta-feira à tarde até ...',
        type: 'TIMS(6)',
      },
      {
        name: 'SAAB1',
        description: 'Horário visita pessoa cont.: sábado de manhã a partir das...',
        type: 'TIMS(6)',
      },
      {
        name: 'SABI1',
        description: 'Horário visita pessoa de contato: sábado de manhã até ...',
        type: 'TIMS(6)',
      },
      {
        name: 'SAAB2',
        description: 'Horário visita pessoa cont.: sábado à tarde a partir das...',
        type: 'TIMS(6)',
      },
      {
        name: 'SABI2',
        description: 'Horário visita pessoa de contato: sábado à tarde até ...',
        type: 'TIMS(6)',
      },
      {
        name: 'SOAB1',
        description: 'Horário visita pess.cont.: domingo de manhã a partir das...',
        type: 'TIMS(6)',
      },
      {
        name: 'SOBI1',
        description: 'Horário visita pessoa de contato: domingo de manhã até ...',
        type: 'TIMS(6)',
      },
      {
        name: 'SOAB2',
        description: 'Horário visita pess.cont.: domingo à tarde a partir das ...',
        type: 'TIMS(6)',
      },
      {
        name: 'SOBI2',
        description: 'Horário visita pessoa de contato: domingo à tarde até ...',
        type: 'TIMS(6)',
      },
      {
        name: 'PAKN1',
        description: 'Pessoa de contato: atributo 6',
        type: 'CHAR(3)',
      },
      {
        name: 'PAKN2',
        description: 'Pessoa de contato: atributo 7',
        type: 'CHAR(3)',
      },
      {
        name: 'PAKN3',
        description: 'Pessoa de contato: atributo 8',
        type: 'CHAR(3)',
      },
      {
        name: 'PAKN4',
        description: 'Pessoa de contato: atributo 9',
        type: 'CHAR(3)',
      },
      {
        name: 'PAKN5',
        description: 'Pessoa de contato: atributo 10',
        type: 'CHAR(3)',
      },
      {
        name: 'SORTL',
        description: 'Campo de seleção',
        type: 'CHAR(10)',
      },
      {
        name: 'FAMST',
        description: 'Chave para estado civil',
        type: 'CHAR(1)',
      },
      {
        name: 'SPNAM',
        description: 'Conhecido como',
        type: 'CHAR(10)',
      },
      {
        name: 'TITEL_AP',
        description: 'Título (denominação da função) da pessoa de contato',
        type: 'CHAR(35)',
      },
      {
        name: 'PARLA_ISO',
        description: 'Código de idiomas SAP de 2 dígitos',
        type: 'CHAR(2)',
      },
      {
        name: 'CVP_XBLCK_K',
        description: 'Código para motivo de transação cumprido',
        type: 'CHAR(1)',
      },
    ],
  },
  E1KNVKH: {
    description: 'IDoc mestre de clientes pessoa contato: textos cabeçalho',
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
        name: 'TDSPRASISO',
        description: 'Código de idiomas SAP de 2 dígitos',
        type: 'CHAR(2)',
      },
    ],
  },
  E1KNVKL: {
    description: 'IDoc mestre de clientes pessoa de contato: linha de texto',
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
  },
  E1KNEXM: {
    description: 'IDoc mestre de clientes dados de exportação',
    fields: [
      {
        name: 'MSGFN',
        description: 'Função',
        type: 'CHAR(3)',
      },
      {
        name: 'LNDEX',
        description: 'Código do país para controle de exportação no mestre cliente',
        type: 'CHAR(3)',
      },
      {
        name: 'TDOCO',
        description: 'Código: lista de boicote TDO para controle de exportação',
        type: 'CHAR(1)',
      },
      {
        name: 'TDODA',
        description: 'Data da últ.verificação da lista TDO para controle export.',
        type: 'DATS(8)',
      },
      {
        name: 'SDNCO',
        description: 'Código: lista de boicote SDN para controle de exportação',
        type: 'CHAR(1)',
      },
      {
        name: 'SDNDA',
        description: 'Data da últ.verificação da lista SDN para controle export.',
        type: 'DATS(8)',
      },
      {
        name: 'DHRCO',
        description: 'Código: lista de boicote do cliente p/controle exportação',
        type: 'CHAR(1)',
      },
      {
        name: 'DHRDA',
        description: 'Data últ.verificação da lista boicote int.p/cntrl.exportação',
        type: 'DATS(8)',
      },
    ],
  },
  E1KNASM: {
    description: 'IDoc mestre de clientes nº ID fiscal adicional UE',
    fields: [
      {
        name: 'MSGFN',
        description: 'Função',
        type: 'CHAR(3)',
      },
      {
        name: 'LAND1',
        description: 'Chave do país',
        type: 'CHAR(3)',
      },
      {
        name: 'STCEG',
        description: 'Nº de identificação fiscal de IVA',
        type: 'CHAR(20)',
      },
    ],
  },
  E1KNKAM: {
    description: 'IDoc mestre de clientes adm.créditos, dados centrais (KNKA)',
    fields: [
      {
        name: 'MSGFN',
        description: 'Função',
        type: 'CHAR(3)',
      },
      {
        name: 'KLIMG',
        description: 'Campo de comprimento 16',
        type: 'CHAR(16)',
      },
      {
        name: 'KLIME',
        description: 'Campo de comprimento 16',
        type: 'CHAR(16)',
      },
      {
        name: 'WAERS',
        description: 'Código da moeda',
        type: 'CUKY(5)',
      },
      {
        name: 'DLAUS',
        description: 'Data da última informação obtida',
        type: 'DATS(8)',
      },
    ],
  },
  E1KNATM: {
    description: '',
    fields: [
      {
        name: 'MSGFN',
        description: 'Função',
        type: 'CHAR(3)',
      },
      {
        name: 'TAXGR',
        description: 'Código de categorização para códigos de impostos',
        type: 'CHAR(3)',
      },
      {
        name: 'SBJDF',
        description: 'Campo de caracteres do comprimento 8',
        type: 'CHAR(8)',
      },
      {
        name: 'SBJDT',
        description: 'Campo de caracteres do comprimento 8',
        type: 'CHAR(8)',
      },
      {
        name: 'EXNR',
        description: '',
        type: 'CHAR(15)',
      },
      {
        name: 'EXRT',
        description: 'Tabela R/2',
        type: 'CHAR(5)',
      },
      {
        name: 'EXDF',
        description: 'Campo de caracteres do comprimento 8',
        type: 'CHAR(8)',
      },
      {
        name: 'EXDT',
        description: 'Campo de caracteres do comprimento 8',
        type: 'CHAR(8)',
      },
      {
        name: 'EXRT_ALE',
        description: 'Campo de caracteres de comprimento 6',
        type: 'CHAR(6)',
      },
    ],
  },
  E1KNKKM: {
    description: 'IDoc mestre clientes adm.créds.dds.área contr.créds.(KNKK)',
    fields: [
      {
        name: 'MSGFN',
        description: 'Função',
        type: 'CHAR(3)',
      },
      {
        name: 'KKBER',
        description: 'Área de controle de créditos',
        type: 'CHAR(4)',
      },
      {
        name: 'KLIMK',
        description: 'Campo de comprimento 16',
        type: 'CHAR(16)',
      },
      {
        name: 'KNKLI',
        description: 'Nº conta de cliente c/respectivos dados de limite de crédito',
        type: 'CHAR(10)',
      },
      {
        name: 'CTLPC',
        description: 'Administração de crédito: classe de risco',
        type: 'CHAR(3)',
      },
      {
        name: 'DTREV',
        description: 'Última verificação do crédito do cliente (interna)',
        type: 'DATS(8)',
      },
      {
        name: 'CRBLB',
        description: 'Código: Bloqueio resultante da gestão de crédito ?',
        type: 'CHAR(1)',
      },
      {
        name: 'SBGRP',
        description: 'Grupo de responsáveis p/ administração de créditos',
        type: 'CHAR(3)',
      },
      {
        name: 'NXTRV',
        description: 'Verificação seguinte',
        type: 'DATS(8)',
      },
      {
        name: 'KRAUS',
        description: 'Nº informação de crédito',
        type: 'CHAR(11)',
      },
      {
        name: 'PAYDB',
        description: 'não utilizar mais - substituído oelo elemento dados DBPAY_CM',
        type: 'NUMC(2)',
      },
      {
        name: 'DBRAT',
        description: 'não utilizar mais - substituído pelo elemento dados DBRTG_CM',
        type: 'CHAR(3)',
      },
      {
        name: 'REVDB',
        description: 'Última verificação (externa)',
        type: 'DATS(8)',
      },
      {
        name: 'GRUPP',
        description: 'Grupo de crédito de cliente',
        type: 'CHAR(4)',
      },
      {
        name: 'SBDAT',
        description: 'Data de apresentação',
        type: 'DATS(8)',
      },
      {
        name: 'KDGRP',
        description: 'Grupo de clientes',
        type: 'CHAR(8)',
      },
      {
        name: 'DBPAY',
        description: 'Indicador da assiduidade de pagamento',
        type: 'CHAR(3)',
      },
      {
        name: 'DBRTG',
        description: 'Classificação',
        type: 'CHAR(5)',
      },
      {
        name: 'DBEKR',
        description: 'Limite de crédito recomendado',
        type: 'CURR(15)',
      },
      {
        name: 'DBWAE',
        description: 'Código ISO moeda',
        type: 'CHAR(3)',
      },
      {
        name: 'DBMON',
        description: 'Data monitorização',
        type: 'DATS(8)',
      },
    ],
  },
  E1KNKKH: {
    description: 'IDoc mestre de clientes adm.créditos: texto,cabeçalho',
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
        name: 'TDSPRASISO',
        description: 'Código de idiomas SAP de 2 dígitos',
        type: 'CHAR(2)',
      },
    ],
  },
  E1KNKKL: {
    description: 'IDoc mestre de clientes administração créditos: texto, linha',
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
  },
  E1VCKUN: {
    description: 'Mestre de clientes: dados de cartões de crédito',
    fields: [
      {
        name: 'MSGFN',
        description: 'Função',
        type: 'CHAR(3)',
      },
      {
        name: 'CCINS',
        description: 'Cartões de pagamento: tipo de cartão',
        type: 'CHAR(4)',
      },
      {
        name: 'CCNUM',
        description: 'Cartões de pagamento: nº cartão',
        type: 'CHAR(25)',
      },
      {
        name: 'CCDEF',
        description: 'Cartões de pagamento: código cartão de pagamento - default',
        type: 'CHAR(1)',
      },
      {
        name: 'CCNAME',
        description: 'Cartões de pagamento: nome do titular do cartão',
        type: 'CHAR(40)',
      },
      {
        name: 'DATAB',
        description: 'Cartões de pagamento: válido desde',
        type: 'DATS(8)',
      },
      {
        name: 'DATBI',
        description: 'Cartões de pagamento: válido até',
        type: 'DATS(8)',
      },
      {
        name: 'CCTYP',
        description: 'Cartões de pagamento: ctg.cartão',
        type: 'CHAR(2)',
      },
      {
        name: 'CCLOCK',
        description: 'Cartões de pagamento: causa do bloqueio de um cartão pgto.',
        type: 'CHAR(2)',
      },
    ],
  },
  E1WRF1M: {
    description: 'Segmento para mestre de centros',
    fields: [
      {
        name: 'MSGFN',
        description: 'Função',
        type: 'CHAR(3)',
      },
      {
        name: 'LOCNR',
        description: 'Nº cliente relativo ao centro',
        type: 'CHAR(10)',
      },
      {
        name: 'EROED',
        description: 'Data de abertura',
        type: 'DATS(8)',
      },
      {
        name: 'SCHLD',
        description: 'Data de encerramento',
        type: 'DATS(8)',
      },
      {
        name: 'SPDAB',
        description: 'Bloqueio a partir de',
        type: 'DATS(8)',
      },
      {
        name: 'SPDBI',
        description: 'Bloqueio até',
        type: 'DATS(8)',
      },
      {
        name: 'AUTOB',
        description: 'Pedido automático',
        type: 'CHAR(1)',
      },
      {
        name: 'KOPRO',
        description: 'Perfil da saída POS',
        type: 'CHAR(4)',
      },
      {
        name: 'LAYVR',
        description: 'Layout',
        type: 'CHAR(10)',
      },
      {
        name: 'FLVAR',
        description: 'Esquema de áreas',
        type: 'CHAR(4)',
      },
      {
        name: 'STFAK',
        description: 'Calendário',
        type: 'CHAR(2)',
      },
      {
        name: 'WANID',
        description: 'ID do horário entrada mercadorias (nº proposto)',
        type: 'CHAR(3)',
      },
      {
        name: 'MOAB1',
        description: 'Horários de receb. mercad.: 2ª feira de manhã a partir das',
        type: 'TIMS(6)',
      },
      {
        name: 'MOBI1',
        description: 'Horário entrada mercadorias: segunda de manhã até...',
        type: 'TIMS(6)',
      },
      {
        name: 'MOAB2',
        description: 'Horário entrada mercadorias: segunda à tarde a partir das...',
        type: 'TIMS(6)',
      },
      {
        name: 'MOBI2',
        description: 'Horário entrada mercadorias: segunda à tarde até...',
        type: 'TIMS(6)',
      },
      {
        name: 'DIAB1',
        description: 'Horários recebim.-mercadoria: terças de manhã a partir das..',
        type: 'TIMS(6)',
      },
      {
        name: 'DIBI1',
        description: 'Horários recebim.-mercadoria: terças de manhã até ...',
        type: 'TIMS(6)',
      },
      {
        name: 'DIAB2',
        description: 'Horários recebim.-mercadoria: terças de tarde a partir das..',
        type: 'TIMS(6)',
      },
      {
        name: 'DIBI2',
        description: 'Horários recebim.-mercadoria: terças de tarde até ...',
        type: 'TIMS(6)',
      },
      {
        name: 'MIAB1',
        description: 'Horário entrada mercadorias: quarta de manhã a partir das...',
        type: 'TIMS(6)',
      },
      {
        name: 'MIBI1',
        description: 'Horário entrada mercadorias: quarta de manhã até...',
        type: 'TIMS(6)',
      },
      {
        name: 'MIAB2',
        description: 'Horário entrada mercadorias: quarta de manhã até...',
        type: 'TIMS(6)',
      },
      {
        name: 'MIBI2',
        description: 'Horário entrada mercadorias: quarta à tarde a partir das...',
        type: 'TIMS(6)',
      },
      {
        name: 'DOAB1',
        description: 'Horário entrada mercadorias: quarta à tarde até ...',
        type: 'TIMS(6)',
      },
      {
        name: 'DOBI1',
        description: 'Horários recebim.-mercadoria: quintas de manhã a partir d/..',
        type: 'TIMS(6)',
      },
      {
        name: 'DOAB2',
        description: 'Horários recebim.-mercadoria: quintas de manhã até ...',
        type: 'TIMS(6)',
      },
      {
        name: 'DOBI2',
        description: 'Horários recebim.-mercadoria: quintas de tarde a partir d/..',
        type: 'TIMS(6)',
      },
      {
        name: 'FRAB1',
        description: 'Horários recebim.-mercadoria: quintas de tarde até ...',
        type: 'TIMS(6)',
      },
      {
        name: 'FRBI1',
        description: 'Horário entrada mercadorias: sexta de manhã a partir das...',
        type: 'TIMS(6)',
      },
      {
        name: 'FRAB2',
        description: 'Horário entrada mercadorias: sexta de manhã até...',
        type: 'TIMS(6)',
      },
      {
        name: 'FRBI2',
        description: 'Horário entrada mercadorias: sexta à tarde a partir das...',
        type: 'TIMS(6)',
      },
      {
        name: 'SAAB1',
        description: 'Horário entrada mercadorias: sexta à tarde até...',
        type: 'TIMS(6)',
      },
      {
        name: 'SABI1',
        description: 'Horários recebim.-mercadoria: sábados de manhã até ...',
        type: 'TIMS(6)',
      },
      {
        name: 'SAAB2',
        description: 'Horários recebim.-mercadoria: sábados de tarde a partir das.',
        type: 'TIMS(6)',
      },
      {
        name: 'SABI2',
        description: 'Horários recebim.-mercadoria: sábados de tarde até ...',
        type: 'TIMS(6)',
      },
      {
        name: 'SOAB1',
        description: 'Horários recebim.-mercadoria: domingos de manhã a partir d..',
        type: 'TIMS(6)',
      },
      {
        name: 'SOBI1',
        description: 'Horários recebim.-mercadoria: domingos de manhã até ...',
        type: 'TIMS(6)',
      },
      {
        name: 'SOAB2',
        description: 'Horários recebim.-mercadoria: domingos de tarde a partir d..',
        type: 'TIMS(6)',
      },
      {
        name: 'SOBI2',
        description: 'Horários recebim.-mercadoria: domingos de tarde até ...',
        type: 'TIMS(6)',
      },
      {
        name: 'VERFL',
        description: 'Área de vendas',
        type: 'QUAN(6)',
      },
      {
        name: 'VERFE',
        description: 'Unidade da área de vendas (espaço físico)',
        type: 'UNIT(3)',
      },
      {
        name: 'SPGR1',
        description: 'Motivo do bloqueio',
        type: 'CHAR(2)',
      },
      {
        name: 'INPRO',
        description: 'Perfil entrada POS',
        type: 'CHAR(4)',
      },
      {
        name: 'EKOAR',
        description: 'Saída POS: grupo dos tipos de condição',
        type: 'CHAR(4)',
      },
      {
        name: 'KZLIK',
        description: 'Condições de catalogação p/sortimentos',
        type: 'CHAR(1)',
      },
      {
        name: 'BETRP',
        description: 'Perfil de centro',
        type: 'CHAR(4)',
      },
      {
        name: 'ERDAT',
        description: 'Data de criação do registro',
        type: 'DATS(8)',
      },
      {
        name: 'ERNAM',
        description: 'Nome do responsável que adicionou o objeto',
        type: 'CHAR(12)',
      },
      {
        name: 'NLMATFB',
        description: 'Código: efetuar catalogação posterior',
        type: 'CHAR(1)',
      },
      {
        name: 'BWWRK',
        description: 'Centro para a determinação do preço de venda final',
        type: 'CHAR(4)',
      },
      {
        name: 'BWVKO',
        description: 'Organização de vendas para a determinação preço venda final',
        type: 'CHAR(4)',
      },
      {
        name: 'BWVTW',
        description: 'Canal de distribuição para a determinação preço venda final',
        type: 'CHAR(2)',
      },
      {
        name: 'BBPRO',
        description: 'Perfil de lista de sortimento',
        type: 'CHAR(4)',
      },
      {
        name: 'VKBUR_WRK',
        description: 'Escritório de vendas',
        type: 'CHAR(4)',
      },
      {
        name: 'VLFKZ',
        description: 'Ctg.centro',
        type: 'CHAR(1)',
      },
      {
        name: 'LSTFL',
        description: 'Método de listagem para a filial ou outros tipos sortimento',
        type: 'CHAR(2)',
      },
      {
        name: 'LIGRD',
        description: 'Regra básica de catalogação para sortimento',
        type: 'CHAR(1)',
      },
      {
        name: 'VKORG',
        description: 'Organização de vendas para faturamento interno',
        type: 'CHAR(4)',
      },
      {
        name: 'VTWEG',
        description: 'Canal de distribuição para faturamento interno',
        type: 'CHAR(2)',
      },
      {
        name: 'DESROI',
        description: 'RSI desejado (para ALE)',
        type: 'CHAR(7)',
      },
      {
        name: 'TIMINC',
        description: 'Incremento temporal para algoritmo investment buying (p/ALE)',
        type: 'CHAR(5)',
      },
      {
        name: 'POSWS',
        description: 'Moeda dos sistemas de caixas',
        type: 'CUKY(5)',
      },
      {
        name: 'SSOPT_PRO',
        description: 'Perfil de otimização de prateleiras',
        type: 'CHAR(4)',
      },
      {
        name: 'WBPRO',
        description: 'Perfil para a administração de estoques em valor',
        type: 'CHAR(4)',
      },
      {
        name: 'ORGPRICE',
        description: 'Retail: preço original para definição de segmento E2WRF1M',
        type: 'CHAR(1)',
      },
      {
        name: 'PRCTR',
        description: 'Centro de lucro',
        type: 'CHAR(10)',
      },
      {
        name: 'RMA_PROF',
        description: 'Retail: perfil RMA para definição de segmento E2WRF1M',
        type: 'CHAR(4)',
      },
      {
        name: 'RMA_VKORG',
        description: 'Organização de vendas para distribuição de custos',
        type: 'CHAR(4)',
      },
      {
        name: 'RMA_VTWEG',
        description: 'Canal de distribuição para distribuição de custos',
        type: 'CHAR(2)',
      },
    ],
  },
  E1WRF3M: {
    description: 'Segmento para centro fornecedor dependente do tempo',
    fields: [
      {
        name: 'MSGFN',
        description: 'Função',
        type: 'CHAR(3)',
      },
      {
        name: 'LOCNR',
        description: 'Nº cliente relativo ao centro',
        type: 'CHAR(10)',
      },
      {
        name: 'MATKL',
        description: 'Grupo de mercadorias',
        type: 'CHAR(9)',
      },
      {
        name: 'DATBI',
        description: 'Data de validade final',
        type: 'DATS(8)',
      },
      {
        name: 'DATAB',
        description: 'Data de início da validade',
        type: 'DATS(8)',
      },
      {
        name: 'LOCLB',
        description: 'Centro fornecedor (fonte de suprimento)',
        type: 'CHAR(4)',
      },
      {
        name: 'PRIORITAET',
        description: 'Prioridade dos centros fornecedores (BI)',
        type: 'CHAR(2)',
      },
      {
        name: 'TRANSPORT_CHAIN',
        description: 'Cadeia de transporte',
        type: 'CHAR(10)',
      },
    ],
  },
  E1WRF5M: {
    description: 'Segmento p/ID centro/negociante da empresa cartão de crédito',
    fields: [
      {
        name: 'MSGFN',
        description: 'Função',
        type: 'CHAR(3)',
      },
      {
        name: 'LOCNR',
        description: 'Nº cliente',
        type: 'CHAR(10)',
      },
      {
        name: 'CCINS',
        description: 'Cartões de pagamento: tipo de cartão',
        type: 'CHAR(4)',
      },
      {
        name: 'MERCH',
        description: 'Cartões de pagamento: Id negociante no loc.compensação',
        type: 'CHAR(15)',
      },
      {
        name: 'BEZEI',
        description: 'Denominação ID comerciante da instituição de cartão crédito',
        type: 'CHAR(30)',
      },
    ],
  },
  E1WRF6M: {
    description: 'Segmento para centro/grupos de mercadorias',
    fields: [
      {
        name: 'MSGFN',
        description: 'Função',
        type: 'CHAR(3)',
      },
      {
        name: 'LOCNR',
        description: 'Nº cliente relativo ao centro',
        type: 'CHAR(10)',
      },
      {
        name: 'MATKL',
        description: 'Grupo de mercadorias',
        type: 'CHAR(9)',
      },
      {
        name: 'SSTUF',
        description: 'Nível de sortimento',
        type: 'CHAR(2)',
      },
      {
        name: 'SORBR',
        description: 'Comprimento do sortimento',
        type: 'NUMC(13)',
      },
      {
        name: 'ABTNR',
        description: 'Nº departamento',
        type: 'CHAR(4)',
      },
      {
        name: 'PRIOT',
        description: 'Prioridade de sortimento',
        type: 'CHAR(1)',
      },
      {
        name: 'DISPR',
        description: 'Material: perfil de planejamento de necessidades (MRP)',
        type: 'CHAR(4)',
      },
      {
        name: 'PROPR',
        description: 'Perfil de previsão',
        type: 'CHAR(4)',
      },
      {
        name: 'PRIMW',
        description: 'Preço incl.IVA',
        type: 'CHAR(1)',
      },
      {
        name: 'UPROF',
        description: 'Perfil de reavaliação do preço de venda',
        type: 'CHAR(4)',
      },
      {
        name: 'WDAUS',
        description: 'Excluir o grupo de mercadorias do processamento saída POS',
        type: 'CHAR(1)',
      },
      {
        name: 'RQGRP',
        description: 'Reabastecimento: grupo de necessidades',
        type: 'CHAR(2)',
      },
      {
        name: 'FBPRO',
        description: 'Perfil do suprimento de filiais p/ordem de filial, reabast.',
        type: 'CHAR(4)',
      },
      {
        name: 'PLTYP_P',
        description: 'Determinação de preço: ctg.lista de preços com base em itens',
        type: 'CHAR(2)',
      },
      {
        name: 'PSTRA',
        description: 'Cálculo do preço de venda: estratégia de preço',
        type: 'CHAR(2)',
      },
      {
        name: 'MGINT',
        description: 'Nº classe interno de um grupo de concorrentes (para ALE)',
        type: 'CHAR(10)',
      },
    ],
  },
  E1T023W: {
    description: 'Segmento para determinação artigos de valor',
    fields: [
      {
        name: 'MSGFN',
        description: 'Função',
        type: 'CHAR(3)',
      },
      {
        name: 'LOCNR',
        description: 'Nº cliente relativo ao centro',
        type: 'CHAR(10)',
      },
      {
        name: 'MATKL',
        description: 'Grupo de mercadorias',
        type: 'CHAR(9)',
      },
      {
        name: 'WWGPA',
        description: 'Material de valor - grupo de mercadorias',
        type: 'CHAR(18)',
      },
      {
        name: 'KEDET',
        description: 'Código: exceções do tipo de administração de estoques',
        type: 'CHAR(1)',
      },
      {
        name: 'WWGPA_EXTERNAL',
        description: 'Material de valor - grupo de mercadorias',
        type: 'CHAR(40)',
      },
      {
        name: 'WWGPA_VERSION',
        description: 'Nº da versão (desenvolvimento futuro) do campo WWGPA',
        type: 'CHAR(10)',
      },
      {
        name: 'WWGPA_GUID',
        description: 'GUID externo (futuro desenvolvimento) para campo WWGPA',
        type: 'CHAR(32)',
      },
      {
        name: 'WWGPA_LONG',
        description: 'Material de valor do grupo de mercadorias',
        type: 'CHAR(40)',
      },
    ],
  },
  E1T023X: {
    description: 'Segmento para exceções da determinação de artigos de valor',
    fields: [
      {
        name: 'MSGFN',
        description: 'Função',
        type: 'CHAR(3)',
      },
      {
        name: 'LOCNR',
        description: 'Nº cliente relativo ao centro',
        type: 'CHAR(10)',
      },
      {
        name: 'MATNR',
        description: 'Nº do material',
        type: 'CHAR(18)',
      },
      {
        name: 'WMATN',
        description: 'Nº material lançamento (material valor ou material indiv.)',
        type: 'CHAR(18)',
      },
      {
        name: 'MATKL',
        description: 'Grupo de mercadorias',
        type: 'CHAR(9)',
      },
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
        name: 'WMATN_EXTERNAL',
        description: 'Nº extenso material (futuro desenvolvimento) p/campo WMATN',
        type: 'CHAR(40)',
      },
      {
        name: 'WMATN_VERSION',
        description: 'Nº da versão (futuro desenvolvimento) para campo WMATN',
        type: 'CHAR(10)',
      },
      {
        name: 'WMATN_GUID',
        description: 'GUID externo (futuro desenvolvimento) para campo WMATN',
        type: 'CHAR(32)',
      },
      {
        name: 'MATNR_LONG',
        description: 'Nº material (40 caracteres, necessário por razões técnicas)',
        type: 'CHAR(40)',
      },
      {
        name: 'WMATN_LONG',
        description: 'Número de material lançamento de material único ou de valor',
        type: 'CHAR(40)',
      },
    ],
  },
};

export const CUSTOMERS_DATA: IdocData = {
  title: 'DEBMAS - Mestre de Clientes',
  description: 'IDoc DEBMAS para distribuição de dados mestres',
  tree: IDOC_TREE,
  segments: SEGMENT_DEFINITIONS,
};

export default CUSTOMERS_DATA;
