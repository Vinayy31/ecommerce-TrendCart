import React, {
  useState,
} from "react";

function Checkout() {

  const [name, setName] =
    useState("");

  const [address, setAddress] =
    useState("");

  const [phone, setPhone] =
    useState("");

  const [success, setSuccess] =
    useState(false);


  const placeOrder = async () => {

    if (
      !name ||
      !address ||
      !phone
    ) {

      alert(
        "Please fill all fields"
      );

      return;
    }


    const cartItems =
      JSON.parse(
        localStorage.getItem("cart")
      ) || [];


    if (cartItems.length === 0) {

      alert(
        "Cart is Empty"
      );

      return;
    }


    const totalPrice =
      cartItems.reduce(
        (
          total,
          item
        ) =>
          total +
          item.price,
        0
      );


    try {

      const response =
        await fetch(
          "http://localhost:4000/api/orders",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({

              name,

              phone,

              orderItems:
                cartItems,

              shippingAddress:
                address,

              totalPrice,

            }),
          }
        );


      const data =
        await response.json();

      console.log(
        "Order Created:",
        data
      );


      if (!response.ok) {

        alert(
          data.message
        );

        return;
      }


      localStorage.removeItem(
        "cart"
      );


      setSuccess(true);


      setTimeout(() => {

        window.location.href =
          "/orders";

      }, 1500);

    } catch (error) {

      console.log(error);

      alert(
        "Order Failed"
      );
    }
  };


  return (

    <div
      style={{
        maxWidth: "500px",
        margin: "50px auto",
        padding: "30px",
        backgroundColor:
          "white",
        borderRadius:
          "15px",
        boxShadow:
          "0 5px 15px rgba(0,0,0,0.1)",
      }}
    >

      <h1
        style={{
          textAlign:
            "center",
          marginBottom:
            "30px",
        }}
      >
        Checkout
      </h1>


      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) =>
          setName(
            e.target.value
          )
        }
        style={{
          width: "100%",
          padding: "12px",
          marginBottom:
            "20px",
        }}
      />


      <input
        type="text"
        placeholder="Enter Address"
        value={address}
        onChange={(e) =>
          setAddress(
            e.target.value
          )
        }
        style={{
          width: "100%",
          padding: "12px",
          marginBottom:
            "20px",
        }}
      />


      <input
        type="text"
        placeholder="Enter Phone Number"
        value={phone}
        onChange={(e) =>
          setPhone(
            e.target.value
          )
        }
        style={{
          width: "100%",
          padding: "12px",
          marginBottom:
            "20px",
        }}
      />


      <h3>
        Payment Method:
        Cash On Delivery
      </h3>


      <button
        onClick={
          placeOrder
        }
        style={{
          width: "100%",
          padding: "15px",
          backgroundColor:
            "#2563eb",
          color: "white",
          border: "none",
          borderRadius:
            "10px",
          cursor: "pointer",
          marginTop:
            "20px",
          fontSize:
            "16px",
        }}
      >
        Place Order
      </button>


      {success && (

        <h2
          style={{
            color:
              "green",
            textAlign:
              "center",
            marginTop:
              "20px",
          }}
        >
          Order Placed
          Successfully ✅
        </h2>

      )}

    </div>
  );
}

export default Checkout;