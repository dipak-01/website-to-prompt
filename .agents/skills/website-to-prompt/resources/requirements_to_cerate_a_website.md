# FRONTEND WEBSITE SPECIFICATION

---

# 1. PROJECT IDENTITY

## 1.1 Project Name

- Name:
- Short name:
- Internal name:
- Version:

## 1.2 Website Type

Examples:

- SaaS
- Portfolio
- E-commerce
- Dashboard
- Landing page
- Documentation
- Blog
- Marketplace
- Social platform
- Web application
- Corporate website

- Type:
- Subtype:

## 1.3 Primary Objective

Describe exactly what the website is supposed to accomplish.

## 1.4 Secondary Objectives

1.
2.
3.

## 1.5 Target Users

### Primary User

- Who:
- Technical level:
- Age range:
- Device preference:
- Main goal:

### Secondary User

- Who:
- Goal:

## 1.6 Design Personality

Select or describe:

- Minimal
- Premium
- Corporate
- Playful
- Editorial
- Futuristic
- Technical
- Friendly
- Luxury
- Brutalist
- Glassmorphism
- Neumorphism
- Material
- Flat
- Other:

## 1.7 Visual Keywords

Example:

```text
minimal
premium
clean
high-contrast
editorial
spacious
professional
```

## 1.8 Things The Design Must NOT Feel Like

Example:

```text
Do not look:
- childish
- overly colorful
- generic SaaS
- cluttered
- overly animated
```

---

# 2. TECHNOLOGY REQUIREMENTS

## 2.1 Framework

- Framework:
- Version:

Example:

```text
Next.js 16
```

## 2.2 Language

- JavaScript / TypeScript
- Version:

## 2.3 Styling

- Tailwind / CSS Modules / SCSS / styled-components / other:
- Version:

## 2.4 Component Library

- Library:
- Version:
- Components allowed:
- Components prohibited:

## 2.5 Icons

- Library:
- Version:
- Custom icons:
- Stroke width:
- Default size:

## 2.6 Animation Library

- Library:
- Version:
- Allowed:
- Prohibited:

## 2.7 Package Manager

- npm / pnpm / yarn / bun:
- Version:

## 2.8 Browser Support

### Desktop

- Chrome:
- Firefox:
- Safari:
- Edge:

### Mobile

- iOS Safari:
- Android Chrome:
- Samsung Internet:

## 2.9 JavaScript Requirements

- TypeScript strict mode:
- ESLint:
- Prettier:
- Formatting rules:
- Naming conventions:

---

# 3. ROUTES / SITE MAP

Provide the complete frontend route structure.

```text
/
├── /about
├── /services
├── /pricing
├── /blog
├── /blog/[slug]
├── /contact
├── /login
├── /signup
├── /dashboard
├── /settings
└── /404
```

For every route:

## Route

- Path:
- Name:
- Purpose:
- Public/private:
- Layout:
- Parent route:
- Breadcrumb:
- Page title:
- Canonical URL:

---

# 4. PAGE INVENTORY

Create a specification for EVERY page.

For each page:

## PAGE: [PAGE NAME]

### URL

```text
/
```

### Purpose

...

### Target User

...

### Primary User Action

...

### Secondary User Actions

...

### Page Priority

- Critical / High / Medium / Low

### Page Layout

- Full width / centered / split / sidebar / dashboard / etc.

### Required Sections

1.
2.
3.
4.

### Optional Sections

1.
2.

### Sections Not Allowed

1.
2.

---

# 5. PAGE-BY-PAGE DESIGN

For every page, specify every section.

# PAGE: HOME

## Section 1 — Header

### Position

- Top:
- Left:
- Right:
- Width:
- Height:
- Sticky:
- Fixed:
- Z-index:

### Content

#### Logo

- Asset:
- Width:
- Height:
- Link:
- Mobile size:
- Desktop size:

#### Navigation

1. Label:
   - URL:
   - Active state:
   - Dropdown:
   - Icon:

2. Label:
   - URL:

### CTA

- Text:
- URL:
- Variant:
- Size:

### Desktop Behavior

...

### Tablet Behavior

...

### Mobile Behavior

...

---

## Section 2 — Hero

### Exact Content

#### Eyebrow

```text
EXACT TEXT
```

#### Heading

```text
EXACT TEXT
```

#### Description

```text
EXACT TEXT
```

#### Primary CTA

```text
EXACT TEXT
```

- URL:
- Variant:
- Icon:

#### Secondary CTA

```text
EXACT TEXT
```

### Layout

- Width:
- Height:
- Max width:
- Alignment:
- Vertical alignment:
- Horizontal alignment:

### Background

- Color:
- Gradient:
- Image:
- Video:
- Pattern:
- Blur:
- Overlay:

