import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Shield, Zap } from 'lucide-react';
import './AppCTA.css';

export default function AppCTA() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="app" className="appcta-section" ref={ref}>
      <div className="appcta-bg">
        <div className="appcta-orb-1" />
        <div className="appcta-orb-2" />
      </div>
      <div className="container">
        <div className="appcta-inner">
          <motion.div
            className="appcta-content"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="section-tag">📱 Get The App</div>
            <h2 className="appcta-title">
              Download HLO Drive<br />
              <span className="gold-text">Driver Aa Raha Hai!</span>
            </h2>
            <p className="appcta-desc">
              Join 10,000+ Kolkatans who trust HLO Drive for safe, reliable, and professional driver hire.
              Available on Android & iOS — completely free to download.
            </p>

            <div className="appcta-badges">
              <div className="appcta-badge"><Shield size={16} color="#22c55e" /> Police Verified Drivers</div>
              <div className="appcta-badge"><Zap size={16} color="#F5C518" /> 3 Min Booking</div>
              <div className="appcta-badge"><Star size={16} color="#F5C518" fill="#F5C518" /> 4.8★ Rated</div>
            </div>

            <div className="appcta-stores">
              <a href="https://play.google.com/store" target="_blank" rel="noreferrer" className="store-btn-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76a2 2 0 0 0 2.07-.22l11.4-6.58-2.93-2.93-10.54 9.73zM.5 1.5A2 2 0 0 0 0 2.86v18.28a2 2 0 0 0 .5 1.36l.07.07 10.24-10.24v-.24L.57 1.43.5 1.5zM20.32 10.27l-2.93-1.69-3.27 3.27 3.27 3.27 2.96-1.71a2 2 0 0 0 0-3.14zM5.25.46 16.65 7.04l-2.93 2.93L3.18.24A2 2 0 0 1 5.25.46z"/></svg>
                <div>
                  <span className="store-sub-lg">Get it on</span>
                  <span className="store-name-lg">Google Play</span>
                </div>
              </a>
              <a href="https://apps.apple.com" target="_blank" rel="noreferrer" className="store-btn-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
                <div>
                  <span className="store-sub-lg">Download on the</span>
                  <span className="store-name-lg">App Store</span>
                </div>
              </a>
            </div>

            <div className="appcta-rating">
              <div className="rating-stars">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#F5C518" color="#F5C518" />)}
              </div>
              <span>4.8 out of 5 · 2,400+ reviews</span>
            </div>
          </motion.div>

          <motion.div
            className="appcta-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="qr-card">
              <div className="qr-placeholder">
                <div className="qr-grid">
                  {[...Array(25)].map((_, i) => (
                    <div key={i} className={`qr-cell ${Math.random() > 0.5 ? 'filled' : ''}`} />
                  ))}
                </div>
              </div>
              <div className="qr-label">Scan to Download</div>
              <div className="qr-sub">HLO Drive App</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
