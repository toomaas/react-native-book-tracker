import {OPEN_LIBRARY_COVERS_URL} from '@env';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image} from 'react-native';
import {BookCoverProps, ImageDimensions} from './BookCover.types';

const BookCover: React.FunctionComponent<BookCoverProps> = ({
  coverId,
  size,
  style,
}) => {
  const [dimensions, setDimensions] = useState<ImageDimensions>();
  const [loading, setLoading] = useState(true);

  const uri = `${OPEN_LIBRARY_COVERS_URL}/b/id/${coverId}-${size}.jpg`;

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
      style={[style, {width: dimensions?.width, height: dimensions?.height}]}
    />
  );
};

export default BookCover;
