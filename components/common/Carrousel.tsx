import * as React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {Theme} from '../../Theme';

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
    alignItems: 'center',
    borderColor: Theme.colors.black,
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
});

export default Carrousel;
