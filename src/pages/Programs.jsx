import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import { 
  FaDumbbell, FaRunning, FaHeartbeat, FaFire, 
  FaAppleAlt, FaMedal, FaCarrot, FaChild, FaUsers 
} from 'react-icons/fa';
import { MdSportsGymnastics, MdOutlineMonitorWeight, MdDirectionsRun } from 'react-icons/md';
import { GiWeightLiftingUp, GiBiceps, GiWaterBottle, GiMeat } from 'react-icons/gi';
import { BiRun } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const programCategories = [
  {
    category: 'Fitness & Performance',
    description: 'Elite training protocols designed to maximize your potential across all pillars of fitness.',
    bgImage: '/assets/win 2.jpg',
    services: [
      { title: 'High-Intensity Training', icon: <FaFire />, desc: 'Metabolic conditioning to torch fat and build immense endurance.' },
      { title: 'Personal Training', icon: <FaHeartbeat />, desc: '1-on-1 bespoke programming tailored to your unique goals and bio-mechanics.' },
      { title: 'Sports Performance', icon: <MdSportsGymnastics />, desc: 'Sport-specific training to increase agility, speed, and explosive power.' },
      { title: 'Strength & Conditioning', icon: <FaDumbbell />, desc: 'Periodized lifting cycles to build foundational raw strength.' },
      { title: 'Functional Training', icon: <FaRunning />, desc: 'Movement patterns that translate directly to everyday life and athletics.' },
      { title: 'Fat Loss Programs', icon: <FaFire />, desc: 'Science-backed approach to sustainable body composition changes.' },
      { title: 'Muscle Building', icon: <GiBiceps />, desc: 'Hypertrophy-focused training to pack on lean muscle mass.' },
      { title: 'Athlete Development', icon: <FaMedal />, desc: 'Advanced tracking and coaching for competitive amateur and pro athletes.' },
      { title: 'Teen Fitness', icon: <FaChild />, desc: 'Safe, structured training environments introducing youth to proper mechanics.' }
    ]
  },
  {
    category: 'Olympic Weightlifting',
    description: 'Master the most technical and explosive movements in strength sports.',
    bgImage: '/assets/win 7.jpg',
    services: [
      { title: 'Olympic Weightlifting', icon: <GiWeightLiftingUp />, desc: 'Full programming for competitive and recreational lifters.' },
      { title: 'Snatch Technique', icon: <MdOutlineMonitorWeight />, desc: 'Drills and segmented practice to master the most complex barbell lift.' },
      { title: 'Clean & Jerk', icon: <GiWeightLiftingUp />, desc: 'Build power and precision in the classic double-movement lift.' },
      { title: 'Competition Preparation', icon: <FaMedal />, desc: 'Peaking blocks, attempt selection, and meet-day coaching.' }
    ]
  },
  {
    category: 'HYROX',
    description: 'The fitness race for everybody. Combine running with functional workout stations.',
    bgImage: '/assets/win 8.jpg',
    services: [
      { title: 'HYROX Training', icon: <MdDirectionsRun />, desc: 'Comprehensive classes combining endurance and functional strength.' },
      { title: 'Race Preparation', icon: <FaMedal />, desc: 'Simulated events, pacing strategies, and transition coaching.' },
      { title: 'Running Performance', icon: <BiRun />, desc: 'Biomechanics analysis and interval training to improve your run splits.' },
      { title: 'Sled Push', icon: <FaDumbbell />, desc: 'Lower body power development targeting the heavy sled push station.' },
      { title: 'Sled Pull', icon: <FaDumbbell />, desc: 'Grip and posterior chain strengthening for efficient sled pulls.' },
      { title: 'Farmer Carry', icon: <GiBiceps />, desc: 'Core and grip endurance training for the kettlebell carry.' },
      { title: 'Wall Balls', icon: <MdSportsGymnastics />, desc: 'Squat mechanics and shoulder endurance for the final station.' }
    ]
  },
  {
    category: 'Nutrition Services',
    description: 'Fuel your performance and optimize recovery with evidence-based nutrition protocols.',
    bgImage: '/assets/t2.jpg',
    services: [
      { title: 'Nutrition Consultation', icon: <FaAppleAlt />, desc: 'In-depth analysis of your current diet, lifestyle, and goals.' },
      { title: 'Sports Nutrition', icon: <GiWaterBottle />, desc: 'Macro-nutrient periodization aligned with your training cycles.' },
      { title: 'Diabetes Control Diets', icon: <FaHeartbeat />, desc: 'Medical-grade dietary planning to manage and improve insulin sensitivity.' },
      { title: 'Family Nutrition', icon: <FaUsers />, desc: 'Sustainable, healthy eating habits for the entire household.' },
      { title: 'Meal Planning', icon: <GiMeat />, desc: 'Done-for-you weekly menus with precise macro and calorie targets.' },
      { title: 'Teen Nutrition', icon: <FaChild />, desc: 'Supporting growth, development, and athletic performance in youth.' },
      { title: 'Vegetarian Diet Planning', icon: <FaCarrot />, desc: 'Optimized plant-based protocols ensuring adequate protein and micronutrients.' }
    ]
  }
];

