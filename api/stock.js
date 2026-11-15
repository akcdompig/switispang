// Geeft aan wat er op is en welke ophaaltijden vol zijn. Geen aantallen, alleen "op" of "vol".
const { shop, dropPayments, tally, pools, SLOT_MAX } = require('./_shop');

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  try {
    const { CONFIG } = shop();
    const t = tally(await dropPayments(CONFIG.drop.label));
    const max = pools();
    const soldOut = Object.keys(max).filter(k => (t.used[k] || 0) >= max[k]);
    const fullSlots = Object.keys(t.slots).filter(k => t.slots[k] >= SLOT_MAX).map(k => k.split('|')[1]);
    res.status(200).json({ soldOut, fullSlots });
  } catch (e) {
    res.status(200).json({ soldOut: [], fullSlots: [] }); // bij een storing niets blokkeren; de server controleert bij het afrekenen toch
  }
};
