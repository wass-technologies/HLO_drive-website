import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import './Stats.css';

const stats = [
  { num: 10000, suffix: '+', label: 'Happy Riders', sub: 'Across Kolkata Metro' },
  { num: 500, suffix: '+', label: 'Pro Drivers', sub: 'Verified & Trained' },
  { num: 4.8, suffix: '', label: 'App Rating', sub: 'On Play Store & App Store', decimals: 1 },
  { num: 3, suffix: ' Min', label: 'Avg Booking Time', sub: 'From tap to confirmation' },
];

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="stats-section" ref={ref}>
      <div className="container">
        <div className="stats-grid">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              className="stat-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="stat-card-num">
                {inView && (
                  <CountUp
                    end={s.num}
                    duration={2.5}
                    decimals={s.decimals || 0}
                    separator=","
                  />
                )}
                <span>{s.suffix}</span>
              </div>
              <div className="stat-card-label">{s.label}</div>
              <div className="stat-card-sub">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
