import React from 'react';

const StatsSection = () => {
    const statsData = [
        {
            value: "2024",
            label: "Established In",
            delay: "0"
        },
        {
            value: "10+",
            label: "Real Estate Experts",
            delay: "100"
        },
        {
            value: "50+",
            label: "Luxury Projects",
            delay: "200"
        },
        {
            value: "100%",
            label: "Client Satisfaction",
            delay: "300"
        }
    ];

    return (
        <section className="stats-section py-5">
            <div className="container text-center">
                <div className="row g-5">
                    {statsData.map((stat, index) => (
                        <div className="col-md-3 col-6" key={index}>
                            <div className="stat-item" data-aos="zoom-in" data-aos-delay={stat.delay}>
                                <h3>{stat.value}</h3>
                                <p>{stat.label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
