# Design-változatok

Öt véletlen sztring (`nanoid(12)`, Node.js, 2026-10-14) – mindegyikből egy teljesen új megjelenés, változatlan szövegekkel és oldalszerkezettel. A főoldal „Design változatok” blokkja és minden oldal lábléce linkeli őket.

| Sztring | Slug | Név | Útvonal |
|---|---|---|---|
| – | (alap) | Alap | `/glpmost/` |
| `Gn8X0M-2tAbH` | `grafit` | Grafit | `/glpmost/d/grafit/` |
| `pB6fPAlcpE_b` | `pasztell` | Pasztell | `/glpmost/d/pasztell/` |
| `Z_XFJQPs_m_m` | `folyoirat` | Folyóirat | `/glpmost/d/folyoirat/` |
| `wmfmmh09WA6h` | `hullam` | Hullám | `/glpmost/d/hullam/` |
| `o6TF_-qxVrMX` | `terrakotta` | Terrakotta | `/glpmost/d/terrakotta/` |

Generálás:

```sh
node --input-type=module -e "import {nanoid} from 'nanoid'; for (let i = 0; i < 5; i++) console.log(nanoid(12))"
```

Hogyan működik:

- `src/designs/index.jsx` – a változatok listája (slug, sztring, színminták, fejléc- és hero-elrendezés, komponens-osztályok, betűtípus-betöltés, hero-grafika).
- `src/designs/designs.css` – a tokenek (`--c-*` színek RGB-hármasként, `--r-*` lekerekítések, `--font-*`), `[data-design="<slug>"]` alatt.
- `src/designs/DesignContext.jsx` – a `<html data-design>` beállítása, betűk betöltése, `Link`/`NavLink` a `/d/<slug>` prefix megtartásával.
- `src/main.jsx` – ugyanazok az oldalak az alap és minden `/d/<slug>/` alatt.
- `tailwind.config.js` – a Tailwind színek, lekerekítések és betűcsaládok a változókból jönnek, ezért a meglévő `bg-sage`, `rounded-3xl` stb. osztályok automatikusan átszíneződnek.

Képernyőképek: `npm run build && node scripts/design-screenshots.js` → `docs/screenshots/designs/<slug>-{390,1440}.jpg`.
