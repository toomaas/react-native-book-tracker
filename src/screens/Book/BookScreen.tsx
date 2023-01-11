import {OPEN_LIBRARY_COVERS_URL} from '@env';
import {useTheme} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert, ImageBackground, ScrollView, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import WorksApi from '../../api/openlibrary/works';
import Work from '../../api/openlibrary/works/model/Work';
import FavouriteButton from '../../components/Book/FavouriteButton';
import WorkPublishDate from '../../components/Book/WorkPublishDate';
import WorkRating from '../../components/Book/WorkRating';
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

  const {colors} = useTheme();

  const [workAdditionalInfo, setWorkAdditionalInfo] = useState<Work>();

  useEffect(() => {
    (async () => {
      try {
        const additionalInfo = await WorksApi.getInstance().getWork(work.key);
        setWorkAdditionalInfo(additionalInfo.work);
      } catch (error) {
        Alert.alert('Error fetching WORK', JSON.stringify(error));
      }
    })();
  }, [work]);

  const uri = `${OPEN_LIBRARY_COVERS_URL}/b/id/${work.coverImageId}-L.jpg`;

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        <ImageBackground
          style={styles.backgroundImage}
          resizeMode="cover"
          blurRadius={20}
          source={{uri}}>
          <BookCover
            style={styles.bookCover}
            coverId={work.coverImageId}
            size="M"
          />
          <Text style={styles.title}>{work.title}</Text>
          <Text style={styles.author}>by {work.authors[0]}</Text>
        </ImageBackground>
        <View
          style={{
            ...styles.horizontalContainer,
            backgroundColor: colors.border,
          }}>
          <WorkRating work={work} />
          <WorkPublishDate work={work} />
        </View>
        {workAdditionalInfo?.description ? (
          <Text style={styles.description}>
            {workAdditionalInfo?.description}
          </Text>
        ) : (
          <Text style={styles.description}>No description available</Text>
        )}
      </ScrollView>
      <FavouriteButton work={work} />
    </SafeAreaView>
  );
};

export default HomeScreen;
