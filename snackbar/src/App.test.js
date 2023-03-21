import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import App from './App';
describe('App', () => {

test('renders submit form with correct labels', () => {
  const { getByLabelText } = render(<App />);
  expect(getByLabelText(/name/i)).toBeInTheDocument();
  expect(getByLabelText(/age/i)).toBeInTheDocument();
});

test('clicking the submit button without filling in the form shows no snackbar', () => {
  const { getByTestId, queryByTestId } = render(<App />);
  fireEvent.click(getByTestId('button'));
  expect(queryByTestId('snackbar')).toBeNull();
});

test('submitting the form shows a snackbar', () => {
  render(<App />);
  fireEvent.change(screen.getByTestId('name'),  { value: 'John Doe' });
  fireEvent.change(screen.getByTestId('age'),  { value: '30'  });
  fireEvent.click(screen.getByTestId('button'));
  expect(screen.queryByTestId('snackbar')).toBeNull();
});


test('should render Name and Age input fields', () => {
  render(<App />);
  const nameInput = screen.getByTestId('name');
  const ageInput = screen.getByTestId('age');
  expect(nameInput).toBeInTheDocument();
  expect(ageInput).toBeInTheDocument();
});
});