import React, {useEffect, useState} from 'react';
import {Alert, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import WorksApi from '../../api/openlibrary/works';
import Work from '../../api/openlibrary/works/model/Work';
import TrendingWorks from '../../components/Home/TrendingWorks';
import WorkCarousel from '../../components/WorkCarousel';

import styles from './HomeScreen.styles';
import {HomeScreenProps} from './HomeScreen.types';

const HomeScreen: React.FunctionComponent<HomeScreenProps> = () => {
  const [works2, setWorks2] = useState<Work[]>([]);

  useEffect(() => {
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
      <ScrollView>
        <TrendingWorks />
        <WorkCarousel works={works2} />
        <WorkCarousel works={works2} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
