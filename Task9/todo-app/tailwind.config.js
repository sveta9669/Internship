/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      // width: {
      //   '65p': '65%', 
      // },
      backgroundImage: {
         'blueBackground': "url('./src/public/blueBackground.jpg')"
        }
    },
  },
  plugins: [],
}

