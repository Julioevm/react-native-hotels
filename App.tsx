import React, {useState} from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListScreen from './screens/ListScreen';
import DetailsScreen from './screens/DetailsScreen';
import {RootStackParamList} from './types';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SortScreen from './screens/SortScreen';
import FilterContext, {Filters, defaultFilter} from './context/FilterContext';
import {Theme} from './Theme';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [filters, setFilters] = useState<Filters>(defaultFilter);
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <GestureHandlerRootView style={{flex: 1}}>
      <FilterContext.Provider value={{filters, setFilters}}>
        <NavigationContainer>
          <StatusBar
            barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            backgroundColor={Theme.colors.secondary}
          />
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: Theme.colors.secondary,
              },
              headerTintColor: '#fff',
            }}>
            <Stack.Screen
              name="Hotels"
              component={ListScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Details"
              component={DetailsScreen}
              options={({route}) => ({
                title: route.params.hotel.name,
                headerTitleStyle: {
                  fontSize: 16,
                  fontWeight: 'bold',
                },
              })}
            />
            <Stack.Screen
              name="Sort"
              component={SortScreen}
              options={{
                headerShown: false,
                presentation: 'modal',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FilterContext.Provider>
    </GestureHandlerRootView>
  );
};

export default App;
