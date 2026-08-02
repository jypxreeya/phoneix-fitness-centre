import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaDumbbell, FaRunning, FaHeartbeat } from 'react-icons/fa';
import { MdSportsGymnastics } from 'react-icons/md';

const programs = [
  {
    title: 'HYROX Training',
    description: 'Prepare for the ultimate fitness race with our specialized HYROX coaching.',
    icon: <FaRunning size={32} />,
    color: '#E50914',
    image3D: '/assets/hyrox_3d.png'
  },
  {
    title: 'Olympic Weightlifting',
    description: 'Master the snatch and clean & jerk with elite technical coaching.',
    icon: <FaDumbbell size={32} />,
    color: '#00d2ff',
    image3D: '/assets/weightlifting_3d.png'
  },
  {
    title: 'Sports Performance',
    description: 'Enhance speed, agility, and power for your specific sport.',
    icon: <MdSportsGymnastics size={32} />,
    color: '#ffb300',
    image3D: '/assets/sports_3d.png'
  },
  {
    title: 'Personal Training',
    description: 'Customized 1-on-1 coaching designed around your unique goals.',
    icon: <FaHeartbeat size={32} />,
    color: '#00ff88',
    image3D: '/assets/pt_3d.png'
  }
];

const ProgramsPreview = () => {
  return (
    <section className="section-padding container">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1rem' }}>Elite <span className="text-accent">Programs</span></h2>
        <p className="text-gray" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
          Science-backed training systems designed to unlock your true athletic potential.
        </p>
      </div>

      <div className="desktop-programs-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '2rem' 
      }}>
        {programs.map((prog, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="glass-panel"
            style={{
              padding: '2.5rem 2rem',
              borderRadius: '16px',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              cursor: 'pointer'
            }}
          >
            <div style={{ 
              width: '64px', 
              height: '64px', 
              borderRadius: '50%', 
              backgroundColor: 'rgba(255,255,255,0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: prog.color,
              marginBottom: '1.5rem'
            }}>
              {prog.icon}
            </div>
            
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{prog.title}</h3>
            <p className="text-gray" style={{ lineHeight: 1.6, flexGrow: 1, marginBottom: '2rem' }}>
              {prog.description}
            </p>
            
            <Link to="/programs" style={{ 
              color: 'var(--text-white)', 
              fontWeight: 700, 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px',
              textTransform: 'uppercase',
              fontSize: '0.9rem',
              letterSpacing: '1px'
            }}>
              Explore Program <span style={{ color: 'var(--accent-red)' }}>→</span>
            </Link>

            {/* Hover Gradient Overlay */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: `radial-gradient(circle at top right, ${prog.color}22 0%, transparent 70%)`,
              zIndex: -1,
              pointerEvents: 'none'
            }}></div>
          </motion.div>
        ))}
      </div>

      {/* Mobile Bento Layout (Hidden on Desktop) */}
      <div className="mobile-programs-bento">
        {programs.map((prog, index) => (
          <motion.div
            key={`mob-${index}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="mobile-bento-card"
            style={{ border: `1px solid ${prog.color}44`, boxShadow: `0 10px 30px ${prog.color}11` }}
          >
            {/* The 3D Image */}
            <motion.img 
              src={prog.image3D} 
              alt={prog.title} 
              className="mobile-bento-image"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: index * 0.5 }}
            />
            
            <div className="mobile-bento-content">
              <div className="mobile-bento-icon" style={{ color: prog.color, backgroundColor: `${prog.color}22` }}>
                {prog.icon}
              </div>
              <h3 className="mobile-bento-title">{prog.title}</h3>
              <p className="mobile-bento-desc">{prog.description}</p>
              <Link to="/programs" className="mobile-bento-link">
                Explore <span style={{ color: prog.color }}>→</span>
              </Link>
            </div>
            
            {/* Soft background glow */}
            <div className="mobile-bento-glow" style={{ background: `radial-gradient(circle at top right, ${prog.color}33 0%, transparent 60%)` }}></div>
          </motion.div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '4rem' }}>
        <Link to="/programs" className="btn-secondary">View All Programs</Link>
      </div>
    </section>
  );
};

export default ProgramsPreview;
