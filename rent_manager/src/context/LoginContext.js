import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";
export const LoginContext = createContext();

export const LoginProvider = props => {
    const [validLogin, setValidLogin] = useState(false);

    useEffect(() => {
        Axios.get("http://localhost:8080/auth/me", {
            withCredentials: true
        }).then((res) => {
            if (res.data === true) {
                setValidLogin(true)
                console.log("Is login valid from /me: " + validLogin)
                console.log(res.data)
            }
        }).catch(() => {
            console.log("Not authenticated")
            setValidLogin(false)

        }
        );
        console.log("Is login valid: " + validLogin)
    }, [validLogin])


    return (
        <LoginContext.Provider value={{ validLogin, setValidLogin }}>
            {props.children}
        </LoginContext.Provider>
    );
};