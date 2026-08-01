import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const ContactPreview = () => {
  return (
    <section className="section-padding container">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1rem' }}>Get In <span className="text-accent">Touch</span></h2>
        <p className="text-gray" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
          Ready to start your transformation? Contact us today to book your consultation.
        </p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'flex-start' }}>
        
        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ flex: '1 1 400px' }}
        >
          <form className="glass-panel" style={{ padding: '3rem', borderRadius: '16px' }} onSubmit={e => e.preventDefault()}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Send a Message</h3>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <input type="text" placeholder="Your Name" style={inputStyle} required />
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <input type="email" placeholder="Email Address" style={inputStyle} required />
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <input type="tel" placeholder="Phone Number" style={inputStyle} required />
            </div>
            
            <div style={{ marginBottom: '2rem' }}>
              <select style={inputStyle} defaultValue="">
                <option value="" disabled>Select Program</option>
                <option value="hyrox">HYROX Training</option>
                <option value="weightlifting">Olympic Weightlifting</option>
                <option value="personal">Personal Training</option>
                <option value="nutrition">Nutrition Coaching</option>
              </select>
            </div>
            
            <button type="submit" className="btn-primary" style={{ width: '100%' }}>Submit Request</button>
          </form>
        </motion.div>

        {/* Contact Info & Map */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '2rem' }}
        >
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
            <FaMapMarkerAlt size={24} style={{ color: 'var(--accent-red)', marginTop: '4px' }} />
            <div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Location</h4>
              <p className="text-gray" style={{ lineHeight: 1.5 }}>
                Phoenix High Performance & Fitness Centre<br/>
                Ayappakkam, Chennai<br/>
                Tamil Nadu, India
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <FaPhone size={24} style={{ color: 'var(--accent-red)' }} />
            <div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>Phone</h4>
              <a href="tel:+917200071396" className="text-gray" style={{ textDecoration: 'none' }}>+91 72000 71396</a>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <FaWhatsapp size={24} style={{ color: '#25D366' }} />
            <div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>WhatsApp</h4>
              <a href="https://wa.me/917200071396" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-white)', textDecoration: 'none' }}>Message Us directly</a>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <FaEnvelope size={24} style={{ color: 'var(--accent-red)' }} />
            <div>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>Email</h4>
              <a href="mailto:info@phoenixfitness.com" className="text-gray" style={{ textDecoration: 'none' }}>info@phoenixfitness.com</a>
            </div>
          </div>
          
          {/* Map Link */}
          <a href="https://maps.google.com/?q=Phoenix+High+Performance+&+Fitness+Centre,+Ayappakkam,+Chennai" target="_blank" rel="noopener noreferrer" style={{ width: '100%', height: '250px', backgroundColor: 'var(--secondary-charcoal)', borderRadius: '12px', marginTop: '1rem', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
            <span className="text-gray" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <FaMapMarkerAlt /> Open in Google Maps
            </span>
          </a>

        </motion.div>

      </div>
    </section>
  );
};

const inputStyle = {
  width: '100%',
  padding: '1rem',
  backgroundColor: 'rgba(0,0,0,0.5)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '8px',
  color: 'var(--text-white)',
  fontSize: '1rem',
  outline: 'none',
  transition: 'border-color 0.3s'
};

export default ContactPreview;
