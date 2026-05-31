import { useState } from "react";
import axios from "axios";
import "./Admissions.css";

export default function Admissions() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/admissions", formData)
      .then(() => {
        alert("Application submitted!");
      })
      .catch((err) => {
        console.error(err);
        alert("Error submitting form");
      });
  };

  return (
    <div className="page-container admissions-container">
      <h1>Admissions</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="course"
          placeholder="Course Interested In"
          onChange={handleChange}
          required
        />

        <button id="adm" type="submit">Apply</button>
      </form>
    </div>
  );
}