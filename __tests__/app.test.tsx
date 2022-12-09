import React from 'react';
import {render, waitFor} from '@testing-library/react-native';
import App from '../App';
import 'jest-fetch-mock';
import {Hotels} from '../__mocks__/Hotel';

describe('App', () => {
  it('renders correctly', async () => {
    fetchMock.mockOnce(JSON.stringify(Hotels));
    const app = render(<App />);
    await waitFor(() => {
      app.getAllByTestId('list-item');
    });
    expect(app.toJSON()).toMatchSnapshot();
  });
});
