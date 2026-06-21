import React from 'react'
import { Link } from 'react-router-dom'

const PropertyCard = ({ property }) => {
  if (!property) return null;

  const {
    id,
    image,
    title,
    location,
    type,
    area,
    price,
    badge
  } = property

  return (
    <div className="property-card" data-aos="fade-up">
      <div className="property-img-container">
        {badge && <span className="property-badge bg-dark">{badge}</span>}
        <Link to={`/property-detail/${id}`} className="d-block">
          <img src={image} alt={title} />
        </Link>
      </div>
      <div className="property-details">
        <h5>
          <Link to={`/property-detail/${id}`} className="text-decoration-none text-dark">
            {title || 'Property Title'}
          </Link>
        </h5>
        <p className="text-muted mb-2">
          <i className="fas fa-map-marker-alt text-gold me-2"></i>{location || 'Location'}
        </p>
        <ul className="amenities-list">
          <li><i className="fas fa-th-large"></i><span>{area || 'N/A'}</span></li>
          <li><i className="fas fa-building"></i><span>{type || 'N/A'}</span></li>
        </ul>
        <hr />
        <div className="d-flex justify-content-between align-items-center">
          <span className="property-price">{price || 'Price on Request'}</span>
          <Link to={`/property-detail/${id}`} className="btn btn-sm  text-white btn-outline-dark">Details</Link>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard
