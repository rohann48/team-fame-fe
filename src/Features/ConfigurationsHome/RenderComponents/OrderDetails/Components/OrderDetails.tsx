import React from "react";
import { OrderDetailsTypes } from "../OrderDetailsTypes";
import "../SCSS/styles.scss";

function OrderDetails({ schemeDetails }: OrderDetailsTypes) {
  console.log("schemeDetails", schemeDetails);

  return (
    <div className="admin-gold-scheme-container">
      <h2>Order Details</h2>
      <table>
        <thead>
          <tr>
            <th>Client Name</th>
            <th>Contact</th>
            <th>Details</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          {schemeDetails.length > 0 ? (
            schemeDetails.map((order) => (
              <tr key={order._id}>
                <td>{order?.clientInfo?.name}</td>
                <td>{order?.clientInfo?.contactNo}</td>
                <td>
                  {order?.orderDetails?.length > 0
                    ? order.orderDetails.map((investment, index) => (
                        <div key={index} className="list-item">
                          {/* <ul> */}
                          {/* <li> */}
                          Product: {investment.name} | Quantity:
                          {investment.quantity} | Price: {investment.price}
                          {index < order.orderDetails.length - 1 ? ", " : ""}
                          {/* </li> */}
                          {/* </ul> */}
                        </div>
                      ))
                    : ""}
                </td>
                <td>{new Date(order.createdAt).toLocaleString()}</td>
                {/* <td>{new Date(scheme.updatedAt).toLocaleString()}</td> */}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7} style={{ textAlign: "center" }}>
                No order details available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default OrderDetails;
