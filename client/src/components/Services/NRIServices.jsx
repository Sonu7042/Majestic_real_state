import React from 'react';
import { Link } from 'react-router-dom';

const NRIServices = () => {
    return (
        <section id="nri-services" className="py-5 bg-light border-bottom">
            <div className="container py-5">
                <div className="text-center mb-5" data-aos="fade-up">
                    <h6 className="text-gold text-uppercase letter-spacing-2">Our Expertise</h6>
                    <h2 className="display-5 fw-bold text-dark">Tailored NRI Services</h2>
                </div>

                <div className="row g-4">
                    <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
                        <div className="p-4 bg-white rounded-3 shadow-sm h-100 text-center hover-shadow transition-all">
                            <i className="fas fa-building fa-2x text-gold mb-3"></i>
                            <h3 className="h4 fw-bold text-dark">Property Acquisition</h3>
                            <p className="text-muted">Access to pre-launch offers and Grade-A commercial assets across India's top metros.</p>
                        </div>
                    </div>
                    <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                        <div className="p-4 bg-white rounded-3 shadow-sm h-100 text-center hover-shadow transition-all">
                            <i className="fas fa-chart-line fa-2x text-gold mb-3"></i>
                            <h3 className="h4 fw-bold text-dark">Portfolio Management</h3>
                            <p className="text-muted">Active monitoring and rebalancing of your real estate portfolio to maximize ROI.</p>
                        </div>
                    </div>
                    <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                        <div className="p-4 bg-white rounded-3 shadow-sm h-100 text-center hover-shadow transition-all">
                            <i className="fas fa-gavel fa-2x text-gold mb-3"></i>
                            <h3 className="h4 fw-bold text-dark">Legal & Tax Advisory</h3>
                            <p className="text-muted">Seamless coordination with chartered accountants and lawyers for full compliance.</p>
                        </div>
                    </div>
                    <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
                        <div className="p-4 bg-white rounded-3 shadow-sm h-100 text-center hover-shadow transition-all">
                            <i className="fas fa-key fa-2x text-gold mb-3"></i>
                            <h3 className="h4 fw-bold text-dark">Property Management</h3>
                            <p className="text-muted">Tenant screening, rent collection, and property maintenance services.</p>
                        </div>
                    </div>
                    <div className="col-md-4" data-aos="fade-up" data-aos-delay="500">
                        <div className="p-4 bg-white rounded-3 shadow-sm h-100 text-center hover-shadow transition-all">
                            <i className="fas fa-hand-holding-usd fa-2x text-gold mb-3"></i>
                            <h3 className="h4 fw-bold text-dark">Loan Assistance</h3>
                            <p className="text-muted">Facilitating home loans for NRIs with leading Indian banks at competitive rates.</p>
                        </div>
                    </div>
                    <div className="col-md-4" data-aos="fade-up" data-aos-delay="600">
                        <div className="p-4 bg-white rounded-3 shadow-sm h-100 text-center hover-shadow transition-all">
                            <i className="fas fa-sync fa-2x text-gold mb-3"></i>
                            <h3 className="h4 fw-bold text-dark">Resale & Liquidation</h3>
                            <p className="text-muted">Strategic exit planning to help you liquidate assets at the right time.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NRIServices;
