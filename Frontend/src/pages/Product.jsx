import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Product.css";

function Products() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("http://localhost:4000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      selectedCategory === "All"
        ? true
        : product.category.toLowerCase() ===
          selectedCategory.toLowerCase();

    return matchSearch && matchCategory;
  });

  const addToCart = (product) => {
    const cartItems =
      JSON.parse(localStorage.getItem("cart")) || [];

    cartItems.push(product);

    localStorage.setItem(
      "cart",
      JSON.stringify(cartItems)
    );

    alert("Product Added Successfully ✅");

    navigate("/cart");
  };

  if (loading) {
    return (
      <h1 className="loading">
        Loading Products...
      </h1>
    );
  }

  return (
    <div className="products-page">

      {/* Banner */}

      <div className="products-header">

        <h1>🛍️ TrendCart Store</h1>

        <p>
          Explore Premium Products with Amazing Offers
        </p>

        <div className="search-wrapper">

          <span className="search-icon">🔍</span>

          <input
            type="text"
            placeholder="Search for Mobiles, Shoes, Laptops..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            className="search-box"
          />

        </div>

      </div>

      {/* Category */}

      <div className="category-section">

        <button onClick={() => setSelectedCategory("All")}>
          All
        </button>

        <button onClick={() => setSelectedCategory("Electronics")}>
          💻 Electronics
        </button>

        <button onClick={() => setSelectedCategory("Fashion")}>
          👕 Fashion
        </button>

        <button onClick={() => setSelectedCategory("Shoes")}>
          👟 Shoes
        </button>

        <button onClick={() => setSelectedCategory("Mobiles")}>
          📱 Mobiles
        </button>

      </div>

      {/* Product Count */}

      <div className="products-count">
        Showing <strong>{filteredProducts.length}</strong> Products
      </div>

      {filteredProducts.length === 0 ? (

        <h2 className="no-products">
          😔 No Products Found
        </h2>

      ) : (

        <div className="products-grid">

          {filteredProducts.map((product) => (

            <div
              className="product-card"
              key={product._id}
            >

              <Link
                to={`/product/${product._id}`}
                className="product-link"
              >

                <div className="image-box">

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                  <span className="discount-badge">
                    20% OFF
                  </span>

                </div>

                <div className="product-details">

                  <span className="category">
                    {product.category}
                  </span>

                  <h2>{product.name}</h2>

                  <p className="brand">
                    Brand : {product.brand}
                  </p>

                  <div className="rating-stock">

                    <span className="rating">
                      ⭐ 4.5
                    </span>

                    <span className="stock">
                      {product.countInStock > 0
                        ? "In Stock"
                        : "Out of Stock"}
                    </span>

                  </div>

                  <h3>₹ {product.price}</h3>

                </div>

              </Link>

              <button
                className="cart-btn"
                onClick={() =>
                  addToCart(product)
                }
              >
                🛒 Add To Cart
              </button>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Products;