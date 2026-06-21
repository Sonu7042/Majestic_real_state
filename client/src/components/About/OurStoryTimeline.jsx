import React from 'react';

const OurStoryTimeline = () => {
  return (
    <section className="story-timeline py-5 section-soft bg-light">
      <div className="container py-lg-5">
        <div className="text-center mb-5" data-aos="fade-up">
          <span className="text-uppercase fw-bold small" style={{ color: 'var(--primary-gold)', letterSpacing: '2px' }}>Our Path</span>
          <h2 className="display-5 fw-bold text-dark mb-3">The Journey of Excellence</h2>
          <div className="separator mx-auto" style={{ width: '80px', height: '4px', background: 'var(--primary-gold)' }}></div>
        </div>

        <div className="timeline-container position-relative mt-5">
          <div className="timeline-line position-absolute start-50 translate-middle-x h-100 d-none d-md-block" style={{ width: '2px', background: 'var(--primary-gold)' }}></div>

          {/* Timeline Item 1 */}
          <div className="row timeline-row mb-5 justify-content-center align-items-center g-0">
            <div className="col-md-5 text-md-end order-1 order-md-1 pe-md-5" data-aos="fade-right">
              <div className="timeline-content p-4 bg-white rounded-4 shadow-sm border-bottom border-4 position-relative" style={{ borderBottomColor: 'var(--primary-gold) !important' }}>
                <div className="arrow-right position-absolute top-50 start-100 translate-middle-y d-none d-md-block" style={{ borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: '10px solid white' }}></div>
                <h3 className="fw-bold text-dark">Inception</h3>
                <p className="text-muted mb-0">majestic landbase Infra was founded with a vision to organize the unorganized real estate sector.</p>
              </div>
            </div>
            <div className="col-md-2 text-center order-2 order-md-2 position-relative">
              <div className="timeline-year text-white rounded-circle d-flex align-items-center justify-content-center mx-auto shadow fw-bold border border-4 border-white" style={{ width: '70px', height: '70px', zIndex: 2, position: 'relative', fontSize: '1.2rem', background: 'var(--primary-gold)' }}>2013</div>
            </div>
            <div className="col-md-5 order-3 order-md-3 ps-md-5"></div>
          </div>

          {/* Timeline Item 2 */}
          <div className="row timeline-row mb-5 justify-content-center align-items-center g-0">
            <div className="col-md-5 order-3 order-md-1 pe-md-5"></div>
            <div className="col-md-2 text-center order-2 order-md-2 position-relative">
              <div className="timeline-year text-white rounded-circle d-flex align-items-center justify-content-center mx-auto shadow fw-bold border border-4 border-white" style={{ width: '70px', height: '70px', zIndex: 2, position: 'relative', fontSize: '1.2rem', background: 'var(--primary-gold)' }}>2018</div>
            </div>
            <div className="col-md-5 order-1 order-md-3 ps-md-5" data-aos="fade-left">
              <div className="timeline-content p-4 bg-white rounded-4 shadow-sm border-bottom border-4 position-relative" style={{ borderBottomColor: 'var(--primary-gold) !important' }}>
                <div className="arrow-left position-absolute top-50 end-100 translate-middle-y d-none d-md-block" style={{ borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderRight: '10px solid white' }}></div>
                <h3 className="fw-bold text-dark">Rapid Expansion</h3>
                <p className="text-muted mb-0">Expanded operations across Gurugram and NCR, partnering with top-tier developers.</p>
              </div>
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div className="row timeline-row mb-5 justify-content-center align-items-center g-0">
            <div className="col-md-5 text-md-end order-1 order-md-1 pe-md-5" data-aos="fade-right">
              <div className="timeline-content p-4 bg-white rounded-4 shadow-sm border-bottom border-4 position-relative" style={{ borderBottomColor: 'var(--primary-gold) !important' }}>
                <div className="arrow-right position-absolute top-50 start-100 translate-middle-y d-none d-md-block" style={{ borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: '10px solid white' }}></div>
                <h3 className="fw-bold text-dark">Award Recognition</h3>
                <p className="text-muted mb-0">Recognized as "Best Emerging Real Estate Consultant" for outstanding client service.</p>
              </div>
            </div>
            <div className="col-md-2 text-center order-2 order-md-2 position-relative">
              <div className="timeline-year text-white rounded-circle d-flex align-items-center justify-content-center mx-auto shadow fw-bold border border-4 border-white" style={{ width: '70px', height: '70px', zIndex: 2, position: 'relative', fontSize: '1.2rem', background: 'var(--primary-gold)' }}>2021</div>
            </div>
            <div className="col-md-5 order-3 order-md-3 ps-md-5"></div>
          </div>

          {/* Timeline Item 4 */}
          <div className="row timeline-row mb-5 justify-content-center align-items-center g-0">
            <div className="col-md-5 order-3 order-md-1 pe-md-5"></div>
            <div className="col-md-2 text-center order-2 order-md-2 position-relative">
              <div className="timeline-year text-white rounded-circle d-flex align-items-center justify-content-center mx-auto shadow fw-bold border border-4 border-white" style={{ width: '70px', height: '70px', zIndex: 2, position: 'relative', fontSize: '1.2rem', background: 'var(--primary-gold)' }}>2024</div>
            </div>
            <div className="col-md-5 order-1 order-md-3 ps-md-5" data-aos="fade-left">
              <div className="timeline-content p-4 bg-white rounded-4 shadow-sm border-bottom border-4 position-relative" style={{ borderBottomColor: 'var(--primary-gold) !important' }}>
                <div className="arrow-left position-absolute top-50 end-100 translate-middle-y d-none d-md-block" style={{ borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderRight: '10px solid white' }}></div>
                <h3 className="fw-bold text-dark">Global Reach</h3>
                <p className="text-muted mb-0">Launched NRI services and digital platforms to serve a global clientele.</p>
              </div>
            </div>
          </div>

          {/* Timeline Item 5 */}
          <div className="row timeline-row mb-5 justify-content-center align-items-center g-0">
            <div className="col-md-5 text-md-end order-1 order-md-1 pe-md-5" data-aos="fade-right">
              <div className="timeline-content p-4 bg-white rounded-4 shadow-sm border-bottom border-4 position-relative" style={{ borderBottomColor: 'var(--primary-gold) !important' }}>
                <div className="arrow-right position-absolute top-50 start-100 translate-middle-y d-none d-md-block" style={{ borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: '10px solid white' }}></div>
                <h3 className="fw-bold text-dark">14 Years of Excellence. One Trusted Name.</h3>
                <p className="text-muted mb-0">Since 2012, majestic landbase Infra has been redefining real estate with trust, transparency, and scale. From a single vision to a global presence, we’ve delivered thousands of successful transactions and ₹1 Lakh Cr+ in property value. We don’t just deal in properties—we build lasting relationships and create real wealth.</p>
              </div>
            </div>
            <div className="col-md-2 text-center order-2 order-md-2 position-relative">
              <div className="timeline-year text-white rounded-circle d-flex align-items-center justify-content-center mx-auto shadow fw-bold border border-4 border-white" style={{ width: '70px', height: '70px', zIndex: 2, position: 'relative', fontSize: '1.2rem', background: 'var(--primary-gold)' }}>2026</div>
            </div>
            <div className="col-md-5 order-3 order-md-3 ps-md-5"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurStoryTimeline;
