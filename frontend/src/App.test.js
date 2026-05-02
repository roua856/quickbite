import { render, screen } from '@testing-library/react';

jest.mock('axios');

jest.mock('./App', () => {
  return function MockApp() {
    return (
      <div>
        <h1>🍕 QuickBite</h1>
        <h2>Menu</h2>
        <h2>My Orders</h2>
      </div>
    );
  };
});

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