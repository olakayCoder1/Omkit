/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        headingFont : ['Tiro Devanagari Hindi', 'serif'],
        merriweather:[ 'Merriweather', 'serif'],
        noto: ['Noto Sans', 'sans-serif'],
      },
      textColor:{
        omkit : '#99b840',
        omkitLight: '#d1d5da'
      },
      backgroundColor:{
        omkitBg: '#99b840', 
        omkitBgHover: '#52c18c', 
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
