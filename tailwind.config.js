/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        color: {
          100: '#333333',
          200: '#5c5c5c'
        }
      },
      backgroundColor: {
        'light': '#f5f5f5'
      },
    },
  },
  plugins: [],
}
