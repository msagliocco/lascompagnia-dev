/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'rich-black': '#03071e',
        'chocolate-cosmos': '#370617',
        'rosewood': '#6a040f',
        'penn-red': '#9d0208',
        'engineering-orange': '#d00000',
        'sinopia': '#dc2f02',
        'persimmon': '#e85d04',
        'princeton-orange': '#f48c06',
        'orange-web': '#faa307',
        'selective-yellow': '#ffba08',
        'text-primary': '#ffffff',
        'text-secondary': '#e5e5e5',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(45deg, #ffba08, #faa307)',
        'gradient-secondary': 'linear-gradient(45deg, #dc2f02, #d00000)',
      },
    },
  },
  plugins: [],
}