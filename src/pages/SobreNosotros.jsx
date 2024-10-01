import React from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  useTheme,
} from "@mui/material";
import bannerQuienesSomos from "../assets/images/banner_Quienes_Somos.jpeg";
import bannerKidsAboutUs from "../assets/images/banner_kidsAboutUs.png";
import { hexToRGBA } from "../utils/colorUtils";
import Divider from "@mui/material/Divider";

const SobreNosotros = () => {
  const theme = useTheme();

  const primaryColorWithTransparency = hexToRGBA(
    theme.palette.primary.main,
    0.5
  );
  const paperColorWithTransparency = hexToRGBA(
    theme.palette.background.paper,
    0.5
  );
  const paperColorWithTransparencyFull = hexToRGBA(
    theme.palette.background.paper,
    0.3
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
          backgroundImage: `linear-gradient(to top, ${primaryColorWithTransparency}, ${paperColorWithTransparency})`,
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
          {/* Contenido Sobre Nosotros */}

          <Box sx={{ p: 7 }}>
            <Grid container spacing={4}>
              {/* Parte Izquierda */}
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h4"
                  sx={{
                    p: 2,
                  }}
                >
                  Sobre Nosotros
                </Typography>
                <Divider aria-hidden="true" variant="middle" />
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: {
                      xs: "body1.fontSize",
                      sm: "h6.fontSize",
                      md: "h5.fontSize",
                    },
                    backgroundColor: paperColorWithTransparencyFull,
                    borderRadius: 10,
                    marginTop: 4,
                    marginBottom: 20,
                    p:2,
                  }}
                >
                  Desde nuestra fundación en 2010, ICQ Infancia Crece Querida ha
                  trabajado incansablemente para ofrecer una educación de alta
                  calidad y servicios de cuidado infantil que promuevan el
                  desarrollo integral de los niños y niñas en todo el territorio
                  nacional. Nuestra misión es crear entornos seguros y
                  enriquecedores donde cada niño pueda crecer y aprender con
                  amor y dedicación.
                </Typography>
                {/* Imagen */}
                <Box
                  component="img"
                  src={bannerKidsAboutUs}
                  sx={{
                    width: "100%",
                    height: "auto",
                    marginTop: 2,
                    borderRadius: 1,
                  }}
                />
              </Grid>
              {/* Parte Derecha */}
              <Grid item xs={12} md={6}>
                <Typography
                  variant="body2"
                  align="left"
                  sx={{
                    p: 2,
                    fontSize: {
                      xs: "body1.fontSize",
                      sm: "h6.fontSize",
                      md: "h5.fontSize",
                    },
                    backgroundColor: paperColorWithTransparencyFull,
                    borderRadius: 10,
                    marginTop: 20,
                    p:2,
                  }}
                >
                  A lo largo de los años, hemos administrado con éxito una red
                  de centros educativos tanto de bien social como privados,
                  asegurándonos de que cada uno de ellos cumpla con los más
                  altos estándares de calidad. Nos enorgullece el impacto
                  positivo que hemos tenido en nuestras comunidades locales y
                  estamos emocionados de expandir nuestra misión a otros países
                  de la región en el futuro cercano.
                </Typography>
                <Typography
                  variant="body2"
                  align='left'
                  sx={{
                    p: 2,
                    fontSize: {
                      xs: "body1.fontSize",
                      sm: "h6.fontSize",
                      md: "h5.fontSize",
                    },
                    backgroundColor: paperColorWithTransparencyFull,
                    borderRadius: 10,
                    marginTop: 10,
                    p:2,
                  }}
                >
                  En ICQ, creemos firmemente que el bienestar y el desarrollo de
                  los niños y niñas son la prioridad más alta. Nuestro equipo de
                  profesionales dedicados trabaja día a día para garantizar que
                  cada niño reciba el cuidado, la educación y la atención que
                  merece. La pasión por el bienestar infantil es el corazón de
                  todo lo que hacemos, y nos comprometemos a continuar esta
                  labor con el mismo entusiasmo y dedicación con los que
                  comenzamos.
                </Typography>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default SobreNosotros;
