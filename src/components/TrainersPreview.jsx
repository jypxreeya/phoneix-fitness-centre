import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaMedal } from 'react-icons/fa';

const trainers = [
  {
    id: 1,
    name: 'Sriram',
    role: 'Head Coach - Strength & Conditioning',
    image: '/assets/trainer1.jpg',
    experience: '8+ Years',
    certifications: 'CSCS, Olympic Weightlifting',
    instagram: 'https://instagram.com/hariharan__venkatesan'
  },
  {
    id: 2,
    name: 'Ashwin',
    role: 'HYROX & Performance Coach',
    image: '/assets/trainer2.jpg',
    experience: '6+ Years',
    certifications: 'HYROX Master Trainer',
    instagram: 'https://instagram.com/hariharan__venkatesan'
  }
];

const TrainersPreview = () => {
  return (
    <section className="section-padding container">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1rem' }}>Meet The <span className="text-accent">Experts</span></h2>
        <p className="text-gray" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
          Trained by the best, to be the best. Our coaches are elite athletes dedicated to your transformation.
        </p>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
        {trainers.map((trainer, i) => (
          <motion.div
            key={trainer.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            style={{ 
              width: '100%', 
              maxWidth: '350px', 
              borderRadius: '16px', 
              overflow: 'hidden',
              backgroundColor: 'var(--secondary-charcoal)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}
            className="trainer-card"
          >
            <div style={{ width: '100%', height: '400px', overflow: 'hidden', position: 'relative' }}>
              <img 
                src={trainer.image} 
                alt={trainer.name} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} 
                className="trainer-img"
              />
              <div style={{ 
                position: 'absolute', 
                bottom: 0, left: 0, width: '100%', 
                background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)', 
                padding: '2rem 1.5rem 1rem' 
              }}>
                <h3 style={{ fontSize: '1.5rem', margin: 0 }}>{trainer.name}</h3>
                <p className="text-accent" style={{ fontWeight: 600, margin: '0.2rem 0 0', fontSize: '0.9rem' }}>{trainer.role}</p>
              </div>
            </div>
            
            <div style={{ padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.8rem', color: 'var(--text-gray)' }}>
                <FaMedal style={{ color: 'var(--accent-red)' }} />
                <span style={{ fontSize: '0.9rem' }}>{trainer.experience} | {trainer.certifications}</span>
              </div>
              
              <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button className="btn-secondary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.8rem', borderWidth: '1px' }}>
                  Book Session
                </button>
                <a href={trainer.instagram} style={{ color: 'var(--text-white)', fontSize: '1.5rem', transition: 'color 0.3s' }} className="social-icon">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style>{`
        .trainer-card:hover .trainer-img {
          transform: scale(1.05);
        }
        .social-icon:hover {
          color: var(--accent-red) !important;
        }
      `}</style>
    </section>
  );
};

export default TrainersPreview;
