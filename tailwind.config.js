/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'cardShadow': '0 2px 20px 0 rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
}
