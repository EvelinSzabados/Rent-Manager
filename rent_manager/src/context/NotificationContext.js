import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const NotificationContext = createContext();

export const NotificationProvider = (props) => {
  const url = "http://localhost:8080/rent/notification";
  const [notification, setNotification] = useState([]);

  const fetchAllNotification = () => {
    axios.defaults.withCredentials = true;
    axios(url, {
      method: "GET",
      withCredentials: true,
    }).then((resp) => {
      setNotification(resp.data);
    });
  };

  useEffect(fetchAllNotification, []);

  return (
    <NotificationContext.Provider
      value={{ notification, fetchAllNotification }}
    >
      {props.children}
    </NotificationContext.Provider>
  );
};
