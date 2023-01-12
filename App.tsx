import React from 'react';

import RootNavigation from './src/navigation/RootNavigation';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={styles.container}>
        <RootNavigation />
      </GestureHandlerRootView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
