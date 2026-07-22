import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />

      <div className="home">

        {/* HERO */}

        <section className="hero">

          <div className="hero-logo">
            <img
              src="/TrendCart Logo.png"
              alt="TrendCart"
            />

            <h1>TrendCart</h1>
          </div>

          <p className="hero-subtitle">
            Premium Shopping Experience
          </p>

          <input
            type="text"
            placeholder="Search Products..."
            className="search-box"
          />

          <div className="hero-buttons">

            <Link to="/products">
              <button className="shop-btn">
                Shop Now
              </button>
            </Link>

            <Link to="/register">
              <button className="register-btn-home">
                Join Now
              </button>
            </Link>

          </div>

        </section>

        {/* CATEGORY */}

        <section className="categories">

          <h2>Shop By Category</h2>

          <div className="category-list">

            <button>📱 Mobiles</button>

            <button>💻 Electronics</button>

            <button>👟 Shoes</button>

            <button>👕 Fashion</button>

            <button>⌚ Accessories</button>

          </div>

        </section>

        {/* OFFER */}

        <section className="offer-banner">

          <div>

            <h2>🔥 Mega Sale</h2>

            <p>Up to 70% OFF on Electronics</p>

          </div>

          <Link to="/products">
            <button>Shop Deals</button>
          </Link>

        </section>

        {/* FEATURED */}

        <section className="featured">

          <h2>Latest Products</h2>

          <div className="featured-grid">

            <div className="featured-card">

              <span className="discount">20% OFF</span>

              <img
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
                alt="iPhone"
              />

              <h3>iPhone 15</h3>

              <p className="price">₹79,999</p>

              <div className="rating">
                ⭐⭐⭐⭐⭐ (4.8)
              </div>

              <button>Add To Cart</button>

            </div>

            <div className="featured-card">

              <span className="discount">15% OFF</span>

              <img
                src="https://images.unsplash.com/photo-1517336714739-489689fd1ca8"
                alt="Laptop"
              />

              <h3>MacBook Air M2</h3>

              <p className="price">₹99,999</p>

              <div className="rating">
                ⭐⭐⭐⭐⭐ (4.9)
              </div>

              <button>Add To Cart</button>

            </div>

            <div className="featured-card">

              <span className="discount">25% OFF</span>

              <img
                src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                alt="Shoes"
              />

              <h3>Nike Shoes</h3>

              <p className="price">₹3,999</p>

              <div className="rating">
                ⭐⭐⭐⭐⭐ (4.7)
              </div>

              <button>Add To Cart</button>

            </div>

          </div>

        </section>

        {/* WHY CHOOSE */}

        <section className="features">

          <div className="feature-card">
            🚚
            <h3>Free Delivery</h3>
            <p>Fast delivery across India</p>
          </div>

          <div className="feature-card">
            💳
            <h3>Secure Payment</h3>
            <p>100% Secure Checkout</p>
          </div>

          <div className="feature-card">
            🔄
            <h3>Easy Returns</h3>
            <p>7 Days Return Policy</p>
          </div>

        </section>

        {/* FEATURED CATEGORY */}

        <section className="featured-category">

          <h2>Featured Categories</h2>

          <div className="category-grid">

            <div className="category-card">
              📱
              <h3>Mobiles</h3>
            </div>

            <div className="category-card">
              💻
              <h3>Laptops</h3>
            </div>

            <div className="category-card">
              👟
              <h3>Shoes</h3>
            </div>

            <div className="category-card">
              ⌚
              <h3>Accessories</h3>
            </div>

          </div>

        </section>

        {/* REVIEWS */}

        <section className="reviews">

          <h2>Customer Reviews</h2>

          <div className="review-grid">

            <div className="review-card">
              ⭐⭐⭐⭐⭐
              <p>"Amazing products and fast delivery."</p>
              <h4>- Rahul</h4>
            </div>

            <div className="review-card">
              ⭐⭐⭐⭐⭐
              <p>"Best shopping website."</p>
              <h4>- Priya</h4>
            </div>

            <div className="review-card">
              ⭐⭐⭐⭐⭐
              <p>"Excellent customer support."</p>
              <h4>- Kiran</h4>
            </div>

          </div>

        </section>

        {/* NEWSLETTER */}

        <section className="newsletter">

          <h2>Subscribe for Latest Offers</h2>

          <input
            type="email"
            placeholder="Enter your email"
          />

          <button>Subscribe</button>

        </section>

      </div>

      <Footer />

    </>
  );
}

export default Home;