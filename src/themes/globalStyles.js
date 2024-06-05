import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  button:focus,
  a:focus {
    outline: none;
  }
`;

// outline: "2px solid rgba(0, 0, 0, 0.5)",
// outlineOffset: "3px",
// outlineColor: theme.palette.primary.main

export default GlobalStyle;
