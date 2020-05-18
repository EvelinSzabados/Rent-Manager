import React, { useState } from 'react'
import Axios from "axios";
export default function Register() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [role, setRole] = useState();
    const signup = () => {
        Axios.post(
            "http://localhost:8080/auth/signup",
            {
                username,
                password,
                role
            },
            {
                withCredentials: true
            }
        ).then(res => {
            console.log(res.data)
            setUsername("")
            setPassword("")
            setRole("")
        }).catch(() => {
            console.log("Error")
        });

    };
    return (
        <div className="signup_input_container">
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

            </div>
            <div>
                <p className="input_label">Role</p>
                <input className="login_input"
                    type="text"
                    autoComplete="off"
                    name="role"
                    value={role}
                    onChange={(e) => {
                        setRole(e.target.value)
                    }} />
                {/* <p className="input_message"> {message} </p> */}
                <button className="submit_button"
                    type="submit"
                    onClick={signup} >
                    Register
                    </button>
            </div>
        </div>
    )
}
