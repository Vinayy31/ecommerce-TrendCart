import React, {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

function Products() {

  const navigate =
    useNavigate();

  const [products, setProducts] =
    useState([]);

  const [loading, setLoading] =
    useState(true);


  useEffect(() => { 

    fetch("http://localhost:4000/api/products")

      .then((res) =>
        res.json()
      )

      .then((data) => {

        setProducts(data);

        setLoading(false);
      })

      .catch((error) => {

        console.log(error);

        setLoading(false);
      });

  }, []);


  if (loading) {
    return (
      <h1
        style={{
          textAlign: "center",
          marginTop: "100px",
        }}
      >
        Loading Products...
      </h1>
    );
  }
  return (

    <div
      style={{
        backgroundColor: "#f8fafc",
        minHeight: "100vh",
        padding: "30px",
      }}
    >

      {/* HEADER */}

      <div
        style={{
          background:
            "linear-gradient(to right, #2563eb, #7c3aed)",
          padding: "50px 20px",
          borderRadius: "20px",
          marginBottom: "40px",
          color: "white",
          textAlign: "center",
        }}
      >

        <h1
          style={{
            fontSize: "55px",
            marginBottom: "10px",
          }}
        >
          TrendCart
        </h1>

        <p
          style={{
            fontSize: "20px",
          }}
        >
          Premium Shopping Experience
        </p>

      </div>


      {/* PRODUCTS */}

      {products.length === 0 ? (

        <h2
          style={{
            textAlign: "center",
          }}
        >
          No Products Found
        </h2>

      ) : (

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
          }}
        >

          {products.map((product) => (

            <div
              key={product._id}
              style={{
                backgroundColor: "white",
                borderRadius: "18px",
                overflow: "hidden",
                boxShadow:
                  "0 5px 20px rgba(0,0,0,0.1)",
                transition: "0.3s",
              }}
            >

              <a
                href={`/product/${product._id}`}
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >

                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "250px",
                    objectFit: "cover",
                  }}
                />


                <div
                  style={{
                    padding: "20px",
                  }}
                >

                  <p
                    style={{
                      color: "#2563eb",
                      fontWeight: "bold",
                      marginBottom: "5px",
                    }}
                  >
                    {product.category}
                  </p>


                  <h2
                    style={{
                      fontSize: "24px",
                      marginBottom: "10px",
                    }}
                  >
                    {product.name}
                  </h2>


                  <p
                    style={{
                      color: "#6b7280",
                      marginBottom: "15px",
                    }}
                  >
                    Brand:
                    {" "}
                    {product.brand}
                  </p>


                  <h3
                    style={{
                      color: "#111827",
                      fontSize: "28px",
                    }}
                  >
                    ₹ {product.price}
                  </h3>

                </div>

              </a>


              <div
                style={{
                  padding: "0 20px 20px",
                }}
              >

                <button
                  onClick={() => {

                    const cartItems =
                      JSON.parse(
                        localStorage.getItem("cart")
                      ) || [];

                    cartItems.push(product);

                    localStorage.setItem(
                      "cart",
                      JSON.stringify(cartItems)
                    );

                    navigate("/cart");
                  }}
                  style={{
                    width: "100%",
                    padding: "14px",
                    background:
                      "linear-gradient(to right, #2563eb, #7c3aed)",
                    color: "white",
                    border: "none",
                    borderRadius: "10px",
                    cursor: "pointer",
                    fontSize: "16px",
                    fontWeight: "bold",
                  }}
                >
                  Add To Cart
                </button>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default Products;