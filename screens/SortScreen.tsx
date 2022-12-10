import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {Picker} from '@react-native-picker/picker';
import {Slider} from '@miblanchard/react-native-slider';
import {Theme} from '../Theme';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types';
import FilterContext from '../context/FilterContext';

type Props = NativeStackScreenProps<RootStackParamList, 'Sort'>;

export default function SortScreen({navigation}: Props) {
  const {filters, setFilters} = useContext(FilterContext);
  const {sort, order, price} = filters;
  function onApplyPress() {
    navigation.goBack();
  }

  function onClearPress() {
    setFilters({
      name: '',
      sort: undefined,
      order: 'descending',
      price: [0, 500],
    });
    navigation.goBack();
  }

  console.log(filters);

  return (
    <View style={styles.container}>
      <View>
        <Text>Sort by:</Text>
        <Picker
          style={styles.picker}
          testID="sort-picker"
          selectedValue={sort}
          onValueChange={itemValue => {
            setFilters(prevFilters => {
              return {
                ...prevFilters,
                sort: itemValue,
              };
            });
          }}>
          <Picker.Item label="None" value={undefined} />
          <Picker.Item label="Rating" value="rating" />
          <Picker.Item label="Stars" value="stars" />
          <Picker.Item label="Price" value="price" />
        </Picker>
        <Text>Order:</Text>
        <Picker
          style={styles.picker}
          selectedValue={order}
          onValueChange={itemValue => {
            setFilters(prevFilters => {
              return {
                ...prevFilters,
                order: itemValue,
              };
            });
          }}>
          <Picker.Item label="Ascending" value="ascending" />
          <Picker.Item label="Descending" value="descending" />
        </Picker>
      </View>
      <View>
        <Text>Price Range:</Text>
        <Text>
          {price[0]} - {price[1]}
        </Text>
        <Slider
          containerStyle={styles.slider}
          value={price}
          minimumValue={0}
          maximumValue={500}
          step={1}
          onValueChange={value => {
            setFilters(prevFilters => {
              return {
                ...prevFilters,
                price: value as number[],
              };
            });
          }}
          thumbTintColor={Theme.colors.primary}
        />
      </View>
      <Button
        title="Apply"
        onPress={onApplyPress}
        color={Theme.colors.primary}
        testID="apply"
      />
      <Text style={styles.textButton} onPress={onClearPress}>
        Clear
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  picker: {
    marginVertical: 15,
    padding: 10,
    width: 250,
  },
  slider: {
    marginVertical: 15,
    padding: 10,
    width: 250,
  },
  textButton: {
    color: Theme.colors.primary,
    fontWeight: 'bold',
    margin: Theme.sizes.large,
  },
});
