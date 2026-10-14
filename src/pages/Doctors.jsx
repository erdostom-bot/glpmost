import { doctors, pageHero, principles, registrationNote } from '../content/doctors.js'
import { Card, CheckList, DraftNote, Eyebrow, Heading, PageHero, Section } from '../components/ui.jsx'

function Avatar({ doctor }) {
  if (doctor.photo) return <img src={doctor.photo} alt={doctor.name} className="aspect-[4/5] w-full rounded-3xl object-cover" />
  return (
    <div className="flex aspect-[4/5] w-full items-center justify-center rounded-3xl bg-gradient-to-br from-sage-tint to-clay-tint" role="img" aria-label={`${doctor.name} – fotó helye`}>
      <span className="font-display text-7xl text-sage/70">{doctor.initials}</span>
    </div>
  )
}

export default function Doctors() {
  return (
    <>
      <PageHero {...pageHero} />
      <Section>
        <div className="space-y-10">
          {doctors.map((d) => (
            <article key={d.id} className="grid gap-8 rounded-3xl border border-line bg-white p-6 sm:p-10 md:grid-cols-[minmax(0,280px)_1fr] md:gap-12">
              <Avatar doctor={d} />
              <div>
                <Eyebrow>{d.role}</Eyebrow>
                <Heading>{d.name}</Heading>
                <div className="mt-5 space-y-4 text-lg text-ink-soft">
                  {d.bio.map((p) => <p key={p}>{p}</p>)}
                </div>
                <dl className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <dt className="text-sm font-semibold uppercase tracking-wider text-clay-dark">Végzettség</dt>
                    <dd className="mt-2"><CheckList items={d.credentials} /></dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold uppercase tracking-wider text-clay-dark">Fókusz</dt>
                    <dd className="mt-2"><CheckList items={d.focus} /></dd>
                  </div>
                  <div>
                    <dt className="text-sm font-semibold uppercase tracking-wider text-clay-dark">{registrationNote.label}</dt>
                    <dd className="mt-2">{d.registration || registrationNote.missing}</dd>
                  </div>
                </dl>
                <p className="mt-4 text-sm text-ink-soft">{registrationNote.note}</p>
                <DraftNote>{d.draftNote}</DraftNote>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Section tone="sand">
        <Heading>{principles.title}</Heading>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {principles.items.map((p) => (
            <Card key={p.title}>
              <h3 className="text-xl font-medium">{p.title}</h3>
              <p className="mt-2 text-ink-soft">{p.text}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}
