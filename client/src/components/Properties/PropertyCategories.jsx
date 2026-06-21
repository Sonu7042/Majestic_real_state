import React from 'react';
import commercialImg from '../../assets/images/property-categories/cat_1773829073_69ba7bd16f4e4.html?url';
import industrialImg from '../../assets/images/property-categories/cat_1775596616_69d574489add5.html?url';
import residentialImg from '../../assets/images/property-categories/cat_1773829112_69ba7bf8e0155.html?url';
import scoImg from '../../assets/images/property-categories/cat_1773829129_69ba7c0908559.html?url';

const PropertyCategories = () => {
    const categories = [
        {
            title: "Commercial",
            image: commercialImg,
            link: "/properties?category=1",
            delay: "0"
        },
        {
            title: "Industrial Plots",
            image: industrialImg,
            link: "/properties?category=4",
            delay: "100"
        },
        {
            title: "Residential",
            image: residentialImg,
            link: "/properties?category=2",
            delay: "200"
        },
        {
            title: "SCO Plots",
            image: scoImg,
            link: "/properties?category=3",
            delay: "300"
        }
    ];

    return (
        <section className="pb-5">
            <div className="container">
                <div className="row g-3">
                    {categories.map((cat, index) => (
                        <div className="col-md-3" key={index} data-aos="fade-up" data-aos-delay={cat.delay}>
                            <a href={cat.link} className="text-decoration-none">
                                <div className="category-card">
                                    <span className="category-badge">Category</span>
                                    <img src={cat.image} alt={cat.title} />
                                    <div className="category-overlay">
                                        <h4 className="mb-0">{cat.title}</h4>
                                        <p className="mb-0 small text-white-50">Explore properties</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PropertyCategories;
