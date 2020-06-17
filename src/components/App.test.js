import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('it renders hello world', () => {
  render(<App />);
  expect(screen.getByText(/hello world/i)).toBeInTheDocument()
});