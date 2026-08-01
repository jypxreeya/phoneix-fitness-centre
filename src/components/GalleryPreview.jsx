import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';

// Excluded: trainer1, trainer2, logo
const galleryMedia = [
  { id: 1, type: 'image', src: '/assets/win 4.jpg' },
  { id: 2, type: 'image', src: '/assets/win 5.jpg' },
  { id: 3, type: 'image', src: '/assets/win1.jpg' },
  { id: 4, type: 'image', src: '/assets/win2.jpg' },
  { id: 5, type: 'image', src: '/assets/win3.jpg' },
  { id: 6, type: 'image', src: '/assets/win 6.jpg' },
  { id: 7, type: 'image', src: '/assets/win 7.jpg' },
  { id: 8, type: 'image', src: '/assets/win8.jpg' },
  { id: 9, type: 'image', src: '/assets/t1.jpg' },
  { id: 10, type: 'image', src: '/assets/t2.jpg' }
  // To add a video, use: { id: 11, type: 'video', src: '/assets/sample.mp4' }
];

const GalleryPreview = () => {
  return (
    <section id="gallery" className="section-padding" style={{ backgroundColor: 'var(--primary-black)', overflow: 'hidden' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1rem' }}
        >
          Our <span className="text-accent">Gallery</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray" 
          style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}
        >
          Experience the atmosphere, training sessions, and memorable moments at Phoenix High Performance & Fitness Centre.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
        className="marquee-container"
      >
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={30}
          slidesPerView={'auto'}
          loop={true}
          speed={4000} // Linear scrolling speed
          freeMode={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          allowTouchMove={true}
          className="seamless-marquee"
          style={{ width: '100%', padding: '1rem 0' }}
        >
          {galleryMedia.map((media) => (
            <SwiperSlide key={media.id} style={{ width: 'auto', height: '400px' }}>
              <div 
                className="gallery-media-wrapper"
                style={{ 
                  height: '100%', 
                  borderRadius: '16px', 
                  overflow: 'hidden',
                  position: 'relative'
                }}
              >
                {media.type === 'video' ? (
                  <video 
                    src={media.src} 
                    autoPlay 
                    muted 
                    loop 
                    playsInline
                    style={{ height: '100%', width: 'auto', objectFit: 'cover' }} 
                  />
                ) : (
                  <img 
                    src={media.src} 
                    alt="Phoenix Gallery" 
                    loading="lazy"
                    style={{ height: '100%', width: 'auto', objectFit: 'cover' }} 
                    className="gallery-img-marquee"
                  />
                )}
                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      <style>{`
        /* Make the transition linear for a smooth continuous scroll */
        .seamless-marquee .swiper-wrapper {
          transition-timing-function: linear !important;
        }

        /* Subtle enter/leave zoom effect */
        .gallery-media-wrapper {
          transition: transform 0.6s ease;
          transform: scale(0.95);
        }
        
        .swiper-slide-active .gallery-media-wrapper,
        .swiper-slide-next .gallery-media-wrapper,
        .swiper-slide-next + .swiper-slide .gallery-media-wrapper {
          transform: scale(1);
        }

        /* Optional: give slides that are far on edges a slight fade or scale */
        .seamless-marquee .swiper-slide {
          opacity: 0.7;
          transition: opacity 0.5s ease;
        }
        .seamless-marquee .swiper-slide-active,
        .seamless-marquee .swiper-slide-next,
        .seamless-marquee .swiper-slide-next + .swiper-slide {
          opacity: 1;
        }

        /* Responsive Height */
        @media (max-width: 768px) {
          .seamless-marquee .swiper-slide {
            height: 300px !important;
          }
        }
        @media (max-width: 480px) {
          .seamless-marquee .swiper-slide {
            height: 250px !important;
          }
        }
      `}</style>
    </section>
  );
};

export default GalleryPreview;
