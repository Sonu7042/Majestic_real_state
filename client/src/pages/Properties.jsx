import React, { useEffect, useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import AOS from 'aos';
import PropertyCard from '../components/common/PropertyCard';
import { fetchPublicProperties } from '../services/propertyService';

// Modular Components
import PropertiesHero from '../components/Properties/PropertiesHero';
import SearchFilter from '../components/Properties/SearchFilter';
import TopLocalities from '../components/Properties/TopLocalities';
import PropertyCategories from '../components/Properties/PropertyCategories';
import MarketInsights from '../components/Properties/MarketInsights';

const categoryMap = {
    '1': 'Commercial',
    '2': 'Residential',
    '3': 'SCO Plots',
    '4': 'Industrial Plots'
};

const locationMap = {
    '6': 'Delhi',
    '1': 'Gurgaon'
};

const propertiesPerPage = 9;

const Properties = () => {
    const [searchParams] = useSearchParams();
    const [sortBy, setSortBy] = useState('recommended');
    const [adminProperties, setAdminProperties] = useState([]);
    const [propertiesLoading, setPropertiesLoading] = useState(true);
    const [propertiesError, setPropertiesError] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const categoryId = searchParams.get('category');
    const locationId = searchParams.get('location');

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }, []);

    useEffect(() => {
        const loadAdminProperties = async () => {
            try {
                const properties = await fetchPublicProperties();
                setAdminProperties(properties);
                setPropertiesError('');
            } catch (error) {
                setAdminProperties([]);
                setPropertiesError(error.message || 'Unable to load properties.');
            } finally {
                setPropertiesLoading(false);
            }
        };

        loadAdminProperties();
    }, []);

    const allProperties = useMemo(() => {
        return [...adminProperties];
    }, [adminProperties]);

    // Filter Logic
    const filteredProperties = useMemo(() => {
        let filtered = [...allProperties];

        if (categoryId && categoryMap[categoryId]) {
            const selectedCategory = categoryMap[categoryId].toLowerCase();
            filtered = filtered.filter((property) => {
                const category = (property.category || '').toLowerCase();
                const type = (property.type || '').toLowerCase();
                return category.includes(selectedCategory) || type.includes(selectedCategory);
            });
        }

        if (locationId && locationMap[locationId]) {
            const selectedLocation = locationMap[locationId].toLowerCase();
            const altLocation = selectedLocation === 'gurgaon' ? 'gurugram' : null;
            
            filtered = filtered.filter((property) => {
                const propLoc = (property.location || '').toLowerCase();
                return propLoc.includes(selectedLocation) || (altLocation && propLoc.includes(altLocation));
            });
        }

        // Sorting Logic
        const parsePrice = (priceStr) => {
            if (!priceStr) return 0;
            const str = priceStr.toString().toLowerCase();
            const match = str.match(/[\d.]+/);
            if (!match) return 0;
            
            let num = parseFloat(match[0]);
            
            if (str.includes('cr') || str.includes('crore')) {
                num *= 10000000;
            } else if (str.includes('lakh') || str.includes('lac')) {
                num *= 100000;
            } else if (str.includes('k')) {
                num *= 1000;
            }
            
            return num;
        };

        if (sortBy === 'price_asc') {
            filtered.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
        } else if (sortBy === 'price_desc') {
            filtered.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
        }

        return filtered;
    }, [allProperties, categoryId, locationId, sortBy]);

    const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);
    const paginatedProperties = useMemo(() => {
        const startIndex = (currentPage - 1) * propertiesPerPage;
        return filteredProperties.slice(startIndex, startIndex + propertiesPerPage);
    }, [filteredProperties, currentPage]);

    useEffect(() => {
        setCurrentPage(1);
    }, [categoryId, locationId, sortBy]);

    useEffect(() => {
        if (totalPages > 0 && currentPage > totalPages) {
            setCurrentPage(totalPages);
        }
    }, [currentPage, totalPages]);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
        const section = document.getElementById('properties-grid');
        if (section) {
            const yOffset = -100; // Offset for navbar
            const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <div className="properties-page">
            {/* Hero Section */}
            <PropertiesHero />

            {/* Search Filter */}
            <SearchFilter />

            {/* Top Localities */}
            <TopLocalities />

            {/* Property Categories */}
            {/* <PropertyCategories /> */}

            {/* Featured Properties Grid */}
            <section id="properties-grid" className="bg-white py-5">
                <div className="container">
                    <div className="d-flex justify-content-between align-items-center mb-5">
                        <div>
                            <h2>
                                {categoryId || locationId 
                                    ? `Search Results (${filteredProperties.length})` 
                                    : 'Featured Collection'}
                            </h2>
                            <div className="separator" style={{ width: '80px', height: '3px', background: 'var(--primary-gold)' }}></div>
                        </div>
                        <div>
                            <select 
                                className="form-select form-select-sm border-secondary" 
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                            >
                                <option value="recommended">Sort by: Recommended</option>
                                <option value="price_asc">Price: Low to High</option>
                                <option value="price_desc">Price: High to Low</option>
                            </select>
                        </div>
                    </div>

                    {propertiesLoading ? (
                        <div className="text-center py-5 text-muted">
                            Loading properties...
                        </div>
                    ) : propertiesError ? (
                        <div className="text-center py-5">
                            <i className="fas fa-circle-exclamation fa-3x text-muted mb-3"></i>
                            <h4>Unable to load properties</h4>
                            <p className="text-muted">{propertiesError}</p>
                        </div>
                    ) : filteredProperties.length > 0 ? (
                        <div className="row g-4">
                            {paginatedProperties.map((property, index) => (
                                <div className="col-lg-4 col-md-6" key={property.id || index} data-aos="fade-up" data-aos-delay={(index % 3) * 100}>
                                    <PropertyCard property={property} />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-5">
                            <i className="fas fa-search fa-3x text-muted mb-3"></i>
                            <h4>No properties found</h4>
                            <p className="text-muted">Try adjusting your filters or location.</p>
                            <button className="btn btn-gold" onClick={() => window.location.href = '/properties'}>
                                View All Properties
                            </button>
                        </div>
                    )}

                    {totalPages > 1 && (
                        <div className="row mt-5">
                            <div className="col-12 d-flex justify-content-center">
                                <nav aria-label="Page navigation">
                                    <ul className="pagination">
                                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                            <button
                                                className="page-link text-dark"
                                                type="button"
                                                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                                                disabled={currentPage === 1}
                                            >
                                                Previous
                                            </button>
                                        </li>
                                        {Array.from({ length: totalPages }, (_, index) => {
                                            const page = index + 1;
                                            return (
                                                <li className={`page-item ${currentPage === page ? 'active' : ''}`} key={page}>
                                                    <button
                                                        className={`page-link ${currentPage === page ? 'bg-gold border-gold' : 'text-dark'}`}
                                                        type="button"
                                                        onClick={() => handlePageChange(page)}
                                                    >
                                                        {page}
                                                    </button>
                                                </li>
                                            );
                                        })}
                                        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                            <button
                                                className="page-link text-dark"
                                                type="button"
                                                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                                                disabled={currentPage === totalPages}
                                            >
                                                Next
                                            </button>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Market Content / SEO */}
            <MarketInsights />

            {/* Footer */}
        </div>
    );
};

export default Properties;
