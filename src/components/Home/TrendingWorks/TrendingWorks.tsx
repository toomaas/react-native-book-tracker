import React, {useEffect, useState} from 'react';
import {Alert, View} from 'react-native';
import WorksApi from '../../../api/openlibrary/works';
import Work from '../../../api/openlibrary/works/model/Work';
import WorkCarousel from '../WorkCarousel';
import {TrendingWorksProps} from './TrendingWorks.types';

const TrendingWorks: React.FunctionComponent<TrendingWorksProps> = () => {
  const [works, setWorks] = useState<Work[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await WorksApi.getInstance().listTrending();
        setWorks(result.works);
      } catch (error) {
        Alert.alert('Error fetching books', JSON.stringify(error));
      }
    })();
  }, []);

  return (
    <View>
      <WorkCarousel headerTitle="Trending Books" works={works} />
    </View>
  );
};

export default TrendingWorks;
