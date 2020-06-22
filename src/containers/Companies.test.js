import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import App from '../components/App';

test('it renders a form', () => {
  const { getByTestId } = render(<App />);
  expect(getByTestId('search_form')).toBeInTheDocument();
});

test('it renders a textbox', () => {
  const { getByRole } = render(<App />);
  expect(getByRole('textbox')).toBeInTheDocument();
});
