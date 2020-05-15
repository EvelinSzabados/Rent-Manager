import axios from "axios";

const modifyUrl = "http://localhost:8080/product/modify";
const addUrl = "http://localhost:8080/product/add";
const deleteUrl = "http://localhost:8080/product/delete"

export function handleEdit(product) {

    axios.defaults.withCredentials = true;
    axios({
        method: 'PUT',
        url: modifyUrl,
        withCredentials: true,
        data: product
    })

}
export function handleDelete(product) {

    axios.defaults.withCredentials = true;
    axios({
        method: 'DELETE',
        url: deleteUrl,
        withCredentials: true,
        data: product,
        headers: {
            "Content-Type": "application/json",
        }
    })

}
export function addProduct(product) {
    axios.defaults.withCredentials = true;
    axios({
        method: 'POST',
        url: addUrl,
        withCredentials: true,
        data: product
    })
}
