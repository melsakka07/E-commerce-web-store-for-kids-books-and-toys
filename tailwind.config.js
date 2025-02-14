/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          50: '#F8E0EA',  // Lightest pink
          100: '#FACCD9', // Light pink
          200: '#F78FA9', // Medium-light pink
          300: '#FE80A2', // Medium pink
          400: '#EC5182', // Medium-dark pink
          500: '#B12051', // Dark pink
        }
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pageTransition: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        scaleUp: {
          '0%': { 
            transform: 'scale(0.95)',
            opacity: '0'
          },
          '100%': { 
            transform: 'scale(1)',
            opacity: '1'
          }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in',
        slideDown: 'slideDown 0.5s ease-out',
        slideUp: 'slideUp 0.5s ease-out',
        pageTransition: 'pageTransition 0.5s ease-out',
        scaleUp: 'scaleUp 0.5s ease-out',
      },
    },
  },
  plugins: [],
}
