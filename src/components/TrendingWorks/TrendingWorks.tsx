import React, {useEffect, useState} from 'react';
import {Alert, View} from 'react-native';
import WorksApi from '../../api/openlibrary/works';
import Work from '../../api/openlibrary/works/model/Work';
import Text from '../Text';
import WorkCarousel from '../WorkCarousel';
import styles from './TrendingWorks.styles';
import {TrendingWorksProps} from './TrendingWorks.types';

const TrendingWorks: React.FunctionComponent<TrendingWorksProps> = () => {
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
    <View>
      <Text style={styles.headerTitle}>Trending Books</Text>
      <WorkCarousel works={works} />
    </View>
  );
};

export default TrendingWorks;
