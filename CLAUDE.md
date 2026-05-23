@AGENTS.md

# Kickline

A modern 3-page marketing website for a fictional drum training SaaS app.

## Product

Kickline is a performance-focused app for beginner-to-intermediate drummers who want to improve timing, speed, coordination, groove, and consistency through structured daily practice. It acts like a practice coach in your pocket: guided sessions, skill-based paths, progress tracking, daily routines, and targeted drills (double bass speed, rudiments, hand-foot coordination, timing control, groove).

The pitch: stop guessing what to practice — follow a focused system that builds measurable improvement over time.

## Audience & tone

- Beginner-to-intermediate drummers who want real progress over random practice.
- Brand feel: clean, sharp, modern, motivating, rhythm-driven.
- Visual style: dark, polished, energetic, music-tech inspired (think premium SaaS × music tech).

## Site structure (3 pages max)

- `/` **Home** — primary landing. Sections to cover: hero, feature overview, benefits, how it works, sample training paths/drills, progress/results, testimonials, pricing preview, final CTA. Strong visual storytelling; room for GSAP animations.
- `/pricing` **Pricing** — simple plan comparison + CTA.
- `/about` (or `/waitlist`) — brand story, mission, sign-up/contact flow.

## Tech stack

- Next.js 16 (App Router) — read `node_modules/next/dist/docs/` before assuming APIs; this version has breaking changes from prior knowledge.
- TypeScript, React 19
- Tailwind CSS v4 (via `@tailwindcss/postcss`)
- Turbopack dev/build
- GSAP for animation (planned)
- `src/` directory, `@/*` import alias

## Conventions

- Components live under `src/app/` (route-colocated) or `src/components/` (shared).
- Prefer Server Components by default; add `"use client"` only when needed (interactivity, GSAP, hooks).
- Tailwind utility classes for styling; no CSS modules unless something can't be done in Tailwind.
- Dark theme is the primary design target — design dark-first, light is secondary or skipped.

## Commands

- `npm run dev` — start dev server (Turbopack)
- `npm run build` — production build
- `npm run start` — run production build
- `npm run lint` — ESLint

## Scope guardrails

- This is a marketing site, not the app itself — no auth, no real backend, no database unless explicitly asked.
- Keep to 3 pages. Don't invent extra routes (blog, docs, dashboard) without being asked.
- It's a fictional brand — sample copy, testimonials, and pricing can be invented but should feel believable.
