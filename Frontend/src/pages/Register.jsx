import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/users/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        navigate("/login");
      } else {
        alert(data.message || "Registration Failed");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="register-container">
      <form
        className="register-form"
        onSubmit={submitHandler}
      >

        <div className="register-logo">
          🛒 TrendCart
        </div>

        <h1 className="register-title">
          Create Account
        </h1>

        <p className="register-subtitle">
          Join TrendCart and start shopping today
        </p>

        <input
          className="register-input"
          type="text"
          placeholder="Enter Full Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          required
        />

        <input
          className="register-input"
          type="email"
          placeholder="Enter Email Address"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          required
        />

        <input
          className="register-input"
          type="password"
          placeholder="Create Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          required
        />

        <button
          className="register-btn"
          type="submit"
        >
          Create Account
        </button>

        <p className="register-text">
          Already have an account?

          <Link
            to="/login"
            className="login-link"
          >
            Login
          </Link>

        </p>

      </form>
    </div>
  );
}

export default Register;