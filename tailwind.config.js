/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        google: {
          blue: {
            50: '#e8f0fe',
            100: '#c5dbf9',
            200: '#9ec4f5',
            300: '#75acf0',
            400: '#5499ec',
            500: '#1a73e8',
            600: '#155bb5',
            700: '#0f4382',
            800: '#0a2c56',
            900: '#04152b',
          },
          green: {
            50: '#e6f4ea',
            100: '#c4ebd0',
            200: '#9fdcb0',
            300: '#75cc8d',
            400: '#4ebd6b',
            500: '#1e8e3e',
            600: '#137333',
            700: '#0b5624',
            800: '#053916',
            900: '#011c08',
          },
          yellow: {
            50: '#fef7e0',
            100: '#feebc1',
            200: '#fddb9b',
            300: '#fdca72',
            400: '#fbc14f',
            500: '#f9ab00',
            600: '#e37400',
            700: '#b05900',
            800: '#803e00',
            900: '#4e2300',
          },
          red: {
            50: '#fce8e6',
            100: '#fad2cf',
            200: '#f7a8a2',
            300: '#f27b72',
            400: '#ea5347',
            500: '#d93025',
            600: '#b0120a',
            700: '#8c0c05',
            800: '#680802',
            900: '#440400',
          },
          gray: {
            50: '#f8f9fa',
            100: '#f1f3f4',
            200: '#e8eaed',
            300: '#dadce0',
            400: '#bdc1c6',
            500: '#9aa0a6',
            600: '#70757a',
            700: '#5f6368',
            800: '#3c4043',
            900: '#202124',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'google': '0 1px 2px 0 rgba(60,64,67,0.3), 0 1px 3px 1px rgba(60,64,67,0.15)',
        'google-hover': '0 1px 3px 0 rgba(60,64,67,0.3), 0 4px 8px 3px rgba(60,64,67,0.15)',
        'google-elevation': '0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.20)',
      }
    },
  },
  plugins: [],
}
