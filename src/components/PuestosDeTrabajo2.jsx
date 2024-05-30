import React from "react";
import { Box, Paper, Button, Typography, useTheme } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// Info puestos de trabajo

const puestosDisponibles = [
  {
    puesto: "Atencion Integral de Infantes",
    descripcion: "Aca se describe el puesto de trabajo",
    requisitos: "Aca van los requisitos generales minimos para poder aplicar",
  },
  {
    puesto: "Cocina, Limpieza y Apoyo de Infantes",
    descripcion: "Aca se describe el puesto de trabajo",
    requisitos: "Aca van los requisitos generales minimos para poder aplicar",
  },
  {
    puesto: "Promotor de Salud",
    descripcion: "Aca se describe el puesto de trabajo",
    requisitos: "Aca van los requisitos generales minimos para poder aplicar",
  },
];

// Se defiene el formato del card

const CardPuestoDeTrabajo = ({ puesto, descripcion, requisitos }) => {
  const theme = useTheme();

  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 4,
        marginBottom: "2rem",
        marginRight: "4rem",
        marginLeft: "4rem",
        flexDirection: {
          xs: "column", // Column for extra-small screens
          sm: "columm",
          lg: "row", // Row for small and larger screens
        },
        mx: "11rem",
      }}
      elevation={3}
      square={false}
    >
      {/* Titulo del Puesto y boton */}
      <Box
        sx={{
          width: "400px",
          marginRight: "0.5rem",
        }}
      >
        {" "}
        <Typography
          sx={{ textAlign: "center", marginBottom: "2rem" }}
          variant="h5"
        >
          {puesto}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Button
            size="small"
            sx={{
              color: "white",
              "&:focus": {
                // outline: "2px solid rgba(0, 0, 0, 0.5)",
                // outlineOffset: "3px",
                // outlineColor: theme.palette.primary.main
              },
            }}
            variant="contained"
            color="secondary"
          >
            Aplicar
          </Button>
        </Box>
      </Box>
      {/* Caja acordiones */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          // justifyContent: "space-between",
          flexGrow: "3",
          marginTop: "1.5rem",
          marginBottom: "1.5rem",
        }}
      >
        <Accordion slotProps={{ transition: { unmountOnExit: true } }}>
          <AccordionSummary
            expandIcon={
              <ArrowDownwardIcon sx={{ color: theme.palette.success.main }} />
            }
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Descripcion</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{descripcion}</Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion
          // sx={{ width: "200px" }}
          slotProps={{ transition: { unmountOnExit: true } }}
        >
          <AccordionSummary
            expandIcon={
              <ArrowDownwardIcon sx={{ color: theme.palette.success.main }} />
            }
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Requisitos</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{requisitos}</Typography>
          </AccordionDetails>
        </Accordion>
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
