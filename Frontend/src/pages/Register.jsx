import React, {
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

function Register() {

  const navigate =
    useNavigate();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");


  const submitHandler = async (
    e
  ) => {

    e.preventDefault();

    try {

      const response =
        await fetch(
          "http://localhost:4000/api/users/register",
          {
            method: "POST",

            headers: {
              "Content-Type":
                "application/json",
            },

            body: JSON.stringify({
              name,
              email,
              password,
            }),
          }
        );


      const data =
        await response.json();

      alert(data.message);

      navigate("/login");

    } catch (error) {

      console.log(error);

      alert("Something went wrong");
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
          "linear-gradient(to right, #7c3aed, #2563eb)",
      }}
    >

      <form
        onSubmit={submitHandler}
        style={{
          backgroundColor: "white",
          padding: "40px",
          width: "350px",
          borderRadius: "15px",
          boxShadow:
            "0 5px 15px rgba(0,0,0,0.2)",
          boxSizing: "border-box",
        }}
      >

        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#111827",
          }}
        >
          Create Account
        </h1>


        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
          required
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "8px",
            border:
              "1px solid #ccc",
            boxSizing:
              "border-box",
            fontSize: "15px",
          }}
        />


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
            border:
              "1px solid #ccc",
            boxSizing:
              "border-box",
            fontSize: "15px",
          }}
        />


        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(
              e.target.value
            )
          }
          required
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "8px",
            border:
              "1px solid #ccc",
            boxSizing:
              "border-box",
            fontSize: "15px",
          }}
        />


        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor:
              "#7c3aed",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
            boxSizing:
              "border-box",
          }}
        >
          Register
        </button>


        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
            color: "#374151",
          }}
        >
          Already have account?
          {" "}

          <a
            href="/login"
            style={{
              color: "#2563eb",
              textDecoration:
                "none",
              fontWeight: "bold",
            }}
          >
            Login
          </a>

        </p>

      </form>

    </div>
  );
}

export default Register;