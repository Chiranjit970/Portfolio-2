/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          700: '#1a1a2e',
          800: '#16161e',
          900: '#0f0f1a',
        },
        accent: {
          indigo: {
            light: '#818cf8',
            DEFAULT: '#6366f1',
            dark: '#4f46e5',
          },
          purple: {
            light: '#c084fc',
            DEFAULT: '#a855f7',
            dark: '#9333ea',
          },
          pink: {
            light: '#f9a8d4',
            DEFAULT: '#ec4899',
            dark: '#db2777',
          },
        },
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #1a1a2e 0%, #16161e 50%, #0f0f1a 100%)',
        'gradient-light': 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 50%, #cbd5e1 100%)',
        'gradient-indigo-purple': 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
        'gradient-purple-pink': 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
        'gradient-indigo-pink': 'linear-gradient(135deg, #6366f1 0%, #ec4899 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Fira Code', 'Monaco', 'Consolas', 'monospace'],
        display: ['Poppins', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-lg': '0 15px 45px 0 rgba(31, 38, 135, 0.45)',
        'glow-indigo': '0 0 20px rgba(99, 102, 241, 0.5)',
        'glow-purple': '0 0 20px rgba(168, 85, 247, 0.5)',
        'glow-pink': '0 0 20px rgba(236, 72, 153, 0.5)',
        'inner-glass': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.06)',
      },
      backdropBlur: {
        xs: '2px',
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
}
