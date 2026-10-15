// Website Design Extraction Script
// =================================
// This script extracts design tokens and computed styles from the current page.
// Run this via browser_subagent's JavaScript execution on the target website.
//
// Usage: Execute each section individually in the browser console and record
// the output.

// ============================================================================
// 1. EXTRACT CSS CUSTOM PROPERTIES (Design Tokens)
// ============================================================================

function extractCSSVariables() {
  const root = document.documentElement;
  const styles = getComputedStyle(root);
  const variables = {};

  // Get all stylesheets
  for (const sheet of document.styleSheets) {
    try {
      for (const rule of sheet.cssRules) {
        if (rule.selectorText === ':root' || rule.selectorText === 'html') {
          for (const prop of rule.style) {
            if (prop.startsWith('--')) {
              variables[prop] = styles.getPropertyValue(prop).trim();
            }
          }
        }
      }
    } catch (e) {
      // Cross-origin stylesheet, skip
    }
  }

  return variables;
}

// ============================================================================
// 2. EXTRACT TYPOGRAPHY
// ============================================================================

function extractTypography() {
  const elements = {
    h1: document.querySelector('h1'),
    h2: document.querySelector('h2'),
    h3: document.querySelector('h3'),
    h4: document.querySelector('h4'),
    h5: document.querySelector('h5'),
    h6: document.querySelector('h6'),
    body: document.querySelector('body'),
    p: document.querySelector('p'),
    a: document.querySelector('a'),
    button: document.querySelector('button'),
    input: document.querySelector('input'),
    label: document.querySelector('label'),
    small: document.querySelector('small'),
    span: document.querySelector('span'),
  };

  const typography = {};

  for (const [name, el] of Object.entries(elements)) {
    if (el) {
      const styles = getComputedStyle(el);
      typography[name] = {
        fontFamily: styles.fontFamily,
        fontSize: styles.fontSize,
        fontWeight: styles.fontWeight,
        lineHeight: styles.lineHeight,
        letterSpacing: styles.letterSpacing,
        textTransform: styles.textTransform,
        color: styles.color,
      };
    }
  }

  return typography;
}

// ============================================================================
// 3. EXTRACT COLORS FROM PAGE
// ============================================================================

function extractColors() {
  const allElements = document.querySelectorAll('*');
  const colors = {
    backgrounds: new Set(),
    textColors: new Set(),
    borderColors: new Set(),
  };

  const sampleSize = Math.min(allElements.length, 500);
  for (let i = 0; i < sampleSize; i++) {
    const el = allElements[i];
    const styles = getComputedStyle(el);

    const bg = styles.backgroundColor;
    if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') {
      colors.backgrounds.add(bg);
    }

    const color = styles.color;
    if (color) {
      colors.textColors.add(color);
    }

    const borderColor = styles.borderColor;
    if (borderColor && borderColor !== 'rgb(0, 0, 0)') {
      colors.borderColors.add(borderColor);
    }
  }

  return {
    backgrounds: [...colors.backgrounds],
    textColors: [...colors.textColors],
    borderColors: [...colors.borderColors],
  };
}

// ============================================================================
// 4. EXTRACT SPACING PATTERNS
// ============================================================================

function extractSpacing() {
  const sections = document.querySelectorAll('section, [class*="section"], main > div');
  const spacings = [];

  sections.forEach((section, i) => {
    const styles = getComputedStyle(section);
    spacings.push({
      element: `Section ${i + 1} (${section.className || section.tagName})`,
      paddingTop: styles.paddingTop,
      paddingBottom: styles.paddingBottom,
      paddingLeft: styles.paddingLeft,
      paddingRight: styles.paddingRight,
      marginTop: styles.marginTop,
      marginBottom: styles.marginBottom,
      gap: styles.gap,
    });
  });

  return spacings;
}

// ============================================================================
// 5. EXTRACT CONTAINER / GRID INFO
// ============================================================================

function extractGrid() {
  const containers = document.querySelectorAll(
    '[class*="container"], [class*="wrapper"], [class*="max-w"], main'
  );

  const grids = [];
  containers.forEach((el) => {
    const styles = getComputedStyle(el);
    grids.push({
      element: el.className || el.tagName,
      maxWidth: styles.maxWidth,
      width: styles.width,
      display: styles.display,
      gridTemplateColumns: styles.gridTemplateColumns,
      flexDirection: styles.flexDirection,
      gap: styles.gap,
      padding: `${styles.paddingLeft} / ${styles.paddingRight}`,
    });
  });

  return grids;
}

// ============================================================================
// 6. EXTRACT SHADOWS AND BORDERS
// ============================================================================

function extractShadowsAndBorders() {
  const allElements = document.querySelectorAll('*');
  const shadows = new Set();
  const radiuses = new Set();
  const borders = new Set();

  const sampleSize = Math.min(allElements.length, 300);
  for (let i = 0; i < sampleSize; i++) {
    const styles = getComputedStyle(allElements[i]);

    if (styles.boxShadow && styles.boxShadow !== 'none') {
      shadows.add(styles.boxShadow);
    }
    if (styles.borderRadius && styles.borderRadius !== '0px') {
      radiuses.add(styles.borderRadius);
    }
    if (styles.borderWidth && styles.borderWidth !== '0px') {
      borders.add(`${styles.borderWidth} ${styles.borderStyle} ${styles.borderColor}`);
    }
  }

  return {
    shadows: [...shadows],
    borderRadiuses: [...radiuses],
    borders: [...borders],
  };
}

