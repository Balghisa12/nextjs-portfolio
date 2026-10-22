# Hazim Benslimane — portfolio

Personal portfolio styled as a music-streaming artist profile: a library sidebar, album-style project pages, the career as a track list, and a bottom bar.

Despite the repository name, this is **not** a Next.js app. It is React 18 + TypeScript + Vite, styled with Tailwind CSS, routed with React Router.

## Commands

```bash
npm ci
npm run dev       # http://localhost:5173
npm run lint
npm run build     # type-check, build to dist/, copy index.html to dist/404.html
npm test          # Playwright end-to-end tests against the built site (run `npm run build` first)
```

The first `npm test` on a machine needs a browser: `npx playwright install chromium`.

CI (`.github/workflows/ci.yml`) runs lint, build and the Playwright suite on every pull request and on `main`.

## Where things live

| Path | What it is |
|------|------------|
| `src/content/` | All site content, typed: `profile`, `experience`, `projects`, `education`, `skills`, `decisions`, and `ui` (interface strings) |
| `src/pages/` | One component per route |
| `src/components/` | App shell, library sidebar, headers, cards, case-study layout, contact links, language switcher, bottom bar |
| `src/assets/` | Portrait and project images (WebP) |
| `public/cv/` | The original CV PDF, served as-is |
| `docs/content-ledger.md` | Every published claim, its source, and what still needs the owner's confirmation |
| `tests/site.spec.ts` | Routing, focus, locale, 404, link-integrity, layout-width and axe accessibility checks |

## Updating content

Content is data, not markup. Edit the files in `src/content/`:

- Every human-readable string is an `L` object (`{ en, fr }`). TypeScript fails the build if a language is missing.
- **Add a project:** append to `projects` in `src/content/projects.ts`, add its cover (640×640) and screenshots (720 and 1440 px wide) under `src/assets/projects/`. Every project appears on the home page. Empty arrays hide a case-study section.
- **Edit a role:** `src/content/experience.ts`. `highlights` are always visible; `more` sits under "More details". Only list technologies the CV names for that role.
- Before publishing a new claim, add it to `docs/content-ledger.md` with its source.

## Languages

English and French. English is the default; the visitor's choice is saved in `localStorage` (`locale`) and sets `<html lang>`. If storage is blocked, the choice lasts for the visit. The CV is only available in French, and its links say so.

## Audio

There is no audio player. The previous site shipped a commercial track with no established distribution rights, so it was removed. The bottom bar shows what the visitor is viewing, the next project, and contact links. To bring audio back, use a track you have the right to distribute, load it only after the visitor presses play, and never autoplay.

## Deployment

Hosted on Vercel as a static Vite build (`dist/`).

- `vercel.json` rewrites the app's routes (`/projects/*`, `/experience`, `/about`, `/contact`, `/skills`, `/education`) to `index.html`, so refreshing a nested URL works.
- Any other path is served `dist/404.html` with a real 404 status; the app then renders its not-found page.
- Pushing a branch creates a Vercel preview; production deploys from `main`.

## Search and social previews

- `index.html` carries the site-wide title, description, Open Graph tags, a `Person` JSON-LD block and a `<noscript>` summary with contact links.
- Pages are rendered client-side, so every route shares the same social preview card (`public/og-image.png`). Per-route previews would need prerendering.
- `og:image` is a relative URL and there is no canonical URL yet: both need the final domain.
