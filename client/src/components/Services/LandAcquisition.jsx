import React from 'react';

const LandAcquisition = () => {
    return (
        <section id="land-acquisition" className="py-5 bg-white">
            <div className="container py-5">
                <div className="row mb-5 justify-content-center text-center">
                    <div className="col-lg-8" data-aos="fade-up">
                        <h6 className="text-gold text-uppercase letter-spacing-2">Land & Acquisition</h6>
                        <h2 className="display-5 fw-bold text-dark">Our Strategic Methodology</h2>
                        <p className="text-muted mt-3">Success in real estate starts with the right land. Our proven strategies ensure every acquisition aligns with long-term growth objectives.</p>
                    </div>
                </div>

                <div className="row g-4 mb-5">
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                        <div className="p-4 border rounded-3 h-100 hover-shadow transition-all">
                            <i className="fas fa-bullseye fa-2x text-gold mb-3"></i>
                            <h3 className="h5 fw-bold text-dark">Goal Determination</h3>
                            <p className="text-muted small mb-0">Defining the purpose—commercial, residential, or mixed-use to ensure future scalability.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                        <div className="p-4 border rounded-3 h-100 hover-shadow transition-all">
                            <i className="fas fa-chart-line fa-2x text-gold mb-3"></i>
                            <h3 className="h5 fw-bold text-dark">Market Dynamics</h3>
                            <p className="text-muted small mb-0">Analyzing demand patterns, price trajectories, and infrastructure forecasts to identify upward momentum.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                        <div className="p-4 border rounded-3 h-100 hover-shadow transition-all">
                            <i className="fas fa-gavel fa-2x text-gold mb-3"></i>
                            <h3 className="h5 fw-bold text-dark">Legal & Zoning</h3>
                            <p className="text-muted small mb-0">Rigorous title checks and zoning reviews to ensure no encumbrances or disputes.</p>
                        </div>
                    </div>
                </div>

                <div className="row align-items-center mt-5 pt-4 border-top">
                    <div className="col-lg-5 mb-4 mb-lg-0" data-aos="fade-right">
                        <h6 className="text-gold text-uppercase letter-spacing-2">Why Invest Now?</h6>
                        <h2 className="display-6 fw-bold text-dark mb-4">India's Land Rush</h2>
                        <p className="text-muted">Leading developers are aggressively expanding their land banks. The market is witnessing a clear shift towards premium developments in high-growth corridors due to infrastructure boom and urbanization.</p>
                    </div>
                    <div className="col-lg-6 offset-lg-1" data-aos="fade-left">
                        <div className="row g-4">
                            <div className="col-sm-6">
                                <div className="d-flex align-items-center mb-3">
                                    <h2 className="display-4 fw-bold text-gold opacity-50 me-3 mb-0">01</h2>
                                    <h5 className="fw-bold mb-0 text-dark">Strategic Location</h5>
                                </div>
                                <p className="small text-muted">Identifying growth corridors before the boom.</p>
                            </div>
                            <div className="col-sm-6">
                                <div className="d-flex align-items-center mb-3">
                                    <h2 className="display-4 fw-bold text-gold opacity-50 me-3 mb-0">02</h2>
                                    <h5 className="fw-bold mb-0 text-dark">Due Diligence</h5>
                                </div>
                                <p className="small text-muted">100% verified titles and clean paperwork.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LandAcquisition;
