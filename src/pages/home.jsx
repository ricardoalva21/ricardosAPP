import React from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  useTheme,
} from "@mui/material";
import bannerQuienesSomos from "../assets/images/banner_Home.jpeg";
import bannerKidsAboutUs from "../assets/images/banner_kidsAboutUs.png";
import { hexToRGBA } from "../utils/colorUtils";

const Home = () => {
  const theme = useTheme();

  const primaryColorWithTransparency = hexToRGBA(
    theme.palette.primary.main,
    0.5
  );
  const paperColorWithTransparency = hexToRGBA(
    theme.palette.background.paper,
    0.5
  );
  const successColorWithTransparencyFull = hexToRGBA(
    theme.palette.success.main,
    0.4
  );

  return (
    <Box
      sx={{
        backgroundImage: `url(${bannerQuienesSomos})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        // minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          backgroundImage: `linear-gradient(to top, ${successColorWithTransparencyFull}, ${paperColorWithTransparency})`,
          paddingTop: "1.5rem",
          height: "100%",
          width: "100%",
        }}
      >
        <Paper
          sx={{
            padding: 4,
            backgroundColor: `rgba(255, 255, 255, 0.5)`,
            marginBottom: "6rem",
            marginTop: "6rem",
          }}
        >
          {/* Contenido Home */}

          <Box sx={{ p: 7 }}>
            <Grid container spacing={4}>
              {/* Parte Izquierda */}
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h4"
                  sx={{
                    p: 2,
                    color: "black",
                  }}
                >
                  Bienvenidos a {<br />} ICQ Infancia Crece Querida
                </Typography>
                <Typography
                  sx={{
                    color: "black",
                    p: 2,
                    fontSize: {
                      xs: "body1.fontSize",
                      sm: "h6.fontSize",
                      md: "h5.fontSize",
                    },
                  }}
                  variant="body2"
                >
                  Nuestra empresa se dedica a la administración de centros
                  educativos de bien social y privados en todo el territorio
                  nacional, con planes de expansión a otros países regionales.{" "}
                  {<br />} Nuestra misión es asegurar el desarrollo integral de
                  los niños y niñas en entornos seguros y enriquecedores.
                </Typography>

                {/* Imagen */}
                {/* <Box
                component="img"
                src={bannerKidsAboutUs}
                sx={{
                  width: "100%",
                  height: "auto",
                  marginTop: 2,
                  borderRadius: 1,
                }}
              /> */}
                <Box
                  component="img"
                  src={bannerKidsAboutUs}
                  sx={{
                    width: "100%",
                    height: "auto",
                    marginTop: 2,
                    borderRadius: 1,
                    opacity: 0,
                  }}
                />
              </Grid>
              {/* Parte Derecha */}
              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src={bannerKidsAboutUs}
                  sx={{
                    width: "100%",
                    height: "auto",
                    marginTop: 2,
                    borderRadius: 1,
                    opacity: 0,
                  }}
                />

                <Typography
                  variant="h4"
                  sx={{
                    p: 2,
                    color: "black",
                    // textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
                    fontSize: {
                      xs: "body1.fontSize",
                      sm: "h6.fontSize",
                      md: "h5.fontSize",
                      lg: "h4.fontSize",
                    },
                  }}
                >
                  Nuestros Servicios
                </Typography>
                <Typography
                  variant="body1"
                  color="initial"
                  align="center"
                  sx={{ p: 2 }}
                >
                  ⚫ Administramos una red de centros educativos que ofrecen programas de alta calidad para el desarrollo infantil. {<br/>}
                  ⚫ Atencion medica personalizada para los menores.{<br/>}
                  ⚫ Nutricionista especializado.{<br/>}
                  ⚫Atencion Psicologica.

                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Home;