### Hero Image

- Asset:
- Position:
- Width:
- Height:
- Aspect ratio:
- Object fit:
- Object position:

### Typography

- Eyebrow:
- Heading:
- Description:
- CTA:

### Desktop

...

### Tablet

...

### Mobile

...

### Animation

- Entrance:
- Delay:
- Duration:
- Easing:
- Scroll behavior:

---

# 6. COMPONENT INVENTORY

List EVERY reusable component.

```text
components/
├── Header
├── Footer
├── Button
├── Card
├── Modal
├── Input
├── Select
├── Checkbox
├── Radio
├── Tabs
├── Accordion
├── Tooltip
├── Toast
├── Dropdown
├── Breadcrumb
├── Pagination
├── Carousel
├── Search
├── Filter
├── Badge
├── Avatar
├── Skeleton
└── ...
```

For every component:

## Component: Button

### Purpose

...

### Variants

- Primary
- Secondary
- Tertiary
- Ghost
- Link
- Danger

### Sizes

- XS
- SM
- MD
- LG
- XL

### Dimensions

| Size | Height | Padding | Font |
| ---- | -----: | ------: | ---: |
| XS   |        |         |      |
| SM   |        |         |      |
| MD   |        |         |      |
| LG   |        |         |      |
| XL   |        |         |      |

### States

- Default
- Hover
- Focus
- Active
- Disabled
- Loading
- Success
- Error

### Icons

- Left:
- Right:
- Icon-only:

### Behavior

...

### Keyboard Behavior

...

### Mobile Behavior

...

---

# 7. DESIGN TOKENS

Everything that can be standardized should be specified here.

# 7.1 Colors

## Brand

- Primary:
- Secondary:
- Accent:

## Background

- Page:
- Surface:
- Elevated:
- Overlay:

## Text

- Primary:
- Secondary:
- Muted:
- Disabled:
- Inverse:

## Border

- Default:
- Strong:
- Subtle:

## Semantic

### Success

- Background:
- Text:
- Border:
- Icon:

### Warning

- Background:
- Text:
- Border:
- Icon:

### Error

- Background:
- Text:
- Border:
- Icon:

### Information

- Background:
- Text:
- Border:
- Icon:

---

# 7.2 Typography

## Font Families

### Primary

- Family:
- Source:
- Fallback:

### Secondary

- Family:
- Source:
- Fallback:

### Monospace

- Family:

## Font Weights

- 100:
- 200:
- 300:
- 400:
- 500:
- 600:
- 700:
- 800:
- 900:

## Font Sizes

| Token      | Desktop | Tablet | Mobile | Line Height |
| ---------- | ------: | -----: | -----: | ----------: |
| Display XL |         |        |        |             |
| Display L  |         |        |        |             |
| H1         |         |        |        |             |
| H2         |         |        |        |             |
| H3         |         |        |        |             |
| H4         |         |        |        |             |
| Body L     |         |        |        |             |
| Body M     |         |        |        |             |
| Body S     |         |        |        |             |
| Caption    |         |        |        |             |

## Letter Spacing

...

## Text Transform

...

---

# 7.3 Spacing

Define the exact spacing system.

```text
0
2px
4px
6px
8px
12px
16px
20px
24px
32px
40px
48px
64px
80px
96px
128px
160px
```

---

# 7.4 Border Radius

- None:
- XS:
- SM:
- MD:
- LG:
- XL:
- Full:

---

# 7.5 Shadows

## Shadow XS

...

## Shadow SM

...

## Shadow MD

...

## Shadow LG

...

## Shadow XL

...

---

# 7.6 Borders

- Thin:
- Medium:
- Thick:
- Default color:
- Strong color:
- Subtle color:

---

# 7.7 Opacity

- Disabled:
- Overlay:
- Muted:
- Hover:
- Decorative:

---

# 8. GRID SYSTEM

## Container

- Max width:
- Desktop:
- Tablet:
- Mobile:

## Columns

### Desktop

- Columns:
- Gutter:
- Margin:

### Tablet

- Columns:
- Gutter:
- Margin:

### Mobile

- Columns:
- Gutter:
- Margin:

## Section Widths

- Full:
- Wide:
- Standard:
- Narrow:
- Text:

---

# 9. BREAKPOINTS

Specify exact breakpoints.

```text
xs:
sm:
md:
lg:
xl:
2xl:
```

For every breakpoint specify:

- Container width
- Grid columns
- Typography changes
- Navigation behavior
- Spacing
- Component changes
- Image behavior

---

# 10. RESPONSIVE DESIGN

For EVERY section and component specify:

## Desktop

...

## Laptop

...

## Tablet

...

## Mobile

...

## Small Mobile

...

## Landscape Mobile

...

## Large Desktop

...

