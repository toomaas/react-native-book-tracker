import {useTheme} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert, FlatList, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import WorksApi from '../../api/openlibrary/works';
import Work from '../../api/openlibrary/works/model/Work';
import BookComponent from '../../components/Book';

import styles from './HomeScreen.styles';
import {HomeScreenProps} from './HomeScreen.types';

const HomeScreen: React.FunctionComponent<HomeScreenProps> = () => {
  const {colors} = useTheme();

  const [works, setWorks] = useState<Work[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await WorksApi().listTrending();
        setWorks(result.works);
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
        data={works}
        renderItem={book => {
          return <BookComponent work={book.item} />;
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
