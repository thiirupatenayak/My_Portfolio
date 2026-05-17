import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero container animate-fade-in">
      <div className="hero-content">
        <h2 className="hero-greeting delay-100 animate-fade-in">Hello, I'm</h2>
        <h1 className="hero-name delay-200 animate-fade-in text-gradient">Thiirupate Nayak Gugulothu</h1>
        <h3 className="hero-title delay-300 animate-fade-in">Fraud Detection & Investigations Specialist</h3>
        
        <p className="hero-location delay-400 animate-fade-in">📍 Hyderabad, India</p>
        
        <div className="hero-links delay-500 animate-fade-in">
          <a href="mailto:thiirupatenayak@gmail.com" className="social-link" title="Email" target="_blank" rel="noopener noreferrer">
            <FaEnvelope />
          </a>
          <a href="tel:+917075393659" className="social-link" title="Phone" target="_blank" rel="noopener noreferrer">
            <FaPhone />
          </a>
          <a href="https://linkedin.com/in/thiirupate.nayak" className="social-link" title="LinkedIn" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/" className="social-link" title="GitHub" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
