import * as React from 'react';
import {Dimensions, Image, StyleSheet, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

interface Props {
  gallery: string[];
}

function Carrousel(props: Props) {
  const {gallery} = props;

  const width = Dimensions.get('window').width;
  return (
    <View>
      <Carousel
        loop
        width={width}
        height={width / 2}
        autoPlay={true}
        data={gallery}
        scrollAnimationDuration={3000}
        renderItem={({index, item}) => (
          <View key={index} style={styles.container}>
            <Image style={styles.image} source={{uri: item}} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default Carrousel;
