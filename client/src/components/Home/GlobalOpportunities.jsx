import React from 'react';
const GlobalOpportunities = () => {
    const opportunities = [
        {
            image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1600", // Modern glass skyscrapers
            title: "Delhi",
            delay: "0"
        },
        {
            image: "https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&w=1600", // Modern city building skyline
            title: "Gurgaon",
            delay: "200"
        }
    ];  

    return (
        <section id="global" className="position-relative text-white py-5"
            style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop')", 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                backgroundAttachment: 'fixed' 
            }}
        >
            <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'rgba(30, 22, 17, 0.85)' }}></div>
            <div className="container position-relative z-1">
                <div className="section-title text-center">
                    <h2 className="text-white">Prime Locations</h2>
                    <div className="separator mx-auto" style={{ width: '60px', height: '3px', background: 'var(--primary-gold)' }}></div>
                    <p className="text-white">Discover exclusive real estate investments across Delhi & Gurgaon's most prestigious neighborhoods</p>
                </div>

                <div className="row g-4">
                    {opportunities.map((item, index) => (
                        <div className="col-md-6" key={index} data-aos="fade-up" data-aos-delay={item.delay}>
                            <div className="card bg-dark border-0 text-white overflow-hidden">
                                <img src={item.image}
                                    className="card-img opacity-50" alt={item.title} style={{ height: '400px', objectFit: 'cover' }} />
                                <div className="card-img-overlay d-flex flex-column justify-content-end p-4">
                                    <h3 className="card-title">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* <div className="text-center mt-5">
                    <a href="#contact" className="btn btn-outline-gold">Explore International</a>
                </div> */}
            </div>
        </section>
    );
};

export default GlobalOpportunities;
