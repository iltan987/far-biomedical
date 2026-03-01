# FAR Better Bio — Website

Official website for **FAR Better Bio**, an R&D company developing advanced blood-cell separation and apheretic blood filtration technologies (AutoCeive, AphereCeive). Built with Next.js 16, Tailwind CSS v4, and deployed on Vercel.

**Live:** [https://www.farbetterbio.com](https://www.farbetterbio.com)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Styling | Tailwind CSS v4 + shadcn/ui |
| Animation | Motion (Framer Motion) |
| Email | Nodemailer via Gmail SMTP |
| Analytics | Vercel Analytics + Speed Insights |
| Deployment | Vercel |
| Package manager | pnpm 10 |
| Node version | Node 22 |

---

## Getting Started

### 1. Install dependencies

```bash
pnpm install
```

### 2. Set up environment variables

Copy the example below into a `.env` file at the project root:

```env
# Gmail SMTP — required; app will crash without these
GMAIL_USER=you@gmail.com
GMAIL_APP_PASSWORD=your_gmail_app_password

# Where contact form submissions are delivered (defaults to GMAIL_USER if unset)
CONTACT_EMAIL_TO=inbox@example.com

# Set to "false" to skip sending a confirmation email to the visitor
SEND_CONFIRMATION_EMAIL=true

# Public site URL — use http://localhost:3000 for local dev
# Set to https://www.farbetterbio.com in Vercel environment variables for production
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

> **Gmail App Password** — in your Google Account go to  
> Security → 2-Step Verification → App passwords → generate one for "Mail".

### 3. Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Project Structure

```
src/
  app/           # Next.js App Router pages and server actions
  components/    # React components (UI, site shell, page sections)
  data/          # Static data (products, team members, services, navigation)
  images/        # Statically imported images (blur placeholders auto-generated)
  lib/           # Shared utilities and siteConfig constants
  types/         # TypeScript type definitions
  env/           # Type-safe environment variable schemas (@t3-oss/env-nextjs)
public/          # Static assets served from the web root (logo, favicons)
```

---

## Available Scripts

| Command | Description |
|---|---|
| `pnpm dev` | Start dev server at localhost:3000 |
| `pnpm build` | Production build |
| `pnpm start` | Start production server after build |
| `pnpm lint` | ESLint check |
| `pnpm lint:fix` | ESLint auto-fix |
| `pnpm format` | Prettier format all files |
| `pnpm type-check` | TypeScript type check without emitting |

---

## Deployment (Vercel)

1. Connect the GitHub repository to a Vercel project.
2. In **Vercel → Project → Settings → Environment Variables**, add:
   - `GMAIL_USER`
   - `GMAIL_APP_PASSWORD`
   - `CONTACT_EMAIL_TO` *(optional)*
   - `NEXT_PUBLIC_SITE_URL` = `https://www.farbetterbio.com`
3. Under **Vercel → Project → Settings → Domains**, add `www.farbetterbio.com` and set up an apex redirect from `farbetterbio.com`.
4. Push to `main` — Vercel deploys automatically.

`VERCEL_URL` and `VERCEL_PROJECT_PRODUCTION_URL` are set automatically by Vercel and are used as fallbacks in `src/app/layout.tsx`.

---

## Adding Content

| Content type | Location |
|---|---|
| Team member photos | `src/images/` + update `src/data/team-members.ts` |
| Instrument product images | `src/images/instruments/` + update `src/data/laboratory-instruments.ts` |
| Contact / office photo | Replace `<ImagePlaceholder>` in `src/app/contact/page.tsx` |
| Site-wide contact details | `src/lib/constants.ts` → `siteConfig.contact` |
| Navigation links | `src/data/navigation.ts` |
