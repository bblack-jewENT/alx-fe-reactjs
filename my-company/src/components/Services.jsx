import React from "react";

function Services() {
  return (
    <div
      style={{
        padding: "40px",
        backgroundColor: "#d1ecf1",
        minHeight: "60vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ color: "#333", marginBottom: "20px" }}>Our Services</h1>
      <ul
        style={{
          fontSize: "18px",
          color: "#666",
          listStyleType: "none",
          padding: 0,
        }}
      >
        <li style={{ marginBottom: "10px" }}>Technology Consulting</li>
        <li style={{ marginBottom: "10px" }}>Market Analysis</li>
        <li style={{ marginBottom: "10px" }}>Product Development</li>
      </ul>
    </div>
  );
}

export default Services;
