import { how, finalCta, hero, honesty, trust, what, whoFor } from '../content/home.js'
import { CheckList, Card, CtaBand, Disclaimer, Eyebrow, Heading, Lead, Section, Button, Container, StepNumber, TextLink } from '../components/ui.jsx'
import CompoundCompare from '../components/CompoundCompare.jsx'
import DesignGallery from '../components/DesignGallery.jsx'
import { useDesign } from '../designs/DesignContext.jsx'

function Hero() {
  const { design } = useDesign()
  const { Art, hero: layout } = design

  if (layout === 'center') {
    return (
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-[36rem] w-[36rem] opacity-70 sm:w-[48rem]" aria-hidden="true"><Art /></div>
        <Container className="relative py-20 text-center sm:py-28">
          <Eyebrow>{hero.eyebrow}</Eyebrow>
          <Heading as="h1" className="mx-auto max-w-4xl">{hero.title}</Heading>
          <Lead className="mx-auto mt-6">{hero.lead}</Lead>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button to={hero.primary.to}>{hero.primary.label}</Button>
            <Button to={hero.secondary.to} variant="outline">{hero.secondary.label}</Button>
          </div>
          <p className="mx-auto mt-6 max-w-prose text-sm text-ink-soft">{hero.note}</p>
        </Container>
      </section>
    )
  }

  if (layout === 'bg') {
    return (
      <section className="relative overflow-hidden bg-sand">
        <div className="pointer-events-none absolute -right-24 -top-10 h-[30rem] w-[30rem] opacity-60 sm:opacity-90 lg:right-0 lg:h-[40rem] lg:w-[40rem]" aria-hidden="true"><Art /></div>
        <Container className="relative py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl">
            <Eyebrow>{hero.eyebrow}</Eyebrow>
            <Heading as="h1">{hero.title}</Heading>
            <Lead className="mt-6">{hero.lead}</Lead>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button to={hero.primary.to}>{hero.primary.label}</Button>
              <Button to={hero.secondary.to} variant="outline">{hero.secondary.label}</Button>
            </div>
            <p className="mt-6 max-w-prose text-sm text-ink-soft">{hero.note}</p>
          </div>
        </Container>
      </section>
    )
  }

  return (
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
        <div className="mx-auto hidden aspect-square w-full max-w-md sm:block"><Art /></div>
      </Container>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />

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

      <CompoundCompare />

      <Section>
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
        <p className="mt-8"><TextLink to={whoFor.link.to}>{whoFor.link.label} →</TextLink></p>
      </Section>

      <Section tone="sand">
        <Eyebrow>{how.eyebrow}</Eyebrow>
        <Heading>{how.title}</Heading>
        <Lead className="mt-5">{how.intro}</Lead>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {how.steps.map((s, i) => (
            <li key={s.title}>
              <Card className="relative h-full !p-7">
                <StepNumber n={i + 1} />
                <h3 className="mt-3 text-xl font-medium">{s.title}</h3>
                <p className="mt-2 text-ink-soft">{s.text}</p>
              </Card>
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

      <DesignGallery />

      <CtaBand {...finalCta} />
      <Section tone="paper" className="!py-10">
        <Disclaimer>A kockázatokról és mellékhatásokról olvasd el a betegtájékoztatót, vagy kérdezd meg kezelőorvosodat vagy gyógyszerészedet.</Disclaimer>
      </Section>
    </>
  )
}
