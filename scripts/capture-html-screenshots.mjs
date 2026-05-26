/**
 * Screenshot FarmSe index + capture IDEAHUB if URL provided
 */
import { chromium } from 'playwright';
import { mkdir, writeFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '..', 'public', 'projects');
const tmpDir = path.join(__dirname, '..', '.tmp-screenshots');

await mkdir(outDir, { recursive: true });
await mkdir(tmpDir, { recursive: true });

const farmseHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
  <style>
    body { background: linear-gradient(135deg, #1a472a 0%, #2d5a3d 50%, #1e3d2f 100%); min-height: 100vh; color: #fff; }
    .hero { padding: 4rem 2rem; text-align: center; }
    h1 { font-weight: 700; font-size: 2.5rem; }
    .badge { background: #4ade80; color: #14532d; }
  </style>
</head>
<body>
  <div class="hero container">
    <span class="badge mb-3">Agribusiness Platform</span>
    <h1>FarmSe Portal</h1>
    <p class="lead opacity-75">Connect farmers & buyers — crop listings, AI prediction, weather insights</p>
    <div class="d-flex gap-3 justify-content-center mt-4 flex-wrap">
      <button class="btn btn-success btn-lg">Farmer Login</button>
      <button class="btn btn-outline-light btn-lg">Buyer Login</button>
    </div>
  </div>
</body>
</html>`;

const ideahubHtml = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: system-ui, sans-serif;
      background: linear-gradient(160deg, #0f172a 0%, #1e1b4b 50%, #0c4a6e 100%);
      min-height: 100vh; color: #e2e8f0; padding: 3rem 2rem;
    }
    .wrap { max-width: 900px; margin: 0 auto; }
    h1 { font-size: 2.25rem; margin-bottom: 0.5rem; color: #22d3ee; }
    .sub { color: #94a3b8; margin-bottom: 2rem; }
    .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; }
    .card {
      background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1);
      border-radius: 12px; padding: 1.25rem;
    }
    .card h3 { font-size: 0.95rem; color: #a5b4fc; margin-bottom: 0.35rem; }
    .card p { font-size: 0.8rem; color: #64748b; }
  </style>
</head>
<body>
  <div class="wrap">
    <h1>IdeaHub</h1>
    <p class="sub">Collaboration platform for students, mentors & faculty</p>
    <div class="grid">
      <div class="card"><h3>Projects</h3><p>Submit & explore ideas</p></div>
      <div class="card"><h3>Mentors</h3><p>Searchable directory</p></div>
      <div class="card"><h3>Events</h3><p>Publish & filter</p></div>
      <div class="card"><h3>Teams</h3><p>Collaborate together</p></div>
      <div class="card"><h3>Documents</h3><p>File management</p></div>
      <div class="card"><h3>Chat</h3><p>Real-time support</p></div>
    </div>
  </div>
</body>
</html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });

for (const [file, html] of [
  ['farmse.png', farmseHtml],
  ['ideahub.png', ideahubHtml],
]) {
  await page.setContent(html, { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);
  await page.screenshot({ path: path.join(outDir, file) });
  console.log(`Created ${file}`);
}

// Optional: live Vercel capture if different from repo asset
try {
  await page.goto('https://smart-electricity-bill-analyzer.vercel.app', {
    waitUntil: 'networkidle',
    timeout: 45000,
  });
  await page.waitForTimeout(3000);
  await page.screenshot({ path: path.join(outDir, 'electricity-live.png') });
  console.log('Created electricity-live.png');
} catch (e) {
  console.log('Skipped live electricity:', e.message);
}

await browser.close();
console.log('Done.');
