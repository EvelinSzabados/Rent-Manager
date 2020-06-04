import axios from "axios";
const addUrl = "http://localhost:8762/rent/rent/add";
const modifyUrl = "http://localhost:8762/rent/rent/modify";
const deleteUrl = "http://localhost:8762/rent/rent/delete";

export function addRent(rent) {
  axios.defaults.withCredentials = true;
  axios({
    method: "POST",
    url: addUrl,
    withCredentials: true,
    data: rent,
  });
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

export function handleEdit(rent) {
  axios.defaults.withCredentials = true;
  axios({
    method: "PUT",
    url: modifyUrl,
    withCredentials: true,
    data: rent,
  });
}
export function handleDelete(rent) {
  axios.defaults.withCredentials = true;
  axios({
    method: "DELETE",
    url: deleteUrl,
    withCredentials: true,
    data: rent,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
