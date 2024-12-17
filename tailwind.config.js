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
          light: '#f5f5f5', // warna background light
          dark: '#121212', // warna background dark
          textDark: '#333333', // warna teks dark
          textLight: '#f5f5f5' 
        }
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
