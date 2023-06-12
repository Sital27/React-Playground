import React from "react";
import events from "./events.json";
 //import { useTable } from '@tanstack/react-table';


const EventComponent = () => {
  const sortBySoldFilter = Object.keys(events.data).map(
    (key) => events.data[key]
  );

  const sort = (a, b) => {
    let totalSoldForA = a.tickets.reduce(
      (total, ticket) => total + ticket.sold,
      0
    );

    let totalSoldForB = b.tickets.reduce(
      (total, ticket) => total + ticket.sold,
      0
    );
   
return totalSoldForB - totalSoldForA;
  };

  console.log("checking data events", sort);

  return <div>{}</div>;
};

export default EventComponent;
