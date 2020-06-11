import Axios from "axios";

export const logOut = (LoginContext) => {
  Axios.post("https://codecool-rent-manager.herokuapp.com/auth/logout", {
    withCredentials: true,
    crossDomain: true
  }).then(() => {
    console.log("Logged out");
  });
};
