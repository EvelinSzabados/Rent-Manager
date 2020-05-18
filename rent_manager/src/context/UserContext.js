import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";
export const UserContext = createContext();

export const UserProvider = props => {
    const [user, setUser] = useState({
        username: "",
        role: ""
    });

    useEffect(() => {
        Axios.get(
            "http://localhost:8080/auth/getUser",
            {
                withCredentials: true
            }
        ).then(res => {

            setUser({ username: res.data.userName, role: res.data.roles[0] })

        }).catch(() => {
            console.log("Not valid user");

        });

    })


    return (
        <UserContext.Provider value={{ user, setUser }}>
            {props.children}
        </UserContext.Provider>
    );
};