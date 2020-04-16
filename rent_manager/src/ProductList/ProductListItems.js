// import React, { useContext, useState } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
// import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
// import EditIcon from "@material-ui/icons/Edit";
// import { ProductContext } from "../context/ProductContext";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%",
//     maxWidth: "70vw",
//     backgroundColor: theme.palette.background.paper,
//     "@media (max-width:600px)": {
//       maxWidth: "100vw",
//       margin: 0,
//     },
//   },
// }));

// export default function CheckboxList() {
//   const { product } = useContext(ProductContext);
//   const classes = useStyles();

//   return (
//     <List className={classes.root}>
//       {product.map((value) => {
//         const labelId = `checkbox-list-label-${value}`;

//         return (
//           <ListItem color={"primary"} key={value} role={undefined} dense button>
//             <ListItemText id={labelId} primary={value.name} />
//             <ListItemSecondaryAction>
//               <ListItemText primary={value.price} />
//             </ListItemSecondaryAction>
//             <ListItemSecondaryAction>
//               <ListItemText primary={value.statusName} />
//             </ListItemSecondaryAction>
//             <ListItemSecondaryAction>
//               <IconButton edge="end" aria-label="edit">
//                 <EditIcon />
//               </IconButton>
//               <IconButton edge="end" aria-label="delete">
//                 <DeleteOutlineIcon />
//               </IconButton>
//             </ListItemSecondaryAction>
//           </ListItem>
//         );
//       })}
//     </List>
//   );
// }
import React from "react";
import MaterialTable from "material-table";

export default function ProductListItems() {
  const [state, setState] = React.useState({
    columns: [
      { title: "Name", field: "name" },
      { title: "Surname", field: "surname" },
      { title: "Birth Year", field: "birthYear", type: "numeric" },
      {
        title: "Birth Place",
        field: "birthCity",
        lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
      },
    ],
    data: [
      { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
      {
        name: "Zerya Betül",
        surname: "Baran",
        birthYear: 2017,
        birthCity: 34,
      },
    ],
  });

  return (
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
