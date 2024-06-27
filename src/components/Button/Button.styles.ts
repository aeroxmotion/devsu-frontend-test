import {StyleSheet} from 'react-native';

import {type UseButtonStylesProps} from './Button.types';

export const useButtonStyles = (props: UseButtonStylesProps) =>
  StyleSheet.create({
    touchable: {
      borderRadius: 6,
      backgroundColor: props.background,
      padding: 12,
    },
    text: {
      color: props.color,
      textAlign: 'center',
      fontSize: 12,
      fontWeight: 'bold',
    },
  });
