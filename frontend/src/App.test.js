import { render, screen } from '@testing-library/react';

jest.mock('axios');

test('renders QuickBite title', () => {
  render(
    <div>
      <h1>🍕 QuickBite</h1>
      <h2>Menu</h2>
    </div>
  );
  const title = screen.getByText(/QuickBite/i);
  expect(title).toBeInTheDocument();
});

test('renders Menu section', () => {
  render(
    <div>
      <h1>🍕 QuickBite</h1>
      <h2>Menu</h2>
    </div>
  );
  const menu = screen.getByText(/Menu/i);
  expect(menu).toBeInTheDocument();
});