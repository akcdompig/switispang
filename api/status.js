const { mollie } = require('./_shop');
const { notifyIfPaid } = require('./_notify');

module.exports = async (req, res) => {
  const id = String((req.query && req.query.id) || '');
  if (!/^tr_[A-Za-z0-9]{4,30}$/.test(id)) return res.status(400).json({ error: 'Ongeldig betaal-ID.' });
  try {
    const p = await mollie('GET', `/payments/${id}`);
    await notifyIfPaid(p).catch(e => console.error('notify', e.message)); // vangnet als de webhook niet aankomt
    res.setHeader('Cache-Control', 'no-store');
    res.status(200).json({ id: p.id, status: p.status, amount: p.amount.value, testmode: p.mode === 'test', order: (p.metadata && p.metadata.order) || '', email: (p.metadata && p.metadata.email) || '', mail: !!(process.env.RESEND_API_KEY && process.env.MAIL_FROM) });
  } catch (e) {
    res.status(e.status || 400).json({ error: e.message });
  }
};
