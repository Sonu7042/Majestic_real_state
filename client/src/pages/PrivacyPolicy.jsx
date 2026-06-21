import React from 'react'
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-page">
      <header className="privacy-policy-hero d-flex flex-column justify-content-center align-items-center">
        <div className="container text-center text-white" data-aos="fade-up">
          <h1 className="display-4 fw-bold mb-3 text-uppercase">Privacy Policy</h1>

          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <Link to="/" className="text-white text-decoration-none hover-gold">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item active text-gold" aria-current="page">
                Privacy Policy
              </li>
            </ol>
          </nav>
        </div>
      </header>

      <section className="privacy-policy-section">
        <div className="container">
       <article className="privacy-policy-card">
  <p>
    This Privacy Policy explains how Majestic Landbase collects, uses, and protects
    information when you use our website and services.
  </p>

  <h2>Information We Collect</h2>
  <ul>
    <li>
      Contact details you submit, including your name, phone number, and email
      address through forms or inquiries.
    </li>
    <li>
      Property preferences, requirements, and information shared with us during
      consultations or inquiries.
    </li>
    <li>
      Basic technical information such as browser type, device information, and
      approximate location collected through analytics tools.
    </li>
  </ul>

  <h2>How We Use Information</h2>
  <ul>
    <li>
      To respond to your inquiries and provide real estate advisory services.
    </li>
    <li>
      To share relevant updates about properties, services, and special offers
      where permitted by law.
    </li>
    <li>
      To improve website functionality, performance, and overall user experience.
    </li>
  </ul>

  <h2>Sharing of Information</h2>
  <p>
    We do not sell your personal information. Information may be shared with
    trusted partners and service providers only when necessary to deliver our
    services, comply with legal obligations, or protect our rights and interests.
  </p>

  <h2>Cookies</h2>
  <p>
    We may use cookies and similar technologies to enhance website functionality,
    analyze website traffic, and improve user experience. You can manage or
    disable cookies through your browser settings.
  </p>

  <h2>Data Security</h2>
  <p>
    We implement reasonable security measures to protect your information from
    unauthorized access, disclosure, or misuse. However, no method of online
    transmission or electronic storage is completely secure, and we cannot
    guarantee absolute security.
  </p>

  <h2>Contact Us</h2>
  <p>
    If you have any questions, concerns, or requests regarding this Privacy
    Policy, please contact us through the details provided on our{" "}
    <Link to="/contact" className="privacy-policy-link">
      Contact
    </Link>{" "}
    page.
  </p>
</article>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicy
