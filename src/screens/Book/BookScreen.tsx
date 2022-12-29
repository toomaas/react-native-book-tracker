import {OPEN_LIBRARY_COVERS_URL} from '@env';
import {useTheme} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Alert, ImageBackground, ScrollView, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import WorksApi from '../../api/openlibrary/works';
import Work from '../../api/openlibrary/works/model/Work';
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
        const additionalInfo = await WorksApi().getWork(work.key);
        setWorkAdditionalInfo(additionalInfo.work);
      } catch (error) {
        Alert.alert('Error fetching WORK', JSON.stringify(error));
      }
    })();
  }, [work]);

  const uri = `${OPEN_LIBRARY_COVERS_URL}/b/id/${work.coverImageId}-L.jpg`;

  return (
    <SafeAreaView edges={['bottom']}>
      <ScrollView contentContainerStyle={styles.container}>
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
            flexDirection: 'row',
            flex: 1,
            alignContent: 'space-around',
            margin: 20,
            backgroundColor: colors.background,
          }}>
          <WorkRating work={work} />
          <Text style={{flex: 1, textAlign: 'center'}}>
            {work.firstPublishYear}
          </Text>
          <Text style={{flex: 1, textAlign: 'center'}}>
            {work.firstPublishYear}
          </Text>
        </View>
        <Text>{workAdditionalInfo?.description}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
