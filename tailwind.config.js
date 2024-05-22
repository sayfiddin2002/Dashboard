/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-blue' : '#3361FF',
        'text-grey' : '#7D8FB3',
        'text-green' : '#29CC39',
        'text-knock' : '#FFCB33',
        'text-viola': '#4D5E80',
        'gray': '#C3CAD9'
      },
      padding: {
        'p15': '15px 15px 15px 15px',
        'p10': '10px 10px 10px 10px',
        'padding': '30px, 20px, 0px, 30px',
        'padding-30': '30px 30px 30px 30px'

      },
      borderRadius: {
        'radius': '10px 10px 10px 10px'
      },

      width: {
        'width7': '7px'
      },

      height:{
        'height': '7px'
      },

      maxWidth: {
        'max-1600': '1600px'
      }
    },
  },
  plugins: [],
}