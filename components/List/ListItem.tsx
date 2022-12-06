import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StarRating from '../StarRating';
import UserRating from '../UserRating';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Hotel, RootStackParamList} from '../../types';
import {getCurrencySymbol} from '../../utils/i18n';
import Carrousel from '../Carrousel';

const SPACING = 16;

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
  const width = Dimensions.get('window').width - SPACING * 2;

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <View>
        <Carrousel gallery={gallery} width={width} />
        <View style={styles.info}>
          <Text style={styles.name}>{name}</Text>
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
    paddingBottom: SPACING / 2,
    margin: SPACING,
    borderRadius: 8,
    backgroundColor: 'white',
    overflow: 'hidden',
  },
  info: {
    paddingHorizontal: SPACING,
    paddingVertical: SPACING / 2,
  },
  ratings: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: SPACING / 2,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    textAlign: 'right',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
