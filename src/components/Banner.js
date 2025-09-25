import React from 'react';

const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #6a1b9a 0%, #9c27b0 100%)',
      color: 'white',
      padding: '2rem',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      textAlign: 'center',
      marginBottom: '2rem'
    }}>
      <div style={{
        backgroundColor: 'rgba(106, 27, 154, 0.8)',
        padding: '1rem 2rem',
        borderRadius: '8px',
        minWidth: '150px'
      }}>
        <h3 style={{ margin: 0, fontSize: '1.2rem' }}>In Progress</h3>
        <p style={{ margin: '0.5rem 0 0 0', fontSize: '2rem', fontWeight: 'bold' }}>{inProgressCount}</p>
      </div>
      <div style={{
        backgroundColor: 'rgba(76, 175, 80, 0.8)',
        padding: '1rem 2rem',
        borderRadius: '8px',
        minWidth: '150px'
      }}>
        <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Resolved</h3>
        <p style={{ margin: '0.5rem 0 0 0', fontSize: '2rem', fontWeight: 'bold' }}>{resolvedCount}</p>
      </div>
    </div>
  );
};

export default Banner;
