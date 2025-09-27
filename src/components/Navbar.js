import React, { useState } from 'react';

const Navbar = ({ onNewTicket }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar" style={{
      backgroundColor: '#ffffff',
      boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.1)',
      color: 'black',
      padding: '0.25rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontSize: '1rem'
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.25rem'}}>
        CS - Ticket System
      </div>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', position: 'relative' }}>
        <ul className={`nav-menu ${isMenuOpen ? 'mobile-open' : ''}`}>
          <li style={{ cursor: 'pointer' }}>Home</li>
          <li style={{ cursor: 'pointer' }}>FAQ</li>
          <li style={{ cursor: 'pointer' }}>Changelog</li>
          <li style={{ cursor: 'pointer' }}>Blog</li>
          <li style={{ cursor: 'pointer' }}>Download</li>
          <li style={{ cursor: 'pointer' }}>Contact</li>
        </ul>
        <button className="hamburger" onClick={toggleMenu} style={{ display: 'none' }}>
          ☰
        </button>
      </div>
      <button
        onClick={onNewTicket}
        style={{
          background: 'linear-gradient(135deg, #7C3AED 0%, #6366F1 100%)',
          color: 'white',
          padding: '0.5rem 1rem',
          border: 'none',
          borderRadius: '4px',
          fontWeight: 'normal',
          cursor: 'pointer'
        }}
      >
        + New Ticket
      </button>
    </nav>
  );
};

export default Navbar;
