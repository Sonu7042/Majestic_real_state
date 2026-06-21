import React from 'react';

const OurExpertise = () => {
    const expertiseData = [
        {
            icon: "fas fa-home",
            title: "Residential Sales",
            description: "Premium homes matching your lifestyle and legacy."
        },
        {
            icon: "fas fa-city",
            title: "Commercial Leasing",
            description: "Strategic spaces for business growth and retail."
        },
        {
            icon: "fas fa-chart-line",
            title: "Investment Advisory",
            description: "Data-backed insights to maximize your ROI."
        },
        {
            icon: "fas fa-globe-asia",
            title: "NRI Services",
            description: "End-to-end support from search to documentation."
        },
        {
            icon: "fas fa-handshake",
            title: "Tenant Representation",
            description: "Negotiating best terms with cost-efficiency."
        },
        {
            icon: "fas fa-building",
            title: "Project Marketing",
            description: "Exclusive mandates for top-tier developers."
        }
    ];

    return (
        <section id="services" className="section-soft py-4 bg-white">
            <div className="container section-frame">
                <div className="row align-items-center">
                    {/* Left Content (Col-4) */}
                    <div className="col-lg-4 mb-5 mb-lg-0" data-aos="fade-right">
                        <div className="pe-lg-4">
                            <h2 className="display-6 fw-bold mb-3">
                                Our Expertise
                            </h2>
                            <div className="separator mb-4" style={{ width: '60px', height: '4px', background: 'var(--primary-gold)' }}>
                            </div>
                            <p className="text-muted mb-4" style={{ lineHeight: '1.8' }}>
                                Comprehensive Real Estate Solutions Tailored for You.<br /><br />
                                We provide a full spectrum of services from residential sales to commercial leasing,
                                ensuring every aspect of your real estate journey is covered with professionalism,
                                transparency, and integrity. Partner with us for a seamless experience.
                            </p>
                            <a href="/contact" className="btn btn-outline-dark rounded-pill px-4">
                                Get Consultation <i className="fas fa-arrow-right ms-2"></i>
                            </a>
                        </div>
                    </div>

                    {/* Right Grid (Col-8) */}
                    <div className="col-lg-8" data-aos="fade-left">
                        <div className="row g-3">
                            {expertiseData.map((item, index) => (
                                <div className="col-md-6" key={index}>
                                    <div className="service-box-premium">
                                        <div className="sb-icon">
                                            <i className={item.icon}></i>
                                        </div>
                                        <div>
                                            <h5>{item.title}</h5>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurExpertise;
