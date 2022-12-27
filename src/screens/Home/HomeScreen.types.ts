import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

import {RootNavigationParamList} from '../../navigation/RootNavigation.types';

export type HomeScreenProps = NativeStackScreenProps<
  RootNavigationParamList,
  'HomeScreen'
>;

export type HomeScreenPropsNavigationProp = NativeStackNavigationProp<
  RootNavigationParamList,
  'HomeScreen'
>;
