import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {Hotel} from '../../types';
import ListItem from './ListItem';

interface Props {
  data: Array<Hotel> | undefined;
}
const List = (props: Props) => {
  const {data} = props;

  const renderItem = ({item}: {item: Hotel}) => <ListItem hotel={item} />;
  return (
    <View style={styles.container}>
      {data && data?.length > 0 ? (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      ) : (
        <View style={styles.noResults}>
          <Text style={styles.noResultsText}>No results found :(</Text>
        </View>
      )}
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
  noResults: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  noResultsText: {
    textAlign: 'center',
    fontSize: 16,
  },
});

export default List;
