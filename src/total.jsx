import React from "react";
import { useReactTable } from '@tanstack/react-table';
import orders from "./orders.json";

const TotalMoneySpent = () => {
  const dataOrders = Object.keys(orders.data).map((key) => orders.data[key]);
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useReactTable({
    dataOrders,
  });
  const userWithEmail = dataOrders.filter(
    (order) => order.user.email === "hello@sessami.co"
  );

  const totalMoneySpentByUser = userWithEmail.reduce(
    (total, order) => total + order.cartTotal,
    0
  );


  console.log("spent", totalMoneySpentByUser);
  return (
<table {...getTableProps()}>
  <thead>
    {headerGroups.map((headerGroup) => (
      <tr {...headerGroup.getHeaderGroupProps()}>
        {headerGroup.headers.map((column) => (
          <th {...column.getHeaderProps()}>{column.render('Header')}</th>
        ))}
      </tr>
    ))}
  </thead>
  <tbody {...getTableBodyProps()}>
    {rows.map((row) => {
      prepareRow(row);
      return (
        <tr {...row.getRowProps()}>
          {row.cells.map((cell) => (
            <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
          ))}
        </tr>
      );
    })}
  </tbody>
</table>
  // <div>{totalMoneySpentByUser} </div>
  );
};

export default TotalMoneySpent;
