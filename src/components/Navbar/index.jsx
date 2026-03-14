import { Component } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Navbar.scss';

const NAV_LINKS = ['Home', 'How It Works', 'Services', 'Why HLO', 'Coverage', 'App'];

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { scrolled: false, menuOpen: false };
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
    this.setState({ scrolled: window.scrollY > 40 });
  }

  scrollTo(label) {
    const id = label.toLowerCase().replace(/\s+/g, '-');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    this.setState({ menuOpen: false });
  }

  toggleMenu() {
    this.setState(prev => ({ menuOpen: !prev.menuOpen }));
  }

  render() {
    const { scrolled, menuOpen } = this.state;

    return (
      <motion.nav
        className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="container navbar__inner">

          <div className="navbar__logo" onClick={() => this.scrollTo('home')}>
            <span className="navbar__logo-hlo">HLO</span>
            <span className="navbar__logo-drive">Drive</span>
            <span className="navbar__logo-dot">●</span>
          </div>

          <ul className="navbar__links">
            {NAV_LINKS.map(link => (
              <li key={link} className="navbar__link" onClick={() => this.scrollTo(link)}>
                {link}
              </li>
            ))}
          </ul>

          <button className="btn-primary navbar__cta" onClick={() => this.scrollTo('app')}>
            Download App
          </button>

          <button className="navbar__hamburger" onClick={this.toggleMenu} aria-label="Toggle menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className="navbar__mobile"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              {NAV_LINKS.map(link => (
                <div key={link} className="navbar__mobile-link" onClick={() => this.scrollTo(link)}>
                  {link}
                </div>
              ))}
              <button className="btn-primary navbar__mobile-cta" onClick={() => this.scrollTo('app')}>
                Download App
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    );
  }
}

export default Navbar;
