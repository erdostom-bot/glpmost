// GitHub Pages serves 404.html for unknown paths; shipping the SPA shell there
// lets react-router resolve deep links such as /glpmost/folyamat.
import { copyFileSync } from 'node:fs'

copyFileSync('dist/index.html', 'dist/404.html')
