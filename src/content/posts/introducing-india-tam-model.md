---
title: "Introducing the India TAM Model"
date: 2025-04-20
topic: "Strategy"
summary: "An open tool for sizing the Indian market by district, income group, and tier — for entrepreneurs, investors, and researchers."
---

India is one of the fastest-growing and most diverse economies in the world, with a population of over 1.4 billion and a GDP above $4 trillion. Yet finding reliable, granular data on the size and characteristics of the Indian market is hard — even for publicly available data. That makes it difficult for entrepreneurs, investors, and researchers to assess the potential of their ideas, products, or services in the Indian context.

So we built the **India TAM model** to share an easily accessible view of market potential — in terms of households or individuals, by district. Users can also download the data in CSV or Excel, or export the charts and tables.

[→ India TAM Model on GitHub](https://github.com/shyam-lab/India-TAM-Model)

## Features

In its first version the model includes:

- **Population by district** — 2011 Census data (the last official one), extrapolated to 2019 and 2024, covering 644 districts.
- **District tier classification** — districts grouped into tiers by population size.
- **Population by income group** — using iSEC (Indian Socio-Economic Classification), available for 2019.
- **Toggles** — tweak the above to determine population or households by income group or by tiered district.

Personally, I've used the file to:

1. Decide which cities to run pilots or studies in when testing a business case or product-market fit, especially at the extreme ends of income (premium and mass products).
2. Estimate market potential and current product penetration for startup investments.

## Known Limitations

1. It doesn't give a holistic view of a city — Mumbai's population gets split across Mumbai and Thane districts; Chennai's across Chennai and Kancheepuram. Future editions will address this.
2. Population extrapolation is done at a high level (Urban/Rural and iSEC groups) and may not reflect ground reality.

## What's Next

- **Latest Census** — added once it's complete.
- **More categories** — products and services sold by district, to understand consumption patterns (e.g. Kirana shops).
- **More data sources** — exploring alternative data such as web scraping and social media.
- **More feedback** — we want the model to stay responsive to how people actually use it.

## Sources

- [Census of India 2011](https://censusindia.gov.in/census.website/)
- [World Economic Outlook, April 2024](https://www.imf.org/external/datamapper/profile/IND)

Built with Sandeep Sarathy.
