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
        <Container sx={{ alignContent: "center" }}>
          <Box sx={{ boxShadow: 2, mb: 5, textAlign: "center" }}>
            <Typography
              variant="h1"
              color="initial"
              sx={{ fontWeight: "medium" }}
            >
              Esto es un titulo
            </Typography>
          </Box>
          <Box sx={{ height: "100vh", boxShadow: 3, textAlign: "center" }}>
            <Typography variant="h2" color="initial">
              Esto es otro titulo
            </Typography>
          </Box>
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
