import { imprint } from '../content/imprint.js'
import { provider } from '../content/site.js'
import { Heading, Lead, PageHero, Section } from '../components/ui.jsx'
import { useDesign } from '../designs/DesignContext.jsx'

export default function Imprint() {
  const { design } = useDesign()
  const rows = imprint.rows(provider)
  return (
    <>
      <PageHero eyebrow={imprint.eyebrow} title={imprint.title} lead={imprint.lead} />
      <Section>
        <div className="mx-auto max-w-3xl space-y-12">
          <dl className={`divide-y divide-line ${design.cls.card} !pt-0`}>
            {rows.map(([label, value]) => (
              <div key={label} className="grid gap-1 px-6 py-4 sm:grid-cols-[14rem_1fr] sm:gap-6">
                <dt className="text-sm font-semibold uppercase tracking-wider text-clay-dark">{label}</dt>
                <dd className="text-ink-soft">{value}</dd>
              </div>
            ))}
          </dl>
          {imprint.sections.map((s) => (
            <div key={s.title}>
              <Heading as="h2" className="!text-2xl">{s.title}</Heading>
              <Lead className="mt-3 !text-lg">{s.body}</Lead>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
