import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/MAJESTICLOGOPNG.png'

const Footer = () => {
  const privacyPolicyPdf = `${import.meta.env.BASE_URL}privacy-policy.pdf`
  const termsConditionsPdf = `${import.meta.env.BASE_URL}terms-conditions.pdf`

  return (
    <>
      {/* Premium Footer Links Section */}


      {/* Main Footer Section */}
      <footer className="position-relative pt-5 pb-0 text-white overflow-hidden" style={{ background: 'linear-gradient(135deg, var(--espresso-dark) 0%, var(--deep-espresso) 100%)' }}>
        {/* Decorative Elements */}
        <div className="position-absolute top-0 start-0 w-100" style={{ height: '2px', background: 'linear-gradient(90deg, transparent, var(--rich-earth-brown), transparent)' }}></div>

        <div className="container position-relative z-1 py-5">
          <div className="row gy-5 justify-content-between">
            {/* Brand Column */}
            <div className="col-lg-4 col-md-12">
              <div className="mb-4">
                <img src={logo} alt="majestic landbase" height="120" className="mb-4 p-2 rounded-2" style={{ opacity: 0.9 }} />
                <p className="text-white mb-4" style={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
                  Majestic Landbase represents the pinnacle of luxury real estate. We blend deep market intelligence with a curated selection of premier properties to deliver an unmatched service experience.
                </p>
                <div className="d-flex gap-2">
                  <a href="https://www.facebook.com/share/1B381q2rEr/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center border-secondary text-white hover-gold" style={{ width: '40px', height: '40px', transition: 'all 0.3s' }}>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.instagram.com/majesticlandbase" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center border-secondary text-white hover-gold" style={{ width: '40px', height: '40px', transition: 'all 0.3s' }}>
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="https://www.linkedin.com/company/majestic-landbase1/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center border-secondary text-white hover-gold" style={{ width: '40px', height: '40px', transition: 'all 0.3s' }}>
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  {/* <a href="#" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center border-secondary text-white hover-gold" style={{ width: '40px', height: '40px', transition: 'all 0.3s' }}>
                    <i className="fab fa-youtube"></i>
                  </a> */}
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-4 col-6">
              <h6 className="text-white text-uppercase fw-bold mb-4 letter-spacing-2" style={{ fontSize: '0.85rem', letterSpacing: '2px' }}>Quick Links</h6>
              <ul className="list-unstyled d-flex flex-column gap-3">
                <li><Link to="/" className="text-white text-decoration-none hover-white transition-all">Home</Link></li>
                <li><Link to="/about" className="text-white text-decoration-none hover-white transition-all">About</Link></li>
                <li><Link to="/services" className="text-white text-decoration-none hover-white transition-all">Services</Link></li>
                <li><Link to="/properties" className="text-white text-decoration-none hover-white transition-all">Properties</Link></li>
                <li><Link to="/blogs" className="text-white text-decoration-none hover-white transition-all">Blogs</Link></li>
                <li><Link to="/contact.html" className="text-white text-decoration-none hover-white transition-all">Contact</Link></li>
              </ul>
            </div>

            {/* Property Links */}
            <div className="col-lg-2 col-md-4 col-6">
              <h6 className="text-white text-uppercase fw-bold mb-4 letter-spacing-2" style={{ fontSize: '0.85rem', letterSpacing: '2px' }}>Properties</h6>
              <ul className="list-unstyled d-flex flex-column gap-3">
                <li><Link to="/properties" className="text-white text-decoration-none hover-white transition-all">All Properties</Link></li>
                <li><Link to="/properties?category=1" className="text-white text-decoration-none hover-white transition-all">Commercial</Link></li>
                <li><Link to="/properties?category=4" className="text-white text-decoration-none hover-white transition-all">Industrial Plots</Link></li>
                <li><Link to="/properties?category=2" className="text-white text-decoration-none hover-white transition-all">Residential</Link></li>
                <li><Link to="/properties?category=3" className="text-white text-decoration-none hover-white transition-all">SCO Plots</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-lg-3 col-md-4">
              <h6 className="text-white text-uppercase fw-bold mb-4 letter-spacing-2" style={{ fontSize: '0.85rem', letterSpacing: '2px' }}>Get in Touch</h6>
              <ul className="list-unstyled d-flex flex-column gap-4">
                <li className="d-flex">
                  <a href="https://maps.app.goo.gl/Urz5goXdpGSANVGi6" className="text-decoration-none footer-link" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-map-marker-alt text-gold mt-1 me-3"></i>
                    <span className="text-white" style={{ fontSize: '0.9rem' }}>Tulip Lemon, Sector 69, Gurgaon</span>
                  </a>
                </li>
                <li className="d-flex align-items-center">
                  <a href="tel:+919560314071" className="text-decoration-none footer-link">
                    <i className="fas fa-phone text-gold me-3"></i>
                    <span className="text-white" style={{ fontSize: '0.9rem' }}>+91 95603 14071</span>
                  </a>
                </li>
                <li className="d-flex align-items-center">
                  <a href="mailto:ashish@majesticlandbase.com" className="text-decoration-none footer-link">
                    <i className="fas fa-envelope text-gold me-3"></i>
                    <span className="text-white" style={{ fontSize: '0.9rem' }}>ashish@majesticlandbase.com</span>
                  </a>
                </li>
                {/* <li className="d-flex align-items-center">
                  <Link to="/" className="text-decoration-none footer-link">
                    <i className="fas fa-globe text-gold me-3"></i>
                    <span className="text-white" style={{ fontSize: '0.9rem' }}>www.majesticlandbase.com</span>
                  </Link>
                </li> */}
              </ul>

              <div className="mt-4 pt-2 footer-newsletter">
                <div className="input-group">
                  <input type="email" className="form-control bg-dark border-secondary text-white shadow-none" placeholder="Your Email" style={{ fontSize: '0.9rem' }} />
                  <button className="btn btn-gold text-dark fw-bold px-3" type="button"><i className="fas fa-arrow-right"></i></button>
                </div>
                <small className="text-white mt-2 d-block fst-italic">Subscribe for exclusive updates.</small>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-top border-secondary border-opacity-10 py-4 position-relative z-1 footer-copyright" style={{ background: '#130E0A' }}>
          <div className="container">
            <div className="row align-items-center gy-3">
              <div className="col-md-6 text-center text-md-start">
                <p className="mb-0 text-white small">&copy; 2026 Majestic Landbase. All Rights Reserved.</p>
              </div>
              <div className="col-md-6 text-center text-md-end">
                <ul className="list-inline mb-0">
                  <li className="list-inline-item me-4">
                    <Link to="/privacy-policy" className="text-white text-decoration-none small hover-white">Privacy Policy</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/terms-conditions" className="text-white text-decoration-none small hover-white">Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
