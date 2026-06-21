import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ServicesHero from '../components/Services/ServicesHero';
import InvestmentAdvisory from '../components/Services/InvestmentAdvisory';
import PropertyManagement from '../components/Services/PropertyManagement';
import LandAcquisition from '../components/Services/LandAcquisition';
// import NRIServices from '../components/Services/NRIServices';

const Services = () => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            setTimeout(() => {
                const element = document.getElementById(location.hash.replace('#', ''));
                if (element) {
                    const yOffset = -80; // Offset for navbar
                    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                    window.scrollTo({ top: y, behavior: 'smooth' });
                }
            }, 100);
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <div className="services-page">
            {/* Main Content */}
            <main>
                <ServicesHero />
                <InvestmentAdvisory />
                {/* <NRIServices /> */}
                <PropertyManagement />
                <LandAcquisition />
            </main>

        </div>
    );
};

export default Services;
