import React, { useContext, useState, useEffect } from "react";
import { ProductContext } from "../context/ProductContext";
import { CategoryContext } from "../context/CategoryContext";
import axios from "axios";
import MaterialTable from "material-table";

export default function ProductListItems() {
  const modifyUrl = "http://localhost:8080/product/modify";
  const addUrl = "http://localhost:8080/product/add";
  const deleteUrl = "http://localhost:8080/product/delete"

  const { product } = useContext(ProductContext);
  const { category } = useContext(CategoryContext);
  const [state, setState] = useState({});

  useEffect(() => {
    let categoryObj = {};
    category.map(category => { categoryObj[category.id] = category.categoryName })

    setState((oldState) => {
      return { ...oldState, data: product };
    });
    setState((oldState) => {
      return {
        ...oldState,
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
            lookup: categoryObj,
          }
        ]
      };
    });


    console.log(state)
  }, [product, category]);

  function handleEdit(product) {
    axios.put(modifyUrl, product, {
      headers: { "Content-Type": "application/json" },
    });
  }
  function handleDelete(product) {
    axios.delete(deleteUrl, {
      headers: {
        "Content-Type": "application/json",
      },
      data: product,
    });
  }
  function addProduct(product) {
    axios.post(addUrl, product);
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
                const rawData = data[data.indexOf(oldData)];
                const dataToDelete = {
                  id: rawData.id,
                  name: rawData.name,
                  status_id: rawData.status_id,
                  price: rawData.price,
                  category_id: rawData.category_id,
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
