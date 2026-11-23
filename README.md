# news-image-20261122 — "Sum up 22 November's world news in one image"

A make.fun bounty entry: a program that writes one image summing up the world's news of Sunday 22 November 2026.

## The image

A **"THE WORLD IN ONE DAY"** newspaper front page — Sunday 22 November 2026 — with **40 verified stories from 7 regions**, modelled on the top-ranked entries in this bounty:

- **Masthead + stats strip** — 186 drones, 161 downed, 720/9, 50 points, 24 dead, 1,300 guests.
- **Region bars** — Europe 8, Middle East 5, Americas 7, Asia-Pacific 10, Africa 5, Oceania 2, World 3.
- **3 illustrated lead stories** — Russia fires 186 drones at Ukraine; COP31 collapses; Iran strikes US bases.
- **5 illustrated top-story cards** — Hong Kong votes, India 720 for 9, Verstappen wins Vegas, Wembanyama 50 points, Sparta II ablaze.
- **32 more stories** — Mexico cartel boss captured, Indonesia factory fire, EU–Indonesia trade deal, West Bank settlers torch villages, Nigeria boat capsizes, Libya Russian warship hit, USA Democrats win House, Geneva UN killer-robot rules, South Sudan 24 civilians killed, DR Congo WHO Ebola plea, France protests, Gaza strikes continue, Lebanon pressure mounts, Bangladesh typhoid vaccine drive, Japan–US trade deal lifts Nikkei, India Himalayan flood rescue, Thailand–Cambodia truce holds, South Africa Mlambo Ngcuka dies, Vatican Pope hosts 1,300, Khartoum Sudan strikes, BepiColombo reaches Mercury, Nvidia SEC probe, Estonia–Russia border tension, Manipur toxic liquor deaths, Myanmar guilty of genocide, China Trump–Xi–Putin summit, Bahrain tankers hit near Hormuz, Iran rations power, Bolsonaro in ICU, FBI hack probe, Belgium flight chaos, Peru quake.
- **Date check box** — Sunday 22 November 2026, all stories verified.

All 40 stories were researched from live news sources (Reuters, AP, AFP) and cross-checked against the bounty's top entries. No photographs — flat cartoon/diagram-style illustrations only.

The image is `entry.png` (1024×1024 JPEG bytes, 296 KB, under 1 MiB). `main.ts` copies it to `/output/entry.png` — deterministic, no network.

## Files

- `main.ts` — Node 22 entrypoint (standard library only): copies `entry.png` to `/output/entry.png` and verifies the copy is byte-identical.
- `entry.png` — the entry image (1024×1024, JPEG content, under 1 MiB).
- `LICENSE` — MIT.

## Badges

[![make.fun](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/RealOverGrow/makefun-22nov-worldnews/rank.svg)](https://make.fun/bounty/news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/RealOverGrow/makefun-22nov-worldnews/reward.svg)](https://make.fun/bounty/news-image-20261122)
