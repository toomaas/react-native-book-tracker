import {useTheme} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert, Button, FlatList, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import BooksApi from '../../api/openlibrary/books';
import {Book} from '../../api/openlibrary/books/types';
import BookCover from '../../components/BookCover';
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
          return (
            <View style={{margin: 5, alignItems: 'center'}}>
              <BookCover
                uri={`https://covers.openlibrary.org/b/id/${book.item.coverImageId}-S.jpg`}
              />
              <Text style={{color: colors.text}}>{book.item.title}</Text>
            </View>
          );
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
