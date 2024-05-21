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
        backgroundColor: theme.palette.success.main,
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
              size="small"
              key={item}
              sx={{
                color: theme.palette.background.paper,
                "&hover": { color: theme.palette.success.main },
                mr: '1rem'
              }}
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
