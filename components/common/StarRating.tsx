import {Image, StyleSheet, View} from 'react-native';
import React from 'react';

interface Props {
  stars: number;
}
export default function StarRating(props: Props) {
  const {stars} = props;

  const totalStars = [1, 2, 3, 4, 5].map(star => {
    const active = star <= stars;
    const color = active ? 'orange' : 'gray';

    return (
      <Image
        key={star}
        source={require('../../assets/star-small.png')}
        style={[styles.star, {tintColor: color}]}
      />
    );
  });
  return <View style={styles.container}>{totalStars}</View>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  star: {
    height: 16,
    width: 16,
  },
});
