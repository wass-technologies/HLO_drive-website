import { Component } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import './Header.scss';

const NAV_LINKS = [
  { label: 'Home',         href: '#home' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Services',     href: '#services' },
  { label: 'Why HLO',      href: '#why-hlo' },
  { label: 'Coverage',     href: '#coverage' },
];

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { scrolled: false, menuOpen: false };
    this.handleScroll = this.handleScroll.bind(this);
    this.scrollTo     = this.scrollTo.bind(this);
    this.toggleMenu   = this.toggleMenu.bind(this);
  }

  componentDidMount()    { window.addEventListener('scroll', this.handleScroll); }
  componentWillUnmount() { window.removeEventListener('scroll', this.handleScroll); }

  handleScroll() { this.setState({ scrolled: window.scrollY > 10 }); }

  scrollTo(href) {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    this.setState({ menuOpen: false });
  }

  toggleMenu() {
    this.setState(prev => ({ menuOpen: !prev.menuOpen }));
  }

  render() {
    const { scrolled, menuOpen } = this.state;

    return (
      <>
        <motion.header
          className={`header${scrolled ? ' header--scrolled' : ''}`}
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* ── Announcement Banner ── */}
          <div className="header__banner">
            <p>
              Get 20% OFF on Your First Booking!{' '}
              <a href="#app" className="header__banner-link"
                onClick={e => { e.preventDefault(); this.scrollTo('#app'); }}>
                Download Now
              </a>
            </p>
            <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
              <path d="M1 5.5h13.092M8.949 1l5.143 4.5L8.949 10"
                stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="header__inner">
            {/* Logo */}
            <a href="#home" className="header__logo"
              onClick={e => { e.preventDefault(); this.scrollTo('#home'); }}>
              <img src="/logo.png" alt="HLO Drive" />
            </a>

            {/* Desktop Nav */}
            <nav className="header__nav">
              {NAV_LINKS.map(link => (
                <a key={link.label} href={link.href} className="header__nav-link"
                  onClick={e => { e.preventDefault(); this.scrollTo(link.href); }}>
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Desktop CTA */}
            <a href="#app" className="header__cta"
              onClick={e => { e.preventDefault(); this.scrollTo('#app'); }}>
              Download App
            </a>

            {/* Hamburger */}
            <button className="header__hamburger" onClick={this.toggleMenu} aria-label="Toggle menu">
              <span className={`header__ham-bar header__ham-bar--1${menuOpen ? ' open' : ''}`} />
              <span className={`header__ham-bar header__ham-bar--2${menuOpen ? ' open' : ''}`} />
              <span className={`header__ham-bar header__ham-bar--3${menuOpen ? ' open' : ''}`} />
            </button>
          </div>

          <div className="header__line" />
        </motion.header>

        {/* ── Drawer Overlay ── */}
        <AnimatePresence>
          {menuOpen && (
            <>
              <motion.div
                className="header__overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={this.toggleMenu}
              />

              <motion.div
                className="header__drawer"
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Drawer Header */}
                <div className="header__drawer-top">
                  <img src="/logo.png" alt="HLO Drive" className="header__drawer-logo" />
                  <button className="header__drawer-close" onClick={this.toggleMenu} aria-label="Close menu">
                    <X size={22} />
                  </button>
                </div>

                {/* Nav Links */}
                <nav className="header__drawer-nav">
                  {NAV_LINKS.map((link, i) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      className="header__drawer-link"
                      onClick={e => { e.preventDefault(); this.scrollTo(link.href); }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.06, duration: 0.3 }}
                    >
                      {link.label}
                    </motion.a>
                  ))}

                  {/* Register as Driver Partner — badge */}
                  <motion.a
                    href="#driver"
                    className="header__drawer-link header__drawer-link--driver"
                    onClick={e => { e.preventDefault(); this.scrollTo('#driver'); }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + NAV_LINKS.length * 0.06, duration: 0.3 }}
                  >
                    Register as Driver Partner
                    <span className="header__drawer-badge">Hiring</span>
                  </motion.a>
                </nav>

                {/* Divider */}
                <div className="header__drawer-divider" />

                {/* App Download */}
                <div className="header__drawer-apps">
                  <p className="header__drawer-apps-label">Download the App</p>
                  <a href="https://play.google.com/store" target="_blank" rel="noreferrer"
                    className="header__drawer-store">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3.18 23.76a2 2 0 0 0 2.07-.22l11.4-6.58-2.93-2.93-10.54 9.73zM.5 1.5A2 2 0 0 0 0 2.86v18.28a2 2 0 0 0 .5 1.36l.07.07 10.24-10.24v-.24L.57 1.43.5 1.5zM20.32 10.27l-2.93-1.69-3.27 3.27 3.27 3.27 2.96-1.71a2 2 0 0 0 0-3.14zM5.25.46 16.65 7.04l-2.93 2.93L3.18.24A2 2 0 0 1 5.25.46z" />
                    </svg>
                    <div>
                      <span>Get it on</span>
                      <strong>Google Play</strong>
                    </div>
                  </a>
                  <a href="https://apps.apple.com" target="_blank" rel="noreferrer"
                    className="header__drawer-store">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    <div>
                      <span>Download on the</span>
                      <strong>App Store</strong>
                    </div>
                  </a>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </>
    );
  }
}

export default Header;
