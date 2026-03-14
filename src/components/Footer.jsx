import { MapPin, Phone, Mail, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-hlo">HLO</span>
              <span className="logo-drive">Drive</span>
            </div>
            <p className="footer-tagline">Driver Aa Raha Hai</p>
            <p className="footer-about">
              Kolkata's premier driver-on-hire aggregator platform. Connecting riders with verified professional drivers across all Kolkata Metro areas.
            </p>
            <div className="footer-contact">
              <div className="contact-item"><MapPin size={14} /> Kolkata, West Bengal, India</div>
              <div className="contact-item"><Phone size={14} /> +91 98765 43210</div>
              <div className="contact-item"><Mail size={14} /> hello@hlodrive.in</div>
            </div>
            <div className="footer-social">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><Twitter size={18} /></a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook size={18} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
            </div>
          </div>

          <div className="footer-links-group">
            <h4>Services</h4>
            <ul>
              <li><a href="#services">Hourly Driver Hire</a></li>
              <li><a href="#services">Full Day Hire</a></li>
              <li><a href="#services">Corporate Hire</a></li>
              <li><a href="#services">Night Hire</a></li>
              <li><a href="#services">Airport Transfer</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4>Coverage Areas</h4>
            <ul>
              <li><a href="#coverage">Salt Lake & New Town</a></li>
              <li><a href="#coverage">Park Street & Esplanade</a></li>
              <li><a href="#coverage">Ballygunge & Gariahat</a></li>
              <li><a href="#coverage">Howrah & Shibpur</a></li>
              <li><a href="#coverage">Dum Dum & Ultadanga</a></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4>Company</h4>
            <ul>
              <li><a href="#home">About HLO Drive</a></li>
              <li><a href="#home">Become a Driver</a></li>
              <li><a href="#home">Partner With Us</a></li>
              <li><a href="#home">Privacy Policy</a></li>
              <li><a href="#home">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {year} HLO Drive. All rights reserved. | Driver Aa Raha Hai | Kolkata, India</p>
          <p className="footer-seo-text">
            Driver on hire Kolkata · Hire driver Kolkata · Personal driver Kolkata · Driver booking app
          </p>
        </div>
      </div>
    </footer>
  );
}
