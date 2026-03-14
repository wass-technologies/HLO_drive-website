import { Component } from 'react';
import './Marquee.scss';

const AREAS = [
  '📍 Salt Lake', '📍 New Town', '📍 Park Street', '📍 Ballygunge',
  '📍 Howrah', '📍 Dum Dum', '📍 Behala', '📍 Tollygunge',
  '📍 Gariahat', '📍 Esplanade', '📍 Alipore', '📍 Rajarhat',
  '📍 Jadavpur', '📍 Kasba', '📍 Ultadanga', '📍 Shyambazar',
];

class Marquee extends Component {
  render() {
    const items = [...AREAS, ...AREAS];
    return (
      <div className="marquee">
        <div className="marquee__track">
          {items.map((area, i) => (
            <span key={i} className="marquee__item">{area}</span>
          ))}
        </div>
      </div>
    );
  }
}

export default Marquee;
