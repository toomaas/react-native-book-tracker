/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Button, SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import BooksApi from './src/api/openlibrary/books';
import {Colors} from './src/styles';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.DARKER : Colors.LIGHTER,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Button
        title="Get trending"
        onPress={() => {
          BooksApi()
            .trending()
            .then(data => {
              console.log('in view data', data);
            })
            .catch(error => {
              console.log('in view error', error);
            });
        }}
      />
    </SafeAreaView>
  );
};

export default App;
