# Tokyo Project Management Community

The TPMC website is a static Astro site for a Tokyo-based project management community. It preserves the site's dark visual theme and responsive layout while presenting the community's activities, mission, and contact information.

**Current site URL:** https://dark-theme.jr-ergashov.workers.dev (staging)

**Intended production domain:** https://tpmc.tokyo. Keep the staging URL as the canonical origin until the production domain resolves and is connected to the deployment.

## Development

Node.js 22.12 or newer is required.

```sh
npm install
npm run dev
npm run check
npm run build
```

## Pages

- `/` — Community introduction, activity highlights, and Luma events calendar
- `/activities/` — Six community activity themes
- `/about/` — Mission, vision, values, audience, and community approach
- `/blog/` — Blog index; each post lives at `/blog/<file-name>/`
- `/contact/` — Contact form (or email fallback), community channels, and event information
- `/privacy/` — Privacy notice for the contact form (draft: organizers must confirm it)
- `/services/` — Permanent redirect to `/activities/`

## Configuration

Edit `src/config.ts` for the brand, current and intended site URLs, SEO text, community details, navigation, external links, and form settings. Join, LinkedIn, community-group, contact-email, and Luma event destinations are the confirmed TPMC links. No fixed event schedule is advertised; use Luma for event-specific details. Founder information is displayed in the Community Leadership section on the About page.

The provided TPMC wordmark is `public/tpmc-logo.png`. The favicon, Apple touch icon, and social preview are maintained in `public/`.

## Blog

Posts are Markdown files in `src/content/blog/`. To publish: copy `src/content/blog/_TEMPLATE.md`, rename the copy (the file name becomes the URL), fill in the front matter, set `draft: false`, and commit to GitHub. Cloudflare rebuilds the site automatically. GitHub's web editor works fine for this. Put images in `public/blog/`. Set `lang: "ja"` for Japanese posts.

Each post gets its own title, description, canonical URL, Open Graph tags, `BlogPosting` structured data, and an entry in `/sitemap-index.xml`, `/rss.xml`, and `/llms.txt`.

## Contact

Setup for the website form: create a free form at https://formgong.com/new, add its key as `PUBLIC_FORMGONG_ACCESS_KEY` (a Cloudflare build variable or Worker secret), have the organizers confirm `/privacy/`, send a real test message, and only then set `forms.verified` to `true` in `src/config.ts`.


The website form remains disabled until its provider, endpoint, delivery, spam protection, data handling, and privacy disclosure are verified. The contact page currently falls back to `mailto:info@tpmc.tokyo`. Do not expose provider API secrets in client-side code; review the provider's key model and integration before enabling a form. Keep `forms.verified` false until a safe configuration has been tested. The form shows success only when the server returns JSON with `success: true`; its no-JavaScript POST path redirects to `/thanks/`.

## Design and accessibility

The site uses Astro, Tailwind CSS 4, and Questrial. Motion follows reduced-motion preferences; headings and links remain semantic, form fields are labeled, and the navigation includes a skip link.

## License

MIT, see `LICENSE`. The Questrial font is licensed under the SIL Open Font License 1.1.
