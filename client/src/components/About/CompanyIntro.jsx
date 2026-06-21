import React from 'react';

const CompanyIntro = () => {
  return (
    <section className="story-intro py-5 section-soft bg-white">
      <div className="container py-lg-5">
        <div className="row align-items-center">
          <div className="col-lg-12 ps-lg-12" data-aos="fade-left">
            <p><span className="text-uppercase fw-bold small" style={{ color: 'var(--primary-gold)', letterSpacing: '2px' }}>Our presence and Our Essence</span></p>
            <h2 className="display-5 fw-bold mb-4 mt-2">More Than Just Real Estate</h2>
            <p className="text-muted mb-4 lead">
              Established in 2024, Majestic Landbase is your premier partner in luxury real estate. We specialize in curating the finest properties for our clients, ensuring every transaction is the beginning of a magnificent new chapter.
            </p>
            <p className="text-muted mb-4">
              Operating from our headquarters, our dedicated team of 10 real estate experts deals exclusively with top-tier luxury developers. We proudly partner with industry giants including DLF, M3M, Whiteland, Ganga Realty, Signature Global, Elan, Bestech, and many more to bring you unmatched investment and residential opportunities.
            </p>
            <div className="row g-4 mt-2">
              <div className="col-sm-3">
                <div className="d-flex align-items-center border p-2 rounded-2" style={{ minHeight: '85px' }}>
                  <div className="icon-box-sm bg-light rounded-circle p-3 me-3 shadow-sm" style={{ color: 'var(--primary-gold)' }}>
                    <i className="fa-solid fa-handshake fa-lg"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Trusted Partners</h6>
                    <p className="small text-muted mb-0">Building relationships that last.</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="d-flex align-items-center border p-2 rounded-2" style={{ minHeight: '85px' }}>
                  <div className="icon-box-sm bg-light rounded-circle p-3 me-3 shadow-sm" style={{ color: 'var(--primary-gold)' }}>
                    <i className="fa-solid fa-award fa-lg"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Award Winning</h6>
                    <p className="small text-muted mb-0">Recognized for excellence.</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="d-flex align-items-center border p-2 rounded-2" style={{ minHeight: '85px' }}>
                  <div className="icon-box-sm bg-light rounded-circle p-3 me-3 shadow-sm" style={{ color: 'var(--primary-gold)' }}>
                    <i className="fa-solid fa-users fa-lg"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Client-First Approach</h6>
                    <p className="small text-muted mb-0">Your goals guide every decision.</p>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <div className="d-flex align-items-center border p-2 rounded-2" style={{ minHeight: '85px' }}>
                  <div className="icon-box-sm bg-light rounded-circle p-3 me-3 shadow-sm" style={{ color: 'var(--primary-gold)' }}>
                    <i className="fa-solid fa-chart-line fa-lg"></i>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Market Expertise</h6>
                    <p className="small text-muted mb-0">Insight driven, future focused.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyIntro;
