const { validate, usedBefore } = require('./_codes');

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Alleen POST.' });
  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
    const code = validate(body.code, body.mode);
    if (!code) return res.status(400).json({ error: 'Vul een code in.' });
    if (await usedBefore(code)) return res.status(409).json({ error: 'Deze code is al gebruikt.' });
    res.status(200).json({ ok: true, code, label: 'Gratis bezorging' });
  } catch (e) {
    res.status(e.status || 400).json({ error: e.message });
  }
};
