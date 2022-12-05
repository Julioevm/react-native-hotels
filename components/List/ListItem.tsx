import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import StarRating from '../StarRating';
import UserRating from '../UserRating';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Hotel, RootStackParamList} from '../../types';

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

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View>
          <Image style={styles.image} source={{uri: gallery[0]}} />
          <Text style={styles.name}>{name}</Text>
          <View style={styles.ratings}>
            <StarRating stars={stars} />
            <UserRating rating={userRating} />
          </View>
          <Text style={styles.price}>{`${price} ${currency}`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  image: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  ratings: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    textAlign: 'right',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
