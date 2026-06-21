import React from 'react';

const ServicesHero = () => {
    return (
        <section className="services-hero position-relative pt-5 pb-5 bg-dark text-white" style={{ minHeight: '40vh', display: 'flex', alignItems: 'center' }}>
            <div className="container position-relative z-1 pt-5 mt-5">
                <div className="row justify-content-center text-center">
                    <div className="col-lg-8" data-aos="fade-up">
                        <h5 className="text-gold text-uppercase letter-spacing-2 mb-3">Our Expertise</h5>
                        <h1 className="display-4 fw-bold mb-4">
                            Premium Real Estate Services
                        </h1>
                        <p className="lead text-white-50">
                            Comprehensive solutions tailored to maximize value, mitigate risks, and elevate your real estate portfolio.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesHero;
