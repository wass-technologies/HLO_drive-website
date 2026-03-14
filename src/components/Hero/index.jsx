import { Component } from 'react';
import { motion } from 'framer-motion';
import './Hero.scss';

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 32 },
  animate:    { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
});

const STATS = [
  { num: '20+',  label: 'Years Experience' },
  { num: '12k+', label: 'Rides Completed' },
  { num: '5k+',  label: 'Happy Customers' },
  { num: '5+',   label: 'Metro Zones' },
];

class Hero extends Component {
  render() {
    return (
      <section className="hero" id="home">

        {/* ── Ping Badge ── */}
        <motion.div className="hero__ping-wrap" {...fadeUp(0.1)}>
          <div className="hero__ping">
            <span className="hero__ping-ring" />
            <span className="hero__ping-dot" />
          </div>
          <p className="hero__ping-text">Join 10,000+ riders trusting HLO Drive</p>
        </motion.div>

        {/* ── Headline ── */}
        <motion.h1 className="hero__title" {...fadeUp(0.2)}>
          Your Personal Driver,<br />
          Always On Time.
        </motion.h1>

        {/* ── Description ── */}
        <motion.p className="hero__desc" {...fadeUp(0.3)}>
          We connect you with verified, professional drivers across Kolkata Metro.
          From daily commutes to late-night rides — safe, reliable, and always on time.
        </motion.p>

        {/* ── CTAs ── */}
        <motion.div className="hero__actions" {...fadeUp(0.4)}>
          <a href="#app" className="hero__btn hero__btn--primary">Book a Driver Now</a>
          <a href="#how" className="hero__btn hero__btn--outline">See How It Works</a>
        </motion.div>

        {/* ── Divider ── */}
        <motion.div className="hero__divider" {...fadeUp(0.48)} />

        {/* ── Stats ── */}
        <motion.div className="hero__stats" {...fadeUp(0.54)}>
          {STATS.map((s, i) => (
            <div key={i} className="hero__stat">
              <h2 className="hero__stat-num">{s.num}</h2>
              <p className="hero__stat-label">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* ── Features Grid ── */}
        <motion.div className="hero__features-wrap" {...fadeUp(0.62)}>

          <div className="hero__features-header">
            <span className="hero__features-badge">Why HLO Drive</span>
            <h2 className="hero__features-title">Everything you need, nothing you don't</h2>
            <p className="hero__features-desc">Built for Kolkata's roads — fast booking, verified drivers, and seamless payments in one tap.</p>
          </div>

          <div className="hero__features-grid">
            <div className="hero__feature">
              <div className="hero__feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <h3 className="hero__feature-title">Live Driver Tracking</h3>
              <p className="hero__feature-desc">Watch your driver's real-time location on the map from booking to arrival.</p>
            </div>

            <div className="hero__feature">
              <div className="hero__feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
                  <rect width="18" height="7" x="3" y="3" rx="1"/>
                  <rect width="7" height="7" x="3" y="14" rx="1"/>
                  <rect width="7" height="7" x="14" y="14" rx="1"/>
                </svg>
              </div>
              <h3 className="hero__feature-title">3-Minute Booking</h3>
              <p className="hero__feature-desc">Book a verified driver in under 3 minutes — no calls, no waiting, no hassle.</p>
            </div>

            <div className="hero__feature">
              <div className="hero__feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 3v16a2 2 0 0 0 2 2h16"/>
                  <path d="M7 16c.5-2 1.5-7 4-7 2 0 2 3 4 3 2.5 0 4.5-5 5-7"/>
                </svg>
              </div>
              <h3 className="hero__feature-title">Seamless Payments</h3>
              <p className="hero__feature-desc">Pay via UPI, card, or wallet — transparent pricing with zero hidden charges.</p>
            </div>
          </div>
        </motion.div>

      </section>
    );
  }
}

export default Hero;
