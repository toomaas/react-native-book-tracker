import React, {useEffect, useState} from 'react';
import {Alert, View} from 'react-native';
import WorksApi from '../../api/openlibrary/works';
import Work from '../../api/openlibrary/works/model/Work';
import BookCover from '../../components/BookCover';
import Text from '../../components/Text';
import styles from './BookScreen.styles';
import {BookScreenProps} from './BookScreen.types';

const HomeScreen: React.FunctionComponent<BookScreenProps> = props => {
  const {
    route: {
      params: {work},
    },
  } = props;

  const [workAdditionalInfo, setWorkAdditionalInfo] = useState<Work>();

  useEffect(() => {
    (async () => {
      try {
        const additionalInfo = await WorksApi().getWork(work.key);
        setWorkAdditionalInfo(additionalInfo.work);
      } catch (error) {
        Alert.alert('Error fetching WORK', JSON.stringify(error));
      }
    })();
  }, [work]);

  return (
    <View style={styles.container}>
      <BookCover coverId={work.coverImageId} size="M" />
      <Text>{work.title}</Text>
      <Text>{workAdditionalInfo?.description}</Text>
    </View>
  );
};

export default HomeScreen;
