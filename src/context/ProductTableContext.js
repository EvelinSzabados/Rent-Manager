import React, { useState, createContext, useEffect, useContext } from "react";
import { ProductContext } from "./ProductContext";
import { CategoryContext } from "./CategoryContext";

export const ProductTableContext = createContext();

export const ProductTableProvider = (props) => {
    const { product } = useContext(ProductContext);
    const { category } = useContext(CategoryContext);
    const [state, setState] = useState([]);

    useEffect(() => {

        let categoryObj = {};
        category.map(category => (categoryObj[category.id] = category.category_name))

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
                        field: "status.id",
                        lookup: { 1: "Available", 2: "Rented", 3: "Out of Operation" },
                    },
                    { title: "Price (Ft)", field: "price", type: "numeric" },
                    {
                        title: "Category",
                        field: "category.id",
                        lookup: categoryObj,
                    }

                ],

            };
        });
    }, [product, category]);


    return (
        <ProductTableContext.Provider value={[state, setState]}>
            {props.children}
        </ProductTableContext.Provider>
    );
};
