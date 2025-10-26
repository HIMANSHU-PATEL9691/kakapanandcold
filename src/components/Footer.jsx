import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          {/* About */}
          <div className="footer-about">
            <h3>🍰 ADDU Bakery</h3>
            <p>
              Sweet Bakery is your go-to destination for freshly baked cakes, pastries, and breads.
              We deliver happiness with every bite!
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/contact">Contact</Link>
          </div>

          {/* Contact Info */}
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>Email: ADDUbakery.com</p>
            <p>Phone: +91 999-999-9999</p>
            <div className="social-icons">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📸</a>
              <a href="#" aria-label="Twitter">🐦</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © 2025 Sweet Bakery. All rights reserved.
        </div>
      </footer>

      {/* CSS directly in same component */}
      <style jsx="true">{`
        .footer {
           background: linear-gradient(90deg, #43CEA2, #185A9D);
          color: #fff;
          padding: 40px 20px 20px;
          font-family: 'Poppins', sans-serif;
        }

        .footer-container {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 30px;
        }

        .footer-about h3 {
          font-size: 1.5rem;
          margin-bottom: 10px;
        }

        .footer-about p {
          line-height: 1.5;
          max-width: 300px;
        }

        .footer-links h4,
        .footer-contact h4 {
          font-size: 1.2rem;
          margin-bottom: 10px;
        }

        .footer-links a {
          display: block;
          color: #fff;
          text-decoration: none;
          margin-bottom: 5px;
          transition: 0.3s;
        }

        .footer-links a:hover {
          color: #ffebee;
        }

        .footer-contact p {
          margin: 5px 0;
        }

        .social-icons a {
          font-size: 1.5rem;
          margin-right: 10px;
          transition: transform 0.3s;
        }

        .social-icons a:hover {
          transform: scale(1.2);
        }

        .footer-bottom {
          text-align: center;
          margin-top: 30px;
          font-size: 0.9rem;
          opacity: 0.8;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .footer-container {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .footer-about p {
            max-width: 100%;
          }
        }
      `}</style>
    </>
  );
}
