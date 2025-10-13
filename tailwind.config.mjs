/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'urban': {
          'black': '#0a0a0a',
          'gray': '#1a1a1a',
          'white': '#ffffff',
          'accent': '#ff6b35',
          'secondary': '#00d4ff'
        }
      },
      fontFamily: {
        'urban': ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}