Specify exactly:

- Width
- Height
- Padding
- Margin
- Position
- Alignment
- Order
- Visibility
- Font size
- Image size
- Grid columns
- Flex direction
- Gap

---

# 11. HEADER / NAVIGATION

## Desktop Header

- Height:
- Width:
- Position:
- Background:
- Border:
- Shadow:
- Blur:
- Z-index:

## Navigation

- Items:
- Spacing:
- Active indicator:
- Hover:
- Dropdown:

## Dropdown

- Width:
- Padding:
- Shadow:
- Radius:
- Animation:
- Delay:
- Close behavior:

## Mobile Header

- Height:
- Logo:
- Menu button:
- CTA:
- Background:

## Mobile Navigation Drawer

- Width:
- Position:
- Animation:
- Overlay:
- Scroll:
- Close button:

---

# 12. FOOTER

## Layout

- Full width:
- Container:
- Columns:

## Column 1

...

## Column 2

...

## Social Links

- Platform:
- URL:
- Icon:

## Legal

- Privacy:
- Terms:
- Cookies:

## Bottom Bar

- Copyright:
- Alignment:
- Responsive behavior:

---

# 13. CONTENT ARCHITECTURE & STRUCTURAL SLOTS

Define the structural content slots, typographic roles, character budgets, and hierarchy for each section. This allows this design specification to be used as a prompt to build ANY website (e.g. SaaS, FinTech, DevTools, AI tool, E-Commerce, Portfolio) using this exact visual design.

## Home Page Architecture

### Hero Section Slots

- `[Eyebrow Badge]`: Category/Announcement tag. Length: 10–30 chars. Style: Uppercase/Pill badge with subtle border.
- `[Hero Heading]`: Primary value proposition. Length: 40–80 chars. Multi-line balanced headline with gradient text accent.
- `[Hero Description / Subtitle]`: Core explanation. Length: 80–180 chars. 2–3 lines, secondary text color, max-width ~60ch.
- `[Primary CTA]`: Main conversion action. Length: 2–3 words (e.g., "Start now", "Get started", "Explore demo").
- `[Secondary CTA]`: Supporting exploratory action. Length: 2–4 words (e.g., "Contact sales", "View documentation").
- `[Hero Visual Slot]`: Interactive card mockup, 3D/Isometric illustration, code preview window, or video showcase.

### Social Proof / Logos Slot

- `[Social Proof Eyebrow]`: Optional trust statement (e.g. "Trusted by leading teams worldwide"). Length: 20–50 chars.
- `[Logo Ticker]`: 5–8 company/partner monochrome/muted logos with infinite horizontal marquee scroll.

### Feature Bento Grid Slots

- `[Section Eyebrow & Title]`: Section headline + subheadline.
- `[Feature Card - Primary]`: Spans 2 columns, contains title, description, and interactive preview widget.
- `[Feature Card - Secondary]`: Spans 1 column, contains icon/badge, title, short description, and subtle hover effect.

### Content Design Rules

```text
1. Adapt content to the target domain while strictly preserving the typographic scale and hierarchy.
2. Adhere to character limits to prevent layout breaking or unbalanced line wrapping.
3. Preserve button action semantics (Primary vs Secondary vs Ghost).
4. Maintain tone and scannability: bold headings, concise supporting copy.
```

---

# 14. ASSETS

Provide an exhaustive asset manifest.

| Asset         | File | Type | Dimensions | Page | Section | Desktop | Mobile | Alt |
| ------------- | ---- | ---- | ---------- | ---- | ------- | ------- | ------ | --- |
| Logo          |      | SVG  |            |      |         |         |        |     |
| Hero          |      | WEBP |            |      |         |         |        |     |
| Product image |      | JPG  |            |      |         |         |        |     |

For every image specify:

- Source file
- Width
- Height
- Aspect ratio
- Crop
- Object fit
- Object position
- Border radius
- Loading behavior
- Alt text
- Caption
- Mobile version

---

# 15. ICON SPECIFICATION

## Icon Library

...

## Global Icon Rules

- Default size:
- Stroke:
- Alignment:
- Color:
- Optical adjustment:

## Icon Mapping

| Meaning     | Icon |
| ----------- | ---- |
| Search      |      |
| Menu        |      |
| Close       |      |
| Arrow right |      |
| Arrow down  |      |
| Delete      |      |
| Edit        |      |
| Success     |      |
| Error       |      |

---

# 16. INTERACTIONS

Every interactive element must be documented.

## Button

### Click

...

### Hover

...

### Focus

...

### Active

...

### Disabled

...

## Card

### Hover

...

### Click

...

## Navigation

### Hover

...

### Click

...

### Scroll

...

---

# 17. ANIMATIONS

For every animation:

## Animation Name

