// Eenmalige kortingscodes. De lijst staat in de Vercel-omgevingsvariabele KORTINGSCODES
// (komma-gescheiden, bijv. "WOC-7K3F9X,WOC-M4P2QD"), dus niet in de code zelf.
// Of een code al gebruikt is, wordt uit de Mollie-betalingen gehaald (metadata.code).
const { mollie, isLive } = require('./_shop');

const norm = c => String(c || '').toUpperCase().replace(/[^A-Z0-9-]/g, '').slice(0, 30);
const list = () => (process.env.KORTINGSCODES || '').split(/[\s,;]+/).map(norm).filter(Boolean);

// Sync-controle: bestaat de code, en geldt hij voor deze bestelwijze? Geeft de genormaliseerde code terug of ''.
function validate(raw, mode) {
  const code = norm(raw);
  if (!code) return '';
  if (!list().includes(code)) throw new Error('Deze code kennen we niet. Controleer of je hem goed hebt overgetypt.');
  if (mode !== 'bezorgen') throw new Error('Deze code geldt alleen voor bezorgen. Kies bezorgen of haal de code weg.');
  return code;
}

// Async: is de code al in een (lopende of betaalde) bestelling gebruikt? `exceptId` = de eigen betaling.
async function usedBefore(code, createdAt, exceptId) {
  const j = await mollie('GET', '/payments?limit=250');
  const ps = ((j._embedded && j._embedded.payments) || []).filter(p => p.metadata && p.metadata.code === code && !p.metadata.void && isLive(p) && p.id !== exceptId);
  if (createdAt === undefined) return ps.length > 0;
  return ps.some(p => p.createdAt < createdAt || (p.createdAt === createdAt && p.id < exceptId));
}

module.exports = { norm, validate, usedBefore };
