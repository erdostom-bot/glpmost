import { afterwards, benefits, benefitsCta, honest, pageHero } from '../content/benefits.js'
import { Card, CheckList, CtaBand, Disclaimer, Eyebrow, Heading, Lead, PageHero, Section } from '../components/ui.jsx'

export default function Benefits() {
  return (
    <>
      <PageHero {...pageHero} />
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {benefits.map((b, i) => (
            <Card key={b.id} className={i === 0 ? 'lg:col-span-2' : ''}>
              <h2 className="text-3xl font-medium">{b.title}</h2>
              <p className="mt-2 text-lg font-medium text-sage">{b.summary}</p>
              <div className="mt-4 max-w-prose space-y-4 text-ink-soft">
                {b.text.map((p) => <p key={p}>{p}</p>)}
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="sand" id="mellekhatasok">
        <Eyebrow>{honest.eyebrow}</Eyebrow>
        <Heading>{honest.title}</Heading>
        <Lead className="mt-5">{honest.intro}</Lead>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {honest.columns.map((c, i) => (
            <Card key={c.title}>
              <h3 className="text-2xl font-medium">{c.title}</h3>
              <p className="mb-5 mt-2 text-sm text-ink-soft">{c.note}</p>
              <CheckList items={c.items} tone={i === 0 ? 'sage' : 'clay'} />
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <Heading>{afterwards.title}</Heading>
          <div className="mt-6 space-y-5 text-lg text-ink-soft">
            {afterwards.paragraphs.map((p) => <p key={p}>{p}</p>)}
          </div>
        </div>
      </Section>

      <CtaBand {...benefitsCta} />
      <Section className="!py-10">
        <Disclaimer>A kockázatokról és mellékhatásokról olvasd el a betegtájékoztatót, vagy kérdezd meg kezelőorvosodat vagy gyógyszerészedet. Az itt szereplő adatok átlagok, az egyéni eredmény eltérhet.</Disclaimer>
      </Section>
    </>
  )
}
