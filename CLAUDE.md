# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server (http://localhost:5173)
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
```

## Architecture

React 18 + Vite SPA. Single-page landing site with smooth-scroll navigation between sections.

**Entry:** `index.html` → `src/main.jsx` → `src/App.jsx`

**Component layout (top → bottom):**
```
Navbar → Hero → Stats → Services → BrandsCarousel → Testimonials → Contact → Socials → Footer
```

All components live in `src/components/`. Each component is self-contained with its own Framer Motion scroll-triggered animations using `useInView`.

**Styling:** Tailwind CSS with custom design tokens defined in `tailwind.config.js`:
- `ng-dark` / `ng-card` / `ng-border` — background hierarchy
- `ng-accent` (#6c63ff purple) / `ng-cyan` (#00d4ff) — brand colors
- `ng-text` — secondary text
- Reusable classes in `src/index.css`: `.btn-primary`, `.btn-outline`, `.card`, `.gradient-text`, `.section-label`, `.section-title`, `.section-subtitle`, `.section-padding`

**Contact form:** Uses EmailJS (`@emailjs/browser`). Requires a `.env` file with:
```
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```
Copy `.env.example` → `.env` and fill in credentials from emailjs.com.

**Brands carousel:** `BrandsCarousel.jsx` — infinite CSS marquee animation (`animate-marquee` keyframe). Replace the `BRANDS` array with real brand objects `{ name, url, bg, color }`. Swap placeholder divs for `<img>` tags when logos are available.

**Stats counter:** `Stats.jsx` — custom `CountUp` component triggers when section enters viewport via `useInView`.

**Social links:** `Socials.jsx` and `Footer.jsx` both contain social URLs — update both when real profile URLs are ready.
