const { mollie } = require('./_shop');

module.exports = async (req, res) => {
  const id = String((req.query && req.query.id) || '');
  if (!/^tr_[A-Za-z0-9]{4,30}$/.test(id)) return res.status(400).json({ error: 'Ongeldig betaal-ID.' });
  try {
    const p = await mollie('GET', `/payments/${id}`);
    res.setHeader('Cache-Control', 'no-store');
    res.status(200).json({ id: p.id, status: p.status, amount: p.amount.value, testmode: p.mode === 'test', order: (p.metadata && p.metadata.order) || '' });
  } catch (e) {
    res.status(e.status || 400).json({ error: e.message });
  }
};
