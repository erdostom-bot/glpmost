# GLPMost

Magyar nyelvű tájékoztató oldal a GLP-1 alapú kezelésekről, orvosi háttérrel. React + Vite + Tailwind, GitHub Pages-re telepítve.

Oldalak: Főoldal (`/`), Előnyök (`/elonyok`), A folyamat (`/folyamat`), Orvosaink (`/orvosaink`), Klinikai információk (`/klinikai-informaciok`), Adatkezelési tájékoztató (`/adatkezeles`).

## Futtatás

```bash
npm ci
npm run dev        # fejlesztői szerver: http://localhost:5173/glpmost/
npm run build      # éles build a dist/ mappába (+ 404.html a Pages deep linkekhez)
npm run lint
npm run screenshots   # build után: képernyőképek 390 és 1440 px-en -> docs/screenshots/
```

Az ügynök-gépen a Node-hoz: `source ~/.local/wrc-deps/env.sh` (mise).

## Hol vannak a szövegek? (orvosoknak, szerkesztőknek)

Minden látható szöveg a `src/content/` mappában van, sima JavaScript-fájlokban – a kód érintése nélkül szerkeszthető. Idézőjelek (`'...'`) közötti szöveget kell átírni; az idézőjeleket és a vesszőket hagyd meg.

| Fájl | Tartalom |
| --- | --- |
| `src/content/site.js` | márkanév, menü, lábléc, orvosi felelősségkizárás, adatkezelési tájékoztató, elérhetőségek |
| `src/content/home.js` | Főoldal |
| `src/content/benefits.js` | Előnyök, mellékhatások, ellenjavallatok |
| `src/content/process.js` | A folyamat lépései, díjak (`priceHuf`), GYIK |
| `src/content/doctors.js` | Orvosaink – új orvos: másolj be egy újabb elemet a `doctors` listába (fotó: `public/doctors/`) |
| `src/content/clinical.js` | A Klinikai információk oldal keretszövegei |
| `src/data/clinical.js` | Hatóanyagok, gyógyszerárak, vizsgálatok (forrásokkal). Kutatási jegyzet: `docs/research.md` |

A `site.showDraftNotes` (a `site.js`-ben) bekapcsolva halvány „Szerkesztői megjegyzés" dobozokat mutat a még tisztázandó helyeken; élesítés előtt állítsd `false`-ra.

## Telepítés

A `main` ágra érkező változások automatikusan települnek a GitHub Pages-re (`.github/workflows/deploy.yml`, forrás: GitHub Actions). A `vite.config.js` `base` értéke `/glpmost/`.

Megjegyzés: ingyenes GitHub-csomagban a Pages csak publikus repóhoz érhető el. Privát repónál a deploy lépés hibázik; a megoldás a repó publikussá tétele vagy másik tárhely (pl. Cloudflare Pages, Netlify).

## Szerkezet

- `src/components/` – elrendezés (`Layout.jsx`), közös elemek (`ui.jsx`), a testtömeg-diagram (`WeightChart.jsx`)
- `src/pages/` – az egyes oldalak
- `docs/` – kutatási és megfelelőségi jegyzetek, képernyőképek
