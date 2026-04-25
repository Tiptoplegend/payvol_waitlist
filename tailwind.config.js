/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#5D87FF',
        primaryDark: '#2A5CEB',
        brand: '#011c61',
        muted: '#707070',
        dark: '#111827',
        default: {
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          900: '#0f172a',
          950: '#020617',
        },
      },
      container: {
        center: true,
        padding: '1rem',
      },
      zIndex: {
        999: '999',
      },
    },
  },
  plugins: [],
}
