import axios from "axios";

const modifyUrl = "https://codecool-rent-manager.herokuapp.com/customer/modify";
const addUrl = "https://codecool-rent-manager.herokuapp.com/customer/add";
const deleteUrl = "https://codecool-rent-manager.herokuapp.com/customer/delete";

export function handleEdit(product) {
  axios.defaults.withCredentials = true;
  axios({
    method: "PUT",
    url: modifyUrl,
    withCredentials: true,
    data: product,
  });
  // axios.put(modifyUrl, product, {
  //     headers: { "Content-Type": "application/json" },
  // });
}
export function handleDelete(product) {
  axios.defaults.withCredentials = true;
  axios({
    method: "DELETE",
    url: deleteUrl,
    withCredentials: true,
    data: product,
  });
  // axios.delete(deleteUrl, {
  //     headers: {
  //         "Content-Type": "application/json",
  //     },
  //     data: product,
  // });
}
export function addProduct(product) {
  axios.defaults.withCredentials = true;
  axios({
    method: "POST",
    url: addUrl,
    withCredentials: true,
    data: product,
  });
  // axios.post(addUrl, product);
}
