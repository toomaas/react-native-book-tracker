import {ImageStyle, StyleProp} from 'react-native';

export type BookCoverProps = {
  coverId: number;
  size: 'S' | 'M' | 'L';
  style?: StyleProp<ImageStyle>;
};

export type ImageDimensions = {
  width: number;
  height: number;
};
