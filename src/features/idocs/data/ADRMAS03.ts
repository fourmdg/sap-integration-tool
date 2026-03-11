/**
 * Dados do IDoc ADRMAS03 - Mestre de Endereços
 * 22 segmentos, 287 campos
 * Gerado automaticamente a partir do HTML original
 */
import type { IdocData } from '../types';

export const ADRMAS_DATA: IdocData = {
  title: 'ADRMAS03 - Mestre de Endereços',
  description: 'IDoc para distribuição de dados mestres',
  tree: [
    {
      segment: 'E1ADRMAS',
      description: 'Segmento de cabeçalho',
      max: 1,
      fields: [
        {
          name: 'OBJ_TYPE',
          description: 'Tipo de objeto do objeto proprietário para endereço',
          type: 'CHAR(10)',
        },
        {
          name: 'OBJ_ID',
          description: 'ID objeto do objeto proprietário para endereço',
          type: 'CHAR(70)',
        },
        {
          name: 'OBJ_ID_EXT',
          description: 'Chave de objeto',
          type: 'CHAR(70)',
        },
        {
          name: 'CONTEXT',
          description: 'Descrição semântica de um endereço de um objeto',
          type: 'NUMC(4)',
        },
        {
          name: 'IV_CHECK_ADDRESS',
          description: 'Código: verificar endereço?',
          type: 'CHAR(1)',
        },
        {
          name: 'IV_TIME_DEPENDENT_COMM_DATA',
          description: 'Código: período de validade para dados para comunicação',
          type: 'CHAR(1)',
        },
      ],
      children: [
        {
          segment: 'E1BPAD1VL',
          description: 'Estrutura BAPI para distribuição de endereços',
          max: 999999999,
          fields: [
            {
              name: 'ADDR_VERS',
              description: 'Código de versão para endereços internacionais',
              type: 'CHAR(1)',
            },
            {
              name: 'FROM_DATE',
              description: 'Data "válido de" - no release atual só é possível 00010101',
              type: 'DATS(8)',
            },
            {
              name: 'TO_DATE',
              description: 'Data "válido até" - no release atual só é possível 99991231',
              type: 'DATS(8)',
            },
            {
              name: 'TITLE',
              description: 'Chave de forma de tratamento',
              type: 'CHAR(4)',
            },
            {
              name: 'NAME',
              description: 'Nome 1',
              type: 'CHAR(40)',
            },
            {
              name: 'NAME_2',
              description: 'Nome 2',
              type: 'CHAR(40)',
            },
            {
              name: 'NAME_3',
              description: 'Nome 3',
              type: 'CHAR(40)',
            },
            {
              name: 'NAME_4',
              description: 'Nome 4',
              type: 'CHAR(40)',
            },
            {
              name: 'CONV_NAME',
              description: 'Campo de nome convertido (com forma de tratamento)',
              type: 'CHAR(50)',
            },
            {
              name: 'C_O_NAME',
              description: 'Nome c/o',
              type: 'CHAR(40)',
            },
            {
              name: 'CITY',
              description: 'Local',
              type: 'CHAR(40)',
            },
            {
              name: 'DISTRICT',
              description: 'Bairro',
              type: 'CHAR(40)',
            },
            {
              name: 'CITY_NO',
              description: 'Codificação da localidade para file de localidades e ruas',
              type: 'CHAR(12)',
            },
            {
              name: 'DISTRCT_NO',
              description: 'Codificação do bairro para file de bairros e ruas',
              type: 'CHAR(8)',
            },
            {
              name: 'CHCKSTATUS',
              description: 'Status de verificação para file de localidades',
              type: 'CHAR(1)',
            },
            {
              name: 'REGIOGROUP',
              description: 'Agrupamento da estrutura regional',
              type: 'CHAR(8)',
            },
            {
              name: 'POSTL_COD1',
              description: 'Código postal da localidade',
              type: 'CHAR(10)',
            },
            {
              name: 'POSTL_COD2',
              description: 'Código postal da cx.postal',
              type: 'CHAR(10)',
            },
            {
              name: 'POSTL_COD3',
              description: 'Código postal da empresa (para clientes importantes)',
              type: 'CHAR(10)',
            },
            {
              name: 'PCODE1_EXT',
              description: 'Ampl.p/cód.postal local, p.ex.cód.ZIP+4+2 (não suportado)',
              type: 'CHAR(10)',
            },
            {
              name: 'PCODE2_EXT',
              description: 'Ampliação p/cód.postal da caixa postal (não suportada)',
              type: 'CHAR(10)',
            },
            {
              name: 'PCODE3_EXT',
              description: 'Ampliação p/cód.postal de cliente importante (não suportada)',
              type: 'CHAR(10)',
            },
            {
              name: 'PO_BOX',
              description: 'Caixa postal',
              type: 'CHAR(10)',
            },
            {
              name: 'PO_W_O_NO',
              description: 'Código: indicação de caixa postal sem nº',
              type: 'CHAR(1)',
            },
            {
              name: 'PO_BOX_CIT',
              description: 'Localidade da caixa postal',
              type: 'CHAR(40)',
            },
            {
              name: 'PBOXCIT_NO',
              description: 'Codificação localidade por caixa postal (file localidades)',
              type: 'CHAR(12)',
            },
            {
              name: 'PO_BOX_REG',
              description: 'Região para a caixa postal (país, estado, província, ...)',
              type: 'CHAR(3)',
            },
            {
              name: 'POBOX_CTRY',
              description: 'País da caixa postal',
              type: 'CHAR(3)',
            },
            {
              name: 'PO_CTRYISO',
              description: 'Código ISO do país',
              type: 'CHAR(2)',
            },
            {
              name: 'DELIV_DIS',
              description: 'Distrito postal (não suportado)',
              type: 'CHAR(15)',
            },
            {
              name: 'TRANSPZONE',
              description: 'Zona de transporte para a qual ou da qual é fornecido',
              type: 'CHAR(10)',
            },
            {
              name: 'STREET',
              description: 'Rua',
              type: 'CHAR(60)',
            },
            {
              name: 'STREET_NO',
              description: 'Codificação da rua para file de localidades e ruas',
              type: 'CHAR(12)',
            },
            {
              name: 'STR_ABBR',
              description: 'Abreviatura da denominação de rua (não suportada)',
              type: 'CHAR(2)',
            },
            {
              name: 'HOUSE_NO',
              description: 'Nº',
              type: 'CHAR(10)',
            },
            {
              name: 'HOUSE_NO2',
              description: 'Complemento do nº',
              type: 'CHAR(10)',
            },
            {
              name: 'HOUSE_NO3',
              description: 'Área do nº (não suportado)',
              type: 'CHAR(10)',
            },
            {
              name: 'STR_SUPPL1',
              description: 'Rua 2',
              type: 'CHAR(40)',
            },
            {
              name: 'STR_SUPPL2',
              description: 'Rua 3',
              type: 'CHAR(40)',
            },
            {
              name: 'STR_SUPPL3',
              description: 'Rua 4',
              type: 'CHAR(40)',
            },
            {
              name: 'LOCATION',
              description: 'Rua 5',
              type: 'CHAR(40)',
            },
            {
              name: 'BUILDING',
              description: 'Edifício (nº ou sigla)',
              type: 'CHAR(20)',
            },
            {
              name: 'FLOOR',
              description: 'Andar do edifício',
              type: 'CHAR(10)',
            },
            {
              name: 'ROOM_NO',
              description: 'Nº morada, apartamento ou sala',
              type: 'CHAR(10)',
            },
            {
              name: 'COUNTRY',
              description: 'Chave do país',
              type: 'CHAR(3)',
            },
            {
              name: 'COUNTRYISO',
              description: 'Código ISO do país',
              type: 'CHAR(2)',
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
              name: 'REGION',
              description: 'Região (estado federal, estado federado, província, condado)',
              type: 'CHAR(3)',
            },
            {
              name: 'SORT1',
              description: 'Termo de pesquisa 1',
              type: 'CHAR(20)',
            },
            {
              name: 'SORT2',
              description: 'Termo de pesquisa 2',
              type: 'CHAR(20)',
            },
            {
              name: 'EXTENS_1',
              description: 'Ampl.(só p/conversão dds.) (p.ex.linha transmissão dds.)',
              type: 'CHAR(40)',
            },
            {
              name: 'EXTENS_2',
              description: 'Ampliação (só p/conversão dados) (p.ex.telebox)',
              type: 'CHAR(40)',
            },
            {
              name: 'TIME_ZONE',
              description: 'Fuso horário do endereço',
              type: 'CHAR(6)',
            },
            {
              name: 'TAXJURCODE',
              description: 'Domicílio fiscal',
              type: 'CHAR(15)',
            },
          ],
          children: [
            {
              segment: 'E1BPAD1VL1',
              description:
                'Estrutura BAPI p/distribuição de categoria destinatário\n                                1',
              max: 1,
              fields: [
                {
                  name: 'ADDRESS_ID',
                  description: 'ID de endereço para endereço físico (não suportado)',
                  type: 'CHAR(10)',
                },
                {
                  name: 'LANGU_CR',
                  description: 'Idioma original na criação do registro de endereços',
                  type: 'LANG(1)',
                },
                {
                  name: 'LANGUCRISO',
                  description: 'Código de idiomas SAP de 2 dígitos',
                  type: 'CHAR(2)',
                },
                {
                  name: 'COMM_TYPE',
                  description: 'Meio comunicação (chave) (administração endereços central)',
                  type: 'CHAR(3)',
                },
                {
                  name: 'ADDR_GROUP',
                  description: 'Grupo endereços (chave) (administração de endereços central)',
                  type: 'CHAR(4)',
                },
                {
                  name: 'HOME_CITY',
                  description: 'Localidade de residência (diferente da localidade postal)',
                  type: 'CHAR(40)',
                },
                {
                  name: 'HOMECITYNO',
                  description: 'Codificação local.residência diferente p/file ruas/localids.',
                  type: 'CHAR(12)',
                },
                {
                  name: 'DONT_USE_S',
                  description: 'Código para impossibilidade entrega no endereço de rua',
                  type: 'CHAR(4)',
                },
                {
                  name: 'DONT_USE_P',
                  description: 'Código para impossibilidade entrega em endereço caixa postal',
                  type: 'CHAR(4)',
                },
                {
                  name: 'PO_BOX_LOBBY',
                  description: 'Agência da caixa postal (PO Box Lobby)',
                  type: 'CHAR(40)',
                },
                {
                  name: 'DELI_SERV_TYPE',
                  description: 'Tipo do serviço de entrega',
                  type: 'CHAR(4)',
                },
                {
                  name: 'DELI_SERV_NUMBER',
                  description: 'Nº do serviço de entrega',
                  type: 'CHAR(10)',
                },
                {
                  name: 'COUNTY_CODE',
                  description: 'Código para município',
                  type: 'CHAR(8)',
                },
                {
                  name: 'COUNTY',
                  description: 'Distrito',
                  type: 'CHAR(40)',
                },
                {
                  name: 'TOWNSHIP_CODE',
                  description: 'Código para cidade',
                  type: 'CHAR(8)',
                },
                {
                  name: 'TOWNSHIP',
                  description: 'Cidade',
                  type: 'CHAR(40)',
                },
              ],
              children: [],
            },
          ],
        },
        {
          segment: 'E1BPADTEL',
          description:
            'Estrutura BAPI p/nºs de telefone (admin.endereços\n                                central)',
          max: 999999999,
          fields: [
            {
              name: 'COUNTRY',
              description: 'País para nº de telefone/fax',
              type: 'CHAR(3)',
            },
            {
              name: 'COUNTRYISO',
              description: 'Código ISO do país',
              type: 'CHAR(2)',
            },
            {
              name: 'STD_NO',
              description: 'Endereço remetente standard neste tipo de comunicação',
              type: 'CHAR(1)',
            },
            {
              name: 'TELEPHONE',
              description: 'Nº telefone: código telefónico+nº',
              type: 'CHAR(30)',
            },
            {
              name: 'EXTENSION',
              description: 'Nº de telefone: extensão',
              type: 'CHAR(10)',
            },
            {
              name: 'TEL_NO',
              description: 'Nº completo: código telefónico+nº+extensão',
              type: 'CHAR(30)',
            },
            {
              name: 'CALLER_NO',
              description: 'Nº telefone para determinação do chamador',
              type: 'CHAR(30)',
            },
            {
              name: 'STD_RECIP',
              description: 'Código: telefone compatível com SMS',
              type: 'CHAR(1)',
            },
            {
              name: 'R_3_USER',
              description: 'Código: o telefone é um telefone celular',
              type: 'CHAR(1)',
            },
            {
              name: 'HOME_FLAG',
              description: 'Endereço destinat.neste tp.comunic.(rede correio eletrônico)',
              type: 'CHAR(1)',
            },
            {
              name: 'CONSNUMBER',
              description: 'Nº sequencial',
              type: 'NUMC(3)',
            },
            {
              name: 'ERRORFLAG',
              description: 'Código: registro não processado',
              type: 'CHAR(1)',
            },
            {
              name: 'FLG_NOUSE',
              description: 'Código: sem utilizar este nº de comunicação',
              type: 'CHAR(1)',
            },
            {
              name: 'VALID_FROM',
              description: 'Dados para comunicação: válido desde (AAAAMMDDHHMMSS)',
              type: 'CHAR(14)',
            },
            {
              name: 'VALID_TO',
              description: 'Dados para comunicação: válido até (AAAAMMDDHHMMSS)',
              type: 'CHAR(14)',
            },
          ],
          children: [],
        },
        {
          segment: 'E1BPADFAX',
          description:
            'Estrutura BAPI p/nºs fax (administração endereços\n                                central)',
          max: 999999999,
          fields: [
            {
              name: 'COUNTRY',
              description: 'País para nº de telefone/fax',
              type: 'CHAR(3)',
            },
            {
              name: 'COUNTRYISO',
              description: 'Código ISO do país',
              type: 'CHAR(2)',
            },
            {
              name: 'STD_NO',
              description: 'Endereço remetente standard neste tipo de comunicação',
              type: 'CHAR(1)',
            },
            {
              name: 'FAX',
              description: 'Nº de fax: prefixo + número',
              type: 'CHAR(30)',
            },
            {
              name: 'EXTENSION',
              description: 'Nº fax: extensão',
              type: 'CHAR(10)',
            },
            {
              name: 'FAX_NO',
              description: 'Nº completo: código telefónico+nº+extensão',
              type: 'CHAR(30)',
            },
            {
              name: 'SENDER_NO',
              description: 'Nº de fax p/determinação de remetente',
              type: 'CHAR(30)',
            },
            {
              name: 'FAX_GROUP',
              description: 'Grupo fax (G3, G4, ...)',
              type: 'CHAR(1)',
            },
            {
              name: 'STD_RECIP',
              description: 'Código: destinatário standard para este nº',
              type: 'CHAR(1)',
            },
            {
              name: 'R_3_USER',
              description: 'Código: o lado oposto está ligado ao sistema da SAP',
              type: 'CHAR(1)',
            },
            {
              name: 'HOME_FLAG',
              description: 'Endereço destinat.neste tp.comunic.(rede correio eletrônico)',
              type: 'CHAR(1)',
            },
            {
              name: 'CONSNUMBER',
              description: 'Nº sequencial',
              type: 'NUMC(3)',
            },
            {
              name: 'ERRORFLAG',
              description: 'Código: registro não processado',
              type: 'CHAR(1)',
            },
            {
              name: 'FLG_NOUSE',
              description: 'Código: sem utilizar este nº de comunicação',
              type: 'CHAR(1)',
            },
            {
              name: 'VALID_FROM',
              description: 'Dados para comunicação: válido desde (AAAAMMDDHHMMSS)',
              type: 'CHAR(14)',
            },
            {
              name: 'VALID_TO',
              description: 'Dados para comunicação: válido até (AAAAMMDDHHMMSS)',
              type: 'CHAR(14)',
            },
          ],
          children: [],
        },
        {
          segment: 'E1BPADTTX',
          description: 'Estrutura BAPI p/nºs teletex (admin.endereços central)',
          max: 999999999,
          fields: [
            {
              name: 'COUNTRY',
              description: 'Chave do país',
              type: 'CHAR(3)',
            },
            {
              name: 'COUNTRYISO',
              description: 'Código ISO do país',
              type: 'CHAR(2)',
            },
            {
              name: 'STD_NO',
              description: 'Endereço remetente standard neste tipo de comunicação',
              type: 'CHAR(1)',
            },
            {
              name: 'TELETEX',
              description: 'Nº teletex',
              type: 'CHAR(30)',
            },
            {
              name: 'STD_RECIP',
              description: 'Código: destinatário standard para este nº',
              type: 'CHAR(1)',
            },
            {
              name: 'R_3_USER',
              description: 'Código: o lado oposto está ligado ao sistema da SAP',
              type: 'CHAR(1)',
            },
            {
              name: 'HOME_FLAG',
              description: 'Endereço destinat.neste tp.comunic.(rede correio eletrônico)',
              type: 'CHAR(1)',
            },
            {
              name: 'CONSNUMBER',
              description: 'Nº sequencial',
              type: 'NUMC(3)',
            },
            {
              name: 'ERRORFLAG',
              description: 'Código: registro não processado',
              type: 'CHAR(1)',
            },
            {
              name: 'FLG_NOUSE',
              description: 'Código: sem utilizar este nº de comunicação',
              type: 'CHAR(1)',
            },
            {
              name: 'VALID_FROM',
              description: 'Dados para comunicação: válido desde (AAAAMMDDHHMMSS)',
              type: 'CHAR(14)',
            },
            {
              name: 'VALID_TO',
              description: 'Dados para comunicação: válido até (AAAAMMDDHHMMSS)',
              type: 'CHAR(14)',
            },
          ],
          children: [],
        },
        {
          segment: 'E1BPADTLX',
          description:
            'Estrutura BAPI p/nºs telex (administração endereços\n                                central)',
          max: 999999999,
          fields: [
            {
              name: 'COUNTRY',
              description: 'Chave do país',
              type: 'CHAR(3)',
            },
            {
              name: 'COUNTRYISO',
              description: 'Código ISO do país',
              type: 'CHAR(2)',
            },
            {
              name: 'STD_NO',
              description: 'Endereço remetente standard neste tipo de comunicação',
              type: 'CHAR(1)',
            },
            {
              name: 'TELEX_NO',
              description: 'Nº telex',
              type: 'CHAR(30)',
            },
            {
              name: 'STD_RECIP',
              description: 'Código: destinatário standard para este nº',
              type: 'CHAR(1)',
            },
            {
              name: 'R_3_USER',
              description: 'Código: o lado oposto está ligado ao sistema da SAP',
              type: 'CHAR(1)',
            },
            {
              name: 'HOME_FLAG',
              description: 'Endereço destinat.neste tp.comunic.(rede correio eletrônico)',
              type: 'CHAR(1)',
            },
            {
              name: 'CONSNUMBER',
              description: 'Nº sequencial',
              type: 'NUMC(3)',
            },
            {
              name: 'ERRORFLAG',
              description: 'Código: registro não processado',
              type: 'CHAR(1)',
            },
            {
              name: 'FLG_NOUSE',
              description: 'Código: sem utilizar este nº de comunicação',
              type: 'CHAR(1)',
            },
            {
              name: 'VALID_FROM',
              description: 'Dados para comunicação: válido desde (AAAAMMDDHHMMSS)',
              type: 'CHAR(14)',
            },
            {
              name: 'VALID_TO',
              description: 'Dados para comunicação: válido até (AAAAMMDDHHMMSS)',
              type: 'CHAR(14)',
            },
          ],
          children: [],
        },
        {
          segment: 'E1BPADSMTP',
          description:
            'Estrutura BAPI p/endereços e-mail (admin.endereços\n                                central)',
          max: 999999999,
          fields: [
            {
              name: 'STD_NO',
              description: 'Endereço remetente standard neste tipo de comunicação',
              type: 'CHAR(1)',
            },
            {
              name: 'E_MAIL',
              description: 'Endereço de e-mail',
              type: 'CHAR(241)',
            },
            {
              name: 'EMAIL_SRCH',
              description: 'Campo de pesquisa para o endereço de e-mail',
              type: 'CHAR(20)',
            },
            {
              name: 'STD_RECIP',
              description: 'Código: destinatário standard para este nº',
              type: 'CHAR(1)',
            },
            {
              name: 'R_3_USER',
              description: 'Código: o lado oposto está ligado ao sistema da SAP',
              type: 'CHAR(1)',
            },
            {
              name: 'ENCODE',
              description: 'Codificação de dados desejada (e-mail)',
              type: 'CHAR(1)',
            },
            {
              name: 'TNEF',
              description: 'Código: receptor pode receber codif.TNEF através de SMTP',
              type: 'CHAR(1)',
            },
            {
              name: 'HOME_FLAG',
              description: 'Endereço destinat.neste tp.comunic.(rede correio eletrônico)',
              type: 'CHAR(1)',
            },
            {
              name: 'CONSNUMBER',
              description: 'Nº sequencial',
              type: 'NUMC(3)',
            },
            {
              name: 'ERRORFLAG',
              description: 'Código: registro não processado',
              type: 'CHAR(1)',
            },
            {
              name: 'FLG_NOUSE',
              description: 'Código: sem utilizar este nº de comunicação',
              type: 'CHAR(1)',
            },
            {
              name: 'VALID_FROM',
              description: 'Dados para comunicação: válido desde (AAAAMMDDHHMMSS)',
              type: 'CHAR(14)',
            },
            {
              name: 'VALID_TO',
              description: 'Dados para comunicação: válido até (AAAAMMDDHHMMSS)',
              type: 'CHAR(14)',
            },
          ],
          children: [],
        },
        {
          segment: 'E1BPADRML',
          description: 'Estrutura BAPI p/endereços RML (admin.endereços central)',
          max: 999999999,
          fields: [
            {
              name: 'STD_NO',
              description: 'Endereço remetente standard neste tipo de comunicação',
              type: 'CHAR(1)',
            },
            {
              name: 'SYMB_DEST',
              description: 'Destino simbólico',
              type: 'CHAR(10)',
            },
            {
              name: 'REC_TYPE',
              description: 'Tp.destinatário (atualmente o campo não está sendo utiliz.)',
              type: 'CHAR(1)',
            },
            {
              name: 'R_MAIL_CLT',
              description: 'Mandante mail remoto (mail remoto, SAP - comunicação SAP)',
              type: 'CHAR(3)',
            },
            {
              name: 'R_MAIL',
              description: 'RML - nome (mail remoto, SAP - comunicação SAP)',
              type: 'CHAR(12)',
            },
            {
              name: 'STD_RECIP',
              description: 'Código: destinatário standard para este nº',
              type: 'CHAR(1)',
            },
            {
              name: 'R_3_USER',
              description: 'Código: o lado oposto está ligado ao sistema da SAP',
              type: 'CHAR(1)',
            },
            {
              name: 'HOME_FLAG',
              description: 'Endereço destinat.neste tp.comunic.(rede correio eletrônico)',
              type: 'CHAR(1)',
            },
            {
              name: 'CONSNUMBER',
              description: 'Nº sequencial',
              type: 'NUMC(3)',
            },
            {
              name: 'ERRORFLAG',
              description: 'Código: registro não processado',
              type: 'CHAR(1)',
            },
            {
              name: 'FLG_NOUSE',
              description: 'Código: sem utilizar este nº de comunicação',
              type: 'CHAR(1)',
            },
            {
              name: 'VALID_FROM',
              description: 'Dados para comunicação: válido desde (AAAAMMDDHHMMSS)',
              type: 'CHAR(14)',
            },
            {
              name: 'VALID_TO',
              description: 'Dados para comunicação: válido até (AAAAMMDDHHMMSS)',
              type: 'CHAR(14)',
            },
          ],
          children: [],
        },
        {
          segment: 'E1BPADX400',
          description:
            'Estrutura BAPI p/endereços X.400 (admin.endereços\n                                central)',
          max: 999999999,
          fields: [
            {
              name: 'STD_NO',
              description: 'Endereço remetente standard neste tipo de comunicação',
              type: 'CHAR(1)',
            },
            {
              name: 'COUNTRY',
              description: 'Chave de países X.400',
              type: 'CHAR(3)',
            },
            {
              name: 'COUNTRYISO',
              description: 'Código ISO do país',
              type: 'CHAR(2)',
            },
            {
              name: 'ADM_DOM',
              description: 'Domínio de administração X.400',
              type: 'CHAR(16)',
            },
            {
              name: 'PRIV_DOM',
              description: 'Domínio privado X.400',
              type: 'CHAR(16)',
            },
            {
              name: 'ORGANIZATN',
              description: 'Organização X.400',
              type: 'CHAR(64)',
            },
            {
              name: 'ORG_UNIT_1',
              description: 'Unidade organizacional 1 X.400',
              type: 'CHAR(32)',
            },
            {
              name: 'ORG_UNIT_2',
              description: 'Unidade organizacional 2 X.400',
              type: 'CHAR(32)',
            },
            {
              name: 'ORG_UNIT_3',
              description: 'Unidade organizacional 3 X.400',
              type: 'CHAR(32)',
            },
            {
              name: 'ORG_UNIT_4',
              description: 'Unidade organizacional 4 X.400',
              type: 'CHAR(32)',
            },
            {
              name: 'LASTNAME',
              description: 'Sobrenome X.400',
              type: 'CHAR(40)',
            },
            {
              name: 'FIRSTNAME',
              description: 'Nome próprio X.400',
              type: 'CHAR(16)',
            },
            {
              name: 'INITIALS',
              description: 'Iniciais X.400',
              type: 'CHAR(5)',
            },
            {
              name: 'GENERATION',
              description: 'Geração X.400',
              type: 'CHAR(3)',
            },
            {
              name: 'X_121_ADDR',
              description: 'Endereço de rede X.400 X.121',
              type: 'CHAR(15)',
            },
            {
              name: 'TERM_ID',
              description: 'ID de terminal X.400',
              type: 'CHAR(24)',
            },
            {
              name: 'TERM_TYPE',
              description: 'Categoria de terminal X.400',
              type: 'CHAR(1)',
            },
            {
              name: 'UANID',
              description: 'ID numérica de agente de usuário X.400',
              type: 'CHAR(32)',
            },
            {
              name: 'DDA_TYPE1',
              description: 'X.400 Domain Defined Attribute, tipo 1',
              type: 'CHAR(8)',
            },
            {
              name: 'DDA_VALUE1',
              description: 'Domain Defined Attribute X.400, valor 1',
              type: 'CHAR(128)',
            },
            {
              name: 'DDA_TYPE2',
              description: 'X.400 Domain Defined Attribute, tipo 2',
              type: 'CHAR(8)',
            },
            {
              name: 'DDA_VALUE2',
              description: 'Domain Defined Attribute X.400, valor 2',
              type: 'CHAR(128)',
            },
            {
              name: 'DDA_TYPE3',
              description: 'X.400 Domain Defined Attribute, tipo 3',
              type: 'CHAR(8)',
            },
            {
              name: 'DDA_VALUE3',
              description: 'Domain Defined Attribute X.400, valor 3',
              type: 'CHAR(128)',
            },
            {
              name: 'DDA_TYPE4',
              description: 'X.400 Domain Defined Attribute, tipo 4',
              type: 'CHAR(8)',
            },
            {
              name: 'DDA_VALUE4',
              description: 'Domain Defined Attribute X.400, valor 4',
              type: 'CHAR(128)',
            },
            {
              name: 'STD_RECIP',
              description: 'Código: destinatário standard para este nº',
              type: 'CHAR(1)',
            },
            {
              name: 'R_3_USER',
              description: 'Código: o lado oposto está ligado ao sistema da SAP',
              type: 'CHAR(1)',
            },
            {
              name: 'TXT_ENCODE',
              description: 'Codificação de dados de texto pretendida (X.400)',
              type: 'CHAR(1)',
            },
            {
              name: 'TNEF',
              description: 'Código: receptor pode receber codif.TNEF através de X.400',
              type: 'CHAR(1)',
            },
            {
              name: 'HOME_FLAG',
              description: 'Endereço destinat.neste tp.comunic.(rede correio eletrônico)',
              type: 'CHAR(1)',
            },
            {
              name: 'CONSNUMBER',
              description: 'Nº sequencial',
              type: 'NUMC(3)',
            },
            {
              name: 'ERRORFLAG',
              description: 'Código: registro não processado',
              type: 'CHAR(1)',
            },
            {
              name: 'FLG_NOUSE',
              description: 'Código: sem utilizar este nº de comunicação',
              type: 'CHAR(1)',
            },
            {
              name: 'VALID_FROM',
              description: 'Dados para comunicação: válido desde (AAAAMMDDHHMMSS)',
              type: 'CHAR(14)',
            },
            {
              name: 'VALID_TO',
              description: 'Dados para comunicação: válido até (AAAAMMDDHHMMSS)',
              type: 'CHAR(14)',
            },
          ],
          children: [],
        },
        {
          segment: 'E1BPADRFC',
          description: 'Estrutura BAPI p/endereços RFC (admin.endereços central)',
          max: 999999999,
          fields: [
            {
              name: 'STD_NO',
              description: 'Endereço remetente standard neste tipo de comunicação',
              type: 'CHAR(1)',
            },
            {
              name: 'LOG_DEST',
              description: 'Destino lógico RFC',
              type: 'CHAR(32)',
            },
            {
              name: 'STD_RECIP',
              description: 'Código: destinatário standard para este nº',
              type: 'CHAR(1)',
            },
            {
              name: 'R_3_USER',
              description: 'Código: o lado oposto está ligado ao sistema da SAP',
              type: 'CHAR(1)',
            },
            {
              name: 'HOME_FLAG',
              description: 'Endereço destinat.neste tp.comunic.(rede correio eletrônico)',
              type: 'CHAR(1)',
            },
            {
              name: 'CONSNUMBER',
              description: 'Nº sequencial',
              type: 'NUMC(3)',
            },
            {
              name: 'ERRORFLAG',
              description: 'Código: registro não processado',
              type: 'CHAR(1)',
            },
            {
              name: 'FLG_NOUSE',
              description: 'Código: sem utilizar este nº de comunicação',
              type: 'CHAR(1)',
            },
            {
              name: 'VALID_FROM',
              description: 'Dados para comunicação: válido desde (AAAAMMDDHHMMSS)',
              type: 'CHAR(14)',
            },
            {
              name: 'VALID_TO',
              description: 'Dados para comunicação: válido até (AAAAMMDDHHMMSS)',
              type: 'CHAR(14)',
            },
          ],
          children: [],
        },
        {
          segment: 'E1BPADPRT',
          description: 'Estrutura BAPI p/endereços PRT (admin.endereços central)',
          max: 999999999,
          fields: [
            {
              name: 'STD_NO',
              description: 'Endereço remetente standard neste tipo de comunicação',
              type: 'CHAR(1)',
            },
            {
              name: 'PRINT_DEST',
              description: 'Spool: dispositivo de saída',
              type: 'CHAR(4)',
            },
            {
              name: 'STD_RECIP',
              description: 'Código: destinatário standard para este nº',
              type: 'CHAR(1)',
            },
            {
              name: 'HOME_FLAG',
              description: 'Endereço destinat.neste tp.comunic.(rede correio eletrônico)',
              type: 'CHAR(1)',
            },
            {
              name: 'CONSNUMBER',
              description: 'Nº sequencial',
              type: 'NUMC(3)',
            },
            {
              name: 'ERRORFLAG',
              description: 'Código: registro não processado',
              type: 'CHAR(1)',
            },
            {
              name: 'FLG_NOUSE',
              description: 'Código: sem utilizar este nº de comunicação',
              type: 'CHAR(1)',
            },
            {
              name: 'VALID_FROM',
              description: 'Dados para comunicação: válido desde (AAAAMMDDHHMMSS)',
              type: 'CHAR(14)',
            },
            {
              name: 'VALID_TO',
              description: 'Dados para comunicação: válido até (AAAAMMDDHHMMSS)',
              type: 'CHAR(14)',
            },
          ],
          children: [],
        },
        {
          segment: 'E1BPADSSF',
          description:
            'Estrutura BAPI p/endereços SSF (administr.central\n                                endereços)',
          max: 999999999,
          fields: [
            {
              name: 'STD_NO',
              description: 'Endereço remetente standard neste tipo de comunicação',
              type: 'CHAR(1)',
            },
            {
              name: 'DUMMY',
              description: 'Código de um caractere',
              type: 'CHAR(1)',
            },
            {
              name: 'STD_RECIP',
              description: 'Código: destinatário standard para este nº',
              type: 'CHAR(1)',
            },
            {
              name: 'HOME_FLAG',
              description: 'Endereço destinat.neste tp.comunic.(rede correio eletrônico)',
              type: 'CHAR(1)',
            },
            {
              name: 'CONSNUMBER',
              description: 'Nº sequencial',
              type: 'NUMC(3)',
            },
            {
              name: 'RFCDEST',
              description: 'destino lógico (indicado em chamada de função)',
              type: 'CHAR(32)',
            },
            {
              name: 'SSFIDSHORT',
              description: 'Campo SSFID para representação na tela',
              type: 'CHAR(132)',
            },
            {
              name: 'SSF_NS',
              description: 'SSF identificador de conjunto de nomes',
              type: 'CHAR(10)',
            },
            {
              name: 'SSF_PROF',
              description: 'Nome de perfil SSF',
              type: 'CHAR(132)',
            },
            {
              name: 'SSFIDPART1',
              description: 'SSF nome signatário/receptor: 1ª-8ª parte',
              type: 'CHAR(250)',
            },
            {
              name: 'SSFIDPART2',
              description: 'SSF nome signatário/receptor: 1ª-8ª parte',
              type: 'CHAR(250)',
            },
          ],
          children: [
            {
              segment: 'E1BPADSSF1',
              description:
                'Estrutura BAPI p/endereços SSF (administr.central\n                                endereços)',
              max: 1,
              fields: [
                {
                  name: 'SSFIDPART3',
                  description: 'SSF nome signatário/receptor: 1ª-8ª parte',
                  type: 'CHAR(250)',
                },
                {
                  name: 'SSFIDPART4',
                  description: 'SSF nome signatário/receptor: 1ª-8ª parte',
                  type: 'CHAR(250)',
                },
                {
                  name: 'SSFIDPART5',
                  description: 'SSF nome signatário/receptor: 1ª-8ª parte',
                  type: 'CHAR(250)',
                },
                {
                  name: 'SSFIDPART6',
                  description: 'SSF nome signatário/receptor: 1ª-8ª parte',
                  type: 'CHAR(250)',
                },
              ],
              children: [
                {
                  segment: 'E1BPADSSF2',
                  description:
                    'Estrutura BAPI p/endereços SSF (admin.endereços\n                                central)',
                  max: 1,
                  fields: [
                    {
                      name: 'SSFIDPART7',
                      description: 'SSF nome signatário/receptor: 1ª-8ª parte',
                      type: 'CHAR(250)',
                    },
                    {
                      name: 'SSFIDPART8',
                      description: 'SSF nome signatário/receptor: 1ª-8ª parte',
                      type: 'CHAR(250)',
                    },
                    {
                      name: 'SSFIDPART9',
                      description: 'SSF nome signatário/receptor - 9ª parte',
                      type: 'CHAR(48)',
                    },
                    {
                      name: 'ERRORFLAG',
                      description: 'Código: registro não processado',
                      type: 'CHAR(1)',
                    },
                    {
                      name: 'FLG_NOUSE',
                      description: 'Código: sem utilizar este nº de comunicação',
                      type: 'CHAR(1)',
                    },
                    {
                      name: 'VALID_FROM',
                      description: 'Dados para comunicação: válido desde (AAAAMMDDHHMMSS)',
                      type: 'CHAR(14)',
                    },
                    {
                      name: 'VALID_TO',
                      description: 'Dados para comunicação: válido até (AAAAMMDDHHMMSS)',
                      type: 'CHAR(14)',
                    },
                  ],
                  children: [],
                },
              ],
            },
          ],
        },
        {
          segment: 'E1BPADURI',
          description:
            'Estrutura BAPI p/endereços URI (administr.central\n                                endereços)',
          max: 999999999,
          fields: [
            {
              name: 'STD_NO',
              description: 'Endereço remetente standard neste tipo de comunicação',
              type: 'CHAR(1)',
            },
            {
              name: 'URI_TYPE',
              description: 'Código: qual o tipo de URI',
              type: 'CHAR(3)',
            },
            {
              name: 'URI',
              description: 'URI, por exemplo home page ou endereço ftp',
              type: 'CHAR(132)',
            },
            {
              name: 'STD_RECIP',
              description: 'Código: destinatário standard para este nº',
              type: 'CHAR(1)',
            },
            {
              name: 'HOME_FLAG',
              description: 'Endereço destinat.neste tp.comunic.(rede correio eletrônico)',
              type: 'CHAR(1)',
            },
            {
              name: 'CONSNUMBER',
              description: 'Nº sequencial',
              type: 'NUMC(3)',
            },
            {
              name: 'URI_PART1',
              description: 'Universal Resource Identifier (URI): 1ª-8ª parte',
              type: 'CHAR(250)',
            },
            {
              name: 'URI_PART2',
              description: 'Universal Resource Identifier (URI): 1ª-8ª parte',
              type: 'CHAR(250)',
            },
            {
              name: 'URI_PART3',
              description: 'Universal Resource Identifier (URI): 1ª-8ª parte',
              type: 'CHAR(250)',
            },
          ],
          children: [
            {
              segment: 'E1BPADURI1',
              description:
                'Estrutura BAPI p/endereços URI (administr.central\n                                endereços)',
              max: 1,
              fields: [
                {
                  name: 'URI_PART4',
                  description: 'Universal Resource Identifier (URI): 1ª-8ª parte',
                  type: 'CHAR(250)',
                },
                {
                  name: 'URI_PART5',
                  description: 'Universal Resource Identifier (URI): 1ª-8ª parte',
                  type: 'CHAR(250)',
                },
                {
                  name: 'URI_PART6',
                  description: 'Universal Resource Identifier (URI): 1ª-8ª parte',
                  type: 'CHAR(250)',
                },
                {
                  name: 'URI_PART7',
                  description: 'Universal Resource Identifier (URI): 1ª-8ª parte',
                  type: 'CHAR(250)',
                },
              ],
              children: [
                {
                  segment: 'E1BPADURI2',
                  description:
                    'Estrutura BAPI p/endereços URI (admin.endereços\n                                central)',
                  max: 1,
                  fields: [
                    {
                      name: 'URI_PART8',
                      description: 'Universal Resource Identifier (URI): 1ª-8ª parte',
                      type: 'CHAR(250)',
                    },
                    {
                      name: 'URI_PART9',
                      description: 'Universal Resource Identifier (URI) - 9ª parte',
                      type: 'CHAR(48)',
                    },
                    {
                      name: 'ERRORFLAG',
                      description: 'Código: registro não processado',
                      type: 'CHAR(1)',
                    },
                    {
                      name: 'FLG_NOUSE',
                      description: 'Código: sem utilizar este nº de comunicação',
                      type: 'CHAR(1)',
                    },
                    {
                      name: 'VALID_FROM',
                      description: 'Dados para comunicação: válido desde (AAAAMMDDHHMMSS)',
                      type: 'CHAR(14)',
                    },
                    {
                      name: 'VALID_TO',
                      description: 'Dados para comunicação: válido até (AAAAMMDDHHMMSS)',
                      type: 'CHAR(14)',
                    },
                  ],
                  children: [],
                },
              ],
            },
          ],
        },
        {
          segment: 'E1BPADPAG',
          description:
            'Estrutura BAPI p/nºs pager (administração endereços\n                                central)',
          max: 999999999,
          fields: [
            {
              name: 'COUNTRY',
              description: 'País para nº de telefone/fax',
              type: 'CHAR(3)',
            },
            {
              name: 'COUNTRYISO',
              description: 'Código ISO do país',
              type: 'CHAR(2)',
            },
            {
              name: 'STD_NO',
              description: 'Endereço remetente standard neste tipo de comunicação',
              type: 'CHAR(1)',
            },
            {
              name: 'PAGER_TYPE',
              description: 'ServiçoPager',
              type: 'CHAR(4)',
            },
            {
              name: 'PAGER',
              description: 'Nº pager',
              type: 'CHAR(30)',
            },
            {
              name: 'PAGER_NO',
              description: 'Campo pesquisa normalizado para pager',
              type: 'CHAR(30)',
            },
            {
              name: 'CALLER_NO',
              description: 'Nº pager para determinação de remetente',
              type: 'CHAR(30)',
            },
            {
              name: 'STD_RECIP',
              description: 'Referência encriptada a um nº seqüêncial',
              type: 'CHAR(1)',
            },
            {
              name: 'R_3_USER',
              description: 'Referência encriptada a um nº seqüêncial',
              type: 'CHAR(1)',
            },
            {
              name: 'HOME_FLAG',
              description: 'Endereço destinat.neste tp.comunic.(rede correio eletrônico)',
              type: 'CHAR(1)',
            },
            {
              name: 'CONSNUMBER',
              description: 'Nº sequencial',
              type: 'NUMC(3)',
            },
            {
              name: 'ERRORFLAG',
              description: 'Código: registro não processado',
              type: 'CHAR(1)',
            },
            {
              name: 'FLG_NOUSE',
              description: 'Código: sem utilizar este nº de comunicação',
              type: 'CHAR(1)',
            },
            {
              name: 'VALID_FROM',
              description: 'Dados para comunicação: válido desde (AAAAMMDDHHMMSS)',
              type: 'CHAR(14)',
            },
            {
              name: 'VALID_TO',
              description: 'Dados para comunicação: válido até (AAAAMMDDHHMMSS)',
              type: 'CHAR(14)',
            },
          ],
          children: [],
        },
        {
          segment: 'E1BPAD_REM',
          description: 'Estrutura BAPI para os comentários a endereço',
          max: 999999999,
          fields: [
            {
              name: 'ADDR_VERS',
              description: 'Código de versão para endereços internacionais',
              type: 'CHAR(1)',
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
              name: 'ADR_NOTES',
              description: 'Observações sobre endereço',
              type: 'CHAR(50)',
            },
            {
              name: 'ERRORFLAG',
              description: 'Código: registro não processado',
              type: 'CHAR(1)',
            },
          ],
          children: [],
        },
        {
          segment: 'E1BPCOMREM',
          description: 'Estrutura BAPI para comentários a tipos de comunicação',
          max: 999999999,
          fields: [
            {
              name: 'COMM_TYPE',
              description: 'Meio comunicação (chave) (administração endereços central)',
              type: 'CHAR(3)',
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
              name: 'COMM_NOTES',
              description: 'Observações sobre a ligação de comunicação',
              type: 'CHAR(50)',
            },
            {
              name: 'CONSNUMBER',
              description: 'Nº sequencial',
              type: 'NUMC(3)',
            },
            {
              name: 'ERRORFLAG',
              description: 'Código: registro não processado',
              type: 'CHAR(1)',
            },
          ],
          children: [],
        },
        {
          segment: 'E1BPADUSE',
          description: 'Estrutura BAPI para utilizações de comunicação (BAS)',
          max: 999999999,
          fields: [
            {
              name: 'COMM_TYPE',
              description: 'Meio comunicação (chave) (administração endereços central)',
              type: 'CHAR(3)',
            },
            {
              name: 'CONSNUMBER',
              description: 'Nº sequencial',
              type: 'NUMC(3)',
            },
            {
              name: 'COMM_USAGE',
              description: 'Utilização de comunicação: campo chave',
              type: 'CHAR(10)',
            },
            {
              name: 'VALID_TO',
              description: 'Dados para comunicação: válido até (AAAAMMDDHHMMSS)',
              type: 'CHAR(14)',
            },
            {
              name: 'VALID_FROM',
              description: 'Dados para comunicação: válido desde (AAAAMMDDHHMMSS)',
              type: 'CHAR(14)',
            },
            {
              name: 'DEF_USAGE',
              description: 'Código: default para esta utilização',
              type: 'CHAR(1)',
            },
            {
              name: 'ERRORFLAG',
              description: 'Código: registro não processado',
              type: 'CHAR(1)',
            },
          ],
          children: [],
        },
      ],
    },
  ],
};
