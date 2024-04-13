/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#810000",
        secondary:"#1e293b"
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
}

