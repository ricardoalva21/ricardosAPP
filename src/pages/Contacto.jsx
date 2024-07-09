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
import bannerContacto from "../assets/images/banner_contacto.jpeg";
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
        backgroundImage: `url(${bannerContacto})`,
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
            backgroundSize: "cover", // Asegura que la imagen cubra todo el contenedor
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            paddingBottom: "5rem",
          }}
        >
          {/* Titulo del segmento */}
          <Typography variant="h4" align="center" gutterBottom>
            Contacto
          </Typography>
          {/* Descripcion del segmento */}
          <Typography variant="body1" align="center" paragraph>
            Para cualquier consulta o comentario, por favor complete el
            siguiente formulario o comuníquese a través de los detalles de
            contacto proporcionados.
          </Typography>
          {/* Se define formulario */}
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, mb: 4 }}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Nombre"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Email"
                    type="email"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Comentario"
                    multiline
                    rows={4}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Enviar
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Box>
          {/* se define el mapa de google maps */}
          <Box sx={{ mt: 4, displa: "flex", m: "auto", marginTop:"6rem"}}>
            <Box>
              {" "}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d334.3568159604289!2d-83.94819002902493!3d9.84531481190899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2scr!4v1720557538231!5m2!1ses-419!2scr"
                width="900"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
            {/* Se define informacion de contacto */}
            <Box>
              <Typography variant="h5" align="center" gutterBottom>
                Información de Contacto
              </Typography>
              <Typography variant="body1" align="center" paragraph>
                Dirección: 250mts Este del Hotel El Guarco, Cartago, Costa Rica
                <br />
                Teléfono: (506) 25-51-08-29
                <br />
                Email: info@infanciacrecequerida.com
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default ContactPage;
