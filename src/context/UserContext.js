import React, { createContext, useState, useEffect, useContext } from "react";
import Axios from "axios";
import { LoginContext } from "../context/LoginContext";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const { validLogin } = useContext(LoginContext);
  const [user, setUser] = useState({
    username: "",
    role: "",
  });

  useEffect(() => {
    if (validLogin === true) {
      Axios.get("https://codecool-rent-manager.herokuapp.com/auth/getUser", {
        withCredentials: true,
      })
        .then((res) => {
          setUser({ username: res.data.userName, role: res.data.roles[0] });
        })
        .catch(() => { console.log("") })

    }
  }, [validLogin]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
};
