import { compounds } from '../data/clinical.js'
import { compare } from '../content/home.js'
import { Card, DraftNote, Eyebrow, Heading, Lead, Section, TextLink } from './ui.jsx'

const SCALE = 25
const nf = (n) => n.toLocaleString('hu-HU')
const pct = (n) => `${n < 0 ? '−' : '+'}${Math.abs(n).toLocaleString('hu-HU', { minimumFractionDigits: 1 })}%`

function monthlyRange(compoundId, brandPrefix) {
  const brand = compounds.find((c) => c.id === compoundId)?.brands.find((b) => b.name.startsWith(brandPrefix))
  const amounts = (brand?.prices ?? []).map((p) => p.amountHuf).filter((n) => n != null && n > 0)
  if (!amounts.length) return null
  return [Math.min(...amounts), Math.max(...amounts)]
}

const ranges = { semaglutid: monthlyRange('semaglutid', 'Wegovy'), tirzepatid: monthlyRange('tirzepatid', 'Mounjaro') }
const ezer = (n) => nf(Math.round(n / 1000))

function Bar({ label, value, tone }) {
  return (
    <div className="grid grid-cols-[4.5rem_1fr_4rem] items-center gap-3 text-sm">
      <span className="text-ink-soft">{label}</span>
      <div className="h-3 rounded-full bg-line/60" role="img" aria-label={`${label}: ${pct(value)}`}>
        <div className={`h-3 rounded-full ${tone === 'drug' ? 'bg-sage' : 'bg-ink/30'}`} style={{ width: `${(Math.abs(value) / SCALE) * 100}%` }} />
      </div>
      <span className="text-right font-semibold tabular-nums">{pct(value)}</span>
    </div>
  )
}

export default function CompoundCompare() {
  return (
    <Section tone="sand" id="ket-hatoanyag">
      <Eyebrow>{compare.eyebrow}</Eyebrow>
      <Heading>{compare.title}</Heading>
      <Lead className="mt-5">{compare.lead}</Lead>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {compare.compounds.map((c) => {
          const r = ranges[c.id]
          return (
            <Card key={c.id} className="flex flex-col">
              <h3 className="font-display text-3xl">{c.name}</h3>
              <p className="mt-1 text-sm text-ink-soft">{c.kind}</p>

              <p className="mt-6 font-display text-6xl font-medium text-sage tabular-nums">{pct(c.drugPct)}</p>
              <p className="mt-1 text-sm text-ink-soft">átlagos testtömegváltozás · {c.study}</p>
              <div className="mt-4 space-y-2">
                <Bar label={compare.barLabels.drug} value={c.drugPct} tone="drug" />
                <Bar label={compare.barLabels.placebo} value={c.placeboPct} tone="placebo" />
              </div>

              <ul className="mt-6 space-y-2 text-ink-soft">
                {c.highlights.map((h) => <li key={h}>{h}</li>)}
              </ul>

              {r && (
                <div className="mt-auto pt-6">
                  <div className="rounded-2xl bg-sage-tint px-5 py-4">
                    <p className="text-sm text-ink-soft">{c.costLabel}</p>
                    <p className="font-display text-3xl text-sage tabular-nums">kb. {ezer(r[0])}–{ezer(r[1])} ezer Ft</p>
                  </div>
                </div>
              )}
            </Card>
          )
        })}
      </div>

      <p className="mt-8 max-w-3xl text-lg text-ink">{compare.priceFraming}</p>
      <p className="mt-3 max-w-3xl text-sm text-ink-soft">{compare.priceCaveat}</p>
      <p className="mt-6"><TextLink to={compare.link.to}>{compare.link.label} →</TextLink></p>
      <DraftNote>{compare.draftNote}</DraftNote>
    </Section>
  )
}
