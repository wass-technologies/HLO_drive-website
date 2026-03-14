import { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/main.scss';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app__placeholder" />
        <Footer />
      </div>
    );
  }
}

export default App;
