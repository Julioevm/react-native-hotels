import {StyleSheet, View} from 'react-native';
import React from 'react';
import IconButton from '../common/IconButton';
import SearchBar from './SearchBar';
import {Theme} from '../../Theme';

export default function Header() {
  return (
    <View style={styles.header}>
      <SearchBar />
      <View style={styles.wrapper}>
        <IconButton title="Filter" onPress={() => {}} spaced />
        <IconButton title="Sort" onPress={() => {}} spaced />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    overflow: 'hidden',
    padding: Theme.sizes.small,
    backgroundColor: Theme.colors.secondary,
  },
  wrapper: {
    flexDirection: 'row',
  },
});
