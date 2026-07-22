import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "./ProductDetail.css";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:4000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [id]);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
      ...product,
      qty: quantity,
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Product Added Successfully ✅");
    navigate("/cart");
  };

  if (loading) {
    return <h1 className="loading-text">Loading...</h1>;
  }

  if (!product) {
    return <h1 className="not-found-text">Product Not Found</h1>;
  }

  const imageUrl =
    product.image.startsWith("http")
      ? product.image
      : `http://localhost:4000${product.image}`;

  return (
    <div className="product-page">

      <div className="breadcrumb">
        <Link to="/">Home</Link>
        {" / "}
        <Link to="/products">Products</Link>
        {" / "}
        <span>{product.name}</span>
      </div>

      <div className="product-details-container">

        {/* LEFT */}

        <div className="image-section">

          <img
            src={imageUrl}
            alt={product.name}
            className="product-image"
          />

        </div>

        {/* RIGHT */}

        <div className="product-info">

          <span className="category-badge">
            {product.category}
          </span>

          <h1 className="product-title">
            {product.name}
          </h1>

          <div className="rating">
            ⭐⭐⭐⭐⭐
            <span>(4.8)</span>
          </div>

          <div className="price-box">

            <h2 className="product-price">
              ₹ {product.price}
            </h2>

            <span className="old-price">
              ₹ {Math.round(product.price * 1.2)}
            </span>

            <span className="discount">
              20% OFF
            </span>

          </div>

          <p>
            <strong>Brand :</strong> {product.brand}
          </p>

          <p className="description">
            {product.description}
          </p>

          <p>

            <strong>Status :</strong>

            {product.countInStock > 0 ? (

              <span className="stock available">
                In Stock
              </span>

            ) : (

              <span className="stock unavailable">
                Out Of Stock
              </span>

            )}

          </p>

          <div className="quantity-section">

            <label>Quantity</label>

            <select
              value={quantity}
              onChange={(e) =>
                setQuantity(Number(e.target.value))
              }
            >
              {[...Array(product.countInStock).keys()].map(
                (x) => (
                  <option
                    key={x + 1}
                    value={x + 1}
                  >
                    {x + 1}
                  </option>
                )
              )}
            </select>

          </div>

          <div className="delivery-info">

            <h3>Delivery Information</h3>

            <p>🚚 Free Delivery</p>

            <p>💰 Cash On Delivery Available</p>

            <p>🔄 7 Days Easy Return</p>

            <p>🔒 Secure Payment</p>

          </div>

          <div className="highlights">

            <h3>Highlights</h3>

            <ul>

              <li>✔ Premium Quality Product</li>

              <li>✔ Genuine Brand Warranty</li>

              <li>✔ Fast Delivery Across India</li>

              <li>✔ Best Price Guaranteed</li>

            </ul>

          </div>

          <button
            className="add-cart-btn"
            onClick={addToCart}
          >
            🛒 Add To Cart
          </button>

          <button
            className="buy-btn"
          >
            ⚡ Buy Now
          </button>

          <button
            className="back-btn"
            onClick={() => navigate("/products")}
          >
            ← Continue Shopping
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;