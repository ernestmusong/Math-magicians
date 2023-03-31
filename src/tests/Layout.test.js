import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../components/Navbar';

describe('Navbar', () => {
  it('test Header rendering', () => {
    render(
      <BrowserRouter>
        <Layout />
      </BrowserRouter>,
    );
    const headerElement = screen.getByText(/math magicians/i);
    expect(headerElement.textContent).toBe('math magicians');
  });
});
