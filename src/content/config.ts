import { defineCollection, z } from 'astro:content';

// Articles live as Markdown files in src/content/articles/ (one file per
// article). They are edited online through Decap CMS (public/admin/) —
// the editor writes these files, Netlify rebuilds the site, and the new
// article goes live. No local build or PC is needed for posting.
//
// `section` is the URL section (news | fpl-tips | guides); the display
// category name is derived from it in src/lib/articles.ts.
// `pubDate` sorts the listings (newest first); `dateLabel` is the exact
// date text shown on cards and article pages. `order` only breaks ties
// between articles sharing a pubDate (it keeps the original order).
const articles = defineCollection({
  type: 'content',
  // NOTE: `slug` is intentionally NOT in this schema — Astro reserves it
  // (the slug comes from the Markdown filename). Frontmatter may still
  // carry a `slug` line (Decap writes one); Astro ignores extra keys.
  schema: z.object({
    title: z.string(),
    section: z.enum(['news', 'fpl-tips', 'guides']),
    excerpt: z.string(),
    pubDate: z.coerce.date(),
    dateLabel: z.string(),
    readTime: z.number(),
    featured: z.boolean().default(false),
    image: z.string().nullable().default(null),
    imageCredit: z.string().nullable().default(null),
    order: z.number().default(0),
  }),
});

export const collections = { articles };
