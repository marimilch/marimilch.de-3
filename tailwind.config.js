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
        100: "rgb(26 17 42)",
        300: "rgb(168 71 129)",
        DEFAULT: "rgb(210 145 159)",
      },
      cyan: "rgb(129 187 230)",
    },
  },
};
