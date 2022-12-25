import {useTheme} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import styles from './BookScreen.styles';
import {BookScreenProps} from './BookScreen.types';

const HomeScreen: React.FunctionComponent<BookScreenProps> = () => {
  useEffect(() => {}, []);
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <Text style={{color: colors.text}}>Book Screen</Text>
    </View>
  );
};

export default HomeScreen;
