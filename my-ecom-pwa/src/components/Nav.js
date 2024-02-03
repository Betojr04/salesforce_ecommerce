// NavBar.js
import React from "react";
import "../styles/nav.css";

export const Nav = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="/" className="brand-logo">
          Ecommerce
        </a>
        <ul className="nav-links">
          <li>
            <a href="/ ">Home</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          {/* <li>
            <a href="/about">About</a>
          </li> */}
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/register" className="register-btn">
              Register
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
