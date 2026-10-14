import { createContext, useContext, useEffect } from 'react'
import { Link as RouterLink, NavLink as RouterNavLink } from 'react-router-dom'
import { defaultDesign, designBase, designBySlug } from './index.jsx'

const DesignContext = createContext({ design: defaultDesign, base: '' })

export function DesignProvider({ slug = '', children }) {
  const design = designBySlug(slug)
  const base = designBase(design)

  useEffect(() => {
    const html = document.documentElement
    if (design.slug) html.dataset.design = design.slug
    else delete html.dataset.design
    design.loadFonts()
    return () => {
      delete html.dataset.design
    }
  }, [design])

  return <DesignContext.Provider value={{ design, base }}>{children}</DesignContext.Provider>
}

export function useDesign() {
  return useContext(DesignContext)
}

// Belső hivatkozás a design-prefix megtartásával: '/folyamat' -> '/d/<slug>/folyamat'.
export function withBase(base, to) {
  if (typeof to !== 'string' || !to.startsWith('/') || to.startsWith('/d/')) return to
  if (!base) return to
  return to === '/' ? base : base + to
}

// Nyers link prefixelés nélkül – a design-változatok közti váltáshoz.
export const RawLink = RouterLink

export function Link({ to, ...rest }) {
  const { base } = useDesign()
  return <RouterLink to={withBase(base, to)} {...rest} />
}

export function NavLink({ to, ...rest }) {
  const { base } = useDesign()
  return <RouterNavLink to={withBase(base, to)} {...rest} />
}
