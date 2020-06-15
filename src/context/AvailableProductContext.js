import React, { useState, createContext, useEffect, useContext } from "react";
import axios from "axios";
import { ProductContext } from "./ProductContext";

export const AvailableProductContext = createContext();

export const AvailableProductProvider = (props) => {
  const url = "https://codecool-rent-manager.herokuapp.com/product/available";
  const [availableProduct, setAvailableProduct] = useState([]);
  const { product } = useContext(ProductContext)

  const fetchAllProduct = () => {
    axios.defaults.withCredentials = true;
    axios(url, {
      method: "GET",
      withCredentials: true,
    }).then((resp) => {
      setAvailableProduct(resp.data);
    });
  };

  useEffect(fetchAllProduct, [product]);

  return (
    <AvailableProductContext.Provider
      value={{ availableProduct, fetchAllProduct }}
    >
      {props.children}
    </AvailableProductContext.Provider>
  );
};
