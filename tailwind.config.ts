/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './sanity/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        main_buttons_1: '#508D4E',
        nav_color_1: '#FFB000',
        green: {
          50: '#30AF5B',
          90: '#292C27'
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414'
        },
        orange: {
          50: '#FF814C'
        },
        blue: {
          70: '#021639'
        },
        yellow: {
          50: '#FEC601'
        },
        gold: {
          50: '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
          800: '#92400E',
          900: '#78350F'
        }
      },
      backgroundImage: {
        'bg-img-1': "url('/img-1.png')",
        'bg-img-2': "url('/img-2.png')",
        'feature-bg': "url('/feature-bg.png')",
        pattern: "url('/pattern.png')",
        'pattern-2': "url('/pattern-bg.png')"
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px'
      },
      maxWidth: {
        '10xl': '1512px'
      },
      borderRadius: {
        '5xl': '40px'
      }
    }
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography')
  ],
  corePlugins: {
    lineClamp: true
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#30AF5B',
          'primary-focus': '#292C27'
        }
      }
    ]
  }
}
