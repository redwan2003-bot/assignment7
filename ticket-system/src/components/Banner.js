import React from 'react';

const cardStyle = (from, to) => ({
  backgroundImage: `url(/vector1.png), linear-gradient(135deg, ${from} 0%, ${to} 100%)`,
  backgroundSize: 'cover, cover',
  backgroundPosition: 'center, center',
  backgroundBlendMode: 'soft-light',
});

const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <div style={{ padding: '0 2rem', marginTop: '1rem', marginBottom: '1.5rem' }}>
      <div className="banner-grid">
        <div className="banner-card" style={cardStyle('#7C3AED', '#6366F1')}>
          <div style={{ opacity: 0.95 }}>In-Progress</div>
          <div className="count">{inProgressCount}</div>
        </div>
        <div className="banner-card" style={cardStyle('#10B981', '#0EA5E9')}>
          <div style={{ opacity: 0.95 }}>Resolved</div>
          <div className="count">{resolvedCount}</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
