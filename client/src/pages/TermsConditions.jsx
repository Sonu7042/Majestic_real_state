import React from "react";
import { Link } from "react-router-dom";

const TermsConditions = () => {
  return (
    <div className="privacy-policy-page">
      <header className="privacy-policy-hero d-flex flex-column justify-content-center align-items-center">
        <div className="container text-center text-white" data-aos="fade-up">
          <h1 className="display-4 fw-bold mb-3 text-uppercase">
            Terms & Conditions
          </h1>

          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <Link
                  to="/"
                  className="text-white text-decoration-none hover-gold"
                >
                  Home
                </Link>
              </li>
              <li
                className="breadcrumb-item active text-gold"
                aria-current="page"
              >
                Terms & Conditions
              </li>
            </ol>
          </nav>
        </div>
      </header>

      <section className="privacy-policy-section">
        <div className="container">
          <article className="privacy-policy-card">
            <p>
              These Terms & Conditions govern your use of the Majestic Landbase
              website and services. By using this website, you agree to these
              terms.
            </p>

            <h2>Use of Website</h2>
            <ul>
              <li>You agree to use the website for lawful purposes only.</li>
              <li>
                You must not attempt to disrupt or compromise website security.
              </li>
              <li>
                Content is provided for informational purposes and may change
                without notice.
              </li>
            </ul>

            <h2>Property Information</h2>
            <p>
              Project details, pricing, availability, and specifications
              displayed on the website may be subject to change by developers or
              third parties. Please verify details with our team before making
              decisions.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All website content, branding, and assets are owned by Majestic
              Landbase or used with permission. You may not copy, reproduce, or
              redistribute content without written consent.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              We are not liable for any direct or indirect damages arising from
              your use of the website, including reliance on information
              presented, interruptions, or errors.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              The website may contain links to third-party sites. We are not
              responsible for their content or privacy practices.
            </p>

            <h2>Contact</h2>
            <p>
              For questions regarding these terms, please reach out via the{" "}
              <Link to="/contact" className="privacy-policy-link">
                Contact
              </Link>{" "}
              page.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;
