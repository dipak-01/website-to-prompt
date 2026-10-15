---
name: website-to-prompt
description: >-
  Use this skill when the user provides a website URL and wants to extract its
  design system and visual architecture into a design specification (design.md).
  The output file serves as a design prompt to recreate ANY website or application
  using that particular design language, aesthetic, component patterns, and styling.
  Activate when the user says things like "analyze this website", "create a
  design spec from this URL", "reverse-engineer this site's design", or
  "generate a design.md for [URL]".
---

# Website-to-Prompt Skill

Convert any live website URL into a comprehensive `design.md` design system and
UI specification file that captures its visual language, component patterns,
and layout architecture.

The output `design.md` serves as a master design prompt: another agent or developer
can use it to build any new website (SaaS, e-commerce, dashboard, portfolio, etc.)
adopting that exact design aesthetic, typography, colors, animations, and feel —
without needing, copying, or mentioning the reference site's specific proprietary content or brand.

> **CRITICAL RULE — ZERO ORIGIN BRANDING & PURE DESIGN ONLY**:
> `design.md` must **NEVER include the name of the website** from which it was extracted anywhere in the markdown file.
> It must NOT include the source URL, company name, proprietary product names, or domain-specific concepts (e.g. cloud VM names, CLI tools, proprietary database names).
> If a developer uses `design.md` to create a completely different website (e.g. an e-commerce store, a health platform, a dashboard), it must NOT leak origin-specific concepts.
> `design.md` must be **ONLY for design**: tokens, typography, visual hierarchy, layout archetypes, component architecture, animations, and reusable structural slots.

## Overview

This skill instructs the agent to:

1. Visit and deeply analyze a target website's visual aesthetic and UI architecture
2. Extract all design tokens, styling rules, component systems, and layout archetypes
3. Produce a structured `design.md` file following the master design prompt template
   in [design_system_template.md](./resources/design_system_template.md)

The output `design.md` is a standalone, domain-agnostic master design prompt wrapped in `<role>` and `<design-system>` tags. It captures
the design DNA, aesthetic philosophy, design tokens, component stylings, texture patterns, animations, and non-generic bold signatures so any website can be
created or redesigned with this exact aesthetic.

---

## Prerequisites

- The target website must be publicly accessible (no login required for the
  pages being analyzed).
- The agent must have browser access (`browser_subagent` tool) to visit and
  interact with the site.
- The agent must have `read_url_content` for fetching raw HTML/CSS.

---

## Execution Steps

### Step 1 — Validate the URL

1. Confirm the user has provided a valid URL (starts with `http://` or
   `https://`).
2. If no URL is provided, ask the user for one.
3. If multiple URLs are provided, ask which one is the primary site to analyze,
   or process them sequentially.

### Step 2 — Initial Reconnaissance

Use `read_url_content` to fetch the homepage HTML. Extract:

- `<title>` tag
- `<meta name="description">` content
- `<meta name="viewport">` content
- `<link rel="icon">` / favicon references
- All `<link rel="stylesheet">` references (external CSS)
- All `<style>` blocks (inline CSS)
- All Google Fonts or other web font `<link>` tags
- OpenGraph and Twitter card meta tags
- `<script>` tags (to identify frameworks — React, Next.js, Vue, etc.)
- Structured data / JSON-LD schemas
- `lang` attribute on `<html>`
- Theme color meta tag

### Step 3 — Visual Analysis with Browser

Use the `browser_subagent` tool to visit the URL at **desktop viewport
(1440×900)** and perform a thorough visual analysis:

#### 3a — Capture Screenshots

Take screenshots at the following viewports and record observations:

| Viewport      | Width  | Height |
| ------------- | -----: | -----: |
| Large Desktop | 1920px | 1080px |
| Desktop       | 1440px |  900px |
| Laptop        | 1280px |  800px |
| Tablet        | 768px  | 1024px |
| Mobile        | 375px  |  812px |
| Small Mobile  | 320px  |  568px |

#### 3b — Extract Design Tokens

For each page, observe and record:

**Colors:**
- Background colors (page, sections, cards, overlays)
- Text colors (headings, body, muted, links, hover states)
- Brand / accent colors
- Border colors
- Button colors (all variants and states)
- Gradient definitions
- Semantic colors (success, warning, error, info)

**Typography:**
- Font families in use (primary, secondary, monospace)
- Font weights used
- Font sizes for every heading level (H1–H6), body text, captions, labels
- Line heights
- Letter spacing
- Text transforms (uppercase, lowercase, capitalize)

**Spacing:**
- Section paddings (top, bottom, left, right)
- Container max-widths
- Card paddings
- Element gaps
- Margin patterns

**Border & Radius:**
- Border widths, styles, colors
- Border radius values for buttons, cards, inputs, images, modals

**Shadows:**
- Box shadows on cards, dropdowns, modals, buttons
- Text shadows if any

**Opacity:**
- Overlay opacities
- Disabled state opacities
- Hover opacities

#### 3c — Analyze Layout & Grid

- Container max-width
- Grid system (CSS Grid vs Flexbox)
- Column counts at each breakpoint
- Gutter/gap sizes
- Section width patterns (full-width, contained, narrow)

