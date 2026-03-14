import { Component } from 'react';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import { Shield, Zap, Star, Headphones, CreditCard, MapPin } from 'lucide-react';
import './WhyHLO.scss';

const FEATURES = [
  { icon: <Shield size={22} />,     title: 'Police Verified Drivers',  desc: 'Every driver undergoes thorough background checks, police verification, and training before joining.' },
  { icon: <Zap size={22} />,        title: 'Instant Booking',          desc: 'Book a driver in under 3 minutes. Real-time GPS tracking from the moment of confirmation.' },
  { icon: <Star size={22} />,       title: 'Rated 4.8★ on Stores',     desc: 'Thousands of happy riders across Kolkata Metro trust HLO Drive for their daily commute.' },
  { icon: <Headphones size={22} />, title: '24/7 Customer Support',    desc: 'Round-the-clock support via chat, call, or email. We are always here when you need us.' },
  { icon: <CreditCard size={22} />, title: 'Transparent Pricing',      desc: 'No hidden charges. Pay only for what you book. Multiple payment options including UPI & cash.' },
  { icon: <MapPin size={22} />,     title: 'Full Metro Coverage',      desc: 'Covering all major areas of Kolkata Metro — from Salt Lake to Behala, Howrah to Rajarhat.' },
];

class WhyHLO extends Component {
  render() {
    return (
      <section id="why-hlo" className="why">
        <div className="container">
          <InView triggerOnce threshold={0.15}>
            {({ ref, inView }) => (
              <div className="why__inner" ref={ref}>

                <motion.div
                  className="why__left"
                  initial={{ opacity: 0, x: -40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7 }}
                >
                  <div className="section-tag">🏆 Why Choose Us</div>
                  <h2 className="section-title">
                    Kolkata's Most<br />
                    <span className="gold-text">Trusted Driver</span><br />
                    Platform
                  </h2>
                  <p className="why__desc">
                    We don't just connect you with drivers — we deliver a premium, safe, and reliable experience every single time.
                  </p>
                  <div className="why__highlight">
                    <div className="why__highlight-num">98%</div>
                    <div>
                      <div className="why__highlight-label">On-Time Arrival Rate</div>
                      <div className="why__highlight-sub">Across all Kolkata Metro bookings</div>
                    </div>
                  </div>
                </motion.div>

                <div className="why__right">
                  <div className="why__features">
                    {FEATURES.map((f, i) => (
                      <motion.div
                        key={i}
                        className="why__feature"
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: i * 0.08 }}
                      >
                        <div className="why__feature-icon">{f.icon}</div>
                        <div>
                          <div className="why__feature-title">{f.title}</div>
                          <div className="why__feature-desc">{f.desc}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

              </div>
            )}
          </InView>
        </div>
      </section>
    );
  }
}

export default WhyHLO;
