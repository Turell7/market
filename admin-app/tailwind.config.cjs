/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
    require('@tailwindcss/line-clamp'),
  ],
  daisyui: {
    styled: true,
    themes: ['fantasy'],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'false',
  },
}
