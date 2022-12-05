import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

interface Props {
  name: string;
  stars: number;
  score: number;
  price: number;
  gallery: Array<string>;
}

export default function ListItem(props: Props) {
  const {name, stars, score, price} = props;

  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View>
          <Image style={styles.image} source={{uri: props.gallery[0]}} />
          <Text style={styles.name}>{name}</Text>
          <View style={styles.ratings}>
            <Text>Stars: {stars}</Text>
            <Text>User: {score}</Text>
          </View>
          <Text style={styles.price}>{price}</Text>
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
