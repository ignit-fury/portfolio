# xzenstudio — Developer Portfolio · DESIGN.md

Design system and visual language for the xzenstudio team portfolio
(`portfolio`). Single-page React app (Create React App) styled with
plain CSS custom properties — no UI framework.

---

## 1. Brand & Product

| | |
|---|---|
| **Type** | Team developer portfolio (Product type: Portfolio) |
| **Audience** | Hiring managers, recruiters, fellow developers |
| **Tone** | Minimal, technical, confident, warm light palette |
| **Primary goal** | Showcase selected projects + skills, drive contact |
| **Style** | Light mode (paper & terracotta), monospace-accented, grid-driven |

---

## 2. Color Tokens

Defined in `client/src/styles/index.css` under `:root`. Semantic, not raw hex,
in components.

| Token | Value | Role |
|---|---|---|
| `--color-background-base` | `#f7f5f0` | Page background (warm off-white) |
| `--color-surface-card` | `#ffffff` | Card / panel surface |
| `--color-secondary-surface` | `#f0ede6` | Hover / secondary surface |
| `--color-grid-line-border` | `#e2ddd1` | Section & card borders |
| `--color-hover-border` | `#c8c0af` | Hover border emphasis |
| `--color-dark-section` | `#1f1c18` | Dark footer / inverted sections |
| `--color-foreground-ink` | `#1f1c18` | Primary text |
| `--color-muted-text` | `#5c574c` | Secondary text (desc) |
| `--color-subtle-text` | `#726b5f` | Tertiary / meta text |
| `--color-terracotta-accent` | `#c1633d` | Accent / CTA / focus ring (brand color) |
| `--color-terracotta-text` | `#a84f2e` | Accent labels / section numbers |
| `--color-success` | `#3f7d4a` | Success state |
| `--color-error` | `#b3261e` | Error / destructive state |

**Rule:** one accent (terracotta). Never mix accent hues. Functional colors
(success/error) always paired with text, not color-only.

---

## 3. Typography

| Token | Family | Usage |
|---|---|---|
| `--font-display` | **Cabinet Grotesk** (800/900) | Section titles, headings (loaded via Fontshare) |
| `--font-body` | **JetBrains Mono** (400/500) | Metadata, labels, code-like text (Google Fonts) |
| `--font-sans` | **Inter** → system-ui fallback | Body copy |

Type scale (fluid):
- Section titles: `clamp(32px, 4.5vw, 64px)`, weight 700, tracking `-0.03em`
- Section label: `12px`, letter-spacing `1.5px`, terracotta (mono feel)
- Body: `16px` / line-height `26px`
- Project title: `22px`, weight 700, tracking `-0.5px`
- Tags / meta: `10px`, letter-spacing `1–2px`, uppercase

**Rule:** headings use display font; technical labels use mono; body uses sans.
No emojis as icons — SVG / text glyphs only.

---

## 4. Spacing Scale (4 / 8pt system)

`--space-1:4` → `--space-40:160`. Core steps used:
`4, 8, 12, 16, 18, 20, 24, 28, 32, 40, 48, 64, 72, 80, 112, 128, 160`.

Sections: `padding: 112px 32px` (desktop) → `72px 16px` (mobile, ≤768px).
Max content width: `1200px`, centered.

---

## 5. Layout & Structure

Single scroll page, sections separated by `1px` top borders (grid lines):

1. **Navbar** — fixed top, section anchor links (`work`, `about`, `skills`, `contact`), active-section highlight.
2. **Hero** — team intro, animated.
3. **Work** — `ScrollStack` of project cards (pinned stacking scroll).
4. **About** — team bio + team member roster.
5. **Skills** — skill grid.
6. **Contact** — direct email CTA + links.
7. **Footer** — dark section, meta.
8. **ScrollToTop** — floating button.
9. **LoadingScreen** — animated "compiling" overlay on initial load.
10. **SplashCursor** — decorative cursor effect (disabled on light palette).

**Work section (ScrollStack):**
- Component: `client/src/components/ScrollStack.js` (+ `ScrollStack.css`).
- `useWindowScroll` mode (hooks the page's native scroll via Lenis).
- Each project = `ScrollStackItem` → `.scroll-stack-card` wrapper → `.project-card`.
- Project card layout: `grid-template-columns: 200px 1fr 40px` (image | info | arrow).
- Stack props: `itemDistance:80`, `stackPosition:"25%"`, `scaleEndPosition:"8%"`,
  `baseScale:0.9`, `itemScale:0.05` — top card reads full-size, stacked cards recede.
- Card min-height `380px`; single-column (`1fr`) at ≤768px.
- Card shadow: `0 1px 3px rgba(31,28,24,0.06)`, hover: `0 8px 20px rgba(193,99,61,0.12)`.

**Team section (About):**
- Card-based layout with rounded border (`border-radius: 12px`).
- Proximity hover effect: nearest row's name shifts toward terracotta, avatar scales up.
- IntersectionObserver scroll-reveal with staggered fade-in.

---

## 6. Components & Motion

- **Motion:** scroll-linked transforms only (`translate3d` + `scale`), GPU-composited,
  no width/height animation. Entrance via `.fade-in` → `.visible` (opacity + 20px rise, 0.6s).
- **Stacking:** cards pin and scale as you scroll; one prominent card at a time.
- **Interactive states:** cards lift `-4px` + terracotta glow on hover; focus ring
  `2px solid --color-terracotta-accent`, offset `2px`.
- **Reduced motion:** `@media (prefers-reduced-motion: reduce)` collapses all
  animation/transition durations and `scroll-behavior`. `ScrollStack` skips Lenis
  smoothing and uses a native scroll listener; bottom padding trimmed.
- **Loading screen:** bracketed counter with progress bar, curtain-lift exit animation.

---

## 7. Accessibility

- Visible focus rings on all `a / button / input / textarea`.
- `prefers-reduced-motion` fully respected (ScrollStack + global + team hover).
- `sr-only` utility for screen-reader-only text.
- Semantic landmarks: `<section>` with `aria-labelledby`, project links have
  `aria-label`, external links `target="_blank" rel="noopener noreferrer"`.
- Touch: `touch-action: manipulation`, tap-highlight removed, 44px+ hit areas.

---

## 8. Responsive Breakpoints

- Desktop: `> 768px` — multi-column project cards, wide section padding.
- Mobile: `≤ 768px` — single-column cards, `section-line` hidden, tighter padding.
- Max content width `1200px`; horizontal scroll prevented (`overflow-x: clip`).

---

## 9. Tech Stack

- React 18 + Create React App (client), Express + MongoDB (server).
- Animation: Framer Motion, GSAP (`SplitText`, `ScrollTrigger`), Lenis (smooth scroll).
- Images: lazy-loaded (`LazyImage`), WebP/SVG assets in `public/images`.
- Email: Web3Forms (client-side form submission).
- Loading: custom `LoadingScreen` component with simulated progress.
