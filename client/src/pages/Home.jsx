import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import PropertyCard from "../components/common/PropertyCard";
import { fetchPublicProperties } from "../services/propertyService";

// Slider Images
// import slide1 from '../assets/images/sliders/1773133806_web p.png'
// import slide2 from '../assets/images/sliders/1771651144_branded .png'
// import mobileSlide1 from '../assets/images/sliders/1776432133_mobile-banner-1.webp'
import mobileSlide1 from "../assets/hero2.jpeg";
import mobileSlide2 from "../assets/hero11.jpeg";
import mobileSlide3 from "../assets/hero3.jpeg";
// import mobileSlide3 from "../assets/images/sliders/1776432161_mobile-banner-3.webp";
// import teamImage from '../assets/images/home/1771490106_team-image.jpg'

import WhyChooseUs from "../components/Home/WhyChooseUs";
import OurExpertise from "../components/Home/OurExpertise";
import StatsSection from "../components/Home/StatsSection";
import GlobalReach from "../components/Home/GlobalReach";
import GlobalOpportunities from "../components/Home/GlobalOpportunities";
import PartnerLogos from "../components/Home/PartnerLogos";
import AwardsRecognition from "../components/Home/AwardsRecognition";
// import NRIServices from "../components/Home/NRIServices";
import FAQSection from "../components/Home/FAQSection";
import GoogleReviews from "../components/Home/GoogleReviews";
import ContactSection from "../components/Home/ContactSection";
import Footer from "../components/common/Footer";
import EnquiryModal from "../components/common/EnquiryModal";
import DynamicGallery from "../components/common/DynamicGallery";

