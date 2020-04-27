import axios from "axios";

const modifyUrl = "http://localhost:8080/customers/modify";
const addUrl = "http://localhost:8080/customers/add";
const deleteUrl = "http://localhost:8080/customers/delete"

export function handleEdit(product) {
    axios.put(modifyUrl, product, {
        headers: { "Content-Type": "application/json" },
    });
}
export function handleDelete(product) {
    axios.delete(deleteUrl, {
        headers: {
            "Content-Type": "application/json",
        },
        data: product,
    });
}
export function addProduct(product) {
    axios.post(addUrl, product);
}
