import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootNavigationParamList} from '../../navigation/RootNavigation.types';

export type HomeScreenProps = NativeStackScreenProps<
  RootNavigationParamList,
  'HomeScreen'
>;
