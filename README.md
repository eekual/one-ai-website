# one-ai-website

Marketing website for [one-ai.fashion](https://one-ai.fashion) — presenting the **SELFWEAR Transformation** by ONE.

---

## Overview

A single-page, infinite-scroll website built with pure HTML, CSS, and vanilla JavaScript. No frameworks or build tools required — deploy by serving static files.

---

## Structure

```
/
├── index.html   — single-page application markup
├── style.css    — all styles (custom properties, responsive, animations)
├── main.js      — scroll reveal, nav behaviour, count-up animations
└── README.md
```

---

## Brand

| Token | Value |
|---|---|
| Primary red | `#E60005` |
| Black | `#0a0a0a` |
| Font | Montserrat (Google Fonts, weights 300–900) |
| Logo | Inline SVG — ONE wordmark red |

Logo SVG source: `Brand/logo/One/ONE_wordmark_red.svg`

---

## Sections

1. **Hero** — SELFWEAR Transformation headline & introduction
2. **The Customer** — Old paradigm, fixed inventory
3. **Empathy Engine** — How SELFWEAR reads emotional signals
4. **From Selfie to Shipment** — 4-step production flow
5. **The Environment** — CO₂, waste, EU legislation, local manufacturing
6. **Brands CTA** — Partner with ONE (coming soon)

---

## Features

- **Scroll reveal** — `IntersectionObserver`-based fade-in for all content blocks
- **Sticky nav** — transparent on hero, dark/blurred on scroll
- **Smooth anchor scrolling** — nav-height offset applied
- **Count-up stats** — animated numbers triggered on first viewport entry
- **Responsive** — single-column layout below 900 px; nav links hidden on mobile
- **No dependencies** — zero npm, zero build step

---

## Deployment

Serve the repo root as a static site. Compatible with any static host (Netlify, Vercel, GitHub Pages, nginx, Apache).

```bash
# local preview
npx serve .
# or
python3 -m http.server 8080
```

---

## Content Source

Narrative content sourced verbatim from the SELFWEAR Transformation brief. Additional brand context from Notion workspace pages:
- *SELFWEAR — Powered by ONE AI*
- *The Future of Footwear with SELFWEAR™*
