import {StyleSheet, View} from 'react-native';
import React, {useContext, useState} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import Animated, {
  LightSpeedInLeft,
  LightSpeedOutLeft,
  Layout,
} from 'react-native-reanimated';
import IconButton from '../common/IconButton';
import FilterContext from '../../context/FilterContext';

export default function SearchBar() {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const {filters, setFilters} = useContext(FilterContext);

  const handleSearchButtonPress = () => {
    setShowSearchBar(!showSearchBar);
  };

  function setFilterText(text: string) {
    setFilters(prevFilters => {
      return {
        ...prevFilters,
        name: text,
      };
    });
  }

  return (
    <View>
      <Animated.View layout={Layout} style={styles.searchWrapper}>
        {showSearchBar && (
          <Animated.View
            style={styles.searchBar}
            layout={Layout}
            entering={LightSpeedInLeft}
            exiting={LightSpeedOutLeft}>
            <TextInput
              value={filters.name}
              onChangeText={setFilterText}
              autoFocus={true}
              onSubmitEditing={handleSearchButtonPress}
            />
          </Animated.View>
        )}
        <Animated.View layout={Layout}>
          <IconButton variant="search" onPress={handleSearchButtonPress} />
        </Animated.View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchWrapper: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 32,
    overflow: 'hidden',
  },
  searchBar: {
    paddingHorizontal: 8,
    height: 44,
    width: '85%', //Theres a better way to do this, Im sure.
  },
});
