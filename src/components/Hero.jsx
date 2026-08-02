import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Canvas3D from './Canvas3D';
import heroBannerImg from '../assets/fitness_hero_banner.png';

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const btnGroupRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(titleRef.current.children, 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" }
    )
    .fromTo(subtitleRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
      "-=0.4"
    )
    .fromTo(btnGroupRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
      "-=0.4"
    );

  }, []);



  return (
    <section id="hero" style={{ 
      position: 'relative', 
      height: '100vh', 
      width: '100%',
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      paddingTop: 'clamp(100px, 15vh, 150px)', /* Safe space below header */
      overflow: 'hidden'
    }}>
      
      {/* Background Image */}
      <div className="hero-bg" style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        backgroundColor: '#0a0a0a',
        backgroundImage: `url(${heroBannerImg})`
      }}></div>

      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, pointerEvents: 'none' }}>
        <Canvas3D />
      </div>

      {/* Subtle Overlay to ensure text readability if needed */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 2,
        background: 'linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.2) 100%)',
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'left', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        <h1 ref={titleRef} className="hero-title">
          <div style={{ overflow: 'hidden' }}><span>Train Hard.</span></div>
          <div style={{ overflow: 'hidden' }}><span>Perform Better.</span></div>
          <div style={{ overflow: 'hidden' }}><span className="text-accent">Become Unstoppable.</span></div>
        </h1>
        
        <p ref={subtitleRef} className="hero-subtitle text-gray">
          Elite coaching, scientific training, sports performance, nutrition guidance, and transformational fitness programs.
        </p>
        
        <div ref={btnGroupRef} style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
          <a href="/#contact" className="btn-primary" style={{ textDecoration: 'none' }}>Book Consultation</a>
          <a href="/#contact" className="btn-secondary" style={{ textDecoration: 'none' }}>Join Today</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
