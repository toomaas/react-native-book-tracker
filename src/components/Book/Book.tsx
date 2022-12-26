import {useTheme} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import BookCover from '../BookCover';
import {BookProps} from './Book.types';

const Book: React.FunctionComponent<BookProps> = props => {
  const {book} = props;
  const {colors} = useTheme();

  useEffect(() => {}, []);

  return (
    <View style={{margin: 5, alignItems: 'center'}}>
      <BookCover
        uri={`https://covers.openlibrary.org/b/id/${book.coverImageId}-S.jpg`}
      />
      <Text style={{color: colors.text}}>{book.title}</Text>
    </View>
  );
};

export default Book;
