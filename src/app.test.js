import { render, screen } from '@testing-library/react';
import App from './app';
import { BrowserRouter as Router } from 'react-router-dom';

test('renders the hangman title', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const linkElement = screen.getByText(/The Hangman Game/i);
  expect(linkElement).toBeInTheDocument();
});
