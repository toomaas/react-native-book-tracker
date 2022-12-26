import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image} from 'react-native';
import {BookScreenProps, ImageDimensions} from './BookCover.types';

const BookCover: React.FunctionComponent<BookScreenProps> = ({uri}) => {
  const [dimensions, setDimensions] = useState<ImageDimensions>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Image.getSize(
      uri,
      (width, height) => {
        setDimensions({height, width});
        setLoading(false);
      },
      () => {
        setLoading(false);
      },
    );
  }, [uri]);

  if (loading === true) {
    return <ActivityIndicator />;
  }

  return (
    <Image
      source={{uri}}
      style={{width: dimensions?.width, height: dimensions?.height}}
    />
  );
};

export default BookCover;