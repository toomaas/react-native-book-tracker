import React, {useEffect, useState} from 'react';
import {Alert, Dimensions} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {SafeAreaView} from 'react-native-safe-area-context';
import WorksApi from '../../api/openlibrary/works';
import Work from '../../api/openlibrary/works/model/Work';
import BookComponent from '../../components/Book';
import Text from '../../components/Text';

import styles from './HomeScreen.styles';
import {HomeScreenProps} from './HomeScreen.types';

const HomeScreen: React.FunctionComponent<HomeScreenProps> = () => {
  const [works, setWorks] = useState<Work[]>([]);
  const [works2, setWorks2] = useState<Work[]>([]);

  const width = Dimensions.get('window').width;

  useEffect(() => {
    (async () => {
      try {
        const result = await WorksApi().listTrending();
        setWorks(result.works);
      } catch (error) {
        Alert.alert('Error fetching books', JSON.stringify(error));
      }
    })();
    (async () => {
      try {
        const result = await WorksApi().getWorksBySubject('love');
        setWorks2(result.works);
      } catch (error) {
        Alert.alert('Error fetching books2', JSON.stringify(error));
      }
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Home Screen</Text>
      <Carousel
        loop={false}
        mode="parallax"
        style={{
          width: width,
        }}
        width={width * 0.7}
        height={width * 0.8}
        data={works}
        renderItem={work => {
          return <BookComponent work={work.item} />;
        }}
      />
      <Carousel
        loop={false}
        mode="parallax"
        style={{
          width: width,
        }}
        width={width * 0.7}
        height={width * 0.8}
        data={works2}
        renderItem={work => {
          return <BookComponent work={work.item} />;
        }}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
