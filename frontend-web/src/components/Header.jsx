// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="main-header">
      <div className="container nav-bar">
        <div className="logo">
          <img src="../assets/logo.png" alt="ShuttleSmart Logo" className="logo-img" />
        </div>
        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <Link to="/demo" className="btn btn-primary btn-demo">Demo</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;