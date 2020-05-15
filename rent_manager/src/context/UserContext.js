import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";

export const UserContext = createContext();

export const UserProvider = props => {
    const [user, setUser] = useState("");

    useEffect(() => {
        Axios.defaults.withCredentials = true;
        Axios("http://localhost:8080/auth/getUser", {
            method: 'GET',
            withCredentials: true
        }).then((res) => {
            setUser(res.data)

        }).catch(() => {
            console.log("Not authenticated")
        }
        );

    }, [])
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {props.children}
        </UserContext.Provider>
    );
};