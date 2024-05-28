import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material";

const navItems = ["Registrarse", "Entrar"];

function SecondAppBBar() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundImage: `linear-gradient(to right, ${theme.palette.success.main}, ${theme.palette.background.paper})`,
        p: 0.5,
      }}
    >
      <Box
        sx={{
          marginTop: 8,
          marginRight: "4rem",
          marginLeft: "4rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            color: theme.palette.background.paper,
            display: { xs: "none", sm: "block" },
          }}
        >
          Infancia Crece Querida
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          {navItems.map((item) => (
            <Button
              sx={{
                color: theme.palette.background.paper,
                mr: "1rem",
                my: "5px",
                borderRadius: "20px",
              }}
              variant="contained"
              size="small"
              key={item}
              disableElevation
              color="success"
            >
              {item}
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
export default SecondAppBBar;
