import React, { createContext, useState, useEffect, useContext } from "react";
import Axios from "axios";
import { LoginContext } from "../context/LoginContext";

export const UserContext = createContext();

export const UserProvider = props => {
    const [user, setUser] = useState("");
    // const { validLogin } = useContext(LoginContext)

    // useEffect(() => {
    //     Axios.defaults.withCredentials = true;
    //     Axios("http://localhost:8080/auth/getUser", {
    //         method: 'GET',
    //         withCredentials: true
    //     }).then((res) => {
    //         setUser(res.data)

    //     }).catch(() => {
    //         console.log("Not authenticated")
    //     }
    //     );

    // }, [validLogin, user])
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {props.children}
        </UserContext.Provider>
    );
};