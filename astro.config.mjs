// @ts-check
import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// Your final site URL (used for sitemap / canonical links).
export default defineConfig({
  site: 'https://shyamprasadrao.com',
  markdown: {
    // LaTeX in posts, rendered to HTML at build time by KaTeX.
    // Delimiters are $$…$$ for both inline and display math; single-dollar math is
    // deliberately OFF so that prices like "$5M" in a post stay plain text.
    // KaTeX's stylesheet is imported once in src/layouts/Base.astro.
    remarkPlugins: [[remarkMath, { singleDollarTextMath: false }]],
    rehypePlugins: [rehypeKatex],
  },
});
