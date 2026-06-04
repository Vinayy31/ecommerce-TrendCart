import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:4000/api/users/login",
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
        alert(
          data.message ||
          "Invalid Email or Password"
        );
      }
    } catch (error) {
      console.log(error);
      alert(
        "Server Error. Please try again."
      );
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(to right, #2563eb, #38bdf8)",
        padding: "20px",
      }}
    >
      <form
        onSubmit={submitHandler}
        style={{
          backgroundColor: "white",
          padding: "40px",
          width: "100%",
          maxWidth: "400px",
          borderRadius: "15px",
          boxShadow:
            "0 5px 15px rgba(0,0,0,0.2)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#111827",
          }}
        >
          Login
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
          required
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "15px",
          }}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          required
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "8px",
            border: "1px solid #ccc",
            fontSize: "15px",
          }}
        />

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Login
        </button>

        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
            color: "#374151",
          }}
        >
          New User?{" "}
          <Link
            to="/register"
            style={{
              color: "#2563eb",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;