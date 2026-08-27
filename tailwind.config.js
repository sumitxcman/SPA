/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#0B0B0B',
          900: '#070707',
          800: '#0B0B0B',
          700: '#111111',
        },
        charcoal: {
          DEFAULT: '#151515',
          light: '#1F1F1F',
          muted: '#2A2A2A',
        },
        gold: {
          DEFAULT: '#C8A96B',
          royal: '#C8A96B',
          soft: '#D8C08A',
          deep: '#9B7E44',
          light: '#E6D5B0',
          dim: 'rgba(200, 169, 107, 0.15)',
        },
        ivory: {
          DEFAULT: '#F4F0E8',
          warm: '#F4F0E8',
          champagne: '#FAF8F3',
          dark: '#E2DBD0',
        },
        forest: {
          DEFAULT: '#18251F',
          deep: '#0F1A15',
          light: '#23382F',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'Manrope', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'royal': '0.35em',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.8', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
}
