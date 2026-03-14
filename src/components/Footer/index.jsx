import { Component } from 'react';
import './Footer.scss';

const SERVICES_LINKS = [
  { label: 'Hourly Hire',    href: '#services' },
  { label: 'Full Day Hire',  href: '#services' },
  { label: 'Night Hire',     href: '#services' },
];

const RESOURCES_LINKS = [
  { label: 'How It Works',   href: '#how-it-works' },
  { label: 'Coverage Areas', href: '#coverage' },
  { label: 'Driver Partner', href: '#hiring' },
  { label: 'Blog',           href: '#blog' },
  { label: 'Support',        href: '#support' },
];

const COMPANY_LINKS = [
  { label: 'About',          href: '#about',   hiring: false },
  { label: 'Vision',         href: '#vision',  hiring: false },
  { label: 'Careers',        href: '#careers', hiring: true  },
  { label: 'Privacy Policy', href: '#privacy', hiring: false },
  { label: 'Contact Us',     href: '#contact', hiring: false },
];

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ email: '' });
  }

  render() {
    const year = new Date().getFullYear();

    return (
      <footer className="footer">

        {/* ── Silver top line ── */}
        <div className="footer__line" />

        <div className="footer__body">

          {/* ── Main Grid ── */}
          <div className="footer__grid">

            {/* Brand + Newsletter */}
            <div className="footer__brand">
              <a href="#home" className="footer__logo-link">
                <img src="/logo.png" alt="HLO Drive" className="footer__logo" />
              </a>
              <p className="footer__desc">
                Join our newsletter for regular updates on new areas, offers, and driver stories from Kolkata.
              </p>
              <form className="footer__newsletter" onSubmit={this.handleSubmit}>
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="footer__newsletter-input"
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })}
                  required
                />
                <button type="submit" className="footer__newsletter-btn">
                  Subscribe
                </button>
              </form>
            </div>

            {/* Link Columns */}
            <div className="footer__cols">

              {/* Services */}
              <div className="footer__col">
                <h3 className="footer__col-title">Services</h3>
                <ul className="footer__col-list">
                  {SERVICES_LINKS.map(l => (
                    <li key={l.label}>
                      <a href={l.href} className="footer__col-link">{l.label}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources */}
              <div className="footer__col">
                <h3 className="footer__col-title">Resources</h3>
                <ul className="footer__col-list">
                  {RESOURCES_LINKS.map(l => (
                    <li key={l.label}>
                      <a href={l.href} className="footer__col-link">{l.label}</a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div className="footer__col footer__col--span">
                <h3 className="footer__col-title">Company</h3>
                <ul className="footer__col-list">
                  {COMPANY_LINKS.map(l => (
                    <li key={l.label} className="footer__col-item">
                      <a href={l.href} className="footer__col-link">{l.label}</a>
                      {l.hiring && (
                        <span className="footer__hiring-badge">HIRING</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          {/* ── Bottom Bar ── */}
          <div className="footer__bottom">
            <p className="footer__copy">&copy; {year} HLO Drive</p>

            <div className="footer__social">

              {/* X / Twitter */}
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="footer__social-link" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
              </a>

              {/* GitHub */}
              <a href="https://github.com" target="_blank" rel="noreferrer" className="footer__social-link" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                  <path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="footer__social-link" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>

              {/* YouTube */}
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="footer__social-link" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
              </a>

              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer__social-link" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>

            </div>
          </div>

        </div>
      </footer>
    );
  }
}

export default Footer;
