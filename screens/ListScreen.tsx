import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import List from '../components/List/List';
import Header from '../components/Header/Header';
import {Hotel} from '../types';
import {Theme} from '../Theme';

const ENDPOINT = 'https://run.mocky.io/v3/eef3c24d-5bfd-4881-9af7-0b404ce09507';

export default function ListScreen() {
  const [data, setData] = useState<Array<Hotel> | undefined>(undefined);

  const fetchData = async () => {
    try {
      const response = await fetch(ENDPOINT);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <List data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.colors.background,
  },
});
