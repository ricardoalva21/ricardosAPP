import React from "react";
import { Box, Paper, Button, Typography, useTheme } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { hexToRGBA } from "../utils/colorUtils";

// Info puestos de trabajo

const puestosDisponibles = [
  {
    puesto: "Atencion Integral de Infantes",
    descripcion:
      "⦿ Cuido de niños. ⦿ Horarios diurnos, nocturnos y mixtos. ⦿ Se trabaja con niños de diversas edades.",
    requisitos:
      "⦿ Bachiller en prescolar ⦿ Si se encuentra estudiando, necesita 20 materias minimo aprobadas, certificadas. ⦿ De cualquier otra manera, necesita 2 años minimos de experiencia laborando con niños",
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

  const secondaryColorWithTransparency = hexToRGBA(
    theme.palette.secondary.main,
    0.5
  );
  const paperColorWithTransparency = hexToRGBA(
    theme.palette.background.paper,
    0.5
  );
  const successColorWithTransparency = hexToRGBA(
    theme.palette.success.main,
    0.5
  );

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
          xl: "row",
          lg: "row", // Row for small and larger screens
        },
        // mx: "11rem",
        minWidth: "400px",
      }}
      elevation={3}
      square={false}
    >
      {/* Titulo del Puesto y boton */}
      <Box
        sx={{
          width: "50%",
          marginRight: "2rem",
          marginLeft: "1rem",
        }}
      >
        {" "}
        <Typography
          sx={{ textAlign: "center", marginBottom: "2rem" }}
          variant="h5"
        >
          {puesto}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", mx: "1rem" }}>
          <Button
            size="small"
            sx={{
              color: "white",
              // minWidth:"300px"
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
          // width: "100%",
          flexGrow: "1",
          marginTop: "1.5rem",
          marginBottom: "1.5rem",
          marginRight: "2rem",
        }}
      >
        {/* Acordion Descripcion */}
        <Accordion sx={{maxWidth: "500px", minWidth: "500px"}} slotProps={{ transition: { unmountOnExit: true } }}>
          <AccordionSummary
            expandIcon={
              <ArrowDownwardIcon sx={{ color: theme.palette.primary.main }} />
            }
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Descripcion</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundImage: `linear-gradient(to top, ${secondaryColorWithTransparency}, ${paperColorWithTransparency})`,
              fontStyle: "oblique",
            }}
          >
            <Typography sx={{ maxWidth: "400px", minWidth: "400px" }}>
              {descripcion}
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* Acordion Requisitos */}
        <Accordion sx={{maxWidth: "500px", minWidth: "500px"}} slotProps={{ transition: { unmountOnExit: true } }}>
          <AccordionSummary
            expandIcon={
              <ArrowDownwardIcon sx={{ color: theme.palette.primary.main }} />
            }
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography>Requisitos</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundImage: `linear-gradient(to top, ${successColorWithTransparency}, ${paperColorWithTransparency})`,
              fontStyle: "oblique",
            }}
          >
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
        />
      ))}
    </div>
  );
};

export default PuestosDeTrabajo;
