import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Tricky Juicy Fox</title>
        <meta property="og:title" content="Tricky Juicy Fox" />
        <link
          rel="canonical"
          href="https://tricky-juicy-fox-5eohxg.teleporthq.app/"
        />
        <meta
          property="og:url"
          content="https://tricky-juicy-fox-5eohxg.teleporthq.app/"
        />
      </Helmet>
      <Navigation></Navigation>
      <section className="promotions-hero">
        <video
          src="https://videos.pexels.com/video-files/8447058/8447058-hd_1280_720_24fps.mp4"
          loop="true"
          muted="true"
          poster="https://images.pexels.com/videos/8447058/pictures/preview-0.jpeg"
          autoPlay="true"
          playsInline="true"
          className="hero-video"
        ></video>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="hero-badge">Limited Time Offer</span>
          <h1 className="home-hero-title hero-title">
            <span>
              {' '}
              Freshness Delivered
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <br></br>
            <span>
              {' '}
              To Your Doorstep
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </h1>
          <p className="home-hero-subtitle hero-subtitle">
            <span>
              {' '}
              Get 25% OFF your first order with code:
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text13">FRESH25</span>
            <span>
              {' '}
              . Shop premium fruits, vegetables, and curated weekly baskets.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </p>
          <div className="hero-actions">
            <a href="#featured">
              <div className="btn-primary btn btn-lg">
                <span>Shop Now</span>
              </div>
            </a>
            <a href="#baskets">
              <div className="btn btn-outline btn-lg">
                <span>Weekly Baskets</span>
              </div>
            </a>
          </div>
          <div className="hero-shortcuts">
            <div className="shortcut-item">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 6.528V3a1 1 0 0 1 1-1h0"></path>
                  <path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10a3 3 0 0 0 3.648.648a5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"></path>
                </g>
              </svg>
              <span>Fruits</span>
            </div>
            <div className="shortcut-item">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7M8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"></path>
                  <path d="M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9"></path>
                  <path d="M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2"></path>
                </g>
              </svg>
              <span>Vegetables</span>
            </div>
            <div className="shortcut-item">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73zm1 .27V12"></path>
                  <path d="M3.29 7L12 12l8.71-5M7.5 4.27l9 5.15"></path>
                </g>
              </svg>
              <span>Grains</span>
            </div>
          </div>
        </div>
      </section>
      <section className="search-cart-bar">
        <div className="search-cart-container">
          <div className="search-module">
            <div className="search-input-wrapper">
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                className="search-icon"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m21 21l-4.34-4.34"></path>
                  <circle r="8" cx="11" cy="11"></circle>
                </g>
              </svg>
              <input
                type="text"
                placeholder="Search fresh groceries..."
                className="search-field"
              />
            </div>
            <div className="category-shortcuts">
              <button className="shortcut-chip">Organic</button>
              <button className="shortcut-chip">Berries</button>
              <button className="shortcut-chip">Leafy Greens</button>
              <button className="shortcut-chip">Citrus</button>
            </div>
          </div>
          <div className="cart-module">
            <div className="cart-preview">
              <div className="cart-info">
                <svg
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle r="1" cx="8" cy="21"></circle>
                    <circle r="1" cx="19" cy="21"></circle>
                    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                  </g>
                </svg>
                <div className="cart-text">
                  <span className="cart-count">3 Items</span>
                  <span className="cart-total">UGX 157,000</span>
                </div>
              </div>
              <a href="#checkout">
                <div className="btn btn-sm btn-secondary">
                  <span>Checkout</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="featured" className="featured-groceries">
        <div className="section-header-row">
          <h2 className="section-title">Fresh Picks For You</h2>
          <p className="section-subtitle">
            Hand-selected seasonal produce and pantry essentials.
          </p>
        </div>
        <div className="product-rail">
          <div className="product-card">
            <div className="product-image-container">
              <img
                alt="Fresh Greens"
                src="https://images.pexels.com/photos/8805183/pexels-photo-8805183.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="product-img"
              />
              <span className="product-tag">Organic</span>
            </div>
            <div className="product-details">
              <h3 className="product-name">Organic Celery</h3>
              <p className="product-price">
                <span>UGX 11,000</span>
                <span>/ bunch</span>
              </p>
              <button className="btn-primary btn btn-sm add-btn">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image-container">
              <img
                alt="Fresh Tomatoes"
                src="https://images.pexels.com/photos/21044437/pexels-photo-21044437.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="product-img"
              />
              <span className="product-tag">Local</span>
            </div>
            <div className="product-details">
              <h3 className="product-name">Vine Tomatoes</h3>
              <p className="product-price">
                <span>UGX 13,000</span>
                <span>/ kg</span>
              </p>
              <button className="btn-primary btn btn-sm add-btn">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image-container">
              <img
                alt="Fresh Apples"
                src="https://images.pexels.com/photos/7879965/pexels-photo-7879965.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="product-img"
              />
              <span className="product-tag">Sweet</span>
            </div>
            <div className="product-details">
              <h3 className="product-name">Honeycrisp Apples</h3>
              <p className="product-price">
                <span>UGX 15,500</span>
                <span>/ kg</span>
              </p>
              <button className="btn-primary btn btn-sm add-btn">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image-container">
              <img
                alt="Herbs"
                src="https://images.pexels.com/photos/5709276/pexels-photo-5709276.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="product-img"
              />
              <span className="product-tag">Fresh</span>
            </div>
            <div className="product-details">
              <h3 className="product-name">Aromatic Herbs</h3>
              <p className="product-price">
                <span>UGX 5,500</span>
                <span>/ bunch</span>
              </p>
              <button className="btn-primary btn btn-sm add-btn">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="product-card">
            <div className="product-image-container">
              <img
                alt="Baby Spinach"
                src="https://images.pexels.com/photos/8422681/pexels-photo-8422681.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="product-img"
              />
              <span className="product-tag">Nutrient Dense</span>
            </div>
            <div className="product-details">
              <h3 className="product-name">Baby Spinach</h3>
              <p className="product-price">
                <span>UGX 14,700</span>
                <span>/ 500g</span>
              </p>
              <button className="btn-primary btn btn-sm add-btn">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="browse-categories">
        <div className="container-wrapper">
          <h2 className="section-title centered">Explore Our Aisle</h2>
          <div className="category-grid">
            <a href="/category/fruits">
              <div className="category-tile">
                <div className="tile-icon">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 6.528V3a1 1 0 0 1 1-1h0"></path>
                      <path d="M18.237 21A15 15 0 0 0 22 11a6 6 0 0 0-10-4.472A6 6 0 0 0 2 11a15.1 15.1 0 0 0 3.763 10a3 3 0 0 0 3.648.648a5.5 5.5 0 0 1 5.178 0A3 3 0 0 0 18.237 21"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="tile-title">Fruits</h3>
              </div>
            </a>
            <a href="/category/vegetables">
              <div className="category-tile">
                <div className="tile-icon">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7M8.64 14l-2.05-2.04M15.34 15l-2.46-2.46"></path>
                      <path d="M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9"></path>
                      <path d="M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="tile-title">Vegetables</h3>
              </div>
            </a>
            <a href="/category/grains">
              <div className="category-tile">
                <div className="tile-icon">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73zm1 .27V12"></path>
                      <path d="M3.29 7L12 12l8.71-5M7.5 4.27l9 5.15"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="tile-title">Grains</h3>
              </div>
            </a>
            <a href="/category/household">
              <div className="category-tile">
                <div className="tile-icon">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle r="1" cx="8" cy="21"></circle>
                      <circle r="1" cx="19" cy="21"></circle>
                      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                    </g>
                  </svg>
                </div>
                <h3 className="tile-title">Household</h3>
              </div>
            </a>
            <a href="/category/dairy">
              <div className="category-tile">
                <div className="tile-icon">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 3v6m4.76-6a2 2 0 0 1 1.8 1.1l2.23 4.479a2 2 0 0 1 .21.891V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9.472a2 2 0 0 1 .211-.894L5.45 4.1A2 2 0 0 1 7.24 3zM3.054 9.013h17.893"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <h3 className="tile-title">Dairy &amp; Eggs</h3>
              </div>
            </a>
            <a href="/category/snacks">
              <div className="category-tile">
                <div className="tile-icon">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                      <circle r="2" cx="4" cy="20"></circle>
                    </g>
                  </svg>
                </div>
                <h3 className="tile-title">Snacks</h3>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section id="baskets" className="basket-spotlight">
        <div className="section-header-row">
          <h2 className="section-title">Weekly Curated Baskets</h2>
          <p className="section-subtitle">
            Save time and money with our nutritionist-approved bundles.
          </p>
        </div>
        <div className="basket-rail">
          <div className="basket-card">
            <div className="basket-visual">
              <img
                alt="Family Basket"
                src="https://images.pexels.com/photos/4198972/pexels-photo-4198972.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="basket-img"
              />
              <div className="basket-price-badge">
                <span>UGX 221,000</span>
              </div>
            </div>
            <div className="basket-info">
              <h3 className="basket-name">Family Feast Bundle</h3>
              <p className="basket-desc">
                A full week of essentials for a family of four. Includes 10kg of
                mixed produce and grains.
              </p>
              <button className="full-width btn btn-accent btn-lg">
                Add Basket
              </button>
            </div>
          </div>
          <div className="basket-card">
            <div className="basket-visual">
              <img
                alt="Green Basket"
                src="https://images.pexels.com/photos/8422691/pexels-photo-8422691.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="basket-img"
              />
              <div className="basket-price-badge">
                <span>UGX 129,000</span>
              </div>
            </div>
            <div className="basket-info">
              <h3 className="basket-name">Detox Green Pack</h3>
              <p className="basket-desc">
                Rich in antioxidants. Kale, spinach, celery, green apples, and
                fresh ginger roots.
              </p>
              <button className="full-width btn btn-accent btn-lg">
                Add Basket
              </button>
            </div>
          </div>
          <div className="basket-card">
            <div className="basket-visual">
              <img
                alt="Fruit Basket"
                src="https://images.pexels.com/photos/4971957/pexels-photo-4971957.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                className="basket-img"
              />
              <div className="basket-price-badge">
                <span>UGX 90,500</span>
              </div>
            </div>
            <div className="basket-info">
              <h3 className="basket-name">Seasonal Fruit Box</h3>
              <p className="basket-desc">
                The freshest seasonal picks from local orchards. Perfect for
                healthy snacking.
              </p>
              <button className="full-width btn btn-accent btn-lg">
                Add Basket
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <div className="section-header-row">
          <h2 className="section-title">What Our Community Says</h2>
          <p className="section-subtitle">
            Real stories from our happy, healthy customers.
          </p>
        </div>
        <div className="testimonial-rail">
          <div className="testimonial-card">
            <div className="rating-stars">
              <svg
                fill="var(--color-accent)"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                viewBox="0 0 24 24"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
              </svg>
              <svg
                fill="var(--color-accent)"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                viewBox="0 0 24 24"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
              </svg>
              <svg
                fill="var(--color-accent)"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                viewBox="0 0 24 24"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
              </svg>
              <svg
                fill="var(--color-accent)"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                viewBox="0 0 24 24"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
              </svg>
              <svg
                fill="var(--color-accent)"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                viewBox="0 0 24 24"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
              </svg>
            </div>
            <p className="testimonial-text">
              &quot;GrocerFlow has completely changed how I shop. The produce is
              actually fresher than what I find at my local supermarket, and the
              delivery is always on time!&quot;
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">
                <span>SC</span>
              </div>
              <div className="author-info">
                <span className="author-name">Sarah Chen</span>
                <span className="author-meta">Verified Customer</span>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="rating-stars">
              <svg
                fill="var(--color-accent)"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                viewBox="0 0 24 24"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
              </svg>
              <svg
                fill="var(--color-accent)"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                viewBox="0 0 24 24"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
              </svg>
              <svg
                fill="var(--color-accent)"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                viewBox="0 0 24 24"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
              </svg>
              <svg
                fill="var(--color-accent)"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                viewBox="0 0 24 24"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
              </svg>
              <svg
                fill="var(--color-accent)"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                viewBox="0 0 24 24"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
              </svg>
            </div>
            <p className="testimonial-text">
              &quot;The weekly baskets are a lifesaver for my busy schedule. I
              don&apos;t have to think about what to buy, and the quality is
              consistently top-notch.&quot;
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">
                <span>MR</span>
              </div>
              <div className="author-info">
                <span className="author-name">Marcus Reed</span>
                <span className="author-meta">Weekly Subscriber</span>
              </div>
            </div>
          </div>
          <div className="testimonial-card">
            <div className="rating-stars">
              <svg
                fill="var(--color-accent)"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                viewBox="0 0 24 24"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
              </svg>
              <svg
                fill="var(--color-accent)"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                viewBox="0 0 24 24"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
              </svg>
              <svg
                fill="var(--color-accent)"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                viewBox="0 0 24 24"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
              </svg>
              <svg
                fill="var(--color-accent)"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                viewBox="0 0 24 24"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
              </svg>
              <svg
                fill="var(--color-accent)"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
                height="18"
                viewBox="0 0 24 24"
              >
                <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"></path>
              </svg>
            </div>
            <p className="testimonial-text">
              &quot;Amazing selection of grains and household items. It&apos;s
              truly a one-stop shop. The mobile app experience is
              seamless!&quot;
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">
                <span>EL</span>
              </div>
              <div className="author-info">
                <span className="author-name">Elena Lopez</span>
                <span className="author-meta">App User</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="trust-stats">
        <div className="container-wrapper">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-icon">
                <svg
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73zm1 .27V12"></path>
                    <path d="M3.29 7L12 12l8.71-5M7.5 4.27l9 5.15"></path>
                  </g>
                </svg>
              </div>
              <div className="stat-content">
                <span className="stat-number">50k+</span>
                <span className="stat-label">Orders Delivered</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <svg
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
              <div className="stat-content">
                <span className="stat-number">99%</span>
                <span className="stat-label">Satisfaction Rate</span>
              </div>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <svg
                  width="48"
                  xmlns="http://www.w3.org/2000/svg"
                  height="48"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594zM20 2v4m2-2h-4"></path>
                    <circle r="2" cx="4" cy="20"></circle>
                  </g>
                </svg>
              </div>
              <div className="stat-content">
                <span className="stat-number">100%</span>
                <span className="stat-label">Freshness Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="home-container2">
        <div className="home-container3">
          <Script
            html={`<script defer data-name="grocer-flow-ui">
(function(){
  // Add simple scroll reveal effects for cards
  const observerOptions = {
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Apply to product cards
  document.querySelectorAll(".product-card, .basket-card, .testimonial-card, .category-tile").forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(20px)"
    card.style.transition = "all 0.6s ease-out"
    observer.observe(card)
  })

  // Simple cart interaction feedback
  document.querySelectorAll(".add-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const originalText = this.innerText
      this.innerText = "Added!"
      this.classList.add("btn-secondary")
      this.classList.remove("btn-primary")

      setTimeout(() => {
        this.innerText = originalText
        this.classList.add("btn-primary")
        this.classList.remove("btn-secondary")
      }, 2000)
    })
  })

  // Search field focus animation
  const searchField = document.querySelector(".search-field")
  if (searchField) {
    searchField.addEventListener("focus", () => {
      document.querySelector(".search-input-wrapper").style.transform = "scale(1.02)"
      document.querySelector(".search-input-wrapper").style.transition = "transform 0.3s ease"
    })
    searchField.addEventListener("blur", () => {
      document.querySelector(".search-input-wrapper").style.transform = "scale(1)"
    })
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
      <Footer></Footer>
      <a href="https://play.teleporthq.io/signup">
        <div aria-label="Sign up to TeleportHQ" className="home-container4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 19 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="home-icon95"
          >
            <path
              d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
              fill="#B23ADE"
            ></path>
            <path
              d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
              fill="#FF5C5C"
            ></path>
            <path
              d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
              fill="#2874DE"
            ></path>
          </svg>
          <span className="home-text37">Built in TeleportHQ</span>
        </div>
      </a>
    </div>
  )
}

export default Home
