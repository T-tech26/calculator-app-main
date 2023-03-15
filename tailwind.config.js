/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    screens: {
      'sm' : '500px',
      'md' : '769px',
      'lg' : '1024px',
      'xl' : '1280px',
      '2xl' : '1440px',
    },
    extend: {
      colors: {
        'text': 'hsl(var(--text))',
        'text-btn': 'hsl(var(--text-btn))',
        'text-toggle': 'hsl(var(--text-toggle))',
        'text-a': 'hsl(228, 45%, 44%)',
        'radio-color': 'hsl(var(--radio-color))'
      },

      backgroundColor: {
        'main-bg': 'hsl(var(--main-bg))',
        'keypad-bg': 'hsl(var(--keypad-bg))',
        'screen-bg': 'hsl(var(--screen-bg))',
  
        'key-bg': 'hsl(var(--key-bg))',
        'key-hover': 'hsl(var(--key-hover))',
  
        'key-toggle-bg': 'hsl(var(--key-toggle-bg))',
        'key-toggle-hover': 'hsl(var(--key-toggle-hover))',
  
        'key-btn-bg': 'hsl(var(--key-btn-bg))',
        'key-btn-hover': 'hsl(var(--key-btn-hover))',

        'radio-color': 'hsl(var(--radio-color))'
      },
  
      boxShadow: {
        'key-shadow': '0px 5px 2px 0px hsl(var(--key-shadow))',
  
        'key-toggle-shadow': '0px 5px 2px 0px hsl(var(--key-toggle-shadow))',

        'key-btn-shadow': '0px 5px 2px 0px hsl(var(--key-btn-shadow))',
      },
    },
  },
  plugins: [],
}
