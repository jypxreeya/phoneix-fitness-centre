import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaMedal, FaTools, FaUsers, FaAppleAlt } from 'react-icons/fa';

const features = [
  {
    title: 'Certified Coaches',
    description: 'Our trainers are elite athletes and certified professionals dedicated to your success.',
    icon: <FaMedal size={28} />
  },
  {
    title: 'Modern Equipment',
    description: 'Train with the best. We feature Rogue, Concept2, and premium free weights.',
    icon: <FaTools size={28} />
  },
  {
    title: 'Result-Driven Culture',
    description: 'We track data, analyze performance, and ensure you hit your goals.',
    icon: <FaUsers size={28} />
  },
  {
    title: 'Nutrition Coaching',
    description: 'Comprehensive diet plans to fuel your workouts and accelerate recovery.',
    icon: <FaAppleAlt size={28} />
  }
];

const WhyChooseUs = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const yImage = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="about" ref={containerRef} className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Background with subtle parallax overlay */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
        <div style={{ 
          position: 'absolute', 
          width: '50vw', 
          height: '50vw', 
          background: 'radial-gradient(circle, rgba(229, 9, 20, 0.1) 0%, transparent 70%)',
          top: '50%',
          left: '0%',
          transform: 'translateY(-50%)',
          filter: 'blur(60px)'
        }}></div>
      </div>

      <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem' }}>
        
        {/* Left Side Image */}
        <div style={{ flex: '1 1 400px', position: 'relative', minHeight: '500px', borderRadius: '16px', overflow: 'hidden' }}>
          {/* Placeholder for the image */}
          <motion.div style={{ 
            width: '100%', 
            height: '120%', 
            position: 'absolute',
            top: '-10%',
            left: 0,
            backgroundColor: '#1a1a1a', 
            y: yImage,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: 'url("/assets/win 4.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
            {/* Overlay Gradient */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to right, rgba(0,0,0,0.8), transparent)' }}></div>
          </motion.div>
        </div>

        {/* Right Side Content */}
        <div style={{ flex: '1 1 500px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            Why Choose <br/><span className="text-accent">Phoenix</span>
          </h2>
          <p className="text-gray" style={{ fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '3rem' }}>
            We are not just a gym. We are a high-performance centre built for those who demand excellence. From HYROX athletes to complete beginners, our environment is designed for transformation.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            {features.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}
              >
                <div style={{ color: 'var(--accent-red)', marginTop: '4px' }}>
                  {feature.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{feature.title}</h4>
                  <p className="text-gray" style={{ fontSize: '0.9rem', lineHeight: 1.5 }}>
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
