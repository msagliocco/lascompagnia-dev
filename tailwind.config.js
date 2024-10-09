/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'warm-red': '#FF6B6B',
        'warm-yellow': '#FFD93D',
        'warm-orange': '#FF8C42',
        'warm-brown': '#6E4C41',
      },
    },
  },
  plugins: [],
}