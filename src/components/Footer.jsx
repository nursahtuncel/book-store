import React from "react";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-title">BookStore</h3>
          <p className="footer-text">
            Discover, read, and share your favorite books with our growing
            community of readers.
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Quick Links</h4>
          <ul className="footer-list">
            <li><a href="/about" className="footer-link">About Us</a></li>
            <li><a href="/categories" className="footer-link">Categories</a></li>
            <li><a href="/contact" className="footer-link">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-subtitle">Follow Us</h4>
          <ul className="footer-list">
            <li><a href="#" className="footer-link">Instagram</a></li>
            <li><a href="#" className="footer-link">Twitter</a></li>
            <li><a href="#" className="footer-link">Facebook</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} BookStore. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
