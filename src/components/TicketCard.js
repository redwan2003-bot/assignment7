import React from 'react';

const TicketCard = ({ ticket, onCardClick }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return '#f44336'; // Red
      case 'Medium': return '#ff9800'; // Orange
      case 'Low': return '#4caf50'; // Green
      default: return '#9e9e9e';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Open': return '#2196f3'; // Blue
      case 'In Progress': return '#ff9800'; // Orange
      case 'Resolved': return '#4caf50'; // Green
      default: return '#9e9e9e';
    }
  };

  return (
    <div
      onClick={() => onCardClick(ticket.id)}
      style={{
        backgroundColor: 'white',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '1rem',
        marginBottom: '1rem',
        cursor: 'pointer',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        transition: 'box-shadow 0.2s'
      }}
      onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.15)'}
      onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)'}
    >
      <h3 style={{ margin: '0 0 0.5rem 0', color: '#333' }}>{ticket.title}</h3>
      <p style={{ margin: '0 0 0.5rem 0', color: '#666', fontSize: '0.9rem' }}>
        Customer: {ticket.customer}
      </p>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
        <span style={{
          backgroundColor: getPriorityColor(ticket.priority),
          color: 'white',
          padding: '0.2rem 0.5rem',
          borderRadius: '4px',
          fontSize: '0.8rem',
          fontWeight: 'bold'
        }}>
          {ticket.priority}
        </span>
        <span style={{
          backgroundColor: getStatusColor(ticket.status),
          color: 'white',
          padding: '0.2rem 0.5rem',
          borderRadius: '4px',
          fontSize: '0.8rem',
          fontWeight: 'bold'
        }}>
          {ticket.status}
        </span>
      </div>
      <p style={{ margin: '0 0 0.5rem 0', color: '#666', fontSize: '0.85rem' }}>
        {ticket.description}
      </p>
      <p style={{ margin: 0, color: '#999', fontSize: '0.8rem' }}>
        Created: {ticket.createdAt}
      </p>
    </div>
  );
};

export default TicketCard;
