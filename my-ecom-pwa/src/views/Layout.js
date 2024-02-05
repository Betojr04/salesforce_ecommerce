import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
// Pages
// import { App } from "./App";
import { Register } from "./Register";
import { Login } from "./Login";

const Layout = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          {/* <Route path="/" element={<App />} /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default Layout;
