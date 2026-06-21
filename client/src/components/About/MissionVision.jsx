import React from 'react';

const MissionVision = () => {
  return (
    <section className="story-mission py-4 bg-dark text-white position-relative overflow-hidden" style={{ backgroundColor: '#1a1a1a' }}>
      {/* Background Elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100 opacity-25" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center', filter: 'grayscale(100%)', opacity: 0.15 }}></div>
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.9))' }}></div>
      
      <div className="container position-relative z-1 py-lg-5">
        <div className="row g-5">
          {/* Mission */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <div className="mission-card h-100 p-4 rounded-4 border border-secondary position-relative overflow-hidden" style={{ background: 'linear-gradient(145deg, #2a2a2a, #1a1a1a)' }}>
              <div className="position-absolute top-0 end-0 p-4 opacity-10 display-1" style={{ color: 'var(--primary-gold)' }}>&nbsp;</div>
              <h3 className="mb-2 display-6 fw-bold" style={{ color: 'var(--primary-gold)' }}>Our Mission</h3>
              <p className="lead text-light mb-2 opacity-75">To revolutionize real estate advisory in India by delivering precise, insight-led, and experience-driven solutions. We aim to empower every client with clarity, confidence, and curated opportunities.</p>
              <div className="separator-line mb-2" style={{ width: '50px', height: '3px', backgroundColor: 'var(--primary-gold)' }}>&nbsp;</div>
              <ul className="list-unstyled text-white-50">
                <li className="mb-3 d-flex align-items-center">Client-First Approach</li>
                <li className="mb-3 d-flex align-items-center">Transparent Dealings</li>
                <li className="mb-3 d-flex align-items-center">End-to-End Support</li>
              </ul>
            </div>
          </div>
          
          {/* Vision */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <div className="vision-card h-100 p-4 rounded-4 border border-secondary position-relative overflow-hidden" style={{ background: 'linear-gradient(145deg, #2a2a2a, #1a1a1a)' }}>
              <div className="position-absolute top-0 end-0 p-4 opacity-10 display-1" style={{ color: 'var(--primary-gold)' }}>&nbsp;</div>
              <h3 className="mb-2 display-6 fw-bold" style={{ color: 'var(--primary-gold)' }}>Our Vision</h3>
              <p className="lead text-light mb-2 opacity-75">To be the undisputed leader in luxury real estate consultancy, setting global benchmarks for professionalism and integrity. We envision a future where every investment we guide creates lasting wealth and legacy.</p>
              <div className="separator-line mb-2" style={{ width: '50px', height: '3px', backgroundColor: 'var(--primary-gold)' }}>&nbsp;</div>
              <ul className="list-unstyled text-white-50">
                <li className="mb-3 d-flex align-items-center">Global Standards</li>
                <li className="mb-3 d-flex align-items-center">Innovation in Service</li>
                <li className="mb-3 d-flex align-items-center">Sustainable Growth</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
