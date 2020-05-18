import React, { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
export const LoginContext = createContext();

export const LoginProvider = props => {
    const [validLogin, setValidLogin] = useState(false);
    const history = useHistory();
    const prev = document.location.pathname;

    useEffect(() => {
        Axios.get("http://localhost:8080/auth/me", {
            withCredentials: true
        }).then((res) => {
            if (res.data === true) {
                setTimeout(() => { setValidLogin(true) }, 0);
                setTimeout(() => { history.push(prev) }, 0);

            }
        }).catch(() => {
            setValidLogin(false)
            history.push('/')
        }
        );

    }, [])


    return (
        <LoginContext.Provider value={{ validLogin, setValidLogin }}>
            {props.children}
        </LoginContext.Provider>
    );
};