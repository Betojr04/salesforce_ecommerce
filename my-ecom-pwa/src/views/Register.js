import React from "react";
import { Link } from "react-router-dom";
import "../styles/register.css";

export const Register = () => {
  return (
    <section className="register-container">
      <div className="register-card">
        <h1 className="register-title">Sart Shopping From The Best</h1>
        <form className="register-form">
          <label htmlFor="name" className="input-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="FirstName LastName"
            required
          />

          <label htmlFor="email" className="input-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@email.com"
            required
          />

          <label htmlFor="password" className="input-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="••••••••"
            required
          />

          <button type="submit" className="submit-btn">
            Register
          </button>
        </form>
        <div className="login-redirect">
          Already have an account?{" "}
          <Link to="/login" className="login-link">
            Login
          </Link>
        </div>
      </div>
    </section>
  );
};
