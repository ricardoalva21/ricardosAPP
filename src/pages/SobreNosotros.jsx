import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
  useTheme,
} from "@mui/material";
import bannerQuienesSomos from "../assets/images/banner_Quienes_Somos.jpeg";
import { hexToRGBA } from "../utils/colorUtils";

const ContactPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Manejar envío del formulario aquí
  };

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
    0.9
  );

  return (
    <Box
      sx={{
        backgroundImage: `url(${bannerQuienesSomos})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
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
            display: "flex",
            flexDirection: "column",
            paddingTop: 7,
            backgroundColor: `rgba(255, 255, 255, 0.5)`,
            backgroundSize: "", // Asegura que la imagen cubra todo el contenedor
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            paddingBottom: "5rem",
            paddingTop: "5rem",
            marginBottom: "4rem",
            marginTop: "4rem",
          }}
        >
          {/* Contenido Sobre Nosotros */}
          <Box sx={{ display: "flex" }}>
            {/* Parte Izquierda */}
            <Box>
              <Typography variant="h4" color="initial" sx={{
                p:2 
              }}>
                Sobre Nosotros
              </Typography>
              <Typography variant="body1" color="initial" sx={{
                paddingLeft: 2
              }}>
                Desde nuestra fundación en 2010, ICQ Infancia Crece Querida ha
                trabajado incansablemente para ofrecer una educación de alta
                calidad y servicios de cuidado infantil que promuevan el
                desarrollo integral de los niños y niñas en todo el territorio
                nacional.Nuestra misión es crear entornos seguros y
                enriquecedores donde cada niño pueda crecer y aprender con amor
                y dedicación.
              </Typography>
            </Box>
            {/* Parte Derecha */}
            <Box sx={{paddingTop:2}}>
              <Typography variant="body1" color="initial" sx={{p:2}}>
                A lo largo de los años, hemos administrado con éxito una red de
                centros educativos tanto de bien social como privados,
                asegurándonos de que cada uno de ellos cumpla con los más altos
                estándares de calidad. Nos enorgullece el impacto positivo que
                hemos tenido en nuestras comunidades locales y estamos
                emocionados de expandir nuestra misión a otros países de la
                región en el futuro cercano.
              </Typography>
              <Typography variant="body1" color="initial" sx={{p:2}}>
                En ICQ, creemos firmemente que el
                bienestar y el desarrollo de los niños y niñas son la prioridad
                más alta. Nuestro equipo de profesionales dedicados trabaja día
                a día para garantizar que cada niño reciba el cuidado, la
                educación y la atención que merece. La pasión por el bienestar
                infantil es el corazón de todo lo que hacemos, y nos
                comprometemos a continuar esta labor con el mismo entusiasmo y
                dedicación con los que comenzamos.
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default ContactPage;
