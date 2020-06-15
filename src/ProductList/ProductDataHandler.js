import axios from "axios";

const modifyUrl = "https://codecool-rent-manager.herokuapp.com/product/modify";
const addUrl = "https://codecool-rent-manager.herokuapp.com/product/add";
const deleteUrl = "https://codecool-rent-manager.herokuapp.com/product/delete";

export function handleEdit(product) {
  axios.defaults.withCredentials = true;
  axios({
    method: "PUT",
    url: modifyUrl,
    withCredentials: true,
    data: product,
  });
}
export function handleDelete(product) {
  axios.defaults.withCredentials = true;
  axios({
    method: "DELETE",
    url: deleteUrl,
    withCredentials: true,
    data: product,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
export function addProduct(product) {
  axios.defaults.withCredentials = true;
  axios({
    method: "POST",
    url: addUrl,
    withCredentials: true,
    data: product,
  });
}
