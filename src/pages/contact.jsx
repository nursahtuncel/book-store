import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for contacting us! We'll get back to you shortly.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="contact-container" style={{ maxWidth: "600px", margin: "50px auto", fontFamily: "Inter, sans-serif" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>Contact Us</h1>
      <p style={{ textAlign: "center", color: "#555", marginBottom: "30px" }}>
        Have a question or want to reach out? Fill in the form below and we'll get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ccc", fontSize: "15px" }}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ccc", fontSize: "15px" }}
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
          style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ccc", fontSize: "15px" }}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          style={{ padding: "12px", borderRadius: "6px", border: "1px solid #ccc", fontSize: "15px", resize: "vertical" }}
        />

        <button
          type="submit"
          style={{
            padding: "12px",
            backgroundColor: "#5f9ea0",
            color: "#fff",
            fontWeight: 600,
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            transition: "0.2s",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#5f9ea099")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#5f9ea0")}
        >
          Send Message
        </button>
      </form>

      <div style={{ marginTop: "40px", textAlign: "center", color: "#555" }}>
        <p>Email: support@bookstore.com</p>
        <p>Phone: +1 234 567 890</p>
        <p>Address: 123 Book Street, New York, NY</p>
      </div>
    </div>
  );
};

export default Contact;
