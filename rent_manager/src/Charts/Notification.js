import React, { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";
import { handleEdit } from "./NotificationDataHandler";

export default function Notification() {
  const { notification } = useContext(NotificationContext);
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
              <tbody>
                <tr className="th">
                  <td>ID</td>
                  <td>Product name</td>
                  <td>End date</td>

                </tr>
              </tbody>

              {notification.rentedProductsDetails === null ? "" : notification.rentedProductsDetails.map((product) => (
                <tbody key={"tbody_" + product.id}>
                  <tr key={"tr_" + product.id}>
                    <td key={"td_id" + product.id}>{product.id}</td>
                    <td key={"td_name" + product.id}>{product.name}</td>
                    <td key={"td_date" + product.id}>{notification.endDate}</td>
                    <td>
                      <button style={{ float: 'right', margin: '0 10px' }}
                        className="submit_button" onClick={(e) => { handleEdit(e, notification.id, product.id) }}>Done</button>
                      <button style={{ float: 'right', margin: '0 10px' }} className="submit_button">Extend</button>
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
