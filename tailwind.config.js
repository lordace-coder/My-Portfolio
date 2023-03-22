/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

module.exports = {
  mode:'jit',
  content:  [
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
    "./public/**/*.{html,js}"
  ],

  theme: {
    extend: {},
  },
  plugins: [
 
      plugin(function({ addBase, config }) {
        addBase({
          'h1': { fontSize: config('theme.fontSize.6xl') },
          'h2': { fontSize: config('theme.fontSize.5xl') },
          'h3': { fontSize: config('theme.fontSize.4xl') },
          'h4': { fontSize: config('theme.fontSize.3xl') },
          'h5': { fontSize: config('theme.fontSize.2xl') },
        })
      })
  ],

}
