/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#34C759', // PayVol Green
        primaryHover: '#2eb350',
        bgDark: '#050B17', // Dark Mode Background
        bgCard: '#0F172A', // Cards
        bgCardHover: '#1e293b',
        borderDark: '#1e293b',
        textMain: '#ffffff',
        textMuted: '#94a3b8',
        navyBlue: '#0B1F3A',
        bgLight: '#f8fafc',
        bgLightCard: '#ffffff',
        bgLightCardHover: '#f1f5f9',
        borderLight: '#e2e8f0',
        textLight: '#0f172a',
        textLightMuted: '#475569',
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0,0,0,.3), 0 1px 2px -1px rgba(0,0,0,.3)',
        'card-hover': '0 8px 25px -5px rgba(0,0,0,.4), 0 0 0 1px rgba(255,255,255,.06)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
