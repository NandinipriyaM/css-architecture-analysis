/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  important: true,   // ensures utility classes beat global !important rules
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3b82f6',
          hover: '#2563eb'
        },
        secondary: '#6b7280',
        danger: '#ef4444',
        success: '#22c55e',
        warning: '#f59e0b',
        info: '#06b6d4'
      }
    }
  },
  plugins: []
}