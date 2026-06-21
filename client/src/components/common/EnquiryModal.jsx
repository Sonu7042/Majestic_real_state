import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const EnquiryModal = ({ isOpen, onClose, variant = '' }) => {
  const [enquiryType, setEnquiryType] = useState('general')
  const [isSending, setIsSending] = useState(false)
  const form = useRef(null)

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.body.classList.add('enquiry-modal-open')
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.classList.remove('enquiry-modal-open')
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  const sendEmail = (event) => {
    event.preventDefault()
    setIsSending(true)

    emailjs
      .sendForm(
        'service_dd8gt2f',
        'template_fld37mu',
        form.current,
        'WaMt-T544Nf-Uv_ua'
      )
      .then(
        () => {
          alert('Message sent successfully!')
          form.current.reset()
          setEnquiryType('general')
          onClose()
        },
        (error) => {
          console.log(error.text)
          alert('Failed to send message.')
        }
      )
      .finally(() => {
        setIsSending(false)
      })
  }

  if (!isOpen) return null

  return (
    <div
      className={`enquiry-modal ${variant === 'compact' ? 'enquiry-modal-compact' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="enquiry-modal-title"
    >
      <button className="enquiry-modal-backdrop" type="button" aria-label="Close enquiry form" onClick={onClose}></button>

      <div className="enquiry-modal-panel scrollbar-hide">
        <div className="enquiry-modal-header">
          <div>
            <p className="enquiry-modal-eyebrow mb-1">Majestic Landbase</p>
            <h2 id="enquiry-modal-title" className="mb-0">Submit Enquiry</h2>
          </div>

          <button type="button" className="enquiry-modal-close" aria-label="Close enquiry form" onClick={onClose}>
            <i className="fas fa-xmark"></i>
          </button>
        </div>

        <form ref={form} onSubmit={sendEmail} className="enquiry-modal-form">
          <input type="hidden" name="to_name" value="Majestic Landbase" />
          <input type="hidden" name="to_email" value="ashish@majesticlandbase.com" />

          <label className="form-label text-muted small text-uppercase fw-bold">
            I am interested in:
            <select
              className="form-select form-select-lg mt-2"
              value={enquiryType}
              onChange={(event) => setEnquiryType(event.target.value)}
              name="enquiry_type"
            >
              <option value="general">General Enquiry</option>
              <option value="buy">Buying / Investing</option>
              <option value="sell">Selling Property</option>
              <option value="lease">Leasing (Commercial/Retail)</option>
              <option value="career">Careers & Jobs</option>
              <option value="partner">Channel Partner / Associate</option>
            </select>
          </label>

          <div className="row g-3">
            <div className="col-md-6">
              <input type="text" name="from_name" className="form-control form-control-lg bg-light border-0" placeholder="First Name *" required />
            </div>

            <div className="col-md-6">
              <input type="text" name="last_name" className="form-control form-control-lg bg-light border-0" placeholder="Last Name *" required />
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
              <input type="email" name="from_email" className="form-control form-control-lg bg-light border-0" placeholder="Email Address *" required />
            </div>
          </div>

          <textarea
            name="from_message"
            className="form-control form-control-lg bg-light border-0 enquiry-message-field"
            rows="4"
            placeholder="Your Message / Additional Details"
          ></textarea>

          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="globalEnquiryConsent" required />
            <label className="form-check-label small text-muted ms-2" htmlFor="globalEnquiryConsent">
              I authorize Majestic Landbase to contact me via Email, SMS, or Call.
            </label>
          </div>

          <button type="submit" className="btn btn-gold btn-lg w-100 py-3 fw-bold" disabled={isSending}>
            {isSending ? 'Sending...' : 'Submit Enquiry'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default EnquiryModal
