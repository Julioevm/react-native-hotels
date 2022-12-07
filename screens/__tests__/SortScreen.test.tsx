import {render} from '@testing-library/react-native';
import SortScreen from '../SortScreen';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

describe('SortScreen', () => {
  it('should render', () => {
    const {toJSON} = render(
      <NavigationContainer>
        <SortScreen />
      </NavigationContainer>,
    );
    expect(toJSON).toMatchSnapshot();
  });
});
