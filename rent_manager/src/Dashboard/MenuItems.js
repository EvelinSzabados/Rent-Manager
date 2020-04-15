import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import { Link } from "react-router-dom";
import ListIcon from "@material-ui/icons/List";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import ReceiptIcon from "@material-ui/icons/Receipt";

export default function MenuItems() {
  return (
    <React.Fragment>
      <ListItem button component={Link} to={"/"}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button component={Link} to={"/Route2"}>
        <ListItemIcon>
          <ListIcon />
        </ListItemIcon>
        <ListItemText primary="Products" />
      </ListItem>
      <ListItem button component={Link} to={"/Route3"}>
        <ListItemIcon>
          <AddCircleOutlineIcon />
        </ListItemIcon>
        <ListItemText primary="New Product" />
      </ListItem>
      <ListItem button component={Link} to={"/Route4"}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Customers" />
      </ListItem>
      <ListItem button component={Link} to={"/Route5"}>
        <ListItemIcon>
          <GroupAddIcon />
        </ListItemIcon>
        <ListItemText primary="New customer" />
      </ListItem>
      <ListItem button component={Link} to={"/Route6"}>
        <ListItemIcon>
          <ReceiptIcon />
        </ListItemIcon>
        <ListItemText primary="New rent" />
      </ListItem>
    </React.Fragment>
  );
}
