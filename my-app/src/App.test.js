import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// Test the button redirect behavior
test('button click redirects to image URL', () => {
  render(<App />);

  // Mock window.location.href to prevent actual redirect during test
  delete window.location;
  window.location = { href: '' };

  const button = screen.getByText('Click Me to Redirect');
  fireEvent.click(button);

  // Check if window.location.href was set correctly
  expect(window.location.href).toBe('https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg');
});