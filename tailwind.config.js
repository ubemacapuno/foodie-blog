/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './views/dishes.ejs',
    './views/edit.ejs',
    './views/index.ejs',
    './views/ingredients.ejs',
    './views/login.ejs',
    './views/signup.ejs',
    './views/partials/footer.ejs',
    './views/partials/header.ejs',
    './views/partials/nav.ejs',
    './src/**/*.{html,js}',
  ],
  theme: {
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans"'],
    },
    // set breakpoints for screens:
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      //custom colors (similar to CSS variables):
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}