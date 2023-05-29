/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': '#4C636F',
        'secondary': '#364C58',
        'bg-color': '#FFCCB6',
        'footer-color': '#FF9D80',

      },
      fontFamily: {
        'Lato': ['Lato'],
        'Josefin': ['"Josefin Sans"']

        // Ensure fonts with spaces have " " surrounding it.
      },
    },

  },
  plugins: [],
}
