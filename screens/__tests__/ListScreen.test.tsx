import {NavigationContainer} from '@react-navigation/native';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import React from 'react';
import 'jest-fetch-mock';
import {Hotels} from '../../__mocks__/Hotel';
import ListScreen from '../ListScreen';

describe('ListScreen', () => {
  it('should render a header with a search bar and a sort button', async () => {
    fetchMock.mockOnce(JSON.stringify(Hotels));
    const Screen = render(
      <NavigationContainer>
        <ListScreen />
      </NavigationContainer>,
    );
    await waitFor(() => {
      expect(Screen.getByTestId('search-bar')).toBeTruthy();
      expect(Screen.getByTestId('icon-button-sort')).toBeTruthy();
    });
  });
  it('should render ListScreen with 8 items', async () => {
    fetchMock.mockOnce(JSON.stringify(Hotels));
    const Screen = render(
      <NavigationContainer>
        <ListScreen />
      </NavigationContainer>,
    );
    await waitFor(() =>
      expect(Screen.getAllByTestId('list-item')).toHaveLength(8),
    );
  });

  it('should display the no data message', async () => {
    fetchMock.mockOnce(JSON.stringify([]));
    const app = render(
      <NavigationContainer>
        <ListScreen />
      </NavigationContainer>,
    );
    await waitFor(() => {
      expect(app.getByText('No results found :(')).toBeTruthy();
    });
  });

  it('should filter by name', async () => {
    fetchMock.mockOnce(JSON.stringify(Hotels));
    const Screen = render(
      <NavigationContainer>
        <ListScreen />
      </NavigationContainer>,
    );
    await waitFor(() => {
      fireEvent.press(Screen.getByTestId('icon-button-search'));
      fireEvent.changeText(
        Screen.getByTestId('search-bar-input'),
        'KINGS CROSS',
      );
    });
    expect(Screen.getByText('Crowne Plaza LONDON - KINGS CROSS')).toBeTruthy();
  });
});
