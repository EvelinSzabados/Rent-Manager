import axios from "axios";

const modifyUrl = "http://localhost:8080/customer/modify";
const addUrl = "http://localhost:8080/customer/add";
const deleteUrl = "http://localhost:8080/customer/delete"

export function handleEdit(product) {
    axios.defaults.withCredentials = true;
    axios({
        method: 'PUT',
        url: modifyUrl,
        withCredentials: true,
        data: product
    })
    // axios.put(modifyUrl, product, {
    //     headers: { "Content-Type": "application/json" },
    // });
}
export function handleDelete(product) {
    axios.defaults.withCredentials = true;
    axios({
        method: 'DELETE',
        url: deleteUrl,
        withCredentials: true,
        data: product
    })
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
        method: 'POST',
        url: addUrl,
        withCredentials: true,
        data: product
    })
    // axios.post(addUrl, product);
}
