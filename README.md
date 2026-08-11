# Jenny — Product Designer Portfolio

A one-page portfolio site built with **Vite + React + TypeScript + SCSS**.
Sections: sticky nav, hero, services carousel, experience timeline,
"why hire me" stat counters, filterable portfolio carousel, testimonials
carousel, newsletter CTA with validation, scrolling marquee, blog grid,
and footer.

## Setup

```bash
npm install
npm run dev       # start the dev server
npm run build      # type-check + production build
npm run preview    # preview the production build
```

Requires Node 18+.

## Project structure

```
src/
  components/        one folder per section, each with a .tsx + matching .scss
    illustrations/    original hand-built SVG character art (no traced/copied artwork)
  data/content.ts     all site copy in one place — edit this to change text
  hooks/
    useReveal.ts             IntersectionObserver scroll-reveal
    useCarousel.ts           carousel state (page/next/prev/autoplay)
    useResponsivePerView.ts  cards-per-view based on breakpoint
  styles/
    _variables.scss   design tokens (color, type, spacing, radius, motion)
    _mixins.scss      reusable mixins (buttons, containers, reveal animation)
    global.scss       resets + shared utility classes
  App.tsx             assembles all sections
  main.tsx            React entry point
```

## Notes on how this was built

This was written by hand, section by section, rather than scaffolded and
then filled in — the sandbox this was built in has no network access, so
`npm install` couldn't be run here and the build/dev server were never
actually started. I did:

- A full manual read-through of every file for syntax and logic issues.
- A best-effort TypeScript syntax check using a hand-written type shim
  (since `@types/react` isn't installable here either), which caught and
  fixed a couple of real issues (implicit `any` event handlers, a
  double-space bug in heading text where manual spacing and the
  `AccentText` helper's auto-spacing were both adding a space).

What that check **couldn't** catch: anything that only shows up once
Sass/TypeScript/Vite actually run against their real dependency graph —
so treat `npm install && npm run build` as the real first test. If it
throws anything, it's most likely a small import-path or type mismatch,
not a structural problem — everything is written as plain, standard
React/TS/SCSS with no exotic tooling.

## Design notes

- **Palette**: orange `#fd8539` accent, navy `#161a2b` dark panels, warm
  neutral grays for body text — matching the reference design.
- **Type**: Baloo 2 (rounded, friendly display face) paired with Plus
  Jakarta Sans for body copy.
- **Motion**: scroll-triggered fade/rise via IntersectionObserver,
  animated stat counters, a skewed infinite marquee, carousel autoplay —
  all disabled automatically for people with `prefers-reduced-motion` set.
- **Illustrations**: the hero and "why hire me" character art are
  original flat-design SVGs built from primitive shapes, not copied from
  any source image — safe to use commercially without licensing concerns.

## Customizing

- **Copy**: everything lives in `src/data/content.ts`.
- **Colors/type/spacing**: `src/styles/_variables.scss`.
- **Adding a section**: create a folder in `src/components`, add it to
  `App.tsx`.
