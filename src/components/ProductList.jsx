import React from 'react';
import Swal from 'sweetalert2';

const products = [
  {
    id: 'mpm500',
    brand: 'Abodyne',
    model: 'MPM 500',
    description: 'Measures Blood Glucose, ECG, Heart Rate, and Blood Pressure parameters in a handheld device.',
    image: 'https://abodyne.net/img/MPM500.jpg',
    features: ['Handheld Design', 'Glucose Monitoring', '3-Lead ECG Sensor', 'Wireless Sync']
  },
  {
    id: 'otoscope',
    brand: 'Otoscope',
    model: 'AE 200',
    description: 'Specialized inner ear examination device with integrated image-capture sensor for detailed clinical imaging.',
    image: 'https://abodyne.net/img/Otoscope.jpg',
    features: ['High-Res Video Feed', 'LED illumination', 'EMR Integration', 'Interchangeable Specula']
  },
  {
    id: 'stethoscope',
    brand: 'Stethoscope',
    model: 'Adapter',
    description: 'Connects standard low-intensity clinical acoustic sources directly to digital amplification recorders.',
    image: 'https://abodyne.net/img/Sthethoscope_adapter.jpg',
    features: ['Universal Coupler', 'Noise Cancellation', 'High Gain Audio Output', 'Standard Jack Output']
  },
  {
    id: 'dermascope',
    brand: 'Dermascope',
    model: 'AE100',
    description: 'Dermatological and skin examination magnification scope for non-invasive lesion and skin condition assessment.',
    image: 'https://abodyne.net/img/Dermascope.jpg',
    features: ['Polarized LED Lights', '20x-40x Optical Zoom', 'Skin Map Sync', 'Clinical Accuracy']
  },
  {
    id: 'aeplus',
    brand: 'Abodyne',
    model: 'AE++',
    description: 'Advanced media device designed to record, stream, and archive multi-channel diagnostic tests in real time.',
    image: 'https://abodyne.net/img/AE.jpg',
    features: ['Secure Cloud Archive', 'Live-Stream Streamer', 'Encrypted Audio/Video', 'HL7 Compliant']
  },
  {
    id: 'ent',
    brand: 'ENT',
    model: 'USB ENT',
    description: 'Dual axis 27x high-magnification micro scope designed for nasal, throat, and outer-canal physical examinations.',
    image: 'https://abodyne.net/img/ENT1.jpg',
    features: ['27x Focus Magnification', 'USB Plug-and-Play', 'Dual Axis Macro Adjustment', 'Anti-Fog Lens']
  },
  {
    id: 'mpm1000',
    brand: 'Abodyne',
    model: 'MPM 1000',
    description: 'Enterprise grade, multi-parameter monitoring unit designed for bedside analysis and long-duration clinical records.',
    image: 'https://abodyne.net/img/MPM1000.jpg',
    features: ['Bedside Monitor Mount', 'Multi-Lead ECG Stream', 'Blood Glucose Module', 'Continuous Monitoring']
  }
];

export default function ProductList() {
  const handleRequestBrochure = (product) => {
    Swal.fire({
      title: `<span class="font-josefin">Request Spec Sheet</span>`,
      html: `
        <p class="text-secondary small mb-3">Provide your details to receive the full datasheet for <strong>${product.brand} - ${product.model}</strong>.</p>
        <div class="text-start">
          <label class="form-label text-light small">Your Name</label>
          <input type="text" id="swal-input-name" class="form-control form-control-custom mb-3" placeholder="John Doe">
          
          <label class="form-label text-light small">Your Email</label>
          <input type="email" id="swal-input-email" class="form-control form-control-custom" placeholder="john@domain.com">
        </div>
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: 'Send Specification',
      cancelButtonText: 'Cancel',
      customClass: {
        popup: 'swal2-popup-custom',
        title: 'swal2-title-custom',
        htmlContainer: 'swal2-html-custom',
        confirmButton: 'swal2-confirm-custom',
        cancelButton: 'swal2-cancel-custom'
      },
      buttonsStyling: false,
      preConfirm: () => {
        const name = document.getElementById('swal-input-name').value.trim();
        const email = document.getElementById('swal-input-email').value.trim();
        
        if (!name) {
          Swal.showValidationMessage('Please enter your name!');
          return false;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
          Swal.showValidationMessage('Please enter a valid email address!');
          return false;
        }
        
        return { name, email };
      }
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Brochure Requested!',
          text: `Thank you ${result.value.name}. The datasheet for ${product.brand} ${product.model} has been dispatched to ${result.value.email}.`,
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

  return (
    <section className="py-5" id="products">
      <div className="container px-4">
        <div className="section-title text-start mb-5">
          <span className="text-danger text-uppercase fw-bold tracking-wider small" style={{ color: 'var(--primary) !important' }}>Medical Catalog</span>
          <h2 className="text-white mt-1">Our Diagnostics Systems</h2>
          <p className="text-secondary" style={{ maxWidth: '650px' }}>
            Abodyne systems combine advanced hardware design with direct data integration capabilities, optimizing clinical workflows and monitoring diagnostics.
          </p>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {products.map((product) => (
            <div key={product.id} className="col">
              <div className="product-card">
                <div className="product-card-img-wrapper">
                  <img src={product.image} className="product-card-img" alt={`${product.brand} ${product.model}`} />
                </div>
                <div className="product-card-body">
                  <h3 className="product-card-title">{product.brand}</h3>
                  <div className="product-card-model">{product.model}</div>
                  <p className="product-card-description">{product.description}</p>
                  
                  {/* Features Badges */}
                  <div className="mb-4 d-flex flex-wrap gap-1">
                    {product.features.map((feature, idx) => (
                      <span key={idx} className="badge bg-secondary bg-opacity-25 text-light small fw-normal py-1 px-2">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button 
                    onClick={() => handleRequestBrochure(product)} 
                    className="btn btn-outline-custom mt-auto w-100 py-2 btn-sm"
                  >
                    Request Specifications
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
