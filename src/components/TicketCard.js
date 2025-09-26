import React from 'react';

const statusStyles = {
  Open: {
    bg: '#E9FCEF',
    text: '#047857',
    dot: '#16a34a',
    label: 'Open',
  },
  'In Progress': {
    bg: '#FEF3C7',
    text: '#92400E',
    dot: '#f59e0b',
    // Render with hyphen to match the reference image while keeping internal status the same
    label: 'In- Progress',
  },
  Resolved: {
    bg: '#E9FCEF',
    text: '#047857',
    dot: '#16a34a',
    label: 'Resolved',
  },
};

const priorityStyles = {
  High: { color: '#ef4444', label: 'HIGH PRIORITY' },
  Medium: { color: '#f59e0b', label: 'MEDIUM PRIORITY' },
  Low: { color: '#22c55e', label: 'LOW PRIORITY' },
};

const formatDate = (iso) => {
  try {
    const d = new Date(iso);
    const m = d.getMonth() + 1;
    const day = d.getDate();
    const y = d.getFullYear();
    return `${m}/${day}/${y}`;
  } catch {
    return iso;
  }
};

const TicketCard = ({ ticket, onCardClick }) => {
  const s = statusStyles[ticket.status] || statusStyles.Open;
  const p = priorityStyles[ticket.priority] || priorityStyles.Medium;

  return (
    <div
      className="ticket-card"
      onClick={() => onCardClick(ticket.id)}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
        <h3>{ticket.title}</h3>
        <span
          className="status-badge"
          style={{
            background: s.bg,
            color: s.text,
          }}
        >
          <span
            className="dot"
            style={{ background: s.dot }}
          />
          {s.label}
        </span>
      </div>

      <p>{ticket.description}</p>

      <div className="bottom-row">
        <div className="left-bottom">
          <span className="id">{`#${String(ticket.id).padStart(4, '0')}`}</span>
          <span
            className="priority"
            style={{ color: p.color }}
          >{p.label}</span>
        </div>
        <div className="right-bottom">
          <span>{ticket.customer}</span>
          <span className="date-icon">
            <span className="icon">📅</span>
            {formatDate(ticket.createdAt)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
