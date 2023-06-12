
import React from "react";
import orders from "./orders.json";

const MyComponent = () => {
  const dataOrders = Object.keys(orders.data).map((key) => orders.data[key]);

  const filterdObject = dataOrders.filter(
    (order) => order.user.email === "hello@sessami.co"
  );

  const totalTicketsPurchased = filterdObject.reduce(
    (total, order) => total + order.ticketList.length,
    0
  );

  return (
    <div>
     <div>{filterdObject.map(i => (<div> { i?.user?.email}</div>)  )}</div>
      <p>
        The number of orders for user hello@sessami.co are:
        {filterdObject.length}
      </p>
      <p>Tickets purchased: {totalTicketsPurchased}</p>
    </div>
  );
};

export default MyComponent;
