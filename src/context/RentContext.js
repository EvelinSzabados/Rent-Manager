import React, { useState, createContext, useEffect, useContext } from "react";
import axios from "axios";
import { NotificationContext } from "./NotificationContext";
export const RentContext = createContext();

export const RentProvider = (props) => {
  const url = "https://codecool-rent-manager.herokuapp.com/rent/all";
  const [rent, setRent] = useState([]);
  const { notification } = useContext(NotificationContext);

  const fetchAllRent = () => {
    axios.defaults.withCredentials = true;
    axios(url, {
      method: "GET",
      withCredentials: true,
      crossDomain: true
    }).then((resp) => {
      setRent(resp.data);
    });
  };

  useEffect(fetchAllRent, [notification]);

  return (
    <RentContext.Provider value={{ rent, fetchAllProduct: fetchAllRent }}>
      {props.children}
    </RentContext.Provider>
  );
};
