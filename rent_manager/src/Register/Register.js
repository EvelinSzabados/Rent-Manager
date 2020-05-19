import React, { useState } from 'react'
import Axios from "axios";
export default function Register() {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [message, setMessage] = useState("");
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
            setMessage("Successful registration!")
            setUsername("")
            setPassword("")
            setRole("")
            setTimeout(() => { setMessage("") }, 1500)

        }).catch(() => {
            setMessage("Try again!")
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
                <div>
                    <p className="input_label">Role</p>
                    <select id="role" name="role" className="role_select"
                        onChange={(e) => { setRole(e.target.value) }}>
                        <option value="" selected disabled hidden>Choose a role</option>
                        <option value="ADMIN" >Admin</option>
                        <option value="USER">User</option>
                    </select>
                </div>

                <p className="input_message"> {message} </p>
                <button className="submit_button"
                    type="submit"
                    onClick={signup} >
                    Register
                    </button>
            </div>
        </div>
    )
}
