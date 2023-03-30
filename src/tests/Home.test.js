import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Home from '../components/Home';

describe('Home', () => {
  test('should render the home component', () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should have a heading text', () => {
    render(<Home />);
    const headingElement = screen.getByText(/Welcome to our page!/i);
    expect(headingElement).toBeInTheDocument();
  });
});
