# Kickline Style Guide

Source: [Figma — Kickline v3.7](https://www.figma.com/design/MgPJOMQO3faZgadYPS5qly/Kickline--v3.7---Community-)
Implemented in `src/app/globals.css` as Tailwind v4 `@theme` tokens.

## Typography

| Role          | Font            | Weight | Size  | Line Height | Letter Spacing |
|---------------|-----------------|--------|-------|-------------|----------------|
| Display / H1  | Space Grotesk   | 700    | 84px  | 1.1         | -1px           |
| H2            | Space Grotesk   | 700    | 60px  | 1.2         | -1px           |
| H3            | Space Grotesk   | 700    | 48px  | 1.2         | -1px           |
| H4            | Space Grotesk   | 700    | 40px  | 1.3         | -1px           |
| H5            | Space Grotesk   | 700    | 32px  | 1.3         | -1px           |
| H6            | Space Grotesk   | 700    | 26px  | 1.4         | -1px           |
| Tagline       | Inter SemiBold  | 600    | 16px  | 1.5         | 0              |
| Text Large    | Inter           | 300–800| 26px  | 1.5         | 0              |
| Text Medium   | Inter           | 300–800| 20px  | 1.5         | 0              |
| Text Regular  | Inter           | 300–800| 18px  | 1.5         | 0              |
| Text Small    | Inter           | 300–800| 16px  | 1.5         | 0              |
| Text Tiny     | Inter           | 300–800| 12px  | 1.5         | 0              |

Headings use **Space Grotesk Bold** with tight tracking. Body uses **Inter**.

## Color — Primitives

### Neutrals
`#f2f2f2` · `#d9d9da` · `#b4b4b5` · `#838384` · `#525252` · `#202021` · `#080809`

### Woodsmoke (brand dark)
`#e6e7e7` · `#cecfcf` · `#565759` · `#0e0f12` · `#0b0c0e` · `#050607` · `#040405`

### Catskill White (off-white)
`#fefefe` → `#494a4b`

### Dodger Blue (accent)
`#ebf2fe` · `#d7e6fd` · `#75a7f8` · **`#3b82f6`** · `#2f68c4` · `#173462` · `#112749`

### Gull Gray (cool gray)
`#f4f5f7` → `#2e3135`

## Color Schemes

| Scheme | Background | Foreground | Text     | Border          | Accent  |
|--------|------------|------------|----------|-----------------|---------|
| 1      | `#202021`  | `#080809`  | `#fff`   | `#ffffff33`     | `#fff`  |
| 2      | `#080809`  | `#202021`  | `#fff`   | `#ffffff33`     | `#fff`  |
| **3**  | `#040405`  | `#050607`  | `#fff`   | `#ffffff33`     | `#fff`  |

**Scheme 3** (deepest dark) is the primary brand scheme. The kit's scheme
**Accent is white** (`#fff`); Dodger Blue lives in the primitives. The primary
CTA, however, uses a **blue → violet gradient** (see below), so the live brand
accent direction is pending confirmation against the landing-page design.

## Buttons

Verified from the Figma button component:

- **Shape:** full pill (`border-radius: 100px` → `rounded-full`), padding `24px / 10px`.
- **Type:** Inter Medium, 18px, white text.
- **Primary:** blue → violet gradient, `linear-gradient(112deg, #0d72fc, #703df6)` (measured from render; not bound to named color variables).
- **Secondary:** faint fill + border; pill.
- **Tertiary / Link:** no fill (tertiary keeps padding; link is text-only).

## Radius

Kit defines Small / Medium / Large — **all 8px**. There is no `xl` token; buttons
use a full pill instead.

| Token  | Value |
|--------|-------|
| sm     | 8px   |
| md     | 8px   |
| lg     | 8px   |

## Shadows

Figma effect styles (drop shadows), exposed as `--shadow-*` → `shadow-{name}`:

| Token      | Approx. |
|------------|---------|
| xxsmall    | `0 1px 2px rgb(0 0 0 / .05)` |
| xsmall     | `0 1px 2px /.06`, `0 1px 3px /.10` |
| small      | `0 2px 4px -2px /.06`, `0 4px 8px -2px /.10` |
| medium     | `0 4px 6px -2px /.03`, `0 12px 16px -4px /.08` |
| large      | `0 8px 8px -4px /.03`, `0 20px 24px -4px /.08` |
| xlarge     | `0 24px 48px -12px /.18` |
| xxlarge    | `0 32px 64px -12px /.14` |

## Voice & Tone

- Direct, motivating, performance-focused.
- Speak to drummers who want **measurable progress**, not random practice.
- Avoid generic SaaS clichés ("unlock", "supercharge"). Prefer rhythm/music-tech language: *tempo, lock-in, groove, in the pocket, count off, count in*.

## Motion (planned)

- GSAP for hero, section reveals, and beat-grid animations.
- Animation should feel **on the beat** — snappy easing, rhythmic stagger.
- Respect `prefers-reduced-motion`.

## Usage in code

Tokens are exposed as Tailwind utilities via `@theme` in `src/app/globals.css`:

- `bg-background`, `text-text`, `border-border`, `bg-accent`
- `bg-woodsmoke`, `bg-woodsmoke-darker`, `text-neutral-light`, `bg-dodger`
- `font-display` (Space Grotesk), `font-sans` (Inter, default on body)
