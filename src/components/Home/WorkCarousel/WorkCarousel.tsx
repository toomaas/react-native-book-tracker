import React from 'react';
import {Dimensions} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import BookComponent from '../Book';
import {WorkCarouselProps} from './WorkCarousel.types';

const WorkCarousel: React.FunctionComponent<WorkCarouselProps> = ({works}) => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  return (
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
  );
};

export default WorkCarousel;
