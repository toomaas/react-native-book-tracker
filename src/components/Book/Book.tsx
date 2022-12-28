import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {HomeScreenPropsNavigationProp} from '../../screens/Home/HomeScreen.types';
import BookCover from '../BookCover';
import Text from '../Text';
import styles from './Book.styles';
import {BookProps} from './Book.types';

const Book: React.FunctionComponent<BookProps> = props => {
  const {work} = props;

  const navigation = useNavigation<HomeScreenPropsNavigationProp>();

  useEffect(() => {}, []);

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('BookScreen', {work});
      }}>
      <View style={styles.container}>
        <BookCover coverId={work.coverImageId} size="M" />
        <Text>{work.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Book;
