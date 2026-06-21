import React from 'react';
import img1 from '../../assets/img_6.png';
import img2 from '../../assets/co-founder.webp';
import img3 from '../../assets/img_8.jpeg';
import hareraPdf from '../../assets/17137719253.pdf';
import gstPdf from '../../assets/GST-Certificate.pdf';
import DynamicGallery from '../common/DynamicGallery';

const TeamMembers = () => {
  return (
    <>
      {/* Viren Mehta */}
      <section className="story-values py-5 bg-white">
        <div className="container py-lg-5">
          <div className="row g-4">
            <div className="col-md-6 col-sm-6" data-aos="fade-up" data-aos-delay="0">
              <img
                src={img1}
                alt="Viren Mehta"
                className="img-fluid rounded shadow w-75 mx-auto d-block object-fit-cover"
                style={{ height: '450px' }}
              />
            </div>
            <div className="col-md-6 col-sm-6 my-auto text-start ps-md-5" data-aos="fade-up" data-aos-delay="100">
              <div className="mb-5" data-aos="fade-up">
                <h2 className="display-5 fw-bold text-dark text-start">Mr. Ashish Asthana</h2>
                <div className="separator mb-3" style={{ width: '80px', height: '4px', background: 'var(--primary-gold)' }}>&nbsp;</div>
                <p style={{ fontWeight: 600, textAlign: 'left', color: 'var(--primary-gold)' }}>Founder & Director</p>
                {/* <p className="text-start text-muted">
                  Mr. Ashish Asthana is the Founder and Director of Majestic Landbase, a premier real estate advisory firm based in Gurugram. With over 7+ years of personal expertise in shaping the region's property landscape, Mr. Asthana brings unparalleled market insights and strategic vision to the company. He specializes in comprehensive market analysis, investment advisory, portfolio optimization, and strategic planning, leading a dedicated team of experts to deliver unmatched results for both investors and end-users.

                </p>
                <p className="text-start text-muted">
                  Leveraging a powerhouse network of top-tier industry connections, Mr. Asthana is adept at identifying emerging trends, securing exclusive inventory from luxury developers, and crafting tailored realty solutions for long-term success. Throughout his distinguished career, he has successfully facilitated high-value transactions across residential and commercial acquisitions, property development, and complex lease negotiations—earning a stellar reputation for exceptional negotiation skills, strategic foresight, and unwavering integrity.
                </p> */}
                <p className="text-start text-muted">
                  Mr. Ashish Asthana is the Founder & Director of Majestic Landbase, a trusted real estate consultancy firm based in Gurugram. With more than 7 years of strong experience in the real estate industry, he has developed a deep understanding of the property market in Gurugram and Delhi NCR. His expertise lies in residential and commercial properties, investment planning, market research, and client-focused real estate solutions. Through his leadership and market knowledge, he guides clients in making smart and profitable property decisions.
                </p>

                <p className="text-start text-muted">
                  Ashish Asthana is widely recognized for his strong industry network and deep market insights. He specializes in identifying upcoming investment opportunities, securing access to premium developer inventory, and providing customized property solutions to clients. Throughout his professional journey, he has successfully handled multiple residential and commercial deals, building a strong reputation founded on trust, transparency, and professional commitment.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* Deeksha Asthana */}
      <section className="story-values py-5 bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6 col-sm-6 my-auto text-start pe-md-5 order-2 order-md-1" data-aos="fade-up" data-aos-delay="100">
              <div className="mb-5" data-aos="fade-up">
                <h2 className="display-5 fw-bold text-dark text-start">Ms. Deeksha Asthana</h2>
                <div className="separator mb-3" style={{ width: '80px', height: '4px', background: 'var(--primary-gold)' }}>&nbsp;</div>
                <p style={{ fontWeight: 600, textAlign: 'left', color: 'var(--primary-gold)' }}>Co-Founder & Director</p>
                <p className="text-start text-muted">
                  Ms. Deeksha Asthana is the Co-Founder & Director of Majestic Landbase, a trusted real estate consultancy firm based in Gurugram. She has developed a deep understanding of the property market in Gurugram and Delhi NCR. Her expertise lies in residential and commercial properties, investment planning, market research, and client-focused real estate solutions. Through her leadership and market knowledge, she guides clients in making smart and profitable property decisions.
                </p>
                <p className="text-start text-muted">
                  Deeksha Asthana is widely recognized for her strong industry network and deep market insights. She specializes in identifying upcoming investment opportunities, securing access to premium developer inventory, and providing customized property solutions to clients. Throughout her professional journey, she has successfully handled multiple residential and commercial deals, building a strong reputation founded on trust, transparency, and professional commitment.
                </p>
              </div>            
            </div>
            <div className="col-md-6 col-sm-6 order-1 order-md-2" data-aos="fade-up" data-aos-delay="0">
              <img 
                src={img2}
                alt="Deeksha Asthana"
                className="img-fluid rounded shadow w-75 mx-auto d-block object-fit-cover" 
                style={{ height: '450px' }} 
              />
            </div>
          </div>
        </div>
      </section>

      <DynamicGallery />

      {/* Our Recognition Section */}
      <section className="recognition-section py-5 bg-light">
        <div className="container py-lg-4 text-center">
          <div className="mb-5" data-aos="fade-up">
            <h2 className="display-5 fw-bold text-dark">Our Recognition</h2>
            <div className="separator mx-auto mb-3" style={{ width: '80px', height: '4px', background: 'var(--primary-gold)' }}>&nbsp;</div>
            <p className="text-muted col-md-8 mx-auto">
              We are fully registered and certified real estate consultants, maintaining complete transparency and government compliance in all property dealings.
            </p>
          </div>

          <div className="row g-4 justify-content-center">
            {/* HARERA Card */}
            <div className="col-md-6 col-lg-5" data-aos="fade-up" data-aos-delay="100">
              <div className="card h-100 border-0 shadow-lg rounded-4 overflow-hidden hover-lift transition-all mx-auto" style={{ borderTop: '5px solid var(--rich-earth-brown)', background: '#ffffff', maxWidth: '420px' }}>
                <div className="card-body p-4 d-flex flex-column align-items-center text-center">
                  <div className="bg-light rounded-circle p-3 mb-4 d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px', color: 'var(--rich-earth-brown)', border: '2px solid rgba(138, 115, 86, 0.2)' }}>
                    <i className="fas fa-award fa-2x"></i>
                  </div>
                  <h5 className="fw-bold text-dark mb-2" style={{ fontSize: '1.2rem' }}>HRERA Registration</h5>
                  <p className="small fw-semibold text-uppercase text-muted letter-spacing-1 mb-3" style={{ fontSize: '0.75rem' }}>RERA No: HRERA-PKL-REA-2723-2024</p>
                  <p className="text-muted small flex-grow-1" style={{ lineHeight: '1.6', fontSize: '0.85rem' }}>
                    Officially registered under the Haryana Real Estate Regulatory Authority, ensuring professional execution, financial security, and standard regulatory compliance across the Gurugram property market.
                  </p>
                  {/* <a href={""} rel="noopener noreferrer" className="btn btn-gold w-100 py-2.5 mt-4 fw-bold shadow-sm d-flex align-items-center justify-content-center gap-2" style={{ fontSize: '0.85rem' }}>
                    <i className="fas fa-file-pdf fs-6"></i> View HRERA Certificate
                  </a> */}
                </div>
              </div>
            </div>

            {/* GST Card */}
            <div className="col-md-6 col-lg-5" data-aos="fade-up" data-aos-delay="200">
              <div className="card h-100 border-0 shadow-lg rounded-4 overflow-hidden hover-lift transition-all mx-auto" style={{ borderTop: '5px solid var(--rich-earth-brown)', background: '#ffffff', maxWidth: '420px' }}>
                <div className="card-body p-4 d-flex flex-column align-items-center text-center">
                  <div className="bg-light rounded-circle p-3 mb-4 d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px', color: 'var(--rich-earth-brown)', border: '2px solid rgba(138, 115, 86, 0.2)' }}>
                    <i className="fas fa-file-invoice-dollar fa-2x"></i>
                  </div>
                  <h5 className="fw-bold text-dark mb-2" style={{ fontSize: '1.2rem' }}>GST Registration</h5>
                  <p className="small fw-semibold text-uppercase text-muted letter-spacing-1 mb-3" style={{ fontSize: '0.75rem' }}>GSTIN: 06BQZPA6682E1ZG</p>
                  <p className="text-muted small flex-grow-1" style={{ lineHeight: '1.6', fontSize: '0.85rem' }}>
                    Fully certified and compliant with the Goods & Services Tax (GST) Network of India, validating transparent financial practices, authentic invoicing, and trusted corporate governance.
                  </p>
                  {/* <a href={""} rel="noopener noreferrer" className="btn btn-gold w-100 py-2.5 mt-4 fw-bold shadow-sm d-flex align-items-center justify-content-center gap-2" style={{ fontSize: '0.85rem' }}>
                    <i className="fas fa-file-pdf fs-6"></i> View GST Certificate
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Robin Pahuja */}
      {/* <section className="story-values py-5 bg-white">
        <div className="container py-lg-5">
          <div className="row g-4">
            <div className="col-md-6 col-sm-6" data-aos="fade-up" data-aos-delay="0">
              <img 
                src={img3} 
                alt="Robin Pahuja" 
                className="img-fluid rounded shadow w-75 mx-auto d-block object-fit-cover" 
                style={{ height: '450px' }} 
              />
            </div>
            <div className="col-md-6 col-sm-6 my-auto text-start ps-md-5" data-aos="fade-up" data-aos-delay="100">
              <div className="mb-5" data-aos="fade-up">
                <h2 className="display-5 fw-bold text-dark text-start">Robin Pahuja</h2>
                <div className="separator mb-3" style={{ width: '80px', height: '4px', background: 'var(--primary-gold)' }}>&nbsp;</div>
                <p style={{ fontWeight: 600, textAlign: 'left', color: 'var(--primary-gold)' }}>Co-Founder & Managing - Director</p>
                <p className="text-start text-muted">Mr. Robin Pahuja, Co-founder & Director of ElitePro Infra, is a visionary entrepreneur who transitioned from a successful business background into diverse sectors like agriculture and coal mining, showcasing strong operational and execution expertise.</p>
                <p className="text-start text-muted">In real estate, he played a key role in rebranding Elite Landbase into ElitePro Infra, introducing a customer-first approach focused on enhanced experience and reliability. With his expansion into the Dubai market, he continues to drive growth, innovation, and transformation, aiming to elevate industry standards and deliver exceptional value.</p>
              </div>            
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default TeamMembers;
