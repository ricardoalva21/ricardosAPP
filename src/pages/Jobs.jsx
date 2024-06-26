import React from "react";
import {
  Paper,
  Typography,
  Button,
  Box,
  Container,
  useTheme,
} from "@mui/material";
import PuestosDeTrabajo from "../components/PuestosDeTrabajo";
import PuestosDeTrabajo2 from "../components/PuestosDeTrabajo2";
import bannerManosFondo from "../assets/images/banner_fondo_manos.png";
import { hexToRGBA } from "../utils/colorUtils";

const Jobs = () => {
  const theme = useTheme();

  const secondaryColorWithTransparency = hexToRGBA(
    theme.palette.secondary.main,
    0.5
  );
  const paperColorWithTransparency = hexToRGBA(
    theme.palette.background.paper,
    0.5
  );

  return (
    <Box
      sx={{
        // maxWidth: "100vw",
        width: "100vw",
        minHeight: "100vh",
        backgroundImage: `url(${bannerManosFondo})`,
        backgroundSize: "cover",
        backgroundPosition: "center", // Centra la imagen
        backgroundRepeat: "no-repeat",
        paddingTop: "2rem",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          backgroundImage: `linear-gradient(to top, ${secondaryColorWithTransparency}, ${paperColorWithTransparency})`,
          paddingTop: "1.5rem",
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
          <Box
            sx={{
              textAlign: "center",
              width: "100%",
              p: { xs: 2, sm: 4, md: 7 },
            }}
          >
            <Typography
              sx={{
                p: { xs: 2, sm: 4, md: 7 },
                width: "100%",
                color: "white",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                fontSize: {
                  xs: "h5.fontSize",
                  sm: "h4.fontSize",
                  md: "h3.fontSize",
                },
              }}
              variant="h3"
            >
              ¿A qué puesto aplicas?
            </Typography>
            <Typography
              sx={{
                color: "white",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.9)",
                fontSize: {
                  xs: "body1.fontSize",
                  sm: "h6.fontSize",
                  md: "h5.fontSize",
                },
              }}
              variant="h5"
            >
              Nos enfocamos en brindar un servicio de alta calidad para el bien
              mayor de los niños.
            </Typography>
          </Box>

          <PuestosDeTrabajo2 />

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
