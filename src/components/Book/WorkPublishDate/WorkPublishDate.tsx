import React from 'react';
import {View} from 'react-native';
import Text from '../../Text';
import styles from './WorkPublishDate.styles';
import {WorkPublishDateProps} from './WorkPublishDate.types';

const WorkPublishDate: React.FunctionComponent<
  WorkPublishDateProps
> = props => {
  const {
    work: {firstPublishYear},
  } = props;

  return (
    <View style={styles.container}>
      <Text>Publish Date</Text>
      <Text style={styles.text}>{firstPublishYear}</Text>
    </View>
  );
};

export default WorkPublishDate;
