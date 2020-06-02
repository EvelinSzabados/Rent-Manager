import React, { useContext } from 'react'
import { LoginContext } from "../context/LoginContext";
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => {
    const { validLogin } = useContext(LoginContext);

    return (<Route {...rest} render={(props) => (
        validLogin === true
            ? <Component {...props} />
            : <Redirect to="/" />
    )} />)
}


