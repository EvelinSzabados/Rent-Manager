import React, { useState, createContext, useEffect, useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { CategoryContext } from "../context/CategoryContext";

export const TableContext = createContext();

export const TableProvider = (props) => {
    const { product } = useContext(ProductContext);
    const { category } = useContext(CategoryContext);
    const [state, setState] = useState([]);

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



    }, [product, category]);


    return (
        <TableContext.Provider value={[state, setState]}>
            {props.children}
        </TableContext.Provider>
    );
};
