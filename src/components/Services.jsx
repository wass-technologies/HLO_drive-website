import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, Calendar, Briefcase, Moon, Star } from 'lucide-react';
import './Services.css';

const services = [
  {
    icon: <Clock size={24} />,
    title: 'Hourly Hire',
    desc: 'Need a driver for a few hours? Book by the hour for errands, appointments, or shopping trips.',
    tag: 'Most Popular',
    tagColor: 'gold',
  },
  {
    icon: <Calendar size={24} />,
    title: 'Full Day Hire',
    desc: 'Your personal driver for the entire day. Perfect for business meetings, events, or city tours.',
    tag: 'Best Value',
    tagColor: 'green',
  },
  {
    icon: <Briefcase size={24} />,
    title: 'Corporate Hire',
    desc: 'Dedicated driver solutions for businesses. Monthly packages with priority booking and invoicing.',
    tag: 'Enterprise',
    tagColor: 'blue',
  },
  {
    icon: <Moon size={24} />,
    title: 'Night Hire',
    desc: 'Late night events, airport drops, or early morning pickups — we have you covered 24/7.',
    tag: '24/7 Available',
    tagColor: 'purple',
  },
];

export default function Services() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="services" className="services-section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag"><Star size={12} /> Our Services</div>
          <h2 className="section-title">Driver Hire for <span className="gold-text">Every Need</span></h2>
          <p className="section-desc">From quick errands to full-day corporate assignments — HLO Drive has the perfect plan for you.</p>
        </motion.div>

        <div className="services-grid">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="service-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className={`service-tag service-tag-${s.tagColor}`}>{s.tag}</div>
              <div className="service-icon">{s.icon}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <div className="service-cta">Book Now →</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
