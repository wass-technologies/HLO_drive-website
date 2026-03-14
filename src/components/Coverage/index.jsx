import { Component } from 'react';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import { MapPin, CheckCircle } from 'lucide-react';
import './Coverage.scss';

const ZONES = [
  { zone: 'North Kolkata',   areas: ['Shyambazar', 'Ultadanga', 'Dum Dum', 'Belgachia', 'Sinthee'] },
  { zone: 'Central Kolkata', areas: ['Park Street', 'Esplanade', 'Dalhousie', 'Sealdah', 'Entally'] },
  { zone: 'South Kolkata',   areas: ['Ballygunge', 'Gariahat', 'Tollygunge', 'Jadavpur', 'Behala'] },
  { zone: 'East Kolkata',    areas: ['Salt Lake', 'New Town', 'Rajarhat', 'Kasba', 'Phoolbagan'] },
  { zone: 'West (Howrah)',   areas: ['Howrah', 'Shibpur', 'Liluah', 'Bally', 'Santragachi'] },
  { zone: 'South-West',      areas: ['Alipore', 'Kidderpore', 'Garden Reach', 'Majerhat', 'Taratala'] },
];

class Coverage extends Component {
  render() {
    return (
      <section id="coverage" className="coverage">
        <div className="container">
          <InView triggerOnce threshold={0.1}>
            {({ ref, inView }) => (
              <div ref={ref}>
                <motion.div
                  className="section-header"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                >
                  <div className="section-tag"><MapPin size={12} /> Service Coverage</div>
                  <h2 className="section-title">
                    We Cover All of <span className="gold-text">Kolkata Metro</span>
                  </h2>
                  <p className="section-desc">
                    From the City of Joy's heart to its every corner — HLO Drive is everywhere you need us.
                  </p>
                </motion.div>

                <div className="coverage__grid">
                  {ZONES.map((z, i) => (
                    <motion.div
                      key={i}
                      className="coverage__zone"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: i * 0.08 }}
                    >
                      <div className="coverage__zone-header">
                        <MapPin size={16} color="#F5C518" />
                        <span className="coverage__zone-name">{z.zone}</span>
                      </div>
                      <div className="coverage__zone-areas">
                        {z.areas.map((a, j) => (
                          <div key={j} className="coverage__area">
                            <CheckCircle size={12} color="#22c55e" />
                            <span>{a}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="coverage__cta"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <span>
                    <span className="gold-text">Don't see your area?</span> We're expanding rapidly across Greater Kolkata.
                  </span>
                  <a href="mailto:hello@hlodrive.in" className="btn-outline">Request Your Area</a>
                </motion.div>
              </div>
            )}
          </InView>
        </div>
      </section>
    );
  }
}

export default Coverage;
