# shyamprasadrao.com

Personal site — essays, research notes, and projects. Built with [Astro](https://astro.build), hosted on GitHub Pages.

## Writing a new post

1. Create a Markdown file in `src/content/posts/`, e.g. `my-new-post.md`
2. Add frontmatter at the top:

   ```
   ---
   title: "My New Post"
   date: 2026-07-18
   topic: "Quantum"      # Strategy | Quantum | AI | Hardware | Reading
   summary: "One sentence shown in the list."
   ---
   ```
3. Write the post below the frontmatter in Markdown.
4. Commit and push to `main`. GitHub Actions rebuilds and deploys automatically (~2 min).

Set `draft: true` in the frontmatter to keep a post from publishing.

## Running locally (optional)

```
npm install
npm run dev      # preview at localhost:4321
```
