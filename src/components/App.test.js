import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import App from './App';

test('it renders a link to home', () => {
  const { getByRole, getByTestId } = render(<App />);
  expect(getByRole('link')).toBeInTheDocument();
  expect(getByTestId('home_link')).toBeInTheDocument();
});
