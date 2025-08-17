/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: {
          normal: '#0b132a',
          dark: '#0d1025',
        },

        secondary: '#4f5665',

        accent: {
          normal: '#f53838',
          dark: '#f53855',
          light: 'rgba(255, 236, 236, 1)',
          blur: 'rgba(245, 56, 56, 0.35)',
        },
      },

      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },

      fontSize: {
        'fluid-xl': 'clamp(1.875rem, 2.6333cqi + 0.5417rem, 3.125rem)', // 50px
        'fluid-lg': 'clamp(1.525rem, 0.5083rem + 2.1667cqi, 2.1875rem)', // 35px
        'fluid-md2': 'clamp(1.25rem, 1rem + 1vw, 1.5625rem)', // 25px
        'fluid-md1': 'clamp(1.125rem, 0.975rem + 0.75vw, 1.25rem)', // 20px
        'fluid-md': 'clamp(1rem, 0.925rem + 0.5vw, 1.125rem)', // 18px
        'fluid-base': 'clamp(0.9375rem, 0.8708rem + 0.1667cqi, 1rem)', // 16px
        'fluid-xs': 'clamp(0.8rem, 0.825rem + 0.2vw, 0.875rem)', // 14px
      },

      boxShadow: {
        'card': '0.5px 10px 20px #0d1025'
      },
    },

    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        xs: '1rem',
        sm: '1.2rem',
        md: '1.2rem',
        lg: '1.3rem',
      },
      screens: {
        '2xl': '1400px',
        xl: '1200px',
        lg: '1000px',
        md: '768px',
        sm: '600px',
      },
    },
  },
  plugins: [],
};

