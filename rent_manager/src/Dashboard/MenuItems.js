import React, { useContext } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { Link } from "react-router-dom";
import ListIcon from "@material-ui/icons/List";
import ReceiptIcon from "@material-ui/icons/Receipt";
import { UserContext } from "../context/UserContext";

export default function MenuItems() {
  const { user } = useContext(UserContext);

  return (
    <React.Fragment>
      <ListItem button component={Link} to={"/app"}>
        <ListItemIcon>
          <DashboardIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button component={Link} to={"/app/products"}>
        <ListItemIcon>
          <ListIcon color="error" />
        </ListItemIcon>
        <ListItemText primary="Products" />
      </ListItem>

      <ListItem button component={Link} to={"/app/customers"}>
        <ListItemIcon>
          <PeopleIcon color="primary" />
        </ListItemIcon>
        <ListItemText primary="Customers" />
      </ListItem>
      <ListItem button component={Link} to={"/app/rent"}>
        <ListItemIcon>
          <ReceiptIcon color="error" />
        </ListItemIcon>
        <ListItemText primary="Rents" />
      </ListItem>
      <ListItem button component={Link} to={"/app/newRent"}>
        <ListItemIcon>
          <ReceiptIcon color="error" />
        </ListItemIcon>
        <ListItemText primary="New rent" />
      </ListItem>
      <div className={user.role === "ADMIN" ? "new_user_block" : "new_user"}>
        <ListItem button component={Link} to={"/app/register"}>
          <ListItemIcon>
            <PersonAddIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Users" />
        </ListItem>
      </div>
    </React.Fragment>
  );
}
