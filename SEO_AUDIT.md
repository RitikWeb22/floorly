# 🔍 Technical SEO, AEO & GEO Comprehensive Audit (Phase 0)

> **Audit Date:** October 12, 2026  
> **Audited URL Target:** `https://floorlystudio.me/` (Transitioning from `floorly-studio.vercel.app` & legacy `floorly.app`)  
> **Brand & Entity:** Floorly — AI-Scoped Proposals with Built-in Price Floors for Freelancers & Independent Studios  
> **Audit Status:** Phase 0 (Read-Only Baseline Completed)

---

## 1. Executive Summary & Crawl Simulation (Googlebot Raw HTML)

When search engine crawlers (Googlebot, Bingbot), AI search bots (`OAI-SearchBot`, `ChatGPT-User`, `PerplexityBot`, `ClaudeBot`), or social preview scrapers fetch the current production build without executing JavaScript, **they receive an empty shell (`<div id="root"></div>`)**.

### Route-by-Route Raw HTML Crawl Matrix

| Route | HTTP Status | Initial HTML Content Present? | Extracted `<title>` in Raw HTML | Extracted Meta Description | Extracted `H1` in Raw HTML | Internal Links in Raw HTML |
| :--- | :---: | :---: | :--- | :--- | :---: | :---: |
| `/` | 200 OK | ❌ **No (Empty Root)** | `Floorly – Never undercharge again` | Generic default (same across all) | ❌ None | ❌ 0 links |
| `/pricing` | 200 OK | ❌ **No (Empty Root)** | `Floorly – Never undercharge again` | Generic default (same across all) | ❌ None | ❌ 0 links |
| `/about` | 200 OK | ❌ **No (Empty Root)** | `Floorly – Never undercharge again` | Generic default (same across all) | ❌ None | ❌ 0 links |
| `/contact` | 200 OK | ❌ **No (Empty Root)** | `Floorly – Never undercharge again` | Generic default (same across all) | ❌ None | ❌ 0 links |
| `/terms` | 200 OK | ❌ **No (Empty Root)** | `Floorly – Never undercharge again` | Generic default (same across all) | ❌ None | ❌ 0 links |
| `/privacy` | 200 OK | ❌ **No (Empty Root)** | `Floorly – Never undercharge again` | Generic default (same across all) | ❌ None | ❌ 0 links |
| `/refund-policy` | 200 OK | ❌ **No (Empty Root)** | `Floorly – Never undercharge again` | Generic default (same across all) | ❌ None | ❌ 0 links |
| `/delivery` | 200 OK | ❌ **No (Empty Root)** | `Floorly – Never undercharge again` | Generic default (same across all) | ❌ None | ❌ 0 links |
| `/non-existent-404` | **200 OK (Soft 404)** | ❌ **SPA fallback** | `Floorly – Never undercharge again` | Generic default | ❌ None | ❌ 0 links |

### Key Discovery:
Because Vite builds a single-page application (SPA), the web server serves `dist/index.html` on all incoming requests. 
- **SEO Impact:** Traditional search engines must rely on JavaScript rendering queues (WRS), causing indexing delays of days or weeks.
- **AEO / GEO Impact:** Generative AI crawlers (PerplexityBot, ChatGPT-User, ClaudeBot) do not reliably render heavy client-side JavaScript. As a result, they index an empty page and cannot quote Floorly's features, pricing, or definitions.

---

## 2. Technical Audit Details

### 2.1 Titles, Descriptions & Canonical Tags
- **Current Canonical:** Hardcoded to `<link rel="canonical" href="https://floorly.app/" />` across all pages.
  - *Issue:* Mismatched domain (new domain is `https://floorlystudio.me/`).
  - *Issue:* Not self-referencing. `/pricing` currently claims its canonical is `https://floorly.app/`, which tells Google to ignore `/pricing` in favor of the home page!
- **Titles & Descriptions:** Single static title and meta description in `index.html`. No per-route dynamic injection for crawler discovery.

