import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const url = "http://localhost:8080/product/all";
  const [product, setProduct] = useState([]);

  const fetchAllProduct = () => {
    axios.defaults.withCredentials = true;
    axios(url, {
      method: 'GET',
      withCredentials: true
    }).then((resp) => { setProduct(resp.data) })

  };

  useEffect(fetchAllProduct, []);

  return (
    <ProductContext.Provider value={{ product, fetchAllProduct }}>
      {props.children}
    </ProductContext.Provider>
  );
};
