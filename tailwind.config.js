/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Manrope: ["Manrope", "sans-serif"],
        Lobster: ["Lobster", "sans-serif"],
      },
      colors: {
        PrimaryColor: ["#fd7e4b"],
        SecondaryColor: ["#53c99f"],
        HeadingColor: ["#1b3434"],
        TextColor: ["#6f7775"],
        BorderColor: ["#ffffff34"],
      },
      screens: {
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1400px",
        "3xl": "1600px ",
        "4xl": "1700px",
        // 1400-1600, 1300-1399,1200-1299,992-1199(1170),768-991,600-767,480-599,320-479
      },
      keyframes: {
        movebtn: {
          "0%,50%, 100%": { transform: "translateY(0px)" },
          "25%": { transform: "translateY(10px)" },
          "75%": { transform: "translateY(-10px)" },
        },
        dance7: {
          "0%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(235px)" },
        },
        shrink: {
          "0%": { transform: "translateY(20px) translateX(-50%)" },
          "50%": { transform: "translateY(-20px) translateX(-50%)" },
          "100%": { transform: "translateY(0px) translateX(-50%)" },
        },
        Dance: {
          "0%,100%": { transform: "translateX(0px)" },
          "50%": { transform: "translateX(35px)" },
        },
        rotateme: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        dance2: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "50%": {
            transform: "translate3d(25px, -25px, 0)",
          },
          "100%": { transform: "translate3d(0, -25px, 25px)" },
        },
        headerSlideDown: {
          "0%": { margin: "-150px 0 0" },
          "100%": { margin: "0" },
        },
        zoomInOut: {
          "0%": { transform: "scale(0.5)" },
          "100%": { transform: "scale(1.2)" },
        },
        swing: {
          "0%": { transform: "rotate(25deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        movebtn: "movebtn 3s ease-in-out infinite",
        wiggle: "wiggle 3s ease-in-out infinite",
        rotational: "rotational 20s linear infinite",
        zoomInOut: "zoomInOut 2s alternate infinite",
        swing: "swing 1s ease-in-out 1s forwards infinite alternate",
      },
      boxShadow: {
        cases: "0px 10px 15px rgba(187, 187, 187, 0.2)",
      },
      lineHeight: {},
    },
  },
  plugins: [],
};
