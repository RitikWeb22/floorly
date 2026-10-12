import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientDir = path.resolve(__dirname, '..');
const distDir = path.join(clientDir, 'dist');
const publicDir = path.join(clientDir, 'public');

// Parse CLI args
const args = process.argv.slice(2);
let targetBaseUrl = null;
let isLiveMode = false;

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--url' && args[i + 1]) {
    targetBaseUrl = args[i + 1].replace(/\/+$/, '');
    i++;
  } else if (args[i] === '--live' || args[i] === '--remote') {
    isLiveMode = true;
  }
}

const rawEnvSiteUrl = process.env.SITE_URL || process.env.VITE_SITE_URL || 'https://floorlystudio.me';
const CANONICAL_SITE_URL = rawEnvSiteUrl.trim().replace(/\/+$/, '');
const TEST_HOST = targetBaseUrl || (isLiveMode ? CANONICAL_SITE_URL : null);

// Prohibited App Routes & Share Patterns that must NEVER appear in sitemap.xml
const FORBIDDEN_ROUTE_PATTERNS = [
  '/dashboard',
  '/analyzer',
  '/proposals',
  '/clients',
  '/projects',
  '/invoices',
  '/expenses',
  '/templates',
  '/pricing-rules',
  '/agents-doc',
  '/settings',
  '/login',
  '/signup',
  '/forgot-password',
  '/reset-password',
  '/checkout-test',
  '/razorpay-test',
  '/p/',
  '/i/',
  '/api/',
];

function getSitemapXml() {
  const distSitemapPath = path.join(distDir, 'sitemap.xml');
  const publicSitemapPath = path.join(publicDir, 'sitemap.xml');

  if (fs.existsSync(distSitemapPath)) {
    return { content: fs.readFileSync(distSitemapPath, 'utf8'), file: distSitemapPath };
  }
  if (fs.existsSync(publicSitemapPath)) {
    return { content: fs.readFileSync(publicSitemapPath, 'utf8'), file: publicSitemapPath };
  }

  throw new Error('No sitemap.xml found in dist/ or public/. Run build or generate-sitemap first.');
}

function parseSitemapUrls(xml) {
  const urlBlocks = xml.match(/<url>[\s\S]*?<\/url>/g) || [];
  const entries = [];

  for (const block of urlBlocks) {
    const locMatch = block.match(/<loc>(.*?)<\/loc>/);
    const lastmodMatch = block.match(/<lastmod>(.*?)<\/lastmod>/);

    if (locMatch) {
      entries.push({
        loc: locMatch[1].trim(),
        lastmod: lastmodMatch ? lastmodMatch[1].trim() : null,
      });
    }
  }

  return entries;
}

async function verifyLiveUrl(url) {
  try {
    const res = await fetch(url, {
      method: 'GET',
      redirect: 'manual', // Sitemaps require direct 200 OK without redirects
      headers: {
        'User-Agent': 'Floorly-Sitemap-Validator/1.0',
      },
    });

    if (res.status === 200) {
      return { ok: true, status: 200 };
    }

    if (res.status >= 300 && res.status < 400) {
      const location = res.headers.get('location') || '(unknown)';
      return { ok: false, error: `Returned redirect HTTP ${res.status} -> ${location} (sitemap URLs must be direct 200, no redirects)` };
    }

    return { ok: false, error: `Returned HTTP ${res.status} ${res.statusText}` };
  } catch (err) {
    return { ok: false, error: `Network error: ${err.message}` };
  }
}

async function verifyLiveRobotsAndSitemap(baseUrl) {
  console.log(`\nVerifying live /sitemap.xml and /robots.txt at: ${baseUrl}`);

  // 1. Verify /sitemap.xml headers
  const sitemapUrl = `${baseUrl}/sitemap.xml`;
  const sitemapRes = await fetch(sitemapUrl, { method: 'GET', redirect: 'manual' });
  const sitemapContentType = sitemapRes.headers.get('content-type') || '';
  
  if (sitemapRes.status !== 200) {
    throw new Error(`[FAIL] ${sitemapUrl} returned HTTP ${sitemapRes.status} (expected 200)`);
  }
  if (!sitemapContentType.includes('xml')) {
    throw new Error(`[FAIL] ${sitemapUrl} Content-Type is "${sitemapContentType}" (expected application/xml)`);
  }
  console.log(`  ✓ ${sitemapUrl} -> 200 OK (${sitemapContentType})`);

  // 2. Verify /robots.txt headers & content
  const robotsUrl = `${baseUrl}/robots.txt`;
  const robotsRes = await fetch(robotsUrl, { method: 'GET', redirect: 'manual' });
  const robotsContentType = robotsRes.headers.get('content-type') || '';
  const robotsBody = await robotsRes.text();

  if (robotsRes.status !== 200) {
    throw new Error(`[FAIL] ${robotsUrl} returned HTTP ${robotsRes.status} (expected 200)`);
  }
  if (!robotsContentType.includes('text/plain')) {
    throw new Error(`[FAIL] ${robotsUrl} Content-Type is "${robotsContentType}" (expected text/plain)`);
  }
  if (!robotsBody.includes(`Sitemap: `)) {
    throw new Error(`[FAIL] ${robotsUrl} does not declare "Sitemap:"`);
  }
  if (/Disallow:\s*\/sitemap\.xml/i.test(robotsBody)) {
    throw new Error(`[FAIL] ${robotsUrl} contains rule disallowing /sitemap.xml`);
  }
  console.log(`  ✓ ${robotsUrl} -> 200 OK (${robotsContentType}) with valid Sitemap declaration`);
}

