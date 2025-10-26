import React, { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';

// Local images
import chocolateCakeImg from '../assets/images/chocolate-cake.jpg'; 
import strawberryCakeImg from '../assets/images/strawberry-cake.jpg';
import sourdoughBreadImg from '../assets/images/sourdough-loaf.jpg';
import croissantImg from '../assets/images/croissant.jpg';
import apricotTartImg from '../assets/images/apricot-tart.jpg';
import multigrainBreadImg from '../assets/images/multigrain-bread.jpg';

// Format price helper
const formatPrice = (price) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(price / 100);
};

// Products data
const initialProducts = [
  { id: 1, name: 'Rich Chocolate Fudge Cake', category: 'Cakes', price: 5000, img: chocolateCakeImg, desc: 'Decadent chocolate cake with rich fudge layers.' },
  { id: 2, name: 'Fresh Strawberry Cream Cake', category: 'Cakes', price: 4500, img: strawberryCakeImg, desc: 'Light sponge with fresh strawberry cream.' },
  { id: 3, name: 'Artisan Sourdough Loaf', category: 'Breads', price: 500, img: sourdoughBreadImg, desc: 'Crusty sourdough bread with soft center.' },
  { id: 4, name: 'Classic French Croissant', category: 'Pastries', price: 800, img: croissantImg, desc: 'Flaky buttery croissant straight from France.' },
  { id: 5, name: 'Almond & Apricot Tart', category: 'Pastries', price: 1200, img: apricotTartImg, desc: 'Sweet tart topped with almonds and apricots.' },
  { id: 6, name: 'Multigrain Whole Wheat Bread', category: 'Breads', price: 650, img: multigrainBreadImg, desc: 'Healthy multigrain bread packed with nutrients.' },
];

const categories = ['All', ...new Set(initialProducts.map(p => p.category))];

export default function Products({ cartItems, setCartItems }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const filteredProducts = useMemo(() => {
    return initialProducts.filter(product => {
      const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
      const searchMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const descMatch = product.desc.toLowerCase().includes(searchTerm.toLowerCase());
      return categoryMatch && (searchMatch || descMatch);
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="products-page container my-5">
      <header className="shop-header">
        <h2 className="title text-center mb-2">Sweet Bakery Catalog 🎂</h2>
        <p className="subtitle text-center text-muted mb-4">
          Cakes, breads, and pastries baked fresh every day. Find your favorites!
        </p>
        <div className="cart-summary">
          <span className="cart-icon">🛒</span>
          <span className="cart-text">Your Cart: <b>{cartItems.length} items</b></span>
        </div>
      </header>

      <div className="category-tabs text-center mb-4">
        {categories.map(category => (
          <button
            key={category}
            className={`tab-btn ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => {
              setSelectedCategory(category);
              setSearchTerm('');
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="search-bar text-center mb-5">
        <input
          type="text"
          placeholder="Search for a cake, bread, or ingredient..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <ProductCard 
              key={product.id} 
              product={{ ...product, price: formatPrice(product.price) }} 
              onAddToCart={() => handleAddToCart(product)}
            />
          ))
        ) : (
          <div className="no-products">
            <p>😔 Sorry, no products match your search or filter.</p>
          </div>
        )}
      </div>

      {/* --- CSS --- */}
      <style jsx="true">{`
        :root {
          --primary-pink: #FF6B6B;
          --secondary-pink: #f8c3d0;
          --text-dark: #333;
          --text-light: #fff;
          --bg-light: #fefefe;
        }

        .products-page {
          background-color: var(--bg-light);
          font-family: 'Poppins', sans-serif;
        }

        /* Header */
        .shop-header {
          position: relative;
          padding-bottom: 20px;
        }

        .shop-header .title {
          font-weight: 800;
          color: var(--primary-pink);
          font-size: 2.5rem;
          margin-bottom: 0.5rem;
        }

        .shop-header .subtitle {
          font-size: 1rem;
          color: #666;
          margin-bottom: 1.5rem;
        }

        .cart-summary {
          position: absolute;
          top: 0;
          right: 0;
          padding: 8px 15px;
          background-color: var(--secondary-pink);
          color: var(--text-light);
          border-radius: 20px;
          font-weight: 600;
          display: flex;
          align-items: center;
          box-shadow: 0 4px 10px rgba(255, 107, 107, 0.3);
          transition: transform 0.3s;
        }

        .cart-summary:hover {
          transform: scale(1.05);
        }

        .cart-icon {
          font-size: 1.2rem;
          margin-right: 8px;
        }

        /* Category Tabs */
        .category-tabs {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 20px;
        }

        .tab-btn {
          padding: 10px 25px;
          border: none;
          border-radius: 50px;
          background: #f8e6e9;
          color: var(--primary-pink);
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          border: 2px solid transparent;
        }

        .tab-btn.active,
        .tab-btn:hover {
          background: var(--primary-pink);
          color: var(--text-light);
          border-color: var(--primary-pink);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(255, 107, 107, 0.3);
        }

        /* Search Bar */
        .search-bar input {
          width: 450px;
          max-width: 100%;
          padding: 12px 20px;
          border-radius: 50px;
          border: 2px solid #ddd;
          font-size: 1rem;
          outline: none;
          transition: box-shadow 0.3s, border-color 0.3s;
        }

        .search-bar input:focus {
          box-shadow: 0 0 15px rgba(255, 107, 107, 0.2);
          border-color: var(--primary-pink);
        }

        /* Product Grid */
        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 30px;
          padding: 20px 0;
        }

        .no-products {
          grid-column: 1 / -1;
          text-align: center;
          color: #999;
          padding: 50px 0;
          font-size: 1.2rem;
        }

        /* Responsive: tablets */
        @media (max-width: 992px) {
          .search-bar input {
            width: 80%;
          }
          .cart-summary {
            position: static;
            margin: 0 auto 20px;
            width: fit-content;
          }
        }

        /* Responsive: mobile */
        @media (max-width: 576px) {
          .shop-header .title {
            font-size: 2rem;
          }
          .product-grid {
            grid-template-columns: 1fr;
          }
          .category-tabs {
            gap: 10px;
          }
        }
      `}</style>
    </div>
  );
}
