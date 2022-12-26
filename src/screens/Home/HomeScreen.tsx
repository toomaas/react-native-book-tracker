import {useTheme} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert, Button, FlatList, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BooksApi from '../../api/openlibrary/books';
import {Book} from '../../api/openlibrary/books/types';
import BookComponent from '../../components/Book';

import styles from './HomeScreen.styles';
import {HomeScreenProps} from './HomeScreen.types';

const HomeScreen: React.FunctionComponent<HomeScreenProps> = props => {
  const {navigation} = props;
  const {colors} = useTheme();

  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await BooksApi().trending();
        setBooks(result.books);
      } catch (error) {
        Alert.alert('Error fetching books', JSON.stringify(error));
      }
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{color: colors.text}}>Home Screen</Text>
      <FlatList
        horizontal
        data={books}
        renderItem={book => {
          return <BookComponent book={book.item} />;
        }}
      />
      <Button
        title="go to book"
        onPress={() => {
          navigation.navigate('BookScreen');
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
