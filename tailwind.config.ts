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
        'scissors': 'hsl(39, 89%, 49%)',
        'scissors-end': 'hsl(40, 84%, 53%)',
        'paper': 'hsl(230, 89%, 62%)',
        'paper-end': 'hsl(230, 89%, 65%)',
        'rock':'hsl(349, 71%, 52%)',
        'rock-end': 'hsl(349, 70%, 56%)',
        'lizard':'hsl(261, 73%, 60%)',
        'lizard-end': 'hsl(261, 72%, 63%)',
        'spock':'hsl(189, 59%, 53%)',
        'spock-end': 'hsl(189, 58%, 57%)',
        
      },
      fontFamily: {
        'barlow': ['Barlow Semi Condensed', 'sans-serif'],
      },
      boxShadow: {
        'inner-circle': 'inset 0 3px 0 1px rgb(0 0 0/0.2)',
        'outer-circle': 'inset 0 -8px 0 -3px rgb(0 0 0/0.3)'
      }
    },
  },
  plugins: [],
}
export default config
