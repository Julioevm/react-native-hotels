import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface Props {
  rating: number;
}

function mapRatingToColor(rating: number): string {
  // Calculate the hue value for the rating
  const hue = 120 * (rating / 10);

  // Return the CSS color string for the calculated hue value
  return `hsl(${hue}, 100%, 70%)`;
}

export default function UserRating(props: Props) {
  const {rating} = props;
  const roundedRating = Math.trunc(rating);
  const color = mapRatingToColor(roundedRating);

  return (
    <View style={styles.container}>
      <Text>User Rating</Text>
      <View style={[styles.ratingBox, {backgroundColor: color}]}>
        <Text adjustsFontSizeToFit={true} style={styles.rating}>
          {roundedRating}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  rating: {
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  ratingBox: {
    alignItems: 'center',
    borderRadius: 4,
    height: 18,
    justifyContent: 'center',
    marginLeft: 6,
    width: 18,
  },
});