### 2.2 Headings & Semantic Content (Post-Hydration vs Raw)
- **H1 Presence:** In client JSX, each page defines an H1 (e.g. `Never undercharge again.` on `/`, `Simple, transparent studio pricing` on `/pricing`). However, none exist in initial HTML.
- **Heading Hierarchy:** Generally logical (H1 -> H2 -> H3), but some sections use styled `div` elements instead of semantic headings (`h2`/`h3`), reducing parser clarity for answer engines.

### 2.3 Robots.txt Analysis
- **File Location:** `client/public/robots.txt`
- **Current Rules:**
  ```txt
  User-agent: *
  Allow: /
  ...
  Sitemap: https://floorly.com/sitemap.xml
  ```
- **Deficiencies:**
  1. Points to outdated domain `https://floorly.com/sitemap.xml`.
  2. Does not explicitly declare policy for modern AI search engines (`OAI-SearchBot`, `PerplexityBot`, `ClaudeBot`, `ChatGPT-User`).
  3. Lacks environment control toggle (`ALLOW_AI_CRAWLERS` vs `ALLOW_AI_TRAINING`).
  4. App routes (`/dashboard`, `/proposals`, etc.) and share links (`/p/`, `/i/`) are disallowed in robots.txt, but do not yet send `X-Robots-Tag: noindex` HTTP headers.

### 2.4 Sitemap.xml Analysis
- **File Location:** `client/public/sitemap.xml`
- **Current Content:** Hardcodes `https://floorly.com/` with static date `2026-10-10`.
- **Deficiencies:**
  1. Missing key public pages: `/pricing`, `/about`, `/delivery`.
  2. Contains `/login` and `/signup` (which are low-value indexation targets compared to marketing pages).
  3. Not generated dynamically at build time with accurate `lastmod` timestamps.

### 2.5 Structured Data (Schema.org / JSON-LD)
- **Current Markup:** Only a single static `SoftwareApplication` block in `index.html`.
- **Issues:**
  1. Prices in schema (`Solo $9`, `Pro $19`, `Agency $49`) are outdated compared to the active pricing config (`$10 / $19 / $49`).
  2. Missing `Organization` schema with legal entity, contact points, and verified brand URLs.
  3. Missing `WebSite` schema with SiteNavigationElement / potential search actions.
  4. Missing `BreadcrumbList` schema on inner pages.
  5. Missing `FAQPage` schema on `/` and `/pricing` despite having visible FAQs.

### 2.6 Status Codes & 404 Handling
- **Current Behavior:** Requesting an invalid route returns HTTP `200 OK` with the generic SPA HTML. React Router renders `<NotFoundPage />` only after JavaScript executes.
- **Risk:** **Soft 404s**. Search engines treat missing pages as duplicate indexable content.

### 2.7 Canonicalization & Redirects
- **Current Setup:** In transition from `floorly-studio.vercel.app` / `floorly.app` to `https://floorlystudio.me/`.
- **Requirement:** Must enforce single canonical hostname (HTTPS, non-www, stripped trailing slashes) via 301 redirects on edge headers.

### 2.8 Page Speed & Core Web Vitals (CWV Baseline)
- **Client Bundle Size:** Single monolithic bundle (`index-DTws2D8v.js`: **1,643 kB** unminified / **393 kB** gzip).
- **Lighthouse Performance Baseline (Estimated on Mobile):**
  - **LCP:** ~2.8s - 3.4s (delayed by heavy JS download and parsing before hero text renders).
  - **CLS:** Low (< 0.05), but font swapping (`Bricolage Grotesque`) causes minor text shift.
  - **INP:** ~120ms - 180ms.
- **Root Cause:** Marketing pages load the entire application bundle, including PDF generators, charts, and dashboard views, instead of lazy loading.

### 2.9 Social Sharing & Open Graph
- `og:image` and `twitter:image` tags are **missing**. Social shares on X, LinkedIn, and WhatsApp currently show no banner image.
- `theme-color` meta tag is missing.

---

## 3. Entity Disambiguation Strategy: "Floorly" vs `floorly.net`

