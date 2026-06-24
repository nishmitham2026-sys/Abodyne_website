import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCarousel from './components/ProductCarousel';
import ProductList from './components/ProductList';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div style={{ backgroundColor: 'var(--bg-dark)', minHeight: '100vh' }}>
      {/* Translucent Navigation Header */}
      <Navbar />
      
      {/* Hero Intro Section with SweetAlert catalog downloader */}
      <Hero />
      
      {/* Featured Products Slider (Bootstrap 5 Carousel) */}
      <ProductCarousel />
      
      {/* Grid List of Products with SweetAlert brochure requester */}
      <ProductList />
      
      {/* Let's Get In Touch Section (Contact info and validated submit form) */}
      <ContactForm />
      
      {/* Upgraded Footer */}
      <Footer />
    </div>
  );
}
