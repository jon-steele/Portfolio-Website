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
        'wave1': "url('/svg/wave1.svg')",
        'wave2': "url('/svg/wave2.svg')",
        'wave3': "url('/svg/wave3.svg')",
        'wave4': "url('/svg/wave4.svg')",
        'wave5': "url('/svg/wave5.svg')",
        'wave6': "url('/svg/wave6.svg')",
        'wave7': "url('/svg/wave7.svg')",
        'wave8': "url('/svg/wave8.svg')",
        'wave9': "url('/svg/wave9.svg')",
        'wave10': "url('/svg/wave10.svg')",
        'wave11': "url('/svg/wave11.svg')",
      }
    },
  },
  plugins: [],
}
