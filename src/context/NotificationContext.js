import React, { useState, createContext, useEffect, useContext } from "react";
import { ProductContext } from "./ProductContext";
import axios from "axios";
import { LoginContext } from "../context/LoginContext";

export const NotificationContext = createContext();

export const NotificationProvider = (props) => {
  const url = "https://codecool-rent-manager.herokuapp.com/rent/notification";
  const [notification, setNotification] = useState([]);
  const { product } = useContext(ProductContext);
  const { validLogin } = useContext(LoginContext);

  useEffect(() => {
    if (validLogin === true) {
      axios.defaults.withCredentials = true;
      axios(url, {
        method: "GET",
        withCredentials: true,
      }).then((resp) => {
        setNotification(resp.data);
      });
    }
  }, [validLogin, product]);

  return (
    <NotificationContext.Provider value={{ notification, setNotification }}>
      {props.children}
    </NotificationContext.Provider>
  );
};
