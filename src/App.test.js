import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Customer Tickets header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Customer Tickets/i);
  expect(headerElement).toBeInTheDocument();
});
