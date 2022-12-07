import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ListScreen from './screens/ListScreen';
import DetailsScreen from './screens/DetailsScreen';
import {RootStackParamList} from './types';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import SortScreen from './screens/SortScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'gray' : 'white',
  };

  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: 'tomato',
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
    </GestureHandlerRootView>
  );
};

export default App;
