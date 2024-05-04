import React from "react";
import { Paper, Typography, Card, Button, Box, Container } from "@mui/material";

const Jobs = () => {
  return (
    <Container>
       <Typography> Bienvenido a bordo!</Typography>
      <Paper>
        <Box sx={{ textAlign: "center", width: "100%", p: 7 }}>
          <Typography sx={{ p: 4 }} variant="h2">
            ¿A que puesto aplicas?
          </Typography>
          <Typography variant="h5">
            {" "}
            Nos enfocamos en brindar un servicio de alta calidad para el bien
            mayor de los ninos.
          </Typography>
        </Box>

        <Box p={6}>
          <Paper
            sx={{
              display: "flex",
              justifyContent: "space-between", // Distribuye los elementos de manera equitativa
              alignItems: "center", // Centra verticalmente los elementos
              padding: 2,
              marginBottom: 3,
            }}
            elevation={3}
            square={false}
          >
            <Typography variant="h4">Atencion Integral de Infantes</Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button sx={{ marginRight: 1 }} ß variant="outlined">
                Requisitos
              </Button>
              <Button variant="contained">Aplicar</Button>
            </Box>
          </Paper>
          <Paper
            sx={{
              display: "flex",
              justifyContent: "space-between", // Distribuye los elementos de manera equitativa
              alignItems: "center", // Centra verticalmente los elementos
              padding: 2,
              marginBottom: 3,
            }}
            elevation={3}
            square={false}
          >
            <Typography variant="h4">
              Cocina, Limpieza y Apoyo de Infantes
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button sx={{ marginRight: 1 }} variant="outlined">
                Requisitos
              </Button>
              <Button variant="contained">Aplicar</Button>
            </Box>
          </Paper>
          <Paper
            sx={{
              display: "flex",
              justifyContent: "space-between", // Distribuye los elementos de manera equitativa
              alignItems: "center", // Centra verticalmente los elementos
              padding: 2,
              marginBottom: 3,
            }}
            elevation={3}
            square={false}
          >
            <Typography variant="h4">Promotor de Salud</Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button sx={{ marginRight: 1 }} variant="outlined">
                Requisitos
              </Button>
              <Button variant="contained">Aplicar</Button>
            </Box>
          </Paper>
          <Paper
            sx={{
              display: "flex",
              justifyContent: "space-between", // Distribuye los elementos de manera equitativa
              alignItems: "center", // Centra verticalmente los elementos
              padding: 2,
              marginBottom: 3,
            }}
            elevation={3}
            square={false}
          >
            <Typography variant="h4">Administracion</Typography>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Button sx={{ marginRight: 1 }} variant="outlined">
                Requisitos
              </Button>
              <Button variant="contained">Aplicar</Button>
            </Box>
          </Paper>
        </Box>
        <Paper elevation={2}>
          <Box sx={{ textAlign: "center", width: "100%", p: 7 }}>
            <Typography sx={{ p: 4 }} variant="h3">
              ¿Tienes un talento especial?
            </Typography>
            <Typography variant="h5">
              {" "}
              En nuestra empresa siempre buscamos trabajar con personas con
              ganas de superacion y con deseos de crecer.
            </Typography>
          </Box>

          <Box p={6}>
            <Paper
              sx={{
                display: "flex",
                justifyContent: "space-between", // Distribuye los elementos de manera equitativa
                alignItems: "center", // Centra verticalmente los elementos
                padding: 2,
                marginBottom: 3,
              }}
              elevation={3}
              square={false}
            >
              <Typography variant="h4">Otros</Typography>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button variant="contained">Cuentanos de ti</Button>
              </Box>
            </Paper>
          </Box>
        </Paper>
      </Paper>
    </Container>
  );
};

export default Jobs;
