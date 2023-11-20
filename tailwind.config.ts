import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'score': 'hsl(var(--text-color-score))',
        'points': 'hsl(229, 25%, 31%)',
        'header-outline': 'hsl(217, 16%, 45%)',
        'scissors-light-yellow': 'hsl(40, 84%, 53%)',
        'scissors-yellow': 'hsl(39, 89%, 49%)',
      },
      fontFamily: {
        'barlow': ['Barlow Semi Condensed', 'sans-serif'],
      },
      boxShadow: {
        'inner-circle': 'inset 0 2px 0 3px rgb(0 0 0/0.3)',
        'outer-circle': 'inset 0 -8px 0 -3px rgb(0 0 0/0.3)'
      }
    },
  },
  plugins: [],
}
export default config
