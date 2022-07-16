import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Followers from '../Followers';

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <Followers />
    </BrowserRouter>
  );
};

describe('Followers', () => {
  it('should render follower items', async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId('follower-0');
    expect(followerDivElement).toBeInTheDocument();
  });
  it('should render multiple follower items', async () => {
    render(<MockFollowersList />);
    const followerDivElements = await screen.findAllByTestId(/follower/i);
    expect(followerDivElements.length).toBe(5);
  });
});