#### 3d — Analyze Components

For every reusable component visible on the site, document:

- **Buttons**: all variants, sizes, states (hover, active, disabled, loading),
  border radius, padding, font, icon positions
- **Cards**: layout, padding, shadow, radius, image treatment, hover effects
- **Navigation**: structure, items, active states, dropdown behavior, mobile
  menu type (hamburger, slide-out, full-screen overlay)
- **Header**: height, position (sticky/fixed/static), background, blur,
  border, z-index, scroll behavior
- **Footer**: column layout, content, links, social icons, legal links
- **Forms / Inputs**: height, padding, border, focus ring, error states,
  placeholder style, label position
- **Modals**: width, overlay color, animation, close behavior
- **Tabs**: active indicator style, typography, spacing
- **Accordions**: icon, animation, spacing
- **Badges / Tags**: colors, radius, padding, font size
- **Tooltips**: position, arrow, delay, max-width
- **Toasts / Notifications**: position, colors, icon, animation, duration

#### 3e — Analyze Interactions & Animations

Interact with elements to observe:

- Button hover/click effects
- Link hover styles
- Card hover effects (lift, shadow, scale)
- Navigation dropdown open/close animations
- Mobile menu open/close animation
- Page scroll behavior (smooth scroll, parallax, reveal-on-scroll)
- Header behavior on scroll (shrink, hide, change background)
- Input focus animations
- Page transition animations
- Loading states / skeleton screens
- Micro-interactions (toggles, checkboxes, likes, etc.)

#### 3f — Analyze Content Architecture & Layout Archetypes

Do NOT scrape or transcribe the website's literal proprietary marketing copy or corporate text. Instead, analyze the **content architecture, typographic roles, and structural layout slots** so that ANY website can be created using this design pattern:

- **Hierarchy & Typographic Roles**: Eyebrows (character length, case, badge style), Primary Display Headings (length, multi-line balance, gradient text accents), Subtitles / Value Propositions (max-width, line count, opacity/color), Button labels (action verbs, character counts).
- **Structural Content Slots**: Define sections by their structural roles (e.g., `[Eyebrow Badge]`, `[Hero Headline]`, `[Value Proposition]`, `[Primary CTA]`, `[Secondary Action]`, `[Feature Title]`, `[Feature Description]`, `[Metric Stat + Label]`).
- **Media & Mockup Containers**: Note the archetype of visual assets (e.g. isometric card mockups, glassmorphism preview panels, interactive code playgrounds, animated dashboards, logo ticker ribbons).
- **Navigation Patterns**: Hierarchy of navigation (e.g. Products mega-menu vs Solutions dropdown vs Developers vs Pricing vs Sign In / CTA), without tying to specific external URLs.
- **Footer Structural Matrix**: Column groupings (Product, Resources, Company, Legal), newsletter signup layout, copyright / social links bar.

### Step 4 — Analyze Page Layout Archetypes

Navigate through primary page types (Landing, Pricing, Features/Product, About/Docs). For each:

1. Identify the layout archetype (hero + bento grid + interactive demo + comparison table + CTA strip)
2. Note section transitions, alternating background surfaces (e.g. light -> subtle off-white -> dark contrast section)
3. Extract unique layout components or data display patterns
4. Note recurring visual motifs (e.g., subtle 1px border glows, dot/grid backgrounds, radial mesh gradients)

Build a complete architectural pattern catalog.

### Step 5 — Deep CSS Analysis

Use `read_url_content` to fetch any external CSS files identified in Step 2.
Parse them (or analyze computed styles via browser) to extract precise values:

- CSS custom properties / CSS variables
- Media query breakpoints
- Animation keyframes
- Transition definitions
- Font-face declarations
- Z-index scale

### Step 6 — Compile the design.md

Using the template structure from
[design_system_template.md](./resources/design_system_template.md),
fill in EVERY section with the design architecture extracted in Steps 2–5.

**Critical rules when filling in the template:**

1. **ZERO ORIGIN BRANDING (Strict Requirement):** Do NOT include the name of the website anywhere in `design.md`. Do NOT include the company name, origin URL, brand monogram name, or domain-specific names (e.g. if the site sells cloud VMs, do not name products "Machines" or "Sprites" or mention "flyctl").
2. **Wrap in `<role>` and `<design-system>` Tags:**
   - `<role>`: Contains the expert frontend/design specialist persona that instructs an AI engineer how to systematically integrate this design system into any codebase (tech stack analysis, mental model, focused discovery questions, concise plan, matching existing patterns).
   - `<design-system>`: Contains the complete visual DNA and implementation blueprint.
3. **Name the System by its Aesthetic Archetype:** `# Design Style: [Aesthetic Name]` (e.g., `Editorial Pastel Luminescence`, `Swiss International`, `Retro-Terminal Minimalist`), never the source company/site name.
4. **Articulate Design Philosophy:** State Core Tenets (1–6), The Vibe, and Visual Signatures clearly so the personality of the design is unmistakable.
5. **Extract Exact Design Tokens (The DNA):**
   - Colors: Exact hex codes for Background, Foreground, Muted, Accent, Border, and Surfaces.
   - Typography: Font families, weights, styles (e.g. uppercase), tracking, and extreme contrast scales.
   - Radius & Border: Exact radii (e.g. `0px` or `8px` or `rounded-full`) and border weights (`1px`, `2px`, `4px`).
   - Shadows & Effects: Precise shadow values or explicit flatness rule.
   - Textures & Patterns: CSS definitions for subtle background textures (grids, dots, diagonals, noise) with opacities and application strategies.
