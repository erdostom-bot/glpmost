// Képernyőképek a design-változatok főoldaláról 390 és 1440 px szélességen -> docs/screenshots/designs/
// Használat: npm run build && CHROME_BIN=<chrome útvonal> node scripts/design-screenshots.js
import { spawn } from 'node:child_process'
import { mkdirSync } from 'node:fs'
import { chromium } from 'playwright'

const slugs = ['', 'grafit', 'pasztell', 'folyoirat', 'hullam', 'terrakotta']
const widths = [390, 1440]
const port = 4198
const base = `http://127.0.0.1:${port}/glpmost`

const server = spawn(process.execPath, ['node_modules/vite/bin/vite.js', 'preview', '--host', '127.0.0.1', '--port', String(port), '--strictPort'], { stdio: 'ignore' })
await new Promise((r) => setTimeout(r, 2500))
mkdirSync('docs/screenshots/designs', { recursive: true })

const browser = await chromium.launch({ executablePath: process.env.CHROME_BIN || undefined, args: ['--no-sandbox'] })
try {
  for (const w of widths) {
    const ctx = await browser.newContext({ viewport: { width: w, height: 900 }, deviceScaleFactor: w < 600 ? 2 : 1 })
    const page = await ctx.newPage()
    for (const slug of slugs) {
      const name = slug || 'alap'
      await page.goto(`${base}${slug ? `/d/${slug}` : ''}/`, { waitUntil: 'networkidle' })
      await page.evaluate(() => document.fonts.ready)
      await page.screenshot({ path: `docs/screenshots/designs/${name}-${w}.jpg`, type: 'jpeg', quality: 80, fullPage: true })
      console.log(`${name}-${w}.jpg`)
    }
    await ctx.close()
  }
} finally {
  await browser.close()
  server.kill()
}
