import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../types';

type Props = {
  route: RouteProp<RootStackParamList, 'Details'>;
};

export default function DetailsScreen({route}: Props) {
  const {hotel} = route.params;
  return (
    <View style={styles.container}>
      <Text>{hotel.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
