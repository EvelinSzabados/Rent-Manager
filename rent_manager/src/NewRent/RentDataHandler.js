import axios from "axios";
const addUrl = "http://localhost:8080/rent/add";


export function addRent(rent) {
    axios.post(addUrl, rent);
}

export function calculateCost(products, startDate, endDate) {
    const date1 = new Date(startDate);
    const date2 = new Date(endDate);

    const difference = date2 - date1;
    const days = difference / (24 * 3600 * 1000);

    let totalCost = 0;
    for (let product of products) {
        totalCost += product.price * days;

    }

    return totalCost;
}