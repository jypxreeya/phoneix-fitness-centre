import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Canvas3D from './Canvas3D';

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
    <section style={{ 
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
      
      {/* Background Video / Image Placeholder */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -2,
        backgroundColor: '#0a0a0a',
        /* backgroundImage: 'url("/assets/hero-bg.jpg")', */
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}></div>

      <Canvas3D />

      {/* Dark Overlay Gradient */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: 'radial-gradient(circle at center, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%)',
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
        <h1 ref={titleRef} style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.2, marginBottom: '2rem' }}>
          <div style={{ overflow: 'hidden' }}><span>Train Hard.</span></div>
          <div style={{ overflow: 'hidden' }}><span>Perform Better.</span></div>
          <div style={{ overflow: 'hidden' }}><span className="text-accent">Become Unstoppable.</span></div>
        </h1>
        
        <p ref={subtitleRef} className="text-gray" style={{ maxWidth: '750px', margin: '0 auto', fontSize: '1.15rem', lineHeight: 1.6, marginBottom: '3.5rem' }}>
          Elite coaching, scientific training, sports performance, nutrition guidance, and transformational fitness programs.
        </p>
        
        <div ref={btnGroupRef} style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn-primary">Book Consultation</button>
          <button className="btn-secondary">Join Today</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
