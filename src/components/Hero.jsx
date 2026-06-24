import React from 'react';
import Swal from 'sweetalert2';

export default function Hero() {
  const handleRequestCatalog = () => {
    Swal.fire({
      title: 'Request Device Catalog',
      text: 'Enter your email address to receive our product specifications catalogue.',
      input: 'email',
      inputPlaceholder: 'name@company.com',
      showCancelButton: true,
      confirmButtonText: 'Send Catalogue',
      cancelButtonText: 'Cancel',
      customClass: {
        popup: 'swal2-popup-custom',
        title: 'swal2-title-custom',
        htmlContainer: 'swal2-html-custom',
        confirmButton: 'swal2-confirm-custom',
        cancelButton: 'swal2-cancel-custom'
      },
      buttonsStyling: false,
      inputValidator: (value) => {
        if (!value) {
          return 'Please enter your email address!';
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          return 'Please enter a valid email address!';
        }
      }
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Catalog Sent!',
          text: `We have sent the PDF brochure and catalog to ${result.value}.`,
          customClass: {
            popup: 'swal2-popup-custom',
            title: 'swal2-title-custom',
            htmlContainer: 'swal2-html-custom',
            confirmButton: 'swal2-confirm-custom'
          },
          buttonsStyling: false
        });
      }
    });
  };

  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="hero-section text-white d-flex align-items-center" id="home">
      <div className="glow-orb"></div>
      <div className="container px-4">
        <div className="row align-items-center">
          <div className="col-lg-7 text-start">
            <span className="badge bg-danger bg-opacity-25 text-danger border border-danger border-opacity-50 px-3 py-2 rounded-pill mb-3 font-josefin" style={{ color: 'var(--primary) !important' }}>
              <i className="bi bi-shield-check me-2"></i>ISO 13485 Certified Medical Devices
            </span>
            <h1 className="display-4 font-josefin fw-bold mb-3">
              Advanced Clinical Diagnostics, <span className="text-gradient">Anywhere</span>
            </h1>
            <p className="lead text-secondary mb-4 fs-5" style={{ maxWidth: '600px', lineHeight: '1.7' }}>
              Abodyne manufactures and integrates professional-grade diagnostic medical scopes and multi-parameter health monitors. Record, stream, and archive high-definition clinical readings directly to electronic health records.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <button onClick={scrollToProducts} className="btn btn-primary-custom d-flex align-items-center gap-2">
                Explore Products <i className="bi bi-arrow-right"></i>
              </button>
              <button onClick={handleRequestCatalog} className="btn btn-outline-custom d-flex align-items-center gap-2">
                <i className="bi bi-file-earmark-pdf"></i> Request Catalog
              </button>
            </div>
          </div>
          <div className="col-lg-5 mt-5 mt-lg-0">
            {/* Visual representation card */}
            <div className="p-4 rounded-4" style={{ background: 'linear-gradient(135deg, rgba(20,27,43,0.7) 0%, rgba(11,15,25,0.7) 100%)', border: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}>
              <div className="d-flex align-items-center mb-4">
                <div className="bg-danger bg-opacity-10 p-3 rounded-3 me-3">
                  <i className="bi bi-activity text-danger fs-3" style={{ color: 'var(--primary)' }}></i>
                </div>
                <div>
                  <h5 className="font-josefin fw-bold mb-1">Real-Time Diagnostics</h5>
                  <p className="text-secondary small mb-0">Multi-parameter stream capability</p>
                </div>
              </div>
              <div className="mb-3">
                <div className="d-flex justify-content-between text-secondary small mb-1">
                  <span>Glucose Meter Synced</span>
                  <span>100%</span>
                </div>
                <div className="progress bg-dark" style={{ height: '6px' }}>
                  <div className="progress-bar bg-danger" role="progressbar" style={{ width: '100%', backgroundColor: 'var(--primary)' }}></div>
                </div>
              </div>
              <div className="mb-3">
                <div className="d-flex justify-content-between text-secondary small mb-1">
                  <span>ECG Stream Stability</span>
                  <span>98.7%</span>
                </div>
                <div className="progress bg-dark" style={{ height: '6px' }}>
                  <div className="progress-bar bg-info" role="progressbar" style={{ width: '98.7%' }}></div>
                </div>
              </div>
              <div>
                <div className="d-flex justify-content-between text-secondary small mb-1">
                  <span>Video Scope Resolution</span>
                  <span>1080p HD</span>
                </div>
                <div className="progress bg-dark" style={{ height: '6px' }}>
                  <div className="progress-bar bg-success" role="progressbar" style={{ width: '90%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
