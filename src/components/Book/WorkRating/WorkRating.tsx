import React, {useEffect, useState} from 'react';
import {Alert, View} from 'react-native';
import WorksApi from '../../../api/openlibrary/works';
import Text from '../../Text';
import styles from './WorkRating.styles';
import {WorkRatingProps} from './WorkRating.types';

const WorkRating: React.FunctionComponent<WorkRatingProps> = props => {
  const {
    work: {key},
  } = props;

  const [averageRating, setAverageRating] = useState<number>(0);

  useEffect(() => {
    (async () => {
      try {
        const result = await WorksApi.getInstance().getWorkRatings(key);
        setAverageRating(result.average);
      } catch (error) {
        Alert.alert('Error fetching books', JSON.stringify(error));
      }
    })();
  }, [key]);

  return (
    <View style={styles.container}>
      <Text>Rating</Text>
      <Text style={styles.text}>{averageRating.toPrecision(2)}</Text>
    </View>
  );
};

export default WorkRating;
