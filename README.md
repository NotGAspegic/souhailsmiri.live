<div align="center">

![Cover](https://i.imgur.com/4uapWvo.png)

# Souhail Smiri Portfolio

Personal portfolio built with Next.js, Tailwind CSS, Supabase, Spotify API, EmailJS, and Vercel.

</div>

## Stack

- **Framework**: [Next.js](https://nextjs.org/) 16
- **UI**: [React](https://react.dev/) 19
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Database**: [Supabase](https://supabase.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Data fetching**: [SWR](https://swr.vercel.app/)
- **Contact form**: [EmailJS](https://www.emailjs.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## Getting Started

Install dependencies:

```bash
npm ci
```

Create your local environment file:

```bash
cp .env.example .env.local
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Use `.env.example` as the template.

Required for Supabase-backed pages:

```env
SUPABASE_URL=
SUPABASE_KEY=
```

Optional features:

```env
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=
SPOTIFY_REFRESH_TOKEN=

GITHUB_TOKEN=

NEXT_PUBLIC_YOUR_SERVICE_ID=
NEXT_PUBLIC_YOUR_TEMPLATE_ID=
NEXT_PUBLIC_YOUR_USER_ID=

REVALIDATE_SECRET=
EMAIL_VALIDATION_API=
```

## Supabase Restore

If the Supabase project is new, run the SQL in:

```txt
supabase_restore.sql
```

It creates and seeds the tables used by the app:

```txt
projects
certificates
user_data
```

## Scripts

```bash
npm run dev      # start local development
npm run build    # production build
npm run start    # run production server after build
npm run tsc      # typecheck
```

The project uses Webpack explicitly for Next.js builds:

```json
"dev": "next dev --webpack",
"build": "next build --webpack"
```

## Deployment

Deploy on Vercel and add the same environment variables from `.env.example` in the Vercel project settings.

Before deploying, verify locally:

```bash
npm run tsc
npm run build
npm audit --omit=dev
```
