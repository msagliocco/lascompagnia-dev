/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#121212',
        'dark-surface': '#1E1E1E',
        'spotlight': '#FFD700',
        'curtain-red': '#8B0000',
        'stage-wood': '#8B4513',
        'text-primary': '#FFFFFF',
        'text-secondary': '#CCCCCC',
      },
      textColor: {
        'gradient-primary': 'linear-gradient(45deg, #FFD700, #FFA500)',
        'gradient-secondary': 'linear-gradient(45deg, #FF6347, #FF4500)',
      },
    },
  },
  plugins: [],
}