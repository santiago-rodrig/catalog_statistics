import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import App from './App';

test('it renders a link to home', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('home_link')).toBeInTheDocument();
});
