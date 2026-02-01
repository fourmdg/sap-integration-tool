// Mapeamento de rótulos amigáveis para documentos
/* global DOC_LABELS */
const DOC_LABELS = {
  'DOCUMENTACAO_IDOC_CLIENTES.html': 'Documentação IDOC — Clientes',
  'DOCUMENTACAO_IDOC_ENDERECOS_CLIENTES_E_FORNECEDORES.html': 'Documentação IDOC — Endereços (Clientes/Fornecedores)',
  'DOCUMENTACAO_IDOC_FORNECEDOR.html': 'Documentação IDOC — Fornecedor',
  'DOCUMENTACAO_IDOC_MATERIAL.html': 'Documentação IDOC — Material',
  'DOCUMENTACAO_IDOC_MATQM01.html': 'Documentação IDOC — MATQM01',
  'DOC_ARTMAS09.html': 'DOC_ARTMAS09',
  'SRVMAS01.html': 'SRVMAS01'
};

function getDocLabel(fname){
  if (!fname) return '';
  if (typeof DOC_LABELS !== 'undefined' && DOC_LABELS[fname]) return DOC_LABELS[fname];
  let s = String(fname).replace(/\.html$/i,'').replace(/_/g,' ').replace(/\s+/g,' ').trim();
  s = s.replace(/documentacao/i,'Documentação');
  s = s.split(' ').map(w => w.length>0 ? (w[0].toUpperCase()+w.slice(1).toLowerCase()) : w).join(' ');
  return s;
}

// Export for CommonJS environments (tests)
if (typeof module !== 'undefined' && module.exports) module.exports = { DOC_LABELS, getDocLabel };
