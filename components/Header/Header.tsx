import {StyleSheet, View} from 'react-native';
import React from 'react';
import IconButton from '../common/IconButton';
import SearchBar from './SearchBar';
import {Theme} from '../../Theme';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../types';

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

export default function Header() {
  const navigation = useNavigation<NavigationProps>();
  function onPressSort() {
    navigation.navigate('Sort');
  }
  return (
    <View style={styles.header}>
      <SearchBar />
      <View style={styles.wrapper}>
        <IconButton variant="sort" onPress={onPressSort} spaced />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignContent: 'center',
    backgroundColor: Theme.colors.secondary,
    flexDirection: 'row',
    justifyContent: 'space-between',
    overflow: 'hidden',
    padding: Theme.sizes.small,
  },
  wrapper: {
    flexDirection: 'row',
  },
});
