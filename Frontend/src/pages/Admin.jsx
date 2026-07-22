import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

function Admin() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));

    if (!userInfo || !userInfo.isAdmin) {
      alert("Access Denied");
      navigate("/login");
      return;
    }

    fetchProducts();
  }, [navigate]);

  const fetchProducts = () => {
    fetch("http://localhost:4000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  };

  const deleteProduct = async (id) => {
    if (!window.confirm("Delete this product?")) return;

    try {
      await fetch(`http://localhost:4000/api/products/${id}`, {
        method: "DELETE",
      });

      alert("✅ Product Deleted Successfully");
      fetchProducts();
    } catch (err) {
      console.log(err);
    }
  };

  const editProduct = async (product) => {
    const newName = prompt("Product Name", product.name);
    const newPrice = prompt("Product Price", product.price);

    if (!newName || !newPrice) return;

    try {
      await fetch(`http://localhost:4000/api/products/${product._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: newName,
          price: newPrice,
        }),
      });

      alert("✅ Product Updated Successfully");
      fetchProducts();
    } catch (err) {
      console.log(err);
    }
  };

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    navigate("/login");
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const totalValue = products.reduce(
    (sum, product) => sum + Number(product.price),
    0
  );

  return (
    <div className="admin-container">



      <div className="admin-header">

        <div>
          <h1>🛒 TrendCart Admin Dashboard</h1>
          <p>Manage Products, Inventory & Store</p>
        </div>

        <div className="admin-buttons">

          <button
            className="add-btn"
            onClick={() => navigate("/add-product")}
          >
            ➕ Add Product
          </button>

          <button
            className="store-btn"
            onClick={() => navigate("/products")}
          >
            🛍 View Store
          </button>

          <button
            className="logout-btn"
            onClick={logoutHandler}
          >
            🚪 Logout
          </button>

        </div>

      </div>

      \
      <div className="dashboard-cards">

        <div className="card">
          <h2>{products.length}</h2>
          <p>Total Products</p>
        </div>

        <div className="card">
          <h2>
            {
              new Set(
                products.map((product) => product.category)
              ).size
            }
          </h2>
          <p>Categories</p>
        </div>

        <div className="card">
          <h2>₹ {totalValue.toLocaleString()}</h2>
          <p>Inventory Value</p>
        </div>

      </div>


      <div className="search-section">

        <input
          type="text"
          className="search-box"
          placeholder="🔍 Search Products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>


      <div className="table-container">

        <table className="admin-table">

          <thead>

            <tr>
              <th>📷 Image</th>
              <th>📦 Product</th>
              <th>🏷 Brand</th>
              <th>📂 Category</th>
              <th>💰 Price</th>
              <th>⚙ Actions</th>
            </tr>

          </thead>

          <tbody>

            {filteredProducts.length === 0 ? (

              <tr>
                <td colSpan="6" className="no-data">
                  No Products Found
                </td>
              </tr>

            ) : (

              filteredProducts.map((product) => (

                <tr key={product._id}>

                  <td>

                    <img
                      src={product.image}
                      alt={product.name}
                      className="product-image"
                    />

                  </td>

                  <td>
                    <strong>{product.name}</strong>
                  </td>

                  <td>{product.brand}</td>

                  <td>

                    <span className="category-badge">
                      {product.category}
                    </span>

                  </td>

                  <td className="price">
                    ₹ {Number(product.price).toLocaleString()}
                  </td>

                  <td>

                    <div className="action-buttons">

                      <button
                        className="edit-btn"
                        onClick={() => editProduct(product)}
                      >
                        ✏ Edit
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() =>
                          deleteProduct(product._id)
                        }
                      >
                        🗑 Delete
                      </button>

                    </div>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Admin;