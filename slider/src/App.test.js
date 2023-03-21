import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  // it('renders the BMI Calculator title', () => {
  //   const { getByText } = render(<App />);
  //   expect(getByText('BMI Calculator')).toBeInTheDocument();
  // });

  it('renders the slider and input fields for height', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('slider')).toBeInTheDocument();
    expect(getByTestId('height')).toBeInTheDocument();
  });

  it('renders the input field for weight', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('weight')).toBeInTheDocument();
  });

  it('renders the calculate button', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('button')).toBeInTheDocument();
  });


});
