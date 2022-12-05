import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import List from './components/List/List';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? 'gray' : 'white',
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <List />
    </SafeAreaView>
  );
};

export default App;
