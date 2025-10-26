import React from 'react';
import { Link } from 'react-router-dom';

// Import local images
import heroPoster from '../assets/images/hero-poster.jpg';
import chocolateCakeImg from '../assets/images/chocolate-cake.jpg';
import strawberryCakeImg from '../assets/images/strawberry-cake.jpg';
import croissantImg from '../assets/images/croissant.jpg';
import sourdoughBreadImg from '../assets/images/sourdough-loaf.jpg';
import bakerIcon from '../assets/images/hero-poster.jpg'; // Assuming you add a small icon image

export default function Home() {
  // Example products to display on Home page
  const featuredProducts = [
    { id: 1, name: 'Rich Chocolate Fudge Cake', category: 'Cake', price: '$35.00', img: chocolateCakeImg, desc: 'Decadent chocolate cake with rich fudge layers. A timeless classic!', slug: 'rich-chocolate-fudge-cake' },
    { id: 2, name: 'Fresh Strawberry Cream Cake', category: 'Cake', price: '$30.00', img: strawberryCakeImg, desc: 'Light sponge with fresh strawberry cream, perfect for any celebration.', slug: 'fresh-strawberry-cream-cake' },
    { id: 3, name: 'Classic French Croissant', category: 'Pastry', price: '$4.50', img: croissantImg, desc: 'Flaky buttery croissant straight from France. Great with your morning coffee.', slug: 'classic-french-croissant' },
    { id: 4, name: 'Artisan Sourdough Loaf', category: 'Bread', price: '$5.00', img: sourdoughBreadImg, desc: 'Crusty sourdough bread with a soft, airy center, naturally fermented.', slug: 'artisan-sourdough-loaf' },
  ];

  return (
    <>
      <div className="home-container">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">Welcome to ADDU Bakery 🎂</h1>
            <p className="hero-subtitle">
              Indulge in our collection of delicious cakes, pastries, and artisanal breads—baked **fresh daily with love**!
            </p>
            <div className="hero-actions">
              <Link to="/products" className="btn-primary">
                Explore Our Menu &rarr;
              </Link>
              <Link to="/contact" className="btn-secondary">
                Start a Custom Order
              </Link>
            </div>
          </div>
          <div className="hero-image-wrapper">
            <img 
              src={heroPoster} 
              alt="Assortment of fresh bakery goods and pastries" 
              className="hero-img" 
              loading="lazy"
            />
          </div>
        </section>

        {/* Why Choose Us - Features */}
        <section className="features-section">
          <h2 className="section-title">Why Our Customers Choose Us</h2>
          <div className="features-grid">
            <div className="feature-card">
              <span className="icon">🌾</span>
              <h3>Fresh Ingredients</h3>
              <p>We use locally sourced, premium, and natural ingredients in every batch. **Quality is our promise.**</p>
            </div>
            <div className="feature-card">
              <span className="icon">🌟</span>
              <h3>Masterful Recipes</h3>
              <p>Our recipes have been perfected over decades, earning rave reviews and **a loyal following.**</p>
            </div>
            <div className="feature-card">
              <span className="icon">🚚</span>
              <h3>Express Delivery</h3>
              <p>Get your favorite treats delivered quickly and safely to your door, **still warm from the oven.**</p>
            </div>
          </div>
        </section>

        {/* About Us Section - New Detailed Section */}
        <section className="about-section">
            <div className="about-content">
                <h2 className="section-title text-dark">Our Passion for Baking</h2>
                <p>
                    ADDU Bakery started with a simple, heartfelt idea: to bring the joy of truly authentic, handcrafted baking to our community. From our humble beginnings making sourdough in a home kitchen, we've grown into a beloved neighborhood spot known for quality and care.
                </p>
                <p>
                    Every cake, every loaf, and every pastry is made by hand, following traditional techniques and infused with modern flair. When you choose ADDU, you're not just buying a treat; you're tasting a piece of our passion.
                </p>
                <Link to="/about" className="btn-primary-outline">
                    Read Our Full Story
                </Link>
            </div>
            <div className="about-image">
                <img src={bakerIcon} alt="Baker's icon" className="baker-icon" />
            </div>
        </section>

        {/* Featured Products */}
        <section className="featured-section">
          <h2 className="section-title">Our Best Sellers</h2>
          <div className="product-carousel">
            {featuredProducts.map(product => (
              <div className="product-card" key={product.id}>
                <img src={product.img} alt={product.name} loading="lazy" />
                <div className="product-info">
                  <span className="category-badge">{product.category}</span>
                  <h4>{product.name}</h4>
                  <p>{product.desc}</p>
                  <p className="price">{product.price}</p>
                  {/* Updated Link to use a slug for better SEO and deep linking */}
                  <Link to={`/products`} className="btn-small">View Details</Link>
                </div>
              </div>
            ))}
          </div>
          <Link to="/products" className="btn-primary-outline">See All 25+ Products</Link>
        </section>

        {/* Call to Action for Loyalty/Newsletter - New Detailed Section */}
        <section className="newsletter-section">
            <div className="newsletter-content">
                <h2 className="section-title text-light">Don't Miss Out on Freshness! 🎁</h2>
                <p>Join the ADDU Loyalty Club and get **10% off your first order**, plus exclusive access to new seasonal items and baking tips.</p>
                <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert('Subscribed!'); /* Add actual subscription logic */ }}>
                    <input type="email" placeholder="Enter your email address" required />
                    <button type="submit" className="btn-secondary">Subscribe Now</button>
                </form>
            </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials-section">
          <h2 className="section-title text-light">What Our Customers Say</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p>"The best croissants I've ever tasted! Flaky, buttery, and absolutely perfect every time. **Worth every penny.**"</p>
              <p className="customer-name">— Shivam Singh Kurmi (Local Resident)</p>
            </div>
            <div className="testimonial-card">
              <p>"I ordered a custom cake for a birthday, and it was stunning! Beautiful design and **delicious flavor that everyone loved.**"</p>
              <p className="customer-name">— Himanshu Patel (Happy Customer)</p>
            </div>
            <div className="testimonial-card">
              <p>"I love the Artisan Sourdough Loaf. It's the only bread I buy now—**great crust and soft, airy crumb!**"</p>
              <p className="customer-name">— Ritik Patel (Bread Enthusiast)</p>
            </div>
          </div>
        </section>
      </div>

      {/* CSS */}
      <style jsx="true">{`
        :root {
          --primary-color: #FF6B6B;
          --secondary-color: #FFE66D;
          --accent-color: #4ECDC4; /* New Accent for more detail */
          --text-dark: #333;
          --text-light: #fff;
          --bg-light: #f9f9f9;
          --page-bg: linear-gradient(135deg, #FFF1F0 0%, #FFF9E6 100%);
        }

        .home-container { 
         
          margin: 0 auto; 
          padding: 0 20px; 
          font-family: 'Poppins', sans-serif; 
          color: var(--text-dark); 
          background: var(--page-bg); 
          min-height: 100vh;
        }

        .section-title { 
          text-align: center; 
          font-size: 2.2rem; 
          margin: 70px 0 40px; 
          color: var(--primary-color); 
          font-weight: 700; 
          border-bottom: 3px solid var(--secondary-color);
          display: inline-block;
          padding-bottom: 10px;
        }

        .text-light { color: var(--text-light) !important; border-bottom-color: var(--text-light) !important; }

        /* Hero */
        .hero-section { display: flex; gap: 40px; align-items: center; padding: 60px; background: #fff; border-radius: 20px; flex-wrap: wrap; box-shadow: 0 12px 30px rgba(0,0,0,0.08); margin-top: 20px;}
        .hero-content { flex: 1; min-width: 280px; }
        .hero-title { font-size: 3.5rem; margin-bottom: 15px; line-height: 1.1; color: var(--primary-color); }
        .hero-subtitle { font-size: 1.3rem; margin-bottom: 40px; color: #555; font-style: italic; }
        .hero-actions { display: flex; gap: 15px; flex-wrap: wrap; }
        .hero-image-wrapper { flex: 1; display: flex; justify-content: center; }
        .hero-img { width: 100%; max-width: 480px; border-radius: 15px; box-shadow: 0 15px 40px rgba(0,0,0,0.15); object-fit: cover; }

        /* Buttons */
        .btn-primary, .btn-secondary, .btn-small, .btn-primary-outline { border-radius: 50px; font-weight: 600; text-decoration: none; text-align: center; display: inline-block; transition: all 0.3s ease-in-out; }
        .btn-primary { background: var(--primary-color); color: var(--text-light); padding: 14px 30px; border: 2px solid var(--primary-color); }
        .btn-primary:hover { background: #ff8c8c; transform: translateY(-3px); box-shadow: 0 8px 20px rgba(255,107,107,0.5); }
        .btn-secondary { background: var(--secondary-color); color: var(--text-dark); padding: 14px 30px; border: 2px solid var(--secondary-color); }
        .btn-secondary:hover { background: #fff3a6; transform: translateY(-3px); box-shadow: 0 8px 20px rgba(255,230,109,0.5); }
        .btn-small { background: var(--accent-color); color: var(--text-light); padding: 8px 15px; font-size: 0.9rem; border-radius: 8px; }
        .btn-small:hover { background: #6fe4dd; }
        .btn-primary-outline { display: block; width: fit-content; margin: 40px auto 0; padding: 12px 35px; border: 2px solid var(--primary-color); color: var(--primary-color); border-radius: 50px; text-decoration: none; }
        .btn-primary-outline:hover { background: var(--primary-color); color: var(--text-light); }

        /* Features */
        .features-section { padding: 0 20px; }
        .features-grid { display: flex; gap: 30px; justify-content: center; flex-wrap: wrap; }
        .feature-card { flex: 1 1 280px; max-width: 300px; text-align: center; padding: 35px; border-radius: 15px; background: #fff; box-shadow: 0 6px 20px rgba(0,0,0,0.08); transition: transform 0.4s ease-in-out; border-bottom: 5px solid var(--secondary-color);}
        .feature-card:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(255,107,107,0.2); }
        .feature-card .icon { font-size: 3.5rem; display: block; margin-bottom: 20px; }
        .feature-card h3 { color: var(--primary-color); margin-bottom: 10px; font-size: 1.4rem; }
        .feature-card p { color: #666; }

        /* About Us */
        .about-section { 
            display: flex; 
            gap: 40px; 
            align-items: center; 
            padding: 50px 0;
            flex-wrap: wrap-reverse;
            margin-top: 50px;
        }
        .about-content { flex: 2; min-width: 300px; text-align: center; }
        .about-content p { font-size: 1.1rem; line-height: 1.7; margin-bottom: 20px; color: #555; }
        .about-image { flex: 1; display: flex; justify-content: center; min-width: 150px; }
        .baker-icon { width: 150px; height: 150px; object-fit: contain; }

        /* Products */
        .product-carousel { display: flex; gap: 30px; flex-wrap: wrap; justify-content: center; }
        .product-card { background: #fff; border-radius: 15px; overflow: hidden; box-shadow: 0 8px 30px rgba(0,0,0,0.15); width: 280px; text-align: left; transition: transform 0.3s; border: 1px solid #eee; }
        .product-card:hover { transform: translateY(-5px); box-shadow: 0 15px 40px rgba(0,0,0,0.15); }
        .product-card img { width: 100%; height: 200px; object-fit: cover; }
        .product-info { padding: 20px; }
        .category-badge { 
            background: var(--accent-color); 
            color: var(--text-light); 
            padding: 5px 12px; 
            font-size: 0.75rem; 
            border-radius: 20px; 
            display: inline-block; 
            margin-bottom: 10px; 
            font-weight: 600;
        }
        .product-card h4 { margin: 5px 0 10px; color: var(--text-dark); font-size: 1.25rem; }
        .product-card p { margin-bottom: 15px; color: #666; font-size: 0.95rem; line-height: 1.4; }
        .product-card .price { font-weight: 800; color: var(--primary-color); margin-bottom: 20px; font-size: 1.5rem; display: block; }
        
        /* Newsletter CTA */
        .newsletter-section { 
            background: var(--accent-color); 
            padding: 60px 20px; 
            margin: 80px -20px 0; 
            text-align: center; 
            border-top: 5px solid var(--primary-color);
        }
        .newsletter-content { max-width: 700px; margin: 0 auto; }
        .newsletter-content .section-title { margin-top: 0; color: var(--text-light) !important; border-bottom-color: var(--text-light) !important; }
        .newsletter-content p { color: var(--text-light); font-size: 1.2rem; margin-bottom: 30px; font-weight: 300; }
        .newsletter-form { display: flex; justify-content: center; gap: 10px; flex-wrap: wrap; }
        .newsletter-form input { 
            padding: 15px 20px; 
            border-radius: 50px; 
            border: none; 
            width: 300px; 
            font-size: 1rem;
        }

        /* Testimonials */
        .testimonials-section { 
            background: var(--primary-color); 
            padding: 80px 20px; 
            margin: 0 -20px; 
            text-align: center; 
        }
        .testimonial-grid { display: flex; gap: 30px; flex-wrap: wrap; justify-content: center; }
        .testimonial-card { 
            flex: 1 1 300px; 
            max-width: 350px;
            background: rgba(255,255,255,0.95); 
            padding: 30px; 
            border-radius: 10px; 
            box-shadow: 0 10px 30px rgba(0,0,0,0.2); 
            text-align: left; 
            font-style: italic; 
            border-left: 5px solid var(--secondary-color);
        }
        .testimonial-card p { font-size: 1.05rem; line-height: 1.5; color: #444; margin-bottom: 15px; }
        .customer-name { font-weight: 700; color: var(--primary-color); font-style: normal; display: block; margin-top: 10px; }

        /* Responsive */
        @media (max-width: 992px) { 
            .hero-section { flex-direction: column; gap: 30px; padding: 40px; } 
            .hero-content { text-align: center; } 
            .hero-title { font-size: 2.5rem; }
            .about-section { flex-direction: column-reverse; }
        }
        @media (max-width: 768px) { 
            .section-title { font-size: 1.8rem; margin: 40px 0 30px; }
            .product-card { width: 100%; max-width: 350px; } 
            .features-grid, .product-carousel, .testimonial-grid { flex-direction: column; align-items: center; }
            .hero-actions { justify-content: center; }
            .newsletter-form input { width: 100%; }
            .newsletter-form { gap: 15px; }
            .btn-primary, .btn-secondary { width: 100%; }
        }
      `}</style>
    </>
  );
}