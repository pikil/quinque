/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--primary) / <alpha-value>)',
        color1: 'rgb(var(--color1) / <alpha-value>)',
        color2: 'rgb(var(--color2) / <alpha-value>)',
        faded: 'rgb(var(--faded) / <alpha-value>)'
      },
      screens: {
        'sm': '394px',
        'md': '640px',
        'lg': '768px',
        'xl': '1024px',
        '2xl': '1280px'
      }
    }
  },
  plugins: []
}

