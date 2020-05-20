import axios from "axios";




export function handleEdit(event, notif_id, id) {
    event.preventDefault();
    // const notif = document.querySelector(`notif_container_${notif_id}`);
    // notif.style.display = 'none';

    const modifyUrl = `http://localhost:8080/product/setStatus/${id}`;
    axios.defaults.withCredentials = true;
    axios({
        method: 'POST',
        url: modifyUrl,
        withCredentials: true,

    })

}
