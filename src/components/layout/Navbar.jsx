import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MapPin, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Our Team', path: '/team' },
  { label: 'About', path: '/about' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      {/* Top info bar */}
      <motion.div
        initial={{ y: -40 }}
        animate={{ y: scrolled ? -40 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-sm text-background"
      >
        <div className="max-w-7xl mx-auto px-6 py-2 flex items-center justify-between text-xs font-body tracking-wide">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-primary" />
              1818 S Australian Ave, Suite 404, West Palm Beach, FL
            </span>
          </div>
          <a href="tel:5615375586" className="flex items-center gap-1.5 hover:text-primary transition-colors">
            <Phone className="w-3 h-3" />
            561-537-5586
          </a>
        </div>
      </motion.div>

      {/* Main nav */}
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: scrolled ? 0 : 32 }}
        // className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled
        //   ? 'bg-card/90 backdrop-blur-xl shadow-lg shadow-foreground/5'
        //   : 'bg-transparent'
        //   }`}

        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled
          ? "bg-card/90 backdrop-blur-xl shadow-lg shadow-foreground/5"
          : "bg-black/30 backdrop-blur-lg border-b border-white/10"
          }`}

      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-lg">CP</span>
            </div>
            <div className="hidden sm:block">
              <p className={`font-heading font-semibold text-lg leading-tight ${scrolled ? 'text-foreground' : 'text-card'}`}>
                City Psychology
              </p>
              <p className={`text-[10px] font-body tracking-[0.2em] uppercase ${scrolled ? 'text-muted-foreground' : 'text-card/70'}`}>
                Palm Beach
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-body font-medium tracking-wide transition-colors relative group ${scrolled ? 'text-foreground/70 hover:text-foreground' : 'text-card/80 hover:text-card'
                  } ${location.pathname === link.path ? (scrolled ? 'text-foreground' : 'text-card') : ''}`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-px bg-primary transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
              </Link>
            ))}
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-body font-medium hover:bg-primary/90 transition-all animate-pulse-glow"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu btn */}
          <button
            onClick={() => setMenuOpen(true)}
            className={`lg:hidden p-2 ${scrolled ? 'text-foreground' : 'text-card'}`}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      {/* Fullscreen overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-foreground/95 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-card/80 hover:text-card transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            <nav className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={link.path}
                    className="text-card font-heading text-4xl md:text-5xl font-semibold hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-4"
              >
                <a
                  href="tel:5615375586"
                  className="text-card/60 font-body text-lg flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" /> 561-537-5586
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}