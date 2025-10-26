import React from 'react';
import { Link } from 'react-router-dom';

// Import local images
import heroPoster from '../assets/images/hero-poster.jpg';
import chocolateCakeImg from '../assets/images/chocolate-cake.jpg'; 
import strawberryCakeImg from '../assets/images/strawberry-cake.jpg';
import croissantImg from '../assets/images/croissant.jpg';
import sourdoughBreadImg from '../assets/images/sourdough-loaf.jpg';

export default function Home() {
  // Example products to display on Home page
  const featuredProducts = [
    { id: 1, name: 'Rich Chocolate Fudge Cake', category: 'Cake', price: '$35.00', img: chocolateCakeImg, desc: 'Decadent chocolate cake with rich fudge layers.' },
    { id: 2, name: 'Fresh Strawberry Cream Cake', category: 'Cake', price: '$30.00', img: strawberryCakeImg, desc: 'Light sponge with fresh strawberry cream.' },
    { id: 3, name: 'Classic French Croissant', category: 'Pastry', price: '$4.50', img: croissantImg, desc: 'Flaky buttery croissant straight from France.' },
    { id: 4, name: 'Artisan Sourdough Loaf', category: 'Bread', price: '$5.00', img: sourdoughBreadImg, desc: 'Crusty sourdough bread with soft center.' },
  ];

  return (
    <>
      <div className="home-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to ADDU Bakery 🎂</h1>
            <p className="hero-subtitle">
              Indulge in our collection of delicious cakes, pastries, and artisanal breads—baked fresh daily with love!
            </p>
            <div className="hero-actions">
              <Link to="/products" className="btn-primary">
                Explore Our Menu &rarr;
              </Link>
              <Link to="/contact" className="btn-secondary">
                Custom Orders
              </Link>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img 
              src={heroPoster} 
              alt="Assortment of fresh bakery goods and pastries" 
              className="hero-img" 
            />
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="features-section">
          <h2 className="section-title">Why Our Customers Choose Us</h2>
          <div className="features-grid">
            <div className="feature-card">
              <span className="icon">🌾</span>
              <h3>Fresh Ingredients</h3>
              <p>We use locally sourced, premium, and natural ingredients in every batch.</p>
            </div>
            <div className="feature-card">
              <span className="icon">🌟</span>
              <h3>Award-Winning Taste</h3>
              <p>Our recipes have been perfected over decades, earning rave reviews.</p>
            </div>
            <div className="feature-card">
              <span className="icon">🚚</span>
              <h3>Express Delivery</h3>
              <p>Get your favorite treats delivered quickly and safely to your door.</p>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="featured-section">
          <h2 className="section-title">Our Best Sellers</h2>
          <div className="product-carousel">
            {featuredProducts.map(product => (
              <div className="product-card" key={product.id}>
                <img src={product.img} alt={product.name} />
                <div className="product-info">
                  <span className="category-badge">{product.category}</span>
                  <h4>{product.name}</h4>
                  <p>{product.desc}</p>
                  <p className="price">{product.price}</p>
                  <Link to={`/products`} className="btn-small">View Details</Link>
                </div>
              </div>
            ))}
          </div>
          <Link to="/products" className="btn-primary-outline">See All Products</Link>
        </section>

        {/* Testimonials */}
        <section className="testimonials-section">
          <h2 className="section-title text-light">What Our Customers Say</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p>"The best croissants I've ever tasted! Flaky, buttery, and absolutely perfect every time."</p>
              <p className="customer-name">— Sarah M.</p>
            </div>
            <div className="testimonial-card">
              <p>"I ordered a custom cake for a birthday, and it was stunning! Beautiful design and delicious flavor."</p>
              <p className="customer-name">— David L.</p>
            </div>
          </div>
        </section>
      </div>

      {/* CSS */}
      <style jsx="true">{`
        :root {
          --primary-color: #FF6B6B;
          --secondary-color: #FFE66D;
          --text-dark: #333;
          --text-light: #fff;
          --bg-light: #f9f9f9;
        }

        .home-container { margin: 0 auto; padding: 0 20px; font-family: 'Poppins', sans-serif; color: var(--text-dark); }
        .section-title { text-align: center; font-size: 2rem; margin: 50px 0 30px; color: var(--primary-color); font-weight: 700; }

        /* Hero */
        .hero-section { display: flex; gap: 40px; align-items: center; padding: 60px; background: var(--bg-light); border-radius: 20px; flex-wrap: wrap; }
        .hero-content { flex: 1; min-width: 280px; }
        .hero-title { font-size: 3rem; margin-bottom: 15px; line-height: 1.1; color: var(--primary-color); }
        .hero-subtitle { font-size: 1.3rem; margin-bottom: 30px; color: #555; }
        .hero-actions { display: flex; gap: 15px; flex-wrap: wrap; }
        .hero-image-wrapper { flex: 1; display: flex; justify-content: center; }
        .hero-img { width: 100%; max-width: 450px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); object-fit: cover; }

        /* Buttons */
        .btn-primary, .btn-secondary, .btn-small, .btn-primary-outline { border-radius: 50px; font-weight: 600; text-decoration: none; text-align: center; display: inline-block; transition: all 0.3s ease-in-out; }
        .btn-primary { background: var(--primary-color); color: var(--text-light); padding: 12px 25px; border: 2px solid var(--primary-color); }
        .btn-primary:hover { background: #ff8c8c; transform: translateY(-2px); box-shadow: 0 5px 15px rgba(255,107,107,0.4); }
        .btn-secondary { background: var(--secondary-color); color: var(--text-dark); padding: 12px 25px; border: 2px solid var(--secondary-color); }
        .btn-secondary:hover { background: #fff3a6; transform: translateY(-2px); box-shadow: 0 5px 15px rgba(255,230,109,0.4); }
        .btn-small { background: var(--primary-color); color: var(--text-light); padding: 8px 15px; font-size: 0.9rem; border-radius: 8px; }
        .btn-primary-outline { display: block; width: fit-content; margin: 40px auto 0; padding: 10px 30px; border: 2px solid var(--primary-color); color: var(--primary-color); border-radius: 50px; text-decoration: none; }

        /* Features */
        .features-grid { display: flex; gap: 20px; justify-content: space-around; flex-wrap: wrap; }
        .feature-card { flex: 1 1 280px; text-align: center; padding: 30px; border-radius: 15px; background: #fff; box-shadow: 0 4px 15px rgba(0,0,0,0.05); transition: transform 0.3s; }
        .feature-card:hover { transform: translateY(-8px); box-shadow: 0 15px 30px rgba(255,107,107,0.15); }
        .feature-card .icon { font-size: 3rem; display: block; margin-bottom: 15px; }
        .feature-card h3 { color: var(--primary-color); margin-bottom: 10px; }

        /* Products */
        .product-carousel { display: flex; gap: 20px; flex-wrap: wrap; justify-content: center; }
        .product-card { background: #fff; border-radius: 15px; overflow: hidden; box-shadow: 0 5px 20px rgba(0,0,0,0.1); width: 280px; text-align: center; transition: transform 0.3s; }
        .product-card:hover { transform: scale(1.03); }
        .product-card img { width: 100%; height: 180px; object-fit: cover; }
        .product-info { padding: 15px; }
        .category-badge { background: var(--secondary-color); color: var(--text-dark); padding: 3px 10px; font-size: 0.8rem; border-radius: 20px; display: inline-block; margin-bottom: 8px; }
        .product-card h4 { margin: 5px 0; color: var(--text-dark); }
        .product-card p { margin-bottom: 10px; color: #555; }
        .product-card .price { font-weight: 700; color: var(--primary-color); margin-bottom: 15px; }

        /* Testimonials */
        .testimonials-section { background: var(--primary-color); padding: 60px 20px; margin: 50px -20px 0; text-align: center; }
        .testimonial-grid { display: flex; gap: 20px; flex-wrap: wrap; justify-content: center; }
        .testimonial-card { flex: 1 1 300px; background: rgba(255,255,255,0.9); padding: 25px; border-radius: 10px; box-shadow: 0 5px 20px rgba(0,0,0,0.15); text-align: left; font-style: italic; }
        .customer-name { font-weight: 600; color: var(--primary-color); font-style: normal; }

        /* Responsive */
        @media (max-width: 992px) { .hero-section { flex-direction: column; gap: 30px; } .hero-content { text-align: center; } }
        @media (max-width: 768px) { .product-card { width: 90%; } .features-grid, .product-carousel, .testimonial-grid { flex-direction: column; align-items: center; } }
      `}</style>
    </>
  );
}
