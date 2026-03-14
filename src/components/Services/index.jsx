import { Component } from 'react';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import { Clock, Calendar, Briefcase, Moon, Star } from 'lucide-react';
import './Services.scss';

const SERVICES = [
  { icon: <Clock size={24} />,     title: 'Hourly Hire',    tag: 'Most Popular', tagMod: 'gold',   desc: 'Need a driver for a few hours? Book by the hour for errands, appointments, or shopping trips.' },
  { icon: <Calendar size={24} />,  title: 'Full Day Hire',  tag: 'Best Value',   tagMod: 'green',  desc: 'Your personal driver for the entire day. Perfect for business meetings, events, or city tours.' },
  { icon: <Briefcase size={24} />, title: 'Corporate Hire', tag: 'Enterprise',   tagMod: 'blue',   desc: 'Dedicated driver solutions for businesses. Monthly packages with priority booking and invoicing.' },
  { icon: <Moon size={24} />,      title: 'Night Hire',     tag: '24/7 Available', tagMod: 'purple', desc: 'Late night events, airport drops, or early morning pickups — we have you covered 24/7.' },
];

class Services extends Component {
  render() {
    return (
      <section id="services" className="services">
        <div className="container">
          <InView triggerOnce threshold={0.15}>
            {({ ref, inView }) => (
              <div ref={ref}>
                <motion.div
                  className="section-header"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                >
                  <div className="section-tag"><Star size={12} /> Our Services</div>
                  <h2 className="section-title">
                    Driver Hire for <span className="gold-text">Every Need</span>
                  </h2>
                  <p className="section-desc">
                    From quick errands to full-day corporate assignments — HLO Drive has the perfect plan for you.
                  </p>
                </motion.div>

                <div className="services__grid">
                  {SERVICES.map((s, i) => (
                    <motion.div
                      key={i}
                      className="services__card"
                      initial={{ opacity: 0, y: 40 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: i * 0.1 }}
                    >
                      <div className={`services__tag services__tag--${s.tagMod}`}>{s.tag}</div>
                      <div className="services__icon">{s.icon}</div>
                      <h3 className="services__title">{s.title}</h3>
                      <p className="services__desc">{s.desc}</p>
                      <div className="services__cta">Book Now →</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </InView>
        </div>
      </section>
    );
  }
}

export default Services;