- Element:
- Trigger:
- Initial state:
- Final state:
- Duration:
- Delay:
- Easing:
- Direction:
- Repeat:
- Mobile:
- Reduced motion:

Example:

```text
Hero heading
Trigger: page load
Opacity: 0 → 1
Y: 20px → 0
Duration: 500ms
Delay: 100ms
Easing: ease-out
```

---

# 18. SCROLL BEHAVIOR

## Page Scroll

- Smooth scrolling:
- Scroll restoration:

## Header

- Initial state:
- After scrolling:
- Scroll threshold:
- Animation:

## Section Reveal

- Trigger:
- Threshold:
- Animation:

## Back To Top

- Show after:
- Position:
- Animation:
- Mobile:

---

# 19. FORMS

For every form:

## Form Name

### Field: Name

- Type:
- Label:
- Placeholder:
- Required:
- Min:
- Max:
- Pattern:
- Default:
- Autocomplete:
- Validation:

### States

- Empty
- Focus
- Filled
- Invalid
- Valid
- Disabled
- Read-only

### Error Messages

Exact text:

```text
...
```

### Submit

- Button:
- Loading:
- Success:
- Error:

---

# 20. MODALS / DIALOGS

For every modal:

- Trigger:
- Width:
- Max width:
- Height:
- Position:
- Overlay:
- Radius:
- Padding:
- Animation:
- Close button:
- Escape behavior:
- Click outside:
- Scroll behavior:
- Mobile behavior:

---

# 21. DRAWERS / SIDE PANELS

- Width:
- Position:
- Overlay:
- Animation:
- Close behavior:
- Mobile:
- Desktop:

---

# 22. TABS

- Tab height:
- Typography:
- Active state:
- Hover:
- Focus:
- Indicator:
- Overflow:
- Mobile behavior:
- Keyboard navigation:

---

# 23. ACCORDIONS

- Header:
- Icon:
- Animation:
- Open:
- Closed:
- Multiple open:
- Keyboard behavior:
- Mobile:

---

# 24. CAROUSELS

- Number of visible slides:
- Gap:
- Autoplay:
- Duration:
- Pause on hover:
- Controls:
- Dots:
- Keyboard:
- Swipe:
- Infinite:
- Mobile:
- Tablet:
- Desktop:

---

# 25. TABLES

- Header:
- Row:
- Hover:
- Selected:
- Borders:
- Sorting:
- Filtering:
- Pagination:
- Empty:
- Loading:
- Mobile transformation:

---

# 26. TOOLTIPS

- Trigger:
- Position:
- Delay:
- Duration:
- Max width:
- Arrow:
- Keyboard:
- Mobile behavior:

---

# 27. TOASTS / NOTIFICATIONS

## Success

- Icon:
- Text:
- Duration:
- Position:

## Error

...

## Warning

...

## Info

...

---

# 28. LOADING STATES

Every dynamic component must have a loading state.

## Page Loading

...

## Card Loading

...

## Image Loading

...

## Button Loading

...

## Form Loading

...

## Skeleton

- Shape:
- Animation:
- Duration:

---

# 29. EMPTY STATES

For every list/data component:

- Empty illustration:
- Heading:
- Description:
- CTA:
- Layout:

Example:

```text
No projects yet.
Create your first project to get started.
[Create project]
```

---

# 30. ERROR STATES

Specify:

- Page error
- Component error
- API error
- Image error
- Form error
- Network error
- 404
- 403
- 500

For each:

- Exact message:
- Illustration:
- CTA:
- Retry:
- Logging behavior:

---

# 31. ACCESSIBILITY

## Standard

- WCAG version:
- Level:

## Keyboard

Specify keyboard behavior for:

- Navigation
- Buttons
- Dropdowns
- Modals
- Tabs
- Accordions
- Forms
- Carousels

## Focus

- Focus style:
- Focus width:
- Focus color:
- Focus offset:

## Screen Readers

- ARIA labels:
- Live regions:
- Hidden content:
- Announcements:

## Images

- Required alt text:
- Decorative images:

## Color

- Minimum contrast:

## Motion

- Reduced motion behavior:

## Zoom

Website must support:

- 100%
- 125%
- 150%
- 200%

---

# 32. SEO — FRONTEND

## Global

- Title:
- Description:
- Favicon:
- Theme color:
- Canonical:
- Robots:

## Per Page

- Title:
- Meta description:
- H1:
- Canonical:
- OpenGraph:
- Twitter/X card:

## Structured Data

Specify frontend-rendered schemas:

- Organization
- WebSite
- BreadcrumbList
- Article
- Product
- FAQPage
- etc.

---

# 33. URL BEHAVIOR

Specify:

