// Controle zonder geheimen: staan de instellingen goed? Open deze link vóór de lancering.
const { mollie } = require('./_shop');

module.exports = async (req, res) => {
  res.setHeader('Cache-Control', 'no-store');
  const k = process.env.MOLLIE_API_KEY || '';
  const out = {
    mollie_sleutel: !k ? 'ONTBREEKT' : k.startsWith('live_') ? 'live' : k.startsWith('test_') ? 'test' : 'onbekend',
    mollie_werkt: false,
    telegram: !!(process.env.TELEGRAM_BOT_TOKEN && process.env.TELEGRAM_CHAT_ID),
    bevestigingsmail: !!(process.env.RESEND_API_KEY && process.env.MAIL_FROM),
    afhaaladres_ingesteld: !!(process.env.PICKUP_ADDRESS || '').trim()
  };
  if (k) { try { await mollie('GET', '/payments?limit=1'); out.mollie_werkt = true; } catch (e) { out.mollie_fout = e.message; } }
  out.klaar_voor_lancering = out.mollie_werkt && out.mollie_sleutel === 'live' && out.telegram;
  res.status(200).json(out);
};
