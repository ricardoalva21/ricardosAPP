import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Logo from "../assets/images/logo_icq.png";
import { useTheme } from "@mui/material";



const drawerWidth = 240;
const navItems = ["Inicio", "¿Quienes Somos?","Trabajos", "Contacto"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const theme = useTheme();
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center",  }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        I C Q
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText  primary={item} />
            </ListItemButton>
          </ListItem>
          
          
        ))}
         <ListItem key='Registrarse' disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText  primary='Registrarse' />
            </ListItemButton>
          </ListItem>
          <ListItem key='Entrar' disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText  primary='Entrar' />
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  const container = window !== undefined ? () => document.body : undefined;

  return (
    <Box sx={{ display: "flex", }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ marginBottom: 8, backgroundColor: theme.palette.background.paper,}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{color: theme.palette.success.main}}/>
          </IconButton>
          {/* Logo */}
          <Box sx={{
            height: '40px',
            width: '100px',
            backgroundImage: `url(${Logo})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            justifyContent: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            alignContent: 'center',
            marginTop: '6px',
            
          }}></Box>
          <Box sx={{ flexGrow: 1 }}></Box> {/* Para empujar los botones al extremo derecho */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{color: theme.palette.primary.main}}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project. :)
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
