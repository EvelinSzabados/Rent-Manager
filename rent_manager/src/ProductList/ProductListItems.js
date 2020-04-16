import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";

import MaterialTable from "material-table";

export default function ProductListItems() {
  const { product } = useContext(ProductContext);
  const productDataContainer = [];
  product.map((prod) => {
    let data = {
      name: prod.name,
      statusName: prod.status_id,
      price: prod.price,
      categoryName: prod.category_id,
    };
    productDataContainer.push(data);
  });
  const [productData, setProductData] = useState(productDataContainer);

  const [state, setState] = useState({
    columns: [
      { title: "Name", field: "name" },
      {
        title: "Status",
        field: "statusName",
        lookup: { 1: "Available", 2: "Rented", 3: "Out of Operation" },
      },
      { title: "Price", field: "price", type: "numeric" },
      {
        title: "Category",
        field: "categoryName",
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
    data: productDataContainer,
  });

  return (
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={productData}
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
