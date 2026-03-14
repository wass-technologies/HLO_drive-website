import { Component } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Navbar       from './components/Navbar';
import Hero         from './components/Hero';
import Marquee      from './components/Marquee';
import Stats        from './components/Stats';
import HowItWorks   from './components/HowItWorks';
import Services     from './components/Services';
import WhyHLO       from './components/WhyHLO';
import Testimonials from './components/Testimonials';
import Coverage     from './components/Coverage';
import AppCTA       from './components/AppCTA';
import Footer       from './components/Footer';
import './styles/main.scss';

class App extends Component {
  render() {
    return (
      <HelmetProvider>
        <div className="app">
          <Navbar />
          <main>
            <Hero />
            <Marquee />
            <Stats />
            <HowItWorks />
            <Services />
            <WhyHLO />
            <Testimonials />
            <Coverage />
            <AppCTA />
          </main>
          <Footer />
        </div>
      </HelmetProvider>
    );
  }
}

export default App;
