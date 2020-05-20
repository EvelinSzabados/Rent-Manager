import React, { useState, createContext, useEffect, useContext } from "react";
import { ProductContext } from "./ProductContext";
import axios from "axios";

export const NotificationContext = createContext();

export const NotificationProvider = (props) => {
  const url = "http://localhost:8080/rent/notification";
  const [notification, setNotification] = useState([]);
  const { product } = useContext(ProductContext);

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios(url, {
      method: "GET",
      withCredentials: true,
    }).then((resp) => {
      setNotification(resp.data);
    });
  }, [notification, product]);

  return (
    <NotificationContext.Provider
      value={{ notification, setNotification }}
    >
      {props.children}
    </NotificationContext.Provider>
  );
};
