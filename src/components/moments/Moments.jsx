import React from 'react';
import './Moments.scss';

const Moments = () => {
  const moments = [
  ];

  return (
    <div className="moments-section">
      <h2>Moments</h2>
      <p className="moments-intro">Snapshots from life, travel, and everything in between.</p>
      {moments.length === 0 && (
        <p className="moments-empty">More moments coming soon.</p>
      )}
    </div>
  );
};

export default Moments;
