/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        earthBrown: "#895b29",
        deepMaroon: "#4e2c2e",
        warmBeige: "#c19b6c",
        softSageGreen: "#a1b5a1",
        lightCream: "e3d8b5",
        sageGreen: "#8A9A5B",
        tan: "#D2B48C",
        warmBrown: "#8B5E3B",
        cream: "#EDE0D4",
        mocha: "#4A3F35",
        terracotta: "#F4A261",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        abrilfatface: ["Abril Fatface", "cursive"],
        montserrat: ["Montserrat", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/images/img5.jpg')",
      },
    },
  },
  plugins: [require("daisyui")],
};
