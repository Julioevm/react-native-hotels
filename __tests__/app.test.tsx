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

  it('should sort by rating', async () => {
    fetchMock.mockOnce(JSON.stringify(Hotels));
    const Screen = render(<App />);
    await waitFor(() => {
      fireEvent.press(Screen.getByTestId('icon-button-sort'));
      const picker = Screen.getByTestId('sort-picker');
      fireEvent(picker, 'onValueChange', 'rating');
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
      const picker = Screen.getByTestId('sort-picker');
      fireEvent(picker, 'onValueChange', 'stars');
      fireEvent.press(Screen.getByTestId('apply'));
    });
    const name = Screen.getAllByTestId('list-item-name')[0].children[0];

    expect(name).toBe('Absolute Pleasure Yacht');
  });

  it('should sort by price ascending', async () => {
    fetchMock.mockOnce(JSON.stringify(Hotels));
    const Screen = render(<App />);
    await waitFor(() => {
      fireEvent.press(Screen.getByTestId('icon-button-sort'));
      const pickerCategory = Screen.getByTestId('sort-picker');
      fireEvent(pickerCategory, 'onValueChange', 'price');
      const pickerOrder = Screen.getByTestId('order-picker');
      fireEvent(pickerOrder, 'onValueChange', 'ascending');
      fireEvent.press(Screen.getByTestId('apply'));
    });
    const name = Screen.getAllByTestId('list-item-name')[0].children[0];

    expect(name).toBe('Absolute Pleasure Yacht');
  });
});
