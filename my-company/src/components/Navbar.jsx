import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        backgroundColor: "#333",
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <Link
        to="/"
        style={{ color: "white", textDecoration: "none", fontSize: "18px" }}
      >
        Home
      </Link>
      <Link
        to="/about"
        style={{ color: "white", textDecoration: "none", fontSize: "18px" }}
      >
        About
      </Link>
      <Link
        to="/services"
        style={{ color: "white", textDecoration: "none", fontSize: "18px" }}
      >
        Services
      </Link>
      <Link
        to="/contact"
        style={{ color: "white", textDecoration: "none", fontSize: "18px" }}
      >
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;
