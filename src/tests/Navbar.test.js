import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('Navbar', () => {
  it('test Header rendering', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );
    const headerElement = screen.getByText(/math magicians/i);
    expect(headerElement.textContent).toBe('math magicians');
  });
});
