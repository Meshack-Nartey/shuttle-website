// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="container footer-content">
        <p className="copyright">&copy; 2025 ShuttleSmart. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/privacy" className="footer-link">Privacy Policy</Link>
          <Link to="/terms" className="footer-link">Terms of Service</Link>
          <Link to="/cookies" className="footer-link">Cookies Settings</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;