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

function findChrome() {
  if (process.env.CHROME_PATH && fs.existsSync(process.env.CHROME_PATH)) {
    return process.env.CHROME_PATH;
  }

  const candidates = [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    process.env.LOCALAPPDATA ? path.join(process.env.LOCALAPPDATA, 'Google\\Chrome\\Application\\chrome.exe') : null,
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  ].filter(Boolean);

  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) {
      return candidate;
    }
  }

  try {
    const cmd = process.platform === 'win32'
      ? 'where chrome.exe'
      : 'which google-chrome || which chromium || which chromium-browser';
    const result = execSync(cmd, { stdio: ['ignore', 'pipe', 'ignore'] })
      .toString()
      .split('\n')[0]
      .trim();
    if (result && fs.existsSync(result)) return result;
  } catch {}

  return null;
}

const chromePath = findChrome();

if (!chromePath) {
  if (fs.existsSync(outPng)) {
    const stat = fs.statSync(outPng);
    console.log(`Chrome executable not found on ${process.platform}. Preserving existing og-image.png (${stat.size} bytes).`);
    process.exit(0);
  } else {
    console.warn(`Chrome not found and og-image.png does not exist. Skipping OG image generation.`);
    process.exit(0);
  }
}

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

const fileUrl = 'file:///' + tempHtml.replace(/\\/g, '/');

try {
  execSync(
    `"${chromePath}" --headless --disable-gpu --hide-scrollbars --window-size=1200,630 --screenshot="${outPng}" "${fileUrl}"`,
    { stdio: 'inherit' }
  );
} catch (err) {
  console.warn(`Headless Chrome execution failed: ${err.message}`);
} finally {
  if (fs.existsSync(tempHtml)) {
    try {
      fs.unlinkSync(tempHtml);
    } catch {}
  }
}

if (fs.existsSync(outPng)) {
  const stat = fs.statSync(outPng);
  console.log(`Generated og-image.png (${stat.size} bytes)`);
} else {
  console.warn('og-image.png could not be generated, continuing build.');
}
