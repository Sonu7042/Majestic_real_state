import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { fetchPublicProperties, fetchPublicPropertyById, fallbackPropertyImage } from '../services/propertyService';



const fallbackImage = fallbackPropertyImage;

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [mainImage, setMainImage] = useState(fallbackImage);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState('');
  const form = React.useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_dd8gt2f',
        'template_fld37mu',
        form.current,
        'WaMt-T544Nf-Uv_ua'
      )
      .then(
        () => {
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert('Failed to send message.');
        }
      );
  };

  useEffect(() => {
    let isMounted = true;

    const loadProperty = async () => {
      setLoading(true);
      setLoadError('');

      try {
        const allProperties = await fetchPublicProperties();
        const selectedProperty = id ? await fetchPublicPropertyById(id) : allProperties[0];

        if (!selectedProperty) {
          throw new Error('Property not found');
        }

        const relatedProperties = allProperties
          .filter((project) => project.id !== selectedProperty.id)
          .slice(0, 3);

        if (isMounted) {
          setProperty({
            ...selectedProperty,
            relatedProperties,
          });
        }
      } catch (error) {
        if (isMounted) {
          setProperty(null);
          setLoadError(error.message || 'Unable to load property details.');
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadProperty();

    return () => {
      isMounted = false;
    };
  }, [id]);

  useEffect(() => {
    if (property?.images?.length) {
      setMainImage(property.images[0]);
    }
  }, [property]);

  useEffect(() => {
    document.body.classList.add('property-detail-page');
    window.scrollTo(0, 0);
    return () => {
      document.body.classList.remove('property-detail-page');
    };
  }, []);

  if (loading) {
    return (
      <section className="bg-white py-5 mt-5">
        <div className="container py-5 text-center text-muted">
          Loading property details...
        </div>
      </section>
    );
  }

  if (!property) {
    return (
      <section className="bg-white py-5 mt-5">
        <div className="container py-5 text-center">
          <h1 className="h4 fw-bold">Property not found</h1>
          {loadError && <p className="text-muted mb-0">{loadError}</p>}
          <Link to="/properties" className="btn btn-gold mt-3">View Properties</Link>
        </div>
      </section>
    );
  }

  return (
    <>
      <style>
        {`
          body.property-detail-page .navbar {
              background: #080E1A !important;
              padding: 10px 0;
              box-shadow: 0 4px 20px rgba(0,0,0,0.1);
              border-bottom: none;
          }
          body.property-detail-page .nav-link { color: #ffffff !important; }
          body.property-detail-page .navbar-toggler {
              background: transparent !important;
              border-color: rgba(255, 255, 255, 0.25) !important;
          }
          body.property-detail-page .navbar-toggler .fa-bars { color: #ffffff !important; }
          body.property-detail-page .navbar-brand img { filter: none !important; }

          .property-detail-nb .nb-card {
              background: #ffffff;
              border: 1px solid rgba(0,0,0,0.06);
              border-radius: 14px;
              box-shadow: 0 10px 30px rgba(0,0,0,0.04);
          }
          .property-detail-nb .nb-card-header {
              padding: 16px 18px;
              border-bottom: 1px solid rgba(0,0,0,0.06);
          }
          .property-detail-nb .nb-card-body {
              padding: 18px;
          }
          .property-detail-nb .nb-section-title {
              font-size: 1.05rem;
              font-weight: 800;
              margin: 0;
          }
          .property-detail-nb .nb-subtitle {
              color: #6b7280;
              font-size: .92rem;
              margin: 4px 0 0;
          }

          .property-detail-nb .nb-gallery-main {
              width: 100%;
              height: 360px;
              border-radius: 12px;
              object-fit: cover;
              display: block;
          }
          .property-detail-nb .nb-thumb-grid {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 10px;
          }
          .property-detail-nb .nb-thumb {
              position: relative;
              border-radius: 12px;
              overflow: hidden;
              border: 1px solid rgba(0,0,0,0.06);
              background: #f3f4f6;
              cursor: pointer;
              padding: 0;
          }
          .property-detail-nb .nb-thumb img {
              width: 100%;
              height: 86px;
              object-fit: cover;
              display: block;
          }
          .property-detail-nb .nb-thumb.active {
              outline: 2px solid var(--primary-gold);
              outline-offset: 1px;
          }

          .property-detail-nb .nb-spec-grid {
              display: grid;
              grid-template-columns: repeat(2, minmax(0, 1fr));
              gap: 12px;
          }
          .property-detail-nb .nb-spec {
              border: 1px solid rgba(0,0,0,0.06);
              border-radius: 12px;
              padding: 12px;
              background: #fff;
          }
          .property-detail-nb .nb-spec-label {
              font-size: .78rem;
              color: #6b7280;
              font-weight: 700;
          }
          .property-detail-nb .nb-spec-value {
              font-size: .98rem;
              font-weight: 800;
              color: #111827;
              margin-top: 2px;
          }

          .property-detail-nb .insight-enquiry-form .form-control::placeholder { color: rgba(255,255,255,0.65); opacity: 1; }
          .property-detail-nb .insight-enquiry-form .form-control { font-size: 0.9rem; padding: 8px 12px; min-height: 40px; }
          .property-detail-nb .insight-enquiry-form textarea.form-control { min-height: 50px; padding-top: 10px; padding-bottom: 10px; }
          .property-detail-nb .insight-enquiry-form .btn { padding: 10px 14px; font-size: 0.9rem; line-height: 1.1; }

          @media (max-width: 991.98px) {
              .property-detail-nb .nb-gallery-main { height: 260px; }
          }
          
          /* Related properties */
          .property-card-lg {
              background: #fff;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 4px 15px rgba(0,0,0,0.05);
              transition: transform 0.3s ease;
          }
          .property-card-lg:hover {
              transform: translateY(-5px);
          }
          .property-card-lg .property-img-box {
              position: relative;
              height: 200px;
          }
          .property-card-lg .property-img-box img {
              width: 100%;
              height: 100%;
              object-fit: cover;
          }
          .property-card-lg .status-badge {
              position: absolute;
              top: 15px;
              left: 15px;
              background: rgba(0,0,0,0.8);
              color: #fff;
              padding: 4px 12px;
              border-radius: 4px;
              font-size: 0.8rem;
              font-weight: 600;
          }
          .property-card-lg .property-content {
              padding: 20px;
          }
          .property-card-lg .property-title {
              font-size: 1.1rem;
              font-weight: 700;
              margin-bottom: 10px;
          }
          .property-card-lg .property-title a {
              color: #111827;
              text-decoration: none;
          }
          .property-card-lg .property-title a:hover {
              color: var(--primary-gold);
          }
          .property-card-lg .property-meta {
              color: #6b7280;
              font-size: 0.9rem;
          }
          .property-card-lg .property-price {
              font-weight: 700;
              color: #111827;
          }
        `}
      </style>

      <section className="property-detail-nb bg-white py-5 mt-5">
        <div className="container-fluid px-3 px-lg-5">
          <div className="row mb-4">
            <div className="col-12">
              <div className="nb-card">
                <div className="nb-card-body">
                  <div className="row g-3 align-items-start">
                    <div className="col-lg-9">
                      <img
                        id="nbMainImage"
                        src={mainImage}
                        className="nb-gallery-main"
                        alt={property.title}
                      />
                    </div>
                    <div className="col-lg-3">
                      <div className="nb-thumb-grid" id="nbThumbGrid">
                        {property.images.map((img, index) => (
                          <button
                            key={index}
                            type="button"
                            className={`nb-thumb ${mainImage === img ? 'active' : ''}`}
                            onClick={() => setMainImage(img)}
                            aria-label={`Photo ${index + 1}`}
                          >
                            <img src={img} alt={`Thumb ${index + 1}`} />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row g-4">
            <div className="col-lg-8">
              <div className="nb-card mb-4">
                <div className="nb-card-body">
                  <div className="d-flex flex-wrap align-items-start justify-content-between gap-3">
                    <div>
                      <div className="d-flex flex-wrap gap-2 mb-2">
                        <span className="badge bg-dark">{property.category}</span>
                        <span className="badge bg-light text-dark border">{property.location}</span>
                      </div>
                      <h1 className="h4 fw-bold mb-1">{property.title}</h1>
                    </div>
                    <div className="text-end">
                      <div className="fw-bold" style={{ fontSize: "1.4rem" }}>
                        {property.price}
                      </div>
                      <div className="text-muted small">
                        {property.priceSubtext}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="nb-card mb-4">
                <div className="nb-card-header">
                  <h2 className="nb-section-title">Property Overview</h2>
                  <div className="nb-subtitle">Key facts about this listing</div>
                </div>
                <div className="nb-card-body">
                  <div className="nb-spec-grid">
                    <div className="nb-spec">
                      <div className="nb-spec-label">Location</div>
                      <div className="nb-spec-value">{property.location}</div>
                    </div>
                    <div className="nb-spec">
                      <div className="nb-spec-label">Category</div>
                      <div className="nb-spec-value">{property.category}</div>
                    </div>
                    <div className="nb-spec">
                      <div className="nb-spec-label">Area</div>
                      <div className="nb-spec-value">{property.area}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="nb-card mb-4">
                <div className="nb-card-header">
                  <h2 className="nb-section-title">Property Description</h2>
                  <div className="nb-subtitle">About the project</div>
                </div>
                <div className="nb-card-body">
                  <div className="text-muted" style={{ lineHeight: "1.9", whiteSpace: "pre-wrap" }}>
                    {property.description}
                  </div>
                </div>
              </div>

              <div className="nb-card mb-4">
                <div className="nb-card-header">
                  <h2 className="nb-section-title">About Developer</h2>
                  <div className="nb-subtitle">Developer and compliance information</div>
                </div>
                <div className="nb-card-body">
                  <div className="developer-box">
                    <div className="developer-meta">
                      <div className="d-flex flex-wrap align-items-center gap-2 mb-2">
                        <h3 className="h5 fw-bold mb-0">{property.developer}</h3>
                      </div>
                      <p className="text-muted mb-0" style={{ lineHeight: "1.9" }}>
                        {property.developerDescription}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {property.experts && property.experts.length > 0 && (
                <div className="nb-card mb-4">
                  <div className="nb-card-header">
                    <h2 className="nb-section-title">Top Experts</h2>
                    <div className="nb-subtitle">Talk to our property specialists</div>
                  </div>
                  <div className="nb-card-body">
                    <div className="row g-3">
                      {property.experts.map((expert, idx) => (
                        <div className="col-md-4" key={idx}>
                          <div className="border rounded-3 p-3 h-100">
                            <div className="d-flex gap-3 align-items-center">
                              <div className="flex-shrink-0" style={{ width: "56px", height: "56px" }}>
                                {expert.image ? (
                                  <img
                                    src={expert.image}
                                    alt={expert.name}
                                    className="img-fluid rounded-circle"
                                    style={{ width: "56px", height: "56px", objectFit: "cover" }}
                                  />
                                ) : (
                                  <div
                                    className="rounded-circle bg-light d-flex align-items-center justify-content-center fw-bold"
                                    style={{ width: "56px", height: "56px" }}
                                  >
                                    {expert.name.charAt(4)}
                                  </div>
                                )}
                              </div>
                              <div className="flex-grow-1">
                                <div className="fw-bold">{expert.name}</div>
                                <div className="text-muted small">{expert.designation}</div>
                              </div>
                            </div>
                            <div className="d-flex gap-2 mt-3">
                              <a className="btn btn-outline-gold btn-sm flex-grow-1" href={`tel:${expert.phone}`}>Call</a>
                              <a className="btn btn-outline-dark btn-sm flex-grow-1" href={`mailto:${expert.email}`}>Email</a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {property.relatedProperties && property.relatedProperties.length > 0 && (
                <div className="py-2">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                      <h2 className="mb-2">Related Properties  </h2>
                      <div className="separator" style={{ width: "80px", height: "3px", background: "var(--primary-gold)" }}></div>
                    </div>
                    <Link to="/properties" className="btn btn-outline-gold btn-sm">View All</Link>
                  </div>
                  <div className="row g-4">
                    {property.relatedProperties.map((related, idx) => (
                      <div className="col-lg-4 col-md-6" data-aos="fade-up" key={idx}>
                        <div className="property-card-lg">
                          <div className="property-img-box">
                            <span className="status-badge">{related.category}</span>
                            <img src={related.image} alt={related.title} />
                          </div>
                          <div className="property-content">
                            <h5 className="property-title">
                              <Link to={`/property-detail/${related.id}`}>{related.title}</Link>
                            </h5>
                            <div className="property-meta">
                              <i className="fas fa-map-marker-alt me-1"></i> {related.location}
                            </div>
                            <div className="d-flex justify-content-between align-items-center mt-3 property-related-actions">
                              <span className="property-price">{related.price}</span>
                              <Link to={`/property-detail/${related.id}`} className="btn btn-xs btn-outline-gold">View</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="col-lg-4">
              <div className="property-sidebar-sticky position-sticky" style={{ top: "100px" }}>
                <div className="property-enquiry-card mb-4 p-4 border rounded-3 bg-white shadow-sm">
                  <div className="d-flex flex-wrap gap-2 mb-3">
                    <span className="badge bg-dark">{property.category}</span>
                    <span className="badge bg-light text-dark border">{property.location}</span>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div className="fw-bold" style={{ fontSize: "1.5rem" }}>
                      {property.price}
                    </div>
                  </div>
                  <div className="text-muted mb-3">
                    {property.priceSubtext}
                  </div>
                  <div className="d-grid gap-2">
                    <a href="tel:+919560314071" className="btn btn-outline-gold fw-bold">
                      Call Now
                    </a>
                    <a href="mailto:ashish@majesticlandbase.com" className="btn btn-outline-dark fw-bold">
                      Email
                    </a>
                  </div>
                </div>

                <div className="property-enquiry-card bg-dark text-white insight-enquiry-form p-4 rounded-3 shadow-sm">
                  <h3 className="h5 fw-bold mb-2 text-gold">Quick Enquiry</h3>
                  <div className="text-white-50 mb-3">
                    Get details, pricing, and site visit assistance.
                  </div>
                  <form ref={form} onSubmit={sendEmail}>
                    <input type="hidden" name="to_name" value="Majestic Landbase" />
                    <input type="hidden" name="to_email" value="ashish@majesticlandbase.com" />
                    <input type="hidden" name="enquiry_type" value={`Property Details Enquiry - ${property.title}`} />

                    <div className="mb-3">
                      <input
                        type="text"
                        name="from_name"
                        className="form-control bg-transparent text-white border-secondary"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="tel"
                        name="from_number"
                        className="form-control bg-transparent text-white border-secondary"
                        placeholder="Phone Number"
                        inputMode="numeric"
                        pattern="[0-9]{10}"
                        minLength="10"
                        maxLength="10"
                        title="Please enter a 10 digit mobile number"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="email"
                        name="from_email"
                        className="form-control bg-transparent text-white border-secondary"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <textarea
                        name="from_message"
                        className="form-control bg-transparent text-white border-secondary"
                        rows="3"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>
                    <div className="d-grid">
                      <button type="submit" className="btn btn-gold fw-bold">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertyDetails;


