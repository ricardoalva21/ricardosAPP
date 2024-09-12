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
import bannerKidsHome from "../assets/images/banner_kidsHome.png";
import { hexToRGBA } from "../utils/colorUtils";
import ContentPasteSearchIcon from "@mui/icons-material/ContentPasteSearch";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";

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

          <Box sx={{ p: 8 }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={12}>
                <Typography
                  variant="h4"
                  sx={{
                    p: 2,
                    color: "black",
                  }}
                >
                  Bienvenidos a {<br />} ICQ Infancia Crece Querida
                </Typography>
              </Grid>
              <Grid item xs={12} md={12}>
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
                  Desde nuestra fundación, hemos trabajado con el objetivo de
                  ofrecer educación de alta calidad y atención especializada a
                  los niños y niñas en todo el país. Nos enfocamos en
                  administrar centros educativos de bien social y privados, con
                  planes ambiciosos de expansión hacia otros países de la
                  región, siempre manteniendo el bienestar de los niños como
                  nuestra prioridad.
                </Typography>
              </Grid>
              <Grid item xs={6} md={6}>
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
                  Nuestra misión es proporcionar un entorno seguro, donde los
                  niños puedan desarrollar su máximo potencial, tanto a nivel
                  educativo como personal. Creemos que el éxito en la vida
                  comienza con una educación sólida y un ambiente de cuidado
                  integral.
                </Typography>
              </Grid>
              <Grid item xs={6} md={6}>
                <Box
                  component="img"
                  src={bannerKidsHome}
                  sx={{
                    width: "100%",
                    height: "auto",
                    marginTop: 2,
                    borderRadius: 1,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={12}>
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
                  Nos enorgullece ser un pilar de confianza para las familias,
                  brindando un servicio que no solo cuida de los niños, sino que
                  también apoya a las comunidades en su desarrollo.
                </Typography>
              </Grid>
              
              <Grid item xs={12} md={12} lg={12} xl={12}>
                <Box>
                  <Typography
                    variant="h4"
                    sx={{
                      p: 2,
                      color: "black",
                      paddingBottom: "2rem",
                      fontSize: {
                        xs: "h6.fontSize",
                        sm: "h6.fontSize",
                        md: "h5.fontSize",
                        lg: "h5.fontSize",
                      },
                    }}
                  >
                    Nuestros Servicios para los menores
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      gap: 3,
                    }}
                  >
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <ContentPasteSearchIcon />
                      <Typography variant="body1" align="center">
                        Atencion Psicologica 
                      </Typography>
                      
                    </Box>
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <MedicalServicesIcon />
                      <Typography variant="body1" align="center">
                        Atencion medica personalizada
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <RestaurantMenuIcon />
                      <Typography variant="body1" align="center">
                        Nutricion especializada
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", gap: 1 }}>
                      <CorporateFareIcon />
                      <Typography variant="body1" align="center">
                        Administracion Centros Educativos
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Home;
