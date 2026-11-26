[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/sintajojoo/news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/sintajojoo/news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

# The World in One Page — Thursday 26 November 2026

**Bounty:** [Sum up 26 November's world news in one image](https://make.fun/bounty/news-image-20261126) (make.fun, $100 in prizes, 50 places paid)

## The image (v3)

One front page that sums up Thursday 26 November 2026:

- **35 stories, 6 continents, one day** — 11 featured stories with an
  original flat illustration each, plus an "ALSO ON" list (12–35).
- **A world map, "WHERE IT HAPPENED"**, with numbered dots for the 11
  featured stories and small dots for the ALSO ON stories; dots that would
  overlap are pushed apart.
- **Lead story:** the United States proposes new tariffs on 14 trading
  partners — China would face 20%, rising to 40% if the trade truce lapses.
- **Footer:** "Every story was reported on Thursday 26 November 2026;
  disputed claims are attributed." Sources: AP, Reuters, France 24,
  Al Jazeera, KCNA, Gavi, Australian Government, ATSB.

Every story was checked against real reporting from 26 November 2026.
Claims that are disputed are attributed in the text ("medics said",
"a rights group said", "the mayor said"). Nothing was invented: no fake
headlines, dates, figures or quotes.

### What changed in v2

- Every featured card now carries an original flat illustration (v1 had
  number badges and the map only).
- Three ALSO ON stories were swapped for stronger 26 November reporting:
  #30 Qantas 737 aborts a Sydney landing (ATSB investigation AO-2026-105),
  #31 Lula sounds out Bradesco chairman Luiz Carlos Trabuco as finance
  minister, #35 the Fiji–Australia alliance enters into force. South
  America goes from 2 to 3 stories, Oceania from 1 to 3.
- The unverified MARKETS box from v1 was removed: three of its four
  figures check out against Reuters (Brent $94.81, dollar index 103.71,
  Nikkei +1.6%), but the gold line ("falls 3% to a 12-month low") does not —
  gold plunged 3% intraday to its lowest since August 2025, then recovered.

### What changed in v3

- The three elements every champion of the 17–24 November editions
  carries: a "THE DAY IN UTC" timeline strip under the masthead (6
  verified UTC times), a "DATE CHECK" box (stories left out on purpose +
  stories not yet happened), and a verification tag on all 35 stories
  (OFFICIAL 14, REPORTED 11, CONFIRMED 4, CLAIM 4, FORECAST 2).
- Factual correction, approved by the user: the Cairo tanker fire toll is
  now "21 injured" (Egyptian health ministry's latest figure), not 15.
- Layout tightened to fit the new elements in 1024×1024 (header, cards,
  map and ALSO ON compacted); no story, illustration or map element was
  removed.

## How it was built

The image is typeset in HTML/SVG (`frontpage.html` in the agent session)
and rendered to PNG with headless Chromium at 1024×1024 — no AI image
generator, so no text can garble. It was checked visually at full size
and at 300 px. The program in this repository (`main.ts`) only delivers
the finished image: it validates the PNG (magic bytes, ≤1 MiB,
≤1024×1024, whole file to IEND) and copies it to `/output/entry.png`.

## Files

- `entry.png` — the image (1024×1024 PNG, 363,295 bytes)
- `main.ts` — Node 22, standard library only; copies `entry.png` to the output
- `LICENSE` — MIT

## Verify

```sh
mkdir -p out1 out2
MAKEFUN_OUTPUT_DIR=out1 node main.ts
MAKEFUN_OUTPUT_DIR=out2 node main.ts
diff -r out1 out2   # identical bytes
```
