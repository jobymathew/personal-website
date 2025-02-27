module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      transitionDuration: {
        '400': '400ms',
      },
      transitionProperty: {
        'width': 'width',
        'spacing': 'margin, padding',
      },
      colors: {
        primary: '#E97451',
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
};