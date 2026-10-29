# REVIEW — SWITI SPANG "Donderdag 20:00"

Render: renders/switispang-promo.mp4 · 31.2 s · 1920x1080 · 30 fps (quality: looks)

## Creative calls
- Storyline A. Not built: B "Geen grote keuken" and C "Uitverkocht" (see STORYLINES.md).
- Every line on screen is the site's own copy. The UI is rebuilt from styles.css at 1.6–2.6x.
- Story: Thursday countdown → ROTI DOKS NOG 2 → 1 → title → add Saoto → drawer: gemberdrank upsell,
  18:00 slot, Betalen met Mollie → 20:00 "Gesloten" → Friday pickup panel + Rayan's review → wordmark + CTA.
- Transitions: continuous pull-back, whip, blur swap, drawer slide, iris from the click, colour flood, dip cut.

## Placeholders / gaps
- Dish photo: a labelled slot ("FOTO: SAOTO (VOLGT)"). images.unsplash.com is blocked by this environment's
  network policy, and the site's photos are stock anyway. Swap in a real photo at compositions/kies.html #k-photo.
- No music: no music source here (no HeyGen sign-in, no local MusicGen). SFX only, from the bundled set:
  ticks, clicks, pops, whooshes, one riser into the mark.
- The order form's name/e-mail fields and the Mollie page are left out of the drawer beat.

## Measured vs looked at
- `check`: 0 errors. Kept 3 text_below_floor warnings: small UI labels (board date at full view,
  stock line, "VERGEET JE NIETS?") at 24–27 px; the reading text is all ≥ 28 px.
- Audio measured, not heard: -14.1 LUFS integrated, true peak -1.6 dBTP, no clipping; onsets land on ticks/clicks.
- Looked at: review beat sheet, seams 1/4/5, and decoded frames from the render.

## Weakest shot
- The "kies" beat: the photo slot is an empty stripe. With a real Saoto photo it becomes the hero.
- With more time: a music bed (kaseko/Caribbean groove ~110 bpm) and cutting the pull-back on its first bar.
