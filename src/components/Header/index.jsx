import { Component } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
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
    this.state = {
      scrolled: false,
      menuOpen: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.scrollTo     = this.scrollTo.bind(this);
    this.toggleMenu   = this.toggleMenu.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    this.setState({ scrolled: window.scrollY > 10 });
  }

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
      <motion.header
        className={`header${scrolled ? ' header--scrolled' : ''}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="header__inner">

          {/* Logo */}
          <a
            href="#home"
            className="header__logo"
            onClick={e => { e.preventDefault(); this.scrollTo('#home'); }}
          >
            <img src="/logo.png" alt="HLO Drive" />
          </a>

          {/* Desktop Nav */}
          <nav className="header__nav">
            {NAV_LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="header__nav-link"
                onClick={e => { e.preventDefault(); this.scrollTo(link.href); }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#app"
            className="header__cta"
            onClick={e => { e.preventDefault(); this.scrollTo('#app'); }}
          >
            Download App
          </a>

          {/* Hamburger */}
          <button
            className="header__hamburger"
            onClick={this.toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Silver bottom line */}
        <div className="header__line" />

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="header__mobile"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: 'easeInOut' }}
            >
              {NAV_LINKS.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="header__mobile-link"
                  onClick={e => { e.preventDefault(); this.scrollTo(link.href); }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#app"
                className="header__mobile-cta"
                onClick={e => { e.preventDefault(); this.scrollTo('#app'); }}
              >
                Download App
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    );
  }
}

export default Header;
