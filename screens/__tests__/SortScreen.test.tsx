import {render} from '@testing-library/react-native';
import SortScreen from '../SortScreen';
import React from 'react';

describe('SortScreen', () => {
  it('should render', () => {
    const {toJSON} = render(
      //@ts-ignore ignore the navigation props
      <SortScreen navigation={undefined} route={undefined} />,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
