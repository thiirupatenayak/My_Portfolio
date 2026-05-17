import React, { useState } from 'react';
import './Contact.css';
import { FaEnvelope, FaPhone, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact container animate-fade-in delay-500">
      <div className="section-header">
        <h2 className="section-title text-gradient">Get In Touch</h2>
        <div className="section-line"></div>
      </div>

      <div className="contact-content glass-panel">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Feel free to reach out for inquiries, collaborations, or just to say hi!</p>
          
          <div className="info-items">
            <a href="mailto:thiirupatenayak@gmail.com" className="info-item">
              <FaEnvelope className="info-icon" />
              <span>thiirupatenayak@gmail.com</span>
            </a>
            <a href="tel:+917075393659" className="info-item">
              <FaPhone className="info-icon" />
              <span>+91 7075393659</span>
            </a>
            <a href="https://linkedin.com/in/thiirupate.nayak" target="_blank" rel="noopener noreferrer" className="info-item">
              <FaLinkedin className="info-icon" />
              <span>linkedin.com/in/thiirupate.nayak</span>
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              placeholder="Your Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea 
              id="message" 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              required 
              rows="4"
              placeholder="How can I help you?"
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Send Message <FaPaperPlane />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
