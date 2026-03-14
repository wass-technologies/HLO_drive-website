import { Component } from 'react';
import { MapPin, Phone, Mail, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';
import './Footer.scss';

class Footer extends Component {
  render() {
    const year = new Date().getFullYear();

    return (
      <footer className="footer">
        <div className="container">
          <div className="footer__top">

            <div className="footer__brand">
              <div className="footer__logo">
                <span className="footer__logo-hlo">HLO</span>
                <span className="footer__logo-drive">Drive</span>
              </div>
              <p className="footer__tagline">Driver Aa Raha Hai</p>
              <p className="footer__about">
                Kolkata's premier driver-on-hire aggregator platform. Connecting riders with verified
                professional drivers across all Kolkata Metro areas.
              </p>
              <div className="footer__contact">
                <div className="footer__contact-item"><MapPin size={14} /> Kolkata, West Bengal, India</div>
                <div className="footer__contact-item"><Phone size={14} /> +91 98765 43210</div>
                <div className="footer__contact-item"><Mail size={14} /> hello@hlodrive.in</div>
              </div>
              <div className="footer__social">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
                <a href="https://twitter.com"   target="_blank" rel="noreferrer" aria-label="Twitter"><Twitter size={18} /></a>
                <a href="https://facebook.com"  target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={18} /></a>
                <a href="https://linkedin.com"  target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
              </div>
            </div>

            <div className="footer__col">
              <h4 className="footer__col-title">Services</h4>
              <ul className="footer__col-links">
                {['Hourly Driver Hire','Full Day Hire','Corporate Hire','Night Hire','Airport Transfer'].map(l => (
                  <li key={l}><a href="#services">{l}</a></li>
                ))}
              </ul>
            </div>

            <div className="footer__col">
              <h4 className="footer__col-title">Coverage Areas</h4>
              <ul className="footer__col-links">
                {['Salt Lake & New Town','Park Street & Esplanade','Ballygunge & Gariahat','Howrah & Shibpur','Dum Dum & Ultadanga'].map(l => (
                  <li key={l}><a href="#coverage">{l}</a></li>
                ))}
              </ul>
            </div>

            <div className="footer__col">
              <h4 className="footer__col-title">Company</h4>
              <ul className="footer__col-links">
                {['About HLO Drive','Become a Driver','Partner With Us','Privacy Policy','Terms of Service'].map(l => (
                  <li key={l}><a href="#home">{l}</a></li>
                ))}
              </ul>
            </div>

          </div>

          <div className="footer__bottom">
            <p>© {year} HLO Drive. All rights reserved. | Driver Aa Raha Hai | Kolkata, India</p>
            <p className="footer__seo">
              Driver on hire Kolkata · Hire driver Kolkata · Personal driver Kolkata · Driver booking app
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
