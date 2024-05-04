import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ width: "100vw" }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography
            sx={{ textAlign: "center", width: "100%" }}
            variant="body1"
            color="inherit"
          >
            © {new Date().getFullYear()} Desarrollado por Ricardo Alvarado Q.
            Todos los derechos reservados.
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Footer;
