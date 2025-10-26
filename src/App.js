import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import './App.css';

// ScrollToTop component inside the same file
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <ScrollToTop /> {/* Ensure page scrolls to top on route change */}
      <Header cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/products" 
          element={<Products cartItems={cartItems} setCartItems={setCartItems} />} 
        />
        <Route 
          path="/cart" 
          element={<Cart cartItems={cartItems} setCartItems={setCartItems} />} 
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
