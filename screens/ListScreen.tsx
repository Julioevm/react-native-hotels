import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import List from '../components/List/List';
import Header from '../components/Header/Header';
import {Hotel} from '../types';
import {Theme} from '../Theme';
import FilterContext, {SortOrder} from '../context/FilterContext';

const ENDPOINT = 'https://run.mocky.io/v3/eef3c24d-5bfd-4881-9af7-0b404ce09507';

function sortOrder(order: SortOrder) {
  if (order === 'ascending') {
    return 1;
  } else {
    return -1;
  }
}
export default function ListScreen() {
  const [data, setData] = useState<Array<Hotel> | undefined>(undefined);
  const {filters} = useContext(FilterContext);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(ENDPOINT);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, [ENDPOINT]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const filteredData =
    data
      ?.filter(item =>
        item.name.toLowerCase().includes(filters.name.toLowerCase()),
      )
      .filter(
        item =>
          item.price >= filters.price[0] && item.price <= filters.price[1],
      ) || ([] as Array<Hotel>);

  filteredData.sort((a, b) => {
    if (filters.sort === 'price') {
      return sortOrder(filters.order) * (a.price - b.price);
    } else if (filters.sort === 'rating') {
      return sortOrder(filters.order) * (a.userRating - b.userRating);
    } else if (filters.sort === 'stars') {
      return sortOrder(filters.order) * (a.stars - b.stars);
    } else {
      return 0;
    }
  });

  return (
    <View style={styles.container}>
      <Header />
      {loading ? (
        <ActivityIndicator
          size={'large'}
          color={Theme.colors.primary}
          style={styles.loader}
        />
      ) : (
        <List data={filteredData} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.background,
    flex: 1,
  },
  loader: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
