import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('Button', () => {
  it('increment button should be there', () => {
   render(
      <App />
    );

    const button = screen.getByTestId('increment');
    fireEvent.click(button);
    expect(button).toBeInTheDocument()

  });
  it('decrement button should be there', () => {
    render(
       <App />
     );
 
     const button = screen.getByTestId('decrement');
     fireEvent.click(button);
     expect(button).toBeInTheDocument()
 
   });

});

describe('ClickCounter', () => {
  it('should increment count when button is clicked', () => {
    const { getByText } = render(<App />);
    const button = screen.getByTestId('increment');
    const countDisplay = getByText(/0\b/);

    fireEvent.click(button);

    expect(countDisplay).toHaveTextContent(/1\b/);
  });

  it('should decrement count when button is clicked', () => {
    const { getByText } = render(<App />);
    const button = screen.getByTestId('decrement');
    const countDisplay = getByText(/0\b/);

    fireEvent.click(button);

    expect(countDisplay).toHaveTextContent(/-1\b/);
  });



  

  it('should increment count 2 when button is clicked 2 times', () => {
    const { getByText } = render(<App />);
    const button = screen.getByTestId('increment');
    const countDisplay = getByText(/0\b/);

    fireEvent.click(button);
    fireEvent.click(button);

    expect(countDisplay).toHaveTextContent(/2\b/);
  });


});






