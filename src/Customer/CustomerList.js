
import React, { useContext } from "react";
import { CustomerTableContext } from "../context/CustomerTableContext";
import MaterialTable from "material-table";
import { handleDelete, handleEdit, addProduct } from "./CustomerDataHandler";

export default function CustomerList() {
  const [state, setState] = useContext(CustomerTableContext)

  return (

    <MaterialTable
      title="Customers"
      columns={state.columns}
      data={state.data}
      options={{
        headerStyle: {
          color: 'teal',
          fontWeight: 'bold',

        },
        exportButton: true

      }}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                newData["id"] = 69;
                addProduct(newData);
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
                  handleEdit(data[data.indexOf(newData)]);
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
                const rawData = data[data.indexOf(oldData)];
                const dataToDelete = {
                  id: rawData.id,
                  first_name: rawData.first_name,
                  last_name: rawData.last_name,
                  email: rawData.email,
                  phone_number: rawData.phone_number

                };

                handleDelete(dataToDelete);
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />

  );
}