const Programs = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(headerRef.current.children,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" }
    );
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Programs | Phoenix High Performance & Fitness Centre</title>
        <meta name="description" content="Explore our comprehensive range of services including High-Intensity Training, Olympic Weightlifting, HYROX, and Nutrition Coaching." />
      </Helmet>

      {/* Page Hero */}
      <section style={{ 
        position: 'relative', 
        height: '60vh', 
        minHeight: '400px',
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        paddingTop: '80px',
        overflow: 'hidden'
      }}>
        {/* Background */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          backgroundImage: 'url("/assets/win1.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -2,
          filter: 'grayscale(30%)'
        }}></div>
        
        {/* Overlay */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, width: '100%', height: '100%',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(10,10,10,1) 100%)',
          zIndex: -1
        }}></div>

        <div className="container" ref={headerRef} style={{ textAlign: 'center', zIndex: 10 }}>
          <h1 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>
            Our <span className="text-accent">Programs</span>
          </h1>
          <p className="text-gray" style={{ fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            Comprehensive training systems and nutrition protocols designed for athletes and individuals committed to excellence.
          </p>
        </div>
      </section>

      {/* Programs Content */}
      <div style={{ backgroundColor: 'var(--primary-black)', paddingBottom: '6rem' }}>
        {programCategories.map((category, idx) => (
          <section key={idx} style={{ paddingTop: '6rem' }}>
            
            {/* Category Header */}
            <div className="container" style={{ marginBottom: '3rem' }}>
              <div style={{ 
                position: 'relative', 
                padding: '4rem 2rem', 
                borderRadius: '24px', 
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                minHeight: '250px'
              }}>
                <div style={{
                  position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                  backgroundImage: \`url("\${category.bgImage}")\`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  zIndex: 0
                }}></div>
                <div style={{
                  position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
                  background: 'linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 100%)',
                  zIndex: 1
                }}></div>
                
                <div style={{ position: 'relative', zIndex: 2, maxWidth: '800px' }}>
                  <motion.h2 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem', color: 'var(--text-white)' }}
                  >
                    {category.category}
                  </motion.h2>
                  <motion.p 
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    style={{ fontSize: '1.1rem', color: 'var(--text-gray)', lineHeight: 1.6 }}
                  >
                    {category.description}
                  </motion.p>
                </div>
              </div>
            </div>

            {/* Services Grid */}
            <div className="container">
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                gap: '2rem' 
              }}>
                {category.services.map((service, sIdx) => (
                  <motion.div
                    key={sIdx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: (sIdx % 3) * 0.1 }}
                    whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.08)' }}
                    className="glass-panel service-card"
                    style={{
                      padding: '2.5rem',
                      borderRadius: '16px',
                      border: '1px solid rgba(255,255,255,0.05)',
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      transition: 'background-color 0.3s ease'
                    }}
                  >
                    <div style={{ 
                      width: '50px', 
                      height: '50px', 
                      borderRadius: '12px', 
                      backgroundColor: 'rgba(229, 9, 20, 0.1)',
                      color: 'var(--accent-red)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.5rem',
                      marginBottom: '1.5rem'
                    }}>
                      {service.icon}
                    </div>
                    
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--text-white)' }}>
                      {service.title}
                    </h3>
                    
                    <p className="text-gray" style={{ lineHeight: 1.6, flexGrow: 1, marginBottom: '2rem', fontSize: '0.95rem' }}>
                      {service.desc}
                    </p>
                    
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      <Link to="/contact" className="btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem', flex: 1, textAlign: 'center' }}>
                        Join Now
                      </Link>
                      <Link to="/contact" className="btn-secondary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.85rem', flex: 1, textAlign: 'center', borderWidth: '1px' }}>
                        Consult
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
          </section>
        ))}
      </div>
    </>
  );
};

export default Programs;
