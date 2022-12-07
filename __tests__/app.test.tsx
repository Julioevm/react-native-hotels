import React from 'react';
import {render} from '@testing-library/react-native';
import App from '../App';

jest.mock('../components/common/Carrousel.tsx', () => 'Carrousel');

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe('App', () => {
  it('renders correctly', () => {
    const {toJSON} = render(<App />);
    expect(toJSON()).toMatchSnapshot();
  });
});
