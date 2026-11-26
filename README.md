[![news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126)
[![Rank](https://make.fun/badge/news-image-20261126/sintajojoo/news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126)
[![Reward](https://make.fun/badge/news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126)

# The World in One Page — Thursday 26 November 2026

**Bounty:** [Sum up 26 November's world news in one image](https://make.fun/bounty/news-image-20261126) (make.fun, $100 in prizes, 50 places paid)

## The image

One front page that sums up Thursday 26 November 2026:

- **35 stories, 6 continents, one day** — 12 numbered stories with headlines
  and two lines each, plus an "ALSO ON" list (13–35), one line each.
- **A world map, "WHERE IT HAPPENED"**, with numbered dots for the 12 main
  stories; dots that would overlap are pushed apart with thin leader lines.
- **Lead story:** the United States proposes new tariffs on 14 trading
  partners — China would face 20%, rising to 40% if the trade truce lapses.
- **Footer:** "Every story was reported on Thursday 26 November 2026;
  disputed claims are attributed." Sources: AP, Reuters, France 24,
  Al Jazeera, KCNA, Gavi.

Every story was checked against real reporting from 26 November 2026
(AP, Reuters, France 24, Al Jazeera, KCNA, Gavi). Claims that are disputed
are attributed in the text ("medics said", "a rights group said", "the
mayor said"). Nothing was invented: no fake headlines, dates, figures or
quotes.

## How it was built

The image is drawn by a Python/PIL script (`build-image.py` in the agent
session) from a verified story list — no AI image generator, so no text can
garble. The script typesets the whole page at 1024×1024 and was checked
visually at full size and at 300 px across. The program in this repository
(`main.ts`) only delivers the finished image: it validates the PNG (magic
bytes, ≤1 MiB, ≤1024×1024) and copies it to `/output/entry.png`.

## Files

- `entry.png` — the image (1024×1024 PNG, 190,427 bytes)
- `main.ts` — Node 22, standard library only; copies `entry.png` to the output
- `LICENSE` — MIT

## Verify

```sh
mkdir -p out1 out2
MAKEFUN_OUTPUT_DIR=out1 node main.ts
MAKEFUN_OUTPUT_DIR=out2 node main.ts
diff -r out1 out2   # identical bytes
```
