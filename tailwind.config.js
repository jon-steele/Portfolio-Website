/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ds: ['DM Serif Display'],
        nun: ['Nunito'],
      },
      backgroundImage: {
        'wave1': "url('../components/svg/wave1.svg')",
        'wave2': "url('../components/svg/wave2.svg')",
        'wave3': "url('../components/svg/wave3.svg')",
        'wave4': "url('../components/svg/wave4.svg')",
      }
    },
  },
  plugins: [],
}
