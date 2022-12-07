import {
  Button,
  Dimensions,
  StyleSheet,
  Text,
  View,
  Linking,
} from 'react-native';
import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../types';
import StarRating from '../components/common/StarRating';
import UserRating from '../components/common/UserRating';
import Carrousel from '../components/common/Carrousel';
import {getCurrencySymbol} from '../utils/i18n';
import {Theme} from '../Theme';
type Props = {
  route: RouteProp<RootStackParamList, 'Details'>;
};

export default function DetailsScreen({route}: Props) {
  const {
    name,
    stars,
    userRating,
    location,
    gallery,
    contact,
    checkIn,
    checkOut,
    price,
    currency,
  } = route.params.hotel;

  const width = Dimensions.get('window').width - Theme.sizes.large * 2;
  const symbol = getCurrencySymbol(currency);
  const mapURL = `https://www.google.com/maps/search/?api=1&query=${location.latitude},${location.longitude}&zoom=15`;

  function onAddressPress() {
    // Ideally we would embed a map component, but lets just use google maps for the exercise.
    Linking.openURL(mapURL);
  }

  return (
    <View style={styles.container}>
      <Carrousel gallery={gallery} width={width} autoPlay={true} />
      <Text style={styles.title}>{name}</Text>
      <View style={styles.middleWrapper}>
        <StarRating stars={stars} />
        <UserRating rating={userRating} />
        <View>
          <Text style={styles.price}>
            {price} {symbol}
          </Text>
        </View>
      </View>
      <Text style={styles.underline} onPress={onAddressPress}>
        {location.address}, {location.city}
      </Text>
      <View style={styles.section}>
        <Text style={styles.subTitle}>Contact:</Text>
        <Text>Phone: {contact.phoneNumber}</Text>
        <Text>Email: {contact.email}</Text>
        <Text style={styles.subTitle}>Check in:</Text>
        <Text>
          From {checkIn.from} to {checkIn.to}
        </Text>
        <Text style={styles.subTitle}>Check out: </Text>
        <Text>
          From {checkOut.from} to {checkOut.to}
        </Text>
      </View>
      <View style={styles.buttonWrapper}>
        <Button title={'Book Now'} color={'tomato'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Theme.sizes.large,
    backgroundColor: Theme.colors.white,
    paddingTop: 80,
  },
  section: {
    borderRadius: 8,
    backgroundColor: Theme.colors.background,
    padding: Theme.sizes.small,
    marginTop: Theme.sizes.small,
  },
  middleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Theme.sizes.small,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: Theme.sizes.small,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonWrapper: {
    marginTop: Theme.sizes.large,
  },
  underline: {
    textDecorationLine: 'underline',
  },
});
