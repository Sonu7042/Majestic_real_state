import React from 'react';

const AboutHero = () => {
  return (
    <section className="story-hero position-relative" style={{ height: '85vh', overflow: 'hidden' }}>
      {/* Background Video/Image */}
      <div className="youtube-bg position-absolute inset-0 z-0 pointer-events-none" style={{ top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        {/* Placeholder for video or dummy image */}
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
          alt="Hero Background"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* Overlay */}
      <div className="story-hero-overlay position-absolute" style={{ top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7))', zIndex: 1 }}></div>

      <div className="container position-relative h-100 d-flex align-items-center justify-content-center text-center" style={{ zIndex: 2 }}>
        <div className="story-hero-content pt-5" data-aos="fade-up">
          <span className="text-gold text-uppercase fw-bold mb-3 d-block mt-5" style={{ letterSpacing: '2px', color: 'var(--primary-gold)' }}>Who We Are</span>
          <h1 className="display-3 fw-bold text-white mb-4">
            Crafting Legacies, <br />
            <span style={{ color: 'var(--primary-gold)' }}>Building Trust</span>
          </h1>
          <p className="lead text-white-50 mx-auto" style={{ maxWidth: '700px' }}>
            Since our inception, majestic landbase Infraventure has been redefining the real estate landscape with a commitment to excellence, transparency, and innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
