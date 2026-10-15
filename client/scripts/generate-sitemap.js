import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientDir = path.resolve(__dirname, '..');
const repoRoot = path.resolve(clientDir, '..');
const publicDir = path.join(clientDir, 'public');
const distDir = path.join(clientDir, 'dist');

// Enforce canonical production domain: sitemap must NEVER use vercel.app or preview URLs
const CANONICAL_SITE_URL = 'https://floorlystudio.me';
const SITE_URL = CANONICAL_SITE_URL;

// Canonical list of strictly PUBLIC routes and their primary source files
const PUBLIC_ROUTES = [
  {
    path: '/',
    sourceFile: 'client/src/pages/LandingPage.jsx',
    defaultLastmod: '2026-10-13',
    changefreq: 'weekly',
    priority: '1.0',
  },
  {
    path: '/pricing',
    sourceFile: 'client/src/pages/PricingPage.jsx',
    defaultLastmod: '2026-10-12',
    changefreq: 'weekly',
    priority: '0.9',
  },
  {
    path: '/tools/freelance-rate-calculator',
    sourceFile: 'client/src/pages/tools/FreelanceRateCalculatorPage.jsx',
    defaultLastmod: '2026-10-12',
    changefreq: 'weekly',
    priority: '0.9',
  },
  {
    path: '/tools/project-price-calculator',
    sourceFile: 'client/src/pages/tools/ProjectPriceCalculatorPage.jsx',
    defaultLastmod: '2026-10-12',
    changefreq: 'weekly',
    priority: '0.9',
  },
  {
    path: '/about',
    sourceFile: 'client/src/pages/AboutPage.jsx',
    defaultLastmod: '2026-10-12',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/contact',
    sourceFile: 'client/src/pages/ContactPage.jsx',
    defaultLastmod: '2026-10-11',
    changefreq: 'monthly',
    priority: '0.7',
  },
  {
    path: '/terms',
    sourceFile: 'client/src/pages/TermsPage.jsx',
    defaultLastmod: '2026-10-11',
    changefreq: 'monthly',
    priority: '0.5',
  },
  {
    path: '/privacy',
    sourceFile: 'client/src/pages/PrivacyPage.jsx',
    defaultLastmod: '2026-10-11',
    changefreq: 'monthly',
    priority: '0.5',
  },
  {
    path: '/refund-policy',
    sourceFile: 'client/src/pages/RefundPage.jsx',
    defaultLastmod: '2026-10-11',
    changefreq: 'monthly',
    priority: '0.5',
  },
  {
    path: '/delivery',
    sourceFile: 'client/src/pages/DeliveryPage.jsx',
    defaultLastmod: '2026-10-11',
    changefreq: 'monthly',
    priority: '0.5',
  },
  {
    path: '/blog',
    sourceFile: 'client/src/pages/blog/BlogIndexPage.jsx',
    defaultLastmod: '2026-10-15',
    changefreq: 'weekly',
    priority: '0.9',
  },
  {
    path: '/blog/what-is-agents-md',
    sourceFile: 'client/src/pages/blog/WhatIsAgentsMdPage.jsx',
    defaultLastmod: '2026-10-15',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/blog/how-to-price-a-freelance-project',
    sourceFile: 'client/src/pages/blog/HowToPriceFreelanceProjectPage.jsx',
    defaultLastmod: '2026-10-15',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/blog/freelance-scope-of-work-template',
    sourceFile: 'client/src/pages/blog/FreelanceScopeOfWorkTemplatePage.jsx',
    defaultLastmod: '2026-10-15',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/blog/prevent-scope-creep-freelance',
    sourceFile: 'client/src/pages/blog/PreventScopeCreepPage.jsx',
    defaultLastmod: '2026-10-15',
    changefreq: 'monthly',
    priority: '0.8',
  },
];

// Determine real last-modified date using Git commit log, falling back to defined config date
function getRealLastMod(route) {
  try {
    const fullPath = path.resolve(repoRoot, route.sourceFile);
    if (fs.existsSync(fullPath)) {
      const gitDate = execSync(`git log -1 --format=%cs -- "${fullPath}"`, {
        cwd: repoRoot,
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'ignore'],
      }).trim();
      if (gitDate && /^\d{4}-\d{2}-\d{2}$/.test(gitDate)) {
        return gitDate;
      }
    }
  } catch {
    // Git command unavailable or shallow history; fallback to config date
  }
  return route.defaultLastmod;
}

export function generateSitemapXml() {
  const urlEntries = PUBLIC_ROUTES.map((route) => {
    // Ensure canonical loc: root is `${SITE_URL}/`, subpages are `${SITE_URL}${route.path}` with NO trailing slash
    const loc = route.path === '/' ? `${SITE_URL}/` : `${SITE_URL}${route.path}`;
    const lastmod = getRealLastMod(route);

    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries.join('\n')}
</urlset>
`;

  return xml;
}

function updateRobotsTxt(targetFilePath) {
  if (!fs.existsSync(targetFilePath)) return;
  let content = fs.readFileSync(targetFilePath, 'utf8');

  // Ensure Sitemap line points to canonical SITE_URL/sitemap.xml
  const sitemapLine = `Sitemap: ${SITE_URL}/sitemap.xml`;
  if (/^Sitemap:\s*.+$/m.test(content)) {
    content = content.replace(/^Sitemap:\s*.+$/m, sitemapLine);
  } else {
    content = `${content.trim()}\n\n${sitemapLine}\n`;
  }

  fs.writeFileSync(targetFilePath, content, 'utf8');
}

function main() {
  console.log(`Generating sitemap.xml for canonical SITE_URL: ${SITE_URL}`);
  const sitemapContent = generateSitemapXml();

  // 1. Write to public/
  const publicSitemapPath = path.join(publicDir, 'sitemap.xml');
  fs.writeFileSync(publicSitemapPath, sitemapContent, 'utf8');
  console.log(`✓ Generated: ${publicSitemapPath}`);

  // Update public/robots.txt
  updateRobotsTxt(path.join(publicDir, 'robots.txt'));

  // 2. Write to dist/ if dist exists
  if (fs.existsSync(distDir)) {
    const distSitemapPath = path.join(distDir, 'sitemap.xml');
    fs.writeFileSync(distSitemapPath, sitemapContent, 'utf8');
    console.log(`✓ Copied: ${distSitemapPath}`);

    // Update dist/robots.txt
    updateRobotsTxt(path.join(distDir, 'robots.txt'));
  }

  console.log(`✓ Sitemap generation complete (${PUBLIC_ROUTES.length} public URLs).`);
}

main();
