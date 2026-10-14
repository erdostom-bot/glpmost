/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        paper: '#FBF8F3',
        sand: '#F2EBE1',
        ink: { DEFAULT: '#2A2830', soft: '#5B5963' },
        sage: { DEFAULT: '#2F5D5A', dark: '#244846', tint: '#E4EDE9' },
        clay: { DEFAULT: '#C58B79', dark: '#A86F5E', tint: '#F5E6DF' },
        line: '#E6DED2',
      },
      fontFamily: {
        display: ['"Fraunces Variable"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Figtree Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: { prose: '38rem' },
    },
  },
  plugins: [],
}
