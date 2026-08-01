import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  { id: 1, src: '/assets/win1.jpg', category: 'Events' },
  { id: 2, src: '/assets/win2.jpg', category: 'Competitions' },
  { id: 3, src: '/assets/win3.jpg', category: 'Events' },
  { id: 4, src: '/assets/win 4.jpg', category: 'Gym Interior' },
  { id: 5, src: '/assets/win 5.jpg', category: 'Gym Interior' },
  { id: 6, src: '/assets/win 6.jpg', category: 'Competitions' },
  { id: 7, src: '/assets/win 7.jpg', category: 'Events' },
  { id: 8, src: '/assets/win8.jpg', category: 'Competitions' }
];

const categories = ['All', 'Gym Interior', 'Events', 'Competitions'];

const GalleryPreview = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImg, setSelectedImg] = useState(null);

  const filteredImages = filter === 'All' 
    ? images 
    : images.filter(img => img.category === filter);

  return (
    <section className="section-padding container">
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1rem' }}>Our <span className="text-accent">Facility</span></h2>
        <p className="text-gray" style={{ maxWidth: '600px', margin: '0 auto' }}>
          Take a look inside the ultimate high-performance centre in Chennai.
        </p>
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              padding: '0.5rem 1.5rem',
              borderRadius: '30px',
              border: `1px solid ${filter === cat ? 'var(--accent-red)' : 'rgba(255,255,255,0.2)'}`,
              backgroundColor: filter === cat ? 'var(--accent-red)' : 'transparent',
              color: 'var(--text-white)',
              transition: 'all 0.3s ease',
              fontWeight: 600,
              textTransform: 'uppercase',
              fontSize: '0.85rem'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Grid using CSS Columns */}
      <div style={{ columnCount: 3, columnGap: '1.5rem', '@media (max-width: 768px)': { columnCount: 1 } }} className="masonry-grid">
        <AnimatePresence>
          {filteredImages.map((img) => (
            <motion.div
              key={img.id}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4 }}
              style={{ marginBottom: '1.5rem', breakInside: 'avoid', cursor: 'pointer', overflow: 'hidden', borderRadius: '12px' }}
              onClick={() => setSelectedImg(img.src)}
              whileHover={{ scale: 1.02 }}
            >
              <img src={img.src} alt="Gallery" style={{ width: '100%', borderRadius: '12px', display: 'block', transition: 'transform 0.5s ease' }} className="gallery-img" />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
              backgroundColor: 'rgba(0,0,0,0.95)', zIndex: 1000,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '2rem'
            }}
            onClick={() => setSelectedImg(null)}
          >
            <motion.img 
              src={selectedImg} 
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              style={{ maxHeight: '90vh', maxWidth: '100%', borderRadius: '8px', objectFit: 'contain' }} 
            />
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .masonry-grid {
          column-count: 3;
        }
        @media (max-width: 992px) {
          .masonry-grid { column-count: 2; }
        }
        @media (max-width: 576px) {
          .masonry-grid { column-count: 1; }
        }
        .gallery-img:hover {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default GalleryPreview;
