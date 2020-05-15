import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const AvailableProductContext = createContext();

export const AvailableProductProvider = (props) => {
    const url = "http://localhost:8080/product/available";
    const [product, setProduct] = useState([]);

    const fetchAllProduct = () => {
        axios.defaults.withCredentials = true;
        axios(url, {
            method: 'GET',
            withCredentials: true
        }).then((resp) => {
            setProduct(resp.data);
        })

    };

    useEffect(fetchAllProduct, []);

    return (
        <AvailableProductContext.Provider value={{ product, fetchAllProduct }}>
            {props.children}
        </AvailableProductContext.Provider>
    );
};
