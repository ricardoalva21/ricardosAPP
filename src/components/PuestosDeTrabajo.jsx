import React from "react";
import { Box, Paper, Button, Typography, Alert } from "@mui/material";

// Puestos de trabajo

const puestosDisponibles = [
  {
    puesto: "Atencion Integral de Infantes",
    descripcion: "Aca se describe el puesto de trabajo",
    requisitos: "Aca van los requisitos generales minimos para poder aplicar",
    imagen: "@",
  },
  {
    puesto: "Cocina, Limpieza y Apoyo de Infantes",
    descripcion: "Aca se describe el puesto de trabajo",
    requisitos: "Aca van los requisitos generales minimos para poder aplicar",
    imagen: "@",
  },
  {
    puesto: "Promotor de Salud",
    descripcion: "Aca se describe el puesto de trabajo",
    requisitos: "Aca van los requisitos generales minimos para poder aplicar",
    imagen: "@",
  },
];

// Se defiene el formato del card

const CardPuestoDeTrabajo = ({ puesto, descripcion, requisitos, imagen }) => {
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "space-between", 
        alignItems: "center",
        padding: 2,
        marginBottom: 3,
        marginRight: "4rem",
        marginLeft: "4rem",
        flexDirection: {
          xs: "column", // Column for extra-small screens
          sm: "row", // Row for small and larger screens
        },
        mx: "11rem",
        
      }}
      elevation={3}
      square={false}
    >
      {/* <img src={imagen} alt={`Imagen de ${puesto}`} /> */}
      <Typography variant="h5">{puesto}</Typography>
      {/* <Typography variant="body1">{descripcion}</Typography> */}
      <Box sx={{  display: "flex", justifyContent: "space-between" }}>
        <Button
          onClick={() => alert(descripcion)}
          sx={{ marginRight: 1 }}
          variant="outlined"
          size="small"
        >
          Descripcion
        </Button>
        <Button
          onClick={() => alert(requisitos)}
          sx={{ marginRight: 1 }}
          variant="outlined"
          size="small"
        >
          Requisitos
        </Button>
        <Button size="small" sx={{ color: 'white' }} variant="contained" color="secondary" >
          Aplicar
        </Button>
      </Box>
    </Paper>
  );
};

const PuestosDeTrabajo = () => {
  return (
    <div>
      {puestosDisponibles.map((puesto, index) => (
        <CardPuestoDeTrabajo
          key={index}
          puesto={puesto.puesto}
          descripcion={puesto.descripcion}
          requisitos={puesto.requisitos}
          imagen={puesto.imagen}
        />
      ))}
    </div>
  );
};

export default PuestosDeTrabajo;

