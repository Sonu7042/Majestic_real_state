import React from 'react';
import img_4 from "../../assets/img_4.jpeg";

const PropertyManagement = () => {
    return (
        <>
            <section id="property-management" className="py-5 bg-light border-bottom">
                <div className="container py-5">
                    <div className="row align-items-center mb-5">
                        <div className="col-lg-6" data-aos="fade-right">
                            <h6 className="text-gold text-uppercase letter-spacing-2">Property Management</h6>
                            <h2 className="display-5 fw-bold text-dark">Why Owners Trust Us?</h2>
                            <p className="text-muted mt-3">We don't just manage properties; we nurture assets. Our comprehensive approach ensures your real estate investment continues to appreciate while generating steady passive income.</p>
                            <ul className="list-unstyled mt-4 text-muted">
                                <li className="mb-3"><strong><i className="fas fa-shield-alt text-gold me-2"></i>Verified Tenants:</strong> Rigorous background checks and credit scoring.</li>
                                <li className="mb-3"><strong><i className="fas fa-tools text-gold me-2"></i>Proactive Maintenance:</strong> Regular inspections to prevent costly repairs.</li>
                                <li className="mb-3"><strong><i className="fas fa-gavel text-gold me-2"></i>Legal Safeguards:</strong> Iron-clad rental agreements and dispute resolution.</li>
                            </ul>
                        </div>
                        <div className="col-lg-5 offset-lg-1" data-aos="fade-left">
                            <div className="row g-3">
                                <div className="col-6">
                                    <div className="p-4 bg-white rounded-3 shadow-sm text-center h-100">
                                        <i className="fas fa-search-location fa-2x text-gold mb-3"></i>
                                        <h5 className="fw-bold fs-6 text-dark">Tenant Discovery</h5>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="p-4 bg-white rounded-3 shadow-sm text-center h-100">
                                        <i className="fas fa-file-signature fa-2x text-gold mb-3"></i>
                                        <h5 className="fw-bold fs-6 text-dark">Lease Management</h5>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="p-4 bg-white rounded-3 shadow-sm text-center h-100">
                                        <i className="fas fa-hand-holding-usd fa-2x text-gold mb-3"></i>
                                        <h5 className="fw-bold fs-6 text-dark">Rent Collection</h5>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="p-4 bg-white rounded-3 shadow-sm text-center h-100">
                                        <i className="fas fa-clipboard-check fa-2x text-gold mb-3"></i>
                                        <h5 className="fw-bold fs-6 text-dark">Regular Inspections</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="py-5 bg-dark">
                <div className="container py-5">
                    <div className="row mb-5">
                        <div className="col-lg-6" data-aos="fade-right">
                            <h6 className="text-gold text-uppercase letter-spacing-2">Seamless Process</h6>
                            <h2 className="text-white display-5 fw-bold">How We Work</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-6" data-aos="fade-right">
                            <div className="d-flex mb-4">
                                <div className="me-4">
                                    <h2 className="text-white opacity-50 display-6 fw-bold">01</h2>
                                </div>
                                <div>
                                    <h4 className="text-white">Onboarding</h4>
                                    <p className="text-secondary">Initial audit and recommendations to make the property market-ready.</p>
                                </div>
                            </div>
                            <div className="d-flex mb-4">
                                <div className="me-4">
                                    <h2 className="text-white opacity-50 display-6 fw-bold">02</h2>
                                </div>
                                <div>
                                    <h4 className="text-white">Marketing & Tenant Search</h4>
                                    <p className="text-secondary">Listings and screening to find the right tenant.</p>
                                </div>
                            </div>
                            <div className="d-flex mb-4">
                                <div className="me-4">
                                    <h2 className="text-white opacity-50 display-6 fw-bold">03</h2>
                                </div>
                                <div>
                                    <h4 className="text-white">Agreement & Move-In</h4>
                                    <p className="text-secondary">Paperwork, deposit collection, and move-in checks.</p>
                                </div>
                            </div>
                            <div className="d-flex mb-4">
                                <div className="me-4">
                                    <h2 className="text-white opacity-50 display-6 fw-bold">04</h2>
                                </div>
                                <div>
                                    <h4 className="text-white">Ongoing Management</h4>
                                    <p className="text-secondary">Rent collection, maintenance, and owner updates.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 d-none d-lg-block " data-aos="fade-left">
                            <img src={img_4} alt="Process" className="img-fluid img_height rounded-3 opacity-75 shadow-lg" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PropertyManagement;
