import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import Work from '../../api/openlibrary/works/model/Work';

import {RootNavigationParamList} from '../../navigation/RootNavigation.types';

export type HomeScreenProps = NativeStackScreenProps<
  RootNavigationParamList,
  'HomeScreen'
>;

export type HomeScreenPropsNavigationProp = NativeStackNavigationProp<
  RootNavigationParamList,
  'HomeScreen'
>;

type Subject = {title: string};

export type Subjects = Record<string, Subject>;

export type SubjectWorks = {
  subject: string;
  works: Work[];
};
