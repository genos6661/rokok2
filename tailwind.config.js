/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif']
      },
      colors: {
        sky: {
          light: '#EAF6FF',
          DEFAULT: '#AEE3F2',
          dark: '#7FCFE8'
        },
        mint: {
          light: '#EAFBF4',
          DEFAULT: '#B7EFD8',
          dark: '#8FE0BE'
        },
        orange: {
          light: '#FFEFDD',
          DEFAULT: '#FFB980',
          dark: '#FF9A4D'
        },
        peach: {
          light: '#FFF2EA',
          DEFAULT: '#FFD3BB',
          dark: '#FFB894'
        },
        lavender: {
          light: '#F3EEFF',
          DEFAULT: '#D6C6F5',
          dark: '#BFA3ED'
        },
        pinkpastel: {
          light: '#FFEFF7',
          DEFAULT: '#FBC7DF',
          dark: '#F7A8CB'
        },
        purplepastel: {
          light: '#F1ECFF',
          DEFAULT: '#C6B6F0',
          dark: '#A98DE6'
        }
      },
      borderRadius: {
        clay: '2rem',
        'clay-sm': '1.25rem',
        'clay-lg': '2.75rem'
      },
      boxShadow: {
        clay: '8px 8px 16px rgba(163, 150, 200, 0.25), -8px -8px 16px rgba(255,255,255, 0.7)',
        'clay-inset': 'inset 6px 6px 12px rgba(163, 150, 200, 0.2), inset -6px -6px 12px rgba(255,255,255,0.7)',
        'clay-hover': '12px 12px 24px rgba(163, 150, 200, 0.3), -12px -12px 24px rgba(255,255,255, 0.8)'
      },
      backgroundImage: {
        'clay-gradient': 'linear-gradient(135deg, #EAF6FF 0%, #F3EEFF 50%, #FFF2EA 100%)',
        'clay-gradient-2': 'linear-gradient(135deg, #FBC7DF 0%, #D6C6F5 100%)'
      }
    }
  },
  plugins: []
}
