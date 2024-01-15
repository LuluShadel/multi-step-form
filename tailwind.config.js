/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        marineBlue : "#02295A",
        purplishBlue : "#473DFF",
        pastelBlue : "#ADBEFF",
        lightBlue : "#BFE2FD",
        strawberryRed : "#ED3548",
        magnolia :"#F0F6FF",
        lightGrey : "#D6D9E6",
        coolGrey : "#9699AB",

      },
      
    },
  },
  plugins: [],
}
