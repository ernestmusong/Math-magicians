import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import Error from '../components/Error';

describe('Error', () => {
  test('should render the Error component', () => {
    const tree = renderer.create(<Error />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should have a text of Ooops!', () => {
    render(<Error />);
    const errorElement = screen.getByText(/Oops!/i);
    expect(errorElement).toBeInTheDocument();
  });
});
