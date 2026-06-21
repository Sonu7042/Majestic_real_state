import React from 'react';

const PropertiesHero = () => {
    return (
        <header className="properties-hero">
            <div className="container" data-aos="fade-up">
                <h1>Premium Properties</h1>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center">
                        <li className="breadcrumb-item">
                            <a href="/" className="text-white text-decoration-none">Home</a>
                        </li>
                        <li className="breadcrumb-item active text-gold" aria-current="page">Properties</li>
                    </ol>
                </nav>
            </div>
        </header>
    );
};

export default PropertiesHero;
