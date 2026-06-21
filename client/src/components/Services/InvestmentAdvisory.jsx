import React from 'react';

const InvestmentAdvisory = () => {
    return (
        <section id="investment-advisory" className="section-padding py-5 bg-white border-bottom">
            <div className="container py-5">
                <div className="row align-items-center mb-5">
                    <div className="col-lg-6 mb-5 mb-lg-0" data-aos="fade-right">
                        <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Investment Strategy" className="img-fluid rounded-3 shadow-lg" />
                    </div>
                    <div className="col-lg-6 ps-lg-5" data-aos="fade-left">
                        <h5 className="text-gold text-uppercase fw-bold mb-2">Investment Sales Advisory</h5>
                        <h2 className="fw-bold mb-4 display-6 text-dark">Unlock the Full Potential of Your Portfolio</h2>
                        <p className="text-muted mb-4 lead">At majestic landbase Infra, we act as your strategic partners, leveraging deep market intelligence and a global network to deliver customized investment solutions.</p>
                        <ul className="list-unstyled mb-4">
                            <li className="mb-2 d-flex align-items-center"><i className="fas fa-check    me-3"></i>Comprehensive Market Analysis</li>
                            <li className="mb-2 d-flex align-items-center"><i className="fas fa-check text-gold me-3"></i>Risk Assessment & Mitigation</li>
                            <li className="mb-2 d-flex align-items-center"><i className="fas fa-check text-gold me-3"></i>ROI-Focused Strategies</li>
                        </ul>
                    </div>
                </div>

                <div className="row g-4 mt-2">
                    <div className="col-md-4" data-aos="fade-up" data-aos-delay="0">
                        <div className="p-4 bg-light rounded-3 h-100 border-start border-gold border-4">
                            <h4 className="h5 fw-bold text-dark">Acquisition Services</h4>
                            <p className="text-muted small mb-0">Identifying and securing high-value assets that align with your investment criteria.</p>
                        </div>
                    </div>
                    <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
                        <div className="p-4 bg-light rounded-3 h-100 border-start border-gold border-4">
                            <h4 className="h5 fw-bold text-dark">Disposition Strategy</h4>
                            <p className="text-muted small mb-0">Maximizing returns upon exit with tailored marketing campaigns and global network leverage.</p>
                        </div>
                    </div>
                    <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                        <div className="p-4 bg-light rounded-3 h-100 border-start border-gold border-4">
                            <h4 className="h5 fw-bold text-dark">Asset Management</h4>
                            <p className="text-muted small mb-0">Optimizing portfolio performance from tenant retention to operational efficiency.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InvestmentAdvisory;
