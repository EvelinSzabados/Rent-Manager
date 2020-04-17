import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const CategoryContext = createContext();

export const CategoryProvider = (props) => {
    const url = "http://localhost:8080/category/all";
    const [category, setCategory] = useState([]);

    const fetchAllCategory = () => {
        axios.get(url).then((resp) => {
            setCategory(resp.data);
        });
    };

    useEffect(fetchAllCategory, []);

    return (
        <CategoryContext.Provider value={{ category, fetchAllCategory }}>
            {props.children}
        </CategoryContext.Provider>
    );
};
