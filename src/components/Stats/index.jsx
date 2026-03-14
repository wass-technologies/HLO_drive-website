import { Component } from 'react';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import './Stats.scss';

const STATS = [
  { num: 10000, suffix: '+',    label: 'Happy Riders',      sub: 'Across Kolkata Metro',        decimals: 0 },
  { num: 500,   suffix: '+',    label: 'Pro Drivers',       sub: 'Verified & Trained',           decimals: 0 },
  { num: 4.8,   suffix: '',     label: 'App Rating',        sub: 'On Play Store & App Store',    decimals: 1 },
  { num: 3,     suffix: ' Min', label: 'Avg Booking Time',  sub: 'From tap to confirmation',     decimals: 0 },
];

class Stats extends Component {
  render() {
    return (
      <section className="stats">
        <div className="container">
          <InView triggerOnce threshold={0.3}>
            {({ ref, inView }) => (
              <div className="stats__grid" ref={ref}>
                {STATS.map((s, i) => (
                  <motion.div
                    key={i}
                    className="stats__card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                  >
                    <div className="stats__num">
                      {inView && (
                        <CountUp end={s.num} duration={2.5} decimals={s.decimals} separator="," />
                      )}
                      <span>{s.suffix}</span>
                    </div>
                    <div className="stats__label">{s.label}</div>
                    <div className="stats__sub">{s.sub}</div>
                  </motion.div>
                ))}
              </div>
            )}
          </InView>
        </div>
      </section>
    );
  }
}

export default Stats;
