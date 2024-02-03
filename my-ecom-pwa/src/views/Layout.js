import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import page components here
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";
// Import more pages as needed
import { App } from "./App";

const Layout = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<App />} />
          {/* <Route path="/about" element={<AboutPage />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default Layout;
