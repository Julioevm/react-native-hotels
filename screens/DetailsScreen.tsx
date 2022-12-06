import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../types';
import StarRating from '../components/StarRating';
import UserRating from '../components/UserRating';
import Carrousel from '../components/Carrousel';

type Props = {
  route: RouteProp<RootStackParamList, 'Details'>;
};

export default function DetailsScreen({route}: Props) {
  const {name, stars, userRating, gallery} = route.params.hotel;
  return (
    <View style={styles.container}>
      <Carrousel gallery={gallery} />
      <Text style={styles.title}>{name}</Text>
      <View style={styles.ratings}>
        <StarRating stars={stars} />
        <UserRating rating={userRating} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  ratings: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
