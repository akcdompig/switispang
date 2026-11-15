// Mollie roept dit aan bij elke statuswijziging van een betaling (body: id=tr_xxx).
const { mollie } = require('./_shop');
const { notifyIfPaid } = require('./_notify');

module.exports = async (req, res) => {
  try {
    let id = '';
    if (req.body && typeof req.body === 'object') id = String(req.body.id || '');
    else if (typeof req.body === 'string') id = new URLSearchParams(req.body).get('id') || '';
    if (!/^tr_[A-Za-z0-9]{4,30}$/.test(id)) return res.status(200).end();
    const p = await mollie('GET', `/payments/${id}`);
    await notifyIfPaid(p);
    res.status(200).end();
  } catch (e) {
    console.error('webhook', e.message);
    res.status(500).end(); // Mollie probeert het later opnieuw
  }
};
