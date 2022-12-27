import {useTheme} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Alert, Text, View} from 'react-native';
import WorksApi from '../../api/openlibrary/works';
import BookCover from '../../components/BookCover';
import styles from './BookScreen.styles';
import {BookScreenProps} from './BookScreen.types';

const HomeScreen: React.FunctionComponent<BookScreenProps> = props => {
  const {
    route: {
      params: {work},
    },
  } = props;

  useEffect(() => {
    (async () => {
      try {
        const result = await WorksApi().getWork(work.key);
        console.log(result);
      } catch (error) {
        Alert.alert('Error fetching WORK', JSON.stringify(error));
      }
    })();
  }, [work]);
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <Text style={{color: colors.text}}>Book Screen</Text>
      <BookCover
        uri={`https://covers.openlibrary.org/b/id/${work.coverImageId}-M.jpg`}
      />
    </View>
  );
};

export default HomeScreen;
