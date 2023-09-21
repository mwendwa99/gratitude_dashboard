import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import MenuIcon from "@mui/icons-material/Menu";

export const mainListItems = (
  <React.Fragment>
    <ListSubheader
      inset
      sx={{
        fontWeight: "bold",
        color: "#000",
        fontSize: "1.2rem",
      }}
    >
      John Doe
    </ListSubheader>
    <ListItemButton>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemText primary="User Profile" />
    </ListItemButton>
    <ListItemButton>
      <ListItemText primary="Table List" />
    </ListItemButton>
    <ListItemButton>
      <ListItemText primary="Maps" />
    </ListItemButton>
    <ListItemButton>
      <ListItemText primary="Notifications" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <MenuIcon />
      </ListItemIcon>
      <ListItemText primary="More" />
    </ListItemButton>
  </React.Fragment>
);
