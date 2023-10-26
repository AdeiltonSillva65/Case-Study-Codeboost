import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    backgroundImage: {
      'img_bg_hero': "url('../assets/bg-hero.jpg')",
    },
    extend: {
      'primary-blue': '#106eb0',
      'primary-orange': '#EC7000',
      'primary-gray':'#33303E',
      'second-gray': '#4E4b59',
      'gray-phone': '#f4f4f4',
      'txt-gray': '#7a7786',
      'opacity-gray': 'rgba(100, 80, 57, 0.1'
    },
  },
  plugins: [],
}
export default config
