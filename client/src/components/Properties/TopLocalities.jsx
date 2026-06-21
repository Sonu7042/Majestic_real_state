import React from 'react';

const TopLocalities = () => {
    const localities = [
        {
            icon: "fas fa-map-marker-alt",
            name: "Golf Course Rd",
            location: "Gurgaon",
            delay: "0"
        },
        {
            icon: "fas fa-road",
            name: "Dwarka Expy",
            location: "Gurgaon",
            delay: "100"
        },
        {
            icon: "fas fa-tree",
            name: "New Gurgaon",
            location: "Sec 80-90",
            delay: "200"
        },
        {
            icon: "fas fa-city",
            name: "Cyber City",
            location: "Gurgaon",
            delay: "300"
        }
    ];

    return (
        <section className="py-5">
            <div className="container">
                <div className="text-center mb-5">
                    <h3 className="mb-2">Top Localities to Invest</h3>
                    <div className="separator mx-auto" style={{ width: '60px', height: '3px', background: 'var(--primary-gold)' }}></div>
                </div>
                <div className="row g-4">
                    {localities.map((item, index) => (
                        <div className="col-lg-3 col-md-6" key={index} data-aos="fade-up" data-aos-delay={item.delay}>
                            <div className="locality-card">
                                <div className="d-flex align-items-center">
                                    <div className="locality-icon">
                                        <i className={item.icon}></i>
                                    </div>
                                    <div>
                                        <h6 className="mb-0">{item.name}</h6>
                                        <small className="text-muted">{item.location}</small>
                                    </div>
                                </div>
                                <i className="fas fa-chevron-right text-muted small"></i>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopLocalities;