- Internal links
- External links
- New tab behavior
- Anchor links
- Query parameters
- Hash navigation
- Redirects
- Trailing slash behavior
- 404 behavior

---

# 34. SEARCH UI

## Search Input

- Width:
- Height:
- Placeholder:
- Icon:
- Shortcut:
- Clear button:

## Results

- Layout:
- Number:
- Ranking:
- Highlighting:
- Empty state:
- Loading:
- Error:

## Filters

- Type:
- UI:
- Reset:
- Apply:

---

# 35. FILTERS / SORTING

For each filter:

- Name:
- Type:
- Options:
- Default:
- Multi-select:
- Clear:
- Mobile UI:

For sorting:

- Options:
- Default:
- Direction:
- UI:

---

# 36. PAGINATION

- Type:
- Page size:
- Maximum visible pages:
- Previous:
- Next:
- First:
- Last:
- Mobile:
- Disabled states:

---

# 37. AUTHENTICATED UI

Frontend behavior only.

## Logged Out

...

## Logged In

...

## User Roles

### User

...

### Admin

...

### Guest

...

## Protected UI

...

---

# 38. DASHBOARD UI

If applicable:

## Layout

- Sidebar:
- Header:
- Content:
- Breadcrumb:

## Sidebar

- Width:
- Items:
- Active state:
- Collapse:
- Mobile:

## Dashboard Cards

...

## Charts

For every chart:

- Type:
- Dimensions:
- Data:
- Axis:
- Labels:
- Tooltip:
- Legend:
- Empty:
- Loading:
- Mobile:

---

# 39. DATA DISPLAY

For every data-driven component specify:

- Data fields:
- Display order:
- Formatting:
- Date format:
- Number format:
- Currency format:
- Null value:
- Truncation:
- Maximum length:
- Sorting:
- Filtering:

---

# 40. DATE / TIME DISPLAY

- Locale:
- Timezone:
- Date format:
- Time format:
- Relative dates:
- Calendar start day:
- 12/24 hour:

---

# 41. NUMBER / CURRENCY DISPLAY

- Currency:
- Symbol:
- Decimal places:
- Thousands separator:
- Decimal separator:
- Negative numbers:
- Percentages:

---

# 42. DARK MODE

## Supported?

- Yes / No

If yes:

### Light

- Background:
- Surface:
- Text:
- Border:
- Accent:

### Dark

- Background:
- Surface:
- Text:
- Border:
- Accent:

### Switching

- System:
- Manual:
- Persistence:
- Animation:

---

# 43. PRINT STYLES

If applicable:

- Printable pages:
- Hidden elements:
- Layout:
- Colors:
- Page breaks:

---

# 44. MOBILE-SPECIFIC UX

Specify exactly:

- Bottom navigation:
- Sticky CTA:
- Floating buttons:
- Swipe interactions:
- Mobile menus:
- Mobile forms:
- Mobile tables:
- Mobile cards:
- Mobile modals:
- Touch targets:
- Safe-area handling:

---

# 45. DESKTOP-SPECIFIC UX

Specify:

- Hover interactions:
- Tooltips:
- Sidebar:
- Multi-column layouts:
- Keyboard shortcuts:
- Wide-screen behavior:

---

# 46. TOUCH BEHAVIOR

- Minimum touch target:
- Swipe:
- Drag:
- Long press:
- Hover fallback:
- Gesture conflicts:

---

# 47. CURSOR BEHAVIOR

For relevant elements:

- Default:
- Pointer:
- Grab:
- Grabbing:
- Not allowed:
- Custom cursor:

---

# 48. Z-INDEX SYSTEM

Define the complete stacking system.

```text
Base:
Content:
Sticky:
Header:
Dropdown:
Popover:
Tooltip:
Modal:
Modal overlay:
Toast:
```

---

# 49. OVERFLOW RULES

For every major container:

- Horizontal overflow:
- Vertical overflow:
- Text wrapping:
- Ellipsis:
- Scrollbar:
- Hidden content:

---

# 50. TEXT RULES

Specify:

- Maximum line length:
- Heading wrapping:
- Paragraph width:
- Ellipsis:
- Line clamp:
- Hyphenation:
- Word breaking:
- Long URLs:
- Long usernames:

---

# 51. IMAGE RULES

For every image:

- Aspect ratio:
- Object fit:
- Object position:
- Crop:
- Border radius:
- Loading:
- Placeholder:
- Broken image:
- Blur-up:
- Responsive source:

---

# 52. VIDEO RULES

- Autoplay:
- Muted:
- Loop:
- Controls:
- Poster:
- Mobile:
- Reduced motion:
- Connection handling:

---

# 53. MICRO-INTERACTIONS

Specify small UI behaviors:

