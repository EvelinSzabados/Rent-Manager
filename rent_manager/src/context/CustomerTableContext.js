import React, { useState, createContext, useEffect, useContext } from "react";
import { ProductContext } from "./ProductContext";
import { CategoryContext } from "./CategoryContext";

export const CustomerTableContext = createContext();

export const CustomerTableProvider = (props) => {
    const { product } = useContext(ProductContext);
    // set productContext to customerContext if it's ready
    const [state, setState] = useState([]);

    useEffect(() => {

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


                ]
            };
        });
    }, [product]);


    return (
        <CustomerTableContext.Provider value={[state, setState]}>
            {props.children}
        </CustomerTableContext.Provider>
    );
};
