import {useNavigation} from '@react-navigation/native';
import {render, fireEvent} from '@testing-library/react-native';
import {Hotel} from '../../../__mocks__/Hotel';
import ListItem from '../ListItem';

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: jest.fn(),
  };
});

describe('ListItem', () => {
  it('navigates to the "Details" route when pressed', () => {
    const navigation = {
      navigate: jest.fn(),
    };
    (useNavigation as jest.Mock).mockReturnValue(navigation);

    const {getByText} = render(<ListItem hotel={Hotel} />);

    fireEvent.press(getByText('Hotel'));

    expect(navigation.navigate).toHaveBeenCalledWith('Details', {
      hotel: Hotel,
    });
  });
});
