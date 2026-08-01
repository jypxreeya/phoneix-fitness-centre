import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { FcGoogle } from 'react-icons/fc';
import { FaStar } from 'react-icons/fa';

const reviews = [
  { id: 1, name: 'Ananya M.', text: 'Best gym in Chennai by far. The equipment is top-notch and the trainers actually care about your form.', rating: 5 },
  { id: 2, name: 'Karthik R.', text: 'Joined for HYROX training. The community here pushes you to be your absolute best.', rating: 5 },
  { id: 3, name: 'Priya S.', text: 'The sports nutrition guidance completely changed my energy levels. Highly recommend!', rating: 5 },
  { id: 4, name: 'Siddharth V.', text: 'Premium facility with a raw, hardcore vibe. If you are serious about fitness, this is the place.', rating: 5 }
];

const Testimonials = () => {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--secondary-charcoal)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '3rem', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '1rem' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>Member <span className="text-accent">Reviews</span></h2>
            <FcGoogle size={45} />
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '2rem', fontWeight: 800 }}>4.9</span>
            <div style={{ display: 'flex', color: '#FFD700', gap: '4px' }}>
              {[1, 2, 3, 4, 5].map(i => <FaStar key={i} size={20} />)}
            </div>
          </div>
          <p className="text-gray" style={{ marginTop: '0.5rem' }}>Based on 120+ Google Reviews</p>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          style={{ padding: '1rem 0' }}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <motion.div
                whileHover={{ y: -5 }}
                style={{
                  backgroundColor: 'var(--primary-black)',
                  padding: '2rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.05)',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ display: 'flex', color: '#FFD700', gap: '2px', marginBottom: '1rem' }}>
                  {[...Array(review.rating)].map((_, i) => <FaStar key={i} size={16} />)}
                </div>
                <p className="text-gray" style={{ flexGrow: 1, lineHeight: 1.6, fontSize: '0.95rem', fontStyle: 'italic', marginBottom: '1.5rem' }}>
                  "{review.text}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '35px', height: '35px', borderRadius: '50%', backgroundColor: 'var(--secondary-charcoal)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>
                    {review.name.charAt(0)}
                  </div>
                  <span style={{ fontWeight: 600 }}>{review.name}</span>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
