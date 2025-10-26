import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// This component expects the cart items to be passed as props
export default function Cart({ cartItems, setCartItems }) {

  // Function to update quantity
  const handleQuantityChange = (id, delta) => {
    const updatedItems = cartItems.map(item => {
      if (item.id === id) {
        const newQty = item.quantity + delta;
        return { ...item, quantity: newQty > 0 ? newQty : 1 };
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  // Remove item from cart
  const handleRemoveItem = (id) => {
    const updatedItems = cartItems.filter(item => item.id !== id);
    setCartItems(updatedItems);
  };

  // Calculate subtotal
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  if (cartItems.length === 0) {
    return (
      <div className="cart-page container text-center my-5">
        <h2>Your Cart is Empty 😔</h2>
        <p>Add some delicious treats to your cart!</p>
        <Link to="/products" className="btn btn-primary">Shop Now</Link>
      </div>
    );
  }

  return (
    <div className="cart-page container my-5">
      <h2 className="mb-4">Your Shopping Cart 🛒</h2>
      
      <div className="cart-grid">
        {cartItems.map(item => (
          <div className="cart-item" key={item.id}>
            <img src={item.img} alt={item.name} />
            <div className="cart-info">
              <h5>{item.name}</h5>
              <p className="price">${(item.price * item.quantity / 100).toFixed(2)}</p>
              <div className="quantity-controls">
                <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
              </div>
              <button className="remove-btn" onClick={() => handleRemoveItem(item.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h4>Order Summary</h4>
        <p>Subtotal: ${(subtotal / 100).toFixed(2)}</p>
        <p>Tax (10%): ${(tax / 100).toFixed(2)}</p>
        <h5>Total: ${(total / 100).toFixed(2)}</h5>
        <button className="btn btn-primary">Proceed to Checkout</button>
      </div>

      <style jsx="true">{`
        .cart-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          margin-bottom: 40px;
        }

        .cart-item {
          display: flex;
          gap: 20px;
          padding: 15px;
          border: 1px solid #ddd;
          border-radius: 15px;
          align-items: center;
          background-color: #fff;
        }

        .cart-item img {
          width: 120px;
          height: 120px;
          object-fit: cover;
          border-radius: 10px;
        }

        .cart-info h5 {
          margin: 0 0 10px;
          color: #FF6B6B;
        }

        .cart-info .price {
          font-weight: 600;
          margin-bottom: 10px;
        }

        .quantity-controls {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 10px;
        }

        .quantity-controls button {
          padding: 5px 10px;
          border: none;
          border-radius: 8px;
          background-color: #FF6B6B;
          color: #fff;
          cursor: pointer;
          font-weight: 600;
        }

        .quantity-controls span {
          min-width: 25px;
          text-align: center;
          font-weight: 600;
        }

        .remove-btn {
          padding: 5px 10px;
          background-color: #ddd;
          border: none;
          border-radius: 8px;
          cursor: pointer;
        }

        .cart-summary {
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 15px;
          max-width: 400px;
          margin: 0 auto;
          background-color: #fff;
        }

        .cart-summary h4 {
          margin-bottom: 15px;
          color: #FF6B6B;
        }

        .cart-summary p, .cart-summary h5 {
          margin-bottom: 10px;
        }

        .cart-summary button {
          margin-top: 10px;
          width: 100%;
          padding: 10px;
          background-color: #FF6B6B;
          border: none;
          border-radius: 50px;
          color: #fff;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.3s;
        }

        .cart-summary button:hover {
          transform: translateY(-2px);
        }

        @media (min-width: 768px) {
          .cart-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (min-width: 992px) {
          .cart-grid {
            grid-template-columns: 1fr 1fr 1fr;
          }
        }
      `}</style>
    </div>
  );
}
