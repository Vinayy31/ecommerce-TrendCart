import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartCount(cart.length);
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("userInfo");
    navigate("/login");
    window.location.reload();
  };

  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        🛒 <span>TrendCart</span>
      </Link>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/products">Products</Link>

        <Link to="/cart">
          Cart
          {cartCount > 0 && (
            <span className="cart-badge">
              {cartCount}
            </span>
          )}
        </Link>

        {user && (
          <Link to="/orders">
            Orders
          </Link>
        )}

        {user?.isAdmin && (
          <Link to="/admin">
            Admin
          </Link>
        )}

        {!user ? (
          <>
            <Link to="/login">
              <button className="login-btn">
                Login
              </button>
            </Link>

            <Link to="/register">
              <button className="register-btn">
                Register
              </button>
            </Link>
          </>
        ) : (
          <>
            <span className="username">
              Hi, {user.name}
            </span>

            <button
              className="logout-btn"
              onClick={logoutHandler}
            >
              Logout
            </button>
          </>
        )}

      </div>

    </nav>
  );
}

export default Navbar;