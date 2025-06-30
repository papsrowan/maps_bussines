/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'rgb(240 253 250)',
          100: 'rgb(204 251 241)',
          200: 'rgb(153 246 228)',
          300: 'rgb(94 234 212)',
          400: 'rgb(45 212 191)',
          500: 'rgb(20 184 166)',
          600: 'rgb(13 148 136)',
          700: 'rgb(15 118 110)',
          800: 'rgb(17 94 89)',
          900: 'rgb(19 78 74)',
          950: 'rgb(4 47 46)',
        },
        secondary: {
          50: 'rgb(239 246 255)',
          100: 'rgb(219 234 254)',
          200: 'rgb(191 219 254)',
          300: 'rgb(147 197 253)',
          400: 'rgb(96 165 250)',
          500: 'rgb(59 130 246)',
          600: 'rgb(37 99 235)',
          700: 'rgb(29 78 216)',
          800: 'rgb(30 64 175)',
          900: 'rgb(30 58 138)',
          950: 'rgb(23 37 84)',
        },
        accent: {
          50: 'rgb(255 251 235)',
          100: 'rgb(254 243 199)',
          200: 'rgb(253 230 138)',
          300: 'rgb(252 211 77)',
          400: 'rgb(251 191 36)',
          500: 'rgb(245 158 11)',
          600: 'rgb(217 119 6)',
          700: 'rgb(180 83 9)',
          800: 'rgb(146 64 14)',
          900: 'rgb(120 53 15)',
          950: 'rgb(69 26 3)',
        },
      },
      keyframes: {
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 }
        },
        scaleIn: {
          from: { transform: 'scale(0.9)', opacity: 0 },
          to: { transform: 'scale(1)', opacity: 1 }
        }
      },
      animation: {
        shimmer: 'shimmer 2s infinite',
        fadeIn: 'fadeIn 0.5s ease-out',
        scaleIn: 'scaleIn 0.5s ease-out',
      }
    },
  },
  plugins: [],
};