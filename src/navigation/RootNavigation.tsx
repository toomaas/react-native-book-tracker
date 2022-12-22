import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BookScreen from '../screens/Book';
import HomeScreen from '../screens/Home';
import {Colors} from '../styles';
import styles from './RootNavigation.styles';
import {RootNavigationParamList} from './RootNavigation.types';

const RootNavigation: React.FunctionComponent = () => {
  const Stack = createNativeStackNavigator<RootNavigationParamList>();

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.DARKER : Colors.LIGHTER,
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen name="BookScreen" component={BookScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default RootNavigation;
