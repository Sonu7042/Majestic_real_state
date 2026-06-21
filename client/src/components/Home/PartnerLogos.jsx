import React, { useEffect, useState } from 'react';
import dlfLogo from '../../assets/partnerlogo/dlf.png';
import m3mLogo from '../../assets/partnerlogo/m3m.webp';
import whitelandLogo from '../../assets/partnerlogo/Whiteland.svg';
import gangaLogo from '../../assets/partnerlogo/ganga-footer.svg';
import signatureLogo from '../../assets/partnerlogo/signatureglobal.svg';
import elanLogo from '../../assets/partnerlogo/elan.png';
import bestechLogo from '../../assets/partnerlogo/Bestech.png';
import { fetchPublicPartnerLogos } from '../../services/partnerLogoService';

const PartnerLogos = () => {
    const fallbackLogos = [
        { src: dlfLogo, name: 'DLF', bg: 'white' },
        { src: m3mLogo, name: 'M3M', bg: 'black' },
        { src: whitelandLogo, name: 'Whiteland', bg: 'white' },
        { src: gangaLogo, name: 'Ganga Realty', bg: 'black' },
        { src: signatureLogo, name: 'Signature Global', bg: 'black' },
        { src: elanLogo, name: 'Elan', bg: 'white' },
        { src: bestechLogo, name: 'Bestech', bg: 'white' }
    ];

    const [logos, setLogos] = useState([]);

    useEffect(() => {
        const loadLogos = async () => {
            try {
                const fetchedLogos = await fetchPublicPartnerLogos();
                if (fetchedLogos && fetchedLogos.length > 0) {
                    setLogos(fetchedLogos);
                } else {
                    setLogos(fallbackLogos);
                }
            } catch (error) {
                console.error("Failed to load dynamic partner logos:", error);
                setLogos(fallbackLogos);
            }
        };
        loadLogos();
    }, []);

    // Combine or duplicate logos list so marquee scrolling is continuous and filled
    const displayLogos = logos.length > 0 ? logos : fallbackLogos;
    // Duplicate to ensure smooth scrolling track
    const marqueeLogos = [...displayLogos, ...displayLogos];

    return (
        <section className="marquee-section py-5">
            <div className="container mb-5">
                <div className="section-title text-center" data-aos="fade-up">
                    <h2>Our Majestic Landbase Partnerships</h2>
                    <div className="separator mx-auto" style={{ width: '60px', height: '3px', background: 'var(--primary-gold)' }}></div>
                    <p className="mt-3">Our strength lies in our deep-rooted network and collaborations. We proudly partner with India’s finest luxury developers to bring you exclusive and high-yield properties. Our portfolio features curated opportunities from industry giants, including:</p>
                </div>
            </div>

            {/* Carousel 1: Left to Right */}
            <div className="marquee-container marquee-right mb-4">
                <div className="marquee-track">
                    {marqueeLogos.map((logo, index) => (
                        <div
                            className="developer-card"
                            key={index}
                            style={logo.bg === 'black' ? { backgroundColor: '#000', borderColor: '#222' } : {}}
                        >
                            <img src={logo.logo || logo.src} className="img-fluid" alt={logo.name} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PartnerLogos;
