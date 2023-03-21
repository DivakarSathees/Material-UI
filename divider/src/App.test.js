
import { render } from '@testing-library/react';
import App from './App';

// test('displays correct number of list items', () => {
//   const { getAllByRole } = render(<App />);
//   const listItems = getAllByRole('ListItemText');
//   expect(listItems).toHaveLength(5);
// });

test('each list item has a divider', () => {
  const { getAllByRole } = render(<App />);
  const dividers = getAllByRole('separator');
  expect(dividers).toHaveLength(5);
});
