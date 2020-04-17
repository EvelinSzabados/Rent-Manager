// import React from 'react'
// import MaterialTable from "material-table";

// export default function Table(props) {
//     function handleEdit(product) {
//         axios.put(modifyUrl, product, {
//             headers: { "Content-Type": "application/json" },
//         });
//     }
//     function handleDelete(product) {
//         axios.delete(deleteUrl, {
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             data: product,
//         });
//     }
//     function addProduct(product) {
//         axios.post(addUrl, product);
//     }
//     return (
//         <MaterialTable
//             title="Product List"
//             columns={props.state.columns}
//             data={props.state.data}
//             editable={{
//                 onRowAdd: (newData) =>
//                     new Promise((resolve) => {
//                         setTimeout(() => {
//                             resolve();
//                             setState((prevState) => {
//                                 const data = [...prevState.data];
//                                 data.push(newData);
//                                 newData["id"] = 69;
//                                 addProduct(newData);
//                                 return { ...prevState, data };
//                             });
//                         }, 600);
//                     }),
//                 onRowUpdate: (newData, oldData) =>
//                     new Promise((resolve) => {
//                         setTimeout(() => {
//                             resolve();
//                             if (oldData) {
//                                 setState((prevState) => {
//                                     const data = [...prevState.data];
//                                     data[data.indexOf(oldData)] = newData;
//                                     handleEdit(data[data.indexOf(newData)]);
//                                     return { ...prevState, data };
//                                 });
//                             }
//                         }, 600);
//                     }),
//                 onRowDelete: (oldData) =>
//                     new Promise((resolve) => {
//                         setTimeout(() => {
//                             resolve();
//                             setState((prevState) => {
//                                 const data = [...prevState.data];
//                                 const rawData = data[data.indexOf(oldData)];
//                                 const dataToDelete = {
//                                     id: rawData.id,
//                                     name: rawData.name,
//                                     status_id: rawData.status_id,
//                                     price: rawData.price,
//                                     category_id: rawData.category_id,
//                                 };

//                                 handleDelete(dataToDelete);
//                                 data.splice(data.indexOf(oldData), 1);
//                                 return { ...prevState, data };
//                             });
//                         }, 600);
//                     }),
//             }}
//         />
//     )
// }
