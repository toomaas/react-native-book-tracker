import React from 'react';
import {Dimensions, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Text from '../../Text';
import BookComponent from '../Book';
import styles from './WorkCarousel.styles';
import {WorkCarouselProps} from './WorkCarousel.types';

const WorkCarousel: React.FunctionComponent<WorkCarouselProps> = ({
  works,
  headerTitle,
}) => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  return (
    <View>
      <Text style={styles.headerTitle}>{headerTitle}</Text>
      <Carousel
        loop={false}
        mode="parallax"
        style={{
          width: width,
        }}
        panGestureHandlerProps={{
          activeOffsetX: [-10, 10],
        }}
        width={width * 0.65}
        height={height * 0.3}
        data={works}
        renderItem={work => {
          return <BookComponent work={work.item} />;
        }}
      />
    </View>
  );
};

export default WorkCarousel;
