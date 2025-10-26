import React from 'react';
import { Link } from 'react-router-dom';

export default function Header({ cartItems }) {
  // Calculate total items in cart
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">ADDU Bakery</Link>
      </div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart" className="cart-link">
          🛒
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </Link>
      </nav>

      <style jsx="true">{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 30px;
          background: linear-gradient(90deg, #43CEA2, #185A9D);
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .logo a {
          font-size: 1.8rem;
          font-weight: 700;
          color: #FF6B6B;
          text-decoration: none;
        }

        .nav-links a {
          margin-left: 25px;
          position: relative;
          text-decoration: none;
          color: #333;
          font-weight: 500;
          transition: color 0.3s;
        }

        .nav-links a:hover {
          color: #FF6B6B;
        }

        .cart-link {
          font-size: 1.4rem;
        }

        .cart-badge {
          position: absolute;
          top: -8px;
          right: -12px;
          background: #FF6B6B;
          color: #fff;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 50%;
        }
      `}</style>
    </header>
  );
}
