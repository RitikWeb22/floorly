import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientDir = path.resolve(__dirname, '..');
const screenshotsDir = path.join(clientDir, 'screenshots');

if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const prefix = process.argv[2] || 'before'; // 'before' or 'after'

const targets = [
  { name: 'home-1440', url: 'http://localhost:4173/', width: 1440, height: 900 },
  { name: 'home-360', url: 'http://localhost:4173/', width: 360, height: 800 },
  { name: 'pricing-1440', url: 'http://localhost:4173/pricing', width: 1440, height: 900 },
  { name: 'pricing-360', url: 'http://localhost:4173/pricing', width: 360, height: 800 },
  { name: 'rate-calc-1440', url: 'http://localhost:4173/tools/freelance-rate-calculator', width: 1440, height: 900 },
  { name: 'rate-calc-360', url: 'http://localhost:4173/tools/freelance-rate-calculator', width: 360, height: 800 },
];

for (const target of targets) {
  const outFile = path.join(screenshotsDir, `${prefix}-${target.name}.png`);
  console.log(`Capturing ${prefix} screenshot: ${target.name} (${target.width}x${target.height})`);
  try {
    execSync(
      `"${chromePath}" --headless --disable-gpu --hide-scrollbars --virtual-time-budget=3000 --window-size=${target.width},${target.height} --screenshot="${outFile}" "${target.url}"`,
      { stdio: 'inherit' }
    );
    if (fs.existsSync(outFile)) {
      const stats = fs.statSync(outFile);
      console.log(`✓ Saved: ${outFile} (${stats.size} bytes)`);
    } else {
      console.error(`✗ Missing: ${outFile}`);
    }
  } catch (err) {
    console.error(`Error capturing ${target.name}:`, err.message);
  }
}
