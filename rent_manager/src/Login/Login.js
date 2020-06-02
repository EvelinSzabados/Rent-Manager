import React, { useState, useContext } from 'react';
import Axios from "axios";
import { LoginContext } from "../context/LoginContext";
import { UserContext } from "../context/UserContext";
import { useHistory } from "react-router-dom";
export default function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const { setValidLogin } = useContext(LoginContext);
    const { setUser } = useContext(UserContext);
    const history = useHistory();


    const login = () => {
        Axios.post(
            "http://localhost:8080/auth/login",
            {
                username,
                password
            },
            {
                withCredentials: true
            }
        ).then(res => {
            setMessage("Welcome back, " + res.data.userName);
            setValidLogin(true)
            setUser({ username: res.data.userName, role: res.data.roles[0] })
            setTimeout(function () { history.push('/app') }, 1000);

        }).catch(() => {
            setMessage("Username or password is wrong!");
            setValidLogin(false)
        });

    };

    return (

        <div className="App" >

            <div className="logo_container">
                <img className="main_logo" src={require("../Images/logocolored.svg")} alt="Logo"></img>

                <h1 className="main_header">Rent Manager</h1>
            </div>
            <div className="login_input_container">
                <div>
                    <p className="input_label">Username</p>
                    <input className="login_input"
                        type="text"
                        autoComplete="off"
                        name="username"
                        value={username}
                        onChange={(e) => {
                            setUsername(e.target.value)
                        }} />
                </div>
                <div>
                    <p className="input_label">Password</p>
                    <input className="login_input"
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }} />
                    <p className="input_message"> {message} </p>
                    <button className="submit_button"
                        type="submit"
                        onClick={login} >
                        Login
                    </button>
                </div>
            </div >




        </div >

    )
}
