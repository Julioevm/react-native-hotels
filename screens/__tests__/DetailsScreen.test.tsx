import {render} from '@testing-library/react-native';
import {Hotel} from '../../__mocks__/Hotel';
import DetailsScreen from '../DetailsScreen';

jest.mock('../../components/Carrousel.tsx', () => 'Carrousel');

describe('DetailsScreen', () => {
  it('should render correctly', () => {
    const route = {
      params: {
        hotel: Hotel,
      },
    };
    const {toJSON} = render(<DetailsScreen route={route as any} />);
    expect(toJSON()).toMatchSnapshot();
  });
});
