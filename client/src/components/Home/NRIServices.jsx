import React from 'react';

const NRIServices = () => {
    const features = [
        {
            icon: "fas fa-search-location",
            title: "Curated Properties",
            description: "Access to pre-approved, high-yield residential and commercial assets."
        },
        {
            icon: "fas fa-file-contract",
            title: "Legal Peace of Mind",
            description: "Comprehensive due diligence and documentation support."
        },
        {
            icon: "fas fa-university",
            title: "Financial Assistance",
            description: "Seamless home loan facilitation and banking coordination."
        },
        {
            icon: "fas fa-key",
            title: "End-to-End Management",
            description: "From possession to rental management and resale services."
        }
    ];

    return (
        <section id="nri" className="nri-section section-soft position-relative overflow-hidden bg-light">
            <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10"
                style={{ backgroundImage: 'radial-gradient(var(--rich-earth-brown) 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

            <div className="container position-relative z-1">
                <div className="row align-items-center g-5">
                    <div className="col-lg-6 order-lg-1" data-aos="fade-right">
                        <div className="nri-content pe-lg-4">
                            <div className="section-title text-start mb-4">
                                <span className="text-gold text-uppercase fw-bold letter-spacing-2 small">Global Citizens</span>
                                <h2 className="display-5 fw-bold mb-3 text-dark">NRI Investment Services</h2>
                                <div className="separator ms-0" style={{ width: '80px', height: '4px', background: 'var(--primary-gold)' }}></div>
                            </div>
                            <p className="lead text-muted mb-4">
                                Seamless real estate investment solutions designed exclusively for Non-Resident Indians seeking to build wealth in India.
                            </p>

                            <div className="nri-features">
                                <div className="row g-3">
                                    {features.map((feature, index) => (
                                        <div className="col-sm-6" key={index}>
                                            <div className="card h-100 border-0 shadow-sm p-4 nri-card rounded-4">
                                                <div className="icon-box-premium">
                                                    <i className={feature.icon}></i>
                                                </div>
                                                <h5 className="fw-bold text-dark mb-2">{feature.title}</h5>
                                                <p className="text-muted small mb-0">{feature.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <a href="/contact" className="btn btn-gold btn-lg mt-4 shadow-sm rounded-pill px-5">
                                Schedule a Consultation <i className="fas fa-arrow-right ms-2"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 order-lg-2" data-aos="fade-left">
                        <div className="nri-image-wrapper position-relative">
                            <div className="image-frame position-relative z-2">
                                <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
                                    className="img-fluid rounded-4 shadow-lg w-100" alt="NRI Services" />
                                <div className="position-absolute top-0 start-0 w-100 h-100 rounded-4"
                                    style={{ background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.6))' }}></div>
                            </div>

                            <div className="floating-badge bg-white p-3 rounded-3 shadow position-absolute bottom-0 start-0 translate-middle-y ms-n3 mb-4 z-3 d-none d-md-block border-start border-4 border-warning">
                                <div className="d-flex align-items-center">
                                    <div className="display-5 text-gold me-3"><i className="fas fa-globe"></i></div>
                                    <div>
                                        <h6 className="fw-bold mb-0 text-dark">Global Reach</h6>
                                        <small className="text-muted">Serving clients worldwide</small>
                                    </div>
                                </div>
                            </div>

                            {/* Background decorative elements */}
                            <div className="position-absolute top-0 end-0 translate-middle-y me-n4 mt-5 z-n1 opacity-25">
                                <svg width="200" height="200" viewBox="0 0 200 200" fill="none">
                                    <circle cx="100" cy="100" r="100" fill="var(--rich-earth-brown)" />
                                </svg>
                            </div>
                            <div className="position-absolute bottom-0 end-0 translate-middle-x mb-n4 z-n1 opacity-25">
                                <svg width="150" height="150" viewBox="0 0 200 200" fill="none">
                                    <rect x="0" y="0" width="200" height="200" rx="20" fill="var(--rich-earth-brown)" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NRIServices;
