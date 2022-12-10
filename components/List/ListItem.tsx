import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StarRating from '../common/StarRating';
import UserRating from '../common/UserRating';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Hotel, RootStackParamList} from '../../types';
import {getCurrencySymbol} from '../../utils/i18n';
import Carrousel from '../common/Carrousel';
import {Theme} from '../../Theme';

interface Props {
  hotel: Hotel;
}

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export default function ListItem(props: Props) {
  const {name, stars, userRating, price, currency, gallery} = props.hotel;
  const navigation = useNavigation<NavigationProps>();

  function onPress() {
    navigation.navigate('Details', {
      hotel: props.hotel,
    });
  }
  const width = Dimensions.get('window').width - Theme.sizes.large * 2;

  return (
    <Pressable
      onPress={onPress}
      style={styles.container}
      android_ripple={{color: Theme.colors.primary}}
      testID="list-item">
      <View>
        <Carrousel gallery={gallery} width={width} />
        <View style={styles.info}>
          <Text style={styles.name} testID="list-item-name">
            {name}
          </Text>
          <View style={styles.ratings}>
            <StarRating stars={stars} />
            <UserRating rating={userRating} />
          </View>
          <Text style={styles.price}>{`${price} ${getCurrencySymbol(
            currency,
          )}`}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: Theme.sizes.large,
    overflow: 'hidden',
    paddingBottom: Theme.sizes.small,
  },
  info: {
    paddingHorizontal: Theme.sizes.large,
    paddingVertical: Theme.sizes.small,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
  },
  ratings: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: Theme.sizes.small,
  },
});
