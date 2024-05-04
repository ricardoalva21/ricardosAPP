import React from "react";
import Container from "@mui/material/Container";
import { Box, Typography, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import DrawerAppBar from "./components/DrawerAppBar";
import Footer from "./components/Footer";
import theme from './themes/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <>
        <DrawerAppBar />
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
