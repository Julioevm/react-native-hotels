import {NavigationContainer} from '@react-navigation/native';
import {render, waitFor} from '@testing-library/react-native';
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
});
