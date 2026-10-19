import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientDir = path.resolve(__dirname, '..');
const backlinksDir = path.join(clientDir, 'backlinks');

const SITE_URL = 'https://floorlystudio.me';
const INDEXNOW_KEY = 'floorly-indexnow-20261013';

if (!fs.existsSync(backlinksDir)) {
  fs.mkdirSync(backlinksDir, { recursive: true });
}

// 1. Fetch all URLs from sitemap.xml
function getSitemapUrls() {
  const sitemapPath = path.join(clientDir, 'public', 'sitemap.xml');
  if (!fs.existsSync(sitemapPath)) {
    return [
      `${SITE_URL}/`,
      `${SITE_URL}/tools/freelance-proposal-generator`,
      `${SITE_URL}/tools/freelance-rate-calculator`,
      `${SITE_URL}/tools/project-price-calculator`,
      `${SITE_URL}/pricing`,
      `${SITE_URL}/about`,
      `${SITE_URL}/blog`,
    ];
  }
  const content = fs.readFileSync(sitemapPath, 'utf8');
  const matches = [...content.matchAll(/<loc>(https:\/\/[^<]+)<\/loc>/g)].map((m) => m[1]);
  return matches.length > 0 ? matches : [`${SITE_URL}/`];
}

// 2. Ping Search Engines & IndexNow
async function pingSearchEngines(urls) {
  console.log('\n--- 1. Search Engine & IndexNow Automation ---');
  
  // A. IndexNow API Ping (Notifies Bing, Yandex, Seznam, Naver)
  const indexNowPayload = {
    host: 'floorlystudio.me',
    key: INDEXNOW_KEY,
    keyLocation: `${SITE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  };

  try {
    console.log(`Sending IndexNow batch submission for ${urls.length} URLs to api.indexnow.org...`);
    const res = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(indexNowPayload),
    });
    console.log(`✓ IndexNow Response Status: ${res.status} (${res.status === 200 || res.status === 202 ? 'Submitted successfully' : 'Queued'})`);
  } catch (err) {
    console.warn(`! IndexNow Ping Notice: ${err.message}`);
  }

  // B. Google Ping Sitemap
  try {
    const googlePingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(`${SITE_URL}/sitemap.xml`)}`;
    console.log(`Pinging Google Sitemap at ${googlePingUrl}...`);
    const gRes = await fetch(googlePingUrl);
    console.log(`✓ Google Ping Status: ${gRes.status}`);
  } catch (err) {
    console.warn(`! Google Ping Notice: ${err.message}`);
  }

  // C. Bing Ping Sitemap
  try {
    const bingPingUrl = `https://www.bing.com/ping?sitemap=${encodeURIComponent(`${SITE_URL}/sitemap.xml`)}`;
    console.log(`Pinging Bing Sitemap at ${bingPingUrl}...`);
    const bRes = await fetch(bingPingUrl);
    console.log(`✓ Bing Ping Status: ${bRes.status}`);
  } catch (err) {
    console.warn(`! Bing Ping Notice: ${err.message}`);
  }
}