- Button press:
- Checkbox:
- Toggle:
- Radio:
- Input focus:
- Card hover:
- Link hover:
- Copy button:
- Like button:
- Bookmark:
- Favorite:
- Delete:
- Undo:

---

# 54. CLIPBOARD BEHAVIOR

For copy buttons:

- Trigger:
- Copied state:
- Duration:
- Tooltip:
- Error:
- Mobile:

---

# 55. DRAG & DROP

If applicable:

- Draggable items:
- Drop zones:
- Placeholder:
- Drag preview:
- Invalid drop:
- Mobile behavior:
- Keyboard alternative:

---

# 56. FILE UPLOAD UI

Frontend only:

- Accepted formats:
- Maximum file size:
- Multiple files:
- Preview:
- Progress:
- Cancel:
- Remove:
- Error:
- Drag/drop:
- Mobile:

---

# 57. PERFORMANCE REQUIREMENTS

## Targets

- LCP:
- CLS:
- INP:
- TTFB:

## Frontend Rules

- Lazy loading:
- Code splitting:
- Image optimization:
- Font loading:
- Prefetching:
- Preloading:
- Bundle limits:
- Third-party scripts:

---

# 58. FONT LOADING

- Fonts:
- Source:
- Formats:
- Preload:
- Fallback:
- Font-display:
- Variable fonts:

---

# 59. RESPONSIVE IMAGES

Specify:

```text
Mobile image:
Tablet image:
Desktop image:
Large desktop image:
```

Specify srcset/sizes requirements if applicable.

---

# 60. PWA REQUIREMENTS

If applicable:

- Manifest:
- App name:
- Icons:
- Splash screen:
- Install behavior:
- Offline UI:
- Theme:
- Status bar:

---

# 61. BROWSER STATES

Specify behavior for:

- Offline
- Slow connection
- JavaScript disabled
- Cookies disabled
- Local storage unavailable
- Unsupported browser
- Very old browser

---

# 62. LOCAL STORAGE / CLIENT STATE

Specify frontend persistence:

- Theme:
- Language:
- Filters:
- Form drafts:
- Sidebar state:
- Cookie consent:
- Recently viewed:

For each:

- Key:
- Data:
- Expiration:
- Reset behavior:

---

# 63. FRONTEND STATE MANAGEMENT

If applicable:

- Library:
- Global state:
- Local state:
- Server state:
- URL state:

Specify every global state:

```text
authState
themeState
cartState
notificationState
...
```

---

# 64. URL STATE

Specify which UI states belong in the URL.

Examples:

```text
?page=2
?search=phone
?sort=price
?filter=available
?tab=reviews
```

---

# 65. ANALYTICS UI EVENTS

Frontend event specification:

| Event      | Trigger       | Data        |
| ---------- | ------------- | ----------- |
| CTA click  | Button click  | button name |
| Search     | Search submit | query       |
| Tab change | Tab click     | tab         |
| Filter     | Filter change | filter      |

---

# 66. THIRD-PARTY FRONTEND COMPONENTS

For every third-party integration:

- Name:
- Purpose:
- UI:
- Loading state:
- Error state:
- Mobile:
- Fallback:
- Accessibility:

---

# 67. LEGAL UI

Frontend presentation of:

- Cookie banner
- Cookie preferences
- Privacy links
- Terms links
- Consent UI
- Age confirmation if applicable

Specify:

- Position:
- Appearance:
- Buttons:
- Behavior:
- Persistence:

---

# 68. COOKIE BANNER

## Initial

...

## Accepted

...

## Rejected

...

## Preferences

...

## Mobile

...

---

# 69. 404 PAGE

## Heading

```text
...
```

## Description

```text
...
```

## CTA

```text
...
```

## Illustration

...

## Layout

...

---

# 70. GLOBAL ERROR PAGE

Specify:

- Heading
- Description
- Illustration
- Retry
- Home button
- Support link

---

# 71. FAVICON / APP ICON

- favicon:
- apple-touch-icon:
- Android icon:
- mask icon:
- theme color:

---

# 72. SOCIAL SHARING

For every page:

- OG title:
- OG description:
- OG image:
- OG type:
- Twitter card:
- Twitter image:

---

# 73. COMPONENT API

For reusable components, define expected props.

Example:

```ts
ButtonProps {
  variant
  size
  children
  icon
  iconPosition
  disabled
  loading
  href
  onClick
}
```

Repeat for every reusable component.

---

# 74. COMPONENT COMPOSITION

Specify which components can contain which components.

Example:

```text
Modal
 ├── ModalHeader
 ├── ModalBody
 └── ModalFooter
```

---

# 75. COMPONENT REUSE RULES

- Do not duplicate components unnecessarily.
- Components with identical behavior should be shared.
- Page-specific components should remain page-specific.
- Specify exceptions:

...

---

