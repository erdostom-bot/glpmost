import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { footer, headerCta, nav, site } from '../content/site.js'
import { DesignProvider, Link, NavLink, RawLink, useDesign, withBase } from '../designs/DesignContext.jsx'
import { designBase, designs, gallery } from '../designs/index.jsx'
import { Button, Container } from './ui.jsx'

export function Wordmark({ light = false, big = false }) {
  const { design } = useDesign()
  const mono = design.slug === 'grafit'
  return (
    <Link to="/" className="flex items-baseline gap-0.5 leading-none" aria-label={`${site.name} – főoldal`}>
      <span className={`${big ? 'text-4xl sm:text-5xl' : 'text-xl'} font-extrabold tracking-[0.06em] ${mono ? 'font-mono' : ''} ${light ? 'text-paper' : 'text-sage'}`}>GLP</span>
      <span className={`font-display ${big ? 'text-5xl sm:text-6xl' : 'text-2xl'} italic ${light ? 'text-clay-tint' : 'text-clay-dark'}`}>Most</span>
    </Link>
  )
}

const headerShell = {
  bar: 'sticky top-0 z-30 border-b border-line bg-paper/90 backdrop-blur',
  dark: 'sticky top-0 z-30 border-b border-sage bg-paper',
  pill: 'sticky top-3 z-30 px-3',
  masthead: 'border-b-2 border-ink bg-paper',
  glass: 'sticky top-0 z-30 border-b border-card/60 bg-card/50 backdrop-blur-xl',
  slab: 'sticky top-0 z-30 border-b-4 border-ink bg-paper',
}

const navLinkClass = {
  bar: (a) => `rounded-full px-4 py-2 text-[15px] font-medium transition ${a ? 'bg-sage-tint text-sage' : 'text-ink-soft hover:text-sage'}`,
  dark: (a) => `px-3 py-2 font-mono text-xs uppercase tracking-[0.18em] transition ${a ? 'text-sage' : 'text-ink-soft hover:text-ink'}`,
  pill: (a) => `rounded-full px-4 py-2 text-[15px] font-extrabold transition ${a ? 'bg-sage text-paper' : 'text-ink-soft hover:bg-sage-tint hover:text-sage'}`,
  masthead: (a) => `px-4 py-2 text-sm uppercase tracking-[0.14em] transition ${a ? 'text-clay underline underline-offset-8' : 'text-ink hover:text-clay'}`,
  glass: (a) => `rounded-full px-4 py-2 text-[15px] font-bold transition ${a ? 'bg-sage text-paper' : 'text-ink-soft hover:text-sage'}`,
  slab: (a) => `border-b-4 px-3 py-2 text-[15px] font-bold transition ${a ? 'border-sage text-sage' : 'border-transparent text-ink-soft hover:border-clay hover:text-ink'}`,
}

