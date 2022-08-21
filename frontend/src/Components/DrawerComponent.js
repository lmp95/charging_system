import React from "react";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { MdDoorBack, MdEvStation } from "react-icons/md";
import { Link } from "react-router-dom";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

function DrawerComponent(props) {
  const drawerWidth = 240;

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={props.open}
    >
      <DrawerHeader></DrawerHeader>
      <Divider />
      <List>
        <Link to="/chargingStation" key="stationList">
          <ListItem key={"stationList"} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MdEvStation />
              </ListItemIcon>
              <ListItemText primary={"Charging Stations"} />
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <Divider />
      <Link to="/stations" key="virtualStations">
        <ListItem key={"stations"} disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MdDoorBack />
            </ListItemIcon>
            <ListItemText primary={"Virtual Stations"} />
          </ListItemButton>
        </ListItem>
      </Link>
    </Drawer>
  );
}

export default DrawerComponent;
