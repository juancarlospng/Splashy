# FLIGHT — Prototype Handover

## Redesign v2 — art direction (2026-10-22)
- Direction: "an independent luxury sports publication meets a high-performance training brand."
- Signature hero: monumental solid FLIGHT + outlined ACADEMY typography layered with a generated athlete cutout (black backdrop dissolving via mix-blend-screen), movement-trajectory annotation, court arc, editorial lower-edge details strip; separate considered mobile composition.
- FLIGHT graphic language: dotted jump-trajectory SVGs with takeoff X + landing tick, vertical RiseMark, numbered X section markers on every major section, F.01-style frame tags, center-court arc decorations.
- Programs: editorial index (hover/focus updates a shared sticky image panel on desktop; tap-to-expand rows on mobile with all details visible); Flight Levels as a stepped staircase disclosure (accessible details elements, no cartoon art); programs in development with F.nn frame numbers.
- School: archive layout — featured episodes as varied image cards, remaining topics as a dense numbered index; filters intact.
- Method: single spacious composition along a vertical trajectory line (F.01–F.04), no icon cards.
- About: portrait-led creator block with rust frame corners, principles index, emblem storytelling moment.
- Closing CTA: monumental type with rust rule drawing in.
- Basketball cursor: 24px rust ball with dark seams, precise tracking, ~420ms click bounce (WAAPI, restarts cleanly), hover scale on interactive elements, native text cursors on inputs, disabled on touch + reduced-motion, footer "Custom cursor" toggle (persisted), native cursor always the fallback.
- Motion budget: 200–500ms transitions, one dominant animated element per viewport, reduced-motion honored.

## Implemented
- Pages: Home, Flight School (filterable 21-topic library), Programs (+12 detail views), Flight Test (demo form + guardian step), Coaching, Camps (demo interest form), About, Contact (demo form), Private Access (secondary demo gate).
- Interactions: working desktop + mobile navigation, EN/ES switch (route preserved, preference remembered), category filters, program detail views, accessible demo forms with validation ("Demo completed. No request has been sent." — nothing is sent or stored), framer-motion reveals + masked hero line reveal, one slow editorial marquee, subtle hero parallax, lenis momentum scrolling, reduced-motion support, visible rust focus rings, data-testids on all interactive elements.

## Demonstration-only functionality
- All forms (Flight Test, camp interest, contact, access code): client-side validation only, no network calls, no storage.
- No auth, no payments, no CRM, no email, no database.

## Temporary assets requiring replacement
- Wordmark, X mark, symbolic emblem (eye/arm/wave/brain): faithful SVG/code recreations from the uploaded "línea gráfica" — swap for official vector files (favicon is `public/favicon.svg`).
- Photography: 4 generated cinematic images + Unsplash/Pexels stock — replace with official photography of Splashy. No placeholder person is identified as Splashy anywhere.
- The 21 Flight School topics: derived from the brief's named topics (Approach, Foot Gathers, Windmill/Tomahawk) + its vocabulary; reconcile with the master plan's official 21.

## Decisions needed before launch
- Official vector logo files + favicon.
- Real photography approvals.
- Final 21-topic list confirmation.
- Contact details + live social links (Instagram handle @FLIGHTXACADEMY shown as text, no link yet).
- Flight Test request handling (email/CRM destination) and camp scheduling before enabling real submissions.
- Recovery / LeanCutX product decisions remain open per the master plan.

## Deploying to Vercel (ready)
- The frontend at `/app/frontend` is a fully static Create React App build — no backend, no database, no env vars at build or runtime (all forms are client-side demonstrations).
- `vercel.json` is committed with: `CI=false yarn build`, output `build/`, and an SPA rewrite (`/(.*) → /index.html`) so routes like /programs/flight-levels resolve on refresh.
- Deploy steps: import the repo in Vercel → set **Root Directory = `frontend`** → framework preset "Create React App" is auto-detected → Deploy. No environment variables needed.
- Production build verified locally (`yarn build` passes, ~30s).
- `.env` files are intentionally NOT committed (nothing needs them for this static site; the backend/.env holds a Mongo URL that must not ship to a public repo).
- When real integrations are added later (contact form delivery, assessment requests), set their keys in Vercel's Project → Settings → Environment Variables, never in committed files.
