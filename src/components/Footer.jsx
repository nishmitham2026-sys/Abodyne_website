import React from 'react';

export default function Footer() {
  const handleNavClick = (id) => {
    const element = document.getElementById(id);
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
    <footer className="border-top border-secondary border-opacity-10 py-5 bg-dark" style={{ backgroundColor: '#090d16 !important' }}>
      <div className="container px-4">
        <div className="row g-4 align-items-center">
          <div className="col-md-4 text-center text-md-start">
            <span className="font-josefin fs-4 fw-bold" style={{ color: 'var(--primary)', letterSpacing: '1px' }}>ABODYNE</span>
            <p className="text-secondary small mt-2 mb-0" style={{ maxWidth: '280px' }}>
              Advanced diagnostic solutions, integrating clinical readings and real-time telehealth streams.
            </p>
          </div>
          <div className="col-md-4 text-center">
            <div className="d-flex justify-content-center gap-3">
              <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} className="text-secondary text-decoration-none small hover-text-primary">Home</a>
              <span className="text-secondary text-opacity-25">|</span>
              <a href="#products" onClick={(e) => { e.preventDefault(); handleNavClick('products'); }} className="text-secondary text-decoration-none small hover-text-primary">Products</a>
              <span className="text-secondary text-opacity-25">|</span>
              <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }} className="text-secondary text-decoration-none small hover-text-primary">Contact</a>
            </div>
          </div>
          <div className="col-md-4 text-center text-md-end">
            <p className="text-secondary small mb-0">
              &copy; {new Date().getFullYear()} Abodyne. All rights reserved.
            </p>
            <p className="text-secondary text-opacity-50 small mt-1" style={{ fontSize: '0.75rem' }}>
              Original content published in &copy; 2017 Abodyne.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
