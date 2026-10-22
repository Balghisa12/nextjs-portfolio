/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#080808',
        surface: '#121212',
        elevated: '#1B1B1B',
        hover: '#252525',
        ink: '#F5F5F5',
        muted: '#B3B3B3',
        accent: '#1ED760',
      },
      fontFamily: {
        sans: ['"Inter Variable"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
