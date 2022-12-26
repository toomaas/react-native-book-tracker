import {useNavigation, useTheme} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {HomeScreenPropsNavigationProp} from '../../screens/Home/HomeScreen.types';
import BookCover from '../BookCover';
import {BookProps} from './Book.types';

const Book: React.FunctionComponent<BookProps> = props => {
  const {book} = props;
  const {colors} = useTheme();

  const navigation = useNavigation<HomeScreenPropsNavigationProp>();

  useEffect(() => {}, []);

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('BookScreen', {book});
      }}>
      <View style={{margin: 5, alignItems: 'center'}}>
        <BookCover
          uri={`https://covers.openlibrary.org/b/id/${book.coverImageId}-S.jpg`}
        />
        <Text style={{color: colors.text}}>{book.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Book;
