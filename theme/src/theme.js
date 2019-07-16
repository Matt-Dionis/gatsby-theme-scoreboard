export const theme = {
  space: [0, 4, 8, 16, 32],
  fonts: {
    body: "-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif"
  },
  fontSizes: [16, 18, 20, 22, 27, 36],
  lineHeights: {
    body: 1.45,
    heading: 1.1
  },
  colors: {
    gray: ["#efefef", "#ddd", "#333", "#111"],
    background: "#fff",
    primary: "royalblue"
  },
  sizes: {
    default: "90vw",
    max: "540px"
  },
  styles: {
    Layout: {
      color: "gray.2",
      fontFamily: "body",
      fontSize: 1,
      lineHeight: "body"
    },
    Header: {
      backgroundColor: "primary",
      color: "background",
      fontWeight: "bold",
      margin: "0 auto",
      maxWidth: "max",
      padding: 3,
      width: "default",
      a: {
        color: "inherit"
      }
    },
    Main: {
      margin: "0 auto",
      maxWidth: "max",
      width: "default"
    },
    Container: {
      padding: 3
    },
    h1: {
      color: "gray.3",
      fontSize: 5,
      fontWeight: "bold",
      lineHeight: "heading",
      margin: "1rem 0 0"
    },
    ul: {
      listStyle: "none",
      padding: 0
    },
    li: {
      display: "block",
      padding: "0px 2px",
      "&:focus-within,&:hover": {
        backgroundColor: "gray.0"
      }
    }
  }
};

export default theme;
