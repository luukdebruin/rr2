import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
		extend: {
      fontFamily: {
        serif: ['var(--font-calendas)'],
        sans: ['var(--font-montreal)'],
      },
    },
  },
  plugins: [],
}
export default config
