# Quantum Atlas — Site Concept & Working Plan

*Started Aug 15, 2026. Origin: Shyam's ChatGPT conversation proposing a "living knowledge atlas" of quantum concept maps instead of a blog.*

*This is the repo copy (`design/site-concept-and-plan.md`) of the plan doc kept in the "Quantum Concept Maps Website" Claude project — synced Aug 19, 2026. If you're Claude Code: this file plus `design/atlas-prototype.html` (visual spec) and `design/qubits-and-states.html` (node-page content template) are your references for building `/atlas` pages.*

## Status (Aug 19, 2026)

✅ CLAUDE.md (project memory) and `design/atlas-prototype.html` (approved spec) are **committed and pushed to main** (commit af3eabf). Git is now installed on Shyam's PC; he's using the pull → work → commit → push rhythm. First real Astro pages (`src/pages/atlas/index.astro`, `noise-error-correction.astro`) built via Claude Code in VS Code.

🆕 **First node page drafted: "Qubits & States"** — approved draft lives at `design/qubits-and-states.html` (single-file HTML in the site design, evergreen-note format). Source material: a ChatGPT-drafted "Qubit" markdown Shyam supplied, reshaped into the four-question structure; revised per Shyam's review Aug 19. It is the content template for all node pages. Next: build it as `src/pages/atlas/qubits-and-states.astro`.

## Node pages — format decisions (from the Qubits & States draft)

- Structure: Q1–Q4 (What is it / Why does it exist / How does it connect / Where is it used), then personal sections: **My open questions**, **Explore further** (reading list), **Continue in the graph** (next-links with statuses).
- **No "Where I stand" self-assessment table** — Shyam reviewed and cut it (Aug 19); the draft originally had one.
- **Explore further links out** (Aug 19): external resources get real links (target=_blank), e.g. 3Blue1Brown Essence of Linear Algebra, Qiskit, and **blochcubes.org** (Bloch Cubes — Shyam specifically wants this on the qubit page). Internal node links stay toast placeholders until those pages exist.
- **Angle-figure convention** (Aug 19, from a reference image Shyam shared): angles in geometry figures are drawn as **shaded wedges at the origin** (terracotta stroke, ~13% terracotta fill) — e.g. on the Bloch sphere, θ is a wedge from the +z axis to the state vector, φ a wedge in the equator plane from the x̂ axis to the state's projection.
- Math is set in the site's `.formula` blocks (mono on #EDEAE1) with Unicode kets/superscripts — no KaTeX/MathJax dependency, matching the RB note in the approved spec.
- Each note gets figures as plates: fig. 1 concept illustration (e.g. Bloch sphere in hairline style), fig. 2 "this node in the graph" mini-map in the option-2 box style with labeled edges (breaks out wide like atlas plates).
- Misconceptions handled as blockquotes ("often confused with"); the two-Hadamard interference demo is the Q2 centrepiece of this note.
- Page title matches the map's sub-concept label ("Qubits & States", per the Quantum Information box in fig. 1 of the atlas spec).

## The concept

A knowledge graph, not a blog. Three layers:

1. **Atlas** — interactive concept maps, the entry point. Nodes carry status: published / in progress / coming soon (no dead links; "coming soon" nodes show what Shyam is currently learning and invite conversation).
2. **Evergreen notes** — one page per concept, each answering four questions: What is it? Why does it exist? How does it connect? Where is it used? Each page links back into the maps.
3. **Research notes** — paper summaries linked into the graph rather than standalone posts. Plus learning paths (curated journeys) and industry-strategy analyses (the "physics to products" angle that is uniquely Shyam's).

## Concept map inventory (from the ChatGPT chat)

1. Complete Quantum Computing Map (big picture / homepage)
2. Quantum Information Theory Map
3. Noise & Error Correction (sources → models → representation → characterization → mitigation)
4. Quantum Algorithm Family Tree
5. Everything About a Qubit
6. Quantum Hardware Landscape
7. Benchmarking Map ("How do we measure quantum computers?")
8. Mathematical Dependencies Map (linear learning chain)
9. From Physics to Products (signature map)
10. The Quantum Knowledge Graph (flagship, ties everything together)

## Map style — DECIDED (Aug 16)

Shyam chose the **"sophisticated & connected"** concept-map style (from a reference image he shared): boxes containing a concept title + bullet list of sub-concepts, connected by **labeled relationship arrows** with three edge types — solid = builds on / enables, dashed = relies on / runs on, dotted = leads to. Rendered in the site's design language (see CLAUDE.md design system): paper background, serif box titles and bullets, mono italic edge labels, box border color = status (teal published / terracotta in-progress / dashed faint coming-soon), published sub-concepts as bold teal clickable links inside boxes. Not chosen: simple hierarchy trees, research-notebook/sticky-note style, and the earlier circle-node graph.

## Prototype / spec

- The approved spec lives in the repo: `design/atlas-prototype.html` — single-file HTML in the site's exact design (tokens lifted from Base.astro), full visitor journey: Atlas homepage with option-2 "Complete Quantum Computing Map" (fig. 1, 9 boxes + labeled edges + edge legend) → Noise & Error Correction map in the same style (fig. 2, 5-stage chain with a dotted feedback loop "changes the noise you see") → Randomized Benchmarking evergreen note (4-question structure, site .post styles) → Decoder Architectures coming-soon page (reading list + invitation). Atlas plates break out wider than the 720px column on large screens with a mono "fig. N" caption, like plates in a book.
- The node-page content template: `design/qubits-and-states.html` (see format decisions above).
- Earlier iterations: 3-theme A/B/C switcher (rejected — differences were only skin-deep), circle-node graph (superseded by option-2 boxes).

## Working approach (agreed with Shyam)

- Shyam owns the maps' structure and the "why I drew it this way" commentary; content is drafted collaboratively but every published note passes his understanding test — if he can't explain a node, it stays "in progress."
- Iterate visuals with Claude until he likes them; publish incrementally (small graph that grows, Wikipedia-style).
- Division of labor: Claude Code (VS Code) builds in the repo; Cowork sessions handle content drafting, research, map design, and review. Git + the Claude project docs are the sync point.
