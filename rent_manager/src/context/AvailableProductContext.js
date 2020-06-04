import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const AvailableProductContext = createContext();

export const AvailableProductProvider = (props) => {
  const url = "http://localhost:8762/product/product/available";
  const [availableProduct, setAvailableProduct] = useState([]);

  const fetchAllProduct = () => {
    axios.defaults.withCredentials = true;
    axios(url, {
      method: "GET",
      withCredentials: true,
    }).then((resp) => {
      setAvailableProduct(resp.data);
    });
  };

  useEffect(fetchAllProduct, []);

  return (
    <AvailableProductContext.Provider
      value={{ availableProduct, fetchAllProduct }}
    >
      {props.children}
    </AvailableProductContext.Provider>
  );
};
