import React from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Paper,
} from "@mui/material";
// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import bannerContacto from "../assets/images/banner_contacto.jpeg";

const ContactPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Manejar envío del formulario aquí
  };

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
        maxWidth="md"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          borderRadius: 2,
          boxShadow: 3,
          padding: 4,
        }}
      >
        <Typography variant="h4" align="center" gutterBottom>
          Contacto
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Para cualquier consulta o comentario, por favor complete el siguiente
          formulario o comuníquese a través de los detalles de contacto
          proporcionados.
        </Typography>
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
        <Typography variant="h5" align="center" gutterBottom>
          Información de Contacto
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          Dirección: 123 Calle Principal, Ciudad, País
          <br />
          Teléfono: +1 (123) 456-7890
          <br />
          Email: contacto@example.com
        </Typography>
        <Box sx={{ height: "400px", width: "100%" }}>
          {/* <LoadScript googleMapsApiKey="TU_CLAVE_API_DE_GOOGLE_MAPS">
            <GoogleMap
              mapContainerStyle={{ height: "100%", width: "100%" }}
              center={{ lat: -34.397, lng: 150.644 }}
              zoom={8}
            >
              <Marker position={{ lat: -34.397, lng: 150.644 }} />
            </GoogleMap>
          </LoadScript> */}
        </Box>
      </Container>
    </Box>
  );
};

export default ContactPage;
