import React, { useState, createContext, useEffect, useContext } from "react";
import axios from "axios";
import { LoginContext } from "../context/LoginContext";
export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const url = "https://codecool-rent-manager.herokuapp.com/product/all";
  const [product, setProduct] = useState([]);
  const { validLogin } = useContext(LoginContext);

  const fetchAllProduct = () => {
    if (validLogin === true) {
      axios.defaults.withCredentials = true;
      axios(url, {
        method: "GET",
        withCredentials: true,
      }).then((resp) => {
        setProduct(resp.data);
      });
    }
  };

  useEffect(fetchAllProduct, [validLogin]);

  return (
    <ProductContext.Provider value={{ product, setProduct }}>
      {props.children}
    </ProductContext.Provider>
  );
};
