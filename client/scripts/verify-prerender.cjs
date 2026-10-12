const fs = require('fs');
const path = require('path');

const files = [
  'dist/index.html',
  'dist/pricing/index.html',
  'dist/about/index.html',
  'dist/tools/freelance-rate-calculator/index.html',
  'dist/tools/project-price-calculator/index.html'
];

files.forEach(f => {
  const fullPath = path.resolve(__dirname, '..', f);
  if (!fs.existsSync(fullPath)) {
    console.log(`❌ File not found: ${f}`);
    return;
  }
  const content = fs.readFileSync(fullPath, 'utf8');
  const titleMatch = content.match(/<title>([^<]+)<\/title>/);
  const h1Match = content.match(/<h1[^>]*>([^<]+)<\/h1>/);
  const canonicalMatch = content.match(/<link\s+rel="canonical"\s+href="([^"]+)"/);
  const hasContent = content.includes('<main');
  const hasArticle = content.includes('<article');
  
  // Count schemas
  const schemas = [...content.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)].map(m => {
    try {
      const parsed = JSON.parse(m[1]);
      if (parsed['@graph']) return parsed['@graph'].map(g => g['@type']);
      return [parsed['@type']];
    } catch(e) { return ['ERR']; }
  }).flat();

  // Find external links
  const extLinks = [...content.matchAll(/<a\s+href="(https?:\/\/[^"]+)"[^>]*>([^<]+)<\/a>/gi)]
    .filter(m => !m[1].includes('floorlystudio.me') && !m[1].includes('github.com') && !m[1].includes('x.com') && !m[1].includes('producthunt.com'));

  console.log(`\n📄 [${f}]`);
  console.log(`   Title:        ${titleMatch ? titleMatch[1] : 'MISSING'}`);
  console.log(`   Canonical:    ${canonicalMatch ? canonicalMatch[1] : 'MISSING'}`);
  console.log(`   H1 in HTML:   ${h1Match ? h1Match[1] : 'MISSING'}`);
  console.log(`   Has Article:  ${hasArticle ? '✅ YES' : 'ℹ️ NO'}`);
  console.log(`   Schemas:      ${schemas.join(', ')}`);
  console.log(`   Ext Links:    ${extLinks.length} (${extLinks.map(l => l[2]).join('; ')})`);
  console.log(`   Pre-rendered: ${hasContent ? '✅ YES (Full Semantic Content)' : '❌ NO'}`);
});

