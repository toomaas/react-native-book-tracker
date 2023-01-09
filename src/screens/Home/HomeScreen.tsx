import React, {useEffect, useRef, useState} from 'react';
import {Alert, Animated, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import WorksApi from '../../api/openlibrary/works';
import Header from '../../components/Home/Header';
import TrendingWorks from '../../components/Home/TrendingWorks';
import WorkCarousel from '../../components/Home/WorkCarousel';
import {HomeScreenProps, Subjects, SubjectWorks} from './HomeScreen.types';

const SUBJECTS: Subjects = {
  romance: {title: 'Romance'},
  programming: {title: 'Programming'},
  classic: {title: 'Classic'},
};

const HomeScreen: React.FunctionComponent<HomeScreenProps> = () => {
  const [subjectsWorks, setSubjectsWorks] = useState<SubjectWorks[]>();

  const offset = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    (async () => {
      try {
        var results: SubjectWorks[] = await Promise.all(
          Object.keys(SUBJECTS).map(async (subject): Promise<SubjectWorks> => {
            const result = await WorksApi().getWorksBySubject(subject);
            return {subject, works: result.works};
          }),
        );

        setSubjectsWorks(results);
      } catch (error) {
        Alert.alert('Error fetching subject works', JSON.stringify(error));
      }
    })();
  }, []);

  return (
    <SafeAreaView edges={['bottom']}>
      <Header animatedValue={offset} />
      <ScrollView
        scrollEventThrottle={1}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: offset}}}],
          {useNativeDriver: false},
        )}>
        <TrendingWorks />
        {subjectsWorks?.map(subjectWorks => (
          <WorkCarousel
            key={`${subjectWorks.subject}-carousel`}
            headerTitle={SUBJECTS[subjectWorks.subject].title}
            works={subjectWorks.works}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
