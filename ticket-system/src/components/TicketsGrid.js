import React from 'react';
import TicketCard from './TicketCard';

const TicketsGrid = ({ tickets, onCardClick }) => {
  // Show both Open and In Progress tickets as in the reference layout
  const visibleTickets = tickets.filter(t => t.status === 'Open' || t.status === 'In Progress');

  return (
    <div className="tickets-grid">
      {visibleTickets.map(ticket => (
        <TicketCard
          key={ticket.id}
          ticket={ticket}
          onCardClick={onCardClick}
        />
      ))}
    </div>
  );
};

export default TicketsGrid;
