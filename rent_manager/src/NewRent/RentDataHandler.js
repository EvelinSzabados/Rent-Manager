import axios from "axios";
const addUrl = "http://localhost:8080/rent/add";


export function addRent(rent) {
    axios.post(addUrl, rent);
}