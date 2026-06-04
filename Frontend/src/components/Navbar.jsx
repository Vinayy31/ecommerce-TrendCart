import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        backgroundColor: "#111827",
        color: "white",
        padding: "18px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: "0",
        zIndex: "1000",
      }}
    >

      {/* LOGO */}

      <h1
        style={{
          margin: 0,
          fontSize: "32px",
          fontWeight: "bold",
          color: "#38bdf8",
        }}
      >
        TrendCart
      </h1>

      {/* NAVIGATION BUTTONS */}

      <div>

        <Link to="/cart">
          <button
            style={{
              backgroundColor: "white",
              border: "none",
              padding: "10px 18px",
              borderRadius: "8px",
              marginRight: "10px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Cart
          </button>
        </Link>

        <Link to="/login">
          <button
            style={{
              backgroundColor: "white",
              border: "none",
              padding: "10px 18px",
              borderRadius: "8px",
              marginRight: "10px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Login
          </button>
        </Link>

        <Link to="/register">
          <button
            style={{
              backgroundColor: "#38bdf8",
              color: "white",
              border: "none",
              padding: "10px 18px",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Register
          </button>
        </Link>

      </div>
    </div>
  );
}

export default Navbar;