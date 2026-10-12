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
  const hasContent = content.includes('<main>');

  console.log(`\n📄 [${f}]`);
  console.log(`   Title:     ${titleMatch ? titleMatch[1] : 'MISSING'}`);
  console.log(`   Canonical: ${canonicalMatch ? canonicalMatch[1] : 'MISSING'}`);
  console.log(`   H1 in HTML: ${h1Match ? h1Match[1] : 'MISSING'}`);
  console.log(`   Body inside #root before JS: ${hasContent ? '✅ YES (Full Semantic Content)' : '❌ NO'}`);
});
