import { render, screen } from '@testing-library/react';
import App from './App';

// Mock axios to avoid network errors in CI
jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: [] })),
  post: jest.fn(() => Promise.resolve({ data: {} }))
}));

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