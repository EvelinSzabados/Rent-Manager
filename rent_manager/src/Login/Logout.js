
import Axios from "axios";

export const logOut = (LoginContext) => {

    Axios.post("http://localhost:8080/auth/logout", {
        withCredentials: true
    }).then(() => {
        console.log("Logged out")
    })
}