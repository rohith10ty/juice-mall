/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      colors: {
        palette: {
          crimson: '#790D16',
          'crimson-dark': '#550910',
          'crimson-light': '#9B1B25',
          almond: '#E5D3AF',
          'almond-light': '#F0E3CA',
          'almond-dark': '#C9B58B',
          linen: '#F5EFE1',
          'linen-light': '#FBF8F2',
          mist: '#AEC4D4',
          'mist-light': '#C8D8E4',
          'mist-dark': '#8CA7BC',
        },
        brand: {
          primary: '#790D16',
          secondary: '#E5D3AF',
          bg: '#F5EFE1',
          accent: '#AEC4D4',
          dark: '#13090B',
          darkCard: '#1C0F12',
          darkSubtle: '#2A171B',
          darkBorder: '#3D2026',
        }
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'float-reverse': 'floatReverse 5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3.5s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'shimmer': 'shimmer 2.5s infinite',
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marqueeReverse 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(2deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(14px) rotate(-2deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.08)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      },
      boxShadow: {
        'glow-crimson': '0 0 35px -5px rgba(121, 13, 22, 0.45)',
        'glow-almond': '0 0 35px -5px rgba(229, 211, 175, 0.45)',
        'glow-mist': '0 0 35px -5px rgba(174, 196, 212, 0.45)',
        'premium-light': '0 20px 40px -15px rgba(121, 13, 22, 0.08), 0 0 1px 1px rgba(229, 211, 175, 0.3)',
        'premium-dark': '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 1px 1px rgba(229, 211, 175, 0.1)',
      }
    },
  },
  plugins: [],
}
