import { compounds, meta, sources } from '../data/clinical.js'
import { disclaimerBottom, legal, pageHero, pricesSection, studiesSection } from '../content/clinical.js'
import WeightChart from '../components/WeightChart.jsx'
import { Card, CheckList, Disclaimer, Eyebrow, Heading, Lead, PageHero, Section } from '../components/ui.jsx'

const nf = (n) => n.toLocaleString('hu-HU')

function priceText(p) {
  if (p.amountHuf != null) return `${nf(p.amountHuf)} Ft`
  if (p.rangeHuf) return `${nf(p.rangeHuf[0])} – ${nf(p.rangeHuf[1])} Ft`
  return 'nincs megbízható adat'
}

function Badge({ ok }) {
  return (
    <span className={`ml-2 inline-block rounded-full px-2.5 py-0.5 align-middle text-xs font-semibold ${ok ? 'bg-sage-tint text-sage' : 'bg-clay-tint text-clay-dark'}`}>
      {ok ? pricesSection.verified : pricesSection.unverified}
    </span>
  )
}

function availability(v) {
  if (v === true) return 'Forgalomban van'
  if (v === false) return 'Nincs forgalomban'
  return 'ellenőrizendő'
}

function Brand({ b }) {
  return (
    <div className="rounded-2xl border border-line bg-white p-5 sm:p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h4 className="font-display text-2xl">{b.name}</h4>
        <span className="text-sm text-ink-soft">{b.form}</span>
      </div>
      <dl className="mt-4 grid gap-x-8 gap-y-3 text-[15px] sm:grid-cols-2">
        <div><dt className="font-semibold text-ink">Hatósági javallat</dt><dd className="text-ink-soft">{b.indication}</dd></div>
        <div><dt className="font-semibold text-ink">Magyarországi forgalom</dt><dd className="text-ink-soft">{availability(b.marketedInHu)}{b.rx && ' · vényköteles'}</dd></div>
        <div className="sm:col-span-2"><dt className="font-semibold text-ink">Támogatás (NEAK)</dt><dd className="text-ink-soft">{b.reimbursement}</dd></div>
      </dl>
      {b.prices?.length > 0 && (
        <div className="mt-4 border-t border-line pt-4">
          <p className="mb-2 font-semibold">Gyógyszertári ár (tájékoztató)</p>
          <ul className="space-y-2 text-[15px]">
            {b.prices.map((p) => (
              <li key={p.label} className="flex flex-col gap-0.5 sm:flex-row sm:justify-between">
                <span className="text-ink-soft">{p.label}</span>
                <span>
                  <strong className="tabular-nums">{priceText(p)}</strong>
                  <Badge ok={p.verified} />
                  {p.source && <a href={p.source} target="_blank" rel="noreferrer" className="ml-2 text-xs text-sage underline">forrás{p.asOf ? `, ${p.asOf}` : ''}</a>}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {b.notes && <p className="mt-3 text-sm text-ink-soft">{b.notes}</p>}
    </div>
  )
}

function Study({ s }) {
  return (
    <Card className="!p-6">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h4 className="font-display text-2xl">{s.acronym}</h4>
        <span className="text-sm text-ink-soft">{s.journal}, {s.year}</span>
      </div>
      <p className="mt-1 text-sm italic text-ink-soft">{s.title}</p>
      <dl className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2 text-sm sm:grid-cols-4">
        <div><dt className="text-ink-soft">Résztvevők</dt><dd className="font-semibold tabular-nums">N = {s.n != null ? nf(s.n) : '–'}</dd></div>
        <div><dt className="text-ink-soft">Időtartam</dt><dd className="font-semibold">{s.durationWeeks} hét</dd></div>
        <div className="col-span-2"><dt className="text-ink-soft">Populáció</dt><dd className="font-semibold">{s.population}</dd></div>
      </dl>
      <p className="mt-4"><strong>Fő eredmény: </strong>{s.resultHu}</p>
      {s.summaryHu && <p className="mt-3 text-ink-soft">{s.summaryHu}</p>}
      {s.safetyHu && <p className="mt-3 text-sm text-ink-soft"><strong className="text-ink">Biztonság: </strong>{s.safetyHu}</p>}
      <p className="mt-4 text-sm">
        {s.doi && <a href={`https://doi.org/${s.doi}`} target="_blank" rel="noreferrer" className="font-semibold text-sage underline underline-offset-4">DOI: {s.doi}</a>}
        {!s.doi && s.url && <a href={s.url} target="_blank" rel="noreferrer" className="font-semibold text-sage underline underline-offset-4">Forrás</a>}
        {s.registry && <span className="ml-3 text-ink-soft">{s.registry}</span>}
      </p>
    </Card>
  )
}

function Compound({ c, tone }) {
  return (
    <Section id={c.id} tone={tone}>
      <Eyebrow>Hatóanyag</Eyebrow>
      <Heading>{c.name}</Heading>
      <Lead className="mt-4">{c.summary}</Lead>
      {c.mechanism && <p className="mt-4 max-w-prose text-ink-soft">{c.mechanism}</p>}

      <h3 className="mb-4 mt-12 text-2xl font-medium">{pricesSection.title}</h3>
      <div className="grid gap-4 lg:grid-cols-2">{c.brands.map((b) => <Brand key={b.name} b={b} />)}</div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {c.commonSideEffects?.length > 0 && <Card className="!p-6"><h4 className="mb-4 text-xl font-medium">Gyakori mellékhatások</h4><CheckList items={c.commonSideEffects} /></Card>}
        {c.seriousRisks?.length > 0 && <Card className="!p-6"><h4 className="mb-4 text-xl font-medium">Komoly kockázatok</h4><CheckList items={c.seriousRisks} tone="clay" /></Card>}
        {c.contraindications?.length > 0 && <Card className="!p-6"><h4 className="mb-4 text-xl font-medium">Ellenjavallatok</h4><CheckList items={c.contraindications} tone="clay" /></Card>}
      </div>
      {(c.dosing || c.afterStopping) && (
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {c.dosing && <div><h4 className="text-lg font-medium">Adagolás</h4><p className="mt-1 text-ink-soft">{c.dosing}</p></div>}
          {c.afterStopping && <div><h4 className="text-lg font-medium">A kezelés abbahagyása után</h4><p className="mt-1 text-ink-soft">{c.afterStopping}</p></div>}
        </div>
      )}

      <h3 className="mb-2 mt-14 text-2xl font-medium">{studiesSection.title}</h3>
      <p className="mb-6 max-w-prose text-ink-soft">{studiesSection.lead}</p>
      <div className="grid gap-5 lg:grid-cols-2">{c.studies.map((s) => <Study key={s.id} s={s} />)}</div>
    </Section>
  )
}

export default function Clinical() {
  return (
    <>
      <PageHero {...pageHero}>
        <div className="mt-8 flex flex-wrap gap-2" aria-label="Ugrás hatóanyaghoz">
          {compounds.map((c) => (
            <a key={c.id} href={`#${c.id}`} className="rounded-full border border-sage/30 bg-paper px-4 py-2 text-sm font-semibold text-sage hover:bg-sage-tint">{c.name}</a>
          ))}
        </div>
        <p className="mt-6 text-sm text-ink-soft">Adatok állapota: {meta.asOf}</p>
      </PageHero>

      <Section className="!py-12 sm:!py-16">
        <Card className="bg-sand !border-sand">
          <h2 className="text-2xl font-medium">{legal.title}</h2>
          <div className="mt-4"><CheckList items={legal.items} /></div>
        </Card>
      </Section>

      <Section tone="white" className="!pt-0 sm:!pt-0">
        <WeightChart compounds={compounds} />
      </Section>

      {compounds.map((c, i) => <Compound key={c.id} c={c} tone={i % 2 === 0 ? 'paper' : 'sand'} />)}

      <Section tone="white" id="forrasok">
        <Heading>Források</Heading>
        <ul className="mt-6 max-w-3xl space-y-2 text-[15px]">
          {sources.map((s) => (
            <li key={s.id}><a href={s.url} target="_blank" rel="noreferrer" className="text-sage underline underline-offset-4">{s.title}</a> <span className="text-ink-soft">(elérve: {s.accessed})</span></li>
          ))}
        </ul>
        <Disclaimer className="mt-8">{meta.disclaimer} {disclaimerBottom}</Disclaimer>
      </Section>
    </>
  )
}
