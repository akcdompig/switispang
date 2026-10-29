# SPEC — SWITI SPANG "Donderdag 20:00"

GOAL:    the viewer knows the rule (order by Thursday 20:00, pick up Friday in Almere) and goes to the weekly menu.
OUTPUT:  HyperFrames, 1920 x 1080, 30 fps
TIME:    31.4 s x 30 = 942 frames. No music bed: no source in this environment. SFX only.
LOOK:    the site itself. Ground #17120f (brand, not a void: always holds a full-size site surface);
         paper #f6efe5 for the board world; ink #1a120d on paper; card #201914; muted #cab99f;
         accent #e0ae42 only on the second title line, prices, the active slot, CTA and the "SPANG" of the mark;
         rust #8e4328 for sold-out badges. Display: Playfair Display 800, -3% tracking (titles 96-190 px);
         script lines: Playfair Display italic 600 (the site's Georgia italic, swapped for a bundled face);
         body/UI: Manrope 800 caps at +8-14% tracking, 22-36 px. Medium: the real site UI rebuilt at 1.6-2.6x,
         board card tilted -1.5deg with two gold tape strips. Shadow 0 40px 90px rgba(0,0,0,.4). No grain.
OBJECTS: the "Deze week" board (paper, tape, dashed rows, stock badges, black countdown tiles);
         the Saoto dish card (photo slot, price, chips, stock bar, Toevoegen); the gold "Bestelling" pill with count;
         the order drawer (items, upsell chips, pickup slots, Betalen met Mollie); the "Spang geregeld" panel;
         a review card; the wordmark. A large black cursor arrow (72 px) does every click.
MOTION:  enter expo.out 0.5-0.7 s; camera power2.inOut 1.0-1.1 s; exits power3.in 0.3 s;
         words blur 8->0 in 0.15 s, 0.07 s apart; clicks: cursor 0.9 scale for 0.08 s.
SHOTS:
  1 board   0.0-6.6   tight on countdown tiles 00 00 04 59 ticking -> pull back to the whole board ->
                      ROTI DOKS NOG 2 -> NOG 1 -> whip up. SFX: ticks, pop, whoosh.
  2 title   6.6-9.6   "Switi eten. / Spang geregeld." per word, left aligned 190 px. Blur swap out.
  3 kies    9.6-14.6  Saoto card 1.7x; cursor clicks Toevoegen; NOG 8 -> 7; toast; Bestelling 0 -> 1; cursor clicks pill.
  4 betaal  14.6-19.8 drawer slides in; Gemberdrank chip -> new line, total 9,50 -> 13,00; slot 18:00; Betalen -> iris.
  5 dicht   19.8-22.8 paper; tiles 03 -> 00; tiles merge into "Gesloten / Voor deze week"; colour flood to brown.
  6 ophalen 22.8-27.8 "Vrijdag = SWITI SPANG DAY." + Spang geregeld panel; swap to Rayan's review; dip cut.
  7 end     27.8-31.4 wordmark per letter, SPANG wipes gold on the riser hit; CTA "Bekijk het weekmenu" holds 2 s.
BANNED:  dark void with small floating UI; glow, particles; three cards in a row; everything centred
         (only the end card centres); fade+slide-up on every element; titles drifting after landing;
         logo docked in a corner; invented UI; invented copy (all text is verbatim from the site).
QA:      0.0 (thumbnail: tiles fill frame), 3.0 (mid pull-back), 4.6 (NOG 1), 7.5 (title), 11.9 (click),
         16.4 (new line + total), 18.5 (iris), 21.5 (Gesloten), 24.0 (panel), 26.5 (review), 30.5 (end card).
