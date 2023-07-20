export default {
  theme: {
    fontSize: {
      base: [
        "calc( 5 * 3.5px )", // 5 * pixel size
        {
          lineHeight: "calc( 7 * 3.5px )", // 7 * pixel size
          letterSpacing: "0",
          fontWeight: "500",
        },
      ],
      large: [
        "calc( 10 * 3.5px )", // 10 * pixel size
        {
          lineHeight: "calc( 14 * 3.5px )", // 14 * pixel size
          letterSpacing: "0",
          fontWeight: "500",
        },
      ],
    },
    fontFamily: {
      main: ["Quinque Five Font"],
    },
    colors: {
      purple: {
        100: "rgb(var(--color-purple-100) / <alpha-value>)",
        300: "rgb(var(--color-purple-300) / <alpha-value>)",
        DEFAULT: "rgb(var(--color-purple) / <alpha-value>)",
      },
      cyan: "rgb(var(--color-cyan) / <alpha-value>)",
      black: "#000",
      white: "#fff",
    },
  },
};
