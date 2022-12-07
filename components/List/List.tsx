import React from 'react';
import {View, ActivityIndicator, StyleSheet, FlatList} from 'react-native';
import {Hotel} from '../../types';
import ListItem from './ListItem';

interface Props {
  data: Array<Hotel> | undefined;
}
const List = (props: Props) => {
  const {data} = props;

  if (!data) {
    return <ActivityIndicator style={styles.loading} size="large" />;
  }
  const renderItem = ({item}: {item: Hotel}) => <ListItem hotel={item} />;
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
