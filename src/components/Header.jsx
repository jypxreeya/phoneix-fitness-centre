import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { AnimatePresence, motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/#hero', isAnchor: true },
    { name: 'About', path: '/#about', isAnchor: true },
    { name: 'Gallery', path: '/#gallery', isAnchor: true },
    { name: 'Trainers', path: '/#trainers', isAnchor: true },
    { name: 'Contact', path: '/#contact', isAnchor: true },
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 100,
          transition: 'all 0.4s ease',
          backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.95)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(10px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.05)' : '1px solid transparent',
          padding: isScrolled ? '1rem 0' : '1.5rem 0',
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <Link to="/" style={{ zIndex: 101, display: 'flex', alignItems: 'center', gap: '15px' }}>
            <img 
              src="/assets/logo.jpg" 
              alt="Phoenix Logo" 
              style={{ width: '50px', height: '50px', objectFit: 'contain', borderRadius: '6px' }} 
            />
            <span className="brand-name" style={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', lineHeight: 1.2, color: 'var(--text-white)' }}>
              Phoenix High Performance<br/>& Fitness Centre
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'none', gap: '2rem' }} className="desktop-nav">
            {navLinks.map((link) => (
              link.isAnchor ? (
                <a
                  key={link.name}
                  href={link.path}
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    color: 'var(--text-white)',
                    transition: 'color 0.3s',
                  }}
                  className="nav-link"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    color: location.pathname === link.path ? 'var(--accent-red)' : 'var(--text-white)',
                    transition: 'color 0.3s',
                  }}
                  className="nav-link"
                >
                  {link.name}
                </Link>
              )
            ))}
            <a href="/#contact" className="btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem', textDecoration: 'none' }}>
              Book Now
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            style={{ zIndex: 101, display: 'block', color: 'var(--text-white)' }}
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <HiX size={30} /> : <HiMenuAlt3 size={30} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'var(--primary-black)',
              zIndex: 99,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2rem',
            }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
              >
                {link.isAnchor ? (
                  <a
                    href={link.path}
                    style={{
                      fontSize: '2rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      color: 'var(--text-white)',
                      textDecoration: 'none'
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={link.path}
                    style={{
                      fontSize: '2rem',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      color: location.pathname === link.path ? 'var(--accent-red)' : 'var(--text-white)',
                      textDecoration: 'none'
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
      <style>{`
        @media (max-width: 992px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
          .brand-name { font-size: 0.85rem !important; }
        }
        @media (min-width: 992px) {
          .desktop-nav { display: flex !important; align-items: center; }
          .mobile-toggle { display: none !important; }
          .brand-name { font-size: 1rem !important; }
        }
        .nav-link:hover {
          color: var(--accent-red) !important;
        }
      `}</style>
    </>
  );
};

export default Header;
