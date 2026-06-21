import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
// import defaultLogo from ';
import defaultLogo from '../../assets/MAJESTICLOGOPNG.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    if (!isMobileMenuOpen) {
      document.body.classList.add('mobile-nav-open')
    } else {
      document.body.classList.remove('mobile-nav-open')
    }
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    document.body.classList.remove('mobile-nav-open')
  }

  return (
    <>
      <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <Link className="navbar-brand py-0" to="/" onClick={closeMobileMenu}>
            {/* <img
            className='scale-75'
              src={defaultLogo}
              alt="majestic landbase Infraventure"
              style={{
                height: '80px',
                width: '130px',
                objectFit: 'contain',
                filter: isScrolled ? 'none' : 'drop-shadow(0px 2px 4px rgba(0,0,0,0.3))',
                transition: 'all 0.3s ease'
              }}
            /> */}
            {/* <img
              className="scale-75 transition-all duration-300"
              src={defaultLogo}
              alt="Majestic Landbase Infraventure"
              style={{
                height: "80px",
                width: "130px",
                objectFit: "contain",
                filter: isScrolled
                  ? "none"
                  : "drop-shadow(0px 2px 4px rgba(0,0,0,0.3))",
              }}
            /> */} <img
              src={defaultLogo}
              alt="Majestic Landbase Infraventure"
              style={{
                height: "65px",
                width: "auto",
                objectFit: "contain",
                transform: "scale(1.5)",
                transition: "all 0.3s ease",
                filter: isScrolled
                  ? "none"
                  : "drop-shadow(0px 2px 4px rgba(0,0,0,0.3))",
              }}
            />
          </Link>
          <button
            className="navbar-toggler mobile-nav-toggle"
            type="button"
            onClick={toggleMobileMenu}
            aria-label="Open menu"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`} id="navbarNav">
            <div className="mobile-nav-head d-lg-none">
              <div className="mobile-nav-brand">
                <img src={defaultLogo} alt="majestic landbase Infra" />
                <div className="mobile-nav-brand-text">
                  <div className="mobile-nav-brand-title">Majestic Landbase</div>
                  <div className="mobile-nav-brand-subtitle">Premium Real Estate Consultants</div>
                </div>
              </div>
              <button type="button" className="mobile-nav-close" onClick={closeMobileMenu} aria-label="Close menu">
                <i className="fas fa-xmark"></i>
              </button>
            </div>
            <ul className="navbar-nav align-items-center mx-auto">
              <li className="nav-item">
                <Link className={`nav-link ${isScrolled ? 'link-black' : ''}`} to="/" onClick={closeMobileMenu}>Home</Link>
              </li>

              <li className="nav-item">
                <Link className={`nav-link ${isScrolled ? 'link-black' : ''}`} to="/about" onClick={closeMobileMenu}>
                  About
                </Link>
                {/* <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="aboutDropdown">
                  <li><Link className="dropdown-item" to="/our-story.html" onClick={closeMobileMenu}>Our Story & Journey</Link></li>
                  <li><Link className="dropdown-item" to="/leadership.html" onClick={closeMobileMenu}>Leadership</Link></li>
                  <li><Link className="dropdown-item" to="/social-commitment.html" onClick={closeMobileMenu}>Social Commitment (CSR)</Link></li>
                  <li className="dropend">
                    <a className="dropdown-item dropdown-toggle" href="#" data-bs-toggle="dropdown">Our Management</a>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="/sales-expert.html" onClick={closeMobileMenu}>Sales Portfolio management</Link></li>
                      <li><Link className="dropdown-item" to="/lease-expert.html" onClick={closeMobileMenu}>Leasing Portfolio management</Link></li>
                      <li><Link className="dropdown-item" to="/crm-accounts.html" onClick={closeMobileMenu}>CRM & Marketing</Link></li>
                    </ul>
                  </li>
                </ul> */}
              </li>

              <li className="nav-item">
                <Link className={`nav-link ${isScrolled ? 'link-black' : ''}`} to="/services" onClick={closeMobileMenu}>
                  Services
                </Link>
              </li>

             

              <li className="nav-item dropdown">
                <a className={`nav-link dropdown-toggle ${isScrolled ? 'link-black' : ''}`} href="#" id="propertiesDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Properties
                </a>
                <ul className="dropdown-menu dropdown-menu-end premium-dropdown" aria-labelledby="propertiesDropdown">
                  <li><Link className="dropdown-item" to="/properties" onClick={closeMobileMenu}>All Properties</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/properties?category=1" onClick={closeMobileMenu}>Commercial</Link></li>
                  <li><Link className="dropdown-item" to="/properties?category=4" onClick={closeMobileMenu}>Industrial Plots</Link></li>
                  <li><Link className="dropdown-item" to="/properties?category=2" onClick={closeMobileMenu}>Residential</Link></li>
                  <li><Link className="dropdown-item" to="/properties?category=3" onClick={closeMobileMenu}>SCO Plots</Link></li>
                </ul>
              </li>


                 <li className="nav-item">
                <Link className={`nav-link ${isScrolled ? 'link-black' : ''}`} to="/blogs" onClick={closeMobileMenu}>
                  Blogs
                </Link>
              </li>
              {/* <li className="nav-item dropdown">
                <a className={`nav-link dropdown-toggle ${isScrolled ? 'link-black' : ''}`} href="#" id="insightsDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Media & Insights
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="insightsDropdown">
                  <li><Link className="dropdown-item" to="/pr-media.html" onClick={closeMobileMenu}>Media & Press</Link></li>
                  <li><Link className="dropdown-item" to="/insight-blog.html" onClick={closeMobileMenu}>Insights & Blogs</Link></li>
                  <li><Link className="dropdown-item" to="/news-update.html" onClick={closeMobileMenu}>News & Updates</Link></li>
                  <li><Link className="dropdown-item" to="/life-at-elite.html" onClick={closeMobileMenu}>Life at majestic landbase Infra</Link></li>
                  <li><Link className="dropdown-item" to="/awards.html" onClick={closeMobileMenu}>Awards & Recognitions</Link></li>
                </ul>
              </li> */}

              {/* <li className="nav-item">
                <Link className={`nav-link ${isScrolled ? 'link-black' : ''}`} to="/nri-corner.html" onClick={closeMobileMenu}>NRI Corner</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${isScrolled ? 'link-black' : ''}`} to="/career.html" onClick={closeMobileMenu}>Careers</Link>
              </li> */}
            </ul>
            <div className="ms-lg-3 mt-3 mt-lg-0 text-center text-lg-start">
              <Link to="/contact.html" className="btn btn-gold btn-sm px-3 py-1.1" onClick={closeMobileMenu}>Contact Us</Link>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`mobile-nav-backdrop d-lg-none ${isMobileMenuOpen ? 'show' : ''}`}
        onClick={closeMobileMenu}
        style={{ display: isMobileMenuOpen ? 'block' : 'none' }}
      ></div>
    </>
  )
}

export default Navbar