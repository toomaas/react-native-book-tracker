import {useTheme} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert, Text, View} from 'react-native';
import WorksApi from '../../api/openlibrary/works';
import Work from '../../api/openlibrary/works/model/Work';
import BookCover from '../../components/BookCover';
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
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <BookCover coverId={work.coverImageId} size="M" />
      <Text style={{color: colors.text}}>{work.title}</Text>
      <Text style={{color: colors.text}}>
        {workAdditionalInfo?.description}
      </Text>
    </View>
  );
};

export default HomeScreen;
