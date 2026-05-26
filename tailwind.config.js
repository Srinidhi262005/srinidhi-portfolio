/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0a0a0f',
          50: '#12121a',
          100: '#16161f',
          200: '#1c1c28',
        },
        accent: {
          cyan: '#22d3ee',
          violet: '#8b5cf6',
          blue: '#3b82f6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow':
          'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(34, 211, 238, 0.15), transparent)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      boxShadow: {
        glow: '0 0 40px rgba(34, 211, 238, 0.15)',
        'glow-violet': '0 0 40px rgba(139, 92, 246, 0.15)',
        glass: '0 8px 32px rgba(0, 0, 0, 0.37)',
      },
    },
  },
  plugins: [],
};
