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
        sans: ['Inter', 'sans-serif'],
        cursive: ['Dancing Script', 'cursive'],
      },
      colors: {
        primary: '#A78BFA', // purple-400
        'primary-dark': '#8B5CF6', // purple-500
        'primary-light': '#C4B5FD', // purple-300
        'deep-purple': {
          900: '#1E1B4B',
          800: '#312E81',
          700: '#4338CA',
        },
        lavender: '#E6E6FA',
        cyan: '#00FFFF',
      },
    },
  },
  plugins: [],
}