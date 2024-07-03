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
        maxWidth: "1920px",
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
            paddingBottom: "5rem",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              width: "100%",
              marginBottom: "5rem",
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

          {/* Se imprimen los puestos de trabajo */}
          <PuestosDeTrabajo2 />

          {/*Se define el segmento Otros Puestos*/}
          <Paper
            sx={{
              opacity: 0.9,
              marginTop: "5rem",

              alignContent: "center",
            }}
            elevation={2}
          >
            {/* contiene los 3 elementos del segmento */}
            <Box
              sx={{
                textAlign: "center",
                width: "100%",
                p: 7,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                marginBottom: "3rem",
              }}
            >
              {/* se describe el titulo del segmento */}
              <Typography
                sx={{
                  p: { xs: 2, sm: 4, md: 7 },

                  fontSize: {
                    xs: "h5.fontSize",
                    sm: "h4.fontSize",
                    md: "h3.fontSize",
                  },
                }}
                variant="h3"
              >
                ¿Tienes un talento especial?
              </Typography>

              {/* se describe texto descriptivo */}
              <Typography
                variant="h5"
                sx={{
                  fontSize: {
                    xs: "body1.fontSize",
                    sm: "h6.fontSize",
                    md: "h5.fontSize",
                  },
                  paddingBottom: "2rem",
                }}
              >
                {" "}
                En nuestra empresa siempre buscamos trabajar con personas con
                ganas de superacion y deseos de crecer.
              </Typography>

              {/* se coloca el boton */}
              <Button
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  alignContent: "center",
                  width: "80%",
                  m: "auto",
                }}
                size="medium"
                variant="contained"
                color="success"
              >
                Cuentanos de ti
              </Button>
            </Box>
          </Paper>
        </Paper>
      </Container>
    </Box>
  );
};

export default Jobs;
