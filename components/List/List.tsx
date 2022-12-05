import React, {useEffect, useState} from 'react';
import {View, ActivityIndicator, StyleSheet, FlatList} from 'react-native';
import {Hotel} from '../../types';
import ListItem from './ListItem';

const ENDPOINT = 'https://run.mocky.io/v3/eef3c24d-5bfd-4881-9af7-0b404ce09507';

const List = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Array<Hotel> | undefined>(undefined);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(ENDPOINT);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <ActivityIndicator style={styles.loading} size="large" />;
  }
  const renderItem = ({item}: {item: Hotel}) => (
    <ListItem
      key={item.id}
      name={item.name}
      stars={item.stars}
      score={item.userRating}
      price={item.price}
      currency={item.currency}
      gallery={item.gallery}
    />
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default List;
