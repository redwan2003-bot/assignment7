import React from 'react';

const TaskStatus = ({ tickets, onComplete }) => {
  const inProgressTickets = tickets.filter(ticket => ticket.status === 'In Progress');

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {inProgressTickets.length === 0 ? (
        <p style={{ color: '#6b7280' }}>No tasks in progress.</p>
      ) : (
        inProgressTickets.map(ticket => (
          <div
            key={ticket.id}
            className="task-item"
          >
            <h4>{ticket.title}</h4>
            <button
              onClick={() => onComplete(ticket.id)}
              style={{
                width: '100%',
                backgroundColor: '#16a34a',
                border: '1px solid #16a34a',
                color: '#fff',
                borderRadius: 6,
                padding: '10px 12px',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              Complete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskStatus;
