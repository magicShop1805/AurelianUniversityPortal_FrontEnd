import { useState } from "react";
import axios from "axios";
import "./Contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
      .post("http://localhost:8080/contact", formData)
      .then(() => {
        alert("Message sent successfully!");
      })
      .catch(() => {
        alert("Error sending message");
      });
  };

  return (
    <div className="page-container contact-container">
      <h1>Contact Us</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          onChange={handleChange}
          required
        />

        <button type="submit" id="send">Send</button>
      </form>
    </div>
  );
}