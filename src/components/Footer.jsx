import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'var(--secondary-charcoal)', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem' }}>
              <div style={{ width: '32px', height: '32px', backgroundColor: 'var(--accent-red)', borderRadius: '4px' }}></div>
              <span style={{ fontSize: '1.25rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px' }}>
                Phoenix
              </span>
            </div>
            <p className="text-gray" style={{ lineHeight: 1.6, marginBottom: '1.5rem' }}>
              The leading destination for fitness, sports performance, and body transformation in Chennai.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="https://instagram.com/phoenix_highperformance_centre" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-white)', fontSize: '1.5rem', transition: 'color 0.3s' }} className="social-icon"><FaInstagram /></a>
              <a href="https://wa.me/917200071396" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-white)', fontSize: '1.5rem', transition: 'color 0.3s' }} className="social-icon"><FaWhatsapp /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><a href="/#about" className="footer-link" style={{ textDecoration: 'none' }}>About Us</a></li>
              <li><Link to="/gallery" className="footer-link">Gallery</Link></li>
              <li><Link to="/trainers" className="footer-link">Our Trainers</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Programs</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><Link to="/programs" className="footer-link">HYROX Training</Link></li>
              <li><Link to="/programs" className="footer-link">Olympic Weightlifting</Link></li>
              <li><Link to="/programs" className="footer-link">Sports Performance</Link></li>
              <li><Link to="/programs" className="footer-link">Personal Training</Link></li>
              <li><Link to="/programs" className="footer-link">Nutrition Coaching</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Contact Us</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }} className="text-gray">
                <FaMapMarkerAlt style={{ color: 'var(--accent-red)', marginTop: '4px' }} />
                <a href="https://maps.google.com/?q=Phoenix+High+Performance+&+Fitness+Centre,+Ayappakkam,+Chennai" target="_blank" rel="noopener noreferrer" className="footer-link" style={{ textDecoration: 'none' }}>
                  <span>Chennai, Tamil Nadu<br/>India</span>
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className="text-gray">
                <FaPhone style={{ color: 'var(--accent-red)' }} />
                <a href="tel:+917200071396" className="footer-link" style={{ textDecoration: 'none' }}>+91 72000 71396</a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className="text-gray">
                <FaEnvelope style={{ color: 'var(--accent-red)' }} />
                <a href="mailto:info@phoenixfitness.com" className="footer-link" style={{ textDecoration: 'none' }}>info@phoenixfitness.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p className="text-gray" style={{ fontSize: '0.9rem' }}>
            &copy; {new Date().getFullYear()} Phoenix High Performance & Fitness Centre. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link to="#" className="text-gray" style={{ fontSize: '0.9rem' }}>Privacy Policy</Link>
            <Link to="#" className="text-gray" style={{ fontSize: '0.9rem' }}>Terms of Service</Link>
          </div>
        </div>
      </div>
      
      <style>{`
        .footer-link {
          color: var(--text-gray);
          transition: color 0.3s;
          font-size: 0.95rem;
        }
        .footer-link:hover {
          color: var(--accent-red);
        }
        .social-icon:hover {
          color: var(--accent-red) !important;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
