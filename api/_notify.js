// Meldt een betaalde bestelling: Telegram naar de eigenaar, bevestigingsmail naar de klant.
// Wordt zowel door de Mollie-webhook als door de bedankpagina aangeroepen; metadata.notified voorkomt dubbele meldingen.
const { mollie } = require('./_shop');

const esc = s => String(s).replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));

async function telegram(text) {
  const token = process.env.TELEGRAM_BOT_TOKEN, chat = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chat) { console.warn('Telegram niet ingesteld: bestelling alleen in Mollie'); return false; }
  const r = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chat, text, parse_mode: 'HTML', disable_web_page_preview: true })
  });
  if (!r.ok) console.error('Telegram', r.status, await r.text().catch(() => ''));
  return r.ok;
}

async function mail(to, subject, text) {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.MAIL_FROM; // pas zetten als het domein bij Resend geverifieerd is
  if (!key || !from || !to) return false;
  const r = await fetch('https://api.resend.com/emails', {
    method: 'POST', headers: { Authorization: 'Bearer ' + key, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from, to: [to], subject, text })
  });
  if (!r.ok) console.error('Resend', r.status, await r.text().catch(() => ''));
  return r.ok;
}

// Geeft true terug als deze aanroep de melding heeft verstuurd.
async function notifyIfPaid(p) {
  if (!p || p.status !== 'paid') return false;
  const meta = p.metadata || {};
  if (meta.notified) return false;
  // Eerst markeren, dan versturen: bij twee gelijktijdige aanroepen is de kans op dubbel klein, en liever 1× te veel dan 0×.
  await mollie('PATCH', `/payments/${p.id}`, { metadata: { ...meta, notified: true } });
  const amount = '€' + Number(p.amount.value).toFixed(2).replace('.', ',');
  const order = meta.order || '(bestelling niet gevonden, zie Mollie)';
  const test = p.mode === 'test';
  const ok = await telegram(
    `${test ? '🧪 TEST · ' : ''}🍛 <b>Nieuwe bestelling – betaald ${amount}</b>\n\n${esc(order)}\n\n${meta.email ? '✉️ ' + esc(meta.email) + '\n' : ''}<i>${esc(p.id)}</i>`
  ).catch(e => { console.error(e); return false; });
  if (!ok) await mollie('PATCH', `/payments/${p.id}`, { metadata: { ...meta, notified: false } }).catch(() => {});
  if (meta.email) {
    await mail(meta.email, 'Bedankt voor je bestelling bij Switi Spang',
      `Bedankt voor je bestelling! We hebben je betaling van ${amount} ontvangen en gaan ermee aan de slag.\n\n${order}\n\n` +
      `Vragen of iets aan te passen? App ons op 06 24 58 48 54.\n\nSwiti Spang · Almere-Buiten\nswitispang.nl`
    ).catch(e => console.error(e));
  }
  return ok;
}

module.exports = { notifyIfPaid };
