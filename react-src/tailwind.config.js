/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Artistic color palette with warm, sophisticated tones
        cream: {
          50: '#fdfcf9',
          100: '#f9f6f0',
          200: '#f5ede0',
          300: '#ede3d1',
          400: '#e5d9c2',
          500: '#dccfb3',
        },
        charcoal: {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#1a1a1a',
        },
        terracotta: {
          50: '#fef6f5',
          100: '#fde9e6',
          200: '#fad7d1',
          300: '#f6b9ad',
          400: '#f08f7d',
          500: '#e56b52',
          600: '#d44d35',
          700: '#b13e2a',
          800: '#923626',
          900: '#793125',
        },
        sage: {
          50: '#f6f7f4',
          100: '#e3e6de',
          200: '#c7ccbd',
          300: '#a7ae95',
          400: '#8b9372',
          500: '#717a5b',
          600: '#596148',
          700: '#464d3b',
          800: '#3a3f32',
          900: '#32362b',
        },
        primary: '#1a1a1a',
        secondary: '#666666',
        accent: '#e56b52',
      },
      fontFamily: {
        sans: ['Inter', 'Pretendard', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        heading: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['IBM Plex Mono', 'Courier New', 'monospace'],
      },
      fontSize: {
        'display': ['5rem', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'heading': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'draw': 'draw 2s ease-in-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        draw: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [],
}

