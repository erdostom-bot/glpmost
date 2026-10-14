import { privacy } from '../content/site.js'
import { DraftNote, Heading, Lead, PageHero, Section } from '../components/ui.jsx'

export default function Privacy() {
  return (
    <>
      <PageHero eyebrow="Jogi tájékoztató" title={privacy.title} lead={privacy.intro} />
      <Section>
        <div className="mx-auto max-w-3xl space-y-10">
          {privacy.sections.map((s) => (
            <div key={s.title}>
              <Heading as="h2" className="!text-2xl">{s.title}</Heading>
              <Lead className="mt-3 !text-lg">{s.body}</Lead>
            </div>
          ))}
          <DraftNote>{privacy.draft}</DraftNote>
        </div>
      </Section>
    </>
  )
}
