/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Include all your component files
  ],
  theme: {
    extend: {
      fontSize: {
        "top_heading": '1.8rem',
        "mid_heading":'1.1rem',
        "card_heading": '1.2rem',
        "element_heading":'0.8rem'
      },
      fontWeight: {
        "high_heading":'600',
        "top_heading":'500',
        "element_heading": '400',
        "small_element_heading":'300',
      },
      textColor: {
        "element_color": '#333333',
        "gray_color": '#BDBDBD',
        "dark_color": '#fff1f5',
        "dark_blue_color":'#a9c5da'
      },
      backgroundColor: {
        gray_color: '#f7f9fb',
        dark_color: '#1f2937',
        dark_color_new:'#334155',
        blue_color: '#B1D4E0',
        dark_blue_color:'#a9c5da'
      }
    },
    
  },
  darkMode: 'class', // Enables dark mode with a class

  plugins: [],
}