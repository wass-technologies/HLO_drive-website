import './Marquee.css';

const areas = [
  '📍 Salt Lake', '📍 New Town', '📍 Park Street', '📍 Ballygunge',
  '📍 Howrah', '📍 Dum Dum', '📍 Behala', '📍 Tollygunge',
  '📍 Gariahat', '📍 Esplanade', '📍 Alipore', '📍 Rajarhat',
  '📍 Jadavpur', '📍 Kasba', '📍 Ultadanga', '📍 Shyambazar',
];

export default function Marquee() {
  const items = [...areas, ...areas];
  return (
    <div className="marquee-strip">
      <div className="marquee-track">
        {items.map((a, i) => (
          <span key={i} className="marquee-item">{a}</span>
        ))}
      </div>
    </div>
  );
}
