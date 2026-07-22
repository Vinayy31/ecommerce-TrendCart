import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-top">

          <div className="footer-brand">
            <h2 className="footer-logo">
              🛒 TrendCart
            </h2>

            <p className="footer-text">
              Your trusted online shopping partner. Shop smarter, faster, and safer with TrendCart.
            </p>
          </div>

          <div className="footer-links">

            <h3>Quick Links</h3>

            <a href="/">Home</a>
            <a href="/products">Products</a>
            <a href="/cart">Cart</a>
            <a href="/orders">Orders</a>

          </div>

          <div className="footer-social">

            <h3>Follow Us</h3>

            <div className="social-icons">
              <a href="#">🌐</a>
              <a href="#">📘</a>
              <a href="#">📸</a>
              <a href="#">🐦</a>
            </div>

          </div>

        </div>

        <hr className="footer-line" />

        <p className="footer-copy">
          © 2026 TrendCart. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;