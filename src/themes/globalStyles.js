import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  button:focus,
  a:focus {
    outline: none;
  }
`;

export default GlobalStyle;
