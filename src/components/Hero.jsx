import { motion } from 'framer-motion';
import { Star, MapPin, Shield, Clock } from 'lucide-react';
import './Hero.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }
});

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* Background */}
      <div className="hero-bg">
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-grid" />
      </div>

      <div className="container hero-inner">
        {/* Left Content */}
        <div className="hero-content">
          <motion.div {...fadeUp(0.1)}>
            <div className="hero-badge">
              <MapPin size={12} />
              <span>Now Live in Kolkata Metro</span>
              <span className="badge-dot" />
              <span className="badge-live">LIVE</span>
            </div>
          </motion.div>

          <motion.h1 className="hero-title" {...fadeUp(0.2)}>
            Your Personal<br />
            Driver is Just<br />
            <span className="gold-text">One Tap Away</span>
          </motion.h1>

          <motion.p className="hero-tagline" {...fadeUp(0.3)}>
            <span className="tagline-hindi">Driver Aa Raha Hai</span>
            <span className="tagline-sep">—</span>
            Kolkata's most trusted driver-on-hire platform
          </motion.p>

          <motion.p className="hero-desc" {...fadeUp(0.35)}>
            Book a verified, professional driver across all Kolkata Metro areas in under 3 minutes.
            Safe, reliable, and always on time.
          </motion.p>

          <motion.div className="hero-actions" {...fadeUp(0.45)}>
            <a href="https://play.google.com/store" target="_blank" rel="noreferrer" className="store-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76a2 2 0 0 0 2.07-.22l11.4-6.58-2.93-2.93-10.54 9.73zM.5 1.5A2 2 0 0 0 0 2.86v18.28a2 2 0 0 0 .5 1.36l.07.07 10.24-10.24v-.24L.57 1.43.5 1.5zM20.32 10.27l-2.93-1.69-3.27 3.27 3.27 3.27 2.96-1.71a2 2 0 0 0 0-3.14zM5.25.46 16.65 7.04l-2.93 2.93L3.18.24A2 2 0 0 1 5.25.46z"/></svg>
              <div>
                <span className="store-sub">Get it on</span>
                <span className="store-name">Google Play</span>
              </div>
            </a>
            <a href="https://apps.apple.com" target="_blank" rel="noreferrer" className="store-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              <div>
                <span className="store-sub">Download on the</span>
                <span className="store-name">App Store</span>
              </div>
            </a>
          </motion.div>

          <motion.div className="hero-stats" {...fadeUp(0.55)}>
            <div className="hero-stat">
              <span className="stat-num">10K+</span>
              <span className="stat-label">Happy Riders</span>
            </div>
            <div className="stat-divider" />
            <div className="hero-stat">
              <span className="stat-num">500+</span>
              <span className="stat-label">Pro Drivers</span>
            </div>
            <div className="stat-divider" />
            <div className="hero-stat">
              <div className="stat-stars">
                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#F5C518" color="#F5C518" />)}
              </div>
              <span className="stat-label">4.8 Rating</span>
            </div>
          </motion.div>
        </div>

        {/* Right — Phone Mockup */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="phone-glow" />
          <div className="phone-mockup animate-float">
            <div className="phone-screen">
              <div className="phone-status-bar">
                <span>9:41</span>
                <span>●●●</span>
              </div>
              <div className="phone-app-header">
                <span className="app-logo-text">HLO<span>Drive</span></span>
                <div className="app-notif"><Shield size={14} /></div>
              </div>
              <div className="phone-map-area">
                <div className="map-pin-anim">
                  <MapPin size={28} color="#F5C518" fill="rgba(245,197,24,0.2)" />
                </div>
                <div className="map-route" />
                <div className="map-car">🚗</div>
              </div>
              <div className="phone-booking-card">
                <div className="booking-driver">
                  <div className="driver-avatar">R</div>
                  <div>
                    <div className="driver-name">Rajesh Kumar</div>
                    <div className="driver-rating"><Star size={10} fill="#F5C518" color="#F5C518" /> 4.9 · 3 min away</div>
                  </div>
                  <div className="driver-badge"><Shield size={12} /> Verified</div>
                </div>
                <div className="booking-eta">
                  <Clock size={14} color="#F5C518" />
                  <span>Driver Aa Raha Hai!</span>
                </div>
              </div>
            </div>
          </div>

          {/* Floating badges */}
          <motion.div
            className="float-badge float-badge-1"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          >
            <Shield size={16} color="#F5C518" />
            <span>100% Verified</span>
          </motion.div>
          <motion.div
            className="float-badge float-badge-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 1 }}
          >
            <Clock size={16} color="#F5C518" />
            <span>3 Min Booking</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="scroll-line" />
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  );
}
