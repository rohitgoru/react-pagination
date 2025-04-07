/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }

        "3xl": "1720px",
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        primary: "#B88E2F",
        secondry: "#9F9F9F",
        skyblue: "#3CF",
        rurikonblue: "#19224C",
        wintermist: "#EAFBF2",
        aliceblue: "#EDFAFF",
        lightblue: "#F4F7F8",
        stratosphere: "#f3c684",
        mastersred: "#ed2b20",
        lightgreen: "#3e671a",
        eerieBlack: "#1d1d1d",
        skin: "#FFF3E3",
      },
      fontFamily: {
        poppins: ["Poppins", "sans - serif"],
      },
    },
  },
  plugins: [],
};
