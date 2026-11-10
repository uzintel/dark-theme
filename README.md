# Tokyo Project Management Community

The TPMC website is a static Astro site for a Tokyo-based project management community. It preserves the site's dark visual theme and responsive layout while presenting the community's activities, mission, and contact information.

**Canonical site URL:** https://dark-theme.jr-ergashov.workers.dev

## Development

Node.js 22.12 or newer is required.

```sh
npm install
npm run dev
npm run check
npm run build
```

## Pages

- `/` — Community introduction and activity highlights
- `/activities/` — Six community activity themes
- `/about/` — Mission, vision, values, audience, and community approach
- `/contact/` — Contact form and configured community channels
- `/services/` — Permanent redirect to `/activities/`

## Configuration

Edit `src/config.ts` for the brand, canonical URL, SEO text, community location and participation language, navigation, external links, and form settings. Unconfirmed external destinations and the regular meeting schedule remain unset; their related links and schedule text are hidden until configured.

The provided TPMC wordmark is `public/tpmc-logo.png`. The favicon, Apple touch icon, and social preview are maintained in `public/`.

## Contact form

The existing Formgong integration posts to the configured endpoint. Set `PUBLIC_FORMGONG_ACCESS_KEY` in the deployment environment to enable submissions; the repository contains only the provider's placeholder key. The form shows success only when the server returns JSON with `success: true`, and its no-JavaScript POST path redirects to `/thanks/`.

## Design and accessibility

The site uses Astro, Tailwind CSS 4, and Questrial. Motion follows reduced-motion preferences; headings and links remain semantic, form fields are labeled, and the navigation includes a skip link.

## License

MIT, see `LICENSE`. The Questrial font is licensed under the SIL Open Font License 1.1.
