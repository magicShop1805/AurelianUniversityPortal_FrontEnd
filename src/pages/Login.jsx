import { useState } from "react";
import axios from "axios";
import "./Auth.css";

export default function Login() {

  const [student, setStudent] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    axios.post(
      "http://localhost:8080/auth/login",
      student
    )
    .then((res) => {

      if(res.data) {

        localStorage.setItem(
          "student",
          JSON.stringify(res.data)
        );

        alert("Login Successful!");

        window.location.href = "/dashboard";
      }
      else {
        alert("Invalid Credentials");
      }
    })
    .catch((err) => {
      console.error(err);
      alert("Login Failed");
    });
  };

  return (

    <div className="auth-page">

      <form
        className="auth-form"
        onSubmit={handleSubmit}
      >

        <h1 className="auth-title">
          Student Login
        </h1>

        <input
          className="auth-input"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />

        <input
          className="auth-input"
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
        />

        <button
          className="auth-button"
          type="submit"
        >
          Login
        </button>

      </form>

    </div>
  );
}