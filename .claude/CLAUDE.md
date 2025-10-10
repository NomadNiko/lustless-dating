# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Lustless Dating Platform - Promotional Website**

Next.js 15 marketing/promotional website with internationalization (i18n). Runs on port 36942 in production, managed by PM2 as `lustless-web`.

## Key Technologies

- **Framework**: Next.js 15.5.x (App Router with Turbopack)
- **React**: 19.x
- **Styling**: Tailwind CSS
- **Internationalization**: next-intl
- **Email**: Resend API for mailing list
- **Animations**: Lenis (smooth scroll)

## 🚨 CRITICAL: Claude Code Permissions

**NEVER, EVER BUILD, START, STOP, OR RESTART SERVICES**

You are **STRICTLY FORBIDDEN** from running any build, start, stop, restart, or deployment commands.

**Your ONLY allowed commands are:**

```bash
# Linting
npm run lint                   # Run ESLint
```

**That's it. Nothing else. Period.**

You are permitted to:
- Edit code files when asked
- Read and analyze code
- Suggest code changes

The user handles ALL builds, deployments, and service management.

## Project Structure

```
app/
├── [locale]/                  # Internationalized routes
│   └── page.js                # Main landing page
├── api/                       # API routes
│   └── send-email/            # Email subscription endpoint
├── layout.js                  # Root layout
├── globals.css                # Global styles
├── favicon.ico
├── robots.txt
└── sitemap.js                 # Dynamic sitemap generation

components/                    # React components for landing page
messages/                      # i18n translation files
public/                        # Static assets
middleware.js                  # i18n middleware for locale detection
i18n.js                        # i18n configuration
```

## Application Architecture

### Internationalization Setup

- Uses `next-intl` for i18n support
- Locale detection via middleware
- Translation files in `messages/` directory
- URL structure: `/[locale]/...` (e.g., `/en/`, `/es/`)

### Email Integration

- Resend API for newsletter/mailing list signups
- API endpoint: `/api/send-email`
- Environment variables:
  - `RESEND_API_KEY`
  - `RESEND_FROM_EMAIL`
  - `RESEND_SENDER_NAME`
  - `RESEND_TO_EMAIL`

### Styling

- Tailwind CSS for utility-first styling
- Custom configuration in `tailwind.config.js`
- Global styles in `app/globals.css`
- Lenis for smooth scrolling animations

## Environment Configuration

```
RESEND_API_KEY=re_...
RESEND_FROM_EMAIL=no-reply@nomadsoft.us
RESEND_SENDER_NAME=LustlessMailingList
RESEND_TO_EMAIL=lustless-dating@nomadsoft.us
```

## PM2 Deployment

- Process name: `lustless-web`
- Port: 36942
- Uses `npm run start` (builds with Turbopack and starts server)

## Important Development Notes

- **Next.js 15 App Router** - Uses file-based routing in `app/` directory
- **Turbopack** - Fast bundler enabled for both dev and build
- **Locale-first routing** - All pages under `[locale]` dynamic segment
- **Marketing focus** - This is the public-facing promotional site
- **Lightweight** - Minimal dependencies, focused on performance
- **Email captures** - Main CTA is mailing list signup

## Related Projects

- **lustless-server**: NestJS backend API (port 36944)
- **lustless-admin**: Next.js admin panel and user signup (port 36946)
- **lustless-rn**: React Native mobile app

This website drives traffic to the admin portal for user signups.
