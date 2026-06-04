import React, {
  useEffect,
  useState,
} from "react";

import {
  useParams,
  useNavigate,
} from "react-router-dom";

function ProductDetails() {

  const { id } = useParams();

  const navigate =
    useNavigate();

  const [product, setProduct] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {

    fetch(
      `http://localhost:4000/api/products/${id}`
    )

      .then((res) => res.json())

      .then((data) => {

        console.log(data);

        setProduct(data);

        setLoading(false);
      })

      .catch((error) => {

        console.log(error);

        setLoading(false);
      });

  }, [id]);

  // ADD TO CART

  const addToCart = () => {

    const cartItems =
      JSON.parse(
        localStorage.getItem("cart")
      ) || [];

    cartItems.push(product);

    localStorage.setItem(
      "cart",
      JSON.stringify(cartItems)
    );

    alert(
      "Product Added To Cart ✅"
    );

    navigate("/cart");
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

  if (!product) {

    return (
      <h1
        style={{
          textAlign: "center",
          marginTop: "50px",
        }}
      >
        Product Not Found
      </h1>
    );
  }

  return (

    <div
      style={{
        padding: "40px",
        display: "flex",
        gap: "40px",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >

      {/* IMAGE */}

      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "400px",
          maxWidth: "100%",
          borderRadius: "15px",
        }}
      />

      {/* DETAILS */}

      <div
        style={{
          maxWidth: "500px",
        }}
      >

        <h1>
          {product.name}
        </h1>

        <h2>
          ₹ {product.price}
        </h2>

        <p>
          <strong>
            Brand:
          </strong>{" "}
          {product.brand}
        </p>

        <p>
          <strong>
            Category:
          </strong>{" "}
          {product.category}
        </p>

        <p>
          <strong>
            Description:
          </strong>{" "}
          {product.description}
        </p>

        <p>
          <strong>
            Stock:
          </strong>{" "}
          {product.countInStock}
        </p>

        <button
          onClick={addToCart}
          style={{
            marginTop: "20px",
            padding: "12px 25px",
            backgroundColor: "black",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Add To Cart
        </button>

      </div>

    </div>
  );
}

export default ProductDetails;