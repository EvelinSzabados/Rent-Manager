import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";
import axios from "axios";
import MaterialTable from "material-table";

export default function ProductListItems() {
  const { product } = useContext(ProductContext);

  const [state, setState] = useState({
    columns: [
      { title: "Name", field: "name" },
      {
        title: "Status",
        field: "status_id",
        lookup: { 1: "Available", 2: "Rented", 3: "Out of Operation" },
      },
      { title: "Price (Ft)", field: "price", type: "numeric" },
      {
        title: "Category",
        field: "category_id",
        lookup: {
          1: "Betonkeverők",
          2: "Csiszológépek",
          3: "Fúrók",
          4: "Faipari gépek",
          5: "Tömörítőgépek",

          6: "Egyebek",
          7: "Roppantók",
          8: "Áramfejlesztők",
          9: "Betonsimítók",
          10: "Hőlégfúvók",
          11: "Vizesvágók",
        },
      },
    ],
  });

  useEffect(() => {
    setState((oldState) => {
      return { ...oldState, data: product };
    });
  }, [product]);

  function handleEdit(product) {
    axios.put("http://localhost:8080/product/modify", product, {
      headers: { "Content-Type": "application/json" },
    });
  }
  function handleDelete(product) {
    axios.delete("http://localhost:8080/product/delete", {
      headers: {
        "Content-Type": "application/json",
      },
      data: product,
    });
  }
  function addProduct(product) {
    axios.post("http://localhost:8080/product/add", product);
  }

  return (
    <MaterialTable
      title="Product List"
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
                const dataToSend = data[data.indexOf(oldData)];
                const dataToDelete = {
                  id: dataToSend.id,
                  name: dataToSend.name,
                  status_id: dataToSend.status_id,
                  price: dataToSend.price,
                  category_id: dataToSend.category_id,
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