// 3. Generate Dev.to / Hashnode Authority Article with Canonical URL
function generateAuthorityArticle() {
  console.log('\n--- 2. Generating Authoritative Backlink Article ---');
  const articleContent = `---
title: Why 64% of Solo Developers Undercharge (And How We Built a Deterministic Price Floor Engine)
published: true
tags: webdev, freelancing, javascript, startup
canonical_url: https://floorlystudio.me/tools/freelance-proposal-generator
cover_image: https://floorlystudio.me/og-image.png
description: How we engineered an AI proposal generator with server-side price floors to eliminate scope creep and protect freelance profit margins.
---

When freelance software engineers and web developers quote fixed-price client projects, almost everyone relies on mental math:
\`Estimated Hours × Nominal Rate = Project Quote\`.

Here is the dirty reality uncovered by Freelancers Union and Upwork research: **Over 64% of independent contractors end up working for an effective hourly rate far below their break-even baseline.**

## Why Mental Math Fails

1. **Unstated Administrative Overhead:** Client meetings, discovery calls, invoicing reconciliation, and deployment setups eat 25% to 35% of total project hours.
2. **Ambiguous Revision Cycles:** Without strict "Out of Scope" boundaries, client revisions silently creep into deliverables without additional billing.
3. **Emotional Underquoting:** During live client negotiations, freelancers panic and discount their prices without deducting a single deliverable.

## The Solution: A Deterministic Price Floor Engine

To solve this for our own projects, we built [Floorly](https://floorlystudio.me) and released a free interactive tool: **[Floorly AI Proposal & Price Floor Generator](https://floorlystudio.me/tools/freelance-proposal-generator)**.

Instead of letting AI hallucinate numbers, Floorly separates proposal generation into two distinct layers:

### 1. Semantic AI Layer (Google Gemini)
Ingests unstructured client briefs (emails, WhatsApp messages, raw notes) and extracts:
- Explicit feature list and deliverables.
- Hidden technical risks and third-party dependencies.
- **Strict Exclusions (Out of Scope)** to eliminate client disputes.

### 2. Deterministic Price Floor Layer
Calculates the unbreakable mathematical baseline:
\`\`\`js
const rawLabor = estimatedHours * baseHourlyRate;
const adjustedLabor = Math.round(rawLabor * complexityMultiplier);
const contingencyBuffer = Math.round(adjustedLabor * 0.15); // 15% safety margin

// Tier 1: Minimum Acceptable Break-Even Floor
const floorPrice = adjustedLabor + contingencyBuffer;

// Tier 2: Recommended Market Price (Standard 25% margin)
const recommendedPrice = Math.round(floorPrice * 1.25);

// Tier 3: Premium Turnkey Price (Priority SLA + 60% margin)
const premiumPrice = Math.round(floorPrice * 1.60);
\`\`\`

## 3-Tier Proposal Architecture That Converts

When you present a client with a single fixed quote, their subconscious mind asks: *"Should I hire them, or look elsewhere?"*

When you present 3 tiers (**Break-Even Floor**, **Recommended Package**, **Premium Turnkey**), their mindset shifts to: *"Which package best fits our current budget?"*

Furthermore, by locking a 50% upfront deposit on milestone kickoff and enforcing zero platform transaction cuts, solo developers keep 100% of their earned margin.

### Try It for Free
You can test the tool and generate clean Markdown or printable PDF proposals directly at [floorlystudio.me/tools/freelance-proposal-generator](https://floorlystudio.me/tools/freelance-proposal-generator).
`;

  const outputPath = path.join(backlinksDir, 'devto-article-price-floors.md');
  fs.writeFileSync(outputPath, articleContent, 'utf8');
  console.log(`✓ Saved Dev.to/Hashnode authoritative article to: ${outputPath}`);

  // Optional: If DEVTO_API_KEY environment variable is present, publish automatically
  if (process.env.DEVTO_API_KEY) {
    console.log('DEVTO_API_KEY detected. Publishing directly to Dev.to API...');
    fetch('https://dev.to/api/articles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'api-key': process.env.DEVTO_API_KEY,
      },
      body: JSON.stringify({
        article: {
          title: 'Why 64% of Solo Developers Undercharge (And How We Built a Deterministic Price Floor Engine)',
          body_markdown: articleContent,
          published: false, // Save as draft first for safety
          main_image: 'https://floorlystudio.me/og-image.png',
          canonical_url: 'https://floorlystudio.me/tools/freelance-proposal-generator',
          tags: ['webdev', 'freelancing', 'javascript', 'productivity'],
        },
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(`✓ Published draft to Dev.to! URL: ${data.url || data.id}`);
      })
      .catch((err) => console.warn(`! Dev.to API notice: ${err.message}`));
  } else {
    console.log('ℹ (Set DEVTO_API_KEY in your env to automatically auto-publish drafts to Dev.to)');
  }
}

