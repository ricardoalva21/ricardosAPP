import { createTheme } from "@mui/material/styles";

// colores registrados de la marca: 
// verde: 55cc32
// morado: 7f2499
// rosado: ec0062

const theme = createTheme({
  // day mode
  palette: {
    mode: "light",
    primary: {
      main: "#7f2499",
    },
    secondary: {
      main: "#55cc32",
    },
    background: {
      default: "#cfd8dc",
      paper: "#eceff1",
    },
    success: {
      main: "#ec0062",
    },
    text: {
      primary: "#232323",
      secondary: "#232323",
      disabled: "#232323",
      hint: "#232323",
    },
  },
  typography: {
    fontFamily: "Open Sans",
    h1: {
      fontFamily: "Ubuntu Mono",
    },
    h2: {
      fontFamily: "Ubuntu Mono",
    },
    h3: {
      fontFamily: "Ubuntu Mono",
    },
    h4: {
      fontFamily: "Ubuntu Mono",
    },
    h6: {
      fontFamily: "Ubuntu Mono",
    },
    h5: {
      fontFamily: "Ubuntu Mono",
    },
    subtitle1: {
      fontFamily: "Ubuntu Mono",
    },
    subtitle2: {
      fontFamily: "Ubuntu Mono",
    },
    button: {
      fontFamily: "Ubuntu Mono",
      fontWeight: 900,
    },
    overline: {
      fontFamily: "Ubuntu Mono",
    },
  },
});


export default theme