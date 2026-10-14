import { Link } from 'react-router-dom'
import { how, finalCta, hero, honesty, trust, what, whoFor } from '../content/home.js'
import { CheckList, Card, CtaBand, Disclaimer, Eyebrow, Heading, Lead, Section, Button, Container } from '../components/ui.jsx'

function HeroArt() {
  return (
    <svg viewBox="0 0 480 480" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#E4EDE9" />
          <stop offset="1" stopColor="#C9DAD4" />
        </linearGradient>
        <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#F5E6DF" />
          <stop offset="1" stopColor="#EBCFC4" />
        </linearGradient>
      </defs>
      <path d="M240 20c110 0 200 90 200 200s-70 240-200 240S40 340 40 230 130 20 240 20z" fill="url(#g1)" />
      <circle cx="355" cy="115" r="84" fill="url(#g2)" />
      <circle cx="170" cy="330" r="62" fill="#2F5D5A" opacity=".92" />
      <circle cx="170" cy="330" r="30" fill="none" stroke="#FBF8F3" strokeWidth="6" />
      <path d="M120 170c40-50 110-50 150 0" fill="none" stroke="#2F5D5A" strokeOpacity=".35" strokeWidth="3" strokeLinecap="round" />
      <path d="M200 215c25-26 70-26 95 0" fill="none" stroke="#C58B79" strokeWidth="3" strokeLinecap="round" />
    </svg>
  )
}

export default function Home() {
  return (
    <>
      <section className="bg-sand">
        <Container className="grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
          <div>
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <Heading as="h1">{hero.title}</Heading>
            <Lead className="mt-6">{hero.lead}</Lead>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button to={hero.primary.to}>{hero.primary.label}</Button>
              <Button to={hero.secondary.to} variant="outline">{hero.secondary.label}</Button>
            </div>
            <p className="mt-6 max-w-prose text-sm text-ink-soft">{hero.note}</p>
          </div>
          <div className="mx-auto hidden aspect-square w-full max-w-md sm:block"><HeroArt /></div>
        </Container>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>{what.eyebrow}</Eyebrow>
            <Heading>{what.title}</Heading>
            <div className="mt-6 space-y-5 text-lg text-ink-soft">
              {what.paragraphs.map((p) => <p key={p}>{p}</p>)}
            </div>
          </div>
          <div className="grid content-start gap-4">
            {what.facts.map((f) => (
              <Card key={f.title} className="!p-6">
                <h3 className="text-xl font-medium">{f.title}</h3>
                <p className="mt-2 text-ink-soft">{f.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="sand">
        <Eyebrow>{whoFor.eyebrow}</Eyebrow>
        <Heading>{whoFor.title}</Heading>
        <Lead className="mt-5">{whoFor.intro}</Lead>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Card>
            <h3 className="mb-5 text-2xl font-medium">Szóba jöhet, ha…</h3>
            <CheckList items={whoFor.yes} />
          </Card>
          <Card>
            <h3 className="mb-5 text-2xl font-medium">{whoFor.noTitle}</h3>
            <CheckList items={whoFor.no} tone="clay" />
            <p className="mt-5 text-sm text-ink-soft">{whoFor.noNote}</p>
          </Card>
        </div>
        <p className="mt-8"><Link className="font-semibold text-sage underline underline-offset-4" to={whoFor.link.to}>{whoFor.link.label} →</Link></p>
      </Section>

      <Section>
        <Eyebrow>{how.eyebrow}</Eyebrow>
        <Heading>{how.title}</Heading>
        <Lead className="mt-5">{how.intro}</Lead>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {how.steps.map((s, i) => (
            <li key={s.title} className="relative rounded-3xl border border-line bg-white p-7">
              <span className="font-display text-5xl text-clay/70">{i + 1}</span>
              <h3 className="mt-3 text-xl font-medium">{s.title}</h3>
              <p className="mt-2 text-ink-soft">{s.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10"><Button to={how.cta.to} variant="outline">{how.cta.label}</Button></div>
      </Section>

      <Section tone="sage">
        <Eyebrow light>{trust.eyebrow}</Eyebrow>
        <Heading className="text-paper">{trust.title}</Heading>
        <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {trust.items.map((t) => (
            <div key={t.title}>
              <h3 className="font-display text-2xl text-paper">{t.title}</h3>
              <p className="mt-2 text-paper/80">{t.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl text-center">
          <Heading>{honesty.title}</Heading>
          <p className="mt-5 text-lg text-ink-soft sm:text-xl">{honesty.text}</p>
        </div>
      </Section>

      <CtaBand {...finalCta} />
      <Section tone="paper" className="!py-10">
        <Disclaimer>A kockázatokról és mellékhatásokról olvasd el a betegtájékoztatót, vagy kérdezd meg kezelőorvosodat vagy gyógyszerészedet.</Disclaimer>
      </Section>
    </>
  )
}