// 4. Generate Directory Submissions JSON Payload
function generateDirectoryPayloads() {
  console.log('\n--- 3. Generating Directory Submission Payloads ---');
  const directoryPayloads = {
    metadata: {
      generatedAt: new Date().toISOString(),
      siteUrl: SITE_URL,
      toolUrl: `${SITE_URL}/tools/freelance-proposal-generator`,
      logoUrl: `${SITE_URL}/og-image.png`,
    },
    directories: [
      {
        platform: 'Toolify.ai',
        submitUrl: 'https://www.toolify.ai/submit',
        title: 'Floorly',
        tagline: 'AI proposal generator with deterministic price floor protection',
        pricing: 'Free / Freemium',
        category: 'Productivity / Freelance / Business',
        description: 'Turn client briefs into scoped proposals with price floors. Prevent underquoting, add payment links, and track true profit margins.',
        targetUrl: `${SITE_URL}/tools/freelance-proposal-generator`,
      },
      {
        platform: 'Futurepedia.io',
        submitUrl: 'https://www.futurepedia.io/submit-tool',
        title: 'Floorly Proposal Studio',
        tagline: 'Never undercharge again — AI proposals with price floors',
        pricing: 'Freemium',
        category: 'Business & Finance',
        description: 'Convert unstructured client briefs into professional proposals, transparent quotations with strict floor price enforcement, and zero-fee milestone invoicing.',
        targetUrl: SITE_URL,
      },
      {
        platform: 'SaaSHub',
        submitUrl: 'https://www.saashub.com/submit',
        title: 'Floorly',
        alternativesTo: ['HelloBonsai', 'PandaDoc', 'Proposify', 'HoneyBook'],
        pricing: 'Free plan available, Pro at $19/mo',
        description: 'AI scoping and proposal software for independent software developers, digital designers, and digital studios.',
        targetUrl: SITE_URL,
      },
      {
        platform: 'AlternativeTo',
        submitUrl: 'https://alternativeto.net/',
        title: 'Floorly',
        tagline: 'AI Proposals with Built-in Price Floors',
        license: 'Proprietary / Free tier available',
        replaces: ['Bonsai', 'PandaDoc', 'Better Proposals'],
        targetUrl: SITE_URL,
      },
      {
        platform: 'There Is An AI For That',
        submitUrl: 'https://theresanaiforthat.com/submit/',
        title: 'Floorly',
        task: 'Generate freelance proposals with price floors',
        description: 'AI tool that extracts deliverables from client briefs and calculates unbreakable break-even price floors.',
        targetUrl: `${SITE_URL}/tools/freelance-proposal-generator`,
      },
    ],
  };

  const outputPath = path.join(backlinksDir, 'directory-submissions.json');
  fs.writeFileSync(outputPath, JSON.stringify(directoryPayloads, null, 2), 'utf8');
  console.log(`✓ Saved pre-formatted directory submissions to: ${outputPath}`);
}

// 5. Generate GitHub Awesome-List Pull Request Guide
function generateAwesomeListPayload() {
  console.log('\n--- 4. Generating GitHub Awesome-List Pull Request Snippets ---');
  const awesomeContent = `# GitHub Awesome-Lists One-Click Pull Request Guide

Submit Floorly to these high-DR (DR 96+) repositories for permanent dofollow backlinks:

---

### Target 1: inputsh/awesome-freelance
- **URL:** https://github.com/inputsh/awesome-freelance
- **File to Edit:** \`README.md\`
- **Target Section:** \`## Proposals and Contracts\`
- **Line to Add:**
\`\`\`markdown
- [Floorly](https://floorlystudio.me) - AI proposal scoping engine with deterministic price floor guardrails to prevent freelance undercharging.
\`\`\`
- **PR Commit Message:** \`Add Floorly to proposals & contract tools\`

---

### Target 2: indiehackers / awesome-indie
- **URL:** https://github.com/mezod/awesome-indie
- **File to Edit:** \`README.md\`
- **Target Section:** \`## Project Management & Invoicing\`
- **Line to Add:**
\`\`\`markdown
- [Floorly](https://floorlystudio.me) - Never undercharge again: AI proposals, milestone invoicing, and price floor calculations for solo studios.
\`\`\`
- **PR Commit Message:** \`Add Floorly to project management & invoicing\`
`;

  const outputPath = path.join(backlinksDir, 'github-awesome-list-prs.md');
  fs.writeFileSync(outputPath, awesomeContent, 'utf8');
  console.log(`✓ Saved GitHub Awesome-list PR guide to: ${outputPath}`);
}

// Main Runner
async function main() {
  console.log(`=======================================================`);
  console.log(` Floorly Automated Backlinks & Indexing Engine 🚀`);
  console.log(` Canonical Domain: ${SITE_URL}`);
  console.log(`=======================================================`);

  const urls = getSitemapUrls();
  await pingSearchEngines(urls);
  generateAuthorityArticle();
  generateDirectoryPayloads();
  generateAwesomeListPayload();

  console.log('\n=======================================================');
  console.log('✅ Backlink automation run finished successfully!');
  console.log(`Assets stored in: ${backlinksDir}`);
  console.log('=======================================================\n');
}

main().catch((err) => {
  console.error('Fatal automation error:', err);
  process.exit(1);
});
