import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import BooksApi from '../../api/openlibrary/books';
import styles from './HomeScreen.styles';
import {HomeScreenProps} from './HomeScreen.types';

const HomeScreen: React.FunctionComponent<HomeScreenProps> = props => {
  const {navigation} = props;
  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
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
      <Button
        title="go to book"
        onPress={() => {
          navigation.navigate('BookScreen');
        }}
      />
    </View>
  );
};

export default HomeScreen;
