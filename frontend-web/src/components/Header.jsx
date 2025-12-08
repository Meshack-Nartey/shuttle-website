// src/components/Header.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [page, setPage] = useState("Home");

  console.log(page);

  return (
    <header className="main-header">
      <div className="nav-bar">
        <div>
          <Link to={"/"}>
            <img
              src="/logo.png"
              alt="ShuttleSmart Logo"
              className="logo-img"
            />
          </Link>
        </div>

        <nav className="nav-links">
          <ul>
            <li onClick={() => setPage("Home")}>
              <Link
                to="/"
                className={`nav-link ${page === "Home" && "active"}`}>
                Home
              </Link>
            </li>

            <li onClick={() => setPage("About")}>
              <Link
                to="/about"
                className={`nav-link ${page === "About" && "active"}`}>
                About
              </Link>
            </li>

            <li onClick={() => setPage("Contact")}>
              <Link
                to="/contact"
                className={`nav-link ${page === "Contact" && "active"}`}>
                Contact
              </Link>
            </li>

            <li onClick={() => setPage("")}>
              <Link
                to="/demo"
                className="btn btn-primary btn-demo">
                Demo
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