# 76. FOLDER STRUCTURE

Specify the desired frontend architecture.

```text
src/
├── app/
├── components/
├── components/ui/
├── components/layout/
├── components/features/
├── hooks/
├── lib/
├── utils/
├── styles/
├── assets/
├── types/
└── ...
```

---

# 77. NAMING CONVENTIONS

## Components

...

## Files

...

## CSS classes

...

## Variables

...

## Functions

...

---

# 78. CODE QUALITY RULES

- No unnecessary duplication
- No unused code
- No dead components
- No console errors
- No console warnings
- No hardcoded repeated values
- Use design tokens
- Use semantic HTML
- Use reusable components
- Use TypeScript types
- etc.

---

# 79. SECURITY-RELATED FRONTEND RULES

Even though backend security is out of scope:

- Never expose secrets
- Never place private API keys in frontend code
- Sanitize user-generated HTML
- Avoid unsafe HTML rendering
- Handle external links safely
- Validate frontend input
- etc.

---

# 80. MOCK DATA

If backend is unavailable, provide exact frontend mock data.

```json
{
  "id": "1",
  "title": "Example",
  "description": "Example description"
}
```

Specify:

- Number of records:
- Longest title:
- Empty dataset:
- Missing fields:
- Null values:

---

# 81. EDGE CASES

Explicitly specify behavior for:

- Empty content
- Extremely long content
- Missing content
- Missing images
- Broken images
- Slow images
- API unavailable
- Loading forever
- Duplicate clicks
- Double submissions
- Long usernames
- Long email addresses
- Long URLs
- Very small screens
- Very large screens
- 200% zoom
- Keyboard-only navigation
- Screen readers
- Reduced motion
- High contrast
- Dark mode
- Landscape
- Portrait
- Offline
- Slow network
- Browser back button
- Browser forward button
- Refresh
- Deep links
- Expired sessions

---

# 82. EXACT UI STATES

Every interactive component should define:

```text
Default
Hover
Focus
Active
Selected
Disabled
Loading
Success
Error
Empty
Expanded
Collapsed
Checked
Unchecked
Dragging
Dragged
Readonly
```

Only include states relevant to that component.

---

# 83. VISUAL REFERENCES

## Reference Website 1

- URL:
- What to copy:
- What not to copy:

## Reference Website 2

...

## Screenshots

For every screenshot:

- Filename:
- Page:
- Viewport width:
- Viewport height:
- Browser:
- Device:
- What it represents:
- Exact details to reproduce:

---

# 84. PIXEL-PERFECT REFERENCES

If exact reproduction is required:

- Reference screenshot:
- Screenshot dimensions:
- Target viewport:
- Pixel accuracy required:
- Allowed deviations:

Specify important measurements:

```text
Header height: 72px
Hero top padding: 96px
Container: 1200px
Card radius: 16px
...
```

---

# 85. VISUAL HIERARCHY

Specify:

## Priority 1

...

## Priority 2

...

## Priority 3

...

Explain what users should notice first, second, third.

---

# 86. DESIGN DO / DON'T

## DO

- ...
- ...
- ...

## DON'T

- ...
- ...
- ...

---

# 87. CONTENT HIERARCHY

For each page:

```text
H1
 ├── H2
 │    ├── H3
 │    └── H3
 └── H2
```

Specify semantic hierarchy.

---

# 88. LINK BEHAVIOR

For every link:

- Internal/external:
- Same tab/new tab:
- Underline:
- Hover:
- Visited:
- External icon:
- Accessibility label:

---

# 89. BUTTON BEHAVIOR

For every button:

- Action:
- Loading:
- Success:
- Failure:
- Disabled:
- Keyboard:
- Mobile:

---

# 90. SCROLLBAR

If customized:

- Width:
- Track:
- Thumb:
- Hover:
- Mobile:

If not customized:

```text
Use native browser scrollbar.
```

---

# 91. SELECTION / HIGHLIGHT

- Text selection color:
- Selection background:
- Disabled selection:

---

# 92. FOCUS / OUTLINE

- Focus ring:
- Width:
- Offset:
- Color:
- Components requiring special focus:

---

# 93. CURSOR

Specify custom cursor behavior where required.

---

# 94. REDUCED MOTION

When `prefers-reduced-motion` is enabled:

- Disable:
- Reduce:
- Keep:

---

# 95. HIGH CONTRAST

Specify behavior if required.

---

# 96. LANGUAGE / LOCALIZATION

Frontend requirements:

- Supported languages:
- Default language:
- Language switcher:
- URL structure:
- RTL:
- Translation keys:
- Text expansion handling:

---

# 97. RTL

If applicable:

- Direction:
- Mirrored layout:
- Icons that should NOT mirror:
- Navigation:
- Forms:
- Tables:

