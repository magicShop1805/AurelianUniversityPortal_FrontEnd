import { useState } from "react";
import axios from "axios";
import "./Auth.css";

export default function Register() {

  const [student, setStudent] = useState({
    name: "",
    email: "",
    password: "",
    department: "",
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
      "http://localhost:8080/auth/register",
      student
    )
    .then(() => {

      alert("Registered Successfully!");

      window.location.href = "/login";
    });
  };

  return (

    <div className="auth-page">

      <form
        className="auth-form"
        onSubmit={handleSubmit}
      >

        <h1 className="auth-title">
          Student Registration
        </h1>

        <input
          className="auth-input"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />

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

        <input
          className="auth-input"
          name="department"
          placeholder="Department"
          onChange={handleChange}
        />

        <button
          className="auth-button"
          type="submit"
        >
          Register
        </button>

      </form>

    </div>
  );
}