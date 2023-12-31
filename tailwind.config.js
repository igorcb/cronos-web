/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.tsx"
  ],
  theme: {
    extend: {
      colors: {
        primaryLight: 'hsla(212,100%,85%,1)',
        primary: 'hsla(212,100%,65%,1)',
        primaryDark: 'hsla(212,100%,25%,1)',
      }
    },
  },
  plugins: [],
}

