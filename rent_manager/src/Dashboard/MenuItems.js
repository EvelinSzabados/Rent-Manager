import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import { Link } from "react-router-dom";
import ListIcon from "@material-ui/icons/List";
import ReceiptIcon from "@material-ui/icons/Receipt";

export default function MenuItems() {
  return (
    <React.Fragment>
      <ListItem button component={Link} to={"/"}>
        <ListItemIcon>
          <DashboardIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button component={Link} to={"/products"}>
        <ListItemIcon>
          <ListIcon color="error" />
        </ListItemIcon>
        <ListItemText primary="Products" />
      </ListItem>

      <ListItem button component={Link} to={"/customers"}>
        <ListItemIcon>
          <PeopleIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Customers" />
      </ListItem>

      <ListItem button component={Link} to={"/rent"}>
        <ListItemIcon>
          <ReceiptIcon color="error" />
        </ListItemIcon>
        <ListItemText primary="New rent" />
      </ListItem>
    </React.Fragment>
  );
}
