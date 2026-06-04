import React, {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

function Admin() {

  const navigate =
    useNavigate();

  const [products, setProducts] =
    useState([]);

  // ADMIN PROTECTION

  useEffect(() => {

    const userInfo =
      JSON.parse(
        localStorage.getItem(
          "userInfo"
        )
      );

    if (
      !userInfo ||
      !userInfo.isAdmin
    ) {

      alert(
        "Access Denied"
      );

      navigate("/login");

      return;
    }

    fetchProducts();

  }, [navigate]);

  // FETCH PRODUCTS

  const fetchProducts = () => {

    fetch(
      "http://localhost:4000/api/products"
    )

      .then((res) =>
        res.json()
      )

      .then((data) => {

        console.log(data);

        setProducts(data);
      })

      .catch((error) => {

        console.log(error);
      });
  };

  // DELETE PRODUCT

  const deleteProduct = async (
    id
  ) => {

    const confirmDelete =
      window.confirm(
        "Delete this product?"
      );

    if (!confirmDelete)
      return;

    try {

      await fetch(
        `http://localhost:4000/api/products/${id}`,
        {
          method: "DELETE",
        }
      );

      alert(
        "Product Deleted"
      );

      fetchProducts();

    } catch (error) {

      console.log(error);
    }
  };

  // EDIT PRODUCT

  const editProduct =
    async (product) => {

      const newName =
        prompt(
          "Enter Product Name",
          product.name
        );

      const newPrice =
        prompt(
          "Enter Product Price",
          product.price
        );

      if (
        !newName ||
        !newPrice
      )
        return;

      try {

        await fetch(
          `http://localhost:4000/api/products/${product._id}`,
          {
            method: "PUT",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              name: newName,
              price: newPrice,
            }),
          }
        );

        alert(
          "Product Updated"
        );

        fetchProducts();

      } catch (error) {

        console.log(error);
      }
    };

  // LOGOUT

  const logoutHandler = () => {

    localStorage.removeItem(
      "userInfo"
    );

    navigate("/login");
  };

  return (

    <div
      style={{
        padding: "40px",
        backgroundColor:
          "#f3f4f6",
        minHeight: "100vh",
      }}
    >

      {/* HEADER */}

      <div
        style={{
          display: "flex",
          justifyContent:
            "space-between",
          alignItems:
            "center",
          marginBottom:
            "30px",
        }}
      >

        <h1>
          Admin Dashboard
        </h1>

        <div>

          <button
            onClick={() =>
              navigate(
                "/products"
              )
            }
            style={{
              padding:
                "10px 20px",
              backgroundColor:
                "black",
              color:
                "white",
              border:
                "none",
              borderRadius:
                "8px",
              cursor:
                "pointer",
              marginRight:
                "10px",
            }}
          >
            View Store
          </button>

          <button
            onClick={
              logoutHandler
            }
            style={{
              padding:
                "10px 20px",
              backgroundColor:
                "red",
              color:
                "white",
              border:
                "none",
              borderRadius:
                "8px",
              cursor:
                "pointer",
            }}
          >
            Logout
          </button>

        </div>

      </div>

      {/* TABLE */}

      <table
        border="1"
        cellPadding="15"
        style={{
          width: "100%",
          borderCollapse:
            "collapse",
          backgroundColor:
            "white",
        }}
      >

        <thead
          style={{
            backgroundColor:
              "#111827",
            color: "white",
          }}
        >

          <tr>

            <th>Image</th>

            <th>Name</th>

            <th>Brand</th>

            <th>Category</th>

            <th>Price</th>

            <th>Actions</th>

          </tr>

        </thead>

        <tbody>

          {products.map(
            (product) => (

              <tr
                key={
                  product._id
                }
              >

                <td>

                  <img
                    src={
                      product.image
                    }
                    alt={
                      product.name
                    }
                    width="80"
                    height="80"
                    style={{
                      objectFit:
                        "cover",
                    }}
                  />

                </td>

                <td>
                  {
                    product.name
                  }
                </td>

                <td>
                  {
                    product.brand
                  }
                </td>

                <td>
                  {
                    product.category
                  }
                </td>

                <td>
                  ₹{" "}
                  {
                    product.price
                  }
                </td>

                <td>

                  <button
                    onClick={() =>
                      editProduct(
                        product
                      )
                    }
                    style={{
                      marginRight:
                        "10px",
                      padding:
                        "8px 15px",
                      border:
                        "none",
                      backgroundColor:
                        "#2563eb",
                      color:
                        "white",
                      borderRadius:
                        "5px",
                      cursor:
                        "pointer",
                    }}
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      deleteProduct(
                        product._id
                      )
                    }
                    style={{
                      padding:
                        "8px 15px",
                      border:
                        "none",
                      backgroundColor:
                        "red",
                      color:
                        "white",
                      borderRadius:
                        "5px",
                      cursor:
                        "pointer",
                    }}
                  >
                    Delete
                  </button>

                </td>

              </tr>
            )
          )}

        </tbody>

      </table>

    </div>
  );
}

export default Admin;