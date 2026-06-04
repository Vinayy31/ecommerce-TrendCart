import React, {
  useEffect,
  useState,
} from "react";

function Cart() {

  const [cart, setCart] =
    useState([]);


  useEffect(() => {

    const cartData =
      JSON.parse(
        localStorage.getItem("cart")
      ) || [];

    setCart(cartData);

  }, []);


  const removeFromCart = (
    indexToRemove
  ) => {

    const updatedCart =
      cart.filter(
        (_, index) =>
          index !== indexToRemove
      );

    setCart(updatedCart);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );
  };


  const totalPrice =
    cart.reduce(
      (total, item) =>
        total + item.price,
      0
    );


  return (

    <div
      style={{
        padding: "40px",
        backgroundColor: "#f3f4f6",
        minHeight: "100vh",
      }}
    >

      <h1
        style={{
          textAlign: "center",
          marginBottom: "40px",
          fontSize: "40px",
        }}
      >
        Shopping Cart
      </h1>


      {cart.length === 0 ? (

        <h2
          style={{
            textAlign: "center",
          }}
        >
          Cart is Empty
        </h2>

      ) : (

        <div>

          {cart.map((item, index) => (

            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent:
                  "space-between",
                gap: "20px",
                backgroundColor: "white",
                padding: "20px",
                marginBottom: "20px",
                borderRadius: "10px",
                boxShadow:
                  "0 2px 10px rgba(0,0,0,0.1)",
              }}
            >

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                }}
              >

                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />


                <div>

                  <h2>
                    {item.name}
                  </h2>

                  <p>
                    {item.brand}
                  </p>

                  <h3>
                    ₹ {item.price}
                  </h3>

                </div>

              </div>


              <button
                onClick={() =>
                  removeFromCart(
                    index
                  )
                }
                style={{
                  padding:
                    "10px 15px",
                  backgroundColor:
                    "red",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>

            </div>

          ))}


          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "10px",
              marginTop: "30px",
              textAlign: "center",
            }}
          >

            <h2>
              Total:
              ₹ {totalPrice}
            </h2>


            <button
              onClick={() =>
                window.location.href =
                  "/checkout"
              }
              style={{
                padding:
                  "15px 30px",
                backgroundColor:
                  "green",
                color: "white",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "16px",
                marginTop: "20px",
              }}
            >
              Proceed To Checkout
            </button>

          </div>

        </div>
      )}

    </div>
  );
}

export default Cart;