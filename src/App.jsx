import React from "react";
import {ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import DrawerAppBar from "./components/DrawerAppBar";
import Footer from "./components/Footer";
import theme from './themes/theme';
import Jobs from "./pages/Jobs";
import SecondAppBBar from "./components/SecondAppBar";
import GlobalStyle from "./themes/globalStyles";
import { StyledEngineProvider } from '@mui/material/styles';

function App() {
  return (
    <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyle/>
      <>
        <DrawerAppBar />
        <SecondAppBBar/>
        <Jobs/>
        <Footer />
      </>
    </ThemeProvider>
  </StyledEngineProvider>
  );
}

export default App;