// ============================================================================
// 7. EXTRACT NAVIGATION STRUCTURE
// ============================================================================

function extractNavigation() {
  const nav = document.querySelector('nav, header nav, [role="navigation"]');
  if (!nav) return { found: false };

  const links = nav.querySelectorAll('a');
  const items = [];

  links.forEach((link) => {
    items.push({
      text: link.textContent.trim(),
      href: link.getAttribute('href'),
      hasDropdown: link.closest('[class*="dropdown"]') !== null ||
                   link.nextElementSibling?.tagName === 'UL',
    });
  });

  return { found: true, items };
}

// ============================================================================
// 8. EXTRACT META / SEO INFO
// ============================================================================

function extractMeta() {
  const getMeta = (name) => {
    const el = document.querySelector(`meta[name="${name}"], meta[property="${name}"]`);
    return el ? el.getAttribute('content') : null;
  };

  return {
    title: document.title,
    description: getMeta('description'),
    viewport: getMeta('viewport'),
    themeColor: getMeta('theme-color'),
    ogTitle: getMeta('og:title'),
    ogDescription: getMeta('og:description'),
    ogImage: getMeta('og:image'),
    ogType: getMeta('og:type'),
    twitterCard: getMeta('twitter:card'),
    twitterTitle: getMeta('twitter:title'),
    twitterDescription: getMeta('twitter:description'),
    twitterImage: getMeta('twitter:image'),
    lang: document.documentElement.lang,
    charset: document.characterSet,
  };
}

// ============================================================================
// 9. EXTRACT FONT LOADING
// ============================================================================

function extractFonts() {
  const fontLinks = document.querySelectorAll('link[href*="fonts"]');
  const fontFaces = [];

  for (const sheet of document.styleSheets) {
    try {
      for (const rule of sheet.cssRules) {
        if (rule instanceof CSSFontFaceRule) {
          fontFaces.push({
            family: rule.style.fontFamily,
            src: rule.style.src,
            weight: rule.style.fontWeight,
            style: rule.style.fontStyle,
            display: rule.style.fontDisplay,
          });
        }
      }
    } catch (e) {
      // Cross-origin
    }
  }

  return {
    externalFontLinks: [...fontLinks].map((l) => l.href),
    fontFaces,
  };
}

// ============================================================================
// 10. EXTRACT ALL LINKS (for sitemap)
// ============================================================================

function extractSitemap() {
  const links = document.querySelectorAll('a[href]');
  const internal = new Set();
  const external = new Set();
  const origin = window.location.origin;

  links.forEach((link) => {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('javascript:')) return;

    try {
      const url = new URL(href, origin);
      if (url.origin === origin) {
        internal.add(url.pathname);
      } else {
        external.add(url.href);
      }
    } catch (e) {
      // Invalid URL
    }
  });

  return {
    internalPaths: [...internal].sort(),
    externalLinks: [...external].sort(),
  };
}

// ============================================================================
// 11. DETECT TECH STACK
// ============================================================================

function detectTechStack() {
  const stack = [];

  // React / Next.js
  if (document.getElementById('__next')) stack.push('Next.js');
  else if (document.getElementById('root') && document.querySelector('[data-reactroot]'))
    stack.push('React');

  // Vue / Nuxt
  if (document.getElementById('__nuxt')) stack.push('Nuxt.js');
  else if (document.getElementById('app') && document.querySelector('[data-v-]'))
    stack.push('Vue.js');

  // Angular
  if (document.querySelector('[ng-version]')) stack.push('Angular');

  // Svelte
  if (document.querySelector('[class*="svelte-"]')) stack.push('Svelte');

  // WordPress
  if (document.querySelector('meta[name="generator"][content*="WordPress"]'))
    stack.push('WordPress');

  // Tailwind
  const allClasses = [...document.querySelectorAll('[class]')]
    .flatMap((el) => [...el.classList])
    .slice(0, 200);
  const tailwindPatterns = ['flex', 'items-center', 'justify-between', 'px-', 'py-', 'text-'];
  if (tailwindPatterns.some((p) => allClasses.some((c) => c.startsWith(p) || c === p)))
    stack.push('Tailwind CSS');

  // Framer Motion
  if (document.querySelector('[data-framer-component-type]')) stack.push('Framer Motion');

  // GSAP
  if (window.gsap) stack.push('GSAP');

  // AOS
  if (document.querySelector('[data-aos]')) stack.push('AOS');

  return stack;
}

// ============================================================================
// RUN ALL EXTRACTIONS
// ============================================================================

function extractAll() {
  return {
    meta: extractMeta(),
    techStack: detectTechStack(),
    cssVariables: extractCSSVariables(),
    typography: extractTypography(),
    colors: extractColors(),
    spacing: extractSpacing(),
    grid: extractGrid(),
    shadowsAndBorders: extractShadowsAndBorders(),
    navigation: extractNavigation(),
    fonts: extractFonts(),
    sitemap: extractSitemap(),
  };
}

// Execute and return
JSON.stringify(extractAll(), null, 2);
