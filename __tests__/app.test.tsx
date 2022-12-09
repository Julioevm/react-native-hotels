import React from 'react';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
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

  it('should sort by category', async () => {
    fetchMock.mockOnce(JSON.stringify(Hotels));
    const Screen = render(<App />);
    await waitFor(() => {
      fireEvent.press(Screen.getByTestId('icon-button-sort'));
      fireEvent.press(Screen.getByTestId('apply'));
    });
    const name = Screen.getAllByTestId('list-item-name')[0].children[0];

    expect(name).toBe('Park Plaza London Waterloo');
  });

  it('should sort by stars', async () => {
    fetchMock.mockOnce(JSON.stringify(Hotels));
    const Screen = render(<App />);
    await waitFor(() => {
      fireEvent.press(Screen.getByTestId('icon-button-sort'));
      fireEvent.press(Screen.getByTestId('apply'));
    });
    const name = Screen.getAllByTestId('list-item-name')[0].children[0];

    expect(name).toBe('Park Plaza London Waterloo');
  });
});
