/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#47E865',
          'green-dark': '#2BC74A',
          'green-soft': '#E8FBEC',
          blue: '#2C3DBF',
          'blue-dark': '#1F2C99',
          'blue-soft': '#E8EBFB',
        },
        ink: '#0E1330',
        muted: '#5B6080',
        surface: '#F6F8FA',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'ui-sans-serif', 'system-ui'],
      },
      maxWidth: {
        container: '1200px',
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        soft: '0 4px 24px rgba(14, 19, 48, 0.06)',
        card: '0 8px 32px rgba(14, 19, 48, 0.08)',
        glow: '0 12px 40px rgba(71, 232, 101, 0.25)',
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out',
        'fade-up': 'fadeUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
