/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F8F4EC',
        beige: {
          50: '#FAF7F2',
          100: '#F5EFE6',
          200: '#E8DFD0',
          300: '#D4C4A8',
          400: '#C9B896',
          500: '#B4A078',
          600: '#9A8A5E',
        },
        gold: {
          50: '#FFF9E6',
          100: '#FFF0C4',
          200: '#FFE08A',
          300: '#FFD054',
          400: '#F5B83D',
          500: '#E6A020',
          600: '#CC8A0A',
        },
        orange: {
          50: '#FFF8F0',
          100: '#FFEAD4',
          200: '#FFD4A8',
          300: '#FFB878',
          400: '#F5A050',
          500: '#E88830',
          600: '#D07020',
        },
        brown: {
          50: '#FAF8F6',
          100: '#F0EBE4',
          200: '#E0D5C8',
          300: '#C8B8A4',
          400: '#A89880',
          500: '#786A58',
          600: '#5A5048',
          700: '#3A3430',
          800: '#2A2420',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};
