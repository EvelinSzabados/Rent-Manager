import axios from "axios";

export function handleEdit(event, id) {
  event.preventDefault();

  const modifyUrl = `http://localhost:8762/product/product/setStatus/${id}`;
  axios.defaults.withCredentials = true;
  axios({
    method: "POST",
    url: modifyUrl,
    withCredentials: true,
  });
}
