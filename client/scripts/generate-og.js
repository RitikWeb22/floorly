import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const svgPath = path.join(rootDir, 'public/og-image.svg');
const outPng = path.join(rootDir, 'public/og-image.png');
const tempHtml = path.join(rootDir, 'public/__temp_og.html');

let svg = fs.readFileSync(svgPath, 'utf8');
const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  html, body {
    margin: 0;
    padding: 0;
    width: 1200px;
    height: 630px;
    overflow: hidden;
    background: #FAF5EA;
  }
  svg {
    display: block;
    width: 1200px;
    height: 630px;
  }
</style>
</head>
<body>
${svg}
</body>
</html>`;

fs.writeFileSync(tempHtml, html, 'utf8');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const fileUrl = 'file:///' + tempHtml.replace(/\\/g, '/');

execSync(`"${chromePath}" --headless --disable-gpu --hide-scrollbars --window-size=1200,630 --screenshot="${outPng}" "${fileUrl}"`, { stdio: 'inherit' });

if (fs.existsSync(tempHtml)) {
  fs.unlinkSync(tempHtml);
}

if (fs.existsSync(outPng)) {
  const stat = fs.statSync(outPng);
  console.log(`Generated og-image.png (${stat.size} bytes)`);
} else {
  console.error('Failed to generate og-image.png');
  process.exit(1);
}
