// Design-változatok. Mindegyik egy véletlen sztringből (nanoid, lásd docs/designs.md) indult ki;
// a szövegek és az oldalszerkezet mindenhol ugyanazok (src/content, src/pages), csak a megjelenés más.
// Egy változat elérhető a /d/<slug>/ útvonal alatt (src/main.jsx), a tokenek a designs.css-ben.

function ArtDefault() {
  return (
    <svg viewBox="0 0 480 480" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#E4EDE9" /><stop offset="1" stopColor="#C9DAD4" /></linearGradient>
        <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#F5E6DF" /><stop offset="1" stopColor="#EBCFC4" /></linearGradient>
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

function ArtGrafit() {
  return (
    <svg viewBox="0 0 480 480" className="h-full w-full" aria-hidden="true">
      <defs>
        <radialGradient id="gg" cx=".5" cy=".5" r=".5"><stop offset="0" stopColor="#C8F561" stopOpacity=".55" /><stop offset="1" stopColor="#C8F561" stopOpacity="0" /></radialGradient>
      </defs>
      <circle cx="300" cy="200" r="200" fill="url(#gg)" />
      {Array.from({ length: 9 }, (_, i) => <line key={i} x1={40 + i * 50} y1="40" x2={40 + i * 50} y2="440" stroke="#2E333A" strokeWidth="1" />)}
      {Array.from({ length: 9 }, (_, i) => <line key={`h${i}`} x1="40" y1={40 + i * 50} x2="440" y2={40 + i * 50} stroke="#2E333A" strokeWidth="1" />)}
      <circle cx="300" cy="200" r="96" fill="none" stroke="#C8F561" strokeWidth="2" />
      <circle cx="300" cy="200" r="6" fill="#C8F561" />
      <rect x="90" y="290" width="150" height="150" fill="#1F2329" stroke="#F2F3F0" strokeWidth="2" />
      <path d="M90 440L240 290" stroke="#FF7A59" strokeWidth="3" />
      <text x="100" y="320" fill="#AEB3AD" fontFamily="JetBrains Mono Variable, monospace" fontSize="14">Gn8X0M</text>
      <text x="100" y="340" fill="#AEB3AD" fontFamily="JetBrains Mono Variable, monospace" fontSize="14">-2tAbH</text>
    </svg>
  )
}

function ArtPasztell() {
  return (
    <svg viewBox="0 0 480 480" className="h-full w-full" aria-hidden="true">
      <path d="M120 60c90-40 220-30 270 60s-10 230-110 260S60 390 40 290 30 100 120 60z" fill="#E9E2FF" />
      <path d="M170 120c70-30 170-10 190 60s-30 160-110 170-150-40-150-110 10-100 70-120z" fill="#FFE4DA" />
      <circle cx="330" cy="150" r="46" fill="#6D4AFF" />
      <circle cx="312" cy="140" r="8" fill="#FDF6FF" />
      <circle cx="348" cy="140" r="8" fill="#FDF6FF" />
      <path d="M312 166c10 12 26 12 36 0" stroke="#FDF6FF" strokeWidth="5" strokeLinecap="round" fill="none" />
      <circle cx="150" cy="330" r="70" fill="#FF8A65" opacity=".9" />
      <circle cx="150" cy="330" r="38" fill="#FDF6FF" />
      <circle cx="150" cy="330" r="14" fill="#6D4AFF" />
    </svg>
  )
}

function ArtFolyoirat() {
  return (
    <svg viewBox="0 0 480 480" className="h-full w-full" aria-hidden="true">
      <rect x="40" y="40" width="400" height="400" fill="none" stroke="#141414" strokeWidth="2" />
      <line x1="40" y1="120" x2="440" y2="120" stroke="#141414" strokeWidth="1" />
      <line x1="40" y1="128" x2="440" y2="128" stroke="#141414" strokeWidth="3" />
      {Array.from({ length: 14 }, (_, i) => <line key={i} x1="64" y1={160 + i * 20} x2={i % 3 === 2 ? 300 : 416} y2={160 + i * 20} stroke="#141414" strokeWidth="1.2" opacity=".55" />)}
      <text x="64" y="100" fill="#141414" fontFamily="Playfair Display Variable, serif" fontSize="56" fontStyle="italic">Z_XF</text>
      <rect x="320" y="300" width="96" height="96" fill="#B8321F" />
      <text x="64" y="420" fill="#B8321F" fontFamily="DM Sans Variable, sans-serif" fontSize="14" letterSpacing="4">JQPS_M_M</text>
    </svg>
  )
}

function ArtHullam() {
  return (
    <svg viewBox="0 0 480 480" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="hg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#D4EEF1" /><stop offset="1" stopColor="#0E6E7E" /></linearGradient>
      </defs>
      <circle cx="240" cy="240" r="200" fill="url(#hg)" />
      <path d="M40 260c50-40 100-40 150 0s100 40 150 0 70-30 100 0v200H40z" fill="#0A5461" opacity=".85" />
      <path d="M40 310c50-40 100-40 150 0s100 40 150 0 70-30 100 0" fill="none" stroke="#F2FAFB" strokeWidth="4" strokeLinecap="round" />
      <path d="M40 350c50-40 100-40 150 0s100 40 150 0 70-30 100 0" fill="none" stroke="#F2FAFB" strokeWidth="3" strokeLinecap="round" opacity=".7" />
      <circle cx="330" cy="130" r="40" fill="#F4A261" />
    </svg>
  )
}

function ArtTerrakotta() {
  return (
    <svg viewBox="0 0 480 480" className="h-full w-full" aria-hidden="true">
      <rect x="40" y="40" width="400" height="400" fill="#F3DFC9" />
      <circle cx="240" cy="220" r="120" fill="#C1502F" />
      <rect x="40" y="300" width="400" height="140" fill="#5B2A4F" />
      <path d="M40 300h400L240 200z" fill="#9E3E22" />
      {Array.from({ length: 7 }, (_, i) => <path key={i} d={`M${60 + i * 56} 440l28-40 28 40z`} fill="#F3DFC9" />)}
      {Array.from({ length: 6 }, (_, i) => <path key={`d${i}`} d={`M${88 + i * 56} 60l16 16-16 16-16-16z`} fill="#5B2A4F" />)}
    </svg>
  )
}

const pill = 'rounded-full'

export const designs = [
  {
    slug: '',
    seed: 'alap',
    name: 'Alap',
    swatches: ['#FBF8F3', '#2F5D5A', '#C58B79', '#2A2830'],
    header: 'bar',
    hero: 'split',
    Art: ArtDefault,
    cls: {
      button: { base: pill, primary: 'bg-sage text-paper hover:bg-sage-dark', light: 'bg-paper text-sage hover:bg-card', outline: 'border border-sage/40 text-sage hover:bg-sage-tint' },
      card: 'rounded-3xl border border-line bg-card',
      eyebrow: 'text-sm font-semibold uppercase tracking-[0.14em] text-clay-dark',
      eyebrowLight: 'text-sm font-semibold uppercase tracking-[0.14em] text-clay-tint',
      stepNum: 'font-display text-5xl text-clay/70',
      link: 'font-semibold text-sage underline underline-offset-4',
    },
    loadFonts: () => Promise.resolve(),
  },
  {
    slug: 'grafit',
    seed: 'Gn8X0M-2tAbH',
    name: 'Grafit',
    swatches: ['#121417', '#C8F561', '#FF7A59', '#F2F3F0'],
    header: 'dark',
    hero: 'bg',
    Art: ArtGrafit,
    cls: {
      button: { base: 'rounded-none font-mono uppercase tracking-wider text-sm', primary: 'bg-sage text-paper hover:bg-sage-dark', light: 'bg-paper text-sage hover:bg-sand', outline: 'border-2 border-ink text-ink hover:bg-ink hover:text-paper' },
      card: 'rounded-none border border-line bg-card',
      eyebrow: 'font-mono text-xs uppercase tracking-[0.2em] text-sage before:content-["//_"]',
      eyebrowLight: 'font-mono text-xs uppercase tracking-[0.2em] text-paper/80 before:content-["//_"]',
      stepNum: 'font-mono text-4xl text-sage',
      link: 'font-mono text-sm uppercase tracking-wider text-sage underline underline-offset-4',
    },
    loadFonts: () => Promise.all([import('@fontsource-variable/space-grotesk/index.css'), import('@fontsource-variable/jetbrains-mono/index.css')]),
  },
  {
    slug: 'pasztell',
    seed: 'pB6fPAlcpE_b',
    name: 'Pasztell',
    swatches: ['#FDF6FF', '#6D4AFF', '#FF8A65', '#E9E2FF'],
    header: 'pill',
    hero: 'center',
    Art: ArtPasztell,
    cls: {
      button: { base: `${pill} shadow-[0_10px_30px_-10px_rgb(109_74_255/0.6)]`, primary: 'bg-sage text-paper hover:bg-sage-dark', light: 'bg-paper text-sage hover:bg-card', outline: 'bg-card text-sage hover:bg-sage-tint shadow-none' },
      card: 'rounded-3xl bg-card shadow-[0_20px_60px_-30px_rgb(59_46_74/0.35)]',
      eyebrow: 'inline-block rounded-full bg-clay-tint px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-clay-dark',
      eyebrowLight: 'inline-block rounded-full bg-paper/20 px-3 py-1 text-xs font-extrabold uppercase tracking-wider text-paper',
      stepNum: 'inline-flex h-12 w-12 items-center justify-center rounded-full bg-clay text-xl font-extrabold text-paper',
      link: 'font-extrabold text-sage underline decoration-clay decoration-4 underline-offset-4',
    },
    loadFonts: () => import('@fontsource-variable/nunito/index.css'),
  },
  {
    slug: 'folyoirat',
    seed: 'Z_XFJQPs_m_m',
    name: 'Folyóirat',
    swatches: ['#F7F4EC', '#141414', '#B8321F', '#EFEAE0'],
    header: 'masthead',
    hero: 'split',
    Art: ArtFolyoirat,
    cls: {
      button: { base: 'rounded-none uppercase tracking-[0.12em] text-sm', primary: 'bg-sage text-paper hover:bg-clay', light: 'bg-paper text-ink hover:bg-sand', outline: 'border border-ink text-ink hover:bg-ink hover:text-paper' },
      card: 'rounded-none border-t-2 border-ink bg-card pt-6',
      eyebrow: 'font-display text-base italic text-clay before:content-["—_"]',
      eyebrowLight: 'font-display text-base italic text-paper/80 before:content-["—_"]',
      stepNum: 'font-display text-6xl italic text-clay',
      link: 'font-semibold text-ink underline decoration-clay underline-offset-4 hover:text-clay',
    },
    loadFonts: () => Promise.all([import('@fontsource-variable/playfair-display/index.css'), import('@fontsource-variable/dm-sans/index.css')]),
  },
  {
    slug: 'hullam',
    seed: 'wmfmmh09WA6h',
    name: 'Hullám',
    swatches: ['#F2FAFB', '#0E6E7E', '#F4A261', '#DFF1F4'],
    header: 'glass',
    hero: 'bg',
    Art: ArtHullam,
    cls: {
      button: { base: pill, primary: 'bg-gradient-to-r from-sage to-sage-dark text-paper hover:from-sage-dark hover:to-sage-dark', light: 'bg-paper text-sage hover:bg-card', outline: 'border border-sage/30 bg-card/60 text-sage backdrop-blur hover:bg-card' },
      card: 'rounded-3xl border border-card bg-card/70 shadow-[0_8px_40px_-20px_rgb(11_42_51/0.35)] backdrop-blur',
      eyebrow: 'text-sm font-bold uppercase tracking-[0.18em] text-sage',
      eyebrowLight: 'text-sm font-bold uppercase tracking-[0.18em] text-clay-tint',
      stepNum: 'font-display text-5xl font-extrabold text-sage/30',
      link: 'font-bold text-sage underline decoration-clay decoration-2 underline-offset-4',
    },
    loadFonts: () => import('@fontsource-variable/manrope/index.css'),
  },
  {
    slug: 'terrakotta',
    seed: 'o6TF_-qxVrMX',
    name: 'Terrakotta',
    swatches: ['#FBF1E6', '#C1502F', '#5B2A4F', '#F3DFC9'],
    header: 'slab',
    hero: 'split',
    Art: ArtTerrakotta,
    cls: {
      button: { base: 'rounded-lg border-2 border-ink shadow-[4px_4px_0_0_rgb(58_31_27)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_0_rgb(58_31_27)]', primary: 'bg-sage text-paper', light: 'bg-paper text-ink', outline: 'bg-card text-ink' },
      card: 'rounded-lg border-2 border-ink bg-card shadow-[6px_6px_0_0_rgb(228_205_184)]',
      eyebrow: 'text-sm font-bold uppercase tracking-[0.14em] text-clay before:content-["◆_"]',
      eyebrowLight: 'text-sm font-bold uppercase tracking-[0.14em] text-sand before:content-["◆_"]',
      stepNum: 'font-display text-5xl font-bold text-clay',
      link: 'font-bold text-sage underline decoration-2 underline-offset-4 hover:text-clay',
    },
    loadFonts: () => import('@fontsource-variable/roboto-slab/index.css'),
  },
]

export const defaultDesign = designs[0]
export const designBySlug = (slug) => designs.find((d) => d.slug === slug) ?? defaultDesign
export const designBase = (d) => (d.slug ? `/d/${d.slug}` : '')

export const gallery = {
  eyebrow: 'Design változatok',
  title: 'Ugyanaz a tartalom, öt másik ruhában',
  text: 'Öt véletlen sztringből indult, teljesen eltérő megjelenés – a szövegek és az oldalak szerkezete mindenhol azonos.',
  open: 'Megnézem',
  current: 'ezt nézed',
}
