

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#cea98a',
        segundary: "#d6b599",
        terciary: "#936C4B",
        depoiments: "#f9ece1",
        depoimentstwo: "#FBF2EA",
        text: "#c7a486",
        borderdiv: "#F1F1F1",
        button: "#313131",
        inputborder: "#e5e5e5"
      },
      fontFamily:{
        primary: "Syne, sans-serif",
        segundary: "Inter, sans-serif"
      }
    },
  },
  plugins: [],
}

