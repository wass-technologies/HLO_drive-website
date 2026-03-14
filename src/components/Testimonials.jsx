import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const reviews = [
  { name: 'Priya Chatterjee', area: 'Salt Lake, Kolkata', rating: 5, text: 'Absolutely love HLO Drive! Booked a driver for my parents\' hospital visit and the driver was so professional and punctual. Driver Aa Raha Hai is truly the promise they keep!' },
  { name: 'Arjun Bose', area: 'New Town, Kolkata', rating: 5, text: 'Best driver hire service in Kolkata. I use it for my daily office commute. The app is super smooth and drivers are always on time. Highly recommended!' },
  { name: 'Sneha Mukherjee', area: 'Ballygunge, Kolkata', rating: 5, text: 'Used HLO Drive for a wedding event. The driver was well-dressed, polite, and knew every route in the city. Premium experience at a very fair price.' },
  { name: 'Rahul Dey', area: 'Howrah, Kolkata', rating: 5, text: 'Corporate package is a game changer for our company. Monthly billing, dedicated drivers, and 24/7 support. HLO Drive has transformed our business travel.' },
  { name: 'Ananya Sen', area: 'Tollygunge, Kolkata', rating: 5, text: 'As a woman, safety is my top priority. HLO Drive\'s verified drivers and live tracking give me complete peace of mind. This is the future of driver hire in Kolkata!' },
  { name: 'Debashis Roy', area: 'Rajarhat, Kolkata', rating: 5, text: 'Booked a driver at 2 AM for an airport drop. The driver arrived in 4 minutes! Incredible service. The 24/7 availability is what sets HLO Drive apart.' },
];

export default function Testimonials() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="testimonials" className="testimonials-section" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-tag">💬 Real Reviews</div>
          <h2 className="section-title">Kolkata Loves <span className="gold-text">HLO Drive</span></h2>
          <p className="section-desc">Don't take our word for it — hear from thousands of happy riders across Kolkata Metro.</p>
        </motion.div>

        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              className="review-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <Quote size={24} className="review-quote-icon" />
              <p className="review-text">"{r.text}"</p>
              <div className="review-footer">
                <div className="review-avatar">{r.name[0]}</div>
                <div>
                  <div className="review-name">{r.name}</div>
                  <div className="review-area">{r.area}</div>
                </div>
                <div className="review-stars">
                  {[...Array(r.rating)].map((_, j) => <Star key={j} size={12} fill="#F5C518" color="#F5C518" />)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
