import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaEnvelope, FaCheckCircle, FaSpinner } from 'react-icons/fa';

const ContactPreview = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: ''
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  useEffect(() => {
    if (window.location.hash === '#contact') {
      const nameInput = document.getElementById('contact-name');
      if (nameInput) {
        setTimeout(() => nameInput.focus(), 800);
      }
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.mobile) {
      alert("Please fill all the fields.");
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch("https://formsubmit.co/ajax/phoenixsportsacademychennai@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            _subject: "New Contact Request – Phoenix High Performance & Fitness Centre",
            _captcha: "false",
            "Name": formData.name,
            "Mobile Number": formData.mobile,
            "Email Address": formData.email
        })
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-padding container">
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
          <div className="glass-panel" style={{ padding: '3rem', borderRadius: '16px', position: 'relative', overflow: 'hidden', minHeight: '400px' }}>
            
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center' }}
                >
                  <FaCheckCircle size={64} style={{ color: '#00ff88', marginBottom: '1.5rem' }} />
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Thank you!</h3>
                  <p className="text-gray" style={{ lineHeight: 1.6, fontSize: '1.05rem' }}>
                    Your details have been sent successfully.<br/>Our team will contact you shortly.
                  </p>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, x: -20 }}
                  onSubmit={handleSubmit}
                  style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
                >
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Send a Message</h3>
                  
                  <div style={{ marginBottom: '1.5rem' }}>
                    <input 
                      id="contact-name" 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Full Name" 
                      style={inputStyle} 
                      required 
                      disabled={status === 'submitting'}
                    />
                  </div>
                  
                  <div style={{ marginBottom: '1.5rem' }}>
                    <input 
                      type="tel" 
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Mobile Number" 
                      style={inputStyle} 
                      required 
                      disabled={status === 'submitting'}
                    />
                  </div>

                  <div style={{ marginBottom: '2rem' }}>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address" 
                      style={inputStyle} 
                      required 
                      disabled={status === 'submitting'}
                    />
                  </div>
                  
                  {status === 'error' && (
                    <p style={{ color: 'var(--accent-red)', marginBottom: '1rem', fontSize: '0.9rem' }}>
                      Something went wrong. Please try again or contact us directly via WhatsApp.
                    </p>
                  )}

                  <button 
                    type="submit" 
                    className="btn-primary" 
                    style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? (
                      <>
                        <FaSpinner className="spinner" /> Sending...
                      </>
                    ) : (
                      'Submit'
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
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
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=phoenixsportsacademychennai@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray" style={{ textDecoration: 'none', fontSize: '0.95rem' }}>phoenixsportsacademychennai@gmail.com</a>
            </div>
          </div>
          
          {/* Real Google Map Embed */}
          <div style={{ width: '100%', height: '250px', borderRadius: '12px', marginTop: '1rem', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
            <iframe 
              src="https://maps.google.com/maps?q=Phoenix+High+Performance+Fitness+Centre,+Ayappakkam,+Chennai&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </motion.div>

      </div>
      <style>{`
        .spinner {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }
      `}</style>
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
