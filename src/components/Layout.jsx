import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { footer, headerCta, nav, site } from '../content/site.js'
import { Button, Container } from './ui.jsx'

export function Wordmark({ light = false }) {
  return (
    <Link to="/" className="flex items-baseline gap-0.5 leading-none" aria-label={`${site.name} – főoldal`}>
      <span className={`text-xl font-extrabold tracking-[0.06em] ${light ? 'text-paper' : 'text-sage'}`}>GLP</span>
      <span className={`font-display text-2xl italic ${light ? 'text-clay-tint' : 'text-clay-dark'}`}>Most</span>
    </Link>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView()
    } else {
      window.scrollTo(0, 0)
    }
  }, [pathname, hash])

  const linkClass = ({ isActive }) =>
    `rounded-full px-4 py-2 text-[15px] font-medium transition ${isActive ? 'bg-sage-tint text-sage' : 'text-ink-soft hover:text-sage'}`

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/90 backdrop-blur">
      <Container className="flex h-[72px] items-center justify-between">
        <Wordmark />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Fő menü">
          {nav.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className={linkClass}>{item.label}</NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button to={headerCta.to} className="hidden !min-h-[44px] !px-5 text-[15px] sm:inline-flex">{headerCta.label}</Button>
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
        </div>
      </Container>
      {open && (
        <nav id="mobile-menu" className="border-t border-line bg-paper lg:hidden" aria-label="Mobil menü" onClick={() => setOpen(false)}>
          <Container className="flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.end} className={({ isActive }) => `rounded-2xl px-4 py-3.5 text-lg font-medium ${isActive ? 'bg-sage-tint text-sage' : 'text-ink'}`}>
                {item.label}
              </NavLink>
            ))}
            <Button to={headerCta.to} className="mt-3">{headerCta.label} kitöltése</Button>
          </Container>
        </nav>
      )}
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-ink text-paper/80">
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
        </div>
      </Container>
    </footer>
  )
}

export default function Layout() {
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
