import { render, screen } from '@testing-library/react';
import Header from '../Header';

test('should render same text', () => {
  render(<Header title={'Todo'} />);
  const linkElement = screen.getByText(/Todo/i);
  expect(linkElement).toBeInTheDocument();
});

// it('should render the same text passed into title prop', () => {
//   render(<Header title={'Todo'} />);
//   const linkElement = screen.getByRole('heading', { name: /Todo/i });
//   expect(linkElement).toBeInTheDocument();
// });

// it('should render the same text passed into title', () => {
//   render(<Header title={'Todo'} />);
//   const linkElement = screen.getByTitle('Header');
//   expect(linkElement).toBeInTheDocument();
// });
// it('should render the same text passed2', () => {
//   render(<Header title={'Todo'} />);
//   const linkElement = screen.getByTestId('header1');
//   expect(linkElement).toBeInTheDocument();
// });

// //FIND BY
// it('should render the same text passed3', async () => {
//   render(<Header title={'Todo'} />);
//   const linkElement = await screen.findByText(/todo/i);
//   expect(linkElement).toBeInTheDocument();
// });
