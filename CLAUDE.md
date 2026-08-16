# shyamprasadrao.com

Personal site of Shyam Prasad Rao — essays, research notes, projects, and (planned) the Quantum Atlas section. Astro 7, hosted on GitHub Pages with custom domain (public/CNAME).

## Architecture — read this before touching anything

- `src/layouts/Base.astro` — **single source of truth for all styling** (global `<style is:global>` block), plus the header, nav, and footer. Every page wraps in this. Do not add per-page stylesheets; extend Base.astro instead.
- `src/content/posts/*.md` — posts, validated by `src/content.config.ts`. Frontmatter: `title`, `date`, `topic` (one of: Strategy | Quantum | AI | Hardware | Reading), `summary`, optional `draft: true` to keep unpublished.
- `src/pages/` — `index.astro` (home), `about.astro`, `writing/index.astro` + `writing/[slug].astro`, `projects/index.astro`.

## Deploy workflow

Push to `main` → GitHub Actions (`.github/workflows/deploy.yml`, withastro/action) builds and deploys to Pages automatically, ~2 min. No manual build step. PRs merge to main when ready to publish.

## Design system — keep every new page consistent with this

Tokens (`:root` in Base.astro):
`--paper:#F7F5F0` bg · `--ink:#1C1B18` · `--ink-soft:#4A4842` · `--faint:#8B887E` · `--rule:#DAD6CB` hairlines · `--accent:#2F4B4B` deep teal (links, active nav) · `--accent-soft:#6E8B87` · `--mark:#B4552E` terracotta (highlights only) · max width 720px, single column.

Typography: body and headings in "Iowan Old Style"/Palatino/Georgia serif; ALL interface chrome (tagline, nav, metadata, section labels, footer) in ui-monospace/SF Mono/Menlo.

Signature patterns — reuse these, don't invent parallel ones:
- `h2.sec` — mono uppercase 12px letterspaced section label with a 14px terracotta dash (`::before`)
- `.lately` — mono callout with 2px terracotta left border
- `.item` / `.it-title` / `.it-meta` / `.it-desc` — list rows separated by `--rule` hairlines
- `.post` — article body styles (17px serif, 62ch measure); tables use `#EDEAE1` header fill

Voice: chrome is quiet, lowercase-leaning, mono; content is warm serif. No cards, no shadows, no rounded boxes — hairline rules only.

## Quantum Atlas section (in progress, Aug 2026)

A "living knowledge atlas" of quantum computing concept maps, to live at `/atlas` inside this site (nav item after Projects). Three layers: Atlas graphs → evergreen notes (each answers: What is it? Why does it exist? How does it connect? Where is it used?) → research notes linked into the graph. Node status uses the site palette: published = `--accent` teal, in-progress = `--mark` terracotta, coming-soon = `--faint` dashed circle. Atlas SVG plates may break out wider than 720px on large screens; everything else stays in column. Concept plan and prototype live in the "Quantum Concept Maps Website" Claude project.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
