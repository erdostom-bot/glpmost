import { dataNotice, faq, pageHero, pricing, steps, surveyPlaceholder } from '../content/process.js'
import { Accordion, Button, Card, CheckList, DraftNote, Eyebrow, Heading, Lead, PageHero, Section, TextLink } from '../components/ui.jsx'

const huf = (n) => n.toLocaleString('hu-HU')

export default function Process() {
  return (
    <>
      <PageHero {...pageHero} />

      <Section>
        <ol className="mx-auto max-w-3xl">
          {steps.map((s, i) => (
            <li key={s.id} id={s.id} className="relative scroll-mt-24 pb-12 pl-16 last:pb-0 sm:pl-20">
              {i < steps.length - 1 && <span className="absolute left-[23px] top-14 h-[calc(100%-3.5rem)] w-px bg-line sm:left-[27px]" aria-hidden="true" />}
              <span className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-sage font-display text-xl font-bold text-paper sm:h-14 sm:w-14 sm:text-2xl">{i + 1}</span>
              <h2 className="text-2xl font-medium sm:text-3xl">{s.title}</h2>
              <p className="mt-1 text-sm font-medium text-clay-dark">
                {s.time}
              </p>
              <div className="mt-4 space-y-3 text-ink-soft">
                {s.text.map((p) => <p key={p}>{p}</p>)}
              </div>
              {s.list && (
                <div className="mt-5 rounded-2xl bg-sand p-5">
                  <p className="mb-3 font-medium">{s.list.title}</p>
                  <CheckList items={s.list.items} />
                </div>
              )}
            </li>
          ))}
        </ol>
      </Section>

      <Section tone="sand" id="dijak">
        <Eyebrow>{pricing.eyebrow}</Eyebrow>
        <Heading>{pricing.title}</Heading>
        <Lead className="mt-5">{pricing.lead}</Lead>
        <div className="mt-10 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-col justify-center rounded-3xl bg-sage p-7 text-paper sm:p-8">
            <p className="font-display text-6xl font-medium sm:text-7xl">{huf(pricing.priceHuf)} <span className="text-3xl">Ft</span></p>
            <p className="mt-2 text-paper/80">{pricing.priceUnit}</p>
          </div>
          <Card>
            <p className="mb-5 text-sm text-ink-soft">{pricing.priceNote}</p>
            <h3 className="text-2xl font-medium">{pricing.whatIsASession.title}</h3>
            <div className="mt-5"><CheckList items={pricing.whatIsASession.items} /></div>
            <p className="mt-5 text-sm text-ink-soft">{pricing.whatIsASession.note}</p>
            <DraftNote>{pricing.draftNote}</DraftNote>
          </Card>
        </div>
        <Card className="mt-6">
          <h3 className="text-2xl font-medium">{pricing.drugCost.title}</h3>
          <p className="mt-3 max-w-prose text-ink-soft">{pricing.drugCost.text}</p>
          <p className="mt-4"><TextLink to={pricing.drugCost.link.to}>{pricing.drugCost.link.label} →</TextLink></p>
        </Card>
      </Section>

      <Section id="kerdoiv">
        <div className="mx-auto max-w-3xl rounded-3xl bg-sage-tint p-8 text-center sm:p-12">
          <Heading>{surveyPlaceholder.title}</Heading>
          <p className="mx-auto mt-4 max-w-prose text-lg text-ink-soft">{surveyPlaceholder.text}</p>
          <label className="mx-auto mt-6 flex max-w-prose items-start gap-3 text-left text-sm text-ink-soft">
            <input type="checkbox" className="mt-1 h-4 w-4 shrink-0 accent-[rgb(var(--c-sage))]" />
            <span>{surveyPlaceholder.consent} <TextLink to="/adatkezeles">Adatkezelési tájékoztató</TextLink></span>
          </label>
          <Button to="/folyamat#kerdoiv" className="mt-6" aria-disabled="true">{surveyPlaceholder.button}</Button>
          <DraftNote>{surveyPlaceholder.draftNote}</DraftNote>
        </div>
        <Card className="mx-auto mt-8 max-w-3xl !p-7">
          <h3 className="text-xl font-medium">{dataNotice.title}</h3>
          <p className="mt-2 text-ink-soft">{dataNotice.text}</p>
          <p className="mt-3"><TextLink to={dataNotice.link.to}>{dataNotice.link.label} →</TextLink></p>
        </Card>
      </Section>

      <Section tone="sand">
        <div className="mx-auto max-w-3xl">
          <Heading className="mb-8">Gyakori kérdések</Heading>
          <Accordion items={faq} />
        </div>
      </Section>
    </>
  )
}
