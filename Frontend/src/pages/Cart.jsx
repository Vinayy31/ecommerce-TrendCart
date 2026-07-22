import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Cart.css";

function Cart() {
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const cartData =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCart(cartData);
  }, []);

  const removeFromCart = (indexToRemove) => {
    const updatedCart = cart.filter(
      (_, index) => index !== indexToRemove
    );

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };

  const totalPrice = cart.reduce(
    (total, item) =>
      total + item.price * (item.qty || 1),
    0
  );

  return (
    <>
      <Navbar />

      <div className="cart-container">

        <h1 className="cart-title">
          🛒 Shopping Cart
        </h1>

        {cart.length === 0 ? (

          <div className="empty-cart">

            <h2>Your Cart is Empty</h2>

            <p>
              Looks like you haven't added any products yet.
            </p>

            <button
              className="continue-btn"
              onClick={() =>
                navigate("/products")
              }
            >
              Continue Shopping
            </button>

          </div>

        ) : (

          <div className="cart-layout">

            <div className="cart-items">

              {cart.map((item, index) => (

                <div
                  key={index}
                  className="cart-item"
                >

                  <div className="cart-product">

                    <img
                      src={item.image}
                      alt={item.name}
                      className="cart-image"
                    />

                    <div className="product-info">

                      <h2>{item.name}</h2>

                      <p>{item.brand}</p>

                      <p>
                        Category : {item.category}
                      </p>

                      <p>
                        Quantity : {item.qty || 1}
                      </p>

                      <h3>
                        ₹ {item.price}
                      </h3>

                    </div>

                  </div>

                  <button
                    className="remove-btn"
                    onClick={() =>
                      removeFromCart(index)
                    }
                  >
                    Remove
                  </button>

                </div>

              ))}

            </div>

            <div className="cart-summary">

              <h2>Order Summary</h2>

              <hr />

              <p>
                Total Items :
                <strong> {cart.length}</strong>
              </p>

              <p>
                Delivery :
                <strong> FREE</strong>
              </p>

              <h2>
                Total :
                ₹ {totalPrice}
              </h2>

              <button
                className="checkout-btn"
                onClick={() =>
                  navigate("/checkout")
                }
              >
                Proceed To Checkout
              </button>

              <button
                className="continue-btn"
                onClick={() => navigate("/products")}
              >
                Continue Shopping
              </button>

            </div>

          </div>

        )}

      </div>

    </>
  );
}

export default Cart;