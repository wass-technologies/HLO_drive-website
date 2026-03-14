import { Component, createRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Features.scss';

gsap.registerPlugin(ScrollTrigger);

const SECTIONS = [
  {
    badge:  'Live Tracking',
    title:  'Watch your driver arrive in real time',
    desc:   'Track your driver on a live map from the moment you book. Know exactly when they arrive — no guessing, no waiting.',
    img:    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80',
    accent: '#F4C227',
    num:    '01',
  },
  {
    badge:  '3-Min Booking',
    title:  'Book a verified driver in under 3 minutes',
    desc:   'No calls, no delays. Open the app, pick your location, and a professional driver is on the way before you finish your chai.',
    img:    'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    accent: '#113BF6',
    num:    '02',
  },
  {
    badge:  'Safe & Verified',
    title:  'Every driver is background-checked and trained',
    desc:   'All HLO Drive partners go through rigorous verification, training, and rating reviews so you always ride with confidence.',
    img:    'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=1200&q=80',
    accent: '#7c3aed',
    num:    '03',
  },
  {
    badge:  'Easy Payments',
    title:  'Pay seamlessly — UPI, card, or wallet',
    desc:   'Transparent pricing with zero hidden charges. Pay the way you want, get an instant receipt, and manage all bookings in one place.',
    img:    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    accent: '#16a34a',
    num:    '04',
  },
];

class Features extends Component {
  constructor(props) {
    super(props);
    this.wrapRef   = createRef();
    this.imgRefs   = SECTIONS.map(() => createRef());
    this.cardRefs  = SECTIONS.map(() => createRef());
    this.textRefs  = SECTIONS.map(() => createRef());
    this.ctx       = null;
  }

  componentDidMount() {
    this.ctx = gsap.context(() => {
      SECTIONS.forEach((_, i) => {
        const card = this.cardRefs[i].current;
        const img  = this.imgRefs[i].current;
        const text = this.textRefs[i].current;

        // Card fade-in from below
        gsap.fromTo(card,
          { y: 80, opacity: 0 },
          {
            y: 0, opacity: 1,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start:   'top 88%',
            },
          }
        );

        // Image vertical parallax — scrubs smoothly with page scroll
        gsap.fromTo(img,
          { yPercent: -20 },
          {
            yPercent: 20,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              start:   'top bottom',
              end:     'bottom top',
              scrub:   true,
            },
          }
        );

        // Text children stagger in
        gsap.fromTo(Array.from(text.children),
          { y: 32, opacity: 0 },
          {
            y: 0, opacity: 1,
            duration: 0.75,
            ease: 'power2.out',
            stagger: 0.12,
            scrollTrigger: {
              trigger: card,
              start:   'top 80%',
            },
          }
        );
      });
    }, this.wrapRef.current);
  }

  componentWillUnmount() {
    if (this.ctx) this.ctx.revert();
  }

  render() {
    return (
      <section ref={this.wrapRef} className="feat" id="features">
        <div className="feat__container">

          {/* ── Section header ── */}
          <div className="feat__header">
            <span className="g-badge">Why HLO Drive</span>
            <h2 className="g-heading feat__heading">
              Everything you need,<br />nothing you don't.
            </h2>
            <p className="g-subtext feat__subtext">
              Built for Kolkata's roads — fast booking, verified drivers,
              and seamless payments in one tap.
            </p>
          </div>

          {/* ── Cards ── */}
          {SECTIONS.map((s, i) => (
            <div
              key={i}
              ref={this.cardRefs[i]}
              className={`feat__card${i % 2 !== 0 ? ' feat__card--flip' : ''}`}
            >
              {/* Image */}
              <div
                className="feat__img-wrap"
                style={{ background: `linear-gradient(145deg, ${s.accent}bb 0%, ${s.accent}33 100%)` }}
              >
                <img
                  ref={this.imgRefs[i]}
                  src={s.img}
                  alt={s.title}
                  className="feat__img"
                />
              </div>

              {/* Text */}
              <div className="feat__text-wrap">
                <div ref={this.textRefs[i]} className="feat__text">
                  <span className="feat__num">{s.num}</span>
                  <span
                    className="g-badge"
                    style={{
                      color:       s.accent,
                      background:  `${s.accent}18`,
                      borderColor: `${s.accent}44`,
                    }}
                  >
                    {s.badge}
                  </span>
                  <h3 className="g-heading feat__title">{s.title}</h3>
                  <p className="g-subtext">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>
    );
  }
}

export default Features;
