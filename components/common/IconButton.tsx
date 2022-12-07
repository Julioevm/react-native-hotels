import {Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import {Theme} from '../../Theme';

interface Props {
  title: string;
  onPress: () => void;
  spaced?: boolean;
}
export default function IconButton(props: Props) {
  const {title, onPress, spaced} = props;
  return (
    <Pressable
      android_ripple={{color: Theme.colors.secondary}}
      style={[styles.button, spaced ? styles.spaced : null]}
      onPress={onPress}
      accessibilityLabel={title}>
      <Text>{title[0]}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Theme.colors.white,
    color: Theme.colors.white,
    borderRadius: 32,
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spaced: {
    marginLeft: Theme.sizes.small,
  },
});
