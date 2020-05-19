
import React, { useContext } from "react";
import { RentTableContext } from "../context/RentTableContext";
import MaterialTable from "material-table";
import { handleDelete, handleEdit } from "./RentDataHandler";

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
