import React, { useState } from 'react';

export default function ProductCard({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => setQuantity(prev => prev + 1);
  const decreaseQty = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <>
      <div className="product-card">
        <div className="card-img">
          <img src={product.img} alt={product.name} />
        </div>
        <div className="card-body">
          <h5 className="product-name">{product.name}</h5>
          <p className="product-desc">{product.desc}</p>
          <p className="product-price">{product.price}</p>

          {/* Quantity controls */}
          <div className="quantity-controls">
            <button onClick={decreaseQty}>-</button>
            <span>{quantity}</span>
            <button onClick={increaseQty}>+</button>
          </div>

          <button className="add-btn" onClick={() => onAddToCart({ ...product, quantity })}>
            Add to Cart
          </button>
        </div>
      </div>

      <style jsx="true">{`
        .product-card {
          background: #fff;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          transition: transform 0.3s, box-shadow 0.3s;
          display: flex;
          flex-direction: column;
          text-align: center;
        }

        .product-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 25px rgba(0,0,0,0.2);
        }

        .card-img img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .card-body {
          padding: 15px;
        }

        .product-name {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 8px;
          color: #333;
        }

        .product-desc {
          font-size: 0.95rem;
          margin-bottom: 10px;
          color: #666;
        }

        .product-price {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 15px;
          color: #FF6B6B;
        }

        .quantity-controls {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 15px;
          gap: 10px;
        }

        .quantity-controls button {
          background: #FF6B6B;
          color: #fff;
          border: none;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          cursor: pointer;
          font-weight: 600;
          transition: transform 0.2s;
        }

        .quantity-controls button:hover {
          transform: scale(1.1);
        }

        .quantity-controls span {
          font-weight: 600;
          font-size: 1rem;
          min-width: 20px;
          text-align: center;
        }

        .add-btn {
          background: linear-gradient(90deg, #ff9a9e, #fad0c4);
          border: none;
          color: #fff;
          padding: 10px 20px;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .add-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }

        @media (max-width: 768px) {
          .card-img img {
            height: 180px;
          }
        }
      `}</style>
    </>
  );
}
