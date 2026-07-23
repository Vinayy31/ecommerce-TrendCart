import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/users/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem(
          "userInfo",
          JSON.stringify(data.user)
        );

        if (data.user.isAdmin) {
          navigate("/admin");
        } else {
          navigate("/products");
        }
      } else {
        alert(data.message || "Invalid Email or Password");
      }
    } catch (error) {
      console.log(error);
      alert("Server Error");
    }
  };

  return (
    <div className="login-container">

      <form
        className="login-form"
        onSubmit={submitHandler}
      >

        <div className="login-logo">
            🛒 TrendCart
        </div>

        <h1 className="login-title">
          Welcome Back
        </h1>

        <p className="login-subtitle">
          Login to continue shopping
        </p>

        <input
          className="login-input"
          type="email"
          placeholder="Enter Email Address"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          required
        />

        <input
          className="login-input"
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          required
        />

        <div className="forgot-password">
          <a href="#">
            Forgot Password?
          </a>
        </div>

        <button
          className="login-btn"
          type="submit"
        >
          Login
        </button>

        <p className="login-text">
          New to TrendCart?

          <Link
            to="/register"
            className="register-link"
          >
            Register
          </Link>

        </p>

      </form>

    </div>
  );
}

export default Login;