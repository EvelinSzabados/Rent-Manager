import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const CategoryContext = createContext();

export const CategoryProvider = (props) => {
  const url = "https://codecool-rent-manager.herokuapp.com/categories/all";
  const [category, setCategory] = useState([]);

  const fetchAllCategory = () => {
    axios.defaults.withCredentials = true;
    axios(url, {
      method: "GET",
      withCredentials: true,
      crossDomain: true
    }).then((resp) => {
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
