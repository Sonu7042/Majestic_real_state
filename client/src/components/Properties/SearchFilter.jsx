import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchFilter = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const allowedLocations = ['0', '6', '1'];
    const getValidLocation = (value) => allowedLocations.includes(value) ? value : '0';
    const [location, setLocation] = useState(getValidLocation(searchParams.get('location') || '0'));
    const [category, setCategory] = useState(searchParams.get('category') || '0');

    // Sync state with URL params
    useEffect(() => {
        setLocation(getValidLocation(searchParams.get('location') || '0'));
        setCategory(searchParams.get('category') || '0');
    }, [searchParams]);

    const handleSearch = (e) => {
        e.preventDefault();
        const params = {};
        if (location !== '0') params.location = location;
        if (category !== '0') params.category = category;
        setSearchParams(params);
        
        // Add a slight delay to allow React to process URL params and update the page
        setTimeout(() => {
            const section = document.getElementById('properties-grid');
            if (section) {
                const yOffset = -100; // Offset for navbar
                const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }, 50);
    };

    return (
        <div className="container">
            <div className="search-filter-section" data-aos="fade-up">
                <form onSubmit={handleSearch}>
                    <div className="row g-3 px-4 align-items-end">
                        <div className="col-md-3">
                            <label className="form-label small text-muted text-uppercase fw-bold">Location</label>
                            <select 
                                className="form-select form-select-custom" 
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            >
                                <option value="0">All Locations</option>
                                <option value="6">Delhi</option>
                                <option value="1">Gurgaon</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <label className="form-label small text-muted text-uppercase fw-bold">Property Type</label>
                            <select 
                                className="form-select form-select-custom"
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                <option value="0">All Types</option>
                                <option value="1">Commercial</option>
                                <option value="4">Industrial Plots</option>
                                <option value="2">Residential</option>
                                <option value="3">SCO Plots</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <label className="form-label small text-muted text-uppercase fw-bold">Budget</label>
                            <input type="text" className="form-control form-select-custom" placeholder="Any Budget" disabled />
                        </div>
                        <div className="col-md-3">
                            <button type="submit" className="btn btn-gold w-100">Search Properties</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SearchFilter;
