import React from "react";
import "../styles/login.css";

export const Login = () => {
  return (
    <section className="login-container">
      <div className="login-card">
        <h1 className="login-title">Welcome Back!</h1>
        <form className="login-form">
          <label htmlFor="email" className="input-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="john@example.com"
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
            Log In
          </button>
        </form>
        <div className="register-redirect">
          Don't have an account?{" "}
          <a href="/register" className="register-link">
            Register
          </a>
        </div>
      </div>
    </section>
  );
};
