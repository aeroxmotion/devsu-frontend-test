import {Image} from 'react-native';
import {useLayoutEffect, useState} from 'react';

export const useAutoScaleImageHeight = (
  targetWidth: number,
  source: string,
) => {
  const [targetHeight, setTargetHeight] = useState(0);

  useLayoutEffect(() => {
    Image.getSize(source, (width, height) => {
      setTargetHeight((targetWidth / width) * height);
    });
  }, [targetWidth, source]);

  return targetHeight;
};
