import { site } from '../content/site.js'
import { Link, useDesign } from '../designs/DesignContext.jsx'

export function Container({ className = '', children }) {
  return <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`}>{children}</div>
}

const tones = {
  paper: 'bg-paper',
  sand: 'bg-sand',
  sage: 'bg-sage text-paper',
  white: 'bg-card',
}

export function Section({ tone = 'paper', id, className = '', children }) {
  return (
    <section id={id} className={`scroll-mt-24 py-16 sm:py-24 ${tones[tone]} ${className}`}>
      <Container>{children}</Container>
    </section>
  )
}

export function Eyebrow({ children, light = false }) {
  const { design } = useDesign()
  return <p className={`mb-3 ${light ? design.cls.eyebrowLight : design.cls.eyebrow}`}>{children}</p>
}

export function Heading({ as: Tag = 'h2', className = '', children }) {
  const size = Tag === 'h1' ? 'text-4xl sm:text-5xl lg:text-6xl leading-[1.08]' : 'text-3xl sm:text-4xl leading-tight'
  return <Tag className={`${size} font-medium tracking-tight ${className}`}>{children}</Tag>
}

export function Lead({ className = '', children }) {
  return <p className={`max-w-prose text-lg leading-relaxed text-ink-soft sm:text-xl ${className}`}>{children}</p>
}

const buttonBase =
  'inline-flex min-h-[52px] items-center justify-center px-7 text-base font-semibold transition focus:outline-none focus-visible:ring-4 focus-visible:ring-clay/40'

export function Button({ to, variant = 'primary', className = '', children, ...rest }) {
  const { design } = useDesign()
  const b = design.cls.button
  return (
    <Link to={to} className={`${buttonBase} ${b.base} ${b[variant]} ${className}`} {...rest}>
      {children}
    </Link>
  )
}

export function Card({ className = '', children }) {
  const { design } = useDesign()
  return <div className={`${design.cls.card} p-7 sm:p-8 ${className}`}>{children}</div>
}

export function TextLink({ to, className = '', children }) {
  const { design } = useDesign()
  return <Link className={`${design.cls.link} ${className}`} to={to}>{children}</Link>
}

export function StepNumber({ n }) {
  const { design } = useDesign()
  return <span className={design.cls.stepNum}>{n}</span>
}

export function Check({ tone = 'sage' }) {
  const color = tone === 'clay' ? 'bg-clay-tint text-clay-dark' : 'bg-sage-tint text-sage'
  return (
    <span className={`mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${color}`} aria-hidden="true">
      <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 10.5l4 4 8-9" />
      </svg>
    </span>
  )
}

export function Dash() {
  return (
    <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-clay-tint text-clay-dark" aria-hidden="true">
      <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
        <path d="M5 10h10" />
      </svg>
    </span>
  )
}

export function CheckList({ items, tone }) {
  const Icon = tone === 'clay' ? Dash : Check
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <Icon />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export function DraftNote({ children }) {
  if (!site.showDraftNotes || !children) return null
  return (
    <p className="mt-6 rounded-2xl border border-dashed border-clay/60 bg-clay-tint/60 px-4 py-3 text-sm text-clay-dark">
      <strong className="font-semibold">Szerkesztői megjegyzés · </strong>
      {children}
    </p>
  )
}

export function Disclaimer({ children, className = '' }) {
  return (
    <p className={`rounded-2xl bg-sand px-5 py-4 text-sm leading-relaxed text-ink-soft ${className}`}>{children}</p>
  )
}

export function Accordion({ items }) {
  const { design } = useDesign()
  return (
    <div className={`divide-y divide-line ${design.cls.card} !pt-0`}>
      {items.map((item) => (
        <details key={item.q} className="group px-6 py-5 sm:px-8">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-medium marker:hidden [&::-webkit-details-marker]:hidden">
            {item.q}
            <span className="shrink-0 text-2xl text-sage transition group-open:rotate-45" aria-hidden="true">+</span>
          </summary>
          <p className="mt-3 max-w-prose text-ink-soft">{item.a}</p>
        </details>
      ))}
    </div>
  )
}

export function PageHero({ eyebrow, title, lead, children }) {
  const { design } = useDesign()
  const masthead = design.header === 'masthead'
  return (
    <section className={masthead ? 'border-b border-ink bg-paper' : 'bg-sand'}>
      <Container className={`py-16 sm:py-24 ${masthead ? 'text-center' : ''}`}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <Heading as="h1" className={masthead ? 'mx-auto max-w-4xl' : 'max-w-3xl'}>{title}</Heading>
        {lead && <Lead className={`mt-6 ${masthead ? 'mx-auto' : ''}`}>{lead}</Lead>}
        {children}
      </Container>
    </section>
  )
}

export function CtaBand({ title, text, button }) {
  return (
    <Section tone="sage">
      <div className="mx-auto max-w-2xl text-center">
        <Heading className="text-paper">{title}</Heading>
        <p className="mt-4 text-lg text-paper/85">{text}</p>
        <Button to={button.to} variant="light" className="mt-8">{button.label}</Button>
      </div>
    </Section>
  )
}