6. **Detail Component Stylings:** Buttons, Cards/Containers, Inputs, Navigation/Dropdowns with exact hover, active, and focus transformations.
7. **Define Layout & Non-Genericness:** Document grid laws, asymmetry, separators, and the **Non-Genericness ("The Bold Factor")** rules that prevent generic boilerplate generation.
8. **Capture Motion & Physics:** Animation feel, timing curves, duration, and micro-interactions for links, cards, buttons, and icons.
9. **Define Responsive Strategy:** Mobile (< 768px), Tablet (768px - 1024px), Desktop (1024px+), and key non-negotiable principles.

### Step 7 — Write the Output File

Save the completed specification as `design.md` in the project root (or in the
location specified by the user).

### Step 8 — Summary Report

After creating the file, provide the user with:

1. **Pages analyzed**: list of all URLs visited
2. **Components identified**: count and list
3. **Design tokens extracted**: summary of colors, fonts, spacing
4. **Design Style Codified**: the aesthetic archetype and personality defined
5. **Recommendations**: observations that help when applying this prompt to any new project

---

## Output File Structure

The `design.md` must follow the master design prompt structure defined in
[design_system_template.md](./resources/design_system_template.md):

```markdown
<role>
  Expert frontend & UI/UX engineering integration instructions
</role>

<design-system>
# Design Style: [Aesthetic Archetype Name]

## Design Philosophy
- Core Tenets (1–6)
- The Vibe
- Visual Signatures

## Design Token System (The DNA)
- Colors (Strict Palette: Background, Foreground, Muted, Accent, Border, Surfaces)
- Typography (Font Family, Weights, Style, Tracking, Scale)
- Radius & Border (Exact values & weights)
- Shadows & Effects (Shadows, Glows, Transforms)
- Textures & Patterns (CSS grid, dot matrix, diagonal, noise with opacities)

## Component Stylings
- Buttons (Primary, Secondary, Pills, States)
- Cards / Containers (Structure, Backgrounds, Borders, Padding, Hover)
- Inputs (Border, Focus, States)
- Navigation & Dropdowns (Sticky header, blur, menus, drawers)

## Layout Strategy
- The Grid, Asymmetry, Alignment, Separators

## Non-Genericness (The "Bold" Factor)
- Bold, opinionated creative choices that prevent generic UI generation

## Spacing & Iconography
- Spacing rules, Icon library, stroke width, geometric treatment

## Animation
- Feel, Transitions, Micro-interactions (Nav, Cards, Buttons, Toggles), Hover States

## Responsive Strategy
- Mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (1024px+)
- Key Principles

## Accessibility
- Contrast, Focus, Touch Targets, Motion, Semantics
</design-system>
```

---

## Quality Checklist

Before delivering `design.md`, verify:

- [ ] **WRAPPED IN `<role>` AND `<design-system>` TAGS:** Follows the master prompt architecture from `design_system_template.md`.
- [ ] **ZERO ORIGIN BRANDING:** The name of the source website, its URLs, brand mark names, and proprietary domain names do NOT appear anywhere in `design.md`.
- [ ] **100% DESIGN ONLY:** The document covers purely design tokens, visual hierarchy, layout archetypes, component contracts, and structural slots.
- [ ] **TEXTURES & PATTERNS DOCUMENTED:** Subtle CSS patterns (grids, dots, diagonals, noise) with exact CSS and opacities are defined.
- [ ] **NON-GENERICNESS SECTION POPULATED:** Includes high-opinion, bold visual signatures preventing generic boilerplate UI.
- [ ] All colors are specified as hex, HSL, or RGB — not descriptions.
- [ ] All dimensions use explicit units (px, rem, %, vw/vh).
- [ ] Responsive behavior is specified across mobile, tablet, and desktop.
- [ ] Motion, transitions, and micro-interactions are explicitly defined.
- [ ] The specification can immediately be fed to an AI or developer to build ANY completely different website with this aesthetic without inheriting foreign domain concepts.

---

## Tips for Better Results

1. **Check computed styles**: Use browser dev tools (via subagent) to inspect
   computed CSS values rather than guessing from visual appearance.
2. **Test interactions**: Click buttons, hover over cards, open menus, submit
   forms — document what happens.
3. **Check multiple pages**: Don't just analyze the homepage. The about, pricing,
   and blog pages often reveal additional components and patterns.
4. **Look for CSS variables**: Modern sites often define their design tokens as
   CSS custom properties on `:root`. Extracting these gives you the design
   system in one step.
5. **Identify the tech stack**: Knowing if a site uses React, Next.js, Tailwind,
   etc. informs the Technology Requirements section and helps with reproduction.
