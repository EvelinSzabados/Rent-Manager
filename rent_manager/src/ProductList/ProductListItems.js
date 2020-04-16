import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import EditIcon from "@material-ui/icons/Edit";
import { ProductContext } from "../context/ProductContext";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "70vw",
    backgroundColor: theme.palette.background.paper,
    "@media (max-width:600px)": {
      maxWidth: "100vw",
      margin: 0,
    },
  },
}));

export default function CheckboxList() {
  const { product } = useContext(ProductContext);
  const classes = useStyles();

  return (
    <List className={classes.root}>
      {product.map((value) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem color={"primary"} key={value} role={undefined} dense button>
            <ListItemText id={labelId} primary={value.name} />
            <ListItemText primary={value.price} />
            <ListItemText primary={value.statusName} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
                <EditIcon />
              </IconButton>
              <IconButton edge="end" aria-label="comments">
                <DeleteOutlineIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}
