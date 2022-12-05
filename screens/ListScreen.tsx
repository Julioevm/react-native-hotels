import {StyleSheet, View} from 'react-native';
import React from 'react';
import List from '../components/List/List';

export default function ListScreen() {
  return (
    <View style={styles.container}>
      <List />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
