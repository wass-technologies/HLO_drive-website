import { Component } from 'react';
import './Footer.scss';

const COMPANY_LINKS = [
  { label: 'Home',           href: '#home',    isNew: false },
  { label: 'About Us',       href: '#about',   isNew: false },
  { label: 'Contact Us',     href: '#contact', isNew: false },
  { label: 'Privacy Policy', href: '#privacy', isNew: false },
];

const HIRING_LINKS = [
  { label: 'Driver Partner',    href: '#hiring', isNew: true  },
  { label: 'City Manager',      href: '#hiring', isNew: true  },
  { label: 'Support Executive', href: '#hiring', isNew: false },
  { label: 'Tech Internship',   href: '#hiring', isNew: false },
];

class Footer extends Component {
  render() {
    const year = new Date().getFullYear();

    return (
      <footer className="footer">

        {/* ── Silver top line — mirrors header ── */}
        <div className="footer__line" />

        {/* ── Top Row ── */}
        <div className="footer__top">

          {/* Brand */}
          <div className="footer__brand">
            <img src="/logo.png" alt="HLO Drive" className="footer__logo" />
            <p className="footer__desc">
              HLO Drive is Kolkata's most trusted driver-on-hire platform.
              Book a verified, professional driver across all Kolkata Metro
              areas in under 3 minutes. Safe, reliable, and always on time.
            </p>
            <div className="footer__apps">
              <a href="https://play.google.com/store" target="_blank" rel="noreferrer" className="footer__app-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76a2 2 0 0 0 2.07-.22l11.4-6.58-2.93-2.93-10.54 9.73zM.5 1.5A2 2 0 0 0 0 2.86v18.28a2 2 0 0 0 .5 1.36l.07.07 10.24-10.24v-.24L.57 1.43.5 1.5zM20.32 10.27l-2.93-1.69-3.27 3.27 3.27 3.27 2.96-1.71a2 2 0 0 0 0-3.14zM5.25.46 16.65 7.04l-2.93 2.93L3.18.24A2 2 0 0 1 5.25.46z" />
                </svg>
                <div>
                  <span className="footer__app-sub">Get it on</span>
                  <span className="footer__app-name">Google Play</span>
                </div>
              </a>
              <a href="https://apps.apple.com" target="_blank" rel="noreferrer" className="footer__app-btn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div>
                  <span className="footer__app-sub">Download on the</span>
                  <span className="footer__app-name">App Store</span>
                </div>
              </a>
            </div>
          </div>

          {/* Columns */}
          <div className="footer__cols">

            {/* Company */}
            <div className="footer__col">
              <h2 className="footer__col-title">Company</h2>
              <ul className="footer__col-list">
                {COMPANY_LINKS.map(l => (
                  <li key={l.label}>
                    <a href={l.href} className="footer__col-link">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* We're Hiring */}
            <div className="footer__col">
              <h2 className="footer__col-title">
                We're Hiring
                <span className="footer__hiring-badge">
                  <span className="footer__hiring-dot" />
                  OPEN
                </span>
              </h2>
              <ul className="footer__col-list">
                {HIRING_LINKS.map(l => (
                  <li key={l.label}>
                    <a href={l.href} className="footer__col-link footer__col-link--hiring">
                      {l.label}
                      {l.isNew && <span className="footer__new-badge">NEW</span>}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get in Touch */}
            <div className="footer__col">
              <h2 className="footer__col-title">Get in Touch</h2>
              <div className="footer__contact">
                <p>+91 98765 43210</p>
                <p>hello@hlodrive.in</p>
                <p>Kolkata, West Bengal, India</p>
              </div>
            </div>

          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <p className="footer__copy">
          Copyright {year} &copy; HLO Drive. All Rights Reserved.
        </p>

      </footer>
    );
  }
}

export default Footer;
