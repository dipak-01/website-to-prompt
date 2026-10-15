# CSS Extraction Reference

Quick reference for the agent on how to extract specific design values from a
website.

---

## Extracting Colors

### From CSS Variables (Best Method)

Look for `:root` declarations in stylesheets:

```css
:root {
  --primary: #3b82f6;
  --background: #ffffff;
  --text: #1a1a2e;
}
```

### From Computed Styles

When inspecting elements in the browser, look for:

- `color` — text color
- `background-color` — background
- `border-color` — borders
- `box-shadow` — shadows (may contain color)
- `background-image` — for gradients (`linear-gradient(...)`)

### Color Format Priority

Report colors in this priority:

1. CSS variable name + resolved value: `var(--primary) → #3b82f6`
2. Hex: `#3b82f6`
3. HSL: `hsl(217, 91%, 60%)`
4. RGB: `rgb(59, 130, 246)`

---

## Extracting Typography

### Font Families

Look in:

- `<link>` tags referencing Google Fonts or other CDN fonts
- `@font-face` declarations in CSS
- `font-family` computed values

Record the complete font stack: `'Inter', -apple-system, BlinkMacSystemFont, sans-serif`

### Font Sizes

Map every text element to its computed `font-size`:

| Element | Desktop | Mobile |
| ------- | ------: | -----: |
| H1      | 56px    | 32px   |
| H2      | 40px    | 28px   |
| Body    | 16px    | 16px   |

### Font Weights

Common mappings:

- 100 = Thin
- 200 = Extra Light
- 300 = Light
- 400 = Regular
- 500 = Medium
- 600 = Semi Bold
- 700 = Bold
- 800 = Extra Bold
- 900 = Black

---

## Extracting Spacing

### Section Padding

Inspect the main sections' `padding` values. Common pattern:

```
Desktop: padding: 96px 0
Tablet:  padding: 64px 0
Mobile:  padding: 48px 0
```

### Container Width

Look for `.container`, `.wrapper`, or similar class with `max-width`.

### Gap / Gutter

Check `gap` property on flex/grid containers.

---

## Extracting Shadows

Report box-shadow in full CSS format:

```
0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.06)
```

Name them by intensity: XS, SM, MD, LG, XL.

---

## Identifying Frameworks

### React / Next.js

- `<div id="__next">` → Next.js
- `<div id="root">` → React (CRA or Vite)
- `<script>` containing `_buildManifest.js` → Next.js
- `/_next/` in asset paths → Next.js

### Vue / Nuxt

- `<div id="app">` or `<div id="__nuxt">` → Vue / Nuxt
- `/_nuxt/` in asset paths → Nuxt

### Tailwind CSS

- Classes like `flex`, `items-center`, `px-4`, `text-lg` → Tailwind
- `tailwindcss` in CSS file names or comments

### Framer Motion

- `data-framer-*` attributes
- Smooth entrance animations on scroll

---

## Identifying Icon Libraries

| Library         | Clue |
| --------------- | ---- |
| Lucide          | `lucide-*` class names, SVG with `stroke-linecap="round"` |
| Heroicons       | `heroicons` in class or path |
| Font Awesome    | `fa-*` class names |
| Material Icons  | `material-icons` class |
| Phosphor        | `ph-*` class names |
| Feather         | `feather-*` class names |
| Custom SVGs     | Inline `<svg>` without library attribution |

---

## Media Query Breakpoints

Common breakpoint patterns:

| Framework  | SM    | MD    | LG     | XL     | 2XL    |
| ---------- | ----: | ----: | -----: | -----: | -----: |
| Tailwind   | 640px | 768px | 1024px | 1280px | 1536px |
| Bootstrap  | 576px | 768px | 992px  | 1200px | 1400px |
| Custom     | varies | varies | varies | varies | varies |

Extract actual breakpoints from `@media` queries in the CSS.

---

## Animation Detection

### CSS Transitions

Look for `transition` properties:

```css
transition: all 0.3s ease;
transition: transform 0.2s, box-shadow 0.2s;
```

### CSS Animations

Look for `@keyframes` declarations and `animation` properties.

### JavaScript Animations

- GSAP: `gsap.to(...)`, `ScrollTrigger`
- Framer Motion: `motion.div`, `animate`
- AOS: `data-aos="fade-up"` attributes
- Intersection Observer: scroll-triggered class additions

---

## Scroll Behavior

Check for:

- `scroll-behavior: smooth` on `html`
- Sticky header: `position: sticky` or `position: fixed` on header
- Scroll-triggered animations
- Parallax effects
- Intersection Observer usage
