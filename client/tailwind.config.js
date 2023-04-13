/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0D0D0D',
        secondary: '#ECECEC',
        tertiary: '#8D8C8D',
      },
      fontFamily: {
        primary: 'var(--font-syne)',
        secondary: 'var(--font-nunito-sans)'
      }
    },
  },
  plugins: [],
}

