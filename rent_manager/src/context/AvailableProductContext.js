import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const AvailableProductContext = createContext();

export const AvailableProductProvider = (props) => {
    const url = "http://localhost:8080/product/available";
    const [product, setProduct] = useState([]);

    const fetchAllProduct = () => {
        axios.get(url).then((resp) => {
            setProduct(resp.data);
        });
    };

    useEffect(fetchAllProduct, []);

    return (
        <AvailableProductContext.Provider value={{ product, fetchAllProduct }}>
            {props.children}
        </AvailableProductContext.Provider>
    );
};
