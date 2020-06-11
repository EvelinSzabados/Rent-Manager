import React, { useState, createContext, useEffect, useContext } from "react";
import { CustomerContext } from "./CustomerContext";


export const CustomerTableContext = createContext();

export const CustomerTableProvider = (props) => {
    const { customer } = useContext(CustomerContext);

    const [state, setState] = useState([]);

    useEffect(() => {

        setState((oldState) => {
            return { ...oldState, data: customer };
        });
        setState((oldState) => {
            return {
                ...oldState,
                columns: [
                    { title: "First Name", field: "first_name" },
                    { title: "Last Name", field: "last_name" },
                    { title: "E-mail address", field: "email" },
                    { title: "Address", field: "address" },
                    { title: "Phone", field: "phone_number" },


                ]
            };
        });
    }, [customer]);


    return (
        <CustomerTableContext.Provider value={[state, setState]}>
            {props.children}
        </CustomerTableContext.Provider>
    );
};
