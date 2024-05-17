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
  {
    puesto: "Soy tu Padre",
    descripcion: "hola hijo",
    requisitos: "hell yeah",
    imagen: "@",
  }
];

// Se defiene el formato del card

const CardPuestoDeTrabajo = ({ puesto, descripcion, requisitos, imagen }) => {
  return (
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
      <img src={imagen} alt={`Imagen de ${puesto}`} />
      <Typography variant="h4">{puesto}</Typography>
      {/* <Typography variant="body1">{descripcion}</Typography> */}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          onClick={() => alert(descripcion)}
          sx={{ marginRight: 1 }}
          variant="outlined"
        >
          Descripcion
        </Button>
        <Button
          onClick={() => alert(requisitos)}
          sx={{ marginRight: 1 }}
          variant="outlined"
        >
          Requisitos
        </Button>
        <Button variant="contained" color="secondary">Aplicar</Button>
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
