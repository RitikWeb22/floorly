# Floorly Typography System

This document outlines the complete typography architecture, design tokens, type scale rules, licensing, and performance optimizations implemented across the Floorly platform (public marketing pages, app workspace, documents/PDFs, emails, and generated open-graph assets).

---

## 1. Font Families & Licensing

| Family | Role | Weights / Format | Source & License |
| :--- | :--- | :--- | :--- |
| **Clash Grotesk** | Display / Headings (`--font-display`) | 500 (Medium), 600 (Semibold), WOFF2 | Indian Type Foundry / Fontshare ([Fontshare Free License](https://www.fontshare.com/licenses/itf-free-license) for commercial and personal use). Self-hosted under `/public/fonts/clash-grotesk/`. |
| **Geist** | Body & User Interface (`--font-sans`) | Variable 100–900, WOFF2 | Vercel via `@fontsource-variable/geist` ([SIL Open Font License 1.1](https://scripts.sil.org/OFL)). Self-hosted via Vite build bundle. |
| **Geist Mono** | Code & IDs (`--font-mono`) | Variable 100–900, WOFF2 | Vercel via `@fontsource-variable/geist-mono` ([SIL Open Font License 1.1](https://scripts.sil.org/OFL)). Self-hosted via Vite build bundle. |

> **Legacy Font Purge Notice:** `Bricolage Grotesque` and `Instrument Sans` have been completely removed across the entire codebase (CSS variables, Tailwind config, HTML Google Fonts links, PDF generators, email templates, and SVG open graph assets).

---

## 2. Token Definitions

All font families, sizing, line-heights, letter-spacing, and font-feature settings are governed by CSS variables and Tailwind utility classes. No hardcoded font family strings exist within UI components.

### CSS Custom Properties (`index.css`)

```css
:root {
  /* Font Family Stacks */
  --font-display: "Clash Grotesk", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-sans: "Geist Variable", "Geist", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: "Geist Mono Variable", "Geist Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;

  /* Font Feature Settings */
  --font-features-sans: "cv02", "cv03", "cv04", "cv11";
  --font-features-tabular: "tnum" 1, "lnum" 1;
}
```

### Tailwind Configuration (`tailwind.config.js`)

```js
theme: {
  extend: {
    fontFamily: {
      display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      mono: ['var(--font-mono)', 'monospace'],
    },
  },
}
```

---

## 3. Type Scale & Application Mapping

| Element / Context | Font Family | Size (Mobile / Desktop) | Weight | Line Height | Tracking | OpenType Features |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Marketing Hero H1** | `font-display` | `text-4xl` / `text-6xl` (36px / 60px) | `font-semibold` (600) | `leading-[1.08]` | `tracking-tight` | Standard |
| **Section H2** | `font-display` | `text-2xl` / `text-4xl` (24px / 36px) | `font-semibold` (600) | `leading-tight` | `tracking-tight` | Standard |
| **Section H3 / Card Titles** | `font-display` | `text-lg` / `text-xl` (18px / 20px) | `font-semibold` (600) | `leading-snug` | `tracking-tight` | Standard |
| **App Workspace Page Titles** | `font-display` | `text-2xl` / `text-3xl` (24px / 30px) | `font-semibold` (600) | `leading-tight` | `tracking-tight` | Standard |
| **Modal / Drawer Titles** | `font-display` | `text-xl` (20px) | `font-semibold` (600) | `leading-snug` | `tracking-normal` | Standard |
| **Body / Paragraphs** | `font-sans` | `text-sm` / `text-base` (14px / 16px) | `font-normal` (400) | `leading-relaxed` | `tracking-normal` | `cv02`, `cv03`, `cv04`, `cv11` |
| **Buttons & Action Controls** | `font-sans` | `text-sm` (14px) | `font-medium` (500) | `leading-none` | `tracking-normal` | Standard |
| **Table Column Headers** | `font-sans` | `text-xs` (12px) | `font-medium` (500) | `leading-none` | `tracking-wider` | `uppercase` |
| **Currency & KPI Metrics** | `font-display` or `font-sans` | `text-2xl` to `text-4xl` | `font-semibold` (600) | `leading-none` | `tracking-tight` | `tabular-nums lining-nums` |
| **Document / Invoice IDs** | `font-mono` | `text-xs` / `text-sm` (12px / 14px) | `font-medium` (500) | `leading-none` | `tracking-tight` | `tabular-nums` |
| **Badges / Overlines / Chips** | `font-sans` | `text-xs` (11px / 12px) | `font-medium` (500) | `leading-none` | `tracking-wide` | `uppercase` |

### Strict Monospace Usage Rules
- **Monospace is ONLY used for:**
  - Entity identifiers (`INV-2026-001`, `PROP-042`, `REC-108`)
  - Code snippets, API keys, webhook URLs, and raw tokens
  - Git commit hashes and CLI commands
- **Monospace is NEVER used for:**
  - Paragraph body copy
  - Buttons, navigation items, or labels
  - Financial amounts, prices, or currency totals (financial totals use `font-display font-semibold tabular-nums lining-nums`)

---

## 4. Cross-Platform Consistency

### 1. Document Print & In-App Views (`client/src/styles/print.css`, `InvoiceDocument.jsx`, `ProposalDocument.jsx`)
- Uses `--font-display` for document headers ("INVOICE", "PROPOSAL", total due balance).
- Uses `--font-sans` for client names, addresses, descriptions, and terms.
- Uses `--font-mono` exclusively for reference codes (`INV-001`, `PROP-001`).
- Numbers in itemized tables use `tabular-nums` to ensure exact decimal alignment across columns.

### 2. Server-Side PDF Rendering (`server/src/services/pdfService.js`)
- Renders via Chromium Puppeteer using high-legibility system and bundled font declarations:
  - Display / Titles: `'Clash Grotesk', system-ui, sans-serif`
  - Body / Tables: `'Geist', 'Noto Sans', system-ui, sans-serif`
  - Multilingual support retained via Google Noto Sans (Devanagari, Arabic, SC).
  - Numbers in tables use `font-variant-numeric: tabular-nums lining-nums`.

### 3. Transactional Emails (`server/src/services/mailerService.js`)
- Standardized to a bulletproof system font stack with Geist-like fallbacks compatible with Apple Mail, Gmail, and Outlook:
  ```css
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  ```

### 4. Dynamic Open Graph Cards (`client/public/og-image.svg`, `og-image.png`)
- Headings set in `Clash Grotesk`, subheadings in `Geist`.
- Re-rendered at `1200x630` using headless Chrome during production build.

---

## 5. Performance & Font Optimization

### Budget Verification
- **Target Initial Payload:** < 150 KB
- **Actual Initial Payload:**
  - `ClashGrotesk-Medium.woff2`: ~20.0 KB
  - `ClashGrotesk-Semibold.woff2`: ~20.4 KB
  - `Geist (latin woff2 variable)`: ~29.4 KB
  - **Total Initial Marketing Page Font Transfer:** **~69.8 KB** (53% under the 150 KB ceiling)
  - `Geist Mono (latin woff2 variable)` loaded as-needed for code/IDs: ~23.1 KB

### Loading Strategy
1. **Preloading:** Clash Grotesk Medium and Semibold are preloaded in `<head>` via `<link rel="preload" as="font" type="font/woff2" crossorigin>`.
2. **Font-Display Swap:** All `@font-face` rules declare `font-display: swap` to prevent FOIT (Flash of Invisible Text).
3. **Format Selection:** Exclusively modern WOFF2 format for maximum compression and browser support.
4. **Self-Hosting:** Zero external third-party font CDNs or blocking Google Fonts stylesheets.
