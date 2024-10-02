import React from "react";
import { AppBar, Toolbar, Typography, Box, IconButton } from "@mui/material";

import { Facebook, Instagram, YouTube } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box sx={{ width: "100vw" }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Box sx={{ textAlign: "center", padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              Síguenos en nuestras redes sociales
            </Typography>
            <Box>
              <IconButton
                href="https://www.facebook.com"
                target="_blank"
                aria-label="Facebook"
              >
                <Facebook />
              </IconButton>
              <IconButton
                href="https://www.instagram.com"
                target="_blank"
                aria-label="Instagram"
              >
                <Instagram />
              </IconButton>
              <IconButton
                href="https://www.youtube.com"
                target="_blank"
                aria-label="YouTube"
              >
                <YouTube />
              </IconButton>
            </Box>
          </Box>
          <Box sx={{ textAlign: "center", width: "100%" }}>
            <Typography variant="body1" color="inherit">
              ICQ Infancia Crece Querida Para America Latina SRL. ©{" "}
              {new Date().getFullYear()} <br /> Todos los derechos reservados.{" "}
              <br />
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Footer;
