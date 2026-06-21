import React from 'react';
import skylineImg from '../../assets/images/skyline.html?url';

const FAQSection = () => {
    const faqs = [
        {
            id: "collapse1",
            headingId: "heading1",
            question: "Why should I invest in real estate now?",
            answer: "Real estate markets are currently showing strong growth trends with high appreciation potential. With stabilizing interest rates and infrastructure developments, now is an ideal time for long-term wealth creation."
        },
        {
            id: "collapse2",
            headingId: "heading2",
            question: "How does majestic landbase help with NRI investments?",
            answer: "We offer end-to-end services for NRIs including property identification, legal due diligence, Power of Attorney assistance, home loan facilitation, and post-purchase property management."
        },
        {
            id: "collapse3",
            headingId: "heading3",
            question: "Do you deal in commercial properties?",
            answer: "Yes, we specialize in premium commercial properties including Grade-A office spaces, retail shops, and high-street avenues with rental returns and capital appreciation potential."
        },
        {
            id: "collapse4",
            headingId: "heading4",
            question: "What is the RERA status of your projects?",
            answer: "We only partner with reputed developers and list projects that are fully RERA compliant, ensuring transparency and security for your investment."
        }
    ];

    return (
        <section id="faq" className="position-relative text-white py-5"
            style={{ backgroundImage: `url(${skylineImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
            <div className="position-absolute top-0 start-0 w-100 h-100" style={{ background: 'rgba(30, 22, 17, 0.85)' }}></div>
            <div className="container position-relative z-1">
                <div className="section-title text-center" data-aos="fade-up">
                    <h2 className="text-white">Frequently Asked Questions</h2>
                    <div className="separator mx-auto" style={{ width: '60px', height: '3px', background: 'var(--primary-gold)' }}></div>
                    <p className="text-white-50 mt-3">Common queries about real estate investment</p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-8" data-aos="fade-up" data-aos-delay="100">
                        <div className="accordion accordion-flush" id="accordionFAQ">
                            {faqs.map((faq, index) => (
                                <div className="accordion-item bg-transparent border-bottom border-secondary" key={index}>
                                    <h2 className="accordion-header" id={faq.headingId}>
                                        <button className="accordion-button collapsed bg-transparent text-white shadow-none"
                                            type="button" data-bs-toggle="collapse" data-bs-target={`#${faq.id}`}
                                            aria-expanded="false" aria-controls={faq.id}>
                                            {faq.question}
                                        </button>
                                    </h2>
                                    <div id={faq.id} className="accordion-collapse collapse" aria-labelledby={faq.headingId}
                                        data-bs-parent="#accordionFAQ">
                                        <div className="accordion-body text-white-50">
                                            {faq.answer}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