async function main() {
  console.log('--- Floorly Sitemap Verification ---');
  console.log(`Canonical Production Host: ${CANONICAL_SITE_URL}`);
  if (TEST_HOST) {
    console.log(`Live Testing Target Host: ${TEST_HOST}`);
  }

  const { content, file } = getSitemapXml();
  console.log(`Loaded sitemap from: ${file}`);

  const entries = parseSitemapUrls(content);
  if (entries.length === 0) {
    throw new Error('Sitemap is empty or contains no valid <url> elements.');
  }

  console.log(`Total URLs to verify: ${entries.length}\n`);

  const errors = [];

  for (const entry of entries) {
    const { loc, lastmod } = entry;
    const urlObj = new URL(loc);

    // 1. Verify hostname & protocol matches canonical SITE_URL
    const locOrigin = urlObj.origin;
    if (locOrigin !== CANONICAL_SITE_URL) {
      errors.push(`[HOST MISMATCH] ${loc} does not match canonical SITE_URL (${CANONICAL_SITE_URL})`);
    }

    // 2. Verify protocol is https (unless testing localhost)
    if (!urlObj.origin.includes('localhost') && urlObj.protocol !== 'https:') {
      errors.push(`[NON-HTTPS] ${loc} must use https:// protocol`);
    }

    // 3. Verify no trailing slash inconsistency (only root / should end in /)
    if (urlObj.pathname !== '/' && urlObj.pathname.endsWith('/')) {
      errors.push(`[TRAILING SLASH] ${loc} contains invalid trailing slash`);
    }

    // 4. Verify no private app routes or share tokens
    for (const forbidden of FORBIDDEN_ROUTE_PATTERNS) {
      if (urlObj.pathname === forbidden || urlObj.pathname.startsWith(`${forbidden}/`)) {
        errors.push(`[PRIVATE APP ROUTE] ${loc} points to protected app route "${forbidden}"`);
      }
    }

    // 5. Verify valid lastmod format (YYYY-MM-DD)
    if (!lastmod || !/^\d{4}-\d{2}-\d{2}$/.test(lastmod)) {
      errors.push(`[INVALID LASTMOD] ${loc} has invalid or missing date "${lastmod}" (must be YYYY-MM-DD)`);
    }

    // 6. Build-time Static Dist Verification (if dist exists)
    if (fs.existsSync(distDir) && !TEST_HOST) {
      let expectedDistFile;
      if (urlObj.pathname === '/') {
        expectedDistFile = path.join(distDir, 'index.html');
      } else {
        const subPath = urlObj.pathname.replace(/^\//, '');
        expectedDistFile = path.join(distDir, subPath, 'index.html');
      }

      if (!fs.existsSync(expectedDistFile)) {
        errors.push(`[MISSING BUILD ARTIFACT] ${loc} corresponds to missing static file: ${expectedDistFile}`);
      }
    }

    // 7. Live HTTP verification if target host is set
    if (TEST_HOST) {
      const requestUrl = `${TEST_HOST}${urlObj.pathname}${urlObj.search}`;
      const checkResult = await verifyLiveUrl(requestUrl);
      if (!checkResult.ok) {
        errors.push(`[HTTP ERROR] ${requestUrl} -> ${checkResult.error}`);
      } else {
        console.log(`  ✓ 200 OK: ${requestUrl} (loc: ${loc}, lastmod: ${lastmod})`);
      }
    } else {
      console.log(`  ✓ Validated: ${loc} (lastmod: ${lastmod})`);
    }
  }

  // Live checks for robots.txt & sitemap.xml
  if (TEST_HOST) {
    try {
      await verifyLiveRobotsAndSitemap(TEST_HOST);
    } catch (err) {
      errors.push(`[LIVE ASSETS ERROR] ${err.message}`);
    }
  }

  if (errors.length > 0) {
    console.error('\n❌ SITEMAP VALIDATION FAILED WITH ERRORS:');
    errors.forEach((err) => console.error(`  - ${err}`));
    process.exit(1);
  }

  console.log('\n✅ All sitemap URLs passed validation (no app routes, canonical host match, valid lastmod).');
}

main().catch((err) => {
  console.error('\n❌ Fatal Verification Error:', err.message);
  process.exit(1);
});
