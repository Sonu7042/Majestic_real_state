import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [enquiryType, setEnquiryType] = useState('general');
    const form = useRef();

    const handleEnquiryChange = (e) => {
        setEnquiryType(e.target.value);
    };

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
        <div className="contact-page">
            {/* Hero Section */}
            <header
                className="contact-hero d-flex flex-column justify-content-center align-items-center"
                style={{
                    height: '50vh',
                    marginTop: '80px',
                    background:
                        'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop") center/cover no-repeat'
                }}
            >
                <div className="container text-center text-white" data-aos="fade-up">
                    <h1 className="display-4 fw-bold mb-3">Contact Us</h1>

                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item">
                                <Link
                                    to="/"
                                    className="text-white text-decoration-none hover-gold"
                                >
                                    Home
                                </Link>
                            </li>

                            <li
                                className="breadcrumb-item active text-gold"
                                aria-current="page"
                            >
                                Contact Us
                            </li>
                        </ol>
                    </nav>
                </div>
            </header>

            {/* Contact Info Cards */}
            <section className="bg-white pb-5">
                <div className="container">
                    <div
                        className="row g-4 justify-content-center"
                        style={{
                            marginTop: '-80px',
                            position: 'relative',
                            zIndex: 2
                        }}
                    >
                        {/* Call Us Card */}
                        <div className="col-6 col-md-6 col-lg-3" data-aos="fade-up">
                            <div className="contact-card bg-white shadow-sm p-3 p-md-4 text-center rounded-3 h-100 border-bottom border-3 border-gold transition-all hover-lift">
                                <div className="contact-icon mb-2 mb-md-3">
                                    <i className="fas fa-phone fs-4 fs-md-1 text-gold"></i>
                                </div>
                                <h6 className="fw-bold mb-1 mb-md-2" style={{ fontSize: '0.95rem' }}>Call Us</h6>
                                <p className="text-muted mb-0" style={{ fontSize: '0.78rem', wordBreak: 'break-all' }}>
                                    <a href="tel:+919560314071" className="text-decoration-none text-muted hover-gold">+91 95603 14071</a>
                                </p>
                            </div>
                        </div>

                        {/* Email Us Card */}
                        <div
                            className="col-6 col-md-6 col-lg-3"
                            data-aos="fade-up"
                            data-aos-delay="100"
                        >
                            <div className="contact-card bg-white shadow-sm p-3 p-md-4 text-center rounded-3 h-100 border-bottom border-3 border-gold transition-all hover-lift">
                                <div className="contact-icon mb-2 mb-md-3">
                                    <i className="fas fa-envelope fs-4 fs-md-1 text-gold"></i>
                                </div>
                                <h6 className="fw-bold mb-1 mb-md-2" style={{ fontSize: '0.95rem' }}>Email Us</h6>
                                <p className="text-muted mb-0" style={{ fontSize: '0.75rem', wordBreak: 'break-all' }}>
                                    <a href="mailto:ashish@majesticlandbase.com" className="text-decoration-none text-muted hover-gold">ashish@majesticlandbase.com</a>
                                </p>
                            </div>
                        </div>

                        {/* Visit Website Card */}
                        {/* <div
                            className="col-6 col-md-6 col-lg-3"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            <div className="contact-card bg-white shadow-sm p-3 p-md-4 text-center rounded-3 h-100 border-bottom border-3 border-gold transition-all hover-lift">
                                <div className="contact-icon mb-2 mb-md-3">
                                    <i className="fas fa-globe fs-4 fs-md-1 text-gold"></i>
                                </div>
                                <h6 className="fw-bold mb-1 mb-md-2" style={{ fontSize: '0.95rem' }}>Visit Website</h6>
                                <p className="text-muted mb-0" style={{ fontSize: '0.75rem', wordBreak: 'break-all' }}>
                                    <a href="https://www.majesticlandbase.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-muted hover-gold">www.majesticlandbase.com</a>
                                </p>
                            </div>
                        </div> */}

                        {/* Head Office Card */}
                        <div
                            className="col-6 col-md-6 col-lg-3"
                            data-aos="fade-up"
                            data-aos-delay="300"
                        >
                            <div className="contact-card bg-white shadow-sm p-3 p-md-4 text-center rounded-3 h-100 border-bottom border-3 border-gold transition-all hover-lift">
                                <div className="contact-icon mb-2 mb-md-3">
                                    <i className="fas fa-map-marker-alt fs-4 fs-md-1 text-gold"></i>
                                </div>
                                <h6 className="fw-bold mb-1 mb-md-2" style={{ fontSize: '0.95rem' }}>Head Office</h6>
                                <p className="text-muted mb-0 small" style={{ fontSize: '0.72rem', lineHeight: '1.4' }}>
                                    Tulip Lemon , Sector 69, Gurgaon
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="bg-light py-5">
                <div className="container">
                    <div className="section-title text-center mb-5" data-aos="fade-up">
                        <h2 className="display-6 fw-bold">
                            How Can We Help You?
                        </h2>

                        <div
                            className="separator mx-auto mb-4"
                            style={{
                                width: '60px',
                                height: '3px',
                                background: 'var(--primary-gold)'
                            }}
                        ></div>

                        <p className="text-muted">
                            Select your enquiry type below to get started
                        </p>
                    </div>

                    <div className="row g-5 align-items-stretch">
                        {/* Dynamic Form */}
                        <div className="col-lg-7" data-aos="fade-right">
                            <div className="form-container bg-white p-4 p-md-5 rounded-4 shadow-sm h-100">
                                <form ref={form} onSubmit={sendEmail}>

                                    {/* Hidden EmailJS Fields */}
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

                                    <div className="mb-4">
                                        <label className="form-label text-muted small text-uppercase fw-bold">
                                            I am interested in:
                                        </label>

                                        <select
                                            className="form-select form-select-lg mb-3"
                                            value={enquiryType}
                                            onChange={handleEnquiryChange}
                                            name="enquiry_type"
                                        >
                                            <option value="general">
                                                General Enquiry
                                            </option>

                                            <option value="buy">
                                                Buying / Investing
                                            </option>

                                            <option value="sell">
                                                Selling Property
                                            </option>

                                            <option value="lease">
                                                Leasing (Commercial/Retail)
                                            </option>

                                            <option value="career">
                                                Careers & Jobs
                                            </option>

                                            <option value="partner">
                                                Channel Partner / Associate
                                            </option>
                                        </select>
                                    </div>

                                    <div className="row g-3 mb-4">
                                        <div className="col-md-6">
                                            <input
                                                type="text"
                                                name="from_name"
                                                className="form-control form-control-lg bg-light border-0"
                                                placeholder="First Name *"
                                                required
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <input
                                                type="text"
                                                name="last_name"
                                                className="form-control form-control-lg bg-light border-0"
                                                placeholder="Last Name *"
                                                required
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <input
                                                type="tel"
                                                name="from_number"
                                                className="form-control form-control-lg bg-light border-0"
                                                placeholder="Mobile Number *"
                                                inputMode="numeric"
                                                pattern="[0-9]{10}"
                                                minLength="10"
                                                maxLength="10"
                                                title="Please enter a 10 digit mobile number"
                                                required
                                            />
                                        </div>

                                        <div className="col-md-6">
                                            <input
                                                type="email"
                                                name="from_email"
                                                className="form-control form-control-lg bg-light border-0"
                                                placeholder="Email Address *"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="col-12 mb-4">
                                        <textarea
                                            name="from_message"
                                            className="form-control form-control-lg bg-light border-0"
                                            rows="4"
                                            placeholder="Your Message / Additional Details"
                                        ></textarea>
                                    </div>

                                    <div className="form-check mb-4 mt-2">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="flexCheckDefault"
                                            required
                                        />

                                        <label
                                            className="form-check-label small text-muted ms-2"
                                            htmlFor="flexCheckDefault"
                                        >
                                            I authorize Majestic Landbase to
                                            contact me via Email, SMS, or Call.
                                        </label>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-gold btn-lg w-100 py-3 fw-bold"
                                    >
                                        Submit Enquiry
                                    </button>
                                </form>
                            </div>
                        </div>

                        {/* Map Section */}
                        <div className="col-lg-5" data-aos="fade-left">
                            <div
                                className="map-container rounded-4 overflow-hidden shadow-sm h-100"
                                style={{ minHeight: '400px' }}
                            >
                                <iframe
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        border: '0'
                                    }}
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59301.80939253085!2d76.95619874863283!3d28.393654000000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d230baa901a6f%3A0x8ddc88cb29feea61!2sTulip%20Lemon%20Tower%20A-3!5e1!3m2!1sen!2sin!4v1779206815728!5m2!1sen!2sin"
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
