import React from 'react';
import {render, cleanup, waitFor} from '@testing-library/react-native';
import App from '../App';
import 'jest-fetch-mock';
import {Hotels} from '../__mocks__/Hotel';
jest.mock('../components/common/Carrousel.tsx', () => 'Carrousel');

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe('App', () => {
  afterEach(cleanup);

  it('renders correctly', async () => {
    fetchMock.mockOnce(JSON.stringify(Hotels));
    const {toJSON} = render(<App />);
    waitFor(() => {
      expect(toJSON()).toMatchSnapshot();
    });
  });

  it('should display the no data message', () => {
    fetchMock.mockOnce(JSON.stringify([]));
    const app = render(<App />);
    expect(app.findByText('no data found :(')).toBeTruthy();
  });
});
