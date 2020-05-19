
import React, { useContext } from "react";
import { RentTableContext } from "../context/RentTableContext";
import MaterialTable from "material-table";
import { handleDelete, handleEdit } from "./RentDataHandler";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

export default function RentList() {
    const [state, setState] = useContext(RentTableContext)

    return (

        <MaterialTable
            title="Rent list"
            columns={state.columns}
            data={state.data}
            options={{
                headerStyle: {
                    color: 'teal',
                    fontWeight: 'bold',

                },
                exportButton: true

            }}
            detailPanel={[
                {
                    tooltip: 'Show rented products',
                    render: rowData => {
                        return (
                            <div
                                style={{
                                    fontSize: 13,
                                    textAlign: 'left',
                                    color: '#404040',
                                    padding: '1rem'
                                }}
                            ><table style={{ width: '50%', borderColor: '#1D8895' }}>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    {rowData.rentedProductsDetails.map(prod => (

                                        <tr>

                                            <td>{prod.id} </td><td> {prod.name} </td><td> {prod.cost}</td>

                                        </tr>

                                    ))}
                                </table>

                            </div>

                        )
                    },
                }
            ]}
            editable={{

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
                                // const dataToDelete = {
                                //     id: rawData.id,
                                //     first_name: rawData.first_name,
                                //     last_name: rawData.last_name,
                                //     email: rawData.email,
                                //     phone_number: rawData.phone_number

                                // };

                                handleDelete(rawData);
                                data.splice(data.indexOf(oldData), 1);
                                return { ...prevState, data };
                            });
                        }, 600);
                    }),
            }}
        />

    );
}

