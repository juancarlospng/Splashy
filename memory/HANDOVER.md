# FLIGHT — Prototype Handover

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
