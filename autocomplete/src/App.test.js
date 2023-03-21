import React from 'react';
import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import App from './App';


describe('App', () => {


  test('updates name field on change', () => {
    const { getByLabelText } = render(<App />);
    const nameInput = getByLabelText(/name/i);
    fireEvent.change(nameInput, { target: { value: 'DIVAKAR S' } });
    expect(nameInput.value).toBe('DIVAKAR S');
  });

  it('displays name field, fruit autocomplete, and submit button', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('name')).toBeInTheDocument();
    expect(getByTestId('autocomplete')).toBeInTheDocument();
    expect(getByTestId('button')).toBeInTheDocument();
  });

  test('updates fruit autocomplete on change', () => {
    const { getByLabelText } = render(<App />);
    const fruitAutocomplete = getByLabelText(/choose a fruit/i);
    fireEvent.change(fruitAutocomplete, { target: { value: 'Apple' } });
    expect(fruitAutocomplete.value).toBe('Apple');
  });



describe('App', () => {

  test('submits form with name and fruit', () => {
    render(<App />);
    const nameInput = screen.getByLabelText(/name/i);
    fireEvent.change(nameInput, { target: { value: 'Alice' } });
    const fruitInput = screen.getByLabelText(/choose a fruit/i);
    fireEvent.change(fruitInput, { target: { value: 'Apple' } });
    fireEvent.keyDown(fruitInput, { key: 'Enter' });
    const submitButton = screen.getByTestId('button');
    fireEvent.click(submitButton);
    const resultElement = screen.queryByText(/Hello\b/);
    expect(resultElement).toBeInTheDocument();
  });
  
  
});


});
