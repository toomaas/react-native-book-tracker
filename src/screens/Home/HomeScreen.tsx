import React, {useEffect, useState} from 'react';
import {Alert, ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import WorksApi from '../../api/openlibrary/works';
import TrendingWorks from '../../components/Home/TrendingWorks';
import WorkCarousel from '../../components/Home/WorkCarousel';

import styles from './HomeScreen.styles';
import {HomeScreenProps, SubjectWorks} from './HomeScreen.types';

const SUBJECTS = ['romance', 'programming', 'classic'];

const HomeScreen: React.FunctionComponent<HomeScreenProps> = () => {
  const [subjectsWorks, setSubjectsWorks] = useState<SubjectWorks[]>();

  useEffect(() => {
    (async () => {
      try {
        var results: SubjectWorks[] = await Promise.all(
          SUBJECTS.map(async (subject): Promise<SubjectWorks> => {
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
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <TrendingWorks />
        {subjectsWorks?.map(subjectWorks => (
          <WorkCarousel
            key={`${subjectWorks.subject}-carousel`}
            headerTitle={subjectWorks.subject}
            works={subjectWorks.works}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
