import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_dd8gt2f',
                'template_fld37mu',
                form.current,
                'WaMt-T544Nf-Uv_ua'
            )
            .then(
                () => {
                    alert('Message sent successfully!');
                    form.current.reset();
                },
                (error) => {
                    console.log(error.text);
                    alert('Failed to send message.');
                }
            );
    };

    return (
        <section id="contact" className="position-relative py-5 overflow-hidden"
            style={{ background: 'linear-gradient(135deg, var(--espresso-dark) 0%, var(--deep-espresso) 100%)', color: 'white' }}>
            {/* Background Elements */}
            <div className="position-absolute top-0 end-0 p-5 opacity-10 d-none d-lg-block">
                <i className="far fa-building fa-10x text-white"></i>
            </div>

            <div className="container position-relative z-1 py-4">
                <div className="row align-items-stretch g-0 rounded-4 overflow-hidden shadow-lg"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}>

                    {/* Contact Info Side */}
                    <div className="col-lg-5 p-5 position-relative bg-espresso overflow-hidden">
                        <div className="position-absolute top-0 start-0 w-100 h-100"
                            style={{ background: 'linear-gradient(135deg, var(--deep-espresso), var(--rich-earth-brown))' }}></div>
                        <div className="position-absolute bottom-0 end-0 opacity-25" style={{ transform: 'translate(20%, 20%)' }}>
                            <i className="fas fa-comments fa-10x text-white"></i>
                        </div>

                        <div className="position-relative z-1 h-100 d-flex flex-column justify-content-between text-white">
                            <div>
                                <h3 className="fw-bold mb-4 text-white">Get in Touch </h3>
                                <p className="mb-5 opacity-90">Ready to start your real estate journey? Our team of experts is
                                    here to guide you through every step.</p>


                                <div className="d-flex align-items-start mb-4">
                                    <div className="bg-white text-deep-espresso rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 shadow-sm"
                                        style={{ width: '45px', height: '45px' }}>
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    <div className="ms-3">
                                        <h6 className="mb-1 fw-bold text-white">Call Us</h6>
                                        <p className="mb-0 small opacity-90">
                                            <a href="tel:+919560314071" className="text-white text-decoration-none">+91 95603 14071</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="d-flex align-items-start mb-4">
                                    <div className="bg-white text-deep-espresso rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 shadow-sm"
                                        style={{ width: '45px', height: '45px' }}>
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div className="ms-3">
                                        <h6 className="mb-1 fw-bold text-white">Email Us</h6>
                                        <p className="mb-0 small opacity-90">
                                            <a href="mailto:ashish@majesticlandbase.com" className="text-white text-decoration-none">ashish@majesticlandbase.com</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="d-flex align-items-start">
                                    <div className="bg-white text-deep-espresso rounded-circle d-flex align-items-center justify-content-center flex-shrink-0 shadow-sm"
                                        style={{ width: '45px', height: '45px' }}>
                                        <i className="fas fa-map-marker-alt"></i>
                                    </div>
                                    <div className="ms-3">
                                        <h6 className="mb-1 fw-bold text-white">Visit Us</h6>
                                        <p className="mb-0 small opacity-90">
                                            Tulip Lemon , Sector 69, Gurgaon
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-5 pt-3 border-top border-white-50">
                                <h6 className="mb-3 small fw-bold text-uppercase letter-spacing-2">Follow Us</h6>
                                <div className="d-flex gap-2">
                                    <a href="https://www.facebook.com/share/1B381q2rEr/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center border-secondary text-white hover-gold" style={{ width: '40px', height: '40px', transition: 'all 0.3s' }}>
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                    <a href="https://www.instagram.com/majesticlandbase" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center border-secondary text-white hover-gold" style={{ width: '40px', height: '40px', transition: 'all 0.3s' }}>
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    {/* <a href="https://www.linkedin.com/in/majestic-landbase1/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center border-secondary text-white hover-gold" style={{ width: '40px', height: '40px', transition: 'all 0.3s' }}> */}
                                    <a href="https://www.linkedin.com/company/majestic-landbase1/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center border-secondary text-white hover-gold" style={{ width: '40px', height: '40px', transition: 'all 0.3s' }}>
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                    {/* <a href="#" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light rounded-circle d-flex align-items-center justify-content-center border-secondary text-white hover-gold" style={{ width: '40px', height: '40px', transition: 'all 0.3s' }}>
                                        <i className="fab fa-youtube"></i>
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form Side */}
                    <div className="col-lg-7 p-5 bg-white">
                        <h3 className="fw-bold mb-2 text-dark">Send us a Message</h3>
                        <p className="text-muted mb-4">Fill out the form below and we'll get back to you shortly.</p>

                        <form ref={form} onSubmit={sendEmail}>
                            <input
                                type="hidden"
                                name="to_name"
                                value="Majestic Landbase"
                            />

                            <input
                                type="hidden"
                                name="to_email"
                                value="ashish@majesticlandbase.com"
                            />

                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="text" name="from_name" className="form-control bg-light border-0" id="name" placeholder="Your Name" required />
                                        <label htmlFor="name" className="text-muted">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="email" name="from_email" className="form-control bg-light border-0" id="email" placeholder="Your Email" required />
                                        <label htmlFor="email" className="text-muted">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input
                                            type="tel"
                                            name="from_number"
                                            className="form-control bg-light border-0"
                                            id="phone"
                                            placeholder="Phone Number"
                                            inputMode="numeric"
                                            pattern="[0-9]{10}"
                                            minLength="10"
                                            maxLength="10"
                                            title="Please enter a 10 digit mobile number"
                                            required
                                        />
                                        <label htmlFor="phone" className="text-muted">Phone Number</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <select name="enquiry_type" className="form-select bg-light border-0" id="interest" aria-label="Interest" defaultValue="" required>
                                            <option value="" disabled>Select Interest</option>
                                            <option value="Residential">Residential</option>
                                            <option value="Commercial">Commercial</option>
                                            <option value="Investment">Investment</option>
                                            <option value="Consulting">Consulting</option>
                                        </select>
                                        <label htmlFor="interest" className="text-muted">Interested In</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea name="from_message" className="form-control bg-light border-0" placeholder="Leave a message here"
                                            id="message" style={{ height: '120px' }}></textarea>
                                        <label htmlFor="message" className="text-muted">Your Message</label>
                                    </div>
                                </div>
                                <div className="col-12 mt-4">
                                    <button type="submit" className="btn btn-gold w-100 py-3 fw-bold shadow-sm">
                                        Send Enquiry <i className="fas fa-paper-plane ms-2"></i>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