### The Problem
There is an existing real-estate / architecture floor-plan tool hosted at `floorly.net`. Search engines and AI models that associate "Floorly" solely with "floor plans" risk misclassifying the platform.

### Disambiguation Blueprint
1. **Unambiguous Primary Descriptor:**  
   Always couple the brand name with its exact functional category:  
   `Floorly: AI-scoped proposals with a built-in price floor for freelancers and independent studios.`
2. **Entity Consistency Across All Touchpoints:**  
   - `index.html` & Open Graph: "Floorly — Price-Floor Proposals & Studio OS for Freelancers"
   - JSON-LD:
     - `applicationCategory`: `BusinessApplication`
     - `applicationSubCategory`: `Freelance Project Management & Proposal Software`
     - Explicit feature list: `["AI Scope of Work Generator", "Price Floor Enforcement", "Client Proposal Signatures", "Milestone Invoicing"]`
3. **Structured "Facts" Section on `/about`:**  
   A dedicated, machine-readable facts table on `/about` specifying:
   - Product Name: Floorly
   - Industry: Freelance SaaS / Independent Studio Operations
   - Core Mechanism: Algorithmic Price Floor Protection (prevents quoting below break-even)
   - Canonical Domain: `https://floorlystudio.me/`
4. **LLMs.txt Manifest:**  
   Deploy `/llms.txt` and `/llms-full.txt` defining Floorly as freelance proposal & studio management software to establish ground truth for AI search engines.

---

## 4. Proposed Prerendering / SSG Approach for Phase 1

To make public marketing pages crawlable without JavaScript while preserving 100% of the existing React SPA functionality (auth, billing, interactive slider, calculators), we evaluated three options:

### Comparison of Prerendering Architectural Options

| Option | Architecture | Effort | SEO / AEO Impact | Hydration & App Risk |
| :--- | :--- | :---: | :---: | :---: |
| **Option A (Recommended): Build-Time Headless Prerender Script** | Run a lightweight post-build script during `vite build` that renders each public route into static HTML (`dist/pricing/index.html`, etc.) with full content and metadata, while preserving the React bundle for hydration. | **Low** (~1 day) | **Maximum** (100% server HTML, unique titles, JSON-LD, H1s, zero client delay) | **Zero Risk** (React app, auth, and state logic remain completely untouched). |
| **Option B: `vite-react-ssg` Plugin Migration** | Refactor router into static exports using `vite-react-ssg`. | **Medium** | High | **Medium Risk** (`window` dependencies like Razorpay, Stripe, and auth stores can break during build-time Node execution). |
| **Option C: Framework Migration (Next.js / Astro)** | Re-architect the application to Next.js or Astro. | **Very High** | High | **High Risk** (Disrupts current backend API, auth session cookie flow, Render/Vercel setup, and breaks deadlines). |

### Phase 1 Recommendation:
Proceed with **Option A**:
1. Add a dedicated prerender build script (`client/scripts/prerender.js`) that renders each public route:
   - `/`
   - `/pricing`
   - `/about`
   - `/contact`
   - `/terms`
   - `/privacy`
   - `/refund-policy`
   - `/delivery`
2. Generate route-specific static HTML files with:
   - Complete pre-filled DOM text & headings
   - Unique `<title>` (50-60 chars) and `<meta name="description">` (140-160 chars)
   - Self-referencing `<link rel="canonical">` using `SITE_URL` (`https://floorlystudio.me/...`)
   - Route-specific Open Graph and Twitter card tags
   - Route-specific JSON-LD schemas
3. On the client, React seamlessly takes over (hydrates) so interactive widgets (pricing monthly/annual toggle, "Try the floor" slider, Razorpay modals) continue working flawlessly.

---

## 5. Next Steps Awaiting Confirmation

Before proceeding to **Phase 1: Technical Foundation**:
1. Confirm approval of **Option A (Headless Build-Time Prerendering)**.
2. Confirm new primary production domain: `https://floorlystudio.me/`.
3. Confirm social media handle / X account for Open Graph & Twitter Cards.
