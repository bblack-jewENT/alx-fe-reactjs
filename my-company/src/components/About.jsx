import React from "react";

function About() {
  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: "#e9ecef",
        minHeight: "60vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ color: "#333", marginBottom: "20px" }}>About Us</h1>
      <p style={{ fontSize: "18px", color: "#666", lineHeight: "1.6" }}>
        Our company has been providing top-notch services since 1990. We
        specialize in various fields including technology, marketing, and
        consultancy.
      </p>
    </div>
  );
}

export default About;
