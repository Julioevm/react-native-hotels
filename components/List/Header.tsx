import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

export default function Header() {
  return (
    <View style={styles.header}>
      <TextInput style={styles.search} placeholder="Search..." />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    margin: 8,
    padding: 8,
    borderRadius: 16,
    backgroundColor: 'tomato',
  },
});
