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
        'wave1': "url('../public/svg/wave1.svg')",
        'wave2': "url('../public/svg/wave2.svg')",
        'wave3': "url('../public/svg/wave3.svg')",
        'wave4': "url('../public/svg/wave4.svg')",
        'wave5': "url('../public/svg/wave5.svg')",
        'wave6': "url('../public/svg/wave6.svg')",
        'wave7': "url('../public/svg/wave7.svg')",
        'wave8': "url('../public/svg/wave8.svg')",
        'wave9': "url('../public/svg/wave9.svg')",
        'wave10': "url('../public/svg/wave10.svg')",
        'wave11': "url('../public/svg/wave11.svg')",
      }
    },
  },
  plugins: [],
}
