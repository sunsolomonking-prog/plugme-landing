# PlugMe Landing Website

Modern, mobile-first marketing website for **PlugMe by DataBoost.ai**.

## Features

- Next.js App Router + TypeScript + Tailwind CSS
- Multi-page marketing site:
  - `/`
  - `/how-it-works`
  - `/pricing`
  - `/faq`
  - `/legal/terms`
  - `/legal/privacy`
  - `/waitlist`
  - `/partners`
- Reusable components: Navbar, Footer, CTA section, FAQ accordion
- Waitlist form (`/api/waitlist`) with validation + honeypot + rate limit
- Partner form (`/api/partners`) with validation + honeypot + rate limit
- JSON file persistence (`data/waitlist.json`, `data/partners.json`)
- SEO metadata and OpenGraph tags
- Analytics-ready placeholder in root layout (no real tracking IDs)

## Local development

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Production build

```bash
npm run build
npm run start
```

## Deployment

You can deploy directly to Vercel:

1. Push this repo to GitHub.
2. Import the project in Vercel.
3. Keep defaults for Next.js.
4. Deploy.

For other platforms, ensure Node.js 18+ and run `npm run build` + `npm run start`.

## Notes

- Compliance-safe language is used throughout the UI.
- Data is stored as JSON for simplicity. Swap in SQLite/Prisma later if needed.
- Rate limiting is in-memory and best suited for single-instance deployments.
