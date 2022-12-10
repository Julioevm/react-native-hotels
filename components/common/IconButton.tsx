import {Image, Pressable, StyleSheet} from 'react-native';
import React from 'react';
import {Theme} from '../../Theme';

const iconVariants = {
  search: {
    title: 'Search',
    icon: require('../../assets/search.png'),
  },
  sort: {
    title: 'Sort',
    icon: require('../../assets/sort.png'),
  },
  close: {
    title: 'Close',
    icon: require('../../assets/close.png'),
  },
};

type IconVariant = keyof typeof iconVariants;

interface Props {
  variant: IconVariant;
  onPress: () => void;
  spaced?: boolean;
}
export default function IconButton(props: Props) {
  const {variant, onPress, spaced} = props;

  return (
    <Pressable
      android_ripple={{color: Theme.colors.secondary}}
      style={[styles.button, spaced ? styles.spaced : null]}
      onPress={onPress}
      accessibilityLabel={iconVariants[variant].title}
      testID={`icon-button-${variant}`}>
      <Image source={iconVariants[variant].icon} style={styles.icon} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    height: 44,
    justifyContent: 'center',
    width: 44,
  },
  icon: {
    height: 24,
    width: 24,
  },
  spaced: {
    marginLeft: Theme.sizes.medium,
  },
});
