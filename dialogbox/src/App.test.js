import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders login button', () => {
    render(<App />);
    const buttonElement = screen.getByTestId('login');
    expect(buttonElement).toBeInTheDocument();
  });

  test('opens login dialog on button click', async () => {
    render(<App />);
    const buttonElement = screen.getByTestId('login');
    fireEvent.click(buttonElement);
    const dialogElement = await screen.findByRole('dialog');
    expect(dialogElement).toBeInTheDocument();
  });

  test('renders dia-login button', () => {
    render(<App />);
    const buttonElement = screen.getByTestId('login');
    fireEvent.click(buttonElement);
    const dia_loginbutton = screen.getByTestId('dia-login');
    expect(dia_loginbutton).toBeInTheDocument();
  });

  test('renders cancel button', () => {
    render(<App />);
    const buttonElement = screen.getByTestId('login');
    fireEvent.click(buttonElement);
    const cancelbutton = screen.getByTestId('cancel');
    expect(cancelbutton).toBeInTheDocument();
  });

  test('renders username textfields', () => {
    render(<App />);
    const buttonElement = screen.getByTestId('login');
    fireEvent.click(buttonElement);
    const username = screen.getByTestId('username');
    expect(username).toBeInTheDocument();
  });

  test('renders password textfields', () => {
    render(<App />);
    const buttonElement = screen.getByTestId('login');
    fireEvent.click(buttonElement);
    const password = screen.getByTestId('password');
    expect(password).toBeInTheDocument();
  });  

  test('closes login dialog on cancel', async () => {
    render(<App />);
    const buttonElement = screen.getByTestId('login');
    fireEvent.click(buttonElement);
    const cancelButtonElement = screen.getByTestId('cancel');
    fireEvent.click(cancelButtonElement);
    await waitFor(() => {
      const dialogElement = screen.queryByRole('dialog');
      expect(dialogElement).not.toBeInTheDocument();
    });
  });
});
