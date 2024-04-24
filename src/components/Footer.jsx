// src/components/Footer.jsx

import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="body1" color="inherit">
          © {new Date().getFullYear()} Mi Sitio Web. Todos los derechos reservados.
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
