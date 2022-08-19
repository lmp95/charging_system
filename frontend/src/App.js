import "./App.css";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { MdMenu } from "react-icons/md";
import DrawerComponent from "./Components/DrawerComponent";
import { useState } from "react";
import { AppRoute } from "./Routes/AppRoutes";
import { Link } from "react-router-dom";

function App() {
  const [open, setOpen] = useState(false);

  const openDrawer = () => {
    open ? setOpen(false) : setOpen(true);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar component="nav" position="fixed" className={open && "open"}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={openDrawer}
          >
            <MdMenu />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" key="main">
              Charging System
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <DrawerComponent open={open} openDrawer={openDrawer} />
      <div className={`main ${open && "opened"}`}>
        <AppRoute />
      </div>
    </Box>
  );
}

export default App;
