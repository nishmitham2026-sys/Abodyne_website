import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Simple active link detection
      const sections = ['home', 'products', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveLink(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setActiveLink(id);
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
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top navbar-custom ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container px-4">
        <a className="navbar-brand font-josefin d-flex align-items-center" href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
          <span style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '1.5px' }}>ABODYNE</span>
        </a>
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarContent" 
          aria-controls="navbarContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <a 
                className={`nav-link nav-link-custom ${activeLink === 'home' ? 'active' : ''}`} 
                href="#home"
                onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link nav-link-custom ${activeLink === 'products' ? 'active' : ''}`} 
                href="#products"
                onClick={(e) => { e.preventDefault(); handleNavClick('products'); }}
              >
                Products
              </a>
            </li>
            <li className="nav-item">
              <a 
                className={`nav-link nav-link-custom ${activeLink === 'contact' ? 'active' : ''}`} 
                href="#contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}
              >
                Contact
              </a>
            </li>
            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <button 
                className="btn btn-primary-custom py-2 px-4"
                onClick={() => handleNavClick('contact')}
              >
                Get In Touch
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
