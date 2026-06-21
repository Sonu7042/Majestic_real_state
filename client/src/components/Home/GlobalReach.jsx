import React, { useEffect, useRef } from 'react';
import indiaVideo from '../../assets/images/global/1771502119_india.html?url';
import globalMapVideo from '../../assets/images/global/1771502132_global-map.html?url';

const GlobalReach = () => {
    const indiaVideoRef = useRef(null);
    const globalVideoRef = useRef(null);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.5
        };

        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.play().catch(() => {});
                } else {
                    entry.target.pause();
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, observerOptions);

        if (indiaVideoRef.current) observer.observe(indiaVideoRef.current);
        if (globalVideoRef.current) observer.observe(globalVideoRef.current);

        return () => {
            if (indiaVideoRef.current) observer.unobserve(indiaVideoRef.current);
            if (globalVideoRef.current) observer.unobserve(globalVideoRef.current);
        };
    }, []);

    const mapData = [
        {
            ref: indiaVideoRef,
            src: indiaVideo,
            title: "Pan-India Presence",
            description: "We actively operate across 20+ major cities in India, supported by a strong regional partner and execution network to ensure seamless service delivery nationwide",
            animation: "fade-right"
        },
        {
            ref: globalVideoRef,
            src: globalMapVideo,
            title: "Global Presence",
            description: "Our footprint extends across key international markets, enabling us to serve global clients through strategic alliances and trusted international partners",
            animation: "fade-left"
        }
    ];

    return (
        <section className="section-soft py-5 bg-gray-building">
            <div className="container section-frame content-layer px-3">
                <div className="text-center mb-5" data-aos="fade-up">
                    <h2>Nationwide & Global Reach</h2>
                    <div className="separator mx-auto" style={{ width: '60px', height: '3px', background: 'var(--primary-gold)' }}></div>
                    <p className="text-muted mt-3">Extending our reach across India and key global markets through reliable
                        partners and strategic alliances.</p>
                </div>
                <div className="row g-4">
                    {mapData.map((map, index) => (
                        <div className="col-lg-6" key={index} data-aos={map.animation}>
                            <div className="map-card text-center">
                                <video 
                                    ref={map.ref}
                                    width="100%" 
                                    muted 
                                    loop 
                                    playsInline 
                                    preload="auto"
                                    style={{ background: '#000', objectFit: 'contain' }}
                                >
                                    <source src={map.src} type="video/mp4" />
                                </video>
                                <h4>{map.title}</h4>
                                <p className="text-muted mb-0">{map.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GlobalReach;
