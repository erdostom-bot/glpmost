import { RawLink, useDesign, withBase } from '../designs/DesignContext.jsx'
import { designBase, designs, gallery } from '../designs/index.jsx'
import { Card, Eyebrow, Heading, Lead, Section } from './ui.jsx'

export default function DesignGallery() {
  const { design } = useDesign()
  return (
    <Section id="design-valtozatok" tone="sand">
      <Eyebrow>{gallery.eyebrow}</Eyebrow>
      <Heading>{gallery.title}</Heading>
      <Lead className="mt-5">{gallery.text}</Lead>
      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {designs.map((d) => {
          const current = d.slug === design.slug
          const to = withBase(designBase(d), '/')
          return (
            <li key={d.slug}>
              <Card className="!p-6">
                <RawLink to={to} className="flex h-10 overflow-hidden rounded-2xl border border-line" aria-label={`${d.name} változat`}>
                  {d.swatches.map((c) => <span key={c} className="flex-1" style={{ background: c }} />)}
                </RawLink>
                <div className="mt-4 flex items-baseline justify-between gap-3">
                  <h3 className="text-xl font-medium">{d.name}</h3>
                  <code className="font-mono text-xs text-ink-soft">{d.seed}</code>
                </div>
                <p className="mt-3 text-sm">
                  {current ? <span className="text-ink-soft">{gallery.current}</span> : <RawLink to={to} className={design.cls.link}>{gallery.open} →</RawLink>}
                </p>
              </Card>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
