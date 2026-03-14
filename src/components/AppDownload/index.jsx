import { Component } from 'react';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import './AppDownload.scss';

class AppDownload extends Component {
  render() {
    return (
      <section className="appdownload">
        <div className="container">
          <InView triggerOnce threshold={0.2}>
            {({ ref, inView }) => (
              <div className="appdownload__card" ref={ref}>

                {/* ── Left Content ── */}
                <motion.div
                  className="appdownload__content"
                  initial={{ opacity: 0, x: -40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="appdownload__tag">📱 Mobile App</span>
                  <h2 className="appdownload__title">Download the HLO Drive App</h2>
                  <p className="appdownload__desc">
                    Book a verified driver in under 3 minutes. Available on Android &amp; iOS —
                    manage bookings, track your driver live, and pay seamlessly.
                  </p>

                  <div className="appdownload__btns">
                    <a
                      href="https://play.google.com/store"
                      target="_blank"
                      rel="noreferrer"
                      className="appdownload__store-btn"
                      aria-label="Get it on Google Play"
                    >
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3.18 23.76a2 2 0 0 0 2.07-.22l11.4-6.58-2.93-2.93-10.54 9.73zM.5 1.5A2 2 0 0 0 0 2.86v18.28a2 2 0 0 0 .5 1.36l.07.07 10.24-10.24v-.24L.57 1.43.5 1.5zM20.32 10.27l-2.93-1.69-3.27 3.27 3.27 3.27 2.96-1.71a2 2 0 0 0 0-3.14zM5.25.46 16.65 7.04l-2.93 2.93L3.18.24A2 2 0 0 1 5.25.46z" />
                      </svg>
                      <div>
                        <span className="appdownload__store-sub">Get it on</span>
                        <span className="appdownload__store-name">Google Play</span>
                      </div>
                    </a>

                    <a
                      href="https://apps.apple.com"
                      target="_blank"
                      rel="noreferrer"
                      className="appdownload__store-btn"
                      aria-label="Download on the App Store"
                    >
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                      </svg>
                      <div>
                        <span className="appdownload__store-sub">Download on the</span>
                        <span className="appdownload__store-name">App Store</span>
                      </div>
                    </a>
                  </div>
                </motion.div>

                {/* ── Right Image ── */}
                <motion.div
                  className="appdownload__visual"
                  initial={{ opacity: 0, x: 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                >
                  <img
                    src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/appDownload/excitedWomenImage.png"
                    alt="Download HLO Drive App"
                    className="appdownload__img"
                  />
                </motion.div>

              </div>
            )}
          </InView>
        </div>
      </section>
    );
  }
}

export default AppDownload;
