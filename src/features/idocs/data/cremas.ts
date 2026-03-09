/**
 * Dados do IDoc CREMAS - Mestre de Fornecedores
 * 20 segmentos, 475 campos
 * Gerado automaticamente a partir do HTML original
 */
import type { IdocData } from '../types';

export const CREMAS_DATA: IdocData = {
  title: 'CREMAS - Mestre de Fornecedores',
  description: 'IDoc para distribuição de dados mestres',
  tree: [
    {
      segment: 'E1LFA1M',
      description: 'Segmento para dados gerais de fornecedores',
      max: 1,
      fields: [
        {
          name: 'MSGFN',
          description: 'Função',
          type: 'CHAR(3)',
        },
        {
          name: 'LIFNR',
          description: 'Nº conta do fornecedor',
          type: 'CHAR(10)',
        },
        {
          name: 'ANRED',
          description: 'Forma de tratamento',
          type: 'CHAR(15)',
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
          name: 'ESRNR',
          description: 'Nº participante NDR',
          type: 'CHAR(11)',
        },
        {
          name: 'KONZS',
          description: 'Chave do grupo de empresas',
          type: 'CHAR(10)',
        },
        {
          name: 'KTOKK',
          description: 'Grupo de contas do fornecedor',
          type: 'CHAR(4)',
        },
        {
          name: 'KUNNR',
          description: 'Nº cliente',
          type: 'CHAR(10)',
        },
        {
          name: 'LAND1',
          description: 'País da sociedade',
          type: 'CHAR(3)',
        },
        {
          name: 'LNRZA',
          description: 'Nº conta do fornecedor',
          type: 'CHAR(10)',
        },
        {
          name: 'LOEVM',
          description: 'Marcação central para eliminação do registro mestre',
          type: 'CHAR(1)',
        },
        {
          name: 'NAME1',
          description: 'Sobrenome de um funcionário',
          type: 'CHAR(35)',
        },
        {
          name: 'NAME2',
          description: 'Sobrenome de um funcionário',
          type: 'CHAR(35)',
        },
        {
          name: 'NAME3',
          description: 'Sobrenome de um funcionário',
          type: 'CHAR(35)',
        },
        {
          name: 'NAME4',
          description: 'Sobrenome de um funcionário',
          type: 'CHAR(35)',
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
          description: 'Código postal',
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
          name: 'SORTL',
          description: 'Campo de caracteres do comprimento 10',
          type: 'CHAR(10)',
        },
        {
          name: 'SPERR',
          description: 'Bloqueio central contabilização',
          type: 'CHAR(1)',
        },
        {
          name: 'SPERM',
          description: 'Compras bloqueadas a nível central',
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
          name: 'XCPDK',
          description: 'Código: a conta é uma conta ocasional?',
          type: 'CHAR(1)',
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
          name: 'FISKN',
          description: 'Nº da conta do registro mestre com endereço fiscal',
          type: 'CHAR(10)',
        },
        {
          name: 'STCEG',
          description: 'Nº de identificação fiscal de IVA',
          type: 'CHAR(20)',
        },
        {
          name: 'STKZN',
          description: 'Pessoa física',
          type: 'CHAR(1)',
        },
        {
          name: 'SPERQ',
          description: 'Função que vai ser bloqueada',
          type: 'CHAR(2)',
        },
        {
          name: 'ADRNR',
          description: 'Endereço',
          type: 'CHAR(10)',
        },
        {
          name: 'MCOD1',
          description: 'Critério de pesquisa para utilização matchcode',
          type: 'CHAR(25)',
        },
        {
          name: 'MCOD2',
          description: 'Critério de pesquisa para utilização matchcode',
          type: 'CHAR(25)',
        },
        {
          name: 'MCOD3',
          description: 'Critério de pesquisa para utilização matchcode',
          type: 'CHAR(25)',
        },
        {
          name: 'GBORT',
          description: 'Local de nascimento do contribuinte de IRF',
          type: 'CHAR(25)',
        },
        {
          name: 'GBDAT',
          description: 'Data de nascimento',
          type: 'DATS(8)',
        },
        {
          name: 'SEXKZ',
          description: 'Chave para sexo da pessoa sujeita ao IRF',
          type: 'CHAR(1)',
        },
        {
          name: 'KRAUS',
          description: 'Nº informação de crédito',
          type: 'CHAR(11)',
        },
        {
          name: 'REVDB',
          description: 'Última verificação (externa)',
          type: 'DATS(8)',
        },
        {
          name: 'QSSYS',
          description: 'Sistema QM do fornecedor',
          type: 'CHAR(4)',
        },
        {
          name: 'KTOCK',
          description: 'Grupo de contas de referência p/conta ocasional (fornecedor)',
          type: 'CHAR(4)',
        },
        {
          name: 'PFORT',
          description: 'Localidade da caixa postal',
          type: 'CHAR(35)',
        },
        {
          name: 'WERKS',
          description: 'Centro',
          type: 'CHAR(4)',
        },
        {
          name: 'LTSNA',
          description: 'Código relevante p/subsortimento do fornecedor',
          type: 'CHAR(1)',
        },
        {
          name: 'WERKR',
          description: 'Código nível de centro relevante',
          type: 'CHAR(1)',
        },
        {
          name: 'PLKAL',
          description: 'Chave do calendário de fábrica',
          type: 'CHAR(2)',
        },
        {
          name: 'DUEFL',
          description: 'Status da transferência de dados p/release seguinte',
          type: 'CHAR(1)',
        },
        {
          name: 'TXJCD',
          description: 'Domicílio fiscal',
          type: 'CHAR(15)',
        },
        {
          name: 'SCACD',
          description: 'Standard Carrier Access Code',
          type: 'CHAR(4)',
        },
        {
          name: 'SFRGR',
          description: 'Grupo de frete transportador',
          type: 'CHAR(4)',
        },
        {
          name: 'LZONE',
          description: 'Zona de transporte para a qual ou da qual é fornecido',
          type: 'CHAR(10)',
        },
        {
          name: 'DLGRP',
          description: 'Grupo de esquemas de fornecedores de serviços',
          type: 'CHAR(4)',
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
          name: 'REGSS',
          description: 'Registrado para seguro social',
          type: 'CHAR(1)',
        },
        {
          name: 'ACTSS',
          description: 'Código da atividade para seguro social',
          type: 'CHAR(3)',
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
          name: 'IPISP',
          description: 'Código: valor do imposto dividido',
          type: 'CHAR(1)',
        },
        {
          name: 'TAXBS',
          description: 'Base de imposto percentual',
          type: 'NUMC(1)',
        },
        {
          name: 'PROFS',
          description: 'Profissão',
          type: 'CHAR(30)',
        },
        {
          name: 'STGDL',
          description: 'Transporte: grupo estatísticas forn.serviços de transporte',
          type: 'CHAR(2)',
        },
        {
          name: 'EMNFR',
          description: 'Denominação externa do fabricante',
          type: 'CHAR(10)',
        },
        {
          name: 'NODEL',
          description: 'Bloqueio central de eliminação para registro mestre',
          type: 'CHAR(1)',
        },
        {
          name: 'CARRIER_CONF',
          description: 'Confirmação da transportadora prevista',
          type: 'CHAR(1)',
        },
        {
          name: 'TRANSPORT_CHAIN',
          description: 'Cadeia de transporte',
          type: 'CHAR(10)',
        },
        {
          name: 'STAGING_TIME',
          description: 'Tempo de disponibilização em dias',
          type: 'DEC(3)',
        },
        {
          name: 'SUBMI_RELEVANT',
          description: 'Cross-docking: relevante para número coletivo',
          type: 'CHAR(1)',
        },
        {
          name: 'SCHEDULING_TYPE',
          description: 'Método de programação',
          type: 'CHAR(1)',
        },
      ],
      children: [
        {
          segment: 'E1LFA1B',
          description: 'Segmento para dados de fornecedor CCR',
          max: 1,
          fields: [
            {
              name: 'DUNS',
              description: 'Campo alfanumérico de 9 caracteres',
              type: 'CHAR(9)',
            },
            {
              name: 'DUNS4',
              description: 'Área def.imprecisam., evtlm.utiliz.p/níveis Support Package',
              type: 'CHAR(4)',
            },
            {
              name: 'CAGE',
              description: 'Tabela R/2',
              type: 'CHAR(5)',
            },
            {
              name: 'RENDATE',
              description: 'Data (Batch-Input)',
              type: 'CHAR(8)',
            },
            {
              name: 'REG_IND',
              description: 'Código de um caractere',
              type: 'CHAR(1)',
            },
            {
              name: 'REG_STAT',
              description: 'Código de um caractere',
              type: 'CHAR(1)',
            },
          ],
          children: [],
        },
        {
          segment: 'E1LFA1A',
          description: 'Segmento para dados gerais de fornecedor - ampliação',
          max: 1,
          fields: [
            {
              name: 'LFURL',
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
              name: 'QSSYSDAT',
              description: 'Data de validade da certificação',
              type: 'DATS(8)',
            },
            {
              name: 'PODKZB',
              description: 'Código fornecedor relev.p/confirmação de recebimento remessa',
              type: 'CHAR(1)',
            },
            {
              name: 'FISKU',
              description: 'Nºconta registro mestre da repartição pública finanças resp.',
              type: 'CHAR(10)',
            },
            {
              name: 'STENR',
              description: 'NºIDfiscal na repart.públ.finanças resp.',
              type: 'CHAR(18)',
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
              name: 'STCD5',
              description: 'Número identificação fiscal 5',
              type: 'CHAR(60)',
            },
            {
              name: 'MIN_COMP',
              description: 'Código para microempresa',
              type: 'CHAR(1)',
            },
            {
              name: 'TERM_LI',
              description: 'Condições de responsabilidade',
              type: 'CHAR(1)',
            },
            {
              name: 'CRC_NUM',
              description: 'Nº CRC',
              type: 'CHAR(25)',
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
          children: [],
        },
        {
          segment: 'E1LFA1H',
          description: 'Mestre de fornecedor dados básicos: textos, cabeçalho',
          max: 1,
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
          children: [
            {
              segment: 'E1LFA1L',
              description: 'Mestre de fornecedor dados básicos: linha de texto',
              max: 1,
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
          segment: 'E1LFB1M',
          description: 'Segmento para dados de empresa para fornecedores SMD',
          max: 1,
          fields: [
            {
              name: 'MSGFN',
              description: 'Função',
              type: 'CHAR(3)',
            },
            {
              name: 'LIFNR',
              description: 'Nº conta do fornecedor',
              type: 'CHAR(10)',
            },
            {
              name: 'BUKRS',
              description: 'Empresa',
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
              name: 'VZSKZ',
              description: 'Código de cálculo de juros',
              type: 'CHAR(2)',
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
              name: 'EIKTO',
              description: 'Nosso nº conta no cliente/fornecedore',
              type: 'CHAR(12)',
            },
            {
              name: 'ZSABE',
              description: 'Encarregado no fornecedor',
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
              name: 'BUSAB',
              description: 'Responsável da contabilidade',
              type: 'CHAR(2)',
            },
            {
              name: 'LNRZE',
              description: 'Nº conta da sede',
              type: 'CHAR(10)',
            },
            {
              name: 'LNRZB',
              description: 'Nº conta do recebedor diferente de pagamento',
              type: 'CHAR(10)',
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
              name: 'DATLZ',
              description: 'Data CPU da última execução do programa de cálculo de juros',
              type: 'DATS(8)',
            },
            {
              name: 'XDEZV',
              description: 'Código: processamento descentralizado?',
              type: 'CHAR(1)',
            },
            {
              name: 'WEBTR',
              description: 'Limite do montante da letra de câmbio (em moeda interna)',
              type: 'CURR(13)',
            },
            {
              name: 'KULTG',
              description: 'Tempo previsto até pagamento do cheque',
              type: 'DEC(3)',
            },
            {
              name: 'REPRF',
              description: 'Nota de verificação p/fatura ou nota de crédito em duplicado',
              type: 'CHAR(1)',
            },
            {
              name: 'TOGRU',
              description: 'Grupo de tolerância para o parceiro de negócios/cta.Razão',
              type: 'CHAR(4)',
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
              name: 'QSZNR',
              description: 'Nº do certificado relativo à isenção de IRF',
              type: 'CHAR(10)',
            },
            {
              name: 'QSZDT',
              description: 'Data de validade do certificado de isenção de IRF',
              type: 'DATS(8)',
            },
            {
              name: 'QSSKZ',
              description: 'Código de imposto retido na fonte',
              type: 'CHAR(2)',
            },
            {
              name: 'BLNKZ',
              description: '(obsoleto) Cód.preferencial p/determinação da taxa redução',
              type: 'CHAR(2)',
            },
            {
              name: 'MINDK',
              description: 'Código de interesses minoritários',
              type: 'CHAR(3)',
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
              name: 'MGRUP',
              description: 'Chave para agrupamento de reclamações',
              type: 'CHAR(2)',
            },
            {
              name: 'UZAWE',
              description: 'Suplemento à forma de pagamento',
              type: 'CHAR(2)',
            },
            {
              name: 'QSREC',
              description: 'Escalão de IRF do fornecedor',
              type: 'CHAR(2)',
            },
            {
              name: 'QSBGR',
              description: 'Motivo de isenção do imposto retido na fonte',
              type: 'CHAR(1)',
            },
            {
              name: 'QLAND',
              description: 'Código do país relativo ao imposto retido na fonte',
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
              name: 'TLFXS',
              description: 'Nº telefax do responsável do parceiro de negócios',
              type: 'CHAR(31)',
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
              name: 'XAUSZ',
              description: 'Código: extratos de conta periódicos',
              type: 'CHAR(1)',
            },
            {
              name: 'CERDT',
              description: 'Data da certificação',
              type: 'DATS(8)',
            },
            {
              name: 'TOGRR',
              description: 'Grupo de tolerância revisão de faturas',
              type: 'CHAR(4)',
            },
            {
              name: 'PERNR',
              description: 'Nº pessoal',
              type: 'NUMC(8)',
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
              name: 'GMVKZK',
              description: 'Fornecedor em execução',
              type: 'CHAR(1)',
            },
            {
              name: 'PREPAY_RELEVANT',
              description: 'Relevância pagamento antecipado (mestre fornecedores)',
              type: 'CHAR(1)',
            },
            {
              name: 'ASSIGN_TEST',
              description: 'Grupo de teste de atribuição',
              type: 'CHAR(4)',
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
          children: [
            {
              segment: 'E1LFBWM',
              description: 'Segmento p/categoria IRF no mestre de fornecedores',
              max: 1,
              fields: [
                {
                  name: 'MSGFN',
                  description: 'Função',
                  type: 'CHAR(3)',
                },
                {
                  name: 'LIFNR',
                  description: 'Nº conta do fornecedor',
                  type: 'CHAR(10)',
                },
                {
                  name: 'BUKRS',
                  description: 'Empresa',
                  type: 'CHAR(4)',
                },
                {
                  name: 'WITHT',
                  description: 'Código para categoria de imposto retido na fonte',
                  type: 'CHAR(2)',
                },
                {
                  name: 'WT_SUBJCT',
                  description: 'Código: sujeito a IRS?',
                  type: 'CHAR(1)',
                },
                {
                  name: 'QSREC',
                  description: 'Escalão de IRF do fornecedor',
                  type: 'CHAR(2)',
                },
                {
                  name: 'WT_WTSTCD',
                  description: 'Nº identificação fiscal IRF',
                  type: 'CHAR(16)',
                },
                {
                  name: 'WT_WITHCD',
                  description: 'Código de imposto retido na fonte',
                  type: 'CHAR(2)',
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
                {
                  name: 'BUKRS_GL',
                  description: 'Empresa',
                  type: 'CHAR(4)',
                },
              ],
              children: [],
            },
            {
              segment: 'E1LFB5M',
              description: 'Dados de reclamação para fornecedores SMD',
              max: 1,
              fields: [
                {
                  name: 'MSGFN',
                  description: 'Função',
                  type: 'CHAR(3)',
                },
                {
                  name: 'LIFNR',
                  description: 'Nº conta do fornecedor',
                  type: 'CHAR(10)',
                },
                {
                  name: 'BUKRS',
                  description: 'Empresa',
                  type: 'CHAR(4)',
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
                  description: 'Campo de texto de comprimento 1',
                  type: 'CHAR(1)',
                },
                {
                  name: 'LFRMA',
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
                  description: 'Responsável da contabilidade',
                  type: 'CHAR(2)',
                },
              ],
              children: [],
            },
            {
              segment: 'E1LFB1H',
              description: 'Mestre de fornecedor empresa: textos, cabeçalho',
              max: 1,
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
              children: [
                {
                  segment: 'E1LFB1L',
                  description: 'Mestre de fornecedor empresa: linha de texto',
                  max: 1,
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
          ],
        },
        {
          segment: 'E1LFM1M',
          description: 'Segmento p/dados de organização de compras fornecedores SMD',
          max: 1,
          fields: [
            {
              name: 'MSGFN',
              description: 'Função',
              type: 'CHAR(3)',
            },
            {
              name: 'LIFNR',
              description: 'Nº conta do fornecedor',
              type: 'CHAR(10)',
            },
            {
              name: 'EKORG',
              description: 'Organização de compras',
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
              name: 'SPERM',
              description: 'Compras bloqueadas a nível da organização de compras',
              type: 'CHAR(1)',
            },
            {
              name: 'LOEVM',
              description: 'Marcação de eliminar p/fornecedor a nível de compras',
              type: 'CHAR(1)',
            },
            {
              name: 'LFABC',
              description: 'Código ABC',
              type: 'CHAR(1)',
            },
            {
              name: 'WAERS',
              description: 'Moeda do pedido',
              type: 'CUKY(5)',
            },
            {
              name: 'VERKF',
              description: 'Pessoa responsável no departamento de vendas do fornecedor',
              type: 'CHAR(30)',
            },
            {
              name: 'TELF1',
              description: 'Nº telefone do fornecedor',
              type: 'CHAR(16)',
            },
            {
              name: 'MINBW',
              description: 'Valor mínimo do pedido',
              type: 'CURR(13)',
            },
            {
              name: 'ZTERM',
              description: 'Chave de condições de pagamento',
              type: 'CHAR(4)',
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
              name: 'WEBRE',
              description: 'Código p/revisão de faturas baseado na entrada mercadorias',
              type: 'CHAR(1)',
            },
            {
              name: 'KZABS',
              description: 'Obrigatoriedade de confirmação da ordem',
              type: 'CHAR(1)',
            },
            {
              name: 'KALSK',
              description: 'Grupo para esquema de cálculo (fornecedor)',
              type: 'CHAR(2)',
            },
            {
              name: 'KZAUT',
              description: 'Pedido automático permitido',
              type: 'CHAR(1)',
            },
            {
              name: 'EXPVZ',
              description: 'Modo de transporte para comércio exterior',
              type: 'CHAR(1)',
            },
            {
              name: 'ZOLLA',
              description: 'Pst.alfândeg.: pst.alfând.saída/entrd. p/comércio exterior',
              type: 'CHAR(6)',
            },
            {
              name: 'MEPRF',
              description: 'Controle da data de determinação de preço',
              type: 'CHAR(1)',
            },
            {
              name: 'EKGRP',
              description: 'Grupo de compradores',
              type: 'CHAR(3)',
            },
            {
              name: 'BOLRE',
              description: 'Código: fornecedor é relevante para liquidação posterior',
              type: 'CHAR(1)',
            },
            {
              name: 'UMSAE',
              description: 'Ajuste de faturamento necessário',
              type: 'CHAR(1)',
            },
            {
              name: 'XERSY',
              description: 'Faturamento automático de entradas de mercadorias',
              type: 'CHAR(1)',
            },
            {
              name: 'PLIFZ',
              description: 'Prazo de entrega previsto em dias',
              type: 'DEC(3)',
            },
            {
              name: 'MRPPP',
              description: 'Calendário de planejamento',
              type: 'CHAR(3)',
            },
            {
              name: 'LFRHY',
              description: 'Ciclo MRP',
              type: 'CHAR(3)',
            },
            {
              name: 'LIEFR',
              description: 'Ciclo de fornecimento',
              type: 'CHAR(4)',
            },
            {
              name: 'LIBES',
              description: 'Entrada pedidos fornecedor',
              type: 'CHAR(1)',
            },
            {
              name: 'LIPRE',
              description: 'Marcação de preço - fornecedor',
              type: 'CHAR(2)',
            },
            {
              name: 'LISER',
              description: 'Serviço de prateleiras fornecedor',
              type: 'CHAR(1)',
            },
            {
              name: 'BOIND',
              description: 'Código: estrutura índice ativa p/liquidação posterior',
              type: 'CHAR(1)',
            },
            {
              name: 'PRFRE',
              description: 'Código "relev.p/determin.do preço" (hierarquia fornecedores)',
              type: 'CHAR(1)',
            },
            {
              name: 'NRGEW',
              description: 'Código se bonificação em espécie é concedida',
              type: 'CHAR(1)',
            },
            {
              name: 'BLIND',
              description: 'Código: estrutura do índice docs.ativa para pedidos',
              type: 'CHAR(1)',
            },
            {
              name: 'KZRET',
              description: 'Código: indica se é devolução com proc.entregas e expedição',
              type: 'CHAR(1)',
            },
            {
              name: 'SKRIT',
              description: 'Critério de ordenação do fornecedor para materiais',
              type: 'CHAR(1)',
            },
            {
              name: 'BSTAE',
              description: 'Chave de controle confirmação',
              type: 'CHAR(4)',
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
              name: 'VENSL',
              description: 'Grau de atendimento do fornecedor',
              type: 'DEC(4)',
            },
            {
              name: 'BOPNR',
              description: 'Perfil de restrição do agrupamento de pedidos',
              type: 'CHAR(4)',
            },
            {
              name: 'XERSR',
              description: 'Faturamento autom.entrada de mercadoria para itens devolução',
              type: 'CHAR(1)',
            },
            {
              name: 'EIKTO',
              description: 'Nosso nº conta junto ao fornecedor',
              type: 'CHAR(12)',
            },
            {
              name: 'PAPRF',
              description: 'Perfil para transmissão de dados de material via IDoc PROACT',
              type: 'CHAR(4)',
            },
            {
              name: 'AGREL',
              description: 'Código: relevante para agenciamento',
              type: 'CHAR(1)',
            },
            {
              name: 'XNBWY',
              description: 'Reavaliação admitida',
              type: 'CHAR(1)',
            },
            {
              name: 'VSBED',
              description: 'Condição de expedição',
              type: 'CHAR(2)',
            },
            {
              name: 'LEBRE',
              description: 'Código para revisão de faturas baseada em serviços',
              type: 'CHAR(1)',
            },
            {
              name: 'MINBW2',
              description: 'Valor mínimo de pedido (campo batch-input)',
              type: 'CHAR(16)',
            },
            {
              name: 'ACTIVITY_PROFIL',
              description: 'Perfil de atividade para o controlling de pedidos',
              type: 'CHAR(4)',
            },
            {
              name: 'TRANSPORT_CHAIN',
              description: 'Cadeia de transporte',
              type: 'CHAR(10)',
            },
            {
              name: 'STAGING_TIME',
              description: 'Tempo de disponibilização em dias',
              type: 'DEC(3)',
            },
            {
              name: 'VENDOR_RMA_REQ',
              description: 'Nº RMA de fornecedor necessário',
              type: 'CHAR(1)',
            },
          ],
          children: [
            {
              segment: 'E1LFM2M',
              description: 'Segmento dados de compras para fornecedores WWS SMD',
              max: 1,
              fields: [
                {
                  name: 'MSGFN',
                  description: 'Função',
                  type: 'CHAR(3)',
                },
                {
                  name: 'LIFNR',
                  description: 'Nº conta do fornecedor',
                  type: 'CHAR(10)',
                },
                {
                  name: 'EKORG',
                  description: 'Organização de compras',
                  type: 'CHAR(4)',
                },
                {
                  name: 'LTSNR',
                  description: 'Subsortimento do fornecedor',
                  type: 'CHAR(6)',
                },
                {
                  name: 'WERKS',
                  description: 'Centro',
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
                  name: 'SPERM',
                  description: 'Compras bloqueadas a nível da organização de compras',
                  type: 'CHAR(1)',
                },
                {
                  name: 'LOEVM',
                  description: 'Código de eliminação',
                  type: 'CHAR(1)',
                },
                {
                  name: 'LFABC',
                  description: 'Código ABC',
                  type: 'CHAR(1)',
                },
                {
                  name: 'WAERS',
                  description: 'Moeda do pedido',
                  type: 'CUKY(5)',
                },
                {
                  name: 'VERKF',
                  description: 'Pessoa responsável no departamento de vendas do fornecedor',
                  type: 'CHAR(30)',
                },
                {
                  name: 'TELF1',
                  description: 'Nº telefone do fornecedor',
                  type: 'CHAR(16)',
                },
                {
                  name: 'MINBW',
                  description: 'Valor mínimo do pedido',
                  type: 'CURR(13)',
                },
                {
                  name: 'ZTERM',
                  description: 'Chave de condições de pagamento',
                  type: 'CHAR(4)',
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
                  name: 'WEBRE',
                  description: 'Código p/revisão de faturas baseado na entrada mercadorias',
                  type: 'CHAR(1)',
                },
                {
                  name: 'KZABS',
                  description: 'Obrigatoriedade de confirmação da ordem',
                  type: 'CHAR(1)',
                },
                {
                  name: 'KALSK',
                  description: 'Grupo para esquema de cálculo (fornecedor)',
                  type: 'CHAR(2)',
                },
                {
                  name: 'KZAUT',
                  description: 'Pedido automático permitido',
                  type: 'CHAR(1)',
                },
                {
                  name: 'EXPVZ',
                  description: 'Modo de transporte para comércio exterior',
                  type: 'CHAR(1)',
                },
                {
                  name: 'ZOLLA',
                  description: 'Pst.alfândeg.: pst.alfând.saída/entrd. p/comércio exterior',
                  type: 'CHAR(6)',
                },
                {
                  name: 'MEPRF',
                  description: 'Controle da data de determinação de preço',
                  type: 'CHAR(1)',
                },
                {
                  name: 'EKGRP',
                  description: 'Grupo de compradores',
                  type: 'CHAR(3)',
                },
                {
                  name: 'BOLRE',
                  description: 'Código: fornecedor é relevante para liquidação posterior',
                  type: 'CHAR(1)',
                },
                {
                  name: 'UMSAE',
                  description: 'Ajuste de faturamento necessário',
                  type: 'CHAR(1)',
                },
                {
                  name: 'XERSY',
                  description: 'Faturamento automático de entradas de mercadorias',
                  type: 'CHAR(1)',
                },
                {
                  name: 'PLIFZ',
                  description: 'Prazo de entrega previsto em dias',
                  type: 'DEC(3)',
                },
                {
                  name: 'MRPPP',
                  description: 'Calendário de planejamento',
                  type: 'CHAR(3)',
                },
                {
                  name: 'LFRHY',
                  description: 'Ciclo MRP',
                  type: 'CHAR(3)',
                },
                {
                  name: 'LIEFR',
                  description: 'Ciclo de fornecimento',
                  type: 'CHAR(4)',
                },
                {
                  name: 'LIBES',
                  description: 'Entrada pedidos fornecedor',
                  type: 'CHAR(1)',
                },
                {
                  name: 'LIPRE',
                  description: 'Marcação de preço - fornecedor',
                  type: 'CHAR(2)',
                },
                {
                  name: 'LISER',
                  description: 'Serviço de prateleiras fornecedor',
                  type: 'CHAR(1)',
                },
                {
                  name: 'DISPO',
                  description: 'Planejador MRP',
                  type: 'CHAR(3)',
                },
                {
                  name: 'BSTAE',
                  description: 'Chave de controle confirmação',
                  type: 'CHAR(4)',
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
                  name: 'BOPNR',
                  description: 'Perfil de restrição do agrupamento de pedidos',
                  type: 'CHAR(4)',
                },
                {
                  name: 'XERSR',
                  description: 'Faturamento autom.entrada de mercadoria para itens devolução',
                  type: 'CHAR(1)',
                },
                {
                  name: 'ABUEB',
                  description: 'Perfil de criação das solicitação de remessa',
                  type: 'CHAR(4)',
                },
                {
                  name: 'PAPRF',
                  description: 'Perfil para transmissão de dados de material via IDoc PROACT',
                  type: 'CHAR(4)',
                },
                {
                  name: 'XNBWY',
                  description: 'Reavaliação admitida',
                  type: 'CHAR(1)',
                },
                {
                  name: 'LEBRE',
                  description: 'Código para revisão de faturas baseada em serviços',
                  type: 'CHAR(1)',
                },
                {
                  name: 'MINBW2',
                  description: 'Valor mínimo de pedido (campo batch-input)',
                  type: 'CHAR(16)',
                },
                {
                  name: 'TRANSPORT_CHAIN',
                  description: 'Cadeia de transporte',
                  type: 'CHAR(10)',
                },
                {
                  name: 'STAGING_TIME',
                  description: 'Tempo de disponibilização em dias',
                  type: 'DEC(3)',
                },
              ],
              children: [],
            },
            {
              segment: 'E1WYT3M',
              description: 'Segmento para endereços de fornecedores WWS SMD',
              max: 1,
              fields: [
                {
                  name: 'MSGFN',
                  description: 'Função',
                  type: 'CHAR(3)',
                },
                {
                  name: 'LIFNR',
                  description: 'Nº conta do fornecedor',
                  type: 'CHAR(10)',
                },
                {
                  name: 'EKORG',
                  description: 'Organização de compras',
                  type: 'CHAR(4)',
                },
                {
                  name: 'LTSNR',
                  description: 'Subsortimento do fornecedor',
                  type: 'CHAR(6)',
                },
                {
                  name: 'WERKS',
                  description: 'Centro',
                  type: 'CHAR(4)',
                },
                {
                  name: 'PARVW',
                  description: 'Função do parceiro',
                  type: 'CHAR(2)',
                },
                {
                  name: 'PARZA',
                  description: 'Numerador de parceiros',
                  type: 'NUMC(3)',
                },
                {
                  name: 'ERNAM',
                  description: 'Nome do responsável que adicionou o objeto',
                  type: 'CHAR(12)',
                },
                {
                  name: 'ERDAT',
                  description: 'Data de criação do registro',
                  type: 'DATS(8)',
                },
                {
                  name: 'LIFN2',
                  description: 'Referência a outro fornecedor',
                  type: 'CHAR(10)',
                },
                {
                  name: 'DEFPA',
                  description: 'Parceiro default',
                  type: 'CHAR(1)',
                },
                {
                  name: 'PERNR',
                  description: 'Nº pessoal',
                  type: 'NUMC(8)',
                },
              ],
              children: [],
            },
            {
              segment: 'E1LFM1H',
              description: 'Mestre de fornecedor organização de compras: textos, cabeç.',
              max: 1,
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
              children: [
                {
                  segment: 'E1LFM1L',
                  description: 'Mestre de fornecedor organização de compras: linha de texto',
                  max: 1,
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
          ],
        },
        {
          segment: 'E1LFBKM',
          description: 'Segmento para dados bancários do fornecedor SMD',
          max: 1,
          fields: [
            {
              name: 'MSGFN',
              description: 'Função',
              type: 'CHAR(3)',
            },
            {
              name: 'LIFNR',
              description: 'Nº conta do fornecedor',
              type: 'CHAR(10)',
            },
            {
              name: 'BANKS',
              description: 'Código do país do banco',
              type: 'CHAR(3)',
            },
            {
              name: 'BANKL',
              description: 'Chave do banco',
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
              name: 'BANKA',
              description: 'Nome da instituição financeira',
              type: 'CHAR(60)',
            },
            {
              name: 'PROVZ',
              description: 'Região (termo não usado a partir release 3.0D!!!)',
              type: 'CHAR(2)',
            },
            {
              name: 'STRAS',
              description: 'Rua (termo não usado a partir release 3.0D!!!)',
              type: 'CHAR(30)',
            },
            {
              name: 'ORT01',
              description: 'Cidade (termo não usado a partir de 3.0D!!!)',
              type: 'CHAR(25)',
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
              description: 'Campo de seleção',
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
              name: 'BKREF',
              description: 'Indicação de referência para os dados bancários',
              type: 'CHAR(20)',
            },
            {
              name: 'BRNCH',
              description: 'Agência do banco',
              type: 'CHAR(40)',
            },
            {
              name: 'PROV2',
              description: 'Região (estado federal, estado federado, província, condado)',
              type: 'CHAR(3)',
            },
            {
              name: 'STRA2',
              description: 'Rua e nº',
              type: 'CHAR(35)',
            },
            {
              name: 'ORT02',
              description: 'Local',
              type: 'CHAR(35)',
            },
            {
              name: 'KOINH',
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
          children: [],
        },
        {
          segment: 'E1LFASM',
          description: 'Segmento para número de identificação fiscal UE fornecedores',
          max: 1,
          fields: [
            {
              name: 'MSGFN',
              description: 'Função',
              type: 'CHAR(3)',
            },
            {
              name: 'LIFNR',
              description: 'Nº conta do fornecedor',
              type: 'CHAR(10)',
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
          children: [],
        },
        {
          segment: 'E1KNVKM',
          description: 'IDoc mestre de clientes pessoa de contato (KNVK)',
          max: 1,
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
          children: [],
        },
        {
          segment: 'E1WYT1M',
          description: 'Segmento para gama parcial de produtos WWS SMD',
          max: 1,
          fields: [
            {
              name: 'MSGFN',
              description: 'Função',
              type: 'CHAR(3)',
            },
            {
              name: 'LIFNR',
              description: 'Nº conta do fornecedor',
              type: 'CHAR(10)',
            },
            {
              name: 'LTSNR',
              description: 'Subsortimento do fornecedor',
              type: 'CHAR(6)',
            },
            {
              name: 'ERNAM',
              description: 'Nome do responsável que adicionou o objeto',
              type: 'CHAR(12)',
            },
            {
              name: 'ERDAT',
              description: 'Data de criação do registro',
              type: 'DATS(8)',
            },
            {
              name: 'SPRAS',
              description: 'Código de idioma',
              type: 'LANG(1)',
            },
            {
              name: 'LTSBZ',
              description: 'Denominação',
              type: 'CHAR(20)',
            },
          ],
          children: [
            {
              segment: 'E1WYTTM',
              description: 'Segmento para denominação da gama parcial de produtos SMD',
              max: 1,
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
                  name: 'LIFNR',
                  description: 'Nº conta do fornecedor',
                  type: 'CHAR(10)',
                },
                {
                  name: 'LTSNR',
                  description: 'Subsortimento do fornecedor',
                  type: 'CHAR(6)',
                },
                {
                  name: 'LTSBZ',
                  description: 'Denominação',
                  type: 'CHAR(20)',
                },
              ],
              children: [],
            },
          ],
        },
      ],
    },
  ],
};
