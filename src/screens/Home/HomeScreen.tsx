import {useTheme} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert, FlatList, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BooksApi from '../../api/openlibrary/books';
import Work from '../../api/openlibrary/books/model/Work';
import BookComponent from '../../components/Book';

import styles from './HomeScreen.styles';
import {HomeScreenProps} from './HomeScreen.types';

const HomeScreen: React.FunctionComponent<HomeScreenProps> = () => {
  const {colors} = useTheme();

  const [books, setBooks] = useState<Work[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await BooksApi().listTrending();
        setBooks(result.works);
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
    </SafeAreaView>
  );
};

export default HomeScreen;
