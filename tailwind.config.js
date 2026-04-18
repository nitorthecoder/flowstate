/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        flow: {
          indigo: '#6C3FC8',
          blue: '#1A56DB',
          soft: '#F8F9FA',
        }
      }
    },
  },
  plugins: [],
}
