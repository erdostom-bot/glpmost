// Képernyőképek minden oldalról 390 és 1440 px szélességen -> docs/screenshots/
// Használat: npm run build && npm run screenshots   (a build/preview szervert maga indítja)
import { spawn } from 'node:child_process'
import { mkdirSync } from 'node:fs'
import { chromium } from 'playwright'

const pages = [
  ['fooldal', '/'],
  ['elonyok', '/elonyok'],
  ['folyamat', '/folyamat'],
  ['orvosaink', '/orvosaink'],
  ['klinikai-informaciok', '/klinikai-informaciok'],
  ['adatkezeles', '/adatkezeles'],
  ['impresszum', '/impresszum'],
]
const widths = [390, 1440]
const port = 4199
const base = `http://127.0.0.1:${port}/glpmost`

const server = spawn(process.execPath, ['node_modules/vite/bin/vite.js', 'preview', '--host', '127.0.0.1', '--port', String(port), '--strictPort'], { stdio: 'ignore' })
await new Promise((r) => setTimeout(r, 2500))
mkdirSync('docs/screenshots', { recursive: true })

const browser = await chromium.launch({ executablePath: process.env.CHROME_BIN || undefined, args: ['--no-sandbox'] })
try {
  for (const w of widths) {
    const ctx = await browser.newContext({ viewport: { width: w, height: 900 }, deviceScaleFactor: w < 600 ? 2 : 1 })
    const page = await ctx.newPage()
    for (const [name, path] of pages) {
      await page.goto(base + path, { waitUntil: 'networkidle' })
      await page.evaluate(() => document.fonts.ready)
      await page.screenshot({ path: `docs/screenshots/${name}-${w}.jpg`, type: 'jpeg', quality: 82, fullPage: true })
      console.log(`${name}-${w}.jpg`)
    }
    await ctx.close()
  }
} finally {
  await browser.close()
  server.kill()
}
