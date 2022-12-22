import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import styles from './BookScreen.styles';
import {BookScreenProps} from './BookScreen.types';

const HomeScreen: React.FunctionComponent<BookScreenProps> = () => {
  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <Text>Book Screen</Text>
    </View>
  );
};

export default HomeScreen;
