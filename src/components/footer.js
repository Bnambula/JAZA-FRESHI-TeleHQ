import React from 'react'

import Script from 'dangerous-html/react'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container1">
      <footer className="footer-root">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-column footer-brand-column">
              <div className="footer-logo-wrapper">
                <svg
                  fill="none"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg"
                  height="32"
                  stroke="var(--color-primary)"
                  viewbox="0 0 24 24"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle r="1" cx="8" cy="21"></circle>
                  <circle r="1" cx="19" cy="21"></circle>
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                </svg>
                <span className="footer-brand-name">GrocerFlow</span>
              </div>
              <p className="section-content footer-description">
                Complete Online Grocery System Architecture. From fresh produce
                to household essentials, we deliver quality right to your
                doorstep with our advanced logistics network.
              </p>
              <div className="footer-social-links">
                <a href="#">
                  <div aria-label="Facebook" className="footer-social-icon">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="currentColor"
                      viewbox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div aria-label="Instagram" className="footer-social-icon">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="currentColor"
                      viewbox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                        width="20"
                        height="20"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div aria-label="Twitter" className="footer-social-icon">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="currentColor"
                      viewbox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div aria-label="LinkedIn" className="footer-social-icon">
                    <svg
                      fill="none"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      stroke="currentColor"
                      viewbox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
                      <circle r="2" cx="4" cy="4"></circle>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
            <div className="footer-column">
              <h3 className="section-subtitle footer-heading">
                Product Categories
              </h3>
              <ul className="footer-links-list">
                <li className="footer-link-item">
                  <a href="#">
                    <div className="footer-link">
                      <span>Fresh Fruits</span>
                    </div>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#">
                    <div className="footer-link">
                      <span>Organic Vegetables</span>
                    </div>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#">
                    <div className="footer-link">
                      <span>Essential Grains</span>
                    </div>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#">
                    <div className="footer-link">
                      <span>Household Groceries</span>
                    </div>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#">
                    <div className="footer-link">
                      <span>Weekly Baskets</span>
                    </div>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#">
                    <div className="footer-link">
                      <span>Promotions</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="section-subtitle footer-heading">
                Customer Layer
              </h3>
              <ul className="footer-links-list">
                <li className="footer-link-item">
                  <a href="#">
                    <div className="footer-link">
                      <span>My Account</span>
                    </div>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#">
                    <div className="footer-link">
                      <span>Order History</span>
                    </div>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#">
                    <div className="footer-link">
                      <span>Saved Addresses</span>
                    </div>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#">
                    <div className="footer-link">
                      <span>Delivery Times</span>
                    </div>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#">
                    <div className="footer-link">
                      <span>Payment Options</span>
                    </div>
                  </a>
                </li>
                <li className="footer-link-item">
                  <a href="#">
                    <div className="footer-link">
                      <span>Help Center</span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <h3 className="section-subtitle footer-heading">Contact Us</h3>
              <ul className="footer-contact-list">
                <li className="footer-contact-item">
                  <svg
                    fill="none"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    stroke="var(--color-primary)"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle r="3" cx="12" cy="10"></circle>
                  </svg>
                  <span className="section-content">
                    123 Logistics Way, Tech Park, City
                  </span>
                </li>
                <li className="footer-contact-item">
                  <svg
                    fill="none"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    stroke="var(--color-primary)"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"></path>
                  </svg>
                  <span className="section-content">+1 (555) 123-4567</span>
                </li>
                <li className="footer-contact-item">
                  <svg
                    fill="none"
                    width="18"
                    xmlns="http://www.w3.org/2000/svg"
                    height="18"
                    stroke="var(--color-primary)"
                    viewbox="0 0 24 24"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                    <rect x="2" y="4" rx="2" width="20" height="16"></rect>
                  </svg>
                  <span className="section-content">
                    support@grocerflow.com
                  </span>
                </li>
              </ul>
              <div className="footer-newsletter">
                <p className="section-content footer-newsletter-text">
                  Subscribe for fresh updates
                </p>
                <form
                  action="#"
                  method="POST"
                  data-form-id="25e23da1-cac0-4b72-ba2a-d012eb57b80a"
                  className="footer-newsletter-form"
                >
                  <input
                    type="email"
                    id="thq_textinput_3hx4"
                    name="textinput"
                    required="true"
                    placeholder="Your email"
                    data-form-field-id="thq_textinput_3hx4"
                    className="footer-newsletter-input"
                  />
                  <button
                    id="thq_button_r-Xl"
                    name="button"
                    type="submit"
                    data-form-field-id="thq_button_r-Xl"
                    className="btn-primary btn btn-sm footer-newsletter-btn"
                  >
                    Join
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <p className="footer-copyright section-content">
                © 2026 GrocerFlow Architecture. All rights reserved.
              </p>
              <div className="footer-legal-links">
                <a href="#">
                  <div className="footer-legal-link">
                    <span>Privacy Policy</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-legal-link">
                    <span>Terms of Service</span>
                  </div>
                </a>
                <a href="#">
                  <div className="footer-legal-link">
                    <span>Sitemap</span>
                  </div>
                </a>
              </div>
              <div className="footer-payment-icons">
                <span className="footer-payment-badge">Mobile Money</span>
                <span className="footer-payment-badge">Cash</span>
                <span className="footer-payment-badge">Card</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-container2">
        <div className="footer-container3">
          <Script
            html={`<script defer data-name="footer-newsletter">
(function(){
  const newsletterForm = document.querySelector(".footer-newsletter-form")

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      // Form submission is handled natively by the action attribute.
      // We can add a simple visual feedback class here if needed.
      const btn = newsletterForm.querySelector("button")
      const originalText = btn.textContent

      // Temporary UX feedback
      btn.textContent = "..."
      btn.disabled = true

      setTimeout(() => {
        btn.textContent = "Subscribed!"
        btn.classList.add("btn-accent")
        btn.classList.remove("btn-primary")
        newsletterForm.reset()

        setTimeout(() => {
          btn.textContent = originalText
          btn.classList.remove("btn-accent")
          btn.classList.add("btn-primary")
          btn.disabled = false
        }, 3000)
      }, 1000)
    })
  }
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Footer
