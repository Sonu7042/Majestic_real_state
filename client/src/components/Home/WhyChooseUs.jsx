import React from 'react';

const WhyChooseUs = () => {
    const whyChooseData = [
        {
            icon: "fas fa-users",
            value: "500+",
            title: "Trusted Investors & Buyers",
            delay: "0"
        },
        {
            icon: "fas fa-user-tie",
            value: "10+",
            title: "Professionals",
            delay: "100"
        },
        {
            icon: "fas fa-network-wired",
            value: "50+",
            title: "Brokers | Global Network",
            delay: "200"
        },
        // {
        //     icon: "fas fa-map-marked-alt",
        //     value: "2+",
        //     title: "States Covered",
        //     delay: "300"
        // },
        {
            icon: "fas fa-headset",
            value: "Dedicated",
            title: "CRM Team",
            delay: "400"
        },
        {
            icon: "fas fa-handshake",
            value: "15+",
            title: "A Grade Developer Partners",
            delay: "500"
        },
        {
            icon: "fas fa-trophy",
            value: "7",
            title: "Year of Trusted Excellence",
            delay: "600"
        },
        {
            icon: "fas fa-file-signature",
            value: "100%",
            title: "Transparent Deals",
            delay: "700"
        }
    ];

    return (
        <section className="why-choose py-4 bg-bone-white section-creative">
            <div className="floating-shapes">
                <div className="shape"></div>
                <div className="shape"></div>
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <div className="container section-frame content-layer">
                <div className="text-center mb-5" data-aos="fade-up">
                    <h2>Why Choose majestic landbase?</h2>
                    <div className="separator mx-auto" style={{ width: '60px', height: '3px', background: 'var(--primary-gold)' }}></div>
                    <p className="text-muted mt-3">Premium expertise backed by scale and trusted relationships.</p>
                </div>
                <div className="row g-4">
                    {whyChooseData.map((item, index) => (
                        <div key={index} className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={item.delay}>
                            <div className="metric-card">
                                <div className="metric-icon">
                                    <i className={item.icon}></i>
                                </div>
                                <div className="metric-content">
                                    <h3>{item.value}</h3>
                                    <p>{item.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
