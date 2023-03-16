import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import Button from '@material-ui/core/Button';

describe('Button', () => {
  it('should call onClick handler when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Button variant="contained" color="primary" onClick={handleClick}>
        Click me
      </Button>
      // <MemoryRouter>
      // <App />
      // </MemoryRouter>
    );

    const button = getByText('Click me');
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
  });
});

describe('ClickCounter', () => {
  it('should increment count when button is clicked', () => {
    const { getByText } = render(<App />);
    const button = getByText('Click me');
    const countDisplay = getByText('Count: 0');

    fireEvent.click(button);

    expect(countDisplay).toHaveTextContent('Count: 1');
  });
});






