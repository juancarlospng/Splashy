# FLIGHT — Website Prototype (PRD)

## Original problem statement
Build a polished, responsive, fully navigable website prototype for FLIGHT, the athletic development ecosystem created by Marquie "Splashy" Smith — presenting FLIGHT SCHOOL (free education: jumping, dunk mechanics, athletic development) and FLIGHT ACADEMY (structured development: programs, assessments, coaching, consultations, camps) as one premium brand experience. Editorial, cinematic, disciplined design. EN/ES. Honest availability states, no invented facts, demo-only forms.

## User decisions
- 21 Flight School topics: built from the brief's named topics + its own vocabulary (3 named topics grounded; the other 18 derived and clearly marked planned — must be reconciled with the master plan).
- Brand assets: user uploaded "línea gráfica" (brand notes + hero references). Wordmark, X mark and symbolic emblem were recreated in code (SVG/CSS) as faithful temporary recreations — replace with official vectors.
- Photography: mix of generated cinematic images + licensed stock (Unsplash/Pexels), all documented as temporary.

## Architecture
- React 19 (CRA + craco) SPA, react-router-dom 7, framer-motion 11, lenis 1.1.
- i18n: `src/i18n/{en,es}.js` + LanguageContext (route-preserving switch, localStorage persistence, `<html lang>` sync).
- Centralized data: `src/data/programs.js` (12 programs + 5 Flight Levels, bilingual, status fields), `src/data/school.js` (21 topics, 4 collections), `src/data/images.js` (registry with explicit dimensions against CLS).
- Design tokens: tailwind.config.js (carbon #1C1C1C, bone #EFE9DB, forest #4C5C52, rust #C6561A, stonegray #606060; Fraunces display / Inter body / JetBrains Mono labels).
- Backend untouched (prototype requires none); no payments, CRM, email, auth or database.

## Pages (all bilingual, responsive, motion-aware)
1. `/` Home — kinetic hero (masked line reveal, parallax dunk image), quick-links strip, editorial marquee, two-ecosystem split, Flight Test spotlight, 3 featured pathways, School preview (3 topics, "Coming soon"), 4 pillars, creator, coaching/camps entries, closing CTA.
2. `/school` — 21-topic library, working category filters, per-topic status, Academy CTA.
3. `/programs` — 6 main pathways, Flight Levels progression (Grasshopper→Spaceman, LVL 01–05 codes, no cartoon art), 6 programs in development with honest statuses (In development / Planned / Under review) + Recovery note.
4. `/programs/:slug` — detail views: overview, audience, focus, format, duration (only when documented), status, contextual inquiry CTA.
5. `/flight-test` — explainer (what/who/how) + demo form with validation, under-18 guardian step, medical-history note, "Demo completed. No request has been sent."
6. `/coaching` — Personalized Flight vs Consultation as distinct options.
7. `/camps` — concept, "Upcoming camp details will be announced.", demo interest form.
8. `/about` — mission, ecosystem relationship, creator, emblem storytelling, empty verified-results structure.
9. `/contact` — demo contact form, no published contact details, @FLIGHTXACADEMY handle shown as text.
10. `/access` — secondary demonstration gate view (no auth).

## Honesty guards implemented
No prices, no testimonials/results, no credentials/stats, no video players, no camp dates/locations, no contact details, no sponsor logos (Nike/Jordan), LFDC identity not merged, no booking confirmation, demo banners everywhere, statuses from the plan only.

## Verified (preview, 2026-10-22)
- All 8+ routes render without crashes (desktop 1440 + mobile 390).
- Filters: 21→6 topics on Dunk Library filter; ES switch preserves route; form validation (6 errors on empty submit), guardian block for minors, demo success message.
- No horizontal overflow on home/school/programs at either viewport.
