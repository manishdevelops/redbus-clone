/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        customHSL: 'hsl(357, 64%, 58%)',
        customBg: '#f8faff',
        customBg1: 'hsl(357, 64%, 58%)',
        customBg3: '#233058',
        customBg4: '#f7f7f7',
      },
      lineHeight: {
        '14': '2.7rem',
      },
    },
  },
  plugins: [],
}

