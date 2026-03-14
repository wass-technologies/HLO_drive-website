import { Component } from 'react';
import Header   from './components/Header';
import Hero     from './components/Hero';
import Features from './components/Features';
import Footer   from './components/Footer';
import './styles/main.scss';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <main>
          <Hero />
          <Features />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
