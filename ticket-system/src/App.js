import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TicketsGrid from './components/TicketsGrid';
import TaskStatus from './components/TaskStatus';
import Footer from './components/Footer';
import ResolvedTasks from './components/ResolvedTasks';
import sampleTickets from './data/sampleTickets';
import './App.css';

function App() {
  const [tickets, setTickets] = useState(sampleTickets);
  const [inProgressCount, setInProgressCount] = useState(0);
  const [resolvedCount, setResolvedCount] = useState(0);

  const moveToInProgress = (id) => {
    setTickets(prevTickets =>
      prevTickets.map(ticket =>
        ticket.id === id
          ? { ...ticket, status: 'In Progress' }
          : ticket
      )
    );
    setInProgressCount(prev => prev + 1);
    toast.success('Ticket added to in-progress!');
  };

  const completeTicket = (id) => {
    setTickets(prevTickets =>
      prevTickets.map(ticket =>
        ticket.id === id
          ? { ...ticket, status: 'Resolved' }
          : ticket
      )
    );
    setInProgressCount(prev => prev - 1);
    setResolvedCount(prev => prev + 1);
    toast.success('Ticket resolved!');
  };

  const handleNewTicket = () => {
    toast.info('New ticket creation coming soon!');
  };

  return (
    <div className="App">
      <Navbar onNewTicket={handleNewTicket} />
      <Banner inProgressCount={inProgressCount} resolvedCount={resolvedCount} />
      <main className="main-content">
        <section className="tickets-section">
          <h2 className="section-header">Customer Tickets</h2>
          <TicketsGrid tickets={tickets} onCardClick={moveToInProgress} />
        </section>
        <section className="status-section">
          <h2 className="section-header">Task Status</h2>
          <TaskStatus tickets={tickets} onComplete={completeTicket} />
          <h3 className="subsection-header">Resolved Tasks</h3>
          <ResolvedTasks tickets={tickets} />
        </section>
      </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
    </div>
  );
}

export default App;
