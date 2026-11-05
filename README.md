# GoalPulse

Football news + FPL tips site (Astro 4), built for Tier 1 audiences with a UK
focus first, plus USA, Canada, Australia and Western Europe. Pakistan traffic
is NOT the target for this site.

## Run it

```bash
npm install
npm run dev
```

Build for deploy:

```bash
npm run build
```

## IMPORTANT — domain

`astro.config.mjs` and `src/layouts/Layout.astro` both use
`https://goalpulse.org` — the domain owned by the owner (bought on Hostinger,
Nov 2026). `astro.config.mjs`, `src/layouts/Layout.astro` and `public/robots.txt`
all use this domain, so the sitemap and canonical URLs match the live site.

## Content

- `src/lib/articles.js` holds every article (slug, section, body blocks).
- Sections: `/news/` (football news), `/fpl-tips/` (gameweek tips, captain
  strategy, chip timing), `/guides/` (evergreen FPL explainers).
- Dated news items use only facts verified by web search on 3 November 2026.
  Everything else is evergreen strategy with no invented prices, ownership
  figures, injuries, fixtures or quotes.
- No club logos, player photos or copyrighted images: article visuals are
  CSS gradients only.
- No affiliate links, no ad code, no tracking on this site.

## Ad-network readiness notes

- About, Contact and Privacy Policy pages are included (ad networks look
  for these).
- Footer and About page carry the independence disclaimer: GoalPulse is an
  independent fan site, not affiliated with, endorsed by, or connected to
  the Premier League or Fantasy Premier League.
- The contact form is front-end only: connect Formspree or Netlify Forms on
  deploy to actually receive messages.
- Fresh gameweek posts are needed regularly (before/after every FPL
  deadline) — news/sports sites are expected to publish often. A fresh
  application to The Moneytizer with this site is possible, but approval
  is NOT guaranteed.

## Technical notes

- Astro 4 with `@astrojs/sitemap` pinned to exactly 3.1.0 (other versions
  fail on Astro 4).
- All shared CSS lives in `src/styles/global.css`, imported by Layout.
  Never rely on scoped `<style>` in Layout.astro for page content — Astro
  scoped styles do not reach `<slot />` content.
- Responsive: desktop nav + mobile hamburger menu below 900px.

## Online editing (Decap CMS + Netlify) — no PC needed

Articles live as Markdown files in `src/content/articles/` (one file per
article), defined in `src/content/config.ts`. They are edited online:

1. **GitHub** — repo `goalpulse` (user `aline1353`), public, default
   branch `main`. Upload this project's files via the GitHub web UI
   (contents of the folder, not the zip itself; never `node_modules`
   or `dist` — Netlify builds those).
2. **Netlify** — netlify.com → Add new site → Import from GitHub →
   repo `goalpulse`. Build settings come from `netlify.toml`
   (`npm run build`, publish `dist`). Every commit rebuilds + deploys.
3. **Login** — Netlify site settings → Identity → Enable Identity,
   then Services → Git Gateway → Enable. Invite yourself from
   Identity, set a password from the emailed link, then log in at
   `https://goalpulse.org/admin` (after the domain step below).
4. **Domain** — Netlify Domain settings → Add `goalpulse.org`, then
   add the DNS records Netlify shows into Hostinger (Domains →
   goalpulse.org → DNS). DNS can take a few hours to propagate; until
   then the site is live on its Netlify address. The domain itself
   stays registered at Hostinger.
5. **Posting** — open `goalpulse.org/admin`, log in, Articles →
   New Article (or edit one), Save. The save commits to GitHub and
   Netlify rebuilds; the article is live in about 1–2 minutes.

Notes:
- Listings sort newest-first by `pubDate`; `dateLabel` is the exact
  date text shown on the site. `order` only breaks same-day ties.
- The old local PHP admin-panel is NOT part of this project and must
  not be used for live articles anymore — it edited `articles.js`,
  which no longer exists. Keep the old local folder only as a backup.
- If a save ever fails to appear, check Netlify → Deploys for a failed
  build (usually a frontmatter typo, e.g. a bad date) and fix it in
  the editor.
