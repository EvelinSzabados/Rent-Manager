import React, { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";
import axios from "axios";
// import { handleEdit } from "./NotificationDataHandler";
import { ProductContext } from "../context/ProductContext";
// import { DatePicker, KeyboardDatePicker } from "@material-ui/pickers";

export default function Notification() {
  const { notification } = useContext(NotificationContext);
  const { product, setProduct } = useContext(ProductContext);
  return (
    <React.Fragment>

      {/* <div className="notification_wrapper"> */}
      {notification.length === 0 ? <h2 className="notification_header"> No Notifications</h2> : <h2 className="notification_header">Notifications</h2>}
      {notification.map((notification) => (
        notification.rentedProductsDetails === null ? "" :
          <div className="notification_container" key={"notif_container_" + notification.id}
            id={"notif_container_" + notification.id}>
            <table className="notification_table" key={"table_" + notification.id}>
              <caption key={"caption_" + notification.id}>Customer name:{" " + notification.customer.first_name + " " +
                notification.customer.last_name}</caption>


              {notification.rentedProductsDetails === null ? "" : notification.rentedProductsDetails.map((rentedProduct) => (
                <tbody key={"tbody_" + rentedProduct.id}>
                  <tr key={"tr_" + rentedProduct.id}>
                    <td className="notif_id" key={"td_id" + rentedProduct.id}>{rentedProduct.id}</td>
                    <td key={"td_name" + rentedProduct.id}>{rentedProduct.name}</td>
                    <td key={"td_date" + rentedProduct.id}>{notification.endDate}</td>
                    <td>
                      <button style={{ float: 'right', margin: '0 10px' }}
                        className="submit_button" onClick={(e) => {

                          const modifyUrl = `http://localhost:8080/product/setStatus/${rentedProduct.id}`;
                          axios.defaults.withCredentials = true;
                          axios({
                            method: 'POST',
                            url: modifyUrl,
                            withCredentials: true,

                          })

                          let newProductList = [...product]
                          newProductList.map(prod => {
                            if (prod.id === rentedProduct.id) {
                              prod.status.id = 1;
                              prod.status.name = 'Available';
                            }
                          })
                          setProduct(newProductList);
                        }}>Done</button>

                    </td>

                  </tr>
                </tbody>
              ))}

            </table>

          </div>
      )

      )
      }
      {/* </div> */}
    </React.Fragment >
  );
}
