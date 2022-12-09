import {render} from '@testing-library/react-native';
import {Hotels} from '../../__mocks__/Hotel';
import DetailsScreen from '../DetailsScreen';
import React from 'react';
jest.mock('../../components/common/Carrousel.tsx', () => 'Carrousel');

describe('DetailsScreen', () => {
  it('should render correctly', () => {
    const route = {
      params: {
        hotel: Hotels[0],
      },
    };
    const {toJSON} = render(<DetailsScreen route={route as any} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
