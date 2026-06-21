import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    // const footerLinks = [
    //     {
    //         title: "Property in India",
    //         links: [
    //             { label: "Property in Gurgaon" },
    //             { label: "Property in Mumbai" },
    //             { label: "Property in Delhi" },
    //             { label: "Property in Noida" }
    //         ]
    //     },
    //     {
    //         title: "Residential Properties",
    //         links: [
    //             { label: "Birla Pravaah" },
    //             { label: "Emaar Serenity Hills" },
    //             { label: "Tulip Monsella" },
    //             { label: "Godrej Sora" }
    //         ]
    //     },
    //     {
    //         title: "Commercial Properties",
    //         links: [
    //             { label: "AIPL Joy Central" },
    //             { label: "Conscient SOHO" },
    //             { label: "Reach Airia Corporate Tower" },
    //             { label: "Emaar India Business Centre" }
    //         ]
    //     },
    //     {
    //         title: "SCO Plots",
    //         links: [
    //             { label: "Emaar EBD 65" },
    //             { label: "Emaar EBD 65 NXT" },
    //             { label: "M3M SCO 113 Market" }
    //         ]
    //     }
    // ];

    return (
        <footer className="bg-dark text-white">
            {/* Premium Footer Links */}
            {/* <section className="py-5 border-bottom border-secondary border-opacity-10">
                <div className="container">
                    <div className="row g-4">
                        {footerLinks.map((section, index) => (
                            <div className="col-lg-3 col-md-6" key={index}>
                                <h6 className="text-gold text-uppercase fw-bold mb-4 letter-spacing-2" style={{ fontSize: '0.85rem' }}>
                                    {section.title}
                                </h6>
                                <ul className="list-unstyled d-flex flex-column gap-2">
                                    {section.links.map((link, lIndex) => (
                                        <li key={lIndex}>
                                            <span className="text-secondary transition-all d-block py-1">
                                                <i className="fas fa-angle-right me-2 text-gold small opacity-50"></i>
                                                {link.label}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Main Footer Bottom */}
            <div className="py-4 bg-black">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            <p className="mb-0 small text-secondary">
                                © {currentYear} Majestic  sonuLandbase. All Rights Reserved.
                            </p>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="d-flex justify-content-center justify-content-md-end gap-4 small text-secondary">
                                <a href="/privacy-policy" className="text-decoration-none text-secondary hover-gold">Privacy Policy</a>
                                <a href="/terms-conditions" className="text-decoration-none text-secondary hover-gold">Terms & Conditions</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
