import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const links = ['Home', 'How It Works', 'Services', 'Why HLO', 'Coverage', 'App'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase().replace(/\s+/g, '-'));
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container navbar-inner">
        <div className="navbar-logo" onClick={() => scrollTo('home')}>
          <span className="logo-hlo">HLO</span>
          <span className="logo-drive">Drive</span>
          <span className="logo-dot">●</span>
        </div>

        <ul className="navbar-links">
          {links.map(l => (
            <li key={l} onClick={() => scrollTo(l)}>
              <span>{l}</span>
            </li>
          ))}
        </ul>

        <a href="#app" className="btn-primary navbar-cta" onClick={e => { e.preventDefault(); scrollTo('app'); }}>
          Download App
        </a>

        <button className="navbar-hamburger" onClick={() => setOpen(!open)}>
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {links.map(l => (
              <div key={l} className="mobile-link" onClick={() => scrollTo(l)}>{l}</div>
            ))}
            <a href="#app" className="btn-primary mobile-cta" onClick={e => { e.preventDefault(); scrollTo('app'); }}>
              Download App
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
