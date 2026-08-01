import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram, FaMedal, FaCheckCircle, FaDumbbell } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const trainerImages = [
  '/assets/trainer1.jpg',
  '/assets/trainer2.jpg'
];

const specialties = [
  'Strength & Conditioning Specialist',
  'Sports Performance Coach',
  'Olympic Weightlifting Coach',
  'Personal Trainer',
  'Nutrition Guidance'
];

const TrainersPreview = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev === 0 ? 1 : 0));
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="trainers" className="section-padding section-charcoal">
      <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1rem' }}>Meet The <span className="text-accent">Expert</span></h2>
        <p className="text-gray" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
          Trained by the best, to be the best. Unlocking your ultimate physical potential.
        </p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '3rem', alignItems: 'stretch' }}>
        
        {/* Animated Image Section */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          style={{ 
            flex: '1 1 350px', 
            position: 'relative', 
            borderRadius: '16px', 
            overflow: 'hidden',
            minHeight: '400px',
            maxHeight: '500px',
            boxShadow: '0 20px 50px rgba(0,0,0,0.6)',
            border: '1px solid rgba(255,255,255,0.05)'
          }}
          className="trainer-img-wrapper"
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImageIndex}
              src={trainerImages[currentImageIndex]}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
              alt="Hariharan Venkatesan"
            />
          </AnimatePresence>

          {/* Premium Overlay Gradient */}
          <div style={{
            position: 'absolute',
            bottom: 0, left: 0, width: '100%', height: '50%',
            background: 'linear-gradient(to top, rgba(229, 9, 20, 0.4), transparent)',
            pointerEvents: 'none'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: 0, left: 0, width: '100%', height: '100%',
            background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)',
            pointerEvents: 'none'
          }}></div>

          <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', zIndex: 10 }}>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '1rem' }}>
              <div style={{ width: '30px', height: '4px', backgroundColor: currentImageIndex === 0 ? 'var(--accent-red)' : 'rgba(255,255,255,0.3)', borderRadius: '2px', transition: 'background-color 0.5s' }}></div>
              <div style={{ width: '30px', height: '4px', backgroundColor: currentImageIndex === 1 ? 'var(--accent-red)' : 'rgba(255,255,255,0.3)', borderRadius: '2px', transition: 'background-color 0.5s' }}></div>
            </div>
            <h3 style={{ fontSize: '2.5rem', margin: 0, color: 'var(--text-white)', lineHeight: 1.1 }}>Hariharan<br/>Venkatesan</h3>
          </div>
        </motion.div>

        {/* Info Section */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
        >
          <div className="glass-panel" style={{ padding: '3rem', borderRadius: '16px', height: '100%' }}>
            
            <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--text-white)' }}>Head Performance Coach</h3>
            <p className="text-accent" style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '1.5rem', letterSpacing: '1px', textTransform: 'uppercase' }}>
              & Fitness Trainer
            </p>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px', marginBottom: '2rem', backgroundColor: 'rgba(0,0,0,0.4)', padding: '1.5rem', borderRadius: '12px', borderLeft: '4px solid var(--accent-red)' }}>
              <FaMedal size={24} style={{ color: 'var(--accent-red)', marginTop: '4px' }} />
              <div>
                <h4 style={{ fontSize: '1rem', marginBottom: '0.3rem', color: 'var(--text-white)' }}>Experience</h4>
                <p className="text-gray" style={{ fontSize: '0.95rem', lineHeight: 1.5, fontStyle: 'italic' }}>
                  8+ Years in Fitness, Strength & Conditioning, Sports Performance & Nutrition Coaching.
                </p>
              </div>
            </div>

            <p className="text-gray" style={{ lineHeight: 1.7, marginBottom: '2rem', fontSize: '1.05rem' }}>
              Dedicated to forging elite athletes and transforming everyday individuals. With a profound passion for biomechanics, strength development, and holistic health, I engineer training protocols that demand excellence and deliver undeniable results. Whether your goal is stepping onto a competition platform or simply conquering life with newfound strength, the blueprint is right here.
            </p>

            <div style={{ marginBottom: '2.5rem' }}>
              <h4 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--text-white)' }}>Specialties</h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {specialties.map((spec, i) => (
                  <span key={i} style={{ 
                    backgroundColor: 'rgba(255,255,255,0.05)', 
                    border: '1px solid rgba(255,255,255,0.1)',
                    padding: '0.5rem 1rem', 
                    borderRadius: '30px', 
                    fontSize: '0.85rem',
                    color: 'var(--text-gray)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <FaCheckCircle style={{ color: 'var(--accent-red)' }} /> {spec}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <Link to="/contact" className="btn-primary" style={{ padding: '0.8rem 2rem' }}>
                Train With Me
              </Link>
              <a href="https://instagram.com/hariharan__venkatesan" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-white)', textDecoration: 'none', fontWeight: 600, fontSize: '1rem' }} className="social-link">
                <FaInstagram size={24} /> Follow 
              </a>
            </div>

          </div>
        </motion.div>
      </div>

      <style>{`
        .social-link {
          transition: color 0.3s ease;
        }
        .social-link:hover {
          color: var(--accent-red) !important;
        }
        .trainer-img-wrapper::after {
          content: '';
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          box-shadow: inset 0 0 50px rgba(229, 9, 20, 0.2);
          pointer-events: none;
          z-index: 5;
        }
      `}</style>
      </div>
    </section>
  );
};

export default TrainersPreview;
