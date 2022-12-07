import * as React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

interface Props {
  gallery: string[];
  width: number;
  height?: number;
  autoPlay?: boolean;
}

function Carrousel(props: Props) {
  const {gallery, autoPlay = false, width, height = width / 2} = props;

  return (
    <View>
      <Carousel
        loop
        width={width}
        height={height}
        autoPlay={autoPlay}
        data={gallery}
        scrollAnimationDuration={3000}
        renderItem={({index, item}) => (
          <View key={index} style={styles.container}>
            <Image style={styles.image} source={{uri: item}} />
          </View>
        )}
        panGestureHandlerProps={{
          activeOffsetX: [-10, 10],
        }}
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
