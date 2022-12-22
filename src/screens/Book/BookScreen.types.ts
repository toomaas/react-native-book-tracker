import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootNavigationParamList} from '../../navigation/RootNavigation.types';

export type BookScreenProps = NativeStackScreenProps<
  RootNavigationParamList,
  'BookScreen'
>;
