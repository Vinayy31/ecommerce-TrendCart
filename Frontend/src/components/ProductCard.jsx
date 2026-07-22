import "./ProductCard.css";

function ProductCard({
  image,
  name,
  price,
  onAddToCart,
}) {
  return (
    <div className="product-card">

      <span className="discount-badge">
        20% OFF
      </span>

      <span className="wishlist">
        ❤
      </span>

      <div className="product-image-container">
        <img
          src={image}
          alt={name}
          className="product-image"
        />
      </div>

      <div className="product-content">

        <h2 className="product-name">
          {name}
        </h2>

        <div className="rating">
          ⭐⭐⭐⭐⭐
          <span>(4.8)</span>
        </div>

        <p className="product-price">
          ₹{price}
          <span className="old-price">
            ₹{Math.round(price * 1.25)}
          </span>
        </p>

        <button
          className="product-btn"
          onClick={onAddToCart}
        >
          🛒 Add To Cart
        </button>

      </div>

    </div>
  );
}

export default ProductCard;