---

# 98. COPY / TEXT LIMITS

Specify maximum expected lengths.

| Element     | Minimum | Typical | Maximum |
| ----------- | ------: | ------: | ------: |
| Heading     |         |         |         |
| Button      |         |         |         |
| Card title  |         |         |         |
| Description |         |         |         |
| Username    |         |         |         |

Specify what happens beyond maximum.

---

# 99. ACCESSIBILITY COPY

Specify exact:

- aria-label
- aria-describedby
- aria-live
- alt text
- title
- screen-reader-only text

---

# 100. FRONTEND ACCEPTANCE CRITERIA

The frontend is complete only when:

## Pages

- [ ] Every required page exists
- [ ] Every route works
- [ ] 404 works
- [ ] Error pages work

## Visual

- [ ] Correct colors
- [ ] Correct fonts
- [ ] Correct typography
- [ ] Correct spacing
- [ ] Correct dimensions
- [ ] Correct images
- [ ] Correct icons
- [ ] Correct borders
- [ ] Correct shadows
- [ ] Correct radius

## Responsive

- [ ] Mobile
- [ ] Tablet
- [ ] Laptop
- [ ] Desktop
- [ ] Large desktop
- [ ] Landscape
- [ ] Small screens
- [ ] 200% zoom

## Interaction

- [ ] Buttons
- [ ] Links
- [ ] Navigation
- [ ] Dropdowns
- [ ] Modals
- [ ] Forms
- [ ] Tabs
- [ ] Accordions
- [ ] Carousels
- [ ] Search
- [ ] Filters
- [ ] Pagination

## States

- [ ] Loading
- [ ] Empty
- [ ] Error
- [ ] Disabled
- [ ] Success
- [ ] Hover
- [ ] Focus
- [ ] Active
- [ ] Selected

## Accessibility

- [ ] Keyboard navigation
- [ ] Screen reader
- [ ] Focus indicators
- [ ] Contrast
- [ ] Alt text
- [ ] Semantic HTML
- [ ] Reduced motion

## Quality

- [ ] No console errors
- [ ] No console warnings
- [ ] No broken links
- [ ] No broken images
- [ ] No placeholder content
- [ ] No TODOs
- [ ] No invented content
- [ ] No unnecessary duplicated components

---

# 101. VISUAL QA CHECKLIST

Compare implementation against the provided reference.

Check:

- [ ] Header
- [ ] Navigation
- [ ] Logo
- [ ] Hero
- [ ] Typography
- [ ] Spacing
- [ ] Images
- [ ] Cards
- [ ] Buttons
- [ ] Forms
- [ ] Footer
- [ ] Mobile layout
- [ ] Tablet layout
- [ ] Desktop layout
- [ ] Animations
- [ ] Hover states
- [ ] Focus states
- [ ] Empty states
- [ ] Loading states
- [ ] Error states

---

# 102. FINAL RULES

1. Treat this document as the frontend source of truth.
2. Do not invent missing copy.
3. Do not invent missing assets.
4. Do not silently change specified dimensions.
5. Do not silently change colors.
6. Do not silently change typography.
7. Do not remove specified interactions.
8. Do not add unnecessary interactions.
9. Do not create inconsistent components.
10. Reuse specified design tokens.
11. Preserve responsive behavior.
12. Implement all specified states.
13. Implement accessibility requirements.
14. Implement all specified animations.
15. Implement all specified error and empty states.
16. Do not leave placeholder content in the final implementation.
17. Do not leave TODO comments for specified functionality.
18. If a requirement conflicts with another requirement, identify the conflict before implementation.
19. If a visual reference conflicts with written measurements, follow the explicitly designated source of truth below.
20. Before declaring the frontend complete, run the entire acceptance checklist.

---

# 103. SOURCE-OF-TRUTH PRIORITY

If information conflicts, use this priority:

1. Explicit "NON-NEGOTIABLE" requirements
2. Exact measurements/tokens & Design System rules
3. Content Architecture & Structural Slots
4. Component specifications
5. Page layout patterns
6. Responsive specifications
7. Screenshots/reference designs
8. General design guidelines
9. Framework defaults

---

# 104. CHANGE LOG

## Version 1.0

- Initial specification

## Version 1.1

- Change:

---

# 105. OPEN QUESTIONS

Anything that is intentionally unresolved:

1.
2.
3.

These must be resolved before implementation if they affect the final UI.

---

# 106. FINAL FRONTEND DELIVERY

Expected output:

```text
Complete production-ready frontend.

Requirements:
- All routes implemented
- All components implemented
- All states implemented
- Responsive
- Accessible
- No placeholders
- No TODOs
- No console errors
- No broken assets
- No invented content
- Design tokens followed
- Acceptance checklist completed
```
