/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {

      colors: {
        black: '#040501',
        green: '#50AB27',
        lightash: '#EAEAEA',
        ash: 'rgba(234, 234, 234, 0.65)',
        red: '#AB2727',
        yellowish: '#F5F5DB'
      }
    }
  },
  plugins: [],
}
