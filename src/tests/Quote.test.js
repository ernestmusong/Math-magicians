import { render, act } from '@testing-library/react';
import Quote from '../components/Quote';

global.fetch = require('jest-fetch-mock');

beforeEach(() => {
  fetch.resetMocks();
  fetch.mockResponse(JSON.stringify([{ quote: 'Everything is not ok', author: 'Musong' }]));
});

it('quote renders correctly', async () => {
  const quote = await act(async () => render(<Quote />));

  expect(quote).toMatchSnapshot();
});
