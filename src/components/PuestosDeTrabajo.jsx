import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Box, Paper, Button, Typography, useTheme } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { hexToRGBA } from "../utils/colorUtils";

// Datos de puestos de trabajo disponibles con IDs únicos generados
const puestosDisponibles = [
  {
    id: uuidv4(),
    puesto: "Atencion Integral de Infantes",
    descripcion:
      "⦿ Cuido de niños. ⦿ Horarios diurnos, nocturnos y mixtos. ⦿ Se trabaja con niños de diversas edades.",
    requisitos:
      "⦿ Bachiller en prescolar ⦿ Si se encuentra estudiando, necesita 20 materias certificadas. ⦿ De cualquier otra manera, necesita 2 años minimos de experiencia laborando con niños",
  },
  {
    id: uuidv4(),
    puesto: "Cocina, Limpieza y Apoyo de Infantes",
    descripcion: "Aca se describe el puesto de trabajo",
    requisitos: "Aca van los requisitos generales minimos para poder aplicar",
  },
  {
    id: uuidv4(),
    puesto: "Promotor de Salud y Nutricion",
    descripcion: "Aca se describe el puesto de trabajo",
    requisitos: "Aca van los requisitos generales minimos para poder aplicar",
  },
  {
    id: uuidv4(),
    puesto: "Maestra Preescolar",
    descripcion: "Aca se describe el puesto de trabajo",
    requisitos: "Aca van los requisitos generales minimos para poder aplicar",
  },
  {
    id: uuidv4(),
    puesto: "Miscelanea / Conserje",
    descripcion: "Aca se describe el puesto de trabajo",
    requisitos: "Aca van los requisitos generales minimos para poder aplicar",
  },
  {
    id: uuidv4(),
    puesto: "Cocina",
    descripcion: "Aca se describe el puesto de trabajo",
    requisitos: "Aca van los requisitos generales minimos para poder aplicar",
  },
];

// Componente para el botón Aplicar
const ApplyButton = () => (
  <Button
    size="small"
    sx={{ color: "white" }}
    variant="contained"
    color="secondary"
  >
    Aplicar
  </Button>
);


// Componente para un acordeón
const CustomAccordion = ({
  title,
  content,
  expanded,
  handleChange,
  panelId,
}) => {
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
    <Accordion
      expanded={expanded === panelId}
      onChange={handleChange(panelId)}
      sx={{ maxWidth: "100%", minWidth: "100%" }}
    >
      <AccordionSummary
        expandIcon={
          <ArrowDownwardIcon sx={{ color: theme.palette.primary.main }} />
        }
        aria-controls={`${panelId}-content`}
        id={`${panelId}-header`}
      >
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          backgroundImage: `linear-gradient(to top, ${secondaryColorWithTransparency}, ${paperColorWithTransparency})`,
          fontStyle: "oblique",
        }}
      >
        <Typography sx={{ maxWidth: "100%", minWidth: "100%" }}>
          {content}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

// Componente para representar cada tarjeta de puesto de trabajo
const CardPuestoDeTrabajo = React.memo(
  ({ puesto, descripcion, requisitos, expanded, handleChange, index }) => {
    const theme = useTheme();

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
      >
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
            <ApplyButton />
          </Box>
        </Box>
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
          <CustomAccordion
            title="Descripcion"
            content={descripcion}
            expanded={expanded}
            handleChange={handleChange}
            panelId={`${index}-panel1`}
          />
          <CustomAccordion
            title="Requisitos"
            content={requisitos}
            expanded={expanded}
            handleChange={handleChange}
            panelId={`${index}-panel2`}
          />
        </Box>
      </Paper>
    );
  }
);

// Componente principal para listar los puestos de trabajo
const PuestosDeTrabajo = () => {
  const [expanded, setExpanded] = useState(false);
  const [mostrarTodos, setMostrarTodos] = useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const theme = useTheme();

  const toggleMostrarPuestos = () => {
    setMostrarTodos(!mostrarTodos);
  };

  const MostrarOcultarButton = (props) => {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
        <Button
          variant="contained"
          onClick={toggleMostrarPuestos}
          sx={{
            marginTop: 6,
            backgroundColor: theme.palette.secondary.contraste,
            "&:hover": { backgroundColor: theme.palette.secondary.contraste },
          }}
        >
          {props}
        </Button>
      </Box>
    );
  };
  
  return (
    <div>
      {puestosDisponibles
        .slice(0, mostrarTodos ? puestosDisponibles.length : 2)
        .map((puesto, index) => (
          <CardPuestoDeTrabajo
            key={puesto.id}
            puesto={puesto.puesto}
            descripcion={puesto.descripcion}
            requisitos={puesto.requisitos}
            expanded={expanded}
            handleChange={handleChange}
            index={index}
          />
        ))}
      {!mostrarTodos && (
        MostrarOcultarButton("Mostrar más puesto de trabajo")
      )}
      {mostrarTodos && (
        MostrarOcultarButton("Ocultar puestos de trabajo")
      )}
    </div>
  );
};

export default PuestosDeTrabajo;
