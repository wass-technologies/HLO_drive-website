import { Component } from 'react';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import { Download, MapPin, Car } from 'lucide-react';
import './HowItWorks.scss';

const STEPS = [
  {
    icon: <Download size={28} />,
    step: '01',
    title: 'Download & Sign Up',
    desc: 'Get the HLO Drive app on Android or iOS. Register in under 60 seconds with your phone number.',
  },
  {
    icon: <MapPin size={28} />,
    step: '02',
    title: 'Set Your Location',
    desc: 'Enter your pickup point anywhere in Kolkata Metro. Our smart GPS finds the nearest available driver.',
  },
  {
    icon: <Car size={28} />,
    step: '03',
    title: 'Driver Aa Raha Hai!',
    desc: 'Your verified professional driver arrives in minutes. Sit back, relax, and enjoy the ride.',
  },
];

class HowItWorks extends Component {
  render() {
    return (
      <section id="how-it-works" className="hiw">
        <div className="container">
          <InView triggerOnce threshold={0.2}>
            {({ ref, inView }) => (
              <div ref={ref}>
                <motion.div
                  className="section-header"
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6 }}
                >
                  <div className="section-tag">⚡ Simple Process</div>
                  <h2 className="section-title">
                    Book a Driver in <span className="gold-text">3 Easy Steps</span>
                  </h2>
                  <p className="section-desc">
                    No hassle, no waiting. The fastest driver booking experience in Kolkata.
                  </p>
                </motion.div>

                <div className="hiw__grid">
                  {STEPS.map((s, i) => (
                    <motion.div
                      key={i}
                      className="hiw__card"
                      initial={{ opacity: 0, y: 40 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: i * 0.15 }}
                    >
                      <div className="hiw__step-num">{s.step}</div>
                      <div className="hiw__icon">{s.icon}</div>
                      <h3 className="hiw__title">{s.title}</h3>
                      <p className="hiw__desc">{s.desc}</p>
                      {i < STEPS.length - 1 && <div className="hiw__connector" />}
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

export default HowItWorks;
