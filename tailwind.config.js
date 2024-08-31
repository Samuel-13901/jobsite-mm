/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'homeBg':'#68d5851c',
        'primary': '#473BF0',
        'category_bg':'#161C2D',
        'explore_btn':'#68D585',
        'jobs_nav':'#F4F7FA',
        'full-time':'#68D585',
        'part-time':'#F64B4B',
        'envelope':'#68D585',
        'dropMenu':'#d5851c'
      },
      fontFamily:{
        'rubik':['Rubik'],
        'poppins':['Poppins'],
        'montserrat':['Montserrat'],
      },
      fontSize:{
        'sm':['12px'],
        'md':['15px'],
        'lg':['30px'],
      }
    },
  },
  plugins: [],
}



