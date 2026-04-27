import { render, screen } from '@testing-library/react';
import App from './App';

test('renders QuickBite title', () => {
  render(<App />);
  const title = screen.getByText(/QuickBite/i);
  expect(title).toBeInTheDocument();
});

test('renders Menu section', () => {
  render(<App />);
  const menu = screen.getByText(/Menu/i);
  expect(menu).toBeInTheDocument();
});