/**
 * Captures project screenshots into public/projects/
 * Run: node scripts/capture-screenshots.mjs
 */
import { chromium } from 'playwright';
import { mkdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'public', 'projects');

const targets = [
  {
    file: 'electricity.png',
    url: 'https://smart-electricity-bill-analyzer.vercel.app',
    wait: 4000,
  },
];

await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

for (const { file, url, wait } of targets) {
  try {
    console.log(`Capturing ${url}...`);
    await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(wait);
    await page.screenshot({
      path: path.join(outDir, file),
      fullPage: false,
    });
    console.log(`  -> public/projects/${file}`);
  } catch (err) {
    console.error(`  Failed ${file}:`, err.message);
  }
}

await browser.close();
console.log('Done.');
