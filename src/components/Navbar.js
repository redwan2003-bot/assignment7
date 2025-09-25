import React from 'react';

const Navbar = ({ onNewTicket }) => {
  return (
    <nav style={{
      backgroundColor: '#6a1b9a',
      color: 'white',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        CS - Ticket System
      </div>
      <ul style={{
        display: 'flex',
        listStyle: 'none',
        margin: 0,
        padding: 0,
        gap: '2rem'
      }}>
        <li style={{ cursor: 'pointer', fontWeight: '500' }}>Home</li>
        <li style={{ cursor: 'pointer', fontWeight: '500' }}>FAQ</li>
        <li style={{ cursor: 'pointer', fontWeight: '500' }}>Blog</li>
        <li style={{ cursor: 'pointer', fontWeight: '500' }}>Download</li>
      </ul>
      <button
        onClick={onNewTicket}
        style={{
          backgroundColor: 'white',
          color: '#6a1b9a',
          padding: '0.5rem 1.5rem',
          border: 'none',
          borderRadius: '4px',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}
      >
        New Ticket
      </button>
    </nav>
  );
};

export default Navbar;
