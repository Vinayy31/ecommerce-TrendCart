import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Checkout.css";

function Checkout() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [success, setSuccess] = useState(false);

  const cartItems =
    JSON.parse(localStorage.getItem("cart")) || [];

  const totalPrice = cartItems.reduce(
    (total, item) =>
      total + item.price * (item.qty || 1),
    0
  );

  const placeOrder = async () => {
    if (!name || !address || !phone) {
      alert("Please fill all fields");
      return;
    }

    if (cartItems.length === 0) {
      alert("Cart is Empty");
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/orders`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            phone,
            orderItems: cartItems,
            shippingAddress: address,
            totalPrice,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      localStorage.removeItem("cart");

      setSuccess(true);

      setTimeout(() => {
        navigate("/orders");
      }, 1500);
    } catch (error) {
      console.log(error);
      alert("Order Failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="checkout-container">

        <div className="checkout-left">

          <h1>Checkout</h1>

          <input
            className="checkout-input"
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(e.target.value)
            }
          />

          <input
            className="checkout-input"
            type="text"
            placeholder="Shipping Address"
            value={address}
            onChange={(e) =>
              setAddress(e.target.value)
            }
          />

          <input
            className="checkout-input"
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) =>
              setPhone(e.target.value)
            }
          />

          <div className="payment-box">

            <h3>Payment Method</h3>

            <p>💵 Cash On Delivery</p>

            <p>🚚 Free Delivery</p>

            <p>🔄 Easy Return Available</p>

          </div>

          <button
            className="place-order-btn"
            onClick={placeOrder}
          >
            Place Order
          </button>

          <button
            className="back-cart-btn"
            onClick={() => navigate("/cart")}
          >
            ← Back To Cart
          </button>

          {success && (
            <h2 className="success-message">
              Order Placed Successfully ✅
            </h2>
          )}

        </div>

        <div className="checkout-right">

          <h2>Order Summary</h2>

          <hr />

          {cartItems.map((item, index) => (
            <div
              key={index}
              className="summary-item"
            >
              <span>{item.name}</span>

              <span>
                ₹ {item.price}
              </span>
            </div>
          ))}

          <hr />

          <h3>Total : ₹ {totalPrice}</h3>

        </div>

      </div>
    </>
  );
}

export default Checkout;