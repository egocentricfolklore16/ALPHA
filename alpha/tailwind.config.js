/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: {
          100: 'oklch(95.4% .038 75.164)',
          400: 'oklch(75% .183 55.934)',
          500: 'oklch(70.5% .213 47.604)',
          600: 'oklch(64.6% .222 41.116)',
          700: 'oklch(55.3% .195 38.402)',
        },
        blue: {
          900: 'oklch(37.9% .146 265.522)',
        },
        slate: {
          100: 'oklch(96.8% .007 247.896)',
          200: 'oklch(92.9% .013 255.508)',
          700: 'oklch(37.2% .044 257.287)',
          900: 'oklch(20.8% .042 265.755)',
        },
        gray: {
          600: 'oklch(44.6% .03 256.802)',
          900: 'oklch(21% .034 264.665)',
        },
      },
    },
  },
  plugins: [],
}
