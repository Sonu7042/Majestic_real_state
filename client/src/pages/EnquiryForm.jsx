import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

const EnquiryForm = () => {
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
                <div className="container text-center text-white">
                    <h1 className="display-4 fw-bold mb-3">
                        Contact Us
                    </h1>

                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb justify-content-center mb-0">
                            <li className="breadcrumb-item">
                                <Link
                                    to="/"
                                    className="text-white text-decoration-none"
                                >
                                    Home
                                </Link>
                            </li>

                            <li
                                className="breadcrumb-item active text-warning"
                                aria-current="page"
                            >
                                Contact Us
                            </li>
                        </ol>
                    </nav>
                </div>
            </header>

            {/* Contact Form Section */}
            <section className="bg-light py-5">
                <div className="container">

                    <div className="text-center mb-5">
                        <h2 className="display-6 fw-bold">
                            How Can We Help You?
                        </h2>

                        <div
                            className="mx-auto mb-4"
                            style={{
                                width: '70px',
                                height: '3px',
                                background: '#d4af37'
                            }}
                        ></div>

                        <p className="text-muted">
                            Select your enquiry type below to get started
                        </p>
                    </div>

                    <div className="row justify-content-center">

                        <div className="col-lg-7 col-md-10">

                            <div className="form-container bg-white p-4 p-md-5 rounded-4 shadow">

                                <form ref={form} onSubmit={sendEmail}>

                                    {/* Hidden Fields */}
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

                                    {/* Enquiry Type */}
                                    <div className="mb-4">
                                        <label className="form-label text-muted small text-uppercase fw-bold">
                                            I am interested in:
                                        </label>

                                        <select
                                            className="form-select form-select-lg"
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

                                    {/* Inputs */}
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
                                                pattern="[0-9]{10}"
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

                                    {/* Message */}
                                    <div className="mb-4">
                                        <textarea
                                            name="from_message"
                                            className="form-control form-control-lg bg-light border-0"
                                            rows="5"
                                            placeholder="Your Message / Additional Details"
                                        ></textarea>
                                    </div>

                                    {/* Checkbox */}
                                    <div className="form-check mb-4">
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

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        className="btn btn-warning btn-lg w-100 py-3 fw-bold"
                                    >
                                        Submit Enquiry
                                    </button>

                                </form>
                            </div>

                        </div>

                    </div>

                </div>
            </section>

        </div>
    );
};

export default EnquiryForm;
