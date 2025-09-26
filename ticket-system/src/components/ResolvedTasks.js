import React from 'react';

const ResolvedTasks = ({ tickets }) => {
  const resolved = tickets.filter(t => t.status === 'Resolved');

  if (resolved.length === 0) {
    return <p style={{ color: '#6b7280' }}>No resolved tasks yet.</p>;
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {resolved.map(t => (
        <div key={t.id} className="resolved-item">
          <div className="row">
            <span className="title">{t.title}</span>
            <span className="status">Resolved</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResolvedTasks;