const Home = () => {
  const [signatureProjects, setSignatureProjects] = useState([]);
  const [projectsLoading, setProjectsLoading] = useState(true);
  const [projectsError, setProjectsError] = useState("");
  const [activeCity, setActiveCity] = useState("Gurgaon");
  const [isScrollEnquiryOpen, setIsScrollEnquiryOpen] = useState(false);
  const hasShownScrollEnquiry = useRef(false);

  const closeScrollEnquiry = useCallback(() => {
    setIsScrollEnquiryOpen(false);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    const loadSignatureProjects = async () => {
      try {
        const properties = await fetchPublicProperties();
        setSignatureProjects(properties);
        setProjectsError("");
      } catch (error) {
        setSignatureProjects([]);
        setProjectsError(error.message || "Unable to load signature projects.");
      } finally {
        setProjectsLoading(false);
      }
    };

    loadSignatureProjects();
  }, []);

  useEffect(() => {
    const openEnquiryOnHomeScroll = () => {
      if (hasShownScrollEnquiry.current || isScrollEnquiryOpen) return;

      const homeSection = document.getElementById("home");
      const triggerPoint = homeSection
        ? Math.min(homeSection.offsetHeight * 0.35, 260)
        : 160;

      if (window.scrollY >= triggerPoint) {
        hasShownScrollEnquiry.current = true;
        setIsScrollEnquiryOpen(true);
      }
    };

    window.addEventListener("scroll", openEnquiryOnHomeScroll, { passive: true });
    openEnquiryOnHomeScroll();

    return () => {
      window.removeEventListener("scroll", openEnquiryOnHomeScroll);
    };
  }, [isScrollEnquiryOpen]);

  return (
    <div className="home-page">
      {/* Hero Carousel */}
      <header id="home" className="hero-carousel p-0">
        <div className="d-none d-md-block">
          <div
            id="heroCarouselDesktop"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#heroCarouselDesktop"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#heroCarouselDesktop"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#heroCarouselDesktop"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" style={{ height: "90vh" }}>
                <img
                  // src="https://i.redd.it/fwnspszr9w2z.jpg"
                  src={mobileSlide1}
                  className="d-block w-100 h-100 object-fit-cover"
                  alt="Vision - Transparency - Commitment"
                />
                <div className="carousel-caption d-flex flex-column justify-content-center h-100 text-start start-0 end-0 w-100 ">
                  <div className="container" data-aos="zoom-in">
                    <div className="glass-caption">
                      <h5 className="text-gold text-uppercase letter-spacing-2 mb-3">
                        Welcome to Majestic Landbase
                      </h5>
                      <h1
                        className="fw-bold text-white mb-3"
                        style={{ fontSize: "30px" }}
                      >
                        Vision - Transparency - Commitment
                      </h1>
                      <p className="lead text-white mb-0 w-75 d-none d-md-block">
                        From iconic residences to high-value commercial spaces,{" "}
                        <br />
                        we connect you with properties that elevate lifestyle and
                        investment potential.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item" style={{ height: "90vh" }}>
                <img
                  src={mobileSlide2}
                  className="d-block w-100 h-100 object-fit-cover"
                  alt="Premium Real Estate"
                />
                <div className="carousel-caption d-flex flex-column justify-content-center h-100 text-start start-0 end-0 w-100 ">
                  <div className="container" data-aos="zoom-in">
                    <div className="glass-caption">
                      <h1
                        className="fw-bold text-white mb-0"
                        style={{ fontSize: "30px" }}
                      >
                        PREMIUM REAL ESTATE
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item" style={{ height: "90vh" }}>
                <img
                  src={mobileSlide3}
                  className="d-block w-100 h-100 object-fit-cover"
                  alt="Luxury Redefined"
                />
                <div className="carousel-caption d-flex flex-column justify-content-center h-100 text-start start-0 end-0 w-100 ">
                  <div className="container" data-aos="zoom-in">
                    {/* <div className="glass-caption">
                      <h1
                        className="fw-bold text-white mb-0"
                        style={{ fontSize: "30px" }}
                      >
                        LUXURY REDEFINED
                      </h1>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#heroCarouselDesktop"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#heroCarouselDesktop"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="d-block d-md-none">
          <div
            id="heroCarouselMobile"
            className="carousel slide carousel-fade"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#heroCarouselMobile"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#heroCarouselMobile"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#heroCarouselMobile"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" style={{ height: "60vh" }}>
                <img
                  src={mobileSlide1}
                  className="d-block w-100 h-100 object-fit-cover"
                  alt="WELCOME TO MAJESTIC LANDBASE"
                />
                <div className="carousel-caption d-flex flex-column justify-content-center h-100 text-start start-0 end-0 w-100 hero-caption-mobile">
                  <div className="container" data-aos="zoom-in">
                    <div className="glass-caption">
                      <h5 className="text-gold text-uppercase letter-spacing-2 mb-3">
                        Vision - Transparency - Commitment
                      </h5>
                      <h1
                        className="fw-bold text-white mb-3"
                        style={{ fontSize: "22px" }}
                      >
                        WELCOME TO MAJESTIC LANDBASE
                      </h1>
                      <p className="text-white-50 mb-0 hero-desc-mobile">
                        From iconic residences to high-value commercial spaces, we
                        connect you with properties that elevate lifestyle and
                        investment potential.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item" style={{ height: "60vh" }}>
                <img
                  src={mobileSlide2}
                  className="d-block w-100 h-100 object-fit-cover"
                  alt=""
                />
                <div className="carousel-caption d-flex flex-column justify-content-center h-100 text-start start-0 end-0 w-100 hero-caption-mobile">
                  <div className="container" data-aos="zoom-in">
                    <div className="glass-caption">
                      <h1
                        className="fw-bold text-white mb-0"
                        style={{ fontSize: "22px" }}
                      >
                        PREMIUM REAL ESTATE
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item" style={{ height: "60vh" }}>
                <img
                  src={mobileSlide3}
                  className="d-block w-100 h-100 object-fit-cover"
                  alt="Luxury Redefined"
                />
                <div className="carousel-caption d-flex flex-column justify-content-center h-100 text-start start-0 end-0 w-100 hero-caption-mobile">
                  <div className="container" data-aos="zoom-in">
                    <div className="glass-caption">
                      <h1
                        className="fw-bold text-white mb-0"
                        style={{ fontSize: "22px" }}
                      >
                        LUXURY REDEFINED
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#heroCarouselMobile"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#heroCarouselMobile"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section-soft bg-bone-white">
        <div className="container section-frame content-layer">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right">
              <div className="about-image-frame">
                <img
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="About majestic landbase"
                />
              </div>
            </div>
            <div className="col-lg-6 ps-lg-5" data-aos="fade-left">
              <div
                className="section-title text-start"
                style={{ marginBottom: "20px" }}
              >
                <h2>Who We Are</h2>
                <div className="separator ms-0"></div>
              </div>
              <h4 className="mb-2 font-heading" style={{ lineHeight: 1.5 }}>
                Advisory Beyond Property We Build Legacies
              </h4>
              <p className="text-muted mb-2">
                At Majestic Landbase, we believe real estate is more than just
                transactions - it's about building wealth, elevating lifestyles,
                and creating enduring value.
                <br /> <br />

                Established in 2024, we have quickly positioned ourselves as a
                forward-thinking real estate advisory firm, offering a seamless
                platform for residential, commercial, and investment-focused
                solutions. Built on a foundation of a client-first approach and
                data-driven insights, we are dedicated to guiding investors,
                homebuyers, and businesses toward the most profitable and secure
                opportunities in the modern market.
                <br /> <br />
                Our strength lies in delivering curated opportunities, transparent
                processes, and comprehensive support - from discovery and due
                diligence to acquisition and after-sales assistance. At Majestic
                Landbase, we don't just find spaces; we secure your future.
                <br /> <br />
              </p>



              <Link to="/our-story.html" className="btn btn-gold mt-3">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      <DynamicGallery />

      {/*    Section */}
      <section className="bg-putty py-5">
        <div className="container">
          <div className="section-title text-center">
            <h2>Signature Projects</h2>
            <div className="separator mx-auto"></div>
            <p className="text-muted mt-3">
              Discover our handpicked collection of high-value properties across
              prime locations.
            </p>
          </div>

          <div className="d-flex justify-content-center gap-3 mt-4 mb-4 flex-wrap">
            <button
              className={`btn rounded-pill px-4 py-2 fw-semibold ${activeCity === 'Gurgaon' ? 'btn-gold text-white border-0' : 'btn-outline-secondary'}`}
              onClick={() => setActiveCity('Gurgaon')}
            >
              GURGAON
            </button>
            <button
              className={`btn rounded-pill px-4 py-2 fw-semibold ${activeCity === 'Delhi' ? 'btn-gold text-white border-0' : 'btn-outline-secondary'}`}
              onClick={() => setActiveCity('Delhi')}
            >
              DELHI
            </button>
          </div>

          <div className="row g-4 mt-2">
            {projectsLoading && (
              <div className="col-12 text-center text-muted">
                Loading signature projects...
              </div>
            )}

            {!projectsLoading && projectsError && (
              <div className="col-12 text-center text-muted">
                {projectsError}
              </div>
            )}

            {!projectsLoading && !projectsError && signatureProjects.filter(p => p.location?.toLowerCase() === activeCity.toLowerCase()).length === 0 && (
              <div className="col-12 text-center text-muted">
                Signature projects will appear here soon.
              </div>
            )}

            {!projectsLoading &&
              signatureProjects
                .filter(p => p.location?.toLowerCase() === activeCity.toLowerCase())
                .slice(0, 6).map((property) => (
                  <div key={property.id} className="col-lg-4 col-md-6">
                    <PropertyCard property={property} />
                  </div>
                ))}
          </div>

          <div className="text-center mt-5">
            <Link to="/properties" className="btn btn-outline-gold">
              Explore All Properties
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Premium Cards */}
      <StatsSection />
      <WhyChooseUs />

      {/* Services / Expertise Section */}
      {/* <OurExpertise /> */}

      {/* Statistics Section */}

      {/* Global Reach Section */}
      {/* <GlobalReach /> */}

      {/* Global Opportunities Section */}
      <GlobalOpportunities />

      {/* Partner Logos Marquee */}
      <PartnerLogos />

      {/* Awards & Recognition */}
      {/* <AwardsRecognition /> */}

      {/* NRI Investment Services */}
      {/* <NRIServices /> */}

      {/* FAQ Section */}
      <FAQSection />

      {/* Google Reviews */}
      <GoogleReviews />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer Section */}
      {/* <Footer /> */}
      <EnquiryModal
        isOpen={isScrollEnquiryOpen}
        onClose={closeScrollEnquiry}
        variant="compact"
      />
    </div>
  );
};

export default Home;
