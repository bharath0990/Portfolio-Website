/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: '#08080c',
          card: '#101017',
          cardHover: '#171722',
          border: 'rgba(255, 255, 255, 0.08)',
          borderGlow: 'rgba(251, 70, 23, 0.4)',
          orange: '#fb4617',
          orangeGlow: '#ff6238',
          blue: '#3b82f6',
          purple: '#8b5cf6',
          textMuted: '#8b8b9e',
        },
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        dark: {
          100: '#1a1a24',
          200: '#12121a',
          300: '#0a0a0f',
          400: '#050508',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"Fragment Mono"', 'monospace'],
        heading: ['"Space Grotesk"', 'Inter', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 15s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};