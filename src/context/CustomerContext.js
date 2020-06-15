import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const CustomerContext = createContext();

export const CustomerProvider = (props) => {
  const url = "https://codecool-rent-manager.herokuapp.com/customer/all";
  const [customer, setCustomer] = useState([]);

  const fetchAllCustomer = () => {
    axios.defaults.withCredentials = true;
    axios(url, {
      method: "GET",
      withCredentials: true,
    }).then((resp) => {
      setCustomer(resp.data);
    });
  };

  useEffect(fetchAllCustomer, []);

  return (
    <CustomerContext.Provider
      value={{ customer: customer, fetchAllCustomer: fetchAllCustomer }}
    >
      {props.children}
    </CustomerContext.Provider>
  );
};
