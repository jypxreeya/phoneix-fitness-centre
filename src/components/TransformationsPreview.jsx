import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const transformations = [
  {
    id: 1,
    image: '/assets/t1.jpg',
    name: 'mr.bala',
    duration: '12 Weeks',
    result: '-15kg Body Fat',
    quote: '"Phoenix changed my life. The scientific approach to training and nutrition made all the difference."'
  },
  {
    id: 2,
    image: '/assets/t2.jpg',
    name: '',
    duration: '120 days transformation',
    result: '+8kg Muscle Mass',
    quote: '"I was stuck at a plateau for years. The coaches here unlocked my true strength potential."'
  },{
    id: 2,
    image: '/assets/t3.jpg',
    name: 'shalini',
    duration: '120 days transformation',
    result: '+8kg Muscle Mass',
    quote: '"I was stuck at a plateau for years. The coaches here unlocked my true strength potential."'
  }
];

const TransformationsPreview = () => {
  return (
    <section className="section-padding container">
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1rem' }}>Real <span className="text-accent">Transformations</span></h2>
        <p className="text-gray" style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
          Numbers don't lie. See what happens when you combine elite coaching with true dedication.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        style={{ maxWidth: '900px', margin: '0 auto' }}
      >
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          style={{ paddingBottom: '3rem', '--swiper-navigation-color': '#E50914', '--swiper-pagination-color': '#E50914' }}
        >
          {transformations.map(trans => (
            <SwiperSlide key={trans.id}>
              <div style={{ 
                display: 'flex', 
                flexDirection: 'row',
                backgroundColor: 'rgba(26, 26, 26, 0.6)', 
                borderRadius: '16px',
                overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.05)',
                '@media (max-width: 768px)': { flexDirection: 'column' } 
              }} className="trans-card">
                
                <div style={{ flex: '1', minHeight: '300px' }} className="trans-img-container">
                  <img src={trans.image} alt={trans.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                <div style={{ flex: '1', padding: '3rem 2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <h3 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{trans.name}</h3>
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                    <span style={{ backgroundColor: 'var(--accent-red)', padding: '0.3rem 0.8rem', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 700 }}>{trans.duration}</span>
                    <span style={{ backgroundColor: 'var(--primary-black)', border: '1px solid var(--accent-red)', padding: '0.3rem 0.8rem', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 700 }}>{trans.result}</span>
                  </div>
                  <p className="text-gray" style={{ fontStyle: 'italic', fontSize: '1.1rem', lineHeight: 1.6 }}>
                    {trans.quote}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <style>{`
        @media (max-width: 768px) {
          .trans-card { flex-direction: column !important; }
          .trans-img-container { min-height: 250px !important; }
        }
      `}</style>
    </section>
  );
};

export default TransformationsPreview;
