import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'

import './navigation.css'

const Navigation = (props) => {
  return (
    <div className="navigation-container1">
      <nav className="navigation-wrapper">
        <div className="navigation-container">
          <Link to="/">
            <div aria-label="GrocerFlow Home" className="navigation-brand">
              <div className="navigation-logo-icon">
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
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8c0 5.5-4.78 10-10 10"></path>
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                  </g>
                </svg>
              </div>
              <span className="section-title navigation-brand-name">
                GrocerFlow
              </span>
            </div>
          </Link>
          <div className="navigation-links-desktop">
            <Link to="/">
              <div className="navigation-link">
                <span>Home</span>
              </div>
            </Link>
            <Link to="/">
              <div className="navigation-link">
                <span>Promotions</span>
              </div>
            </Link>
            <Link to="/">
              <div className="navigation-link">
                <span>Categories</span>
              </div>
            </Link>
            <Link to="/">
              <div className="navigation-link">
                <span>Weekly Baskets</span>
              </div>
            </Link>
          </div>
          <div className="navigation-actions">
            <button aria-label="Search" className="navigation-action-btn">
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
                  <path d="m21 21l-4.34-4.34"></path>
                  <circle r="8" cx="11" cy="11"></circle>
                </g>
              </svg>
            </button>
            <button aria-label="Account" className="navigation-action-btn">
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
                  <circle r="10" cx="12" cy="12"></circle>
                  <circle r="3" cx="12" cy="10"></circle>
                  <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"></path>
                </g>
              </svg>
            </button>
            <button className="btn-primary btn btn-sm navigation-cart-btn">
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
              <span className="navigation-thq-navigation-cart-count-elm">
                3
              </span>
            </button>
            <button
              id="mobileMenuToggle"
              aria-label="Open Menu"
              aria-expanded="false"
              className="navigation-mobile-toggle"
            >
              <svg
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div id="mobileOverlay" className="navigation-mobile-overlay">
        <div className="navigation-overlay-header">
          <Link to="/">
            <div aria-label="GrocerFlow Home" className="navigation-brand">
              <div className="navigation-logo-icon">
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
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8c0 5.5-4.78 10-10 10"></path>
                    <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                  </g>
                </svg>
              </div>
              <span className="section-title navigation-brand-name">
                GrocerFlow
              </span>
            </div>
          </Link>
          <button
            id="mobileMenuClose"
            aria-label="Close Menu"
            className="navigation-mobile-close"
          >
            <svg
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1zm-5.5-3.5l-5 5m0-5l5 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
        <div className="navigation-overlay-content">
          <div className="navigation-mobile-links">
            <Link to="/">
              <div className="navigation-mobile-link">
                <span>Home</span>
              </div>
            </Link>
            <Link to="/">
              <div className="navigation-mobile-link">
                <span>Promotions</span>
              </div>
            </Link>
            <Link to="/">
              <div className="navigation-mobile-link">
                <span>Featured Groceries</span>
              </div>
            </Link>
            <Link to="/">
              <div className="navigation-mobile-link">
                <span>All Categories</span>
              </div>
            </Link>
            <Link to="/">
              <div className="navigation-mobile-link">
                <span>Weekly Baskets</span>
              </div>
            </Link>
            <Link to="/">
              <div className="navigation-mobile-link">
                <span>Order History</span>
              </div>
            </Link>
            <Link to="/">
              <div className="navigation-mobile-link">
                <span>Saved Addresses</span>
              </div>
            </Link>
          </div>
          <div className="navigation-mobile-footer">
            <Link to="/">
              <div className="btn-primary btn btn-lg">
                <span>Shop Now</span>
              </div>
            </Link>
            <Link to="/">
              <div className="btn btn-outline btn-lg">
                <span>My Account</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="navigation-container2">
        <div className="navigation-container3">
          <Script
            html={`<style>
@media (prefers-reduced-motion: reduce) {
.navigation-mobile-overlay {
  transition: none;
}
}
</style>`}
          ></Script>
        </div>
      </div>
      <div className="navigation-container4">
        <div className="navigation-container5">
          <Script
            html={`<script defer data-name="navigation-logic">
(function(){
  const toggleBtn = document.getElementById("mobileMenuToggle")
  const closeBtn = document.getElementById("mobileMenuClose")
  const overlay = document.getElementById("mobileOverlay")

  const openMenu = () => {
    overlay.style.display = "flex"
    // Small timeout to allow display: flex to register before opacity transition
    setTimeout(() => {
      overlay.classList.add("is-open")
      toggleBtn.setAttribute("aria-expanded", "true")
      document.body.style.overflow = "hidden"
    }, 10)
  }

  const closeMenu = () => {
    overlay.classList.remove("is-open")
    toggleBtn.setAttribute("aria-expanded", "false")
    document.body.style.overflow = ""

    // Wait for transition to finish before hiding display
    setTimeout(() => {
      if (!overlay.classList.contains("is-open")) {
        overlay.style.display = "none"
      }
    }, 300)
  }

  toggleBtn.addEventListener("click", openMenu)
  closeBtn.addEventListener("click", closeMenu)

  // Close menu when clicking a link
  const mobileLinks = document.querySelectorAll(".navigation-mobile-link")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", closeMenu)
  })

  // Handle ESC key
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("is-open")) {
      closeMenu()
    }
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Navigation
