import { getCollection } from 'astro:content';

// Data layer for the Decap/Netlify workflow: articles come from the
// Markdown content collection (src/content/articles/), not from a
// hand-edited JS file. The old src/lib/articles.js is gone on purpose —
// there must be exactly one source of truth, the files Decap edits.

export const CATEGORY_NAMES: Record<string, string> = {
  news: 'Football News',
  'fpl-tips': 'FPL Tips',
  guides: 'FPL Guides',
};

export interface Article {
  slug: string;
  path: string;
  category: string;
  title: string;
  excerpt: string;
  pubDate: Date;
  dateLabel: string;
  readTime: number;
  featured: boolean;
  image: string | null;
  imageCredit: string | null;
  order: number;
}

function toArticle(e: any): Article {
  return {
    slug: e.slug, // Astro reserves `slug`: it comes from the filename.
    path: e.data.section,
    category: CATEGORY_NAMES[e.data.section] ?? e.data.section,
    title: e.data.title,
    excerpt: e.data.excerpt,
    pubDate: e.data.pubDate,
    dateLabel: e.data.dateLabel,
    readTime: e.data.readTime,
    featured: e.data.featured,
    image: e.data.image,
    imageCredit: e.data.imageCredit,
    order: e.data.order,
  };
}

// Newest first by publish date; original order breaks same-day ties.
export async function getAllArticles(): Promise<Article[]> {
  const entries = await getCollection('articles');
  const list = entries.map(toArticle);
  list.sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime() || a.order - b.order);
  return list;
}

export async function byPath(path: string): Promise<Article[]> {
  return (await getAllArticles()).filter((a) => a.path === path);
}
