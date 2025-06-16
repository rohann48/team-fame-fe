import React, { useEffect, useState } from "react";
import { OrderDetailsTypes } from "../OrderDetailsTypes";
import "../SCSS/styles.scss";
import { orderStatus } from "../../../../Common/Enums/status.enum";

function OrderDetails({
  schemeDetails,
  confirmDeleteEvent,
  userInfo,
}: OrderDetailsTypes) {
  //mobile view
  const [windowDimension, setWindowDimension] = useState<number | null>(null);
  //to check isMobile view or not
  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowDimension(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const isMobile = windowDimension && windowDimension <= 950 ? true : false;
  return (
    <div className="admin-gold-scheme-container">
      <h2>Order Details</h2>

      {/* Desktop Table - Your existing table */}
      {!isMobile && (
        <table>
          <thead>
            <tr>
              <th>Client Name</th>
              <th>Contact</th>
              <th>Details</th>
              <th>Payment Mode</th>
              <th>Payment Status</th>
              {userInfo?.role === "admin" && <th>Order Status</th>}
              <th>Created At</th>
            </tr>
          </thead>
          <tbody style={{ maxHeight: "560px" }}>
            {schemeDetails.length > 0 ? (
              schemeDetails.map((order) => (
                <tr key={order._id}>
                  <td>{order?.clientInfo?.name}</td>
                  <td>{order?.clientInfo?.contactNo}</td>
                  <td>
                    {order?.orderDetails?.length > 0
                      ? order.orderDetails.map((investment, index) => (
                          <div key={index} className="list-item">
                            Product: {investment.name} | Quantity:
                            {investment.quantity} | Price: {investment.price}
                            {index < order.orderDetails.length - 1 ? ", " : ""}
                          </div>
                        ))
                      : ""}
                  </td>
                  <td>{order.paymentMode}</td>
                  <td>{order.paymentStatus}</td>
                  {userInfo?.role === "admin" && (
                    <td>
                      <select
                        className="order-status-select"
                        value={order?.status || ""}
                        onChange={(e) =>
                          confirmDeleteEvent(e.target.value, order._id)
                        }
                        style={{
                          width: "110px",
                        }}
                      >
                        <option value="" disabled>
                          Select Order Status
                        </option>
                        <option value={orderStatus.ORDERPLACED}>
                          {orderStatus.ORDERPLACED}
                        </option>
                        <option value={orderStatus.SHIPPED}>
                          {orderStatus.SHIPPED}
                        </option>
                        <option value={orderStatus.OUTFORDELIVERY}>
                          {orderStatus.OUTFORDELIVERY}
                        </option>
                        <option value={orderStatus.DELIVERED}>
                          {orderStatus.DELIVERED}
                        </option>
                        <option value={orderStatus.DELAYED}>
                          {orderStatus.DELAYED}
                        </option>
                      </select>
                    </td>
                  )}
                  <td>{new Date(order.createdAt).toLocaleString()}</td>
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
      )}

      {/* Mobile Cards - Only visible on mobile */}
      {isMobile && (
        <div className="mobile-order-cards">
          {schemeDetails.length > 0 ? (
            schemeDetails.map((order) => (
              <div key={order._id} className="order-card">
                {/* Card Header */}
                <div className="card-header">
                  <div className="client-name">
                    {order?.clientInfo?.name || "Unknown Client"}
                  </div>
                  <div className="contact">
                    {order?.clientInfo?.contactNo || "No contact"}
                  </div>
                </div>

                {/* Card Body */}
                <div className="card-body">
                  {/* Payment Information */}
                  <div className="info-row">
                    <span className="label">Payment Mode:</span>
                    <span className="value">{order.paymentMode || "N/A"}</span>
                  </div>

                  <div className="info-row">
                    <span className="label">Payment Status:</span>
                    <span className="value">
                      {order.paymentStatus || "Pending"}
                    </span>
                  </div>

                  {/* Order Details */}
                  {order?.orderDetails?.length > 0 && (
                    <div className="order-details">
                      <div className="details-label">Order Items:</div>
                      <div className="details-content">
                        {order.orderDetails.map((item, index) => (
                          <div key={index} className="detail-item">
                            <strong>Product:</strong> {item.name} |{" "}
                            <strong>Quantity:</strong> {item.quantity} |{" "}
                            <strong>Price:</strong> ₹{item.price}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Admin Status Selector */}
                  {userInfo?.role === "admin" && (
                    <div className="status-section">
                      <div className="status-label">Update Order Status:</div>
                      <select
                        className="order-status-select"
                        value={order?.status || ""}
                        onChange={(e) =>
                          confirmDeleteEvent(e.target.value, order._id)
                        }
                      >
                        <option value="" disabled>
                          Select Order Status
                        </option>
                        <option value={orderStatus.ORDERPLACED}>
                          {orderStatus.ORDERPLACED}
                        </option>
                        <option value={orderStatus.SHIPPED}>
                          {orderStatus.SHIPPED}
                        </option>
                        <option value={orderStatus.OUTFORDELIVERY}>
                          {orderStatus.OUTFORDELIVERY}
                        </option>
                        <option value={orderStatus.DELIVERED}>
                          {orderStatus.DELIVERED}
                        </option>
                        <option value={orderStatus.DELAYED}>
                          {orderStatus.DELAYED}
                        </option>
                      </select>
                    </div>
                  )}

                  {/* Timestamp */}
                  <div className="timestamp">
                    Created:{" "}
                    {new Date(order.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </div>
                </div>
              </div>
            ))
          ) : (
            // Empty State
            <div className="empty-state">
              <div className="empty-icon">📦</div>
              <div className="empty-text">No order details available</div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default OrderDetails;