function Header() {
  const [open, setOpen] = useState(false)
  const { pathname, hash } = useLocation()
  const { design } = useDesign()
  const variant = design.header
  const showCta = !pathname.endsWith('/klinikai-informaciok')

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  const linkClass = ({ isActive }) => navLinkClass[variant](isActive)
  const masthead = variant === 'masthead'

  const menuButton = (
    <button
      type="button"
      className="flex h-11 w-11 items-center justify-center rounded-full border border-line lg:hidden"
      aria-expanded={open}
      aria-controls="mobile-menu"
      aria-label={open ? 'Menü bezárása' : 'Menü megnyitása'}
      onClick={() => setOpen((v) => !v)}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 8h16M4 16h16" />}
      </svg>
    </button>
  )

  const mobileMenu = open && (
    <nav id="mobile-menu" className="border-t border-line bg-paper lg:hidden" aria-label="Mobil menü" onClick={() => setOpen(false)}>
      <Container className="flex flex-col gap-1 py-4">
        {nav.map((item) => (
          <NavLink key={item.to} to={item.to} end={item.end} className={({ isActive }) => `rounded-2xl px-4 py-3.5 text-lg font-medium ${isActive ? 'bg-sage-tint text-sage' : 'text-ink'}`}>
            {item.label}
          </NavLink>
        ))}
        {showCta && <Button to={headerCta.to} className="mt-3">{headerCta.label} kitöltése</Button>}
      </Container>
    </nav>
  )

  if (masthead) {
    return (
      <header className={headerShell.masthead}>
        <Container className="flex flex-col items-center gap-4 py-6 sm:py-8">
          <div className="flex w-full items-center justify-between lg:justify-center">
            <Wordmark big />
            {menuButton}
          </div>
          <nav className="hidden w-full items-center justify-center gap-1 border-y border-ink py-2 lg:flex" aria-label="Fő menü">
            {nav.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.end} className={linkClass}>{item.label}</NavLink>
            ))}
            {showCta && <Button to={headerCta.to} className="ml-4 !min-h-[40px] !px-5">{headerCta.label}</Button>}
          </nav>
        </Container>
        {mobileMenu}
      </header>
    )
  }

  const inner = variant === 'pill' ? 'mt-3 rounded-full border border-line bg-card/90 px-4 shadow-[0_10px_40px_-20px_rgb(59_46_74/0.4)] backdrop-blur sm:px-6' : ''

  return (
    <header className={headerShell[variant]}>
      <Container className={`flex h-[72px] items-center justify-between ${inner}`}>
        <Wordmark />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Fő menü">
          {nav.map((item, i) => (
            <NavLink key={item.to} to={item.to} end={item.end} className={linkClass}>
              {variant === 'dark' && <span className="mr-1 opacity-60">{String(i + 1).padStart(2, '0')}/</span>}
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          {showCta && <Button to={headerCta.to} className="hidden !min-h-[44px] !px-5 text-[15px] sm:inline-flex">{headerCta.label}</Button>}
          {menuButton}
        </div>
      </Container>
      {mobileMenu}
    </header>
  )
}

function DesignLinks({ className = '' }) {
  const { design, pathname } = useDesignPath()
  return (
    <p className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-sm ${className}`}>
      <span className="opacity-70">{gallery.eyebrow}:</span>
      {designs.map((d) => (
        d.slug === design.slug
          ? <span key={d.slug} className="font-semibold underline underline-offset-4">{d.name}</span>
          : <RawLink key={d.slug} to={withBase(designBase(d), pathname)} className="hover:underline hover:underline-offset-4">{d.name}</RawLink>
      ))}
    </p>
  )
}

// Az aktuális oldal útvonala a design-prefix nélkül, hogy a változatok között ugyanazon az oldalon lehessen váltani.
export function useDesignPath() {
  const { design, base } = useDesign()
  const { pathname } = useLocation()
  const bare = base && pathname.startsWith(base) ? pathname.slice(base.length) || '/' : pathname
  return { design, base, pathname: bare }
}

function Footer() {
  const { design } = useDesign()
  const slab = design.slug === 'terrakotta'
  return (
    <footer className="bg-ink text-paper/80">
      {slab && <div className="terrakotta-stripe h-3" aria-hidden="true" />}
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <Wordmark light />
            <p className="mt-5 max-w-md">{footer.about}</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <ul className="space-y-2">
              {nav.map((item) => (
                <li key={item.to}><Link className="hover:text-paper" to={item.to}>{item.label}</Link></li>
              ))}
            </ul>
            <ul className="space-y-2">
              {footer.links.map((item) => (
                <li key={item.to + item.label}><Link className="hover:text-paper" to={item.to}>{item.label}</Link></li>
              ))}
              <li>{site.contactEmail}</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 space-y-3 border-t border-paper/15 pt-8 text-sm leading-relaxed text-paper/65">
          <p>{footer.medicalDisclaimer}</p>
          <p>{footer.emergency}</p>
          <p>{footer.copyright}</p>
          <DesignLinks className="pt-2" />
        </div>
      </Container>
    </footer>
  )
}

function Shell() {
  return (
    <div className="flex min-h-screen flex-col">
      <a href="#fo-tartalom" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-paper focus:px-4 focus:py-2">
        Ugrás a tartalomra
      </a>
      <Header />
      <main id="fo-tartalom" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default function Layout({ design = '' }) {
  return (
    <DesignProvider slug={design}>
      <Shell />
    </DesignProvider>
  )
}
