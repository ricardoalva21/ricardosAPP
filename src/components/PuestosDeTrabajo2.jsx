import React, { useState } from "react";
import { Box, Paper, Button, Typography, useTheme } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { hexToRGBA } from "../utils/colorUtils";

// Datos de puestos de trabajo disponibles
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

// Componente para representar cada tarjeta de puesto de trabajo
const CardPuestoDeTrabajo = ({
  puesto,
  descripcion,
  requisitos,
  expanded,
  handleChange,
  index,
}) => {
  // Obtener el tema para acceder a los colores definidos
  const theme = useTheme();

  // Convertir colores a colores con transparencia
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
        padding: { xs: 2, sm: 3, md: 4 },
        marginBottom: "2rem",
        marginRight: { xs: "auto", sm: "2rem", md: "4rem" },
        marginLeft: { xs: "auto", sm: "2rem", md: "4rem" },
        flexDirection: {
          xs: "column",
          sm: "column",
          lg: "row",
          xl: "row",
        },
        minWidth: { xs: "100%", sm: "400px" },
      }}
      elevation={3}
      square={false}
    >
      {/* Titulo del Puesto y boton */}
      <Box
        sx={{
          width: { xs: "100%", lg: "50%" },
          marginRight: { lg: "2rem" },
          marginLeft: { lg: "1rem" },
        }}
      >
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
          flexGrow: "1",
          marginTop: { xs: "1rem", sm: "1.5rem" },
          marginBottom: { xs: "1rem", sm: "1.5rem" },
          marginRight: { xs: "0", lg: "2rem" },
          width: { xs: "100%", lg: "50%" },
        }}
      >
        {/* Acordion Descripcion */}
        <Accordion
          expanded={expanded === `${index}-panel1`}
          onChange={handleChange(`${index}-panel1`)}
          sx={{ maxWidth: "100%", minWidth: "100%" }}
          slotProps={{ transition: { unmountOnExit: true } }}
        >
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
            <Typography sx={{ maxWidth: "100%", minWidth: "100%" }}>
              {descripcion}
            </Typography>
          </AccordionDetails>
        </Accordion>
        {/* Acordion Requisitos */}
        <Accordion
          expanded={expanded === `${index}-panel2`}
          onChange={handleChange(`${index}-panel2`)}
          sx={{ maxWidth: "100%", minWidth: "100%" }}
          slotProps={{ transition: { unmountOnExit: true } }}
        >
          <AccordionSummary
            expandIcon={
              <ArrowDownwardIcon sx={{ color: theme.palette.primary.main }} />
            }
            aria-controls="panel2-content"
            id="panel2-header"
          >
            <Typography>Requisitos</Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              backgroundImage: `linear-gradient(to top, ${successColorWithTransparency}, ${paperColorWithTransparency})`,
              fontStyle: "oblique",
            }}
          >
            <Typography sx={{ maxWidth: "100%", minWidth: "100%" }}>
              {requisitos}
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Paper>
  );
};

// Componente principal para listar los puestos de trabajo
const PuestosDeTrabajo = () => {
  // Estado para controlar qué acordeón está expandido
  const [expanded, setExpanded] = useState(false);

  // Manejador de cambio de estado de los acordeones
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      {/* Mapeo de los puestos de trabajo para crear tarjetas */}
      {puestosDisponibles.map((puesto, index) => (
        <CardPuestoDeTrabajo
          key={index}
          puesto={puesto.puesto}
          descripcion={puesto.descripcion}
          requisitos={puesto.requisitos}
          expanded={expanded}
          handleChange={handleChange}
          index={index}
        />
      ))}
    </div>
  );
};

export default PuestosDeTrabajo;
