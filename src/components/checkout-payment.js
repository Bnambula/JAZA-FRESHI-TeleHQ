import React from 'react'

import Script from 'dangerous-html/react'

import './checkout-payment.css'

const CheckoutPayment = (props) => {
  return (
    <div className="checkout-payment-container1">
      <section className="checkout-payment">
        <div className="checkout-payment-container">
          <div className="checkout-payment-grid">
            <div className="checkout-payment-main">
              <h2 className="section-title checkout-payment-title">
                Payment Method
              </h2>
              <div className="checkout-payment-options">
                <label className="mtn-option checkout-payment-card">
                  <input
                    type="radio"
                    name="payment_provider"
                    value="mtn"
                    checked="true"
                    className="checkout-payment-thq-checkout-payment-radio-elm1"
                  />
                  <div className="checkout-payment-thq-checkout-payment-card-content-elm1">
                    <span className="checkout-payment-provider-name">
                      MTN Mobile Money
                    </span>
                    <div className="mtn checkout-payment-badge">
                      <span>MTN</span>
                    </div>
                  </div>
                </label>
                <label className="airtel-option checkout-payment-card">
                  <input
                    type="radio"
                    name="payment_provider"
                    value="airtel"
                    className="checkout-payment-thq-checkout-payment-radio-elm2"
                  />
                  <div className="checkout-payment-thq-checkout-payment-card-content-elm2">
                    <span className="checkout-payment-provider-name">
                      Airtel Money
                    </span>
                    <div className="airtel checkout-payment-badge">
                      <span>Airtel</span>
                    </div>
                  </div>
                </label>
              </div>
              <div className="checkout-payment-form-wrapper">
                <form
                  action="/submit-payment"
                  method="POST"
                  data-form-id="6c4dcf1f-8e1d-4bc1-a1b0-6ed47f37824d"
                  className="checkout-payment-form"
                >
                  <div className="checkout-payment-input-group">
                    <label htmlFor="phone_number" className="section-content">
                      Enter your Mobile Money number registered with MTN or
                      Airtel
                    </label>
                    <div className="checkout-payment-input-container">
                      <span className="checkout-payment-prefix">+256</span>
                      <input
                        type="tel"
                        id="phone_number"
                        name="phone"
                        pattern="[0-9]&#123;9&#125;"
                        required="true"
                        placeholder="7XXXXXXXX"
                        data-form-field-id="phone_number"
                        className="checkout-payment-input"
                      />
                    </div>
                  </div>
                  <div className="checkout-payment-instructions">
                    <div className="checkout-payment-step">
                      <div className="checkout-payment-step-number">
                        <span>1</span>
                      </div>
                      <p className="section-content">
                        Confirm the payment amount shown above
                      </p>
                    </div>
                    <div className="checkout-payment-step">
                      <div className="checkout-payment-step-number">
                        <span>2</span>
                      </div>
                      <p className="section-content">
                        You will receive a prompt on your phone to enter your
                        PIN
                      </p>
                    </div>
                    <div className="checkout-payment-step">
                      <div className="checkout-payment-step-number">
                        <span>3</span>
                      </div>
                      <p className="section-content">
                        Approve the transaction to complete your order
                      </p>
                    </div>
                  </div>
                  <button
                    id="thq_button_nslN"
                    name="button"
                    type="submit"
                    data-form-field-id="thq_button_nslN"
                    className="checkout-payment-submit btn-primary btn btn-lg"
                  >
                    <svg
                      fill="none"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      stroke="currentColor"
                      viewbox="0 0 24 24"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"></path>
                    </svg>
                    <span>
                      {' '}
                      Pay with Mobile Money
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </button>
                </form>
              </div>
              <div className="checkout-payment-trust-footer">
                <p className="checkout-payment-provider-info section-content">
                  Secure payment powered by GrocerFlow Pay
                </p>
                <div className="checkout-payment-trust-badges">
                  <div className="checkout-payment-trust-item">
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
                        x="3"
                        y="11"
                        rx="2"
                        ry="2"
                        width="18"
                        height="11"
                      ></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                    <span>🔒 SSL Secured</span>
                  </div>
                  <div className="checkout-payment-trust-item">
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
                      <path d="M20 6L9 17l-5-5"></path>
                    </svg>
                    <span>✓ Instant Confirmation</span>
                  </div>
                  <div className="checkout-payment-trust-item">
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
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle r="10" cx="12" cy="12"></circle>
                        <path d="M12 16v-4m0-4h.01"></path>
                      </g>
                    </svg>
                    <span>✓ 24/7 Support</span>
                  </div>
                </div>
              </div>
            </div>
            <aside className="checkout-payment-sidebar">
              <div className="checkout-payment-summary-card">
                <h3 className="section-subtitle">Amount to Pay</h3>
                <div className="checkout-payment-summary-details">
                  <div className="checkout-payment-summary-row">
                    <span className="section-content">Subtotal</span>
                    <span className="section-content">USh 145,000</span>
                  </div>
                  <div className="checkout-payment-summary-row">
                    <span className="section-content">Delivery fee</span>
                    <span className="section-content">USh 5,000</span>
                  </div>
                  <div className="checkout-payment-divider"></div>
                  <div className="checkout-payment-summary-row total">
                    <span className="checkout-payment-total-label">
                      Total amount
                    </span>
                    <div className="checkout-payment-total-value">
                      <span className="checkout-payment-currency">UGX</span>
                      <span className="checkout-payment-amount">150,000</span>
                    </div>
                  </div>
                </div>
                <div className="checkout-payment-summary-footer">
                  <div className="checkout-payment-info-box">
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
                      <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      <path d="m9 12l2 2l4-4"></path>
                    </svg>
                    <p className="section-content">
                      Your payment is encrypted and secure.
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <div className="checkout-payment-container2">
        <div className="checkout-payment-container3">
          <Script
            html={`<script defer data-name="checkout-payment-logic">
(function(){
  const paymentOptions = document.querySelectorAll('input[name="payment_provider"]')
  const submitBtn = document.querySelector(".checkout-payment-submit")
  const phoneInput = document.getElementById("phone_number")

  paymentOptions.forEach((option) => {
    option.addEventListener("change", (e) => {
      const provider = e.target.value
      if (provider === "mtn") {
        submitBtn.style.backgroundColor = "#FFCC00"
        submitBtn.style.borderColor = "#FFCC00"
        submitBtn.style.color = "#000000"
      } else if (provider === "airtel") {
        submitBtn.style.backgroundColor = "#FF0000"
        submitBtn.style.borderColor = "#FF0000"
        submitBtn.style.color = "#FFFFFF"
      } else {
        submitBtn.style.backgroundColor = "var(--color-primary)"
        submitBtn.style.borderColor = "var(--color-primary)"
        submitBtn.style.color = "var(--color-on-primary)"
      }
    })
  })

  phoneInput.addEventListener("input", (e) => {
    let value = e.target.value.replace(/\D/g, "")
    if (value.length > 9) value = value.slice(0, 9)
    e.target.value = value
  })

  const paymentForm = document.querySelector(".checkout-payment-form")
  paymentForm.addEventListener("submit", (e) => {
    if (!phoneInput.checkValidity()) {
      e.preventDefault()
      phoneInput.closest(".checkout-payment-input-container").style.borderColor = "#e74c3c"
    } else {
      submitBtn.disabled = true
      submitBtn.textContent = "Processing Payment..."
    }
  })

  phoneInput.addEventListener("focus", () => {
    phoneInput.closest(".checkout-payment-input-container").style.borderColor = "var(--color-primary)"
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPayment
