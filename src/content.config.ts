import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Every post is a Markdown file in src/content/posts/ with this frontmatter.
// `topic` drives the section it appears under on the Writing page.
const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    topic: z.enum(['Personal', 'Strategy', 'Quantum', 'AI', 'Hardware', 'Reading']),
    summary: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts };
