// Eenmalige kortingscodes. De lijst staat in de Vercel-omgevingsvariabele KORTINGSCODES
// (komma-gescheiden, bijv. "WOC-7K3F9X,WOC-M4P2QD"), dus niet in de code zelf.
// Of een code al gebruikt is, wordt uit de Mollie-betalingen gehaald (metadata.code).
const { mollie, isLive } = require('./_shop');

const norm = c => String(c || '').toUpperCase().replace(/[^A-Z0-9-]/g, '').slice(0, 30);
// Algemene actiecode (voor iedereen, meermaals te gebruiken): variabele ACTIECODE, bijv. "SWITI10" (10%) of "SWITI15:15".
const actie = () => {
  const [c, pct] = String(process.env.ACTIECODE || '').split(':');
  const code = norm(c), p = Math.round(Number(pct || 10));
  return code && p > 0 && p <= 50 ? { code, pct: p } : null;
};
const kindOf = code => { const a = actie(); return a && a.code === code ? 'actie' : code ? 'woc' : ''; };
const percentOf = code => { const a = actie(); return a && a.code === code ? a.pct : 0; };
const list = () => (process.env.KORTINGSCODES || '').split(/[\s,;]+/).map(norm).filter(Boolean);

// Sync-controle: bestaat de code, en geldt hij voor deze bestelwijze? Geeft de genormaliseerde code terug of ''.
function validate(raw, mode) {
  const code = norm(raw);
  if (!code) return '';
  const a = actie();
  if (a && a.code === code) return code; // actiecode: geldt voor afhalen en bezorgen
  if (!list().includes(code)) throw new Error('Deze code kennen we niet. Controleer of je hem goed hebt overgetypt.');
  if (mode !== 'bezorgen') throw new Error('Deze code geldt alleen voor bezorgen. Kies bezorgen of haal de code weg.');
  return code;
}

// Async: is de code al in een (lopende of betaalde) bestelling gebruikt? `exceptId` = de eigen betaling.
async function usedBefore(code, createdAt, exceptId) {
  if (kindOf(code) === 'actie') return false; // actiecode mag vaker gebruikt worden
  const j = await mollie('GET', '/payments?limit=250');
  const ps = ((j._embedded && j._embedded.payments) || []).filter(p => p.metadata && p.metadata.code === code && !p.metadata.void && isLive(p) && p.id !== exceptId);
  if (createdAt === undefined) return ps.length > 0;
  return ps.some(p => p.createdAt < createdAt || (p.createdAt === createdAt && p.id < exceptId));
}

module.exports = { norm, validate, usedBefore, kindOf, percentOf };
