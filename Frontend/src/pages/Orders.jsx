import React, { useEffect, useState } from "react";
import Navbar from "../components/NavBar";
import "./Orders.css";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/api/orders")
      .then((res) => res.json())
      .then((data) => {
        setOrders(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const returnOrder = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:4000/api/orders/return/${id}`,
        {
          method: "PUT",
        }
      );

      const data = await response.json();

      alert(data.message);

      window.location.reload();
    } catch (err) {
      alert("Return Failed");
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <h1 className="loading-text">Loading Orders...</h1>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="orders-container">

        <h1 className="orders-title">
          📦 My Orders
        </h1>

        <p className="orders-count">
          Total Orders : <strong>{orders.length}</strong>
        </p>

        {orders.length === 0 ? (
          <div className="empty-orders">
            <h2>No Orders Found</h2>
            <p>Your purchased products will appear here.</p>
          </div>
        ) : (
          orders.map((order, index) => (
            <div className="order-card" key={order._id}>

              <div className="order-header">

                <h2>Order #{index + 1}</h2>

                <span
                  className={
                    order.isReturned
                      ? "status returned"
                      : "status active"
                  }
                >
                  {order.isReturned
                    ? "Returned"
                    : "Active"}
                </span>

              </div>

              <div className="order-info">

                <p><strong>Name:</strong> {order.name}</p>

                <p><strong>Phone:</strong> {order.phone}</p>

                <p>
                  <strong>Address:</strong>{" "}
                  {order.shippingAddress}
                </p>

                <p>
                  <strong>Total:</strong> ₹
                  {order.totalPrice}
                </p>

              </div>

              <h3 className="product-heading">
                Ordered Products
              </h3>

              {order.orderItems?.map((item, i) => (
                <div
                  key={i}
                  className="order-product"
                >

                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div>

                    <h3>{item.name}</h3>

                    <p>₹ {item.price}</p>

                    <p>Qty : {item.qty}</p>

                  </div>

                </div>
              ))}

              {!order.isReturned && (
                <button
                  className="return-btn"
                  onClick={() =>
                    returnOrder(order._id)
                  }
                >
                  Return Product
                </button>
              )}

            </div>
          ))
        )}

      </div>
    </>
  );
}

export default Orders;