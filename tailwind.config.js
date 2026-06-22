/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0FFF50',
        secondary: '#FF3D00',
        accent: '#00E5FF',
        background: '#0A0A0A',
        surface: '#1A1A1A',
        text: '#F5F5F5',
        'text-muted': '#888888',
        border: '#2A2A2A',
      },
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        body: ['IBM Plex Sans', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'fade-up-delay': 'fade-up-delay 1.5s ease-out forwards',
        'fade-up-delay-2': 'fade-up-delay-2 2s ease-out forwards',
        'pulse-subtle': 'pulse-subtle 2s ease-in-out infinite',
        'scroll-left': 'scroll-left 30s linear infinite',
        'scroll-right': 'scroll-right 30s linear infinite',
      },
      keyframes: {
        'fade-up': {
          'from': {
            opacity: '0',
            transform: 'translateY(2rem)',
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-up-delay': {
          '0%, 20%': {
            opacity: '0',
            transform: 'translateY(2rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-up-delay-2': {
          '0%, 40%': {
            opacity: '0',
            transform: 'translateY(2rem)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'pulse-subtle': {
          '0%, 100%': {
            transform: 'scale(1)',
          },
          '50%': {
            transform: 'scale(1.02)',
          },
        },
        'scroll-left': {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-50%)',
          },
        },
        'scroll-right': {
          '0%': {
            transform: 'translateX(-50%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
      },
    },
  },
  plugins: [],
}
