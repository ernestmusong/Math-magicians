import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from '../components/Home';

describe('Navbar', () => {
  it('test Header rendering', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    const headerElement = screen.getByText(/Welcome to our page!/i);
    expect(headerElement.textContent).toBe('Welcome to our page!');
  });
});
