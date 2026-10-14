import { chart as chartText } from '../content/clinical.js'

// Treatment = brand teal, placebo = de-emphasis gray (emphasis form, validated with dataviz/validate_palette.js).
const TEAL = '#1F7F78'
const GRAY = '#A9A59C'
const MAX = 25
const TICKS = [0, 5, 10, 15, 20, 25]

const fmt = (n) => `−${Math.abs(n).toLocaleString('hu-HU', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}%`

function pickArm(study) {
  const arms = study.weightChange?.arms ?? []
  if (!arms.length) return null
  const top = arms.reduce((a, b) => (Math.abs(b.drugPct) > Math.abs(a.drugPct) ? b : a))
  const placebo = top.placeboPct ?? arms.find((a) => a.placeboPct != null)?.placeboPct ?? null
  return { label: top.label, drugPct: top.drugPct, placeboPct: placebo }
}

function chartRows(compounds) {
  return compounds
    .map((c) => ({
      id: c.id,
      name: c.name,
      rows: c.studies
        .map((s) => ({ study: s, arm: pickArm(s) }))
        .filter((r) => r.arm)
        .map(({ study, arm }) => ({ id: study.id, acronym: study.acronym, week: study.weightChange.endpointWeek, population: study.population, n: study.n, arm: arm.label, drugPct: arm.drugPct, placeboPct: arm.placeboPct })),
    }))
    .filter((g) => g.rows.length)
}

function Bar({ value, color, label }) {
  const w = Math.min(Math.abs(value) / MAX, 1) * 100
  return (
    <div className="flex items-center" style={{ height: 16 }}>
      <div
        className="h-3 rounded-r-[4px]"
        style={{ width: `${w}%`, background: color, minWidth: 2 }}
        role="img"
        aria-label={label}
      />
      <span className="ml-2 whitespace-nowrap text-xs font-medium tabular-nums text-ink-soft">{fmt(value)}</span>
    </div>
  )
}

function Row({ r }) {
  return (
    <div className="group relative grid items-center gap-x-4 gap-y-1 py-2.5 outline-none sm:grid-cols-[11rem_1fr]" tabIndex={0}>
      <div>
        <p className="text-sm font-semibold text-ink">{r.acronym}</p>
        <p className="text-xs text-ink-soft">{r.week} hét · {r.arm}</p>
      </div>
      <div className="relative" style={{ marginRight: '3.2rem' }}>
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          {TICKS.map((t) => <span key={t} className="absolute h-full w-px bg-line" style={{ left: `${(t / MAX) * 100}%` }} />)}
        </div>
        <div className="relative space-y-1">
          <Bar value={r.drugPct} color={TEAL} label={`${r.acronym}, ${chartText.drugLabel}: ${fmt(r.drugPct)}`} />
          {r.placeboPct != null && <Bar value={r.placeboPct} color={GRAY} label={`${r.acronym}, ${chartText.placeboLabel}: ${fmt(r.placeboPct)}`} />}
        </div>
      </div>
      <div className="pointer-events-none absolute left-0 top-full z-10 hidden w-72 rounded-2xl border border-line bg-white p-4 text-sm shadow-lg group-hover:block group-focus:block sm:left-44">
        <p className="font-semibold">{r.acronym} · {r.week} hét</p>
        <p className="mt-1 text-ink-soft">{r.population}{r.n ? ` · N = ${r.n.toLocaleString('hu-HU')}` : ''}</p>
        <p className="mt-2"><span className="mr-1.5 inline-block h-0.5 w-3 align-middle" style={{ background: TEAL }} /><strong>{fmt(r.drugPct)}</strong> <span className="text-ink-soft">{chartText.drugLabel} ({r.arm})</span></p>
        {r.placeboPct != null && <p><span className="mr-1.5 inline-block h-0.5 w-3 align-middle" style={{ background: GRAY }} /><strong>{fmt(r.placeboPct)}</strong> <span className="text-ink-soft">{chartText.placeboLabel}</span></p>}
      </div>
    </div>
  )
}

export default function WeightChart({ compounds }) {
  const groups = chartRows(compounds)
  return (
    <figure>
      <figcaption className="mb-6">
        <h3 className="text-2xl font-medium">{chartText.title}</h3>
        <p className="mt-2 max-w-prose text-ink-soft">{chartText.lead}</p>
      </figcaption>
      <div className="mb-6 flex gap-5 text-sm text-ink-soft" aria-hidden="true">
        <span className="flex items-center gap-2"><span className="h-3 w-5 rounded-[3px]" style={{ background: TEAL }} />{chartText.drugLabel}</span>
        <span className="flex items-center gap-2"><span className="h-3 w-5 rounded-[3px]" style={{ background: GRAY }} />{chartText.placeboLabel}</span>
      </div>
      <div className="space-y-8">
        {groups.map((g) => (
          <div key={g.id}>
            <h4 className="mb-1 border-b border-line pb-2 font-display text-xl">{g.name}</h4>
            {g.rows.map((r) => <Row key={r.id} r={r} />)}
            <div className="grid gap-x-4 sm:grid-cols-[11rem_1fr]">
              <span />
              <div className="relative h-5" style={{ marginRight: '3.2rem' }} aria-hidden="true">
                {TICKS.map((t) => (
                  <span key={t} className="absolute -translate-x-1/2 text-[11px] tabular-nums text-ink-soft" style={{ left: `${(t / MAX) * 100}%` }}>{t === 0 ? '0' : `−${t}`}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-ink-soft">{chartText.caution}</p>
      <details className="mt-6 rounded-2xl border border-line bg-white px-5 py-4">
        <summary className="cursor-pointer font-medium">Adatok táblázatban</summary>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[34rem] text-left text-sm">
            <thead className="text-ink-soft">
              <tr><th className="py-2 pr-4">Hatóanyag</th><th className="pr-4">Vizsgálat</th><th className="pr-4">Populáció</th><th className="pr-4">Hét</th><th className="pr-4">Kezelés</th><th>Placebo</th></tr>
            </thead>
            <tbody>
              {groups.flatMap((g) => g.rows.map((r) => (
                <tr key={`${g.id}-${r.id}`} className="border-t border-line align-top">
                  <td className="py-2 pr-4">{g.name}</td><td className="pr-4">{r.acronym}</td><td className="pr-4">{r.population}</td><td className="pr-4">{r.week}</td>
                  <td className="pr-4 tabular-nums">{fmt(r.drugPct)} <span className="text-ink-soft">({r.arm})</span></td>
                  <td className="tabular-nums">{r.placeboPct != null ? fmt(r.placeboPct) : '–'}</td>
                </tr>
              )))}
            </tbody>
          </table>
        </div>
      </details>
    </figure>
  )
}
