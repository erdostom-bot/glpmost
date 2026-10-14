/** @type {import('tailwindcss').Config} */
// A színek, betűk és lekerekítések CSS-változókból jönnek, így a /d/<slug>/ design-változatok
// ugyanazokkal a komponensekkel és szövegekkel, de teljesen más megjelenéssel futnak (src/designs/).
const v = (name) => `rgb(var(${name}) / <alpha-value>)`

export default {
  content: ['./src/**/*.{js,jsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        paper: v('--c-paper'),
        sand: v('--c-sand'),
        card: v('--c-card'),
        ink: { DEFAULT: v('--c-ink'), soft: v('--c-ink-soft') },
        sage: { DEFAULT: v('--c-sage'), dark: v('--c-sage-dark'), tint: v('--c-sage-tint') },
        clay: { DEFAULT: v('--c-clay'), dark: v('--c-clay-dark'), tint: v('--c-clay-tint') },
        line: v('--c-line'),
      },
      borderRadius: {
        '2xl': 'var(--r-2xl)',
        '3xl': 'var(--r-3xl)',
        full: 'var(--r-full)',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
      maxWidth: { prose: '38rem' },
    },
  },
  plugins: [],
}
