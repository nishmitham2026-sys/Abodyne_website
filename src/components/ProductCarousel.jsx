import React from 'react';

const carouselItems = [
  {
    image: 'https://abodyne.net/img/MPM500N.jpg',
    title: 'Abodyne MPM 500',
    description: 'Multi-Parameter Patient Diagnostic Monitor'
  },
  {
    image: 'https://abodyne.net/img/Otoscope.jpg',
    title: 'Otoscope AE200',
    description: 'Digital Inner Ear Examination & High-Resolution Imaging'
  },
  {
    image: 'https://abodyne.net/img/Insta.jpg',
    title: 'Stethoscope Adapter',
    description: 'Acoustic Coupler for Low-Intensity Sound Amplification'
  },
  {
    image: 'https://abodyne.net/img/DermascopeN.jpg',
    title: 'Dermascope AE100',
    description: 'Advanced Non-invasive Skin and Dermatological Examination Scope'
  },
  {
    image: 'https://abodyne.net/img/AE.jpg',
    title: 'Abodyne AE++',
    description: 'Real-time Diagnostic Streamer and Clinical Record Archiver'
  },
  {
    image: 'https://abodyne.net/img/ENT.jpg',
    title: 'USB ENT Scope',
    description: 'Dual Axis Micro-focus Ear, Nose & Throat Scope'
  },
  {
    image: 'https://abodyne.net/img/MP.jpg',
    title: 'Abodyne MPM 1000',
    description: 'Enterprise Medical Parameter Multi-Functional Monitor'
  }
];

export default function ProductCarousel() {
  return (
    <div className="container px-4 mb-5">
      <div className="section-title text-start mb-4">
        <h2 className="text-white">Featured Products</h2>
        <p className="text-secondary">Take a closer look at our state-of-the-art diagnostic devices.</p>
      </div>
      
      <div className="carousel-container position-relative">
        <div id="productBootstrapCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
          {/* Indicators */}
          <div className="carousel-indicators">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#productBootstrapCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? 'active' : ''}
                aria-current={index === 0 ? 'true' : 'false'}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>

          {/* Slides */}
          <div className="carousel-inner">
            {carouselItems.map((item, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <img src={item.image} className="carousel-img d-block w-100" alt={item.title} />
                <div className="carousel-overlay"></div>
                <div className="carousel-caption-custom">
                  <h3 className="font-josefin fw-bold text-white fs-2 mb-2">{item.title}</h3>
                  <p className="text-light fs-5 opacity-75 mb-0" style={{ maxWidth: '600px' }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <button className="carousel-control-prev" type="button" data-bs-target="#productBootstrapCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon bg-dark p-3 rounded-circle" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#productBootstrapCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon bg-dark p-3 rounded-circle" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
