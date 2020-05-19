import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const RentContext = createContext();

export const RentProvider = (props) => {
    const url = "http://localhost:8080/rent/all";
    const [rent, setRent] = useState([]);

    const fetchAllRent = () => {
        axios.defaults.withCredentials = true;
        axios(url, {
            method: 'GET',
            withCredentials: true
        }).then((resp) => { setRent(resp.data) })

    };

    useEffect(fetchAllRent, []);

    return (
        <RentContext.Provider value={{ rent, fetchAllProduct: fetchAllRent }}>
            {props.children}
        </RentContext.Provider>
    );
};
