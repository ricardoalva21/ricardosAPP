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
import bannerManosFondo from "../assets/images/banner_fondo_manos.png";
import Divider from "@mui/material/Divider";

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
        width: "100vw",
        minHeight: "100vh",
        maxWidth: "1920px",
        backgroundImage: `url(${bannerManosFondo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          backgroundImage: `linear-gradient(to top, ${secondaryColorWithTransparency}, ${paperColorWithTransparency})`,
          paddingTop: "2rem",
        }}
      >
        <Paper
          sx={{
            paddingTop: 7,
            paddingBottom: "5rem",
            backgroundColor: `rgba(255, 255, 255, 0.3)`,
            backgroundSize: "cover", 
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              width: "100%",
              p: { xs: 2, sm: 4, md: 7 },
              marginTop: "-4rem",
              marginBottom: "-4rem",
            }}
          >
            <Typography
              sx={{
                p: { xs: 2, sm: 4, md: 7 },
                width: "100%",
                color: theme.palette.success.main,
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
                fontSize: {
                  xs: "h5.fontSize",
                  sm: "h4.fontSize",
                  md: "h3.fontSize",
                },
              }}
              variant="h3"
            >
              ¡Unete a nuestro equipo de trabajo!
            </Typography>
            <Typography
              variant="h6"
              sx={
                {
                  paddingBottom: 8,
                  color: 'black',
                  fontStyle: "italic",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.1)",
                }
              }
            >
              En ICQ Infancia Crece Querida, buscamos personas apasionadas y
              comprometidas con el bienestar y desarrollo de los niños. Aquí
              tendrás la oportunidad de marcar una diferencia real, trabajando
              en un entorno que valora la educación y el cuidado de los más
              pequeños. Si compartes nuestra visión y estás listo para asumir un
              nuevo desafío, estamos emocionados de conocerte.
            </Typography>
            <Divider aria-hidden="true" variant="inset" />
            <Typography
              variant="h4"
              sx={{
                p: 2,
                color: theme.palette.secondary.contraste,
                fontSize: {
                  xs: "body1.fontSize",
                  sm: "h6.fontSize",
                  md: "h5.fontSize",
                  lg: "h4.fontSize",
                },
                marginTop: 2,
              }}
            >
              ¡Explora y Aplica!
            </Typography>
            <Typography
              sx={{
                color: "black",
                fontSize: {
                  xs: "body1.fontSize",
                  sm: "h6.fontSize",
                  md: "h5.fontSize",
                },
              }}
              variant="body2"
            >
              Antes de enviar tu aplicación, revisa detenidamente la descripción
              del puesto y los requisitos. Queremos que encuentres el lugar
              ideal para ti, donde puedas crecer y contribuir de la mejor
              manera. {<br />} ¡Asegúrate de postularte al rol que mejor se
              ajuste a tus habilidades y experiencia!
            </Typography>
          </Box>

          {/* Se imprimen los puestos de trabajo */}
          <PuestosDeTrabajo />

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
                Si no viste ningún puesto de trabajo que se acople a ti, cuentanos en que area te desempeñas. {<br/>}¡En nuestra empresa siempre buscamos trabajar con personas con
                ganas de superacion y deseos de crecer!
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
