# news-image-20261122 — "Sum up 22 November's world news in one image"

A make.fun bounty entry: a program that writes one image summing up the world's news of Sunday 22 November 2026.

## The image

A **TOP 10 WORLD NEWS** list — Sunday 22 November 2026 — with the day's top stories from around the world, researched from live news sources:

1. **TURKEY — COP31 COLLAPSES** — Climate talks end with no deal as fossil fuels go unmentioned (the day's biggest story; the EU objected to a final deal with no mention of fossil fuels).
2. **CHINA — TRUMP XI PUTIN SUMMIT** — Nuclear pledge but no Ukraine deal (first-ever trilateral summit).
3. **BAHRAIN — IRAN STRIKES US BASES** — Tankers hit near the Strait of Hormuz.
4. **THE HAGUE — MYANMAR GUILTY OF ROHINGYA GENOCIDE** — First state found guilty of genocide (ICJ ruling on the 2017 Rohingya genocide).
5. **USA — MARKETS TUMBLE** — S&P down 3.7%, Nasdaq down 5.3% as the AI sell-off spreads.
6. **UKRAINE — RUSSIA HITS KRYVYI RIH** — Two killed, sixty wounded in Zelenskyy's hometown.
7. **MEXICO — CARTEL BOSS CAPTURED** — El Chapo Isidro, eleven killed in the Sinaloa raid.
8. **INDONESIA — FACTORY FIRE** — Three dead, dozens missing in Cikande.
9. **EU — INDONESIA TRADE DEAL** — Tariffs scrapped on 98.5% of goods after almost 10 years of talks.
10. **WEST BANK — SETTLERS TORCH VILLAGES** — Vehicles and homes burned.

The image is `entry.png` (1024×1024, under 1 MiB). `main.ts` copies it to `/output/entry.png` — deterministic, no network.

## Files

- `main.ts` — Node 22 entrypoint (standard library only): copies `entry.png` to `/output/entry.png` and verifies the copy is byte-identical.
- `entry.png` — the entry image (1024×1024 PNG).
- `LICENSE` — MIT.

## Badges

[![make.fun](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/RealOverGrow/makefun-22nov-worldnews/rank.svg)](https://make.fun/bounty/news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/RealOverGrow/makefun-22nov-worldnews/reward.svg)](https://make.fun/bounty/news-image-20261122)
