import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// SEO: `site` is required for the sitemap integration and for canonical
// URLs. Domain owned by the owner: https://goalpulse.org (bought on Hostinger, Nov 2026)
// on Namecheap 3 Nov 2026 at $12.08/yr — buy it at a registrar before deploying).
// NOTE: @astrojs/sitemap is pinned to exactly 3.1.0 — do NOT upgrade it
// to 3.7+ while this site is on Astro 4: 3.7+ needs Astro 5's routes hook
// and the build fails. If the live site ever moves to www, change this AND
// the canonical base in src/layouts/Layout.astro together.
export default defineConfig({
  site: 'https://goalpulse.org',
  integrations: [sitemap()],
});
