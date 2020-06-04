import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const RentPerCategoryContext = createContext();

export const RentPerCategoryProvider = (props) => {
  const url = "http://localhost:8762/rent/rent/rentedProducts";
  const [rentPerCategory, setRentPerCategory] = useState([]);

  const fetchAllProduct = () => {
    axios.defaults.withCredentials = true;
    axios(url, {
      method: "GET",
      withCredentials: true,
    }).then((resp) => {
      setRentPerCategory(resp.data);
    });
  };

  useEffect(fetchAllProduct, []);

  return (
    <RentPerCategoryContext.Provider
      value={{ rentPerCategory, fetchAllProduct }}
    >
      {props.children}
    </RentPerCategoryContext.Provider>
  );
};
