import React, { useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";

export default function Notification() {
  const { notification, setNotification } = useContext(NotificationContext);
  return (
    <div>
      {notification.map((notification) => notification.customer.first_name)}
    </div>
  );
}
