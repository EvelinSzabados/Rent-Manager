import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const CustomerContext = createContext();

export const CustomerProvider = (props) => {
    const url = "http://localhost:8080/customers/all";
    const [customer, setCustomer] = useState([]);

    const fetchAllCustomer = () => {
        axios.get(url).then((resp) => {
            setCustomer(resp.data);
        });
    };

    useEffect(fetchAllCustomer, []);

    return (
        <CategoryContext.Provider value={{ customers: customer, fetchAllCustomer: fetchAllCustomer }}>
            {props.children}
        </CategoryContext.Provider>
    );
};
