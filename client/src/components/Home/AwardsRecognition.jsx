import React, { useState } from 'react';

import award1 from '../../assets/images/awards/real_estate_glass_award.png';
import award2 from '../../assets/images/awards/real_estate_gold_trophy.png';
import award3 from '../../assets/img_5.jpeg';

const AwardsRecognition = () => {
    const awards = [
        { src: award3, title: "Excellence in Commercial Real Estate" },
        { src: award2, title: "Best Emerging Developer Award" },
        { src: award1, title: "Top Real Estate Consultant 2025" },
        { src: award2, title: "Luxury Property Award" },
        { src: award1, title: "Outstanding Achievement in Sales" },
        { src: award2, title: "Real Estate Leadership Award" },
        { src: award1, title: "Premium Asset Management" },
        { src: award2, title: "National Real Estate Icon" },
        { src: award1, title: "Customer Excellence Award" },
        { src: award2, title: "Innovation in Property Tech" },
        { src: award1, title: "Best NRI Advisory Firm" },
        { src: award2, title: "Sustainable Development Award" },
        { src: award1, title: "majestic landbase Platinum Award" },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const openLightbox = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const closeLightbox = () => {
        setIsOpen(false);
    };

    const nextAward = () => {
        setCurrentIndex((prev) => (prev + 1) % awards.length);
    };

    const prevAward = () => {
        setCurrentIndex((prev) => (prev - 1 + awards.length) % awards.length);
    };

    return (
        <section id="awards" className="section-soft py-5 overflow-hidden">
            <div className="container section-frame">
                <div className="text-center mb-5" data-aos="fade-up">
                    <h4 className="text-uppercase fw-bold mb-2" style={{ letterSpacing: '2px' }}>
                        OUR <span className="text-gold">AWARDS</span>
                    </h4>
                    <div className="separator mx-auto" style={{ width: '60px', height: '3px', background: 'var(--primary-gold)' }}></div>
                    <h2 className="mt-3 mb-0" style={{ fontSize: '2.2rem' }}>Recognized Excellence in Real Estate</h2>
                </div>

                {/* Awards Carousel (Marquee) */}
                <div className="marquee-container marquee-left">
                    <div className="marquee-track">
                        {[...awards, ...awards].map((award, index) => (
                            <div className="mx-1" key={index}>
                                <div className="bg-white rounded-3 p-1 shadow-sm d-flex align-items-center justify-content-center"
                                    style={{ width: '208px', height: '260px' }}>
                                    <button
                                        type="button"
                                        className="award-thumb-btn border-0 bg-transparent"
                                        onClick={() => openLightbox(index % awards.length)}
                                    >
                                        <img src={award.src} className="img-fluid rounded-3" alt={award.title}
                                            style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            {isOpen && (
                <div className="modal fade show d-block" style={{ background: 'rgba(0,0,0,0.9)' }} onClick={closeLightbox}>
                    <div className="modal-dialog modal-dialog-centered modal-xl" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-content bg-transparent border-0 shadow-none">
                            <div className="modal-body position-relative p-0 d-flex align-items-center justify-content-center"
                                style={{ height: '100vh' }}>

                                <button type="button" className="btn-close btn-close-white position-absolute top-0 end-0 m-4 z-3"
                                    onClick={closeLightbox} style={{ filter: 'invert(1)', opacity: 0.8 }}></button>

                                <button type="button" className="award-lightbox-nav award-lightbox-prev" onClick={prevAward}>
                                    <i className="fas fa-chevron-left fa-lg"></i>
                                </button>
                                <button type="button" className="award-lightbox-nav award-lightbox-next" onClick={nextAward}>
                                    <i className="fas fa-chevron-right fa-lg"></i>
                                </button>

                                <div className="award-img-container position-relative">
                                    <img src={awards[currentIndex].src} className="img-fluid rounded-3 shadow-lg" alt=""
                                        style={{ maxHeight: '85vh', maxWidth: '90vw', objectFit: 'contain' }} />
                                    <h5 className="modal-title text-white text-center mt-3 position-absolute bottom-0 start-0 w-100 p-3"
                                        style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(5px)' }}>
                                        {awards[currentIndex].title}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                .award-lightbox-nav {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(5px);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    z-index: 1050;
                }
                .award-lightbox-nav:hover {
                    background: var(--primary-gold);
                    border-color: var(--primary-gold);
                    transform: translateY(-50%) scale(1.1);
                    color: #000;
                }
                .award-lightbox-prev { left: 20px; }
                .award-lightbox-next { right: 20px; }
                @media (max-width: 768px) {
                    .award-lightbox-nav { width: 40px; height: 40px; font-size: 0.8rem; }
                    .award-lightbox-prev { left: 10px; }
                    .award-lightbox-next { right: 10px; }
                }
            `}</style>
        </section>
    );
};

export default AwardsRecognition;
