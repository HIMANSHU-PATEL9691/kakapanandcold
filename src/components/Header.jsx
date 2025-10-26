import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="logo">
          🍰 <span>ADDU Bakery</span>
        </div>

        <nav className={menuOpen ? 'nav active' : 'nav'}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
           <Link to="/cart" onClick={() => setMenuOpen(false)}>Cart</Link>
        </nav>

        <div 
          className={menuOpen ? 'hamburger active' : 'hamburger'} 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>

      {/* CSS directly in same component */}
      <style jsx="true">{`
        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 50px;
          background: linear-gradient(90deg, #ff9a9e, #fad0c4);
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          font-family: 'Poppins', sans-serif;
        }

        .logo {
          font-size: 1.8rem;
          font-weight: bold;
          color: #fff;
          cursor: pointer;
          transition: transform 0.3s;
        }

        .logo:hover {
          transform: scale(1.1);
        }

        .logo span {
          margin-left: 8px;
          font-weight: 600;
        }

        .nav {
          display: flex;
          gap: 30px;
        }

        .nav a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          padding: 8px 15px;
          border-radius: 5px;
          transition: all 0.3s;
        }

        .nav a:hover {
          background-color: rgba(255,255,255,0.2);
          transform: translateY(-2px);
        }

        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
          gap: 5px;
        }

        .hamburger span {
          width: 25px;
          height: 3px;
          background: white;
          border-radius: 3px;
          transition: all 0.3s;
        }

        .hamburger.active span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }
        .hamburger.active span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        @media (max-width: 768px) {
          .nav {
            position: fixed;
            top: 0;
            right: -100%;
            height: 100vh;
            width: 250px;
            background: linear-gradient(180deg, #ff9a9e, #fad0c4);
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 40px;
            transition: right 0.3s;
          }

          .nav.active {
            right: 0;
          }

          .hamburger {
            display: flex;
          }
        }
      `}</style>
    </>
  );
}
