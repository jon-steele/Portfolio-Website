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
        'wave5': "url('../components/svg/wave5.svg')",
        'wave6': "url('../components/svg/wave6.svg')",
        'wave7': "url('../components/svg/wave7.svg')",
        'wave8': "url('../components/svg/wave8.svg')",
        'wave9': "url('../components/svg/wave9.svg')",
        'wave10': "url('../components/svg/wave10.svg')",
        'wave11': "url('../components/svg/wave11.svg')",
      }
    },
  },
  plugins: [],
}
