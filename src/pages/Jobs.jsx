import React from "react";
import {
  Paper,
  Typography,
  Card,
  Button,
  Box,
  Container,
  useTheme,
} from "@mui/material";
import PuestosDeTrabajo from "../components/PuestosDeTrabajo";
import bannerManosFondo from "../assets/images/banner_fondo_manos.png";

const Jobs = () => {
  const theme = useTheme(); // Obtén el tema actual

  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        backgroundImage: `url(${bannerManosFondo})`,
        backgroundSize: "cover",
        backgroundPosition: "center", // Centra la imagen
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          backgroundColor: theme.palette.secondary.main,
        }}
      >
        <Paper
          sx={{
            paddingTop: 7,
            backgroundImage: `url(${bannerManosFondo})`,
            backgroundSize: "cover", // Asegura que la imagen cubra todo el contenedor
            backgroundPosition: "center", 
            backgroundRepeat: "no-repeat", 
          }}
        >
          <Box sx={{ textAlign: "center", width: "100%", p: 7 }}>
            <Typography
              sx={{
                p: 12,
                width: "100%",
                color: "white",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              }}
              variant="h3"
            >
              ¿A que puesto aplicas?
            </Typography>
            <Typography
              sx={{
                color: "white",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)",
              }}
              variant="h5"
            >
              {" "}
              Nos enfocamos en brindar un servicio de alta calidad para el bien
              mayor de los ninos.
            </Typography>
          </Box>

          <PuestosDeTrabajo />

          {/* Se define el ya tu sabe*/}
          <Paper sx={{ opacity: 0.9, marginTop: "20rem" }} elevation={2}>
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
                <Typography variant="h4">Otros Puestos</Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Button variant="contained">Cuentanos de ti</Button>
                </Box>
              </Paper>
            </Box>
          </Paper>
        </Paper>
      </Container>
    </Box>
  );
};

export default Jobs;
