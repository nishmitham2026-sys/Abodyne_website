import React, { useState } from 'react';
import Swal from 'sweetalert2';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    // Field Validations
    if (!name.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Please enter your full name.',
        customClass: {
          popup: 'swal2-popup-custom',
          title: 'swal2-title-custom',
          htmlContainer: 'swal2-html-custom',
          confirmButton: 'swal2-confirm-custom'
        },
        buttonsStyling: false
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Please enter a valid email address.',
        customClass: {
          popup: 'swal2-popup-custom',
          title: 'swal2-title-custom',
          htmlContainer: 'swal2-html-custom',
          confirmButton: 'swal2-confirm-custom'
        },
        buttonsStyling: false
      });
      return;
    }

    if (!subject.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Please select or write a subject.',
        customClass: {
          popup: 'swal2-popup-custom',
          title: 'swal2-title-custom',
          htmlContainer: 'swal2-html-custom',
          confirmButton: 'swal2-confirm-custom'
        },
        buttonsStyling: false
      });
      return;
    }

    if (!message.trim() || message.trim().length < 10) {
      Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Please write a message (at least 10 characters).',
        customClass: {
          popup: 'swal2-popup-custom',
          title: 'swal2-title-custom',
          htmlContainer: 'swal2-html-custom',
          confirmButton: 'swal2-confirm-custom'
        },
        buttonsStyling: false
      });
      return;
    }

    // Success Submission popup
    Swal.fire({
      icon: 'success',
      title: 'Message Sent!',
      text: 'Thank you for reaching out. An Abodyne support representative will contact you shortly.',
      customClass: {
        popup: 'swal2-popup-custom',
        title: 'swal2-title-custom',
        htmlContainer: 'swal2-html-custom',
        confirmButton: 'swal2-confirm-custom'
      },
      buttonsStyling: false
    }).then(() => {
      // Clear form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    });
  };

  return (
    <section className="py-5" id="contact" style={{ backgroundColor: 'rgba(11, 15, 25, 0.5)' }}>
      <div className="container px-4">
        <div className="section-title text-center mb-5">
          <span className="text-danger text-uppercase fw-bold tracking-wider small" style={{ color: 'var(--primary) !important' }}>Get In Touch</span>
          <h2 className="text-white mt-1">Let's Connect</h2>
          <p className="text-secondary mx-auto" style={{ maxWidth: '600px' }}>
            We'd love to hear from you. Send us an email directly or submit the inquiry form below, and we will get back to you as soon as possible.
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          {/* Info Card */}
          <div className="col-lg-4 text-start">
            <div className="contact-info-card d-flex flex-column justify-content-between">
              <div>
                <h4 className="font-josefin fw-bold text-white mb-4">Abodyne Global Support</h4>
                <p className="text-secondary mb-4">
                  For inquiries regarding device features, custom telemetry protocol access, SDK kits, and bulk clinical installations, reach out to our regional channels.
                </p>
                
                <div className="d-flex align-items-center mb-4">
                  <div className="bg-danger bg-opacity-10 p-3 rounded-3 me-3 text-danger" style={{ color: 'var(--primary) !important' }}>
                    <i className="bi bi-envelope-fill fs-4"></i>
                  </div>
                  <div>
                    <div className="text-secondary small">General Information</div>
                    <a href="mailto:info@abodyne.net" className="text-decoration-none text-white fw-bold" style={{ transition: 'color 0.2s' }}>
                      info@abodyne.net
                    </a>
                  </div>
                </div>

                <div className="d-flex align-items-center mb-4">
                  <div className="bg-danger bg-opacity-10 p-3 rounded-3 me-3 text-danger" style={{ color: 'var(--primary) !important' }}>
                    <i className="bi bi-cart-fill fs-4"></i>
                  </div>
                  <div>
                    <div className="text-secondary small">Sales & Procurements</div>
                    <a href="mailto:sales@abodyne.net" className="text-decoration-none text-white fw-bold">
                      sales@abodyne.net
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-top border-secondary border-opacity-25 pt-4 mt-2">
                <span className="text-secondary small">Diagnostic Devices Compliance</span>
                <div className="d-flex gap-3 mt-2 text-secondary fs-4">
                  <i className="bi bi-shield-check" title="HIPAA Compliant"></i>
                  <i className="bi bi-activity" title="FDA/CE Specifications Ready"></i>
                  <i className="bi bi-lock" title="AES 256 Stream Encryption"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="col-lg-6">
            <div className="contact-form-card">
              <h4 className="font-josefin fw-bold text-white mb-4 text-start">Inquiry Form</h4>
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3 text-start">
                  <label htmlFor="name" className="form-label text-secondary small">Full Name</label>
                  <input 
                    type="text" 
                    className="form-control form-control-custom" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name" 
                  />
                </div>

                <div className="mb-3 text-start">
                  <label htmlFor="email" className="form-label text-secondary small">Email Address</label>
                  <input 
                    type="email" 
                    className="form-control form-control-custom" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com" 
                  />
                </div>

                <div className="mb-3 text-start">
                  <label htmlFor="subject" className="form-label text-secondary small">Subject</label>
                  <select 
                    className="form-select form-control-custom" 
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="">Select a topic</option>
                    <option value="Sales Inquiry">Sales & Procurements</option>
                    <option value="Technical Support">Technical & SDK Support</option>
                    <option value="Partnership">Partnerships & Clinical Trials</option>
                    <option value="Other">Other Issues</option>
                  </select>
                </div>

                <div className="mb-4 text-start">
                  <label htmlFor="message" className="form-label text-secondary small">Message</label>
                  <textarea 
                    className="form-control form-control-custom" 
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we assist you?"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary-custom w-100 py-3 d-flex justify-content-center align-items-center gap-2">
                  <i className="bi bi-send-fill"></i> Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
