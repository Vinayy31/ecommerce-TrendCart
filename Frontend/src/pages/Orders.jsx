import React, {
  useEffect,
  useState,
} from "react";

function Orders() {

  const [orders, setOrders] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    fetch(
      "http://localhost:4000/api/orders"
    )

      .then((res) =>
        res.json()
      )

      .then((data) => {

        if (
          Array.isArray(data)
        ) {

          setOrders(data);

        } else {

          setOrders([]);
        }

        setLoading(false);
      })

      .catch((error) => {

        console.log(error);

        setLoading(false);
      });

  }, []);

  const returnOrder = async (
    orderId
  ) => {

    try {

      const response =
        await fetch(
          `http://localhost:4000/api/orders/return/${orderId}`,
          {
            method: "PUT",
          }
        );

      const data =
        await response.json();

      alert(
        data.message
      );

      window.location.reload();

    } catch (error) {

      console.log(error);

      alert(
        "Return Failed"
      );
    }
  };

  if (loading) {

    return (

      <h1
        style={{
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        Loading...
      </h1>
    );
  }

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
          marginBottom: "20px",
          fontSize: "45px",
        }}
      >
        Your Orders
      </h1>

      <h2
        style={{
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        Total Orders:
        {" "}
        {orders.length}
      </h2>

      {orders.length === 0 ? (

        <h2
          style={{
            textAlign: "center",
          }}
        >
          No Orders Found
        </h2>

      ) : (

        orders.map(
          (
            order,
            index
          ) => (

            <div
              key={order._id}
              style={{
                backgroundColor:
                  "white",
                padding: "25px",
                borderRadius:
                  "15px",
                marginBottom:
                  "30px",
                boxShadow:
                  "0 5px 15px rgba(0,0,0,0.1)",
              }}
            >

              <h2
                style={{
                  color:
                    "#2563eb",
                  marginBottom:
                    "20px",
                }}
              >
                Order #{index + 1}
              </h2>

              <p>
                <strong>
                  Name:
                </strong>{" "}
                {order.name ||
                  order.user}
              </p>

              {order.phone && (

                <p>
                  <strong>
                    Phone:
                  </strong>{" "}
                  {order.phone}
                </p>

              )}

              <p>
                <strong>
                  Address:
                </strong>{" "}
                {typeof order.shippingAddress ===
                "string"
                  ? order.shippingAddress
                  : order.shippingAddress?.address}
              </p>

              <p>
                <strong>
                  Total Price:
                </strong>{" "}
                ₹
                {order.totalPrice}
              </p>

              <p>
                <strong>
                  Status:
                </strong>{" "}
                {order.isReturned
                  ? "Returned ❌"
                  : "Active ✅"}
              </p>

              {!order.isReturned && (

                <button
                  onClick={() =>
                    returnOrder(
                      order._id
                    )
                  }
                  style={{
                    backgroundColor:
                      "#ef4444",
                    color:
                      "white",
                    border:
                      "none",
                    padding:
                      "10px 15px",
                    borderRadius:
                      "8px",
                    cursor:
                      "pointer",
                    marginTop:
                      "10px",
                    marginBottom:
                      "20px",
                  }}
                >
                  Return Product
                </button>

              )}

              <h3
                style={{
                  marginTop:
                    "20px",
                  marginBottom:
                    "20px",
                }}
              >
                Ordered Products
              </h3>

              {order.orderItems &&
              Array.isArray(
                order.orderItems
              ) ? (

                order.orderItems.map(
                  (
                    item,
                    i
                  ) => (

                    <div
                      key={i}
                      style={{
                        display:
                          "flex",
                        alignItems:
                          "center",
                        gap: "20px",
                        border:
                          "1px solid #ddd",
                        padding:
                          "15px",
                        borderRadius:
                          "10px",
                        marginBottom:
                          "15px",
                      }}
                    >

                      <img
                        src={
                          item.image
                        }
                        alt={
                          item.name
                        }
                        style={{
                          width:
                            "100px",
                          height:
                            "100px",
                          objectFit:
                            "cover",
                          borderRadius:
                            "10px",
                        }}
                      />

                      <div>

                        <h2>
                          {
                            item.name
                          }
                        </h2>

                        <h3>
                          ₹
                          {
                            item.price
                          }
                        </h3>

                      </div>

                    </div>
                  )
                )

              ) : (

                <p>
                  No Products Found
                </p>

              )}

            </div>
          )
        )
      )}

    </div>
  );
}

export default Orders